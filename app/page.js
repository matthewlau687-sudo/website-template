import Link from 'next/link'
import FadeIn from './components/FadeIn'

export const revalidate = 0

export default function Home() {
  return (
    <div className="bg-white text-black">

      {/* Hero */}
      <section className="relative bg-blue-950 text-white overflow-hidden">
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        <div className="relative max-w-5xl mx-auto px-6 py-36">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-blue-900/60 border border-blue-700 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-medium text-blue-200 tracking-wide">Now taking new clients</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-8 max-w-3xl">
              If people can't find you online, they're finding someone else.
            </h1>
            <p className="text-zinc-300 text-lg max-w-xl mb-10 leading-relaxed">
              Global Point Partners builds and manages your entire online presence — website, Google Business, and ongoing content — so you can focus on running your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 bg-white text-blue-950 text-sm font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                href="/services"
                className="px-6 py-3 border border-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-900 transition-colors"
              >
                View Plans
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-zinc-100 bg-zinc-50">
        <div className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { stat: '1–2 weeks', label: 'Average setup time' },
            { stat: '3 plans', label: 'Starting at $199/mo' },
            { stat: '24/7', label: 'Site stays live' },
            { stat: '30 days', label: 'Cancel anytime' },
          ].map((item) => (
            <FadeIn key={item.label}>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-950 mb-1">{item.stat}</p>
                <p className="text-xs text-zinc-400 font-medium">{item.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Plans */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest text-blue-600 uppercase mb-3">Pricing</p>
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Simple plans, no surprises</h2>
            <p className="text-zinc-400 max-w-md mx-auto">Everything is handled for you. Pick the level of support that fits your business.</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: 'Basic',
              price: '$199',
              description: 'Custom website, hosting, domain, and up to 2 edit requests per month.',
              delay: 0,
            },
            {
              name: 'Standard',
              price: '$299',
              description: 'Everything in Basic plus Google Business Profile setup and monthly content updates.',
              delay: 100,
            },
            {
              name: 'Premium',
              price: '$499',
              description: 'Full-service management including social media, unlimited edits, and same-day support.',
              delay: 200,
            },
          ].map((plan) => (
            <FadeIn key={plan.name} delay={plan.delay}>
              <Link href="/services" className="group block border border-zinc-200 rounded-2xl p-7 hover:border-blue-950 hover:shadow-lg transition-all duration-300">
                <p className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-4">{plan.name}</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-zinc-900">{plan.price}</span>
                  <span className="text-sm text-zinc-400 ml-1">/mo</span>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed mb-5">{plan.description}</p>
                <span className="text-sm font-medium text-blue-950 group-hover:underline underline-offset-2">
                  See full details →
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
        <FadeIn>
          <p className="text-center text-zinc-400 text-sm mt-8">One-time $299 setup fee applies to all plans.</p>
        </FadeIn>
      </section>

      {/* Comparison */}
      <section className="bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-xs font-semibold tracking-widest text-blue-600 uppercase mb-3">Why Us</p>
              <h2 className="text-3xl font-bold text-zinc-900 mb-4">Why not just use a template or AI?</h2>
              <p className="text-zinc-400 max-w-md mx-auto">It is a fair question. Here is the honest difference.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeIn delay={0}>
              <div className="bg-white border border-zinc-200 rounded-2xl p-7 h-full">
                <p className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-5">Website Builder</p>
                <ul className="flex flex-col gap-3 text-sm text-zinc-500">
                  {[
                    'You design and build it yourself',
                    'Looks like thousands of other sites',
                    'Fees with no ongoing management',
                    'No Google Business setup included',
                    'No strategy or guidance',
                    'No support when issues arise',
                  ].map((item) => (
                    <li key={item} className="flex gap-2.5 items-start">
                      <span className="text-red-300 mt-0.5 shrink-0">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <div className="bg-white border border-zinc-200 rounded-2xl p-7 h-full">
                <p className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-5">AI Tools</p>
                <ul className="flex flex-col gap-3 text-sm text-zinc-500">
                  {[
                    'Output still needs expert editing',
                    'You manage every step yourself',
                    'Cannot set up your Google listing',
                    'Generic, no local knowledge',
                    'No accountability or follow-through',
                    'Demands significant time and effort',
                  ].map((item) => (
                    <li key={item} className="flex gap-2.5 items-start">
                      <span className="text-red-300 mt-0.5 shrink-0">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="bg-blue-950 text-white rounded-2xl p-7 h-full">
                <p className="text-xs font-semibold tracking-widest text-blue-300 uppercase mb-5">Global Point Partners</p>
                <ul className="flex flex-col gap-3 text-sm text-zinc-300">
                  {[
                    'Fully managed and handled for you',
                    'Built specifically for your business',
                    'Simple, transparent monthly pricing',
                    'Google Business setup included',
                    'Strategy tailored to your goals',
                    'Ongoing support whenever you need it',
                  ].map((item) => (
                    <li key={item} className="flex gap-2.5 items-start">
                      <span className="text-green-400 mt-0.5 shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest text-blue-600 uppercase mb-3">Process</p>
            <h2 className="text-3xl font-bold text-zinc-900">How it works</h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              num: '01',
              title: 'We connect',
              body: 'Share details about your business and goals. I listen carefully and ask the right questions to fully understand what you need.',
              delay: 0,
            },
            {
              num: '02',
              title: 'We build a plan',
              body: 'I provide an honest assessment of what will move the needle and outline a clear plan focused on results, not unnecessary add-ons.',
              delay: 100,
            },
            {
              num: '03',
              title: 'We get to work',
              body: 'I handle everything from start to finish. You stay focused on your business while I build and maintain your online presence.',
              delay: 200,
            },
          ].map((step) => (
            <FadeIn key={step.num} delay={step.delay}>
              <div className="relative pl-16">
                <span className="absolute left-0 top-0 text-5xl font-bold text-zinc-100 leading-none select-none">{step.num}</span>
                <h3 className="font-semibold text-zinc-900 mb-2 mt-1">{step.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{step.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-blue-950 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        <div className="relative max-w-5xl mx-auto px-6 py-28 text-center">
          <FadeIn>
            <p className="text-xs font-semibold tracking-widest text-blue-300 uppercase mb-4">Get Started</p>
            <h2 className="text-4xl font-bold mb-6">Ready to grow your online presence?</h2>
            <p className="text-zinc-300 mb-10 max-w-md mx-auto">
              Reach out today and I will get back to you within 24 hours to discuss the right plan for your business.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-950 text-sm font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Get in Touch
            </Link>
          </FadeIn>
        </div>
      </section>

    </div>
  )
}
