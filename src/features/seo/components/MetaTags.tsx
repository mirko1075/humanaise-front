import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MetaTagsProps } from '../types';

export function MetaTags({ 
  title, 
  description, 
  keywords = 'AI automation, business automation, artificial intelligence',
  author = 'HumanAIse'
}: MetaTagsProps) {
  return (
    <Helmet>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="revisit-after" content="7 days" />
    </Helmet>
  );
}