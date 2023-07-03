import { z, reference, defineCollection } from 'astro:content';

const dtprCategories = defineCollection({
  type: 'content', 
  schema: z.object({
    name: z.string(),
    headline: z.string(),
    id: z.string(),
  }),
});

const dtprElements = defineCollection({
  type: 'content',
  schema: z.object({
    category: z.string(),
    name: z.string(),
    id: z.string().optional(), // TODO: This should be required, but translated content does not allows have an id
    description: z.string(),
    icon: z.string().url(),
  }),
});

export const collections = {
  dtpr_categories: dtprCategories,
  dtpr_elements: dtprElements,
}