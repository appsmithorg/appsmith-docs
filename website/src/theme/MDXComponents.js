import React from 'react';
// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import VideoEmbed from '@site/src/components/VideoEmbed';
import Message from '@site/src/components/Message';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  VideoEmbed,
  Message,
};