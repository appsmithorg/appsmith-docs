# The Appsmith environment

If this is your first time using Appsmith, you’ll need to get acquainted with some initial setup. When you log in, you'll be redirected to your Appsmith home-page. The home-page has an auto-generated an organization called &lt;**Yourname&gt; Personal Organization** \(referred to as your personal organization from now on\) that consists of multiple templates. In this tutorial, we'll create our Catalog app in the same organization.

{% hint style="info" %}
Ensure that you use the auto-generated organization for the tutorial. It includes a mock database that you will need to follow the tutorial.
{% endhint %}

An app on Appsmith is a standalone software-application solving a specific use-case. An app can consist of one or more web-pages. Let’s create a new app Catalogue Dashboard in your ersonal organization**:**

1. Click on **Create New** under your personal organization.
2. You’ll be redirected to the configuration page of the new app.
3. Note that the new app is created with the default name **Untitled Application 1**.
4. Rename it to **Catalog Dashboard**.

The new app comes with auto-generated directories that establish an Appsmith app. See Figure 1. for the directory structure.

![Figure 1. The entity explorer](https://lh5.googleusercontent.com/OHzUIwJXYhimFYhK_Po6Ezwe-rMtSptxrUW5ZDVDc9Mba2u3_GZilQ7t3aSXD9I64DZnim8Tc3eKAFUKzdVD313t654QT_AAZe8zKTuujOujppM4QoRx-WzuWwQKF_TrraifXt4r)

The names of all the auto-generated directories except **Page1** are non-editable. The structure of these directories is also fixed. Let's see what each of these directories is:

* The **Pages** directory is a container for all the web-pages of your app, and the web-pages’ configuration. 
  * The **Page1** directory is a container for all entities required to render the corresponding web-page. You can rename it to anything you like. When the application is deployed, the web-page will show up with the name **Page1** on the app. 
    * **Widgets** directory is a container for all the widgets that will be part of the web-page **Page1**. The directory doesn’t have any pre-configured widgets.
    * **APIs** directory is a container for all APIs that Page1 connects to. The directory doesn’t have any pre-configured APIs.
    * **DB Queries** directory is a container for both databases, and their queries used by Page1 to read and write data. The directory doesn’t have any pre-configured databases or queries.
* The **Dependencies** directory lists the [JS libraries supported by Appsmith](https://docs.appsmith.com/core-concepts/connecting-ui-and-logic/working-with-js-libraries#included-js-libraries). These libraries are already imported in your app's environment, ready to be used.

