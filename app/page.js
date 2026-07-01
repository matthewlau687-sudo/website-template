import Link from 'next/link'
import Image from 'next/image'
import FadeIn from './components/FadeIn'
import { client } from '../sanity/lib/client'
import { galleryQuery } from '../sanity/lib/queries'
import { urlFor } from '../sanity/lib/image'

export const revalidate = 0

export default async function Home() {
  const allImages = await client.fetch(galleryQuery)
  const previewImages = allImages.slice(0, 3)

  return (
    <div className="bg-white text-black">

      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center text-white overflow-hidden" style={{
        background: 'linear-gradient(rgba(23,37,84,0.85), rgba(23,37,84,0.92)), url("https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80") center/cover no-repeat'
      }}>
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        {/* Gradient fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-950 to-transparent" />

        <div className="relative max-w-5xl mx-auto px-6 py-36 w-full">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-blue-900/60 border border-blue-700 rounded-full px-4 py-1.5 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-medium text-blue-200 tracking-wide">Now taking new clients</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-8 max-w-3xl">
              If people can't find you online, they're finding someone else.
            </h1>
            <p className="text-zinc-300 text-lg max-w-xl mb-10 leading-relaxed">
              Global Point Partners builds and manages your entire online presence — website, Google Business, and ongoing content — so you can focus on running your business.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="px-6 py-3 bg-white text-blue-950 text-sm font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                Get in Touch
              </Link>
              <Link href="/services" className="px-6 py-3 border border-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-900 transition-colors">
                View Plans
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-zinc-100 bg-zinc-50">
        <div className="max-w-5xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { stat: '1–2 weeks', label: 'Average setup time' },
            { stat: '3 plans', label: 'Starting at $199/mo' },
            { stat: '24/7', label: 'Site stays live' },
            { stat: '30 days', label: 'Cancel anytime' },
          ].map((item) => (
            <FadeIn key={item.label}>
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-950 mb-1">{item.stat}</p>
                <p className="text-xs text-zinc-400 font-medium">{item.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* What we do - visual feature cards */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest text-blue-600 uppercase mb-3">What We Do</p>
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Everything your business needs online</h2>
            <p className="text-zinc-400 max-w-md mx-auto">From building your site to keeping it running and visible every month.</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
              title: 'Website Design',
              desc: 'Custom, professional websites built to represent your business and convert visitors into customers.',
              delay: 0,
            },
            {
              img: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=800&q=80',
              title: 'Google Business',
              desc: 'Get found in local searches with a fully optimized Google Business Profile managed for you.',
              delay: 100,
            },
            {
              img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
              title: 'Monthly Content',
              desc: 'Consistent posts and updates that keep your business active and visible online every month.',
              delay: 200,
            },
          ].map((card) => (
            <FadeIn key={card.title} delay={card.delay}>
              <div className="group rounded-2xl overflow-hidden border border-zinc-200 hover:shadow-xl transition-shadow duration-300">
                <div
                  className="relative h-52 overflow-hidden"
                  style={{ background: `linear-gradient(to top, rgba(0,0,0,0.6), transparent), url("${card.img}") center/cover no-repeat` }}
                >
                  <h3 className="absolute bottom-4 left-5 text-white font-bold text-lg">{card.title}</h3>
                </div>
                <div className="p-5">
                  <p className="text-sm text-zinc-500 leading-relaxed">{card.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Portfolio preview */}
      {previewImages.length > 0 && (
        <section className="bg-zinc-50 border-y border-zinc-100">
          <div className="max-w-5xl mx-auto px-6 py-24">
            <FadeIn>
              <div className="flex items-end justify-between mb-14">
                <div>
                  <p className="text-xs font-semibold tracking-widest text-blue-600 uppercase mb-3">Our Work</p>
                  <h2 className="text-3xl font-bold text-zinc-900">Recent projects</h2>
                </div>
                <Link href="/gallery" className="text-sm font-medium text-blue-950 hover:underline underline-offset-2">
                  View all →
                </Link>
              </div>
            </FadeIn>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {previewImages.map((item, i) => {
                const src = item.image
                  ? urlFor(item.image).width(800).height(600).url()
                  : item.autoScreenshot
                  ? urlFor(item.autoScreenshot).width(800).height(600).url()
                  : item.siteUrl
                  ? `https://image.thum.io/get/width/800/crop/600/${item.siteUrl}`
                  : null
                return (
                <FadeIn key={item._id} delay={i * 100}>
                  <div className="group aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-200 relative">
                    {src && (
                      <Image
                        src={src}
                        alt={item.title || ''}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    )}
                    {item.title && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                        <p className="text-white font-semibold">{item.title}</p>
                      </div>
                    )}
                  </div>
                </FadeIn>
              )})}
            </div>
          </div>
        </section>
      )}

      {/* Plans */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest text-blue-600 uppercase mb-3">Pricing</p>
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Simple plans, no surprises</h2>
            <p className="text-zinc-400 max-w-md mx-auto">Everything is handled for you. Pick the level of support that fits your business.</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: 'Basic', price: '$199', description: 'Custom website, hosting, domain, and up to 2 edit requests per month.', delay: 0 },
            { name: 'Standard', price: '$299', description: 'Everything in Basic plus Google Business Profile setup and monthly content updates.', delay: 100 },
            { name: 'Premium', price: '$499', description: 'Full-service management including social media, unlimited edits, and same-day support.', delay: 200 },
          ].map((plan) => (
            <FadeIn key={plan.name} delay={plan.delay}>
              <Link href="/services" className="group block border border-zinc-200 rounded-2xl p-7 hover:border-blue-950 hover:shadow-lg transition-all duration-300">
                <p className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-4">{plan.name}</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-zinc-900">{plan.price}</span>
                  <span className="text-sm text-zinc-400 ml-1">/mo</span>
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed mb-5">{plan.description}</p>
                <span className="text-sm font-medium text-blue-950 group-hover:underline underline-offset-2">See full details →</span>
              </Link>
            </FadeIn>
          ))}
        </div>
        <FadeIn>
          <p className="text-center text-zinc-400 text-sm mt-8">One-time $299 setup fee applies to all plans.</p>
        </FadeIn>
      </section>

      {/* Comparison */}
      <section className="bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-5xl mx-auto px-6 py-24">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-xs font-semibold tracking-widest text-blue-600 uppercase mb-3">Why Us</p>
              <h2 className="text-3xl font-bold text-zinc-900 mb-4">Why not just use a template or AI?</h2>
              <p className="text-zinc-400 max-w-md mx-auto">It is a fair question. Here is the honest difference.</p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FadeIn delay={0}>
              <div className="bg-white border border-zinc-200 rounded-2xl p-7 h-full">
                <p className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-5">Website Builder</p>
                <ul className="flex flex-col gap-3 text-sm text-zinc-500">
                  {['You design and build it yourself','Looks like thousands of other sites','Fees with no ongoing management','No Google Business setup included','No strategy or guidance','No support when issues arise'].map((item) => (
                    <li key={item} className="flex gap-2.5 items-start"><span className="text-red-300 mt-0.5 shrink-0">✗</span>{item}</li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="bg-white border border-zinc-200 rounded-2xl p-7 h-full">
                <p className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-5">AI Tools</p>
                <ul className="flex flex-col gap-3 text-sm text-zinc-500">
                  {['Output still needs expert editing','You manage every step yourself','Cannot set up your Google listing','Generic, no local knowledge','No accountability or follow-through','Demands significant time and effort'].map((item) => (
                    <li key={item} className="flex gap-2.5 items-start"><span className="text-red-300 mt-0.5 shrink-0">✗</span>{item}</li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="bg-blue-950 text-white rounded-2xl p-7 h-full">
                <p className="text-xs font-semibold tracking-widest text-blue-300 uppercase mb-5">Global Point Partners</p>
                <ul className="flex flex-col gap-3 text-sm text-zinc-300">
                  {['Fully managed and handled for you','Built specifically for your business','Simple, transparent monthly pricing','Google Business setup included','Strategy tailored to your goals','Ongoing support whenever you need it'].map((item) => (
                    <li key={item} className="flex gap-2.5 items-start"><span className="text-green-400 mt-0.5 shrink-0">✓</span>{item}</li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <FadeIn>
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest text-blue-600 uppercase mb-3">Process</p>
            <h2 className="text-3xl font-bold text-zinc-900">How it works</h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { num: '01', title: 'We connect', body: 'Share details about your business and goals. I listen carefully and ask the right questions to fully understand what you need.', delay: 0 },
            { num: '02', title: 'We build a plan', body: 'I provide an honest assessment of what will move the needle and outline a clear plan focused on results, not unnecessary add-ons.', delay: 100 },
            { num: '03', title: 'We get to work', body: 'I handle everything from start to finish. You stay focused on your business while I build and maintain your online presence.', delay: 200 },
          ].map((step) => (
            <FadeIn key={step.num} delay={step.delay}>
              <div className="relative pl-16">
                <span className="absolute left-0 top-0 text-5xl font-bold text-zinc-100 leading-none select-none">{step.num}</span>
                <h3 className="font-semibold text-zinc-900 mb-2 mt-1">{step.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{step.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative text-white overflow-hidden" style={{
        background: 'linear-gradient(rgba(23,37,84,0.88), rgba(23,37,84,0.95)), url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80") center/cover no-repeat'
      }}>
        <div className="relative max-w-5xl mx-auto px-6 py-28 text-center">
          <FadeIn>
            <p className="text-xs font-semibold tracking-widest text-blue-300 uppercase mb-4">Get Started</p>
            <h2 className="text-4xl font-bold mb-6">Ready to grow your online presence?</h2>
            <p className="text-zinc-300 mb-10 max-w-md mx-auto">
              Reach out today and I will get back to you within 24 hours to discuss the right plan for your business.
            </p>
            <Link href="/contact" className="inline-block px-8 py-4 bg-white text-blue-950 text-sm font-semibold rounded-lg hover:bg-blue-50 transition-colors">
              Get in Touch
            </Link>
          </FadeIn>
        </div>
      </section>

    </div>
  )
}
