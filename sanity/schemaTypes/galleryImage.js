export const galleryImage = {
  name: 'galleryImage',
  title: 'Gallery Image',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    },
    { name: 'description', title: 'Description', type: 'text', rows: 3 },
    { name: 'date', title: 'Date', type: 'date' },
  ],
  preview: {
    select: { title: 'title', media: 'image' },
  },
}
