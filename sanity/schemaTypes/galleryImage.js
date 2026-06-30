export const galleryImage = {
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  fields: [
    { name: 'title', title: 'Project Name', type: 'string' },
    { name: 'siteUrl', title: 'Website URL', type: 'url', description: 'Paste the live site URL and a screenshot will be generated automatically.' },
    {
      name: 'image',
      title: 'Custom Image (optional)',
      type: 'image',
      options: { hotspot: true },
      description: 'Upload a custom image to override the auto-generated screenshot.',
    },
    { name: 'description', title: 'Description', type: 'text', rows: 3 },
    { name: 'date', title: 'Date', type: 'date' },
  ],
  preview: {
    select: { title: 'title', media: 'image' },
  },
}
