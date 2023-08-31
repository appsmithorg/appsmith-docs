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
 The string contains the text data copied to the clipboard.
</dd>

#### debug
<dd>
The default value is <code>false</code>. When set to <code>true</code>, this option displays the information in the console. The parameter can be helpful for debugging.
</dd>

#### format
<dd> 
 The string specifies the <code>MIME</code> type of the copied text. The parameter can be helpful when using specialized content types, such as <code>application/json</code>.
</dd>
