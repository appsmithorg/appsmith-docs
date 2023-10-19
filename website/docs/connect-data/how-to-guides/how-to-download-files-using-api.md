---
description: This page shows you how to download files using an API.
---
# Download Files Using API

This page shows you how to download a file using an API using PDF as the file format.

## Prerequisites
- A [Button](/reference/widgets/button) widget.
- Access to a cloud platform with [API](/connect-data/reference/rest-api) endpoints.

## Configure query to download using file data
To configure the API to download a file using the file data, follow these steps:
1. Rename the API to `download_file` and specify the request method (GET) and provide your API URL, including any necessary path.
2. In **Headers**, add the key `content_type` and enter the MIME type as its value. 
   For example: `application/pdf`
3. In widgets, rename the button to `Download file`.
4. Set the widget's **onClick** event to download a PDF file from the API using the following code:
   
   ```jsx
   {{download_file.run(()=>{download(download_file.data,"filename.pdf")})}}
   ```
   To decode an encoded file content, use the [JavaScript `atob()` method](https://developer.mozilla.org/en-US/docs/Web/API/atob).

   For example:
   ```jsx
   {{download_file.run(()=>{download(atob(download_file.data),"filename.pdf")})}}
   ```

5. To test the download, click the `Download file` button.

## Configure query to download using file URL
To configure the API to download a file using the file URL, follow these steps:
1. Rename the API to `download_image` and specify the request method (GET) and provide your API URL, including any necessary path.
2. In widgets, rename the button to `Download Image`.
3. Set the widget's **onClick** event to download an image using the image URL using the following code:
   
   ```jsx
   {{download_image.run(()=>download(download_image.data["photo"]["url"],"image"))}}
   ```
4. To test the download, click the `Download Image` button.


