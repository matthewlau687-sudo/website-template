import { client } from '../../sanity/lib/client'
import { aboutQuery } from '../../sanity/lib/queries'
import { urlFor } from '../../sanity/lib/image'
import Image from 'next/image'

export const metadata = { title: 'About — Matthew Lau' }

export default async function AboutPage() {
  const about = await client.fetch(aboutQuery)

  if (!about) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-20 text-zinc-500">
        No about info yet. Add it in the Studio.
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      {about.profileImage && (
        <Image
          src={urlFor(about.profileImage).width(160).height(160).url()}
          alt={about.name}
          width={160}
          height={160}
          className="rounded-full object-cover border border-zinc-200 mb-8"
        />
      )}
      <h1 className="text-3xl font-bold text-zinc-900 mb-2">{about.name}</h1>
      {about.tagline && (
        <p className="text-lg text-zinc-500 mb-8">{about.tagline}</p>
      )}
      {about.bio && (
        <p className="text-zinc-600 leading-relaxed whitespace-pre-line">
          {about.bio}
        </p>
      )}
    </div>
  )
}
