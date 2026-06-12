import { client } from '../../../sanity/lib/client'
import { blogPostBySlugQuery, blogPostsQuery } from '../../../sanity/lib/queries'
import { PortableText } from '@portabletext/react'
import { notFound } from 'next/navigation'
import Link from 'next/link'

export async function generateStaticParams() {
  const posts = await client.fetch(blogPostsQuery)
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }) {
  const post = await client.fetch(blogPostBySlugQuery, { slug: params.slug })
  return { title: post ? `${post.title} — Matthew Lau` : 'Post not found' }
}

export default async function BlogPostPage({ params }) {
  const post = await client.fetch(blogPostBySlugQuery, { slug: params.slug })

  if (!post) return notFound()

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Link
        href="/blog"
        className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors mb-8 inline-block"
      >
        ← Back to Blog
      </Link>

      <h1 className="text-3xl font-bold text-zinc-900 mb-3">{post.title}</h1>
      <p className="text-sm text-zinc-400 mb-10">
        {post.author && <span>{post.author} · </span>}
        {post.publishedAt &&
          new Date(post.publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
      </p>

      {post.content && (
        <div className="prose prose-zinc max-w-none">
          <PortableText value={post.content} />
        </div>
      )}
    </div>
  )
}
