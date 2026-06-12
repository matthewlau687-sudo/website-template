export const blogSubmission = {
  name: 'blogSubmission',
  title: 'Blog Submission',
  type: 'document',
  fields: [
    { name: 'submitterName', title: 'Submitter Name', type: 'string' },
    { name: 'submitterEmail', title: 'Submitter Email', type: 'string' },
    { name: 'title', title: 'Post Title', type: 'string' },
    { name: 'content', title: 'Content', type: 'text', rows: 10 },
    { name: 'submittedAt', title: 'Submitted At', type: 'datetime' },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      initialValue: 'pending',
      options: {
        list: [
          { title: 'Pending Review', value: 'pending' },
          { title: 'Approved', value: 'approved' },
          { title: 'Rejected', value: 'rejected' },
        ],
        layout: 'radio',
      },
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'submitterName' },
  },
}
