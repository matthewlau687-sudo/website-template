import { client } from '../../sanity/lib/client'
import { galleryQuery } from '../../sanity/lib/queries'
import { urlFor } from '../../sanity/lib/image'
import Image from 'next/image'

export const metadata = { title: 'Gallery — Matthew Lau' }

export default async function GalleryPage() {
  const images = await client.fetch(galleryQuery)

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-zinc-900 mb-10">Gallery</h1>

      {images.length === 0 ? (
        <p className="text-zinc-500">No images yet. Add some in the Studio.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((item) => (
            <div key={item._id} className="group">
              <div className="aspect-square overflow-hidden rounded-lg bg-zinc-100 border border-zinc-200">
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
                    <p className="text-sm font-medium text-zinc-800">{item.title}</p>
                  )}
                  {item.description && (
                    <p className="text-sm text-zinc-500 mt-0.5">{item.description}</p>
                  )}
                  {item.date && (
                    <p className="text-xs text-zinc-400 mt-0.5">{item.date}</p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
