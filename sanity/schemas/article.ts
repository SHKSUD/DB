export const article = {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    { name: 'title',          title: 'Title',              type: 'string',   validation: (R: any) => R.required() },
    { name: 'slug',           title: 'URL Slug',           type: 'slug',     options: { source: 'title', maxLength: 96 }, validation: (R: any) => R.required() },
    { name: 'category',       title: 'Category',           type: 'string',   options: { list: ['DIABETES','PHARMACOLOGY','NUTRITION','GENERAL','LIFESTYLE'] } },
    { name: 'publishedAt',    title: 'Published At',       type: 'datetime', initialValue: () => new Date().toISOString() },
    { name: 'seoDescription', title: 'SEO Meta Description (160 chars)', type: 'text', rows: 3 },
    { name: 'body',           title: 'Article Body',       type: 'array',    of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }] },
  ],
  preview: { select: { title: 'title', subtitle: 'category' } },
}
