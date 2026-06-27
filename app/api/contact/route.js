import { writeClient } from '../../../sanity/lib/client'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

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

    try {
      await resend.emails.send({
        from: 'Global Point Partners <onboarding@resend.dev>',
        to: 'mlau1@globalpointpartners.com',
        subject: `New contact form submission from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\n\nMessage:\n${message}`,
      })
    } catch (emailErr) {
      console.error('Email notification failed:', emailErr)
    }

    return Response.json({ success: true })
  } catch (err) {
    console.error('Contact submission error:', err)
    return Response.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
