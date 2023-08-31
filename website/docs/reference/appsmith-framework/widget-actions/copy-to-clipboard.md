---
description: >-
  copyToClipboard() reference
---
# copyToClipboard()

The `copyToClipboard()` function copies the given string to the user's clipboard. This page provides information about the function and its parameters.

## Signature

```javascript
copyToClipboard(data: string, { debug: boolean, format: string }): Promise
```

### Parameters

#### data
<dd> 
  The string containing text data that is copied to the clipboard.
</dd>

#### debug
<dd>
When set to <code>true</code>, this option enables the function to output information to the console. This can be helpful for debugging purposes. It defaults to <code>false</code>.
</dd>

#### format
<dd> 
  This parameter allows you to specify the <code>MIME</code> type of the text being copied. This can be useful when dealing with specialized content types. For example, <em>application/json</em>.
</dd>