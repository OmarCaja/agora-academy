import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

import { KINDS } from './data/itemKinds';
import { levelOrder } from './data/exercises';

const topics = defineCollection({
    loader: glob({ pattern: "**/*.json", base: "./src/content/topics" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        menuGroup: z.string().optional(),   // e.g. "Álgebra" — which nav group to appear in
        menuOrder: z.number().optional(),   // sort order within the group
        // Courses the topic is taught in (levelOrder keys, e.g. "2-bach"): page title and schema.
        levels: z.array(z.enum(levelOrder as [string, ...string[]])).nonempty(),
        sections: z.array(z.object({
            title: z.string(),
            items: z.array(z.object({
                title: z.string(),
                // What the card is (required): shown as a label above the title.
                kind: z.enum(KINDS),
                formula: z.string().optional(),
                example: z.string().optional(),
                description: z.string().optional()
            }))
        }))
    })
});

export const collections = { topics };
