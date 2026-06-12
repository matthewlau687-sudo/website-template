export const about = {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    { name: 'name', title: 'Your Name', type: 'string' },
    { name: 'tagline', title: 'Tagline / Short Description', type: 'string' },
    { name: 'bio', title: 'Bio', type: 'text', rows: 6 },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
      options: { hotspot: true },
    },
  ],
}
