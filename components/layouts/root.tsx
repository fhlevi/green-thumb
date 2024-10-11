import { RootSchemaProps } from '@/types/root';
import React from 'react';

export const Root = ({ children }: RootSchemaProps) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};
