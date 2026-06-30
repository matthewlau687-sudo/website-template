'use client'

import Link from 'next/link'
import { useState } from 'react'

const plans = [
  {
    name: 'Basic',
    monthly: 199,
    annual: 169,
    description: 'Everything you need to get your business online professionally.',
    features: [
      'Custom website design & setup',
      'Website hosting included',
      'Domain included',
      'Mobile-friendly design',
      'Up to 2 edit requests per month (one discrete change per request)',
      '48-hour response time',
    ],
  },
  {
    name: 'Standard',
    monthly: 299,
    annual: 254,
    description: 'Expand your reach with Google and keep your content fresh.',
    features: [
      'Everything in Basic',
      'Google Business Profile setup & optimization',
      'Monthly Google post updates',
      'Up to 5 edit requests per month (one discrete change per request)',
      '24-hour response time',
    ],
  },
  {
    name: 'Premium',
    monthly: 499,
    annual: 424,
    description: 'Full-service management for businesses serious about growth.',
    features: [
      'Everything in Standard',
      'Social media content (2 platforms)',
      'Unlimited edits',
      'Monthly performance check-in',
      'Same-day response time',
    ],
  },
]

export default function PricingCards() {
  const [billing, setBilling] = useState('monthly')
  const isAnnual = billing === 'annual'

  return (
    <>
      {/* Toggle */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex items-center bg-zinc-100 rounded-xl p-1 gap-1">
          <button
            onClick={() => setBilling('monthly')}
            className={`px-5 py-2 rounded-lg text-sm font-medium transition-all ${
              !isAnnual ? 'bg-white shadow text-zinc-900' : 'text-zinc-500 hover:text-zinc-700'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling('annual')}
            className={`px-5 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
              isAnnual ? 'bg-white shadow text-zinc-900' : 'text-zinc-500 hover:text-zinc-700'
            }`}
          >
            Annual
            <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-0.5 rounded-full">Save 15%</span>
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {plans.map((plan) => (
          <div key={plan.name} className="rounded-2xl border border-zinc-200 bg-white p-8 flex flex-col gap-6">
            <div>
              <h2 className="text-xl font-bold mb-1 text-zinc-900">{plan.name}</h2>
              <p className="text-sm leading-relaxed text-zinc-500">{plan.description}</p>
            </div>
            <div>
              <span className="text-4xl font-bold text-zinc-900">
                ${isAnnual ? plan.annual : plan.monthly}
              </span>
              <span className="text-sm ml-1 text-zinc-400">/month</span>
              {isAnnual && (
                <p className="text-xs text-zinc-400 mt-1">
                  Billed annually · <span className="line-through">${plan.monthly}/mo</span>
                </p>
              )}
            </div>
            <ul className="flex flex-col gap-3">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm">
                  <span className="mt-0.5 text-blue-600">✓</span>
                  <span className="text-zinc-600">{feature}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-auto text-center px-5 py-3 rounded-lg text-sm font-medium transition-colors bg-blue-950 text-white hover:bg-blue-800"
            >
              Get Started
            </Link>
          </div>
        ))}
      </div>

      {/* Setup fee */}
      <div className="mt-10 border border-zinc-100 rounded-2xl bg-zinc-50 px-8 py-6 text-center">
        <p className="text-sm font-semibold text-zinc-900 mb-1">One-time setup fee: $299</p>
        <p className="text-sm text-zinc-400">
          Applies to all plans. Covers site build, domain configuration, and onboarding.
        </p>
      </div>

      {/* Terms note */}
      <p className="text-center text-zinc-400 text-sm mt-6">
        All plans require a 3-month minimum term, then continue month-to-month with 30 days notice to cancel.
      </p>
    </>
  )
}
