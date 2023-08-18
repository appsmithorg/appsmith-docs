---
sidebar_position: 6
---
# download()

With Appsmith, users have the ability to download a wide range of file formats. This action serves the purpose of downloading any data as a file. The feature is made possible by using  [downloadjs](https://github.com/rndme/download) library.

<figure>
  <img src="/img/download-action.png" style= {{width:"700px", height:"auto"}} alt="Download"/>
  <figcaption align = "center"><i>Download</i></figcaption>
</figure>


## Signature

```javascript
download(data: any, fileName: string, fileType?: string): Promise
```

### Arguments

| **Argument Name** | **Description**                            |
| ----------------- | ------------------------------------------ |
| **data**          | Data or URL that would be downloaded       |
| **fileName**      | Name of the file to be downloaded          |
| **fileType**      | The mime type of the file to be downloaded |

## Supported file type
Appsmith offers wide range support for downloading files in various formats, including:

* Plain text
* HTML
* CSV
* JSON
* JPEG
* PNG
* SVG

:::info
The Download action doesn't convert the file to a specific type and it's downloaded in the original format. If you need to change the file type, you would need to convert the data to a specific format using JavaScript before downloading.
:::


## Examples

### Downloading a plain text
To download a plain text document, the data passed to the download action should be a `string` representation of the text content to be downloaded. Additionally, a `fileName`and an optional `fileType` should be provided as parameters to the download function. 

```javascript
download(data: string, fileName: string, fileType?: string): void
```
<VideoEmbed host="youtube" videoId="JL0XRRIIcus" title="Downloading a plain text" caption="Downloading a plain text"/>


This feature can be useful for saving notes, logs, or any other type of plain text information for later reference or sharing with others.


### Downloading an image

To download an image, the data passed to the download action should be the image's URL or Base64 string representation of the image. Additionally, a fileName and an optional fileType should be provided as parameters to the download function. 

<VideoEmbed host="youtube" videoId="PoDi1MR6nI4" title="Downloading an image" caption="Downloading an image"/>


### Downloading a file

Files of various types can be downloaded using the download action by providing the URL of the file to be downloaded. Below code snippet demonstrates how to download any file from a URL using JavaScript.

```javascript
downloadPDF: async () => {
	let data = getPdf.data
	const blob = new Blob([data], {type: 'application/pdf'});
	const url = URL.createObjectURL(blob);
	await download(url, "sample.pdf", "application/pdf")
}
```

:::tip
For files to be successfully downloaded, **their contents must be served over HTTPS** to prevent requests from being blocked. To prevent Cross-Origin Resource Sharing (CORS) errors, ensure that the server where the file is fetched from is **CORS-enabled** and returns the required headers in the response.
:::



## Troubleshooting
If you encounter any errors during this process, check out this guide on [debugging JS Errors](/help-and-support/troubleshooting-guide/js-errors). If you are still facing any issues, please connect with support@appsmith.com or raise your query on [Discord Server](https://discord.com/invite/rBTTVJp).