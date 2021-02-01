# Querying AWS S3
The S3 plugin can connect to an AWS S3 instance and execute a set of actions(TODO:hyperlink) supported by Appsmith. 
This 
document describes the steps to connect to an AWS S3 instance and execute various supported actions.

## Connect to AWS S3 by creating an S3 datasource
In order to connect to an AWS S3 instance, you need to fill out the following datasource configuration form: 
//TODO: add image.

There are three mandatory fields that are required to filled: 
1. AWS Access Key
2. AWS Secret Key
3. Region

All the above three details can be fetched from your AWS account. //TODO: add link.

## Supported Actions
In order to execute an action on a AWS S3 instance, you need to create a query on a S3 datasource(TODO:hyperlink). 
To create a query you need to fill out a query form, which has four fields:
1. Action - action that you want to execute
2. Bucket Name - bucket name on which to run the action. 
3. File Path - file path in case the action is to create a file or read a file.
4. Content  - file content in case the action is to create a file.

Appsmith supports the following actions on any AWS S3 instance:
1. List all files in a bucket.
2. Create a new file.
3. Read file.
4. Delete file.

### List all files in a bucket
