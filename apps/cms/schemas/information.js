import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'information',
  title: 'Informasi',
  type: 'document',
  icon: () => '📋',
  fields: [
    defineField({
      name: 'title',
      title: 'Judul',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).max(150),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Ringkasan',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(300),
    }),
    defineField({
      name: 'image',
      title: 'Gambar Utama',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'category',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Artikel', value: 'artikel' },
          { title: 'Video', value: 'video' },
          { title: 'Infografis', value: 'infografis' },
          { title: 'Regulasi', value: 'regulasi' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mediaType',
      title: 'Jenis Media',
      type: 'string',
      options: {
        list: [
          { title: 'Artikel', value: 'article' },
          { title: 'Video YouTube', value: 'youtube' },
          { title: 'Video Upload', value: 'video' },
        ],
      },
    }),
    defineField({
      name: 'mediaUrl',
      title: 'URL Media',
      type: 'url',
      description: 'URL video YouTube atau media eksternal',
      hidden: ({ parent }) => parent?.mediaType === 'article',
    }),
    defineField({
      name: 'body',
      title: 'Konten',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Keterangan Gambar',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Tanggal Publikasi',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],
  orderings: [
    {
      title: 'Tanggal Terbaru',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
    },
  },
});
