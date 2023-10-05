---
sidebar_position: 6
---

# Upload Images to S3 Using Camera
Appsmith provides object storage for storing and recovering information or data from anywhere over the internet using S3.

This page provides steps to upload images using the Camera widget to the S3 datasource.

## Prerequisites
- An [Amazon S3 bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html) in one of the AWS Regions.
- Connection to an [S3 datasource](https://docs.appsmith.com/connect-data/reference/querying-amazon-s3). For more information.

## Set up upload query
To upload an image or a video to Amazon S3, follow these steps:
1. Drag and drop the [Camera widget](/reference/widgets/camera) onto the canvas.
2. In **Queries/JS**, click the **+ Add a new query/JS Object**.
3. Select your S3 datasource.
4. Select **Create a new file** from **Commands**.
5. In **Bucket Name**, enter the name of the Amazon S3 bucket.
6. In **File Path**, enter the path of the location you want to store the file. For example, `images/camera_uploads`.
Appsmith automatically creates intermediate folders if they don't exist.
7. Select **Base64** from **File Data Type** to upload data from the camera widget.
8. In **Expiry Duration of Signed URL (Minutes)**, enter an expiration time for the signed URL. A signed URL has a maximum expiration date of one week.
9. **Content**, add data manually by writing an object with a text and data property, or fetch data from the camera widget.
   For example:

     ```
     {
	    "data": "{{Camera1.imageDataURL}}"
     }
     ```
10. Once all the required parameters have been added, open the property pane of the Camera widget.
11. Set the Camera widget's **OnImageCapture** event to execute the S3 query.
   Query execution occurs when you capture and save an image.
   To see the uploaded media, visit the [S3 console](https://s3.console.aws.amazon.com/s3/home).
