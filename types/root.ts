import { z } from 'zod';

const RootLayout = z.object({
  children: z.any(),
});

const LayoutApp = z.object({
    children: z.any(),
}).readonly();

export type RootSchemaProps = z.infer<typeof RootLayout>;

export type LayoutAppSchemaProps = z.infer<typeof LayoutApp>;