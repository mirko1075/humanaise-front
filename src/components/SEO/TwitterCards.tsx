import React from 'react';
import { Helmet } from 'react-helmet-async';

interface TwitterCardsProps {
  title: string;
  description: string;
  image: string;
}

export function TwitterCards({ title, description, image }: TwitterCardsProps) {
  return (
    <Helmet>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@HumanaiseAI" />
      <meta name="twitter:creator" content="@HumanaiseAI" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}