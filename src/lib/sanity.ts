import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(sanityClient)
export const urlFor = (source: any) => builder.image(source)

export async function getArticles() {
  return sanityClient.fetch(
    `*[_type == "article"] | order(publishedAt desc) {
      _id, title, slug, category, publishedAt, seoDescription
    }`
  )
}

export async function getArticleBySlug(slug: string) {
  return sanityClient.fetch(
    `*[_type == "article" && slug.current == $slug][0] {
      _id, title, slug, category, publishedAt, seoDescription, body
    }`,
    { slug }
  )
}
