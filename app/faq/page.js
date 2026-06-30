'use client'

import Link from 'next/link'
import { useState } from 'react'
import FadeIn from '../components/FadeIn'

const faqs = [
  {
    question: 'What plans do you offer?',
    answer:
      'There are three plans: Basic ($199/mo), Standard ($299/mo), and Premium ($499/mo), each with a one-time $299 setup fee. All plans are billed monthly with a 3-month minimum term. Annual billing is also available at 15% off. Basic covers your custom website, hosting, domain, and up to 2 edit requests per month. Standard adds Google Business Profile management and monthly content updates. Premium includes everything in Standard plus social media content, unlimited edits, and priority support.',
  },
  {
    question: 'Why is this a subscription and not a one-time payment?',
    answer:
      'Running a professional online presence has real ongoing costs — domain registration, hosting, security, and content management all require continuous work. A subscription means I handle all of that for you every month so your business stays live and up to date without you having to think about it.',
  },
  {
    question: 'How long does it take to get set up?',
    answer:
      'Most websites are ready within 1 to 2 weeks from the time I have all the information I need. The timeline depends on how quickly we align on design direction and how much content you already have ready.',
  },
  {
    question: 'What do I need to get started?',
    answer:
      'Just reach out. I will ask you a few questions about your business, your goals, and what you are looking for. From there I put together a clear plan and we go from there. No technical knowledge required on your end.',
  },
  {
    question: 'Is there a discount for paying annually?',
    answer:
      'Yes. Choosing annual billing saves you 15% compared to paying month-to-month. Annual plans are billed upfront for the full year. Basic drops to $169/mo, Standard to $254/mo, and Premium to $424/mo when billed annually.',
  },
  {
    question: 'Can I upgrade or downgrade my plan?',
    answer:
      'Yes. You can switch plans at any time. Upgrades take effect immediately and downgrades apply at the start of your next billing cycle.',
  },
  {
    question: 'Can I cancel at any time?',
    answer:
      'All plans require a 3-month minimum term. After that, plans continue month-to-month and can be cancelled with 30 days notice. If you are on annual billing, the remaining balance of the year is non-refundable.',
  },
  {
    question: 'What happens to my website if I cancel?',
    answer:
      'If you cancel, your website will go offline since hosting and the domain are included in the subscription. Before cancellation is finalized, I will provide you with all your files and content so you can transfer everything to another provider if you choose.',
  },
  {
    question: 'Will my website work on mobile?',
    answer:
      'Yes. Every website I build is fully responsive, meaning it looks and works correctly on phones, tablets, and desktop computers.',
  },
  {
    question: 'What is a Google Business Profile and why do I need one?',
    answer:
      'A Google Business Profile is the listing that appears when someone searches for your business or a similar business on Google. It shows your hours, phone number, location, photos, and reviews. It is included in the Standard and Premium plans and is one of the most effective ways to get found by local customers.',
  },
  {
    question: 'How does billing work?',
    answer:
      'A one-time setup fee of $299 is charged when you sign up. After that, monthly plans renew automatically each month. Annual plans are billed upfront at 15% off the monthly rate and renew each year. All plans have a 3-month minimum term.',
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
        <p className="text-zinc-500 leading-relaxed pb-5">{answer}</p>
      )}
    </div>
  )
}

export default function FAQPage() {
  return (
    <div className="bg-white text-black">

      <section className="bg-blue-950 text-white">
        <div className="max-w-3xl mx-auto px-6 py-28 text-center">
          <FadeIn>
            <p className="text-sm font-semibold tracking-widest text-zinc-300 uppercase mb-4">FAQ</p>
            <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-zinc-300 text-lg max-w-xl mx-auto">
              Answers to the questions I hear most often. If yours is not here, reach out directly.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-20">
        {faqs.map((faq, i) => (
          <FadeIn key={faq.question} delay={(i % 3) * 50}>
            <FAQItem question={faq.question} answer={faq.answer} />
          </FadeIn>
        ))}
      </section>

      <section className="bg-blue-950 text-white">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
            <p className="text-zinc-300 mb-8">Send a message and I will get back to you within 24 hours.</p>
            <Link href="/contact" className="px-6 py-3 bg-white text-black text-sm font-medium rounded-lg hover:bg-blue-50 transition-colors">
              Get in Touch
            </Link>
          </FadeIn>
        </div>
      </section>

    </div>
  )
}
