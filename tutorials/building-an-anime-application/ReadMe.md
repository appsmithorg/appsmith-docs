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


