import {defineField, defineType} from 'sanity'

export const schemaTypes = [
  defineType({
    type: 'document',
    name: 'simpleDoc',
    fields: [
      defineField({
        name: 'greeting',
        type: 'internationalizedArrayString',
      }),
    ],
  }),
]
