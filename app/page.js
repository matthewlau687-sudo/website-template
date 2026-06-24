import Link from 'next/link'

export const revalidate = 0

export default function Home() {
  return (
    <div className="bg-white text-black">

      {/* Hero */}
      <section className="bg-blue-950 text-white">
        <div className="max-w-4xl mx-auto px-6 py-32">
          <p className="text-blue-200 text-sm font-medium mb-6 tracking-wide uppercase">
            Online Presence for Small Businesses
          </p>
          <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] mb-8">
            If people can't find you online,<br className="hidden md:block" /> they're finding someone else.
          </h1>
          <p className="text-blue-200 text-lg max-w-lg mb-10 leading-relaxed">
            I work with small businesses to fix that — websites, Google profiles, and ongoing content. Transparent pricing, no agency markup.
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

      {/* Services strip */}
      <section className="border-b border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { title: 'Website Design & Setup', price: 'From $500', href: '/services#website-design' },
            { title: 'Google Business Profile', price: 'From $200', href: '/services#google-business' },
            { title: 'Monthly Content', price: 'From $300/mo', href: '/services#monthly-content' },
            { title: 'Monthly Retainer', price: 'From $400/mo', href: '/services#monthly-retainer' },
          ].map((s) => (
            <Link key={s.title} href={s.href} className="group">
              <p className="font-semibold text-zinc-900 mb-1 group-hover:underline underline-offset-2">{s.title}</p>
              <p className="text-sm text-zinc-900">{s.price}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <h2 className="text-2xl font-bold mb-3">Why not just use a template or AI?</h2>
          <p className="text-zinc-500 mb-12 max-w-xl">
            Fair question. Here's the honest difference.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Template */}
            <div className="bg-white border border-zinc-200 rounded-2xl p-6">
              <p className="text-xs font-semibold tracking-widest text-blue-200 uppercase mb-4">Website Builder / Template</p>
              <ul className="flex flex-col gap-3 text-sm text-zinc-500">
                {[
                  'You design and build it yourself',
                  'Looks like thousands of other sites',
                  'Monthly subscription fees add up',
                  'No Google Business setup',
                  'No strategy — just a blank page',
                  "You're on your own if something breaks",
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
              <p className="text-xs font-semibold tracking-widest text-blue-200 uppercase mb-4">AI Tools</p>
              <ul className="flex flex-col gap-3 text-sm text-zinc-500">
                {[
                  'Output still needs expert editing',
                  'You write every prompt yourself',
                  'Can\'t set up your Google listing',
                  'Generic content, no local knowledge',
                  'No accountability or follow-through',
                  'Still requires your time and effort',
                ].map((item) => (
                  <li key={item} className="flex gap-2 items-start">
                    <span className="text-zinc-300 mt-0.5">✗</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Me */}
            <div className="bg-blue-950 text-white rounded-2xl p-6">
              <p className="text-xs font-semibold tracking-widest text-blue-200 uppercase mb-4">Working With Me</p>
              <ul className="flex flex-col gap-3 text-sm text-zinc-300">
                {[
                  'Done completely for you',
                  'Built around your specific business',
                  'Transparent, one-time or monthly pricing',
                  'Google Business setup included',
                  'Strategy tailored to your goals',
                  'Ongoing support when you need it',
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
            <h3 className="font-semibold mb-2">We talk</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Tell me about your business, what you're struggling with, and what you want. No forms, no sales pitch — just a real conversation.
            </p>
          </div>
          <div>
            <div className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-sm mb-4">2</div>
            <h3 className="font-semibold mb-2">I tell you exactly what you need</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              I'll give you an honest assessment of what's missing and what would actually make a difference — not a list of everything I can sell you.
            </p>
          </div>
          <div>
            <div className="w-10 h-10 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-sm mb-4">3</div>
            <h3 className="font-semibold mb-2">We get to work</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              I handle everything. You stay focused on your business while I get your online presence in order.
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
