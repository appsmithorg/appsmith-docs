---
description: >-
  download() reference
toc_max_heading_level: 2
---

# download()

The `download()` function enables you to download any data as a file, leveraging the capabilities of the [downloadjs](https://github.com/rndme/download) library.

## Signature

```javascript
download(data: any, fileName: string, fileType?: string): Promise
```

### Parameters

#### data

<dd>

The Blob, File, String, or dataURL containing the soon-to-be File's contents

</dd>

#### fileName

<dd>

Name of the file to be downloaded

</dd>

#### fileType

<dd>

The MIME content-type of the file to download.

*Supported file types:*

* Plain text
* HTML
* CSV
* JSON
* JPEG
* PNG
* SVG

</dd>

:::info
The Download action doesn't convert the file to a specific type and it's downloaded in the original format. If you need to change the file type, you would need to convert the data to a specific format using JavaScript before downloading.
:::

*Example 1:* 

If you want to download a plain text document, the data passed to the download action should be a `string` representation of the text content to be downloaded. Additionally, a `fileName` and an optional `fileType` should be provided as parameters to the download function. 

```javascript
download(data: string, fileName: string, fileType?: string): void
```


*Example 2:*

To download an image, the data passed to the download action should be the image's URL or Base64 string representation of the image. A `fileName` and an optional `fileType` should be provided as parameters to the download function. 

*Example 3:*

Files of various types can be downloaded using the download action by providing the URL of the file to be downloaded. Below code snippet demonstrates how to download any file from a URL using JS Object.

```javascript
downloadPDF: async () => {
	let data = getPdf.data
	const blob = new Blob([data], {type: 'application/pdf'});
	const url = URL.createObjectURL(blob);
	await download(url, "sample.pdf", "application/pdf")
}
```

For files to be successfully downloaded, their contents must be served over HTTPS to prevent requests from being blocked. To prevent Cross-Origin Resource Sharing (CORS) errors, ensure that the server where the file is fetched from is CORS-enabled and returns the required headers in the response.