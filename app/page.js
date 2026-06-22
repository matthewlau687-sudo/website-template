import Link from 'next/link'

export const revalidate = 0

export default function Home() {
  return (
    <div className="bg-white text-black">

      {/* Hero */}
      <section className="bg-zinc-950 text-white">
        <div className="max-w-4xl mx-auto px-6 py-32">
          <p className="text-zinc-400 text-sm font-medium mb-6 tracking-wide uppercase">
            Online Presence for Small Businesses
          </p>
          <h1 className="text-5xl md:text-6xl font-bold leading-[1.1] mb-8">
            If people can't find you online,<br className="hidden md:block" /> they're finding someone else.
          </h1>
          <p className="text-zinc-400 text-lg max-w-lg mb-10 leading-relaxed">
            I work with small businesses to fix that — websites, Google profiles, and ongoing content. Transparent pricing, no agency markup.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-white text-black text-sm font-semibold rounded-lg hover:bg-zinc-200 transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/services"
              className="px-6 py-3 border border-zinc-600 text-white text-sm font-medium rounded-lg hover:bg-zinc-800 transition-colors"
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
            { title: 'Website Design & Setup', price: 'From $500' },
            { title: 'Google Business Profile', price: 'From $200' },
            { title: 'Monthly Content', price: 'From $300/mo' },
            { title: 'Monthly Retainer', price: 'From $400/mo' },
          ].map((s) => (
            <div key={s.title}>
              <p className="font-semibold text-zinc-900 mb-1">{s.title}</p>
              <p className="text-sm text-zinc-400">{s.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h2 className="text-2xl font-bold mb-12">How it works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="w-10 h-10 rounded-full bg-zinc-900 text-white flex items-center justify-center font-bold text-sm mb-4">1</div>
            <h3 className="font-semibold mb-2">We talk</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Tell me about your business, what you're struggling with, and what you want. No forms, no sales pitch — just a real conversation.
            </p>
          </div>
          <div>
            <div className="w-10 h-10 rounded-full bg-zinc-900 text-white flex items-center justify-center font-bold text-sm mb-4">2</div>
            <h3 className="font-semibold mb-2">I tell you exactly what you need</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              I'll give you an honest assessment of what's missing and what would actually make a difference — not a list of everything I can sell you.
            </p>
          </div>
          <div>
            <div className="w-10 h-10 rounded-full bg-zinc-900 text-white flex items-center justify-center font-bold text-sm mb-4">3</div>
            <h3 className="font-semibold mb-2">We get to work</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              I handle everything. You stay focused on your business while I get your online presence in order.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-950 text-white">
        <div className="max-w-4xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Ready to get started?</h2>
            <p className="text-zinc-400">No commitment required — just a conversation.</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-6 py-3 bg-white text-black text-sm font-semibold rounded-lg hover:bg-zinc-200 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

    </div>
  )
}
