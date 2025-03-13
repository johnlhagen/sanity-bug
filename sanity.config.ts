import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {internationalizedArray} from 'sanity-plugin-internationalized-array'

export default defineConfig([
  {
    name: 'default',
    title: 'i8n-test',
    projectId: 'trxxiwve',
    dataset: 'production',
    basePath: '/default',
    plugins: [
      structureTool(),
      visionTool(),
      internationalizedArray({
        languages: [
          {id: 'en', title: 'English'},
          {id: 'fr', title: 'French'},
        ],
        defaultLanguages: ['en'],
        fieldTypes: ['string'],
      }),
    ],
    schema: {
      types: schemaTypes,
    },
  },
  {
    name: 'another',
    title: 'i8n-test-another',
    projectId: 'trxxiwve',
    dataset: 'production',
    basePath: '/another',
    plugins: [
      structureTool(),
      visionTool(),
      //     internationalizedArray({
      //   languages: [
      //     {id: 'en', title: 'English'},
      //     {id: 'fr', title: 'French'},
      //   ],
      //   defaultLanguages: ['en'],
      //   fieldTypes: ['string'],
      // })
    ],
    schema: {
      types: schemaTypes,
    },
  },
])
