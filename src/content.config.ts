import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const architectureDocs = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content",
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().int().positive(),
    category: z.string(),
    image: z.string().optional(),
    status: z.enum(['Draft', 'Review', 'Approved']),
    version: z.union([z.string(), z.number()]).transform((value) => String(value)),
  }),
});

export const collections = {
  architectureDocs,
};