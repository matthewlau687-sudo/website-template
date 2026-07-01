import puppeteer from 'puppeteer'
import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET || 'production',
  token: process.env.SANITY_API_WRITE_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
})

const items = await client.fetch(
  `*[_type == "galleryImage" && defined(siteUrl)] { _id, siteUrl, title }`
)

if (items.length === 0) {
  console.log('No gallery items with a site URL found.')
  process.exit(0)
}

console.log(`Found ${items.length} item(s) to screenshot.`)

const browser = await puppeteer.launch({
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
})

for (const item of items) {
  try {
    console.log(`Screenshotting: ${item.title || item._id} — ${item.siteUrl}`)
    const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 960 })
    await page.goto(item.siteUrl, { waitUntil: 'networkidle2', timeout: 30000 })
    const screenshot = await page.screenshot({ type: 'png' })
    await page.close()

    const asset = await client.assets.upload('image', Buffer.from(screenshot), {
      filename: `screenshot-${item._id}.png`,
      contentType: 'image/png',
    })

    await client
      .patch(item._id)
      .set({
        autoScreenshot: {
          _type: 'image',
          asset: { _type: 'reference', _ref: asset._id },
        },
      })
      .commit()

    console.log(`✓ Updated: ${item.title || item._id}`)
  } catch (err) {
    console.error(`✗ Failed: ${item.title || item._id} — ${err.message}`)
  }
}

await browser.close()
console.log('Done.')
