import Link from 'next/link'

export const metadata = { title: 'Services — Your Brand' }

const services = [
  {
    title: 'Website Design & Setup',
    price: 'Starting at $500',
    description:
      'Your website is the first thing people check before they call. I\'ll build you a clean, professional site that loads fast, looks great on mobile, and actually tells people what you do and how to reach you.',
  },
  {
    title: 'Google Business Profile',
    price: 'Starting at $200',
    description:
      'When someone searches for your type of business nearby, your Google listing is what they see first. I\'ll set it up, write it properly, and optimize it so you show up — and look credible when you do.',
  },
  {
    title: 'Monthly Content',
    price: 'Starting at $300/month',
    description:
      'Staying visible means staying active. I\'ll handle your Google posts and social content on a consistent schedule so your business looks alive and engaged without you having to think about it.',
  },
  {
    title: 'Monthly Retainer',
    price: 'Starting at $400/month',
    description:
      'For businesses that want everything handled ongoing — content, updates, profile maintenance, and a point of contact when something needs attention.',
  },
]

export default function ServicesPage() {
  return (
    <div className="bg-white text-black">

      {/* Dark header */}
      <section className="bg-zinc-950 text-white">
        <div className="max-w-3xl mx-auto px-6 py-28 text-center">
          <p className="text-sm font-semibold tracking-widest text-zinc-400 uppercase mb-4">
            What I Offer
          </p>
          <h1 className="text-4xl font-bold mb-6">Services</h1>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Everything a small business needs to get found online, look professional, and stay visible — without the agency price tag.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="border border-zinc-100 rounded-2xl p-8 hover:border-zinc-300 transition-colors"
            >
              <h2 className="text-xl font-bold mb-1">{service.title}</h2>
              <p className="text-sm font-semibold text-zinc-400 mb-4">{service.price}</p>
              <p className="text-zinc-500 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-zinc-100" />

      {/* FAQ-style note */}
      <section className="bg-zinc-50">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h2 className="text-xl font-bold mb-3">Not sure which service is right for you?</h2>
          <p className="text-zinc-500 mb-8">
            Every business is different. Reach out and I'll help you figure out exactly what you need — no pressure, no upsell.
          </p>
          <Link
            href="/contact"
            className="px-6 py-3 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:bg-zinc-700 transition-colors"
          >
            Let's Talk
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-950 text-white">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get your business online?</h2>
          <p className="text-zinc-400 mb-8">
            Let's find the right package for where you are and where you want to go.
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
