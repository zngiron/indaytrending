import { z } from 'zod';

const schema = z.object({
  NODE_ENV: z.enum(['development', 'production']),
  DOMAIN: z.string().url(),
  API: z.string().url(),
  ANALYTICS: z.string(),
});

export const env = schema.parse({
  NODE_ENV: process.env.NODE_ENV,
  DOMAIN: process.env.NEXT_PUBLIC_DOMAIN,
  API: process.env.NEXT_PUBLIC_API,
  ANALYTICS: process.env.NEXT_PUBLIC_ANALYTICS,
});
