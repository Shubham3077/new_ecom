export default {
  name: 'products',
  type: 'document',
  title: 'Products',
  fields: [
    {
    name: 'image',
    title: 'Image',
    type: 'array',
    of: [{type: "image"}],
    options: {
      hotspot: true // to crop and set center of focus of uploaded images
    }
  },
  {
    name: 'name',
    title: 'Name',
    type: 'string',
  },
  {
    name: 'slug', //used to create new unique URLs.
    Title: 'Slug',
    type: 'slug',
    options: {
      source: 'name',
      maxLength: 90,
    }
  },
  {
    name: 'price',
    title: 'Price',
    type: 'number',
  },
  {
    name: 'details',
    title: 'Details',
    type: 'string'
  }
]
  
}