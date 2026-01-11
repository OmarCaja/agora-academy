import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const topics = defineCollection({
    loader: glob({ pattern: "**/*.json", base: "./src/content/topics" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        sections: z.array(z.object({
            title: z.string(),
            items: z.array(z.object({
                title: z.string(),
                formula: z.string().optional(),
                example: z.string().optional(),
                description: z.string().optional()
            }))
        }))
    })
});

export const collections = { topics };
