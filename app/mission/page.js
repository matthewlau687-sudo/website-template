export const metadata = { title: 'Our Mission — Your Brand' }

export default function MissionPage() {
  return (
    <div className="bg-white text-black">

      {/* Header */}
      <section className="max-w-3xl mx-auto px-6 py-24 text-center">
        <p className="text-sm font-semibold tracking-widest text-zinc-400 uppercase mb-4">
          Who We Are
        </p>
        <h1 className="text-4xl font-bold mb-6">Our Mission</h1>
        <p className="text-zinc-500 text-lg leading-relaxed">
          We believe every small business deserves a strong online presence — not just the big ones with big budgets.
        </p>
      </section>

      <div className="border-t border-zinc-100" />

      {/* Description */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-xl font-bold mb-4">What We Do</h2>
            <p className="text-zinc-500 leading-relaxed">
              We partner with small businesses to design, build, and grow their online presence. Whether you're starting from scratch or looking to modernize an existing site, we handle the technical side so you can focus on running your business.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Why We Started</h2>
            <p className="text-zinc-500 leading-relaxed">
              Too many small businesses are left behind online — struggling with outdated websites or no web presence at all. We started this company to change that, making professional web design accessible and affordable for businesses of every size.
            </p>
          </div>
        </div>
      </section>

      <div className="border-t border-zinc-100" />

      {/* Goals */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold mb-12 text-center">Our Goals</h2>
        <div className="flex flex-col gap-8">
          <div className="flex gap-6 items-start">
            <span className="text-2xl font-bold text-zinc-200">01</span>
            <div>
              <h3 className="font-semibold mb-1">Make great web design accessible</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Deliver high-quality websites at a price point small businesses can actually afford.
              </p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <span className="text-2xl font-bold text-zinc-200">02</span>
            <div>
              <h3 className="font-semibold mb-1">Build long-term partnerships</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                We don't just build a site and disappear — we grow with our clients as their businesses evolve.
              </p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <span className="text-2xl font-bold text-zinc-200">03</span>
            <div>
              <h3 className="font-semibold mb-1">Drive real results</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Everything we build is designed with one goal in mind: helping your business attract more customers online.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
