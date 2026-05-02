import { CalendarIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: CalendarIcon,
  fields: [
    // ── Core ──────────────────────────────────────────────────────────
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(3).max(120),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      description: 'Brief summary shown on cards and in meta tags.',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'date',
      title: 'Event Date & Time',
      type: 'datetime',
      options: {
        dateFormat: 'DD-MM-YYYY',
        timeFormat: 'HH:mm',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'e.g. "Chennai" or "Online"',
    }),
    defineField({
      name: 'registrationLink',
      title: 'Registration Link',
      type: 'url',
    }),
    defineField({
      name: 'isFeatured',
      title: 'Featured Event',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      options: { layout: 'tags' },
    }),

    // ── Media ─────────────────────────────────────────────────────────
    defineField({
      name: 'banner',
      title: 'Banner Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({ name: 'alt', title: 'Alternative Text', type: 'string' }),
      ],
    }),
    defineField({
      name: 'gallery',
      title: 'Photo Gallery',
      description: 'Additional images shown in a slider on the event page.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({ name: 'alt', title: 'Alternative Text', type: 'string' }),
          ],
        }),
      ],
    }),

    // ── Rich content ──────────────────────────────────────────────────
    defineField({
      name: 'body',
      title: 'Full Event Details (Rich Text)',
      description: 'Full event description with headings, bullets, links etc.',
      type: 'blockContent',
    }),

    // ── FAQs ──────────────────────────────────────────────────────────
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'faq',
          title: 'FAQ',
          fields: [
            defineField({ name: 'question', title: 'Question', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({ name: 'answer', title: 'Answer', type: 'text', rows: 4 }),
          ],
          preview: { select: { title: 'question' } },
        }),
      ],
    }),

    // ── How to Apply / Process Steps ──────────────────────────────────
    defineField({
      name: 'howToApply',
      title: 'How to Apply / Process Steps',
      description: 'Step-by-step process for registering or attending.',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'step',
          title: 'Step',
          fields: [
            defineField({ name: 'title', title: 'Step Title', type: 'string', validation: (Rule) => Rule.required() }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
          ],
          preview: { select: { title: 'title' } },
        }),
      ],
    }),
  ],

  orderings: [
    { title: 'Event Date, Newest First', name: 'dateDesc', by: [{ field: 'date', direction: 'desc' }] },
    { title: 'Event Date, Oldest First', name: 'dateAsc', by: [{ field: 'date', direction: 'asc' }] },
  ],

  preview: {
    select: { title: 'title', date: 'date', media: 'banner', location: 'location' },
    prepare(selection) {
      const { title, date, media, location } = selection
      const formattedDate = date
        ? new Date(date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
        : 'No date set'
      return { title, subtitle: `${formattedDate}${location ? ` · ${location}` : ''}`, media }
    },
  },
})
