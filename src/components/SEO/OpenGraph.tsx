import React from 'react';
import { Helmet } from 'react-helmet-async';

interface OpenGraphProps {
  title: string;
  description: string;
  url: string;
  image: string;
  locale?: string;
}

export function OpenGraph({ title, description, url, image, locale = 'en_US' }: OpenGraphProps) {
  return (
    <Helmet>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={locale} />
    </Helmet>
  );
}