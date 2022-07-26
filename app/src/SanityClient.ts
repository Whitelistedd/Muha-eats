import sanityClient from '@sanity/client'
import { SANITY_PROJECT_ID, SANITY_TOKEN } from '@env'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = sanityClient({
  projectId: SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-07-24', // use current UTC date - see "specifying API version"!
  token: SANITY_TOKEN, // or leave blank for unauthenticated usage
  useCdn: true, // `false` if you want to ensure fresh data
})


const builder = imageUrlBuilder(client)

export const urlFor = (source: SanityImageSource) => builder.image(source)