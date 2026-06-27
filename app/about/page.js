import { client } from '../../sanity/lib/client'
import { aboutQuery } from '../../sanity/lib/queries'
import { urlFor } from '../../sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import FadeIn from '../components/FadeIn'

export const revalidate = 0

export const metadata = { title: 'About — Global Point Partners' }

export default async function AboutPage() {
  const about = await client.fetch(aboutQuery)

  return (
    <div className="bg-white text-black">

      <section className="bg-blue-950 text-white">
        <div className="max-w-3xl mx-auto px-6 py-28 text-center">
          <FadeIn>
            <h1 className="text-4xl font-bold">About</h1>
          </FadeIn>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-20">
        <FadeIn>
          <div className="flex flex-col sm:flex-row gap-10 items-start">

            {about?.profileImage && (
              <Image
                src={urlFor(about.profileImage).width(400).height(400).quality(100).url()}
                alt={about?.name || 'Profile photo'}
                width={160}
                height={160}
                className="rounded-2xl object-cover border border-zinc-200 shrink-0"
              />
            )}

            <div className="flex flex-col gap-6">
              <div>
                <h2 className="text-2xl font-bold mb-1">{about?.name || 'Matthew Lau'}</h2>
                <p className="text-zinc-400 text-sm">Founder, Global Point Partners</p>
              </div>

              {about?.tagline && (
                <p className="text-zinc-500 text-lg leading-relaxed">{about.tagline}</p>
              )}

              {about?.bio ? (
                <p className="text-zinc-600 leading-relaxed whitespace-pre-line">{about.bio}</p>
              ) : (
                <p className="text-zinc-600 leading-relaxed">
                  Global Point Partners was founded on the belief that every small business deserves a professional online presence. I work closely with each client to understand their goals and deliver solutions that accurately represent their business and attract real customers.
                </p>
              )}

              <div className="bg-zinc-50 border border-zinc-100 rounded-2xl p-6 flex flex-col gap-4">
                <p className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">Contact</p>
                <a href="mailto:mlau1@globalpointpartners.com" className="flex items-center gap-3 group">
                  <span className="w-9 h-9 rounded-full bg-blue-950 text-white flex items-center justify-center shrink-0 text-sm">@</span>
                  <span className="text-sm text-zinc-700 group-hover:text-blue-950 transition-colors">mlau1@globalpointpartners.com</span>
                </a>
              </div>
            </div>

          </div>
        </FadeIn>
      </section>

      <div className="border-t border-zinc-100" />

      <section className="bg-blue-950 text-white">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-4">Interested in working together?</h2>
            <p className="text-zinc-300 mb-8">Reach out and I will get back to you within 24 hours.</p>
            <Link href="/contact" className="px-6 py-3 bg-white text-black text-sm font-medium rounded-lg hover:bg-blue-50 transition-colors">
              Get in Touch
            </Link>
          </FadeIn>
        </div>
      </section>

    </div>
  )
}
