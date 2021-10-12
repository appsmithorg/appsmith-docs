---
description: >-
  Guide on how to use Redshift as a Data Source on Appsmith
---

# How to use Redshift as a Data Source on Appsmith

The guide presumes that you are familiar with the basic core concepts of [Appsmith](https://www.appsmith.com/) and builds further on integrating Appsmith with other tools. In case you don't have much understanding of the [core concepts](../core-concepts/connecting-to-data-sources/) of Appsmith, it is recommended to create an account and try applying implementing them.

## Redshift

Redshift, or Amazon Redshift is based on PostgreSQL, with added functionality to manage very large datasets and support high-performance analysis and reporting of those data. 

In this guide you will learn to create a Redshift Database and use it as a data source in your Appsmith application.

## Building A Demo Application

Let us try to learn this concept by building a simple application which fetches data from Redshift database.
We will be creating a simple virtual library application which will hold details of various e-books.

Let us begin with configuring Redshift database.

## Creating A Redshift Database And Loading Data

First we need to set up an IAM role to help us in quaring data from the database. For that you need to login to your AWS account or Sign up for a new account, if you don't already have one. And select `IAM` from the services panel. 

![Screenshot one ](../.gitbook/assets/redshift-appsmith-1.png)

Then choose `Roles` from the left navigation panel and click on `Create role`. In the AWS Service group, choose `Redshift`.  Under Select your use case, choose `Redshift - Customizable`, then choose Next: Permissions. On the Attach permissions policies page, choose `AmazonS3ReadOnlyAccess`. 

![Screenshot two](../.gitbook/assets/redshift-appsmith-2.png)

You can leave the default setting for Set permissions boundary. Then choose Next: Tags.
When the Add tags page appears you can add tags(optional). For this review I have added two tags: 'Name': 'For_Redshift_db', 'value': 'For_Appsmith_App'. Then choose Next: Review. Give the Role a name and description, then click on Create role. 

![Screenshot three](../.gitbook/assets/redshift-appsmith-3.png)


Choose the role name of the role that you just created. Copy the Role ARN value to your clipboard—this value is the Amazon Resource Name (ARN) for the role that you just created. You use that value when you use the COPY command to load data from Amazon S3. Now that you have created the new role, your next step is to attach it to a Redshift cluster.




