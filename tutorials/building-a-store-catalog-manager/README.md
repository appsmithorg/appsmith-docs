# Building a Store Catalog Manager

This tutorial shows you how to build a feature-complete **Grocery Catalog** application for an online grocery store called Oakry using [Appsmith](https://app.appsmith.com/). The application we will be building is a multi-page dashboard used by Oakry’s Catalog Managers to:

* Browse the product catalogue
* Add new products to the catalogue
* Update the details of products in the catalogue

The tutorial is organized into three parts & we recommend you follow them in order.

You must have an account on either [Appsmith Cloud](https://docs.appsmith.com/quick-start#appsmith-cloud) \(it's free\) or your own[ private instance](https://github.com/appsmithorg/appsmith-docs/tree/31120b863977a1f6e4f4a25c6723a93c3834f5a2/tutorials/setup/README.md) before getting started. Before diving in, let's talk a bit about the Appsmith environment.

## The Appsmith Environment

If this is your first time using Appsmith, you'll need to get acquainted with some initial setup. When you log in, you'll be redirected to [Appsmith Dashboard](https://app.appsmith.com/applications). This home-page has an auto-generated organization called **`<Your first-name> apps`** \(referred to as your personal organization from now on\) consisting of multiple templates. In this tutorial, we'll create our Catalog app under the same organization.

Let's now create a new app named _Catalogue Dashboard_ under the personal organization.

> An app on Appsmith is a standalone software-application solving a specific use-case. It can consist of one or more web-pages.

Here are steps to create an app on Appsmith Dashboard:

1. Click on the _Create New_ button under your organization.
2. You’ll be redirected to the configuration page of the newly created app.
3. Note that the new app is created with the default name **Untitled Application 1**.
4. Rename it to **Catalog Dashboard** by double-clicking on the existing one.

![Creating and Renaming Appsmith Application](https://lh3.googleusercontent.com/uTBER5l7d5mpWZ_PlFZMfnezoyS2B7mS3eQE91SuxhQKAE1zngWSlXQZIBtKV536Hr3lHM0j7E9ohmDOFq4EIILhrndO178PFeGgw0zplCEiXewAzrQQO5Lyt4NpZMAdlI0TngaW)

The new app comes with auto-generated directories that establish an Appsmith app. Below is a screenshot of the directory structure.

![](https://lh3.googleusercontent.com/mIIYBrTl38OXm9gDaOQIlG-7PsCJBhBcmJmg3iJPheczmdCb_4sFZarfG_zhLko-9A1tqGfj5X4huj3Hx6uixGYRBXlKr-nCA-VD44CbY0l6uI_-evHvQ4udOe7N9uAFRjUZuL2h)

> Entity Explorer is a place where you can create and organise UI widgets and data sources. Additionally, you can also find different integrations that you can utilise under these sections.

{% hint style="danger" %}

Let's see what each of these directories is:

* **`Pages`** : This directory is a container for all the web-pages and their configuration of your app. Under this directory, you can create and organize different pages based on the tool or application you're building.
* The **`Page1`** directory contains all entities required to render the corresponding web-page.

{% hint style="info" %}

* **`Widgets`**: This directory is a container for all the widgets that will be part of the web-page `Page1`. You can think of Widgets as simple UI Components for your web-page, for example, a data-picker or a form. By default, this directory doesn’t have any pre-configured widgets.
* **`Datasources`**: The datasources directory is a container consisting of all API's and queries that Page1 connects to.
* Lastly, you can also see all the [JS libraries supported by Appsmith](https://docs.appsmith.com/core-concepts/connecting-ui-and-logic/working-with-js-libraries#included-js-libraries) under _**JS libraries you can use**_ section below the `Page` directory. These libraries are already imported into your app's environment, ready to be used.

## Creating your First Page

Now that your environment – an "**app**" – is set up, you’re ready to start doing work.

> A page in Appsmith is where the three building blocks of your app - Widgets, APIs, and DB Queries come together to create a view.

The first page you create will list all the products at Oakry. Let's use the default page **Page1** that was created when you created this app. Now, rename the page to **ProductListPage** by double-clicking on **Page1**.

In the next section, let's build a simple UI for our store manager.

{% page-ref page="part-1-creating-a-simple-view.md" %}

