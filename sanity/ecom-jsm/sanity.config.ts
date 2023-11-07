import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Ecom JSM',

  projectId: '2mfsnvdx',
  dataset: 'ecom_jsm',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
