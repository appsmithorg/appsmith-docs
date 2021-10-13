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


## Creating A Redshift Cluster

**The cluster that you are about to create is live (and not running in a sandbox). You incur the standard Amazon Redshift usage fees for the cluster until you delete it. If you complete the tutorial described here in one sitting and delete the cluster when you are finished, the total charges are minimal.**

Visit the services panel and select `Amazon Redshift`. Then, choose the AWS Region where you want to create the cluster, at upper right corner. I have chosen 'Asia Pacific (Mumbai)ap-south-1'. Click on `Create cluster`. The Create cluster page appears. 

![Screenshot Four](../.gitbook/assets/redshift-appsmith-4.png)

In the Cluster configuration section, specify values for Cluster identifier, Node type, Nodes, and how you plan to use the cluster. I have chosen 'appsmith-cluster-1' as Cluster identifier. Make sure to choose free trial option for "What are you planning to use this cluster for?". 

![Screenshot five](../.gitbook/assets/redshift-appsmith-5.png)

Then for Database configurations select a username and password for 'Admin user' and remember them(do f=keep in mind the constratints mentioned in the instructions below while creating assigning username and password).

![Screenshot six](../.gitbook/assets/redshift-appsmith-6.png)


Choose `Create cluster`. It will take a while to create the cluster. When the cluster is created select the cluster and click on `Actions` then under the 'permissions' section click on `Manage IAM roles`. when the management screen appears in the 'Available IAM roles' dropbox select the IAM role that you have created earlier then click on `Associate IAM role` then click on `Save Changes`. 

![Screenshot seven](../.gitbook/assets/redshift-appsmith-7.png)


In the Database configurations sections you can see the database name: dev and database port: 5439.

![Screenshot eight](../.gitbook/assets/redshift-appsmith-8.png)

Then click on the `Actions` button again and under 'Manage cluster' select `Manage publicly accessible settings`. By default public accessibility is disabled enable it to access it from the Appsmith application. Once this is done the next step is to insert data into the database.


## Inserting Data In The Database

To insert and query the data in the database we need to create an IAM user to grant access to the query editor then use the query editor.
To create an IAM user we need to select `IAM` from the 'services' panel. Then choose `Users` from the navigation menu. CLick on `Add users`. 

![Screenshot nine](../.gitbook/assets/redshift-appsmith-9.png)

In the Add users screen give a the User a name, for instance, 'appsmith_user-1'. Then check both the AWS credential type: Access key and Password. Assign a custom passwrod for the console. Then click on `Next: Permissions`. 

![Screenshot ten](../.gitbook/assets/redshift-appsmith-10.png)

Under 'Set permissions' select `Attach existing policies directly`. For Policy names, choose `AmazonRedshiftQueryEditor` and `AmazonRedshiftReadOnlyAccess`. Click on `Next: Tags`. Add tags if you want to, it's optional here. 

![Screenshot eleven](../.gitbook/assets/redshift-appsmith-11.png)

Click on `Next: Review`. Review the user details and click on `Create User`.

![Screenshot twelve](../.gitbook/assets/redshift-appsmith-12.png)


Copy the Access key ID and Secret access key or download the .csv file and store it in a safe location. Now logout of the console and login through the new IAM user's credentials. 

![Screenshot thirteen](../.gitbook/assets/redshift-appsmith-13.png)

Visit the Redshift cluster page and select `Editor` from the left navigation panel. click on `Connect to database`. Then add the details asked for and click `Connect`.

![Screenshot fourteen](../.gitbook/assets/redshift-appsmith-14.png)

Select Public schema and run sql commands to create table and insert values.

To create table enter the following code and hit run.

```sql
create table library(
                book_name varchar (30),
                author varchar(30),
                publisher varchar(30));
```
 You can see the table library created in the left Resources section.

![Screenshot fifteen](../.gitbook/assets/redshift-appsmith-15.png)


 To insert values into the table write the followirng code and hit run.

 ```sql
 insert into library values 
    ('The Monk who Sold His Ferrari', 'Robin Sharma', 'Jaico Publishing House'),
    ('The Immortals of Meluha', 'Amish Tripathi', 'Westland Publications'),
    ('The Inheritance of Loss', ' Kiran Desai', ' Penguin Random House India');
 ```

To display the data you can use

```sql
 select * from library; 
```

![Screenshot sixteen](../.gitbook/assets/redshift-appsmith-16.png)

You can definitely try out inserting more values and playing with more SQL queries. For now we will more ahead with using this database as a data source in our appsmith application.




