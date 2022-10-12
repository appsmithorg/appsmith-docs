---
description: Guide on how to use Redshift as a Data Source on Appsmith
sidebar_position: 14
---

# How to Use Redshift as a Datasource on Appsmith

The guide presumes that you are familiar with the basic core concepts of [Appsmith](https://www.appsmith.com) and builds further on integrating Appsmith with other tools. In case you don't have much understanding of the [core concepts](broken-reference/) of Appsmith, it is recommended to create an account and try implementing them.

## Redshift

Redshift, or Amazon Redshift is based on PostgreSQL, with added functionality to manage very large datasets and support high-performance analysis and reporting of those data.

In this guide you will learn to create a Redshift Database and use it as a data source in your Appsmith application.

## Building A Demo Application

Let us try to learn this concept by building a simple application which fetches data from Redshift database. We will be creating a simple virtual library application which will hold details of various e-books.

Let us begin with configuring Redshift database.

## Creating A Redshift Database And Loading Data

First we need to set up an IAM role to help us in quering data from the database. For that you need to login to your AWS account or Sign up for a new account [here](https://aws.amazon.com/console/), if you don't already have one. And select `IAM` from the services panel.

![Screenshot one](/img/redshift-appsmith-1.png)

Choose `Roles` from the left navigation panel and click on `Create role`. In the AWS Service group, choose `Redshift`. Under Select your use case, choose `Redshift - Customizable`, then choose Next: Permissions. On the Attach permissions policies page, choose `AmazonS3FullAccess`.

![Screenshot two](/img/redshift-appsmith-2.png)

You can leave the default setting for Set permissions boundary. Choose Next: Tags. When the Add tags page appears you can add tags(optional). For this review I have added two tags: 'Name': 'For\_Redshift\_db', 'value': 'For\_Appsmith\_App'. Then choose Next: Review. Give the Role a name and description, click on Create role.

![Screenshot three](/img/redshift-appsmith-3.png)

Choose the role name of the role that you just created. Copy the Role ARN value to your clipboard—this value is the Amazon Resource Name (ARN) for that role. You will use that value when you use the COPY command to load data from Amazon S3. Now that you have created the new role, your next step is to attach it to a Redshift cluster.

## Creating A Redshift Cluster

**The cluster that you are about to create is live (and not running in a sandbox). You incur the standard Amazon Redshift usage fees for the cluster until you delete it. If you complete the tutorial described here in one sitting and delete the cluster when you are finished, the total charges are minimal.**

Visit the services panel and select `Amazon Redshift`. Choose the AWS Region where you want to create the cluster, at upper right corner. I have chosen 'Asia Pacific (Mumbai)ap-south-1'. Click on `Create cluster`. The Create cluster page appears.

![Screenshot Four](/img/redshift-appsmith-4.png)

In the Cluster configuration section, specify values for Cluster identifier, Node type, Nodes, and how you plan to use the cluster. I have chosen 'appsmith-cluster-1' as Cluster identifier. Make sure to choose free trial option for "What are you planning to use this cluster for?".

![Screenshot five](/img/redshift-appsmith-5.png)

For Database configurations select a username and password for 'Admin user' and remember them(do keep in mind the constraints mentioned in the instructions below while creating and assigning username and password).

![Screenshot six](/img/redshift-appsmith-6.png)

Choose `Create cluster`. It will take a while to create the cluster. When the cluster is created select the cluster and click on `Actions`, under the 'permissions' section click on `Manage IAM roles`. when the management screen appears in the 'Available IAM roles' dropbox select the IAM role that you had created earlier then click on `Associate IAM role` then click on `Save Changes`.

![Screenshot seven](/img/redshift-appsmith-7.png)

In the Database configurations sections you can see the database name: dev and database port: 5439.

![Screenshot eight](/img/redshift-appsmith-8.png)

Click on the `Actions` button again and under 'Manage cluster' select `Manage publicly accessible settings`. By default public accessibility is disabled, enable it to access it from the Appsmith application. Once this is done the next step is to insert data into the database.

## Inserting Data In The Database

To insert and query the data in the database we need to create an IAM user to grant access to the query editor then use the query editor. To create an IAM user we need to select `IAM` from the 'services' panel. Then choose `Users` from the navigation menu. Click on `Add users`.

![Screenshot nine](/img/redshift-appsmith-9.png)

In the Add users screen give a the User a name, for instance, 'appsmith\_user-1'. Check both the AWS credential type: Access key and Password. Assign a custom password for the console. Click on `Next: Permissions`.

![Screenshot ten](/img/redshift-appsmith-10.png)

Under 'Set permissions' select `Attach existing policies directly`. For Policy names, choose `AmazonRedshiftQueryEditor` and `AmazonRedshiftReadOnlyAccess`. Click on `Next: Tags`. Add tags if you want to, it's optional here.

![Screenshot eleven](/img/redshift-appsmith-11.png)

Click on `Next: Review`. Review the user details and click on `Create User`.

![Screenshot twelve](/img/redshift-appsmith-12.png)

Copy the Access key ID and Secret access key or download the .csv file and store it in a safe location. Now logout of the console and login through the new IAM user's credentials.

![Screenshot thirteen](/img/redshift-appsmith-13.png)

Visit the Redshift cluster page and select `Editor` from the left navigation panel. click on `Connect to database`, add the details asked for and click `Connect`.

![Screenshot fourteen](/img/redshift-appsmith-14.png)

Select Public schema and run sql commands to create table and insert values.

To create table enter the following code and hit run.

```sql
create table library(
                book_name varchar (30),
                author varchar(30),
                publisher varchar(30));           
```

You can see the table library created in the left Resources section.

![Screenshot fifteen](/img/redshift-appsmith-15.png)

To insert values into the table write the following code and hit run.

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

![Screenshot sixteen](/img/redshift-appsmith-16.png)

You can definitely try out inserting more values and playing with more SQL queries. For now we will move ahead with using this database as a data source in our Appsmith application.

One last thing to do before hopping on to Appsmith for developing our application, is to configure security groups and enable connection from Appsmith by Inbound rules of security group associated to the VPC in which our Redshift database exists. Select VPC from the services panel and scroll down to 'Security Groups'. By default the VPC and default security group was attached to the Redshift database at the time of creation. Select the default security group and click on `Edit inbound rules`.

![Screenshot seventeen](/img/redshift-appsmith-17.png)

Add inbound rules for type Redshift one for custom: Anywhere IPv4 and one for custom: My IP then click on `Save rules`. **Remember to delete the new inbound rules after you have completed your task, for a long term use prefer creating a new security group.**

![Screenshot eighteen](/img/redshift-appsmith-18.png)

## Building The Application On Appsmith

Login to your Appsmith account or Sign up for a new account, if you don't already have one [here](https://app.appsmith.com/user/login). The next step is to create a new application under a workspace by clicking on the `+ NEW` button on the top right corner.

![Screenshot nineteen](/img/redshift-appsmith-19.png)

Change the default name to a name of your choice. For Instance, I am using the name, 'Appsmith Library'. You shall now see Widgets, Datasources and Pages on the left navigation bar. we can use these components in our application. We will add Redshift as our data source, by clicking on the `+` sign next to Datasources and scrolling to Databases under the '+ Create New' section. Select `Redshift`.

![Screenshot twenty](/img/redshift-appsmith-20.png)

## Connecting To The Redshift Database

Firstly, give the database a name, for this tutorial I have used the name, 'appsmith\_library\_db'. Next under connection choose a connection mode, here we will choose `Read/Write`. We will mention the host address and port number, if you do not mention a port number by default Appsmith will try to connect to port 5439. The host address can be fetched from the Redshift cluster's 'General information' panel. Copy the `Endpoint` value and paste it in the Host address section of the Appsmith application(you have to trim the database name and port number from the Endpoint address, else you may encounter an error). Fill the database name you want to connect to, in our case it is 'dev'. For Authentication we will provide the username and password of the adminuser of your database in Redshift. you can skip the SSL by selecting `No SSL` from the 'SSL Mode' dropdown list. Click on `Save`.

![Screenshot twenty one](/img/redshift-appsmith-21.png)

## Capturing And Displaying The Data

Now that you have succesfully connected to the database successfully, you can query data from it by running simple SQL queries.

```
 Select * from library; 
```

![Screenshot twenty two](/img/redshift-appsmith-22.png)

## Formatting The Fetched Data

Now we need to display the fetched data in a presentable format. This can be done using the UI widgets provided by Appsmith. We need to follow some easy steps to bind the data fetched from Redshift database into a table. First, expand the Page1 dropdown menu and then click on the `+` icon beside `Widgets` option. It lists down different UI widgets that can be used to build our application's UI. Select the 'Table' widget then drag and drop that on the canvas. Something like this is visible:

![Screenshot twenty three](/img/redshift-appsmith-23.png)

To include response in this table use the moustache syntax to write JS in Appsmith.

```
{{Query1.data}}
```

![Screenshot twenty four](/img/redshift-appsmith-24.png)

Now that we have received data in the table, we can add more widgets for each attribute of the data records from the UI widgets list. You can add text widgets for all the fields in this example. To set the property of the widgets, next to the widget options add code snippets to fetch values of respective attributes from the array of data fetched refer to the guides linked below

* [Display Data](../../core-concepts/data-access-and-binding/displaying-data-read/)
* [Capture Data](../../core-concepts/data-access-and-binding/capturing-data-write/)

## Writing Data To The DataSource

We can also write data to the database, let us add some features which can take inputs from users on Appsmith and send them to the database. First let us add two new columns to our table namely, `book_id` of datatype 'integer' and `read` of 'boolean' datatype. Now let us convert our table into a list. Drag and drop the list UI widget and add some text widgets for, one for each table column. Now you can include the response for the list similar to the above procedure for table. Now to fetch values for each column we can click on the book id text widget's settings and edit the text field

```
 {{currentItem.book_id}}
```

![Screenshot twenty five](/img/redshift-appsmith-25.png)

The list will look something like this

![Screenshot thirty three](/img/redshift-appsmith-33.png)

The same steps will be repeated for all the other columns except for the READ/UNREAD column which shall be represented by checkboxes in our case. Add two checkbuttons namely, READ and UNREAD and go to edit checkbox. In the 'Actions' section click on the dropdown under `onCheckChange` and select 'Execute a Query', click on `+ Create new Query`.

![Screenshot twenty six](/img/redshift-appsmith-26.png)

![Screenshot twenty seven](/img/redshift-appsmith-27.png)

Once the Query Editor appears change the query name to 'update\_read' and 'update\_unread' for the READ and UNREAD checkbox repsectively.

For update\_read add the following SQL query

```
UPDATE library
  SET read = 'TRUE'
  WHERE book_id = {{List1.selectedItem.book_id}};
```

![Screenshot twenty eight](/img/redshift-appsmith-28.png)

For update\_unread add the following SQL query

```
UPDATE library
  SET read = 'FALSE'
  WHERE book_id = {{ List1.selectedItem.book_id}};
```

![Screenshot twenty nine](/img/redshift-appsmith-29.png)

You can also add error and success messages by clicking on 'onSuccess' and selecting 'Show Message' from the dropdown.

An instance of success message is

```
Added to list of books already read!!
```

An instance of success message is

```
Added to list of unread books!!
```

![Screenshot thirty](/img/redshift-appsmith-30.png)

Now if you check the 'READ' checkbox for a certain row then that will be updated on the Redshift database as such:

![Screenshot thirty one](/img/redshift-appsmith-31.png)

![Screenshot thirty two](/img/redshift-appsmith-32.png)

Similarly for 'UNREAD' checkbox. We have successfully written data to the database.

These were some basic operations that can be performed by using Redshift as a Data Source on Appsmith. You can definitely try out more features by playing around with the interface.
