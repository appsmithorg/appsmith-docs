---
description: This page shows you how to download files using an API.
---
# Download Files Using API

This page shows you how to download a file using an API using PDF as the file format.

## Prerequisites
- A [Button](/reference/widgets/button) widget.
- [Text](/reference/widgets/text) widgets to enter the header information for MIME type.
- Access to a cloud platform with [API](/connect-data/reference/rest-api) endpoints.

## Configure query

To configure the API to download a file, follow these steps:

1. Rename the Text widgets to `content_type` and `mime_type`.
2. Rename the API to `download_file` and specify the request method (GET) and provide your API URL, including any necessary path.
3. In **Headers**, add a key named `{{content_type.text}}` and set its value to `{{mime_type.text}}`.
4. In widgets, rename the button to `Download file`.
5. Set the widget's **onClick** event to download a PDF file from the API using the following code:
   
   ```jsx
   {{download_file.run(()=>{download(download_file.data,"filename.pdf")})}}
   ```
6. To test the download, enter `content_type` in the Text widget `content_type` and `application/pdf` in the Text widget `mime_type`. Click `Download file`.