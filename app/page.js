import Link from 'next/link'

export const revalidate = 0

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-32 text-center">
      <h1 className="text-5xl font-bold text-black mb-4">Matthew Lau</h1>
      <p className="text-zinc-500 text-lg mb-10">Welcome to my personal site.</p>
      <div className="flex justify-center gap-4">
        <Link
          href="/about"
          className="px-5 py-2.5 bg-black text-white text-sm font-medium rounded-lg hover:bg-zinc-700 transition-colors"
        >
          About Me
        </Link>
        <Link
          href="/gallery"
          className="px-5 py-2.5 border border-zinc-300 text-black text-sm font-medium rounded-lg hover:bg-zinc-100 transition-colors"
        >
          Gallery
        </Link>
        <Link
          href="/blog"
          className="px-5 py-2.5 border border-zinc-300 text-black text-sm font-medium rounded-lg hover:bg-zinc-100 transition-colors"
        >
          Blog
        </Link>
      </div>
    </div>
  )
}
