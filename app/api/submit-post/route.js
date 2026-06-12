import { writeClient } from '../../../sanity/lib/client'

export async function POST(request) {
  try {
    const { submitterName, submitterEmail, title, content } = await request.json()

    if (!submitterName || !submitterEmail || !title || !content) {
      return Response.json({ error: 'All fields are required' }, { status: 400 })
    }

    await writeClient.create({
      _type: 'blogSubmission',
      submitterName,
      submitterEmail,
      title,
      content,
      submittedAt: new Date().toISOString(),
      status: 'pending',
    })

    return Response.json({ success: true })
  } catch (err) {
    console.error('Submission error:', err)
    return Response.json({ error: 'Failed to save submission' }, { status: 500 })
  }
}
