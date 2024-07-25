---
description: >-
 copyToClipboard() reference
---
# copyToClipboard()

This page provides information about the `copyToClipboard()` function signature and parameters, which allows you to copy the given string to the user's clipboard.


<ZoomImage src="/img/copyToClipboard.png" alt="copyToClipboard()" caption="copyToClipboard()" />



## Signature

```javascript
copyToClipboard(data: string, { debug: boolean, format: string }): Promise
```

### Parameters

#### data

<dd> 

The string contains the text data copied to the clipboard. This parameter can be a static string or dynamically generated content. For dynamic data, you can use mustache double curly braces`{{}}`.

</dd>

#### debug

<dd>

When set to `true`, this option logs detailed information about the clipboard operation to the console, including any potential errors or status updates. This parameter is particularly useful for debugging and troubleshooting issues with the clipboard functionality. The default value is `false`. 

This setting is not part of the action selection in the UI but can be configured programmatically using JavaScript. 

</dd>

#### format
<dd> 

The string specifies the MIME type of the copied text, which indicates the format of the content being copied to the clipboard. This parameter can be useful when dealing with specialized content types or when you need to ensure that the copied data is recognized correctly by other applications or systems. For example, specifying `application/json` is beneficial when copying JSON data, ensuring that the content is correctly interpreted as JSON.

</dd>

## Usage

Here are a few examples of how to copy content to the clipboard in different situations:

#### Copy JSON Data

<dd>

If you need to copy JSON data, use the `copyToClipboard()` function with the MIME type `application/json`, like:

```js
function copyJsonData(data) {
    copyToClipboard(JSON.stringify(data), { debug: false, format: 'application/json' });
}
```

</dd>


#### Copy Error Messages for Support


<dd>

To assist with debugging, you can copy detailed error messages to the clipboard, making it easier for users to share their issues with support teams.


```js
function copyErrorMessage(errorMessage) {
    copyToClipboard(errorMessage, { debug: true, format: 'text/plain' });
}
```

</dd>