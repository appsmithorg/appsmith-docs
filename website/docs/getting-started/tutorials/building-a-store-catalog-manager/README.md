---
sidebar_position: 2
---

# Building a Store Catalog Manager

This tutorial shows you how to build a feature-complete **Grocery Catalog** application for an online grocery store called Oakry using [Appsmith](https://app.appsmith.com/). The application we will be building is a multi-page dashboard used by Oakry's Catalog Managers to:

* Browse the product catalog
* Add new products to the catalog
* Update the details of products in the catalog

The tutorial is organized into three parts & we recommend you follow them in order.

You must have an account on either [Appsmith Cloud](https://app.appsmith.com/user/signup) (it's free) or your own [private instance](/getting-started/setup/) before getting started. Before diving in, let's talk a bit about the Appsmith environment.

## The Appsmith Environment

If this is your first time using Appsmith, you'll need to get acquainted with some initial setup. When you log in, you'll be redirected to [Appsmith Dashboard](https://app.appsmith.com/applications). This home page has an auto-generated workspace called **`<Your first-name>'s apps`** (referred to as your personal workspace from now on) consisting of multiple templates. In this tutorial, we'll create our Catalog app under the same workspace.

Let's now create a new app named _Catalog Dashboard_ under the personal workspace.

:::info
 An app on Appsmith is a standalone software-application solving a specific use-case. It can consist of one or more web-pages.
:::

Here are steps to create an app from the Appsmith Dashboard:

1. Click on the "+New"\_ button in the area near your workspace's name on the dashboard.
2. You'll be redirected to the configuration page of the newly created app, which will be named **Untitled Application 1** by default.
3. Rename your app to **Catalog Dashboard** by clicking on the existing name in the top-left of the screen, and selecting **Edit Name**.
4. Click the **Build with drag & drop** button located on the center of the canvas.

<VideoEmbed host="youtube" videoId="TaPgZbHpkQw" title="Creating and renaming a brand new application" caption="Creating and renaming a brand new application"/>

The new app comes with auto-generated directories that establish an Appsmith app. Here is a look at the directory structure:

![](/img/as_storeTutorial_dirs.png)

:::info
The Entity Explorer pane on the left side of the screen is a place where you can create and organize UI widgets and data sources. Additionally, you can also find different integrations that you can utilize under these sections.
:::

Let's see what each of these directories is:

* **`Pages`**: This directory is a container for all the web-pages and their configuration of your app. Under this directory, you can create and organize different pages based on the tool or application you're building.
  * The **`Page1`** directory contains all entities required to render the corresponding web-page.
* **`Widgets`**: This directory is a container for all the widgets that will be part of the web-page `Page1`. You can think of Widgets as simple UI Components for your web-page, like a form or a table. By default, this directory doesn't have any pre-configured widgets.
* **`Datasources`**: The datasources directory is a container consisting of all API's and queries that Page1 connects to.
* Lastly, you can also see all the [JS libraries supported by Appsmith](/write-code/how-to-guides/ext-libraries.md) under the _**External libraries**_ section. These libraries are already imported into your app's environment, ready to be used.

## Creating your First Page

Now that your environment (referred to as an **app**) is set up, you're ready to start doing work.

:::info
A page in Appsmith is where the three building blocks of your app - Widgets, APIs, and DB Queries come together to create a view.
:::

The first page you create will list all the products at Oakry. Let's use the default page **Page1** that was created when you created this app. Now, rename the page to **ProductListPage** by double-clicking on **Page1**.

In the next section, let's build a simple UI for our store manager.
