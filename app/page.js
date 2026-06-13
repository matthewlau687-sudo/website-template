import Link from 'next/link'

export const revalidate = 0

export default function Home() {
  return (
    <div className="bg-white text-black">

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 py-28 text-center">
        <p className="text-sm font-semibold tracking-widest text-zinc-400 uppercase mb-4">
          Web Design & Development
        </p>
        <h1 className="text-5xl font-bold leading-tight mb-6">
          Your business deserves<br />a powerful online presence.
        </h1>
        <p className="text-zinc-500 text-lg max-w-xl mx-auto mb-10">
          We help small businesses build and grow their digital presence — from beautiful websites to strategies that attract real customers.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/about"
            className="px-6 py-3 bg-black text-white text-sm font-medium rounded-lg hover:bg-zinc-700 transition-colors"
          >
            Learn More
          </Link>
          <Link
            href="/gallery"
            className="px-6 py-3 border border-zinc-300 text-black text-sm font-medium rounded-lg hover:bg-zinc-50 transition-colors"
          >
            View Our Work
          </Link>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-zinc-100" />

      {/* Services */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-16">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center">
            <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center mx-auto mb-5 text-2xl">
              🌐
            </div>
            <h3 className="font-semibold text-lg mb-2">Website Design</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Custom websites built to reflect your brand and convert visitors into customers.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center mx-auto mb-5 text-2xl">
              🚀
            </div>
            <h3 className="font-semibold text-lg mb-2">Website Development</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Fast, reliable, and mobile-friendly sites built with modern technology.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-zinc-100 rounded-xl flex items-center justify-center mx-auto mb-5 text-2xl">
              📈
            </div>
            <h3 className="font-semibold text-lg mb-2">Online Growth</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Strategies to expand your reach and grow your business online over time.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-zinc-100" />

      {/* Why Us */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-16">Why Work With Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="border border-zinc-100 rounded-2xl p-6">
            <h3 className="font-semibold mb-2">Built for Small Business</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              We understand the challenges small businesses face and tailor every solution to fit your budget and goals.
            </p>
          </div>
          <div className="border border-zinc-100 rounded-2xl p-6">
            <h3 className="font-semibold mb-2">Simple & Transparent</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              No confusing jargon. We keep you informed every step of the way with clear communication.
            </p>
          </div>
          <div className="border border-zinc-100 rounded-2xl p-6">
            <h3 className="font-semibold mb-2">Results That Matter</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              We focus on outcomes — more visibility, more leads, and more customers for your business.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-black text-white">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-zinc-400 mb-8">
            Let's build something great for your business.
          </p>
          <Link
            href="/about"
            className="px-6 py-3 bg-white text-black text-sm font-medium rounded-lg hover:bg-zinc-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

    </div>
  )
}
