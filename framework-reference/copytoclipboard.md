---
description: This function is used to copy text to the clipboard
---

# Copy To Clipboard

## Signature

```javascript
copyToClipboard(data: string, options: object): void
```

### Arguments

Uses the [copy-to-clipboard](https://www.npmjs.com/package/copy-to-clipboard) library

| **Argument Name** | **Description** |
| :--- | :--- |
| **data** | Data that would be copied |
| **options.debug** | Boolean. Optional. Enable output to console |
| **options.format** | String. Optional. Set the mime type of the text being copied |

