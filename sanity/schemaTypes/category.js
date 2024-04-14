import { defineType, defineField, defineArrayMember } from 'sanity'

export const category = defineType({
  type: "document",
  name: "category",
  title: "Category",
  fields: [
    defineField({ 
        type: "string",
        name: "name", 
        title: "Category name",
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        type: "image",
        name: "image", 
        title: "Image of the category",
    }),
  ]
});