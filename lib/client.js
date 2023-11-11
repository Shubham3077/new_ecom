import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url'


export const client = createClient({
  projectId: "2mfsnvdx",
  dataset: "ecom_jsm",
  apiVersion: "2023-07-11",
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN, 
  useCdn: true,
})


const builder = imageUrlBuilder(client)


export const urlFor = (source) => builder.image(source)