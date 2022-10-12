---
description: Guide on how to build auto-generated forms using the list widget
sidebar_position: 4
---

# How to build auto-generated forms using List widget

This how-to guide assumes you know how to use [forms](../../reference/widgets/form.md) and basic knowledge around building [simple applications with Appsmith](https://docs.appsmith.com/).

## List widget

The List widget displays a paginated list of similarly structured data. It's used to repeat a template based on the large data (or a collection of objects). The template is just a container widget that repeats itself.

## Why use the List widget when you have the Form widget

The List widget might come in handy when you have to build the same form multiple times. It will help you auto-generate forms for all the items in the list when you just make the form for the first item.

What does that mean exactly?

Let's say you have to build a Pokémon guessing app, and you want to show 3 Pokémon images at a time to a user and want them to guess the name. You can build it using three separate forms with input fields and buttons. And let's not forget that you have to connect each form to your data that I am guessing you're getting from your database or an API.

Doesn't that sound tedious? Building the same thing thrice and then connecting everything separately. We are doing the same thing thrice. What if you wanted to show 10 Pokémon images at a time? Are you eager enough to do this process ten times? Well, let's not, since we have the List widget.

The List widget, in this case, will allow you to build a form for the first time, and it will auto-generate the other two (or remaining items in the list) forms by copying what you did in the first one. Doesn't this sound much less tedious? You'd have to match the spacings and everything just once, and you will get everything ready.

Sounds cool, right? Let's see how we can do this.

## Build the List form

Since we already spoke about building a Guess the Pokémon form, let's try building that with 3 Pokémon at a time. For that, let's first drag and drop a List widget to your application. It should look something like this:

![List widget](/img/build-list-form-1.png)

Now, delete the unnecessary widgets inside the list widget and drag an input widget in the list's first item. It should do the same to all the remaining items (2 in our case) of the list. So now your app should look something like this:

![List widget with input field](/img/build-list-form-2.png)

Now, let's add a button to make it look something like a form. And also, fix the spacing a bit. And that should be enough to generate the UI of our application and should look something like this:

![List widget with input field and button](/img/build-list-form-3.png)

Now wasn't that easy?

Do you want to make this for five items now? No problem, the List widget has again got you covered. Just click the settings icon next to your list widget and add more items to your list. It will automatically generate the forms for those as well.

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

And Here's how the application looked like:

![List widget with five items](/img/build-list-form-4.png)

After this, all you need to do is add what you want to do on submitting the form. You can do that the same way you did in the Form widget, by updating the action events. I assume you know it better, and if you need a refresher, [here's a good resource](../../reference/widgets/form.md).

You can also check out the application that I built [here](https://app.appsmith.com/applications/615a14b33a5bfe535012a5cf/pages/615a14b33a5bfe535012a5d1).

And now you know how to reduce your labor when building multiple forms on Appsmith :)
