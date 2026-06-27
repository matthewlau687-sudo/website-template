'use client'

import { useState } from 'react'
import FadeIn from '../components/FadeIn'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
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
      <div className="bg-white min-h-screen">
        <section className="bg-blue-950 text-white">
          <div className="max-w-3xl mx-auto px-6 py-28 text-center">
            <FadeIn>
              <h1 className="text-4xl font-bold">Message Received</h1>
            </FadeIn>
          </div>
        </section>
        <div className="max-w-xl mx-auto px-6 py-20 text-center">
          <FadeIn>
            <p className="text-xl font-semibold text-zinc-900 mb-3">Thank you for reaching out.</p>
            <p className="text-zinc-500">I will review your message and respond within 24 hours.</p>
          </FadeIn>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white text-black">

      <section className="bg-blue-950 text-white">
        <div className="max-w-3xl mx-auto px-6 py-28 text-center">
          <FadeIn>
            <p className="text-sm font-semibold tracking-widest text-zinc-300 uppercase mb-4">Contact Us</p>
            <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
            <p className="text-zinc-300 text-lg">
              Tell us about your business and what you are looking to achieve. We will respond within 24 hours.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="max-w-2xl mx-auto px-6 py-20">
        <FadeIn>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="Jane Smith"
                  className="w-full border border-zinc-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="jane@example.com"
                  className="w-full border border-zinc-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1">
                Phone <span className="text-zinc-400 font-normal">(optional)</span>
              </label>
              <input
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
                placeholder="(555) 000-0000"
                className="w-full border border-zinc-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1">
                Tell us about your project <span className="text-red-500">*</span>
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={6}
                placeholder="What does your business do? Do you have an existing website? What are you hoping to achieve?"
                className="w-full border border-zinc-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 resize-y"
              />
            </div>

            {status === 'error' && (
              <p className="text-red-600 text-sm">Something went wrong. Please try again.</p>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="self-start px-6 py-3 bg-blue-950 text-white text-sm font-medium rounded-lg hover:bg-blue-800 transition-colors disabled:opacity-50"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </FadeIn>
      </section>

    </div>
  )
}
