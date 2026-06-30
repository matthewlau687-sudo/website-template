import { client } from '../../sanity/lib/client'
import { galleryQuery } from '../../sanity/lib/queries'
import { urlFor } from '../../sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import FadeIn from '../components/FadeIn'

export const revalidate = 0

export const metadata = { title: 'Portfolio — Global Point Partners' }

function getImageSrc(item) {
  if (item.image) return urlFor(item.image).width(800).height(600).url()
  if (item.siteUrl) return `https://image.thum.io/get/width/800/crop/600/${item.siteUrl}`
  return null
}

export default async function GalleryPage() {
  const images = await client.fetch(galleryQuery)

  return (
    <div className="bg-white text-black">

      <section className="bg-blue-950 text-white">
        <div className="max-w-5xl mx-auto px-6 py-28 text-center">
          <FadeIn>
            <p className="text-sm font-semibold tracking-widest text-zinc-300 uppercase mb-4">Our Work</p>
            <h1 className="text-4xl font-bold mb-6">Portfolio</h1>
            <p className="text-zinc-300 text-lg max-w-xl mx-auto">
              A selection of websites and digital projects delivered for small businesses across a range of industries.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">
        {images.length === 0 ? (
          <FadeIn>
            <p className="text-zinc-400 text-center py-20">Portfolio coming soon.</p>
          </FadeIn>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((item, i) => {
              const src = getImageSrc(item)
              return (
                <FadeIn key={item._id} delay={(i % 3) * 100}>
                  <div className="group rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-lg transition-shadow duration-300">
                    <div className="relative aspect-[4/3] bg-zinc-100 overflow-hidden">
                      {src ? (
                        <Image
                          src={src}
                          alt={item.title || 'Project screenshot'}
                          fill
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-zinc-300 text-sm">No image</div>
                      )}
                    </div>
                    <div className="p-5">
                      {item.title && <p className="font-semibold text-zinc-900 mb-1">{item.title}</p>}
                      {item.description && <p className="text-sm text-zinc-500 leading-relaxed">{item.description}</p>}
                      {item.siteUrl && (
                        <a
                          href={item.siteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block mt-3 text-sm font-medium text-blue-950 hover:underline underline-offset-2"
                        >
                          View site →
                        </a>
                      )}
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        )}
      </section>

      <section className="bg-blue-950 text-white">
        <div className="max-w-5xl mx-auto px-6 py-24 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-4">Interested in a professional website for your business?</h2>
            <p className="text-zinc-300 mb-8">Contact us to discuss your project and receive a custom proposal.</p>
            <Link href="/contact" className="px-6 py-3 bg-white text-black text-sm font-medium rounded-lg hover:bg-blue-50 transition-colors">
              Get in Touch
            </Link>
          </FadeIn>
        </div>
      </section>

    </div>
  )
}
