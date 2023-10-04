---
sidebar_position: 6
---

# Upload Images Using Camera
Appsmith lets you capture images and videos from your applications and share the data for further use.
For more information, see [Camera](https://docs.appsmith.com/reference/widgets/camera).

This page provides steps to upload images using the Camera widget to a datasource and uses the S3 datasource as an example.
You will learn how to:
- Create an S3 datasource and connect your app.
- Upload an image to S3 using the Camera widget.

## Prerequisites
- To upload your data to Amazon S3, you must first [create an Amazon S3 bucket](https://docs.aws.amazon.com/AmazonS3/latest/userguide/create-bucket-overview.html) in one of the AWS Regions.

## Create an S3 Datasource
Amazon Simple Storage Service (Amazon S3) is an object storage service that lets you store, manage, and protect any amount of data. Using Amazon S3, you can manage and organize your data based on your business, organizational, and compliance needs.

To add an S3 datasource to your workspace, follow these steps:
1. In your Appsmith workspace, select your app and navigate to the **Explorer** tab in the page.
2. In **Datasources**, click **+ Add a new datasource**. 
3. Select **S3**.
4. Once your have created the S3 datasource, follow these [steps](/connect-data/reference/querying-amazon-s3#connection-settings) to connect your app to the S3 datasource.

## Upload an image using the Camera widget
To upload an image or a video to Amazon S3, follow these steps:
1. Drag and drop the [Camera widget](/reference/widgets/camera) onto the canvas.
2. In **Queries/JS**, click the **+ Add a new query/JS Object**.
3. Select your S3 datasource.
4. In **Commands**, select **Create a new file**.
5. Configure the following parameters for the new file:
   * **Bucket Name**: Name of the Amazon S3 bucket.
   * **File Path**: Path of the location you want to store the file. For example, `images/any`.

     :::info
     Appsmith automatically creates intermediate folders if they don't exist.
     :::

   * **File Data Type**: Select **Base64** to upload data from the camera widget.
   * **Expiry Duration of Signed URL (Minutes)**: Enter an expiration time for the signed URL.

     :::info
     A signed URL has a maximum expiration date of one week.
     :::

   * **Content**: Add data manually by writing an object with a text and data property, or fetch data from the camera widget.
   For example:

     ```
     {
	    "data": "{{Camera1.imageDataURL}}"
     }
     ```

6. Once all the required parameters have been added, open the property pane of the Camera widget.
7. In the **OnImageCapture** event, choose your query from the "**execute a query**" option.
   Query execution occurs when the image is captured and saved. 

   To see the uploaded media, visit the [S3 console](https://s3.console.aws.amazon.com/s3/home).
