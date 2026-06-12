export const blogPost = {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    },
    { name: 'author', title: 'Author', type: 'string' },
    { name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3 },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: { hotspot: true },
    },
    { name: 'publishedAt', title: 'Published At', type: 'datetime' },
  ],
  preview: {
    select: { title: 'title', subtitle: 'author', media: 'coverImage' },
  },
}
