import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import YoutubeEmbed from '@site/src/components/YoutubeEmbed';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  YoutubeEmbed,
};