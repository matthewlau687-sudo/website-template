export const aboutQuery = `*[_type == "about"][0] {
  name,
  tagline,
  bio,
  profileImage,
}`

export const galleryQuery = `*[_type == "galleryImage"] | order(_createdAt desc) {
  _id,
  title,
  image,
  siteUrl,
  description,
  date,
}`

export const blogPostsQuery = `*[_type == "blogPost"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  coverImage,
  author,
  publishedAt,
}`

export const blogPostBySlugQuery = `*[_type == "blogPost" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  excerpt,
  content,
  coverImage,
  author,
  publishedAt,
}`
