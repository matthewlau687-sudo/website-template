import Link from 'next/link'

export const metadata = { title: 'Our Mission — Your Brand' }

export default function MissionPage() {
  return (
    <div className="bg-white text-black">

      {/* Dark header */}
      <section className="bg-zinc-950 text-white">
        <div className="max-w-3xl mx-auto px-6 py-28 text-center">
          <p className="text-sm font-semibold tracking-widest text-zinc-400 uppercase mb-4">
            Who We Are
          </p>
          <h1 className="text-4xl font-bold mb-6">
            We exist to level the playing field.
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Big companies have entire marketing teams. Small businesses shouldn't have to compete without one. That's where we come in.
          </p>
        </div>
      </section>

      {/* What We Do + Why We Started */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-xl font-bold mb-4">What We Do</h2>
            <p className="text-zinc-500 leading-relaxed">
              We design and build websites that work hard for your business — attracting customers, building trust, and turning visitors into leads. Whether you're starting from scratch or your current site isn't cutting it, we handle everything so you can stay focused on what you do best.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Why We Started</h2>
            <p className="text-zinc-500 leading-relaxed">
              We've seen too many great small businesses go unnoticed online because they didn't have the right web presence. We started this company to fix that — delivering agency-quality work at a price that actually makes sense for small businesses.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-zinc-100" />

      {/* Goals */}
      <section className="bg-zinc-50">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <h2 className="text-2xl font-bold mb-12 text-center">Our Commitments to You</h2>
          <div className="flex flex-col gap-8">
            <div className="flex gap-6 items-start">
              <span className="text-2xl font-bold text-zinc-200">01</span>
              <div>
                <h3 className="font-semibold mb-1">Quality without the agency price tag</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  You'll get a professionally designed, high-performing website — without paying for a team you don't need.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <span className="text-2xl font-bold text-zinc-200">02</span>
              <div>
                <h3 className="font-semibold mb-1">A partner, not just a vendor</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  We don't build your site and disappear. We stay invested in your growth and are always here when you need us.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <span className="text-2xl font-bold text-zinc-200">03</span>
              <div>
                <h3 className="font-semibold mb-1">Results you can actually see</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  More website visitors, more inquiries, more customers. Everything we build is designed with your bottom line in mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-950 text-white">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl font-bold mb-4">Sound like a fit?</h2>
          <p className="text-zinc-400 mb-8">
            Let's talk about what we can build for your business.
          </p>
          <Link
            href="/contact"
            className="px-6 py-3 bg-white text-black text-sm font-medium rounded-lg hover:bg-zinc-200 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

    </div>
  )
}
