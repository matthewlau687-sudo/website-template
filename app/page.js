import Link from 'next/link'

export const revalidate = 0

export default function Home() {
  return (
    <div className="bg-white text-black">

      {/* Hero */}
      <section className="bg-blue-950 text-white">
        <div className="max-w-4xl mx-auto px-6 py-32">
          <p className="text-white text-sm font-medium mb-6 tracking-wide uppercase">
            Online Presence for Small Businesses
          </p>
          <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] mb-8">
            If people cannot find you online,<br className="hidden md:block" /> they are finding someone else.
          </h1>
          <p className="text-zinc-300 text-lg max-w-lg mb-10 leading-relaxed">
            Global Point Partners helps small businesses establish and grow their digital presence through professional websites, Google Business optimization, and consistent content management.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-white text-black text-sm font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/services"
              className="px-6 py-3 border border-blue-700 text-white text-sm font-medium rounded-lg hover:bg-blue-800 transition-colors"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Plans strip */}
      <section className="border-b border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-3 gap-10">
          {[
            {
              title: 'Basic',
              price: '$199/mo',
              description: 'Custom website, hosting, domain, and up to 2 edit requests per month. Everything you need to get online.',
              href: '/services',
            },
            {
              title: 'Standard',
              price: '$299/mo',
              description: 'Everything in Basic plus Google Business Profile setup, optimization, and monthly content updates.',
              href: '/services',
            },
            {
              title: 'Premium',
              price: '$499/mo',
              description: 'Full-service management including social media content, unlimited edits, and priority support.',
              href: '/services',
            },
          ].map((s) => (
            <Link key={s.title} href={s.href} className="group flex flex-col gap-2">
              <div className="flex items-baseline justify-between">
                <p className="font-semibold text-zinc-900 group-hover:underline underline-offset-2">{s.title}</p>
                <p className="text-sm font-medium text-zinc-500">{s.price}</p>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">{s.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <h2 className="text-2xl font-bold mb-3">Why not just use a template or AI?</h2>
          <p className="text-zinc-500 mb-12 max-w-xl">
            It is a fair question. Here is the difference.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Template */}
            <div className="bg-white border border-zinc-200 rounded-2xl p-6">
              <p className="text-xs font-semibold tracking-widest text-zinc-900 uppercase mb-4">Website Builder / Template</p>
              <ul className="flex flex-col gap-3 text-sm text-zinc-500">
                {[
                  'You design and build it yourself',
                  'Looks like thousands of other sites',
                  'Fees with no ongoing management included',
                  'No Google Business setup included',
                  'No strategy or guidance provided',
                  'No support when issues arise',
                ].map((item) => (
                  <li key={item} className="flex gap-2 items-start">
                    <span className="text-zinc-300 mt-0.5">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* AI Tools */}
            <div className="bg-white border border-zinc-200 rounded-2xl p-6">
              <p className="text-xs font-semibold tracking-widest text-zinc-900 uppercase mb-4">AI Tools</p>
              <ul className="flex flex-col gap-3 text-sm text-zinc-500">
                {[
                  'Output still requires expert editing',
                  'You manage every step yourself',
                  'Cannot set up your Google listing',
                  'Generic content with no local knowledge',
                  'No accountability or follow-through',
                  'Still demands significant time and effort',
                ].map((item) => (
                  <li key={item} className="flex gap-2 items-start">
                    <span className="text-zinc-300 mt-0.5">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* GPP */}
            <div className="bg-blue-950 text-white rounded-2xl p-6">
              <p className="text-xs font-semibold tracking-widest text-white uppercase mb-4">Global Point Partners</p>
              <ul className="flex flex-col gap-3 text-sm text-zinc-300">
                {[
                  'Fully managed and handled for you',
                  'Built specifically for your business',
                  'Simple, transparent monthly pricing',
                  'Google Business setup included',
                  'Strategy tailored to your goals',
                  'Ongoing support whenever you need it',
                ].map((item) => (
                  <li key={item} className="flex gap-2 items-start">
                    <span className="text-white mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-2xl font-bold mb-12">How it works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-sm mb-4">1</div>
            <h3 className="font-semibold mb-2">We connect</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Share details about your business, your goals, and what you are looking to achieve. I listen carefully and ask the right questions to fully understand your needs.
            </p>
          </div>
          <div>
            <div className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-sm mb-4">2</div>
            <h3 className="font-semibold mb-2">We present a plan</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              We provide an honest assessment of what your business needs most and outline a clear, straightforward plan focused on results rather than unnecessary add-ons.
            </p>
          </div>
          <div>
            <div className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-sm mb-4">3</div>
            <h3 className="font-semibold mb-2">We get to work</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              I handle everything from start to finish. You stay focused on running your business while I build and strengthen your online presence.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 text-white">
        <div className="max-w-4xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-6">Ready to get started?</h2>
            <Link
              href="/contact"
              className="inline-block px-6 py-3 bg-white text-black text-sm font-semibold rounded-lg hover:bg-blue-50 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
