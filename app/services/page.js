import Link from 'next/link'
import FadeIn from '../components/FadeIn'

export const metadata = { title: 'Services — Global Point Partners' }

const plans = [
  {
    name: 'Basic',
    price: '$199',
    description: 'Everything you need to get your business online professionally.',
    features: [
      'Custom website design & setup',
      'Website hosting included',
      'Domain included',
      'Mobile-friendly design',
      'Up to 2 edit requests per month (one discrete change per request)',
      '48-hour response time',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Standard',
    price: '$299',
    description: 'Expand your reach with Google and keep your content fresh.',
    features: [
      'Everything in Basic',
      'Google Business Profile setup & optimization',
      'Monthly Google post updates',
      'Up to 5 edit requests per month (one discrete change per request)',
      '24-hour response time',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Premium',
    price: '$499',
    description: 'Full-service management for businesses serious about growth.',
    features: [
      'Everything in Standard',
      'Social media content (2 platforms)',
      'Unlimited edits',
      'Monthly performance check-in',
      'Same-day response time',
    ],
    cta: 'Get Started',
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-white text-black">

      <section className="bg-blue-950 text-white">
        <div className="max-w-4xl mx-auto px-6 py-28 text-center">
          <FadeIn>
            <p className="text-sm font-semibold tracking-widest text-zinc-300 uppercase mb-4">Pricing</p>
            <h1 className="text-4xl font-bold mb-6">Simple, Subscription-Based Plans</h1>
            <p className="text-zinc-300 text-lg max-w-xl mx-auto">
              No hidden fees. Your online presence stays live, maintained, and improving every month.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, i) => (
            <FadeIn key={plan.name} delay={i * 100}>
              <div className="rounded-2xl border border-zinc-200 bg-white p-8 flex flex-col gap-6">
                <div>
                  <h2 className="text-xl font-bold mb-1 text-zinc-900">{plan.name}</h2>
                  <p className="text-sm leading-relaxed text-zinc-500">{plan.description}</p>
                </div>
                <div>
                  <span className="text-4xl font-bold text-zinc-900">{plan.price}</span>
                  <span className="text-sm ml-1 text-zinc-400">/month</span>
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
                  {plan.cta}
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="mt-10 border border-zinc-100 rounded-2xl bg-zinc-50 px-8 py-6 text-center">
            <p className="text-sm font-semibold text-zinc-900 mb-1">One-time setup fee: $299</p>
            <p className="text-sm text-zinc-400">
              Applies to all plans. Covers site build, domain configuration, and onboarding.
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <p className="text-center text-zinc-400 text-sm mt-6">
            Monthly plans can be cancelled anytime with 30 days notice.
          </p>
        </FadeIn>
      </section>

      <section className="bg-blue-950 text-white">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-4">Not sure which plan is right for you?</h2>
            <p className="text-zinc-300 mb-8">
              Reach out and I will help you figure out the best fit for your business and budget.
            </p>
            <Link href="/contact" className="px-6 py-3 bg-white text-black text-sm font-medium rounded-lg hover:bg-blue-50 transition-colors">
              Get in Touch
            </Link>
          </FadeIn>
        </div>
      </section>

    </div>
  )
}
