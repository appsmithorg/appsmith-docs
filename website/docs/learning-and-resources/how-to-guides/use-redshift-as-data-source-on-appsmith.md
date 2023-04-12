---
description: Guide on how to use Redshift as a Data Source on Appsmith
sidebar_position: 14
---

# How to Use Redshift as a Datasource on Appsmith

The guide presumes that you are familiar with the basic core concepts of [Appsmith](https://www.appsmith.com) and builds further on integrating Appsmith with other tools. In case you don't have much understanding of the [core concepts](/core-concepts/connecting-to-data-sources/) of Appsmith, it is recommended to create an account and try implementing them.

## Redshift

Redshift or Amazon Redshift is based on PostgreSQL, with the added feature to manage very large datasets and support high-performance analysis and reporting of those data.

In this guide, you learn to create a Redshift Database and use it as a data source in your Appsmith application.

## Building a demo application

To learn this concept by building a simple application that fetches data from the Redshift database. You are creating a simple virtual library application that holds details of various e-books.

## Creating a Redshift database and loading data

First, set up an IAM role to help you in querying data from the database. For that, you need to [log in to your AWS account or Sign up for a new account](https://aws.amazon.com/console/), if you don't already have one. And select `IAM` from the services panel.

![Screenshot one](/img/redshift-appsmith-1.png)

Choose `Roles` from the left navigation panel and click on `Create role`. In the AWS Service group, choose `Redshift`. Under Select your use case, choose `Redshift - Customizable`, then choose Next: permissions. On the **Attach permissions** policies page, choose `AmazonS3FullAccess`.

![Screenshot two](/img/redshift-appsmith-2.png)

You can leave the default setting for the **Set permissions** boundary. Choose Next: tags. When the **Add Tags** page appears you can add tags(optional). For this, add two tags: 'Name': 'For\_Redshift\_db', 'value': 'For\_Appsmith\_App'. Then choose Next: Review. Give the Role a name and description, and click **Create role**.

![Screenshot three](/img/redshift-appsmith-3.png)

Choose the role name of the role that you just created. Copy the Role ARN value to your clipboard—this value is the Amazon Resource Name (ARN) for that role. You need to use that value when you use the COPY command to load data from Amazon S3. Now that you have created the new role, your next step is to attach it to a Redshift cluster.

## Creating a Redshift cluster

**The cluster that you are about to create is live (and not running in a sandbox). You incur the standard Amazon Redshift usage fees for the cluster until you delete it. If you complete the tutorial described here in one sitting and delete the cluster when you are finished, the total charges are minimal.**

Visit the services panel and select `Amazon Redshift`. Choose the AWS Region where you want to create the cluster, in the upper right corner. Choose 'Asia Pacific (Mumbai)ap-south-1'. Click **Create cluster**. The Create cluster page appears.

![Screenshot Four](/img/redshift-appsmith-4.png)

In the Cluster configuration section, specify values for Cluster identifier, Node type, Nodes, and how you plan to use the cluster. Choose `appsmith-cluster-1` as the Cluster identifier. Make sure to choose a free trial option for "What are you planning to use this cluster for?"

![Screenshot five](/img/redshift-appsmith-5.png)

For database configurations select a username and password for 'Admin user' and remember them(do keep in mind the constraints mentioned in the instructions below while creating and assigning username and password).

![Screenshot six](/img/redshift-appsmith-6.png)

Choose **Create cluster**. It takes a while to create the cluster. When the cluster is created select the cluster and click on `Actions`, under the 'permissions' section click on `Manage IAM roles`. When the management screen appears in the 'Available IAM roles' Dropbox select the IAM role that you had created earlier and click **Associate IAM role** then click **Save Changes**.

![Screenshot seven](/img/redshift-appsmith-7.png)

In the database configurations section, you can see the database name: `dev` and database port: `5439`.

![Screenshot eight](/img/redshift-appsmith-8.png)

Click the `Actions` button again and under 'Manage cluster' select `Manage publicly accessible settings`. By default, public accessibility is disabled, enable it to access it from the Appsmith application. Once this is done the next step is to insert data into the database.

## Inserting data in the database

To insert and query the data in the database you need to create an IAM user to grant access to the query editor. To create an IAM user you need to select `IAM` from the 'services' panel. Then choose `Users` from the navigation menu. Click `Add users`.

![Screenshot nine](/img/redshift-appsmith-9.png)

In the Add users screen give the User a name, for instance, `appsmith\_user-1`. Check both the AWS credential type: Access Key and Password. Assign a custom password for the console. Click `Next: Permissions`.

![Screenshot ten](/img/redshift-appsmith-10.png)

Under 'Set permissions' select `Attach existing policies directly`. For Policy names, choose `AmazonRedshiftQueryEditor` and `AmazonRedshiftReadOnlyAccess`. Click `Next: Tags`. Add tags if you want to, it's optional here.

![Screenshot eleven](/img/redshift-appsmith-11.png)

Click `Next: Review`. Review the user details and click on `Create User`.

![Screenshot twelve](/img/redshift-appsmith-12.png)

Copy the Access key ID and Secret access key or download the `.csv` file and store it in a safe location. Now, logout of the console and log in through the new IAM user's credentials.

![Screenshot thirteen](/img/redshift-appsmith-13.png)

Visit the Redshift cluster page and select `Editor` from the left navigation panel. Click `Connect to database`, add the details asked for, and click `Connect`.

![Screenshot fourteen](/img/redshift-appsmith-14.png)

Select Public schema and run SQL commands to create a table and insert values.

To create a table enter the following code and hit run.

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

You can try out inserting more values and playing with more SQL queries. For now, move ahead with using this database as a data source in your Appsmith application.

One last thing to do before hopping on to Appsmith for developing your application is to configure security groups and enable connection from Appsmith by Inbound rules of the security group associated with the VPC in which your Redshift database exists. Select VPC from the services panel and scroll down to 'Security Groups'. By default, the VPC and default security group was attached to the Redshift database at the time of creation. Select the default security group and click on `Edit inbound rules`.

![Screenshot seventeen](/img/redshift-appsmith-17.png)

Add inbound rules for type Redshift one for custom: Anywhere IPv4 and one for custom: My IP then click on `Save rules`. **Remember to delete the new inbound rules after you have completed your task**, for **long-term** use prefer** creating a new security group.**

![Screenshot eighteen](/img/redshift-appsmith-18.png)

## Building the application on Appsmith

Login to your Appsmith account or Sign up for a new account, if you don't already have one [here](https://app.appsmith.com/user/login). The next step is to create a new application under a workspace by clicking on the `+ NEW` button in the top right corner.

![Screenshot nineteen](/img/redshift-appsmith-19.png)

Change the default name to a name of your choice. For Instance, 'Appsmith Library'. You shall now see Widgets, Datasources, and Pages on the left navigation bar. Use these components in your application. Add Redshift as your data source, by clicking on the `+` sign next to Datasources and scrolling to Databases under the '+ Create New' section. Select `Redshift`.

![Screenshot twenty](/img/redshift-appsmith-20.png)

## Connecting to the Redshift Database

Firstly, give the database a name like `appsmith\_library\_db`. Next under connection choose a connection mode, `Read/Write`. Add the host address and port number, if you do not add a port number by default Appsmith connects to port `5439`. The host address can be fetched from the Redshift cluster's 'General information' panel. Copy the `Endpoint` value and paste it into the Host address section of the Appsmith application(you have to trim the database name and port number from the Endpoint address, or you may encounter an error). Fill in the database name you want to connect to like `dev`. For Authentication, provide the username and password of the admin user of your database in Redshift. You can skip the SSL by selecting `No SSL` from the 'SSL Mode' dropdown list. Click `Save`.

![Screenshot twenty-one](/img/redshift-appsmith-21.png)

## Capturing and displaying the data

Now that you have successfully connected to the database, you can query data from it by running simple SQL queries.

```
 Select * from library; 
```

![Screenshot twenty-two](/img/redshift-appsmith-22.png)

## Formatting the fetched data

To display the fetched data in a presentable format. This can be done using the UI widgets provided by Appsmith. Follow some easy steps to bind the data fetched from the Redshift database into a table. First, expand the Page1 dropdown menu and then click the `+` icon beside the `Widgets` option. It lists different UI widgets that can be used to build your application's UI. Select the 'Table' widget then drag and drop that on the canvas. Something like this is visible:

![Screenshot twenty-three](/img/redshift-appsmith-23.png)

To include the response in this table use the mustache syntax to write JS in Appsmith.

```
{{Query1.data}}
```

![Screenshot twenty-four](/img/redshift-appsmith-24.png)

Now that you have received data in the table, you can add more widgets for each attribute of the data records from the UI widgets list. You can add text widgets for all the fields in this example. To set the property of the widgets, next to the widget options add code snippets to fetch values of respective attributes from the array of data fetched refer to the guides linked below

* [Display Data](/core-concepts/data-access-and-binding/displaying-data-read/)
* [Capture Data](/core-concepts/data-access-and-binding/capturing-data-write/)

## Writing data to the datasource

You can also write data to the database, by adding some features which can take inputs from users on Appsmith and send them to the database. First, add two new columns to your table namely, `book_id` of datatype 'integer' and `read` of 'boolean' datatype. Convert your table into a list. Drag and drop the list UI widget and add some text widgets, one for each table column. Now you can include the response of the list similar to the table. Now to fetch values for each column you can click on the book `id` text widget's settings and edit the text field

```
 {{currentItem.book_id}}
```

![Screenshot twenty-five](/img/redshift-appsmith-25.png)

The list looks something like this

![Screenshot thirty-three](/img/redshift-appsmith-33.png)

The same steps can be repeated for all the other columns except for the READ/UNREAD column which shall be represented by checkboxes in your case. Add two check buttons namely, READ, and UNREAD, and go to the edit checkbox. In the 'Actions' section click on the dropdown under `onCheckChange` and select 'Execute a Query', click on `+ Create new Query`.

![Screenshot twenty-six](/img/redshift-appsmith-26.png)

![Screenshot twenty-seven](/img/redshift-appsmith-27.png)

Once the Query Editor appears change the query name to `update\_read` and `update\_unread` for the READ and UNREAD checkboxes respectively.

For `update\_read` add the following SQL query

```
UPDATE library
  SET read = 'TRUE'
  WHERE book_id = {{List1.selectedItem.book_id}};
```

![Screenshot twenty-eight](/img/redshift-appsmith-28.png)

For `update\_unread` add the following SQL query

```
UPDATE library
  SET read = 'FALSE'
  WHERE book_id = {{ List1.selectedItem.book_id}};
```

![Screenshot twenty-nine](/img/redshift-appsmith-29.png)

You can also add error and success messages by clicking on `onSuccess` and selecting 'Show Message' from the dropdown.

An instance of a success message is

```
Added to list of books already read!!
```

An instance of a success message is

```
Added to list of unread books!!
```

![Screenshot thirty](/img/redshift-appsmith-30.png)

Now if you check the 'READ' checkbox for a certain row then that can be updated on the Redshift database as such:

![Screenshot thirty-one](/img/redshift-appsmith-31.png)

![Screenshot thirty-two](/img/redshift-appsmith-32.png)

Similarly, for the 'UNREAD' checkbox. You have successfully written data to the database.

These were some basic operations that can be performed by using Redshift as a Data Source on Appsmith. You can try out more features by playing around with the interface.
