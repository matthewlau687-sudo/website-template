import Link from 'next/link'
import FadeIn from '../components/FadeIn'
import PricingCards from '../components/PricingCards'

export const metadata = { title: 'Services — Global Point Partners' }

const addons = [
  {
    title: 'AI Chatbot',
    price: '$49+/mo',
    description: 'Add an AI-powered chat widget to your website that answers visitor questions automatically, day or night.',
  },
  {
    title: 'E-commerce / Shopify Integration',
    price: '$79/mo',
    description: 'Connect your website to a Shopify store or add e-commerce functionality so customers can buy directly from your site.',
  },
  {
    title: 'Online Booking System',
    price: '$49/mo',
    description: 'Let clients schedule appointments or consultations directly from your website with a built-in booking widget.',
  },
  {
    title: 'Additional Social Media Platform',
    price: '$50/mo',
    description: 'Extend your monthly content management to a third social media platform beyond what is included in your plan.',
  },
  {
    title: 'Monthly Email Newsletter',
    price: '$59/mo',
    description: 'A professionally written and designed email newsletter sent to your customer list every month to keep your audience engaged.',
  },
]

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

      {/* Add-ons */}
      <section className="bg-zinc-50 border-t border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <FadeIn>
            <div className="mb-12">
              <p className="text-xs font-semibold tracking-widest text-blue-600 uppercase mb-3">Add-ons</p>
              <h2 className="text-3xl font-bold text-zinc-900 mb-3">Enhance your plan</h2>
              <p className="text-zinc-400 max-w-xl">
                Optional extras you can add to any plan. Each is billed monthly alongside your subscription.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {addons.map((addon, i) => (
              <FadeIn key={addon.title} delay={(i % 2) * 100}>
                <div className="bg-white border border-zinc-200 rounded-2xl p-6 flex gap-5 items-start hover:border-zinc-300 hover:shadow-sm transition-all duration-200">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-zinc-900">{addon.title}</h3>
                      <span className="text-sm font-semibold text-blue-950 ml-4 shrink-0">{addon.price}</span>
                    </div>
                    <p className="text-sm text-zinc-500 leading-relaxed">{addon.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <p className="text-zinc-400 text-sm mt-8">
              Add-ons can be included when signing up or added to your plan at any time. Contact us to discuss.
            </p>
          </FadeIn>
        </div>
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
