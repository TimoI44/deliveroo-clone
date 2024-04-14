import { defineType, defineField, defineArrayMember } from 'sanity'

export const dish = defineType({
  type: "document",
  name: "dish",
  title: "Dish",
  fields: [
    defineField({ 
        type: "string",
        name: "name", 
        title: "Dish name",
        validation: (Rule) => Rule.required(),
    }),
    defineField({ 
        type: "string",
        name: "short_description", 
        title: "Short description of the dish",
        validation: (Rule) => Rule.max(200),
    }),
    defineField({ 
        type: "number",
        name: "price", 
        title: "Price of the dish in Euro",
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        type: "image",
        name: "image", 
        title: "Image of the Dish",
    }),
  ]
});