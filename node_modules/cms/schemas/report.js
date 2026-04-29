import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'report',
  title: 'Pengaduan',
  type: 'document',
  icon: () => '🚨',
  fields: [
    defineField({
      name: 'name',
      title: 'Nama Pelapor',
      type: 'string',
    }),
    defineField({
      name: 'phone',
      title: 'Nomor Telepon',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Lokasi Kejadian',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi Kejadian',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'evidence',
      title: 'Bukti Pendukung',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'Pending' },
          { title: 'Sedang Diproses', value: 'Investigating' },
          { title: 'Selesai', value: 'Resolved' },
        ],
      },
      initialValue: 'Pending',
    }),
    defineField({
      name: 'submittedAt',
      title: 'Tanggal Masuk',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    }),
  ],
  orderings: [
    {
      title: 'Terbaru',
      name: 'submittedAtDesc',
      by: [{ field: 'submittedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'location',
      subtitle: 'status',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Tanpa Lokasi',
        subtitle: `Status: ${subtitle || 'Pending'}`,
      };
    },
  },
});
