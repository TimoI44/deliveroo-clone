import { defineType, defineField, defineArrayMember } from 'sanity'

export const restaurant = defineType({
  type: "document",
  name: "restaurant",
  title: "Restaurant",
  fields: [
    defineField({ 
        type: "string",
        name: "title", 
        title: "Restaurant name",
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        type: "string",
        name: "short_description", 
        title: "Short description",
        validation: (Rule) => Rule.max(200),
    }),
    defineField({
        type: "image",
        name: "image", 
        title: "Image of the restaurant",
    }),
    defineField({
        type: "number",
        name: "lat", 
        title: "Latitude of the restaurant",
    }),
    defineField({
        type: "number",
        name: "long", 
        title: "Longitude of the restaurant",
    }),
    defineField({ 
        type: "string",
        name: "address", 
        title: "Restaurant address",
        validation: (Rule) => Rule.required(),
    }),
    defineField({ 
        type: "number",
        name: "rating", 
        title: "Rating of the restaurant",
        validation: (Rule) => Rule.required()
            .max(5)
            .min(1)
            .error("Please enter a number between 1 and 5"),
    }),
    defineField({ 
        type: "reference",
        to: [{ type: "category" }],
        name: "type", 
        title: "Category",
        validation: (Rule) => Rule.required(),
    }),
    defineField({ 
        type: "array",
        of: [{ type: "reference", to: [{type: "dish"}] }],
        name: "dishes", 
        title: "Dishes",
        validation: (Rule) => Rule.required(),
    }),
  ],
});
