import { writeClient } from '../../../sanity/lib/client'

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json()

    if (!name || !email || !message) {
      return Response.json({ error: 'Name, email, and message are required' }, { status: 400 })
    }

    await writeClient.create({
      _type: 'contactSubmission',
      name,
      email,
      phone: phone || '',
      message,
      submittedAt: new Date().toISOString(),
    })

    return Response.json({ success: true })
  } catch (err) {
    console.error('Contact submission error:', err)
    return Response.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
