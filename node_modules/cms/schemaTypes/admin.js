export const adminType = {
  name: 'admin',
  title: 'Admin User',
  type: 'document',
  fields: [
    {
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: Rule => Rule.required().email()
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      options: {
        list: [
          { title: 'Super Admin', value: 'superadmin' },
          { title: 'Admin', value: 'admin' }
        ]
      },
      initialValue: 'admin',
      validation: Rule => Rule.required()
    },
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    }
  ]
}
