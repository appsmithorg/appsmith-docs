# The Appsmith environment

If this is your first time using Appsmith, you’ll need to get acquainted with some initial setup. When you log in, you'll be redirected to your Appsmith home-page. The home-page has an auto-generated organization called **Yourname apps** that consists of multiple templates. In this tutorial, we'll create our Catalog app in the same organization.

{% hint style="info" %}
Ensure that you use the auto-generated organization for the tutorial. It includes a mock database that you will need to follow the tutorial.
{% endhint %}

An app on Appsmith is a standalone software-application solving a specific use-case. An app can consist of one or more web-pages. Let’s create a new app Catalogue Dashboard in **Your Personal Organization**.

1. Click on **Create New** under **Your Personal Organization**.
2. You’ll be redirected to the configuration page of the new app.
3. Note that the new app is created with default name **Untitled Application 1**.
4. Rename it to **Catalog Dashboard**.

The new app comes with auto-generated folders that establish an Appsmith app.

![Figure 1. App folder structure](https://lh5.googleusercontent.com/OHzUIwJXYhimFYhK_Po6Ezwe-rMtSptxrUW5ZDVDc9Mba2u3_GZilQ7t3aSXD9I64DZnim8Tc3eKAFUKzdVD313t654QT_AAZe8zKTuujOujppM4QoRx-WzuWwQKF_TrraifXt4r)

  
These folders are:

* The outer **Pages** root directory is a container for all the web-pages of your app, and the web-pages’ configuration. The name **Pages** is fixed, and can’t be changed.
* The inner **Pages/Page1** directory is a container for all elements required to render the corresponding web-page. You can rename it to anything you like. When the application is deployed, the web-page will show up with the name **Page1** on the app. 
* **Pages/Page1/Widgets** directory is a container for all the widgets that will be part of the web-page **Page1**. The directory doesn’t have any pre-configured widgets. The name of the directory **Widgets** is fixed, and can’t be changed. 
* **Pages/Page1/APIs** directory is a container for all APIs that Page1 connects to. The directory doesn’t have any pre-configured APIs. The name of the directory APIs is fixed, and can't be changed.
* **Pages/Page1/DB Queries** directory is a container for both databases, and their queries used by Page1 to read and write data. The directory doesn’t have any pre-configured databases or queries. The name of the directory DB Queries is fixed, and can't be changed.
* The outer **Dependencies** directory lists the [JS libraries supported by Appsmith](https://docs.appsmith.com/core-concepts/connecting-ui-and-logic/working-with-js-libraries#included-js-libraries).



  


