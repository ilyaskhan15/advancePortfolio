import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    stack: z.array(z.string()),
    description: z.string(),
    repo: z.string().default('PLACEHOLDER'),
    featured: z.boolean().default(false)
  })
});

export const collections = { projects };
