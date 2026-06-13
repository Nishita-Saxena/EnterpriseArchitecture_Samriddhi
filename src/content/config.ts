import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const architectureDocs = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().int().positive(),
    category: z.enum([
      'executive-summary',
      'architecture-vision',
      'architecture-definition',
      'architecture-governance',
      'implementation'
    ]),

    status: z.enum([
      'Draft',
      'Review',
      'Approved'
    ]),
    image: z.string().optional(),
    version: z.string(),
  }),
});

export const collections = {
  architectureDocs,
};
