import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    image: z.string().optional(),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    type: z.enum(['strategy', 'technical']).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
