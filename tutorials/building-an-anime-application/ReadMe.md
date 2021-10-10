---
description: >-
  This tutorial shows how to build an anime application on Appsmith
---

# Build an anime application
This tutorial assumes you have basic familiarity with [Appsmith](https://appsmith.com). If not, please create an account to get started. It is very easy to get started with it. Here are some good resources.

## Main features
- Page 1:
  - Search for an anime from a list of available titles (display name, source, dynamic wallpaper)
  - Like / Dislike a title of your choice
- Page 2:
  - See top rated anime

## What you will learn
- Building a more complex application using Appsmith
- Build multiple pages for your application
- Connecting an API as a data source
- Connecting MsSQL database as a data source
- Binding dynamic data from your database / API yo your application widgets
- Learn about `TreeSelect`, `List`, `Image`, `IconButton` and other widgets

## Application
You can check the complete application from the tutorial [here](https://app.appsmith.com/applications/615f5becea18372f05104dc1/pages/615f5becea18372f05104dc3).

Here are some preview screenshots from the application we would be building towards:

![Anime main page](https://user-images.githubusercontent.com/41565823/136691163-d3d70feb-1e1d-4535-bdad-d76972ab996b.png)

![Anime list page](https://user-images.githubusercontent.com/41565823/136691179-56c79743-c237-432a-b450-0fc199a9063d.png)

## Building main page UI
Let's first start with the main page of our application. This page should give a user the ability to search and find anime from a list. Based on the user's choice, the user should be able to see the name, some info and wallpaper for the anime.

First things first, let's first build the UI for our application.

Now, since we talked about giving user the choice to search and choose an anime from a list, the widget `TreeSelect` sounds perfect. It gives a drop down and also the ability to search through the list by typing. 

Let's drag and drop that to our application. It should look something like this:

![Anime main page 1](https://user-images.githubusercontent.com/41565823/136691318-25e422cb-2269-49fe-8a33-8fd6ce9629c9.png)

Now, I am also thinking of adding a wallpaper image for the anime that the user chooses. So, of course we arrive at the `Image` widget. So, let's drag and drop the Image widget now. The page should look like this now:

![Anime main page 2](https://user-images.githubusercontent.com/41565823/136691408-c7a66e93-f3aa-4f44-83d5-8bf216606b2b.png)

Now, what we need to have are the Like / Dislike buttons and the Name or Source of the anime material. So, of course we will add a... 
`Container` widget.

What? You were not expecting this one?

Okay, okay, I know, I led you on wrong. Sorry about that. Cool, so basically we would need `Text` widgets for displaying the Name and Source of the anime. And some buttons for the Like and Dislike features.

But in the UI, I was thinking of aggregating them all, that's why a `Container` widget. This will allow us to add all of these widgets inside it. So, let's drag and drop a container widget.

After this, let's drag and drop two `Text` widgets for Name and Source. Also let's use `IconButton` widgets instead of simple buttons since it would look better with icons. So we will have two Icon buttons now.

After dropping all of these in the pages, the application would look something like this:

![Anime main page 3](https://user-images.githubusercontent.com/41565823/136691735-04fa3420-6816-4667-a0a1-99d4128ec3ed.png)

If your styling looks a bit different, don't worry, try fiddling with the settings of the `IconButton` and the other widgets. You might find a lot of ways to make the overall look better.

Okay, now that I think about it, we should also have two widgets two show the number of `Likes` and `Dislikes` that were recorded. So, let's add in two more text widgets for it.

The page should look something like this now:

![Anime main page 4](https://user-images.githubusercontent.com/41565823/136691802-9b6056c4-b5d8-4634-b3de-b91fc431d632.png)

So far so good, right?

## Connecting data

We don't have any data integrated to it, yet. So, let's work on that. 

I am going to be using my own data sources in this case. One is a public API which I have named [AniPi](https://anipi.herokuapp.com/) and other one is a MsSQL table that I have hosted on [Somee.com](https://somee.com).

[AniPi](https://anipi.herokuapp.com/) is public and free to use. It is still a work in progress from my side but I will be making the repo public soon!

So, I am going to be using the wallpaper and titles part of AniPi in this case. The MsSQL table will be used to store the Likes, Dislikes and some other info.

Let's first see how to connect an MsSQL database with Appsmith.

### MsSQL connection
At the left hand side menu, you can see `Datasources` and there's a `+` sign beside it. It looks something like this:

![Anime main page 5](https://user-images.githubusercontent.com/41565823/136695648-83c79073-3b75-402f-8d70-2d1285267bcf.png)

If you click on it, you can see the active connections and there's also a tab that says `Create New`. On clicking it, you will find a screen like this which will show you all the options of database that you can setup for your Appsmith application. It looks something like this:

![Anime main page 6](https://user-images.githubusercontent.com/41565823/136695755-2e88b262-035b-4b53-aedd-980152485635.png)

For connecting an MsSQL database, click on the MsSQL option and you will be greeted with a screen like this:

![Anime main page 7](https://user-images.githubusercontent.com/41565823/136695783-825cf541-3dec-43de-a79c-bbcdcd1484a6.png)

Here you can fill up the connection credentials, and click on Test to check your connection. And when you're done you can click on Save to save your connection. Now you can see your connection on the Datasources page like this:

![Anime main page 8](https://user-images.githubusercontent.com/41565823/136695864-bf350a40-3c37-448f-bb74-bc27537d6fa3.png)

Now that we've also setup the connection, let's quickly write a query for getting the information from the table. Click on the `New query` button next to your database connection. Don't forget to name it to something that makes sense to find easily what each query does later on.

In this case, the query looks like this:

```
SELECT * FROM AnimeLike WHERE Id = {{SingleSelectTree1.selectedOptionValue}}
```

The `SingleSelectTree1.selectedOptionValue` is the selected value from the `TreeSelect` widget. I will explain how this work in a bit more detail later on, when we discuss about connecting the actual widget to this.

We also have to write queries for updating `Likes` and `Dislikes` values in the table on the button clicks. The query looks like this:

```
UPDATE AnimeLike
  SET Likes = Likes + 1
  WHERE Id = {{ SingleSelectTree1.selectedOptionValue }};
```

### AniPi connection
From AniPi, I am going to be using all titles and wallpapers API. So, let's see how we can integrate an external API like AniPi with Appsmith. For this again, click on the plus icon from the Datasources entry in the left hand side menu.

When you get to this screen like before, you have to choose `Create new API`:

![Anime main page 6](https://user-images.githubusercontent.com/41565823/136695755-2e88b262-035b-4b53-aedd-980152485635.png)

After that you will be greeted with a page like this:

![Anime main page 9](https://user-images.githubusercontent.com/41565823/136696365-27984f63-aaaa-48df-bc5e-57a7e8b9798d.png)

From the [Anipi docs](https://anipi.herokuapp.com/), the URL for the endpoint is `https://anipi.herokuapp.com/api/titles/all`. Let's fill up the details for the API in the screen above. After filling the details up, the screen would look something like this:

![Anime main page 10](https://user-images.githubusercontent.com/41565823/136696501-6804ce21-0c21-4054-a74f-58212c9dbe53.png)

You can also click on `Run` to check if the connection to the API works.

Simple, right?

Let's also quickly setup the wallpaper API.

For that, again setup everything like before. The only change here is that wallpaper API needs the `Id` of the anime. So, the endpoint setup in Appsmith will look something like this:

![Anime main page 11](https://user-images.githubusercontent.com/41565823/136696614-f0434d53-9cae-4679-9afd-6e6803a4324a.png)

I will get to the whole `{{SingleSelectTree1.selectedOptionValue}}` from previous and this page in next section.

## Binding data to widgets
Let's get back to the main page of the application. We already have added the widgets in the page, now let's bind the actual data to it from our data sources.

First let's setup the data in the dropdown. Click on the settings icon next to it and replace the current value with this:

```
{{
AniPi_all_titles.data.map((row) => {
      return { label: row.Name, value: row.Id };
  });
}}
```

If you're familiar with `map()` function in JavaScript, this would be very easy to understand but if you want a quick refresher, here's a good resource to check out.

Here, `AniPi_all_titles` is the query that gets all the titles from AniPi. Once you do this, your dropdown will now show the titles of the anime and you can also find them by typing and searching.

Also, one thing that you should notice here is that your dropdown is named `SingleSelectTree1`. This is the identifier that we have also used in the queries above. If this is not the name for you, you should use the identifer name for your dropdown in the queries.

Let's now also setup the URL for the image. Click on the settings icon of your image widget and replace the value with `{{Anipi_wallpaper.data.Url}}`. Here `AniPi_wallpaper` is the query name for getting the wallpaper info from AniPi in Appsmith.

And the title of the anime value to `{{AnimeLike_get.data[0].Name}}`. The likes and dislikes value text widget to `{{AnimeLike_get.data[0].Likes}}` and `{{AnimeLike_get.data[0].Disikes}}` respectively. Here, `AnimeLike_get` is the query for getting the data from the MsSQL database.

Also, we have to increment the likes and dislikes for an anime in our database on the button clicks.
