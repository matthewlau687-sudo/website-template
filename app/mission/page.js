import Link from 'next/link'
import FadeIn from '../components/FadeIn'

export const metadata = { title: 'Our Mission — Global Point Partners' }

export default function MissionPage() {
  return (
    <div className="bg-white text-black">

      <section className="bg-blue-950 text-white">
        <div className="max-w-3xl mx-auto px-6 py-28 text-center">
          <FadeIn>
            <p className="text-sm font-semibold tracking-widest text-zinc-300 uppercase mb-4">Why We Started</p>
            <h1 className="text-4xl font-bold mb-6">
              Strong businesses were being overlooked simply because they lacked an online presence.
            </h1>
            <p className="text-zinc-300 text-lg leading-relaxed">
              Our mission is to change that by making professional digital services accessible to every small business.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-20">
        <FadeIn>
          <h2 className="text-xl font-bold mb-5">The reality for most small businesses</h2>
          <p className="text-zinc-500 leading-relaxed">
            Many business owners are exceptional at what they do and have earned the loyalty of their customers. Yet when a potential client searches online for the services they offer, those businesses are nowhere to be found. Whether it is an outdated website, the absence of a Google Business listing, or no online presence at all, the gap is costing them real customers every day. Meanwhile, competitors with a stronger digital presence continue to capture that business instead.
          </p>
          <p className="text-zinc-900 font-semibold mt-6 text-lg">That is the gap Global Point Partners exists to close.</p>
        </FadeIn>
      </section>

      <div className="border-t border-zinc-100" />

      <section className="bg-zinc-50">
        <div className="max-w-3xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <FadeIn delay={0}>
              <h2 className="text-xl font-bold mb-5">What we do</h2>
              <p className="text-zinc-500 leading-relaxed">
                We work directly with small business owners to establish the fundamentals of a strong online presence. This includes building professional websites, setting up and optimizing Google Business profiles, and managing ongoing content to keep businesses visible and credible over time. Every engagement is handled with care and tailored to the specific needs of the business we are serving.
              </p>
            </FadeIn>
            <FadeIn delay={100}>
              <h2 className="text-xl font-bold mb-5">What you can expect from us</h2>
              <ul className="flex flex-col gap-4">
                <li>
                  <p className="font-semibold text-zinc-900">Transparency</p>
                  <p className="text-zinc-500 text-sm leading-relaxed">We provide honest recommendations based on what your business actually needs, not what generates the most revenue for us.</p>
                </li>
                <li>
                  <p className="font-semibold text-zinc-900">Consistency</p>
                  <p className="text-zinc-500 text-sm leading-relaxed">We build lasting relationships with our clients. For those on a retainer, we remain actively engaged in supporting your growth month after month.</p>
                </li>
                <li>
                  <p className="font-semibold text-zinc-900">Measurable results</p>
                  <p className="text-zinc-500 text-sm leading-relaxed">More calls, increased profile visibility, and more customers walking through your door.</p>
                </li>
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-blue-950 text-white">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-4">Ready to grow your online presence?</h2>
            <p className="text-zinc-300 mb-8">
              Contact us today to discuss what Global Point Partners can do for your business.
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
