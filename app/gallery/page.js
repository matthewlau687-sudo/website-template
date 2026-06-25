import { client } from '../../sanity/lib/client'
import { galleryQuery } from '../../sanity/lib/queries'
import { urlFor } from '../../sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'

export const revalidate = 0

export const metadata = { title: 'Portfolio — Global Point Partners' }

export default async function GalleryPage() {
  const images = await client.fetch(galleryQuery)

  return (
    <div className="bg-white text-black">

      {/* Dark header */}
      <section className="bg-blue-950 text-white">
        <div className="max-w-5xl mx-auto px-6 py-28 text-center">
          <p className="text-sm font-semibold tracking-widest text-zinc-300 uppercase mb-4">
            Our Work
          </p>
          <h1 className="text-4xl font-bold mb-6">
            Portfolio
          </h1>
          <p className="text-zinc-300 text-lg max-w-xl mx-auto">
            A selection of websites and digital projects we have delivered for small businesses across a range of industries.
          </p>
        </div>
      </section>

      {/* Portfolio grid */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        {images.length === 0 ? (
          <p className="text-zinc-400 text-center py-20">Portfolio coming soon.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((item) => (
              <div key={item._id} className="group">
                <div className="aspect-square overflow-hidden rounded-xl bg-zinc-100 border border-zinc-200">
                  {item.image && (
                    <Image
                      src={urlFor(item.image).width(600).height(600).url()}
                      alt={item.title || ''}
                      width={600}
                      height={600}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                </div>
                {(item.title || item.description) && (
                  <div className="mt-3">
                    {item.title && (
                      <p className="text-sm font-semibold text-zinc-800">{item.title}</p>
                    )}
                    {item.description && (
                      <p className="text-sm text-zinc-500 mt-0.5">{item.description}</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="bg-blue-950 text-white">
        <div className="max-w-5xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl font-bold mb-4">Interested in a professional website for your business?</h2>
          <p className="text-zinc-300 mb-8">
            Contact us to discuss your project and receive a custom proposal.
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
