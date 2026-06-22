import Link from 'next/link'

export const metadata = { title: 'Our Mission — ExpanBiz' }

export default function MissionPage() {
  return (
    <div className="bg-white text-black">

      {/* Dark header */}
      <section className="bg-blue-950 text-white">
        <div className="max-w-3xl mx-auto px-6 py-28 text-center">
          <p className="text-sm font-semibold tracking-widest text-zinc-400 uppercase mb-4">
            Why I Started This
          </p>
          <h1 className="text-4xl font-bold mb-6">
            I built this because good businesses were being overlooked.
          </h1>
          <p className="text-zinc-400 text-lg leading-relaxed">
            Not because they weren't good at what they do — but because nobody could find them online.
          </p>
        </div>
      </section>

      {/* The Reality */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-xl font-bold mb-5">The reality for most small businesses</h2>
        <p className="text-zinc-500 leading-relaxed">
          You're great at your craft. Your customers love you. But when someone searches for what you offer, you're nowhere to be found. No Google listing, an outdated website, or nothing at all. And the business down the street — maybe not even as good as yours — is showing up first because they got their online presence in order.
        </p>
        <p className="text-zinc-900 font-semibold mt-6 text-lg">That's the gap I'm here to close.</p>
      </section>

      <div className="border-t border-zinc-100" />

      {/* What I Do + What to Expect */}
      <section className="bg-zinc-50">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-xl font-bold mb-5">What I actually do</h2>
              <p className="text-zinc-500 leading-relaxed">
                I work directly with small business owners to get the basics right — a website that looks professional, a Google profile that shows up when people are searching, and content that keeps you visible over time. No bloated agency packages. No handing you off to someone junior. Just straightforward work that helps real customers find you.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-5">What you can expect from me</h2>
              <ul className="flex flex-col gap-4">
                <li>
                  <p className="font-semibold text-zinc-900">Honesty</p>
                  <p className="text-zinc-500 text-sm leading-relaxed">I'll tell you what you actually need, not what sounds impressive.</p>
                </li>
                <li>
                  <p className="font-semibold text-zinc-900">Consistency</p>
                  <p className="text-zinc-500 text-sm leading-relaxed">I don't build something and disappear. If you're on a retainer, I'm in your corner month to month.</p>
                </li>
                <li>
                  <p className="font-semibold text-zinc-900">Results you can see</p>
                  <p className="text-zinc-500 text-sm leading-relaxed">More calls, more profile views, more people walking through your door.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 text-white">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl font-bold mb-4">Sound like a fit?</h2>
          <p className="text-zinc-400 mb-8">
            Let's talk about what we can build for your business.
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
