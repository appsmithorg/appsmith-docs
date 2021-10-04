# Review Moderator Dashboard

In this tutorial, you’ll learn to build a feature-complete internal tool on top of a real business dataset using Appsmith. The application is a multi-page dashboard that lets you browse through all the business information and moderate individual reviews provided by users.

{% hint style="info" %}
**TUTORIAL INFORMATION**

⭐ **Level**: Beginner  
⏱️ **Time**: ~20 minutes  
🙌 **Goals**: 

* Connecting to Data Sources on Appsmith \(APIs/DB Queries\)
* Binding Data onto different UI Widgets
* Writing JS on Appsmith for Complex Views
* Deploy and Manage your Applications


The tutorial is organized into three parts & we recommend you to follow them in order. Now before getting started, let’s set up Appsmith. You could either choose to use the self-hosted version using Docker or Appsmith cloud and follow along. 

{% hint style="warning" %}
Note: To set up Appsmith locally using Docker, you can follow the instructions provided [here](https://docs.appsmith.com/setup/docker).


If this is your first time using Appsmith, you'll need to get acquainted with some initial setup. When you log in, you'll be redirected to [Appsmith Dashboard](https://app.appsmith.com/applications). This has an auto-generated organization called `<Your first-name>` apps \(referred to as your personal organization from now on\). However, you can create multiple organisations and organise your apps based on your preferences.

In this tutorial, you'll create our Review Moderator application under the same organization. To do this, follow the below steps:

1. Click on the `Create New` under your organisation.
2. This will redirect to the configuration page of the newly created app.
3. Note that the app is created with the default name **Untitled Application 1**.
4. Rename it to `Review Moderator` ****by double-clicking on the existing one.

> Tip: On Appsmith, you can rename organisation names, widget names, query names and many more by double-clicking on the existing one.


![Creating and Renaming Appsmith Application](https://lh3.googleusercontent.com/uTBER5l7d5mpWZ_PlFZMfnezoyS2B7mS3eQE91SuxhQKAE1zngWSlXQZIBtKV536Hr3lHM0j7E9ohmDOFq4EIILhrndO178PFeGgw0zplCEiXewAzrQQO5Lyt4NpZMAdlI0TngaW)

The new app comes with auto-generated directories that establish an Appsmith app. Below is a screenshot of the entity explorer.

![](https://lh3.googleusercontent.com/mIIYBrTl38OXm9gDaOQIlG-7PsCJBhBcmJmg3iJPheczmdCb_4sFZarfG_zhLko-9A1tqGfj5X4huj3Hx6uixGYRBXlKr-nCA-VD44CbY0l6uI_-evHvQ4udOe7N9uAFRjUZuL2h)

> Entity Explorer is a place where you can create and organise UI widgets and data sources. Additionally, you can also find different integrations that you can utilise under these sections.

Now, let’s rename the page from `Page1` to `Business Details`; you can do this by double-clicking on the existing name.

Awesome, you have now have set up the application. Next, let’s jump into the first part, here you’ll connect to a data source and write your first DB Query on Appsmith!

{% page-ref page="connecting-to-data-source-and-binding-queries.md" %}



