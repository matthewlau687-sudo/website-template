'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function SubmitPostPage() {
  const [form, setForm] = useState({
    submitterName: '',
    submitterEmail: '',
    title: '',
    content: '',
  })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/submit-post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="max-w-2xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold text-zinc-900 mb-3">Submitted!</h2>
        <p className="text-zinc-600 mb-6">
          Thanks for your submission. It will be reviewed before publishing.
        </p>
        <Link href="/blog" className="text-sm font-medium underline underline-offset-2">
          Back to Blog
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <Link
        href="/blog"
        className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors mb-8 inline-block"
      >
        ← Back to Blog
      </Link>
      <h1 className="text-3xl font-bold text-zinc-900 mb-2">Submit a Post</h1>
      <p className="text-zinc-500 text-sm mb-10">
        Your post will be reviewed before it appears on the site.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              name="submitterName"
              value={form.submitterName}
              onChange={handleChange}
              required
              className="w-full border border-zinc-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-1">
              Your Email <span className="text-red-500">*</span>
            </label>
            <input
              name="submitterEmail"
              type="email"
              value={form.submitterEmail}
              onChange={handleChange}
              required
              className="w-full border border-zinc-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">
            Post Title <span className="text-red-500">*</span>
          </label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            required
            className="w-full border border-zinc-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-1">
            Content <span className="text-red-500">*</span>
          </label>
          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            required
            rows={12}
            className="w-full border border-zinc-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-zinc-900 resize-y"
          />
        </div>

        {status === 'error' && (
          <p className="text-red-600 text-sm">
            Something went wrong. Please try again.
          </p>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="self-start px-6 py-2.5 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:bg-zinc-700 transition-colors disabled:opacity-50"
        >
          {status === 'loading' ? 'Submitting…' : 'Submit Post'}
        </button>
      </form>
    </div>
  )
}
