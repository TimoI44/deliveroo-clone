import { defineType, defineField, defineArrayMember } from 'sanity'

export const featured = defineType({
  type: "document",
  name: "featured",
  title: "Featured Menu categories",
  fields: [
    defineField({ 
        type: "string",
        name: "name", 
        title: "Featured name",
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        type: "string",
        name: "short_description", 
        title: "Short description",
        validation: (Rule) => Rule.max(200),
    }),
    defineField({ 
        type: "array",
        of: [{ type: "reference", to: [{type: "restaurant"}] }],
        name: "restaurants", 
        title: "Restaurants",
        validation: (Rule) => Rule.required(),
    }),
  ]
});