import { client } from '../../sanity/lib/client'
import { aboutQuery } from '../../sanity/lib/queries'
import { urlFor } from '../../sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'

export const revalidate = 0

export const metadata = { title: 'About Me — Global Point Partners' }

export default async function AboutPage() {
  const about = await client.fetch(aboutQuery)

  return (
    <div className="bg-white text-black">

      {/* Dark header */}
      <section className="bg-blue-950 text-white">
        <div className="max-w-3xl mx-auto px-6 py-28 text-center">
          <h1 className="text-4xl font-bold">About Me</h1>
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
        <h2 className="text-2xl font-bold mb-2">{about?.name || 'Matthew Lau'}</h2>
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
            I started this business because I believe every small business owner deserves a professional online presence — without the headaches or high costs that usually come with it. I work directly with each client to understand their goals and build something that truly represents their business.
          </p>
        )}
      </section>

      <div className="border-t border-zinc-100" />

      {/* CTA */}
      <section className="bg-blue-950 text-white">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's work together.</h2>
          <p className="text-zinc-400 mb-8">
            Have a project in mind? I'd love to hear about it.
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
