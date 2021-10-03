---
description: >-
  Guide on how to build auto-generated forms using the list widget
---

# Build auto-generated forms using the list widget
This how-to guide assumes you know how to use [forms](https://docs.appsmith.com/widget-reference/form) and basic knowledge around [building simple applications with Appsmith](https://docs.appsmith.com/).

## List widget
The List widget is used to display a paginated list of similarly structured data. Basically it's used to repeat a template based on the large data (or a collection of objects). The template is just a container widget that repeats itself.

## Why use List widget when you have the Form widget
The List widget might come in handy when you have to build same form multiple times. It will help you auto generate forms for all the items in the list when you just build the form for the first item.

What does that mean exactly?

Let's say you have to build a Pokémon guessing app and you want to show 3 Pokémon images at a time to a user and want them to guess the name. So how would you build it? Yep... using three seperate forms with input fields and buttons. And let's not forget that you have to connect each form to your data that I am guessing you're getting from your database or an API.

Doesn't that sound tedious? Building same thing thrice and then connecting everything separately. Basically we are doing the same thing thrice. What if you wanted to show 10 Pokémon images at a time? Are you eager enough to do this process ten times? Well, let's not... since we have the List widget.

The List widget in this case will allow you to build a form for the first time and it will auto-generate the other two (or remaining items in the list) forms by copying what you did in the first one. Doesn't this sound much less tedious? You'd have to match the spacings and everything just once and you will get everything ready.

Sounds cool, right? Let's see how we can do this.

## Build the List form
Since we already spoke a bit about building a Guess the Pokémon form, let's try building that with 3 Pokémon at a time. For that let's first drag and drop a List widget to your application. It should look something like this:

![Screenshot 2021-10-04 at 2 10 55 AM](https://user-images.githubusercontent.com/41565823/135770832-a5ddeb33-f279-45c8-ba06-05906fb808f7.png)

Now, delete the unecessary widgets inside the list widget, and then drag an input widget in the first item of the list. It should do the same to all the remaining items (2 in our case) of the list. So now your app should look something like this:

![Screenshot 2021-10-04 at 2 25 48 AM](https://user-images.githubusercontent.com/41565823/135771267-f5e85bef-84ac-433b-904e-6cb56028c6b2.png)

Now, let's add a button to really make it look something like a form. And also fix the spacing a bit. And that should be enough to generate the UI of our application, and should look something like this:

![Screenshot 2021-10-04 at 2 43 11 AM](https://user-images.githubusercontent.com/41565823/135771725-1dd252c0-5de4-4d4a-8eab-75fa5a9af93f.png)

Now wasn't that easy?

Do you want to make this for five items now? No problem, List widget has again got you covered. Just click the settings icon next to your list widget and add more items to your list. It will automatically generate the forms for those as well.

Your old value under the Items section of that settings should be:

```
[
  {
    "id": "001",
    "name": "Bulbasaur",
    "img": "http://www.serebii.net/pokemongo/pokemon/001.png"
  },
  {
    "id": "002",
    "name": "Ivysaur",
    "img": "http://www.serebii.net/pokemongo/pokemon/002.png"
  },
  {
    "id": "003",
    "name": "Venusaur",
    "img": "http://www.serebii.net/pokemongo/pokemon/003.png"
  }
]
```
I added two more items to this and made it this:

```
[
  {
    "id": "001",
    "name": "Bulbasaur",
    "img": "http://www.serebii.net/pokemongo/pokemon/001.png"
  },
  {
    "id": "002",
    "name": "Ivysaur",
    "img": "http://www.serebii.net/pokemongo/pokemon/002.png"
  },
  {
    "id": "003",
    "name": "Venusaur",
    "img": "http://www.serebii.net/pokemongo/pokemon/003.png"
  },
	{
    "id": "004",
    "name": "Charmandar",
    "img": "https://www.serebii.net/pokemongo/pokemon/004.png"
  },
	{
    "id": "005",
    "name": "Charmeleon",
    "img": "https://www.serebii.net/pokemongo/pokemon/005.png"
  }
]
```

And what did the application look like? Here's how:
![Screenshot 2021-10-04 at 2 50 42 AM](https://user-images.githubusercontent.com/41565823/135771919-97a88a1e-ac18-42c9-a3d9-b6033f93d765.png)

After this all you need to do is add what you want to do on the submitting of the form. You can do that the same way you did in the Form widget, by updating the action events. I am assuming you know it better and if you need a refresher, [here's a good resource](https://docs.appsmith.com/widget-reference/form).

You can also check out the application that I built [here](https://app.appsmith.com/applications/615a14b33a5bfe535012a5cf/pages/615a14b33a5bfe535012a5d1). 

And now you know how to reduce your labor when building multiple forms on Appsmith :)
