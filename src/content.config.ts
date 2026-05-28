import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/blog',
  }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    lang: z.enum(['ko', 'en', 'ja']).default('ko'),
    tags: z.array(z.string()).default([]),
    summary: z.string().default(''),
    cover: z.string().optional(),
    category: z.string().default('general'),
  }),
});

export const collections = {
  blog,
};
