---
description: Guide on how to use Notion as a Database on Appsmith
sidebar_position: 12
---

# How to Use Notion as a Database on Appsmith

The guide presumes that you are primarily familiar with [Appsmith](https://www.appsmith.com) and builds further on integrating Appsmith with other tools. In case you don't have much understanding of the [core concepts](broken-reference/) of Appsmith, it is recommended to create an account and try implementing them.

## Notion

Notion, as the official docs imply, is an application that provides components such as notes, databases, wikis, calendars and reminders. It enables users to connect these components and create their own systems for knowledge management, taking notes, managing data, project management and much more.

In this guide you will learn to create a Notion Database and use it as a data source in your Appsmith application.

## Building A Demo Application

To make this guide 'easy to follow', we will try to build a simple application which fetches data from Notion database.

Let us begin with configuring the Notion API.

## Setting Up A Notion Integration

First sign up for a Notion account(if you already have one, log into your account) [here](https://www.notion.so/login). Choose a Workspace to work with or create a new one specifically for this application. In the left navigation bar click on the `Settings & Members` when a new settings modal appears select `Integrations` under Workspace.

![Screenshot one](/img/notion-appsmith-1.png)

Then choose `Develop your own integrations` and you will be redirected to your integrations page.

![Screenshot two](/img/notion-appsmith-2.png)

Click on `New Integration` and give your integration a name and logo(if you want to). Also mention the workspace that you want to associate with the integtation. Click on `Submit` and you will be receiving a secret key, make sure to copy the secret key and store it safely. We will be using the secret key to connect the integration with third-party applications.

![Screenshot three](/img/notion-appsmith-3.png)

## Setting Up A Notion Page

We will create a Database to store the records to be displayed on our application. The table may contain the following fields:

```
 Movie Name: Title Field
 Release Date: Date Field
 Cast: Text Field
 IMDb Rating: Text Field
 link: Link Field
 Poster: Image Field
```

Add values to the table. This page will create a mock database that can ve accesses from our Appsmith application.

![Screenshot Four](/img/notion-appsmith-4.png)

## Building The Application On Appsmith

Login to your Appsmith account or Sign up for a new account, if you don't already have one. The next step is to create a new application under a workspace by clicking on the `+ NEW` button on the top right corner.

![Screenshot Five](/img/notion-appsmith-5.png)

Change the default name to a name of your choice.For Instance, I am using the name, 'Movicon'. You shall now see Widgets, Datasources and Pages on the left navigation bar. we can use these compomnents in our application. We will create a Notion API.

![Screenshot six](/img/notion-appsmith-6.png)

Click on the `+` icon next to Datasources option and then in the `+ Create New` section search for APIs and and click on `+ Create New API` option. Give the API a suitable name such as 'notion\_api\_for\_movicon'. Then add url of the Notion Database.

```
https://api.notion.com/v1/databases/DB_ID/query
```

Replace the 'DB\_ID' with the database id of your Notion Database. Which can be fetched from the url.

```
https://www.notion.so/myworkspace/a8aec43384f447ed84390e8e42c2e089?v=...
                                  |--------- Database ID --------|
```

Add the following Key-value pairs in the Headers tab:

```
Authorization: 'Your secret key'
Notion-Version: 2021-05-13
Content-type: application/json
```

It should look something like this

![Screenshot seven](/img/notion-appsmith-7.png)

Hit run to see all the data from your Notion Database in the Response Body panel.

## Formatting The Fetched Data

Now we need to display the data that we have fetched in a presentable format. And this can be done using the UI widgets provided by Appsmith. We need to follow some easy steps to bind the Notion API contaning data into a table. First, expand the Page1 dropdown menu and then click on the `+` icon beside `Widgets` option. It lists down different UI widgets that can be used to build our aaplication's UI. Select the 'Table' widget then drag and drop that onto the canvas. Something like this is visible:

![Screenshot eight](/img/notion-appsmith-8.png)

To include response from the API in this table use the moustache syntax to write JS in Appsmith.

```
{{

notion_api_for_movicon.data.results.map(
    (item) => {
        return (item.properties)
    })

}}
```

Now that we have received data in the table, we can add more widgets for each attribute of the data records from the UI widgets list. You can add Image widget for the Poster field and Text widget for other fields. To set the property of the widgets, next to the widget options add code snippets to fetch values of respective attributes from the array of data fetched from the API.

```
 {{ currentItem.MovieName.title[0].text.content }}
```

For Release Date set the property

```
 {{currentItem.ReleaseDate.date.start}}
```

For cast and Imbd ratings

```
 {{currentItem.cast.rich_text[0].text.content}}
```

and

```
 {{currentItem.imbdratings.rich_text[0].text.content}}
```

These were some basic operations that can be performed by using Notion as a Database on Appsmith. You can definitely try out more features by playing around with the interface.
