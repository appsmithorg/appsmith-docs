---
description: This action is used to download any data as a file.
---

# Download

We use [downloadjs](https://github.com/rndme/download) for this functionality

## Download

![Click to expand](../../../.gitbook/assets/download.gif)

### Signature

```javascript
download(data: any, fileName: string, fileType?: string): Promise
```

#### Arguments

| **Argument Name** | **Description**                            |
| ----------------- | ------------------------------------------ |
| **data**          | Data or URL that would be downloaded       |
| **fileName**      | Name of the file to be downloaded          |
| **fileType**      | The mime type of the file to be downloaded |

### Use cases

*   **Downloading a Plain Text**

    To download a plain text, the _expected data_ is a string representing the text content to be downloaded.

    ```javascript
    download(data: string, fileName: string, fileType?: string): void
    ```

    <img src="../../../.gitbook/assets/download-text.gif" alt="Click to expand" data-size="original">
*   **Downloading an image**

    To download an Image, the _expected data_ is the image's URL or Base64 string.

    <img src="../../../.gitbook/assets/download-image.gif" alt="Click to expand" data-size="original">
*   **Downloading a file**

    By supplying the URL of the file to be downloaded, files of different types can be downloaded via the download action.

    > For files to be successfully downloaded, **their contents must be served over HTTPS** to prevent requests from being blocked. To prevent Cross-Origin Resource Sharing (CORS) errors, ensure that the server where the file is fetched from is **CORS-enabled** and returns the required headers in the response.
