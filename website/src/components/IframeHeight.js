/*
 * Element to communicate docs height to parent window
 * Used by the customer portal to set dynamic height of iframe
 */

import React, { useEffect } from "react";

export default function IframeHeight() {
  useEffect(() => {
    if (window.top) {
      window.top.postMessage(`{dataType: "contentHeight", value: ${window.innerHeight}}`)
    }
  });

  return null;
}