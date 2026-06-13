import Link from 'next/link'
import { client } from '../../sanity/lib/client'
import { blogPostsQuery } from '../../sanity/lib/queries'

export const revalidate = 0

export const metadata = { title: 'Blog — Matthew Lau' }

export default async function BlogPage() {
  const posts = await client.fetch(blogPostsQuery)

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-3xl font-bold text-zinc-900">Blog</h1>
        <Link
          href="/blog/submit"
          className="px-4 py-2 bg-zinc-900 text-white text-sm font-medium rounded-lg hover:bg-zinc-700 transition-colors"
        >
          Submit a Post
        </Link>
      </div>

      {posts.length === 0 ? (
        <p className="text-zinc-500">No posts yet.</p>
      ) : (
        <div className="divide-y divide-zinc-200">
          {posts.map((post) => (
            <article key={post._id} className="py-8">
              <Link href={`/blog/${post.slug}`} className="group">
                <h2 className="text-xl font-semibold text-zinc-900 group-hover:text-zinc-600 transition-colors mb-1">
                  {post.title}
                </h2>
              </Link>
              <p className="text-sm text-zinc-400 mb-3">
                {post.author && <span>{post.author} · </span>}
                {post.publishedAt &&
                  new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
              </p>
              {post.excerpt && (
                <p className="text-zinc-600 leading-relaxed">{post.excerpt}</p>
              )}
              <Link
                href={`/blog/${post.slug}`}
                className="inline-block mt-3 text-sm font-medium text-zinc-900 underline underline-offset-2 hover:text-zinc-600"
              >
                Read more
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
