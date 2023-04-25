---
sidebar_position: 7
---
# Copy to clipboard

This function is used to copy text to the clipboard.




<figure>
  <img src="/img/copy-action.png" style= {{width:"700px", height:"auto"}} alt="Copy to clipboard"/>
  <figcaption align = "center"><i>Copy to clipboard</i></figcaption>
</figure>

## Signature

```javascript
copyToClipboard(data: string, options: object): Promise
```

### Arguments

Uses the [copy-to-clipboard](https://www.npmjs.com/package/copy-to-clipboard) library

| **Argument Name**  | **Description**                                              |
| ------------------ | ------------------------------------------------------------ |
| **data**           | Data that would be copied                                    |
| **options.debug**  | Boolean. Optional. Enable output to console                  |
| **options.format** | String. Optional. Set the mime type of the text being copied |
