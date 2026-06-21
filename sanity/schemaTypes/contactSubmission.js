export const contactSubmission = {
  name: 'contactSubmission',
  title: 'Contact Submission',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'email', title: 'Email', type: 'string' },
    { name: 'phone', title: 'Phone (optional)', type: 'string' },
    { name: 'message', title: 'Message', type: 'text', rows: 5 },
    { name: 'submittedAt', title: 'Submitted At', type: 'datetime' },
  ],
  preview: {
    select: { title: 'name', subtitle: 'email' },
  },
}
