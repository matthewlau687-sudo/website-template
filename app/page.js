import Link from 'next/link'
import { client } from '../sanity/lib/client'
import { aboutQuery } from '../sanity/lib/queries'
import { urlFor } from '../sanity/lib/image'
import Image from 'next/image'

export default async function Home() {
  const about = await client.fetch(aboutQuery)

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {about?.profileImage && (
          <div className="shrink-0">
            <Image
              src={urlFor(about.profileImage).width(240).height(240).url()}
              alt={about?.name || 'Profile'}
              width={240}
              height={240}
              className="rounded-full object-cover border border-zinc-200"
            />
          </div>
        )}
        <div>
          <h1 className="text-4xl font-bold text-zinc-900 mb-3">
            {about?.name || 'Matthew Lau'}
          </h1>
          {about?.tagline && (
            <p className="text-xl text-zinc-500 mb-6">{about.tagline}</p>
          )}
          {about?.bio && (
            <p className="text-zinc-600 leading-relaxed max-w-prose mb-8">
              {about.bio}
            </p>
          )}
          <div className="flex gap-4">
            <Link
              href="/gallery"
              className="px-5 py-2.5 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:bg-zinc-700 transition-colors"
            >
              View Gallery
            </Link>
            <Link
              href="/blog"
              className="px-5 py-2.5 border border-zinc-300 text-zinc-700 text-sm font-medium rounded-lg hover:bg-zinc-100 transition-colors"
            >
              Read Blog
            </Link>
          </div>
        </div>
      </div>

      {!about && (
        <div className="mt-16 p-6 bg-amber-50 border border-amber-200 rounded-lg text-amber-800 text-sm">
          <strong>Getting started:</strong> Go to{' '}
          <Link href="/studio" className="underline">
            /studio
          </Link>{' '}
          and add your About info, gallery images, and blog posts.
        </div>
      )}
    </div>
  )
}
