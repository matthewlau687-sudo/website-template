import Link from 'next/link'
import FadeIn from '../components/FadeIn'
import PricingCards from '../components/PricingCards'

export const metadata = { title: 'Services — Global Point Partners' }

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
        <PricingCards />
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
