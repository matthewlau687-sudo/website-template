import Link from 'next/link'

export const metadata = { title: 'Services — Global Point Partners' }

const services = [
  {
    id: 'website-design',
    title: 'Website Design & Setup',
    price: 'Starting at $500/month',
    description:
      'Your website is often the first impression a potential customer has of your business. Your subscription covers design, build, hosting, domain costs, and ongoing maintenance so your site stays live and up to date without you having to manage any of it.',
  },
  {
    id: 'google-business',
    title: 'Google Business Profile',
    price: 'Starting at $200/month',
    description:
      'When someone searches for your type of business nearby, your Google listing is one of the first things they see. Your subscription covers setup, optimization, and ongoing management so your profile stays accurate and active.',
  },
  {
    id: 'monthly-content',
    title: 'Monthly Content',
    price: 'Starting at $300/month',
    description:
      'Maintaining visibility online requires consistent activity. Your subscription includes regular Google posts and social content managed on your behalf, keeping your business looking active and engaged every month.',
  },
  {
    id: 'monthly-retainer',
    title: 'Monthly Retainer',
    price: 'Starting at $400/month',
    description:
      'The all-in package. Your subscription covers website hosting and maintenance, Google Business management, monthly content, and a dedicated point of contact for any updates or questions that come up.',
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-white text-black">

      {/* Dark header */}
      <section className="bg-blue-950 text-white">
        <div className="max-w-3xl mx-auto px-6 py-28 text-center">
          <p className="text-sm font-semibold tracking-widest text-zinc-300 uppercase mb-4">
            What We Offer
          </p>
          <h1 className="text-4xl font-bold mb-6">Services</h1>
          <p className="text-zinc-300 text-lg max-w-xl mx-auto">
            Everything a small business needs to get found online, look professional, and stay visible over time.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              id={service.id}
              className="border border-zinc-100 rounded-2xl p-8 hover:border-zinc-300 transition-colors scroll-mt-20"
            >
              <h2 className="text-xl font-bold mb-1">{service.title}</h2>
              <p className="text-sm font-semibold text-zinc-400 mb-4">{service.price}</p>
              <p className="text-zinc-500 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 text-white">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get your business online?</h2>
          <p className="text-zinc-300 mb-8">
            Contact us to discuss which service is the right fit for your business.
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
