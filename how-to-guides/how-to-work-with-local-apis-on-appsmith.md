---
description: This guide helps you to connect your Local APIs with Appsmith using ngrok
---

# How to work with Local APIs on Appsmith

{% embed url="https://youtu.be/IUX2rXmS17E" caption="" %}

Appsmith allows you to work with local APIs using the help of **`ngrok`**. In this guide, let’s look at how we can build an Appsmith application utilising the local APIs running on our machine

## Building a Simple Local API

If you have your local APIs ready, you can skip to the next section. Here, as an example, we’ll use a Python FastAPI server for serving a simple local API. Let’s install the necessary packages using pip:

```bash
$ pip install fastapi uvicorn
```

Now let’s write a script that’ll serve as a simple API request, below is the code snippet:

```python
from fastapi import FastAPI

app = FastAPI()

items = [{     
       "name": "Counter-Strike",
       "appid": 10,
       "average_playtime": 17612,
       "genres": "Action",
       "price": 7.2
     },
     {
       "name": "Team Fortress Classic",
       "appid": 20,
       "average_playtime": 277,
       "genres": "Action",
       "price": 3.99
     }]


@app.get("/")
async def root():
   return items
```

Here, we imported the FastAPI library, initiated an app using the `FastAPI` class. Next, we define a simple list consisting of details of steam games as objects

Lastly, we declare a route “/” at which the items variables \(game objects\) are being returned. We can get this server running by using the following command:

```bash
$ uvicorn main:app --reload
```

> The command uvicorn main:app refers to:
>
> * `main`: the file main.py \(the Python "module"\).
> * `app`: the object created inside of main.py with the line app = FastAPI\(\).
> * `--reload`: make the server restart after code changes. Only use for development.

Awesome, with this we should see our API running at [http://127.0.0.1:8000](http://127.0.0.1:8000!) !

## Setting ngrok

Now that we have our local APIs, let’s use `ngrok` to serve them on production. For this, we’ll have to signup at [ngrok](https://dashboard.ngrok.com/get-started/setup) \(it’s free!\), and follow the instructions to connect your account.

1. Download the `ngrok` installation file and unzip it.
2. Add your `auth-token` to the default ngrok.yml configuration file using:

```text
$ ./ngrok authtoken <your-auth-token>
```

Fire up `ngrok`, we already have our API server ready, now we’ll have to expose the particular local port for HTTP tunnel forwarding using the following command:

```text
$ ./ngrok http 8000
```

Awesome, we can now see that the local APIs are now being forwarded to a different server on production using `ngrok`. Below is a screenshot,

![](https://lh5.googleusercontent.com/5Qdqw3U5EYtDk5EhpWrTrrUw5EcKPqZGE8xX2W7NjazBd_cdSQZNUgVkUzkQXjG0NqCusqQW4ftUp3GAOg794gsWCZpXrDi1lmtBF7ZplJ5lAAcdsc_hfKOFr93KebVE4nZ1JKp9)

## Testing APIs on Appsmith

Now that we have API, up and running, let’s test these out on Appsmith.

* Create an application on Appsmith
* Create a New API by clicking on the `+` icon next to the APIs section on the left navigation and rename it to `getGames`
* Add the forwarded API link and hit RUN, we’ll have to see the API response on the response pane.
* Next, navigate to Pages, and drag and drop a Table Widget on to the canvas.
* Open the table property pane and add use the API to display data on to the table by adding the following code snippet under the Table Data property:

```javascript
{{ getGames.data }}
```

Below is a GIF, following the same steps:

![](../.gitbook/assets/ngrok.gif)

