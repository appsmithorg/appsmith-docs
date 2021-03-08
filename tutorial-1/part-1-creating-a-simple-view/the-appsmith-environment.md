# The Appsmith Environment

If this is your first time using Appsmith, you'll need to get acquainted with some initial setup. When you log in, you'll be redirected to [Appsmith Dashboard](https://app.appsmith.com/applications). This home-page has an auto-generated organization called **`<Your first-name> apps`** \(referred to as your personal organization from now on\) consisting of multiple templates. In this tutorial, we'll create our Catalog app under the same organization. 

{% hint style="info" %}

Let's now create a new app named _Catalogue Dashboard_ under our personal organization.

> An app on Appsmith is a standalone software-application solving a specific use-case. It can consist of one or more web-pages.

Here are steps to create an app on Appsmith Dashboard:

1. Click on the _Create New_ button under your personal organization.
2. You’ll be redirected to the configuration page of the newly created app.
3. Note that the new app is created with the default name **Untitled Application 1**.
4. Rename it to **Catalog Dashboard**.

The new app comes with auto-generated directories that establish an Appsmith app. Below is a screenshot of the directory structure. 

![Entity Explorer on Appsmith Application](../../.gitbook/assets/image%20%281%29.png)

{% hint style="danger" %}

Let's see what each of these directories is:

* **`Pages`** : This directory is a container for all the web-pages and their configuration of your app. Under this directory, you can create and organize different pages based on the tool or application you're building.
* The **`Page1`** directory contains all entities required to render the corresponding web-page.

{% hint style="info" %}

* **`Widgets`**: This directory is a container for all the widgets that will be part of the web-page `Page1`. You can think of Widgets as simple UI Components for your web-page, for example, a data-picker or a form. By default, this directory doesn’t have any pre-configured widgets.
* **`APIs`**: The API's directory is a container consisting of all API's that Page1 connects to.
* **`DB Queries`**: This directory is a container for both databases and their queries used by Page1 to read and write data. You can organize all your data operations under this directory.

Lastly, you can also see all the [JS libraries supported by Appsmith](https://docs.appsmith.com/core-concepts/connecting-ui-and-logic/working-with-js-libraries#included-js-libraries) under _**JS libraries you can use**_ section below the `Page` directory. These libraries are already imported into your app's environment, ready to be used.

