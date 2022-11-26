import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import VideoEmbed from '@site/src/components/VideoEmbed';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  VideoEmbed,
};