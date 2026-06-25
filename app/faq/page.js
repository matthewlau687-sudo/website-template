'use client'

import Link from 'next/link'
import { useState } from 'react'

const faqs = [
  {
    question: 'How long does it take to build a website?',
    answer:
      'Most websites are completed within 1 to 2 weeks from the time I have all the information I need. The timeline depends on how quickly we can align on design direction and how much content you already have ready.',
  },
  {
    question: 'Do I need to provide content, or do you write it?',
    answer:
      'I can write the copy for your website based on information you share about your business. If you already have content you want to use, I can work with that too. Either way, everything goes through you for approval before anything goes live.',
  },
  {
    question: 'What do I need to get started?',
    answer:
      'Just reach out. I will ask you a few questions about your business, your goals, and what you are looking for. From there I put together a clear plan and we go from there. No technical knowledge required on your end.',
  },
  {
    question: 'Will my website work on mobile?',
    answer:
      'Yes. Every website I build is fully responsive, meaning it looks and works correctly on phones, tablets, and desktop computers.',
  },
  {
    question: 'What is a Google Business Profile and why do I need one?',
    answer:
      'A Google Business Profile is the listing that appears when someone searches for your business or a business like yours on Google. It shows your hours, phone number, location, photos, and reviews. Having one set up and optimized is one of the most effective ways to get found by local customers.',
  },
  {
    question: 'What is included in the monthly retainer?',
    answer:
      'The monthly retainer covers ongoing content updates to your Google Business Profile, website maintenance, minor edits and changes as needed, and a dedicated point of contact whenever questions come up. It is designed for businesses that want to stay active online without managing it themselves.',
  },
  {
    question: 'Can I make changes to my website after it is launched?',
    answer:
      'Yes. If you are on a monthly retainer I handle updates for you. If you prefer a one-time setup, I can also provide guidance on how to make basic edits yourself, or you can reach out whenever something needs to change.',
  },
  {
    question: 'How does payment work?',
    answer:
      'For one-time services, payment is split 50% upfront and 50% on completion. Monthly services are billed at the start of each month. I will walk you through everything during our initial conversation.',
  },
]

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-zinc-100">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="font-medium text-zinc-900">{question}</span>
        <span className={`text-zinc-400 text-xl leading-none transition-transform duration-200 ${open ? 'rotate-45' : ''}`}>+</span>
      </button>
      {open && (
        <p className="text-zinc-500 leading-relaxed pb-5">
          {answer}
        </p>
      )}
    </div>
  )
}

export default function FAQPage() {
  return (
    <div className="bg-white text-black">

      {/* Dark header */}
      <section className="bg-blue-950 text-white">
        <div className="max-w-3xl mx-auto px-6 py-28 text-center">
          <p className="text-sm font-semibold tracking-widest text-zinc-300 uppercase mb-4">
            FAQ
          </p>
          <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-zinc-300 text-lg max-w-xl mx-auto">
            Answers to the questions I hear most often. If yours is not here, reach out directly.
          </p>
        </div>
      </section>

      {/* FAQ list */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        {faqs.map((faq) => (
          <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
        ))}
      </section>

      {/* CTA */}
      <section className="bg-blue-950 text-white">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
          <p className="text-zinc-300 mb-8">
            Send a message and I will get back to you within 24 hours.
          </p>
          <Link
            href="/contact"
            className="px-6 py-3 bg-white text-black text-sm font-medium rounded-lg hover:bg-blue-50 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

    </div>
  )
}
