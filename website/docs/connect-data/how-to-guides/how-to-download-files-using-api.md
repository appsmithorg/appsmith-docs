---
description: This page shows you how to download files using an API.
---
# Download Files Using API

This page shows you how to download a file using an API using PDF as the file format.

## Prerequisites
- A [Button](/reference/widgets/button) widget.
- Access to a cloud platform with [API](/connect-data/reference/rest-api) endpoints.

## Configure query

To configure the API to download a file, follow these steps:

1. Rename the API to `download_file` and specify the request method (GET) and provide your API URL, including any necessary path.
2. In **Headers**, add the key `content_type` and enter MIME type as its value.
3. In widgets, rename the button to `Download file`.
4. Set the widget's **onClick** event to download a PDF file from the API using the following code:
   
   ```jsx
   {{download_file.run(()=>{download(download_file.data,"filename.pdf")})}}
   ```
5. To test the download, click the `Download file` button.