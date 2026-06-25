import { client } from '../../sanity/lib/client'
import { aboutQuery } from '../../sanity/lib/queries'
import { urlFor } from '../../sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'

export const revalidate = 0

export const metadata = { title: 'About — Global Point Partners' }

export default async function AboutPage() {
  const about = await client.fetch(aboutQuery)

  return (
    <div className="bg-white text-black">

      {/* Dark header */}
      <section className="bg-blue-950 text-white">
        <div className="max-w-3xl mx-auto px-6 py-28 text-center">
          <h1 className="text-4xl font-bold">About</h1>
        </div>
      </section>

      {/* Profile */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        {about?.profileImage && (
          <Image
            src={urlFor(about.profileImage).width(400).height(400).quality(100).url()}
            alt={about?.name || 'Profile photo'}
            width={200}
            height={200}
            className="rounded-full object-cover border border-zinc-200 mb-8"
          />
        )}
        <h2 className="text-2xl font-bold mb-1">{about?.name || 'Matthew Lau'}</h2>
        <a
          href="mailto:mlau1@globalpointpartners.com"
          className="text-sm text-zinc-400 hover:text-zinc-700 transition-colors mb-6 inline-block"
        >
          mlau1@globalpointpartners.com
        </a>
        {about?.tagline && (
          <p className="text-zinc-500 text-lg mb-6">{about.tagline}</p>
        )}
        {about?.bio && (
          <p className="text-zinc-600 leading-relaxed whitespace-pre-line mb-10">
            {about.bio}
          </p>
        )}
        {!about?.bio && (
          <p className="text-zinc-600 leading-relaxed mb-10">
            Global Point Partners was founded on the belief that every small business deserves a professional online presence. We work closely with each client to understand their goals and deliver solutions that accurately represent their business and attract real customers.
          </p>
        )}
      </section>

      <div className="border-t border-zinc-100" />

      {/* CTA */}
      <section className="bg-blue-950 text-white">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in working together?</h2>
          <p className="text-zinc-300 mb-8">
            Reach out and let us know how we can support your business.
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
