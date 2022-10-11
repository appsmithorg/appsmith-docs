---

sidebar_position: 1

description: >-
  This guide helps you to connect your APIs or databases running on localhost
  with Appsmith using host.docker.internal or ngrok.
---

# Connect via localhost

## Connect to a localhost database/API

With your on-premises Appsmith instance running on the same system, you may use [`host.docker.internal` ](how-to-work-with-local-apis-on-appsmith.md#using-docker-internal)or [ngrok](how-to-work-with-local-apis-on-appsmith.md#using-ngrok) to connect to databases, APIs, and services that are running on localhost or as other docker containers.

## Using host.docker.internal

You can use `` [`host.docker.internal`](https://docs.docker.com/desktop/networking/#i-want-to-connect-from-a-container-to-a-service-on-the-host) to connect with the databases/APIs/other docker containers running on `localhost`. The video below shows how to set things up.

:::tip
You can also visit docker docs to read the use cases and workarounds for the [host.docker.internal](https://docs.docker.com/desktop/networking/#use-cases-and-workarounds-for-all-platforms) usage.&#x20;
:::


 <object data="https://www.youtube.com/embed/4XlgsVekzhI" width='860px' height='515px'></object> 


## Using ngrok

Appsmith allows you to work with APIs running on `localhost` using the help of **`ngrok`**. Let’s look at how you can build an Appsmith application utilizing the APIs running on localhost.



 <object data="https://www.youtube.com/embed/IUX2rXmS17E" width='860px' height='515px'></object> 



### Building a Simple Local API

Let's take an example, we’ll use a Python FastAPI server for serving a simple API on localhost. Let’s install the necessary packages using pip:

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

Here, we imported the FastAPI library and initiated an app using the `FastAPI` class. Next, we define a simple list consisting of details of steam games as objects

Lastly, we declare a route “/” at which the items variables (game objects) are being returned. We can get this server running by using the following command:

```bash
$ uvicorn main:app --reload
```

> The command uvicorn main:app refers to:
>
> * `main`: the file main.py (the Python "module").
> * `app`: the object created inside of main.py with the line app = FastAPI().
> * `--reload`: make the server restart after code changes. Only use for development.

Awesome, with this we should see our API running at [http://127.0.0.1:8000](https://github.com/appsmithorg/appsmith-docs/blob/v1.3/how-to-guides/http:/127.0.0.1:8000!) !

### Setting ngrok

Now that we have our local APIs, let’s use `ngrok` to serve them on production. For this, we’ll have to signup at [ngrok](https://dashboard.ngrok.com/get-started/setup) (it’s free!), and follow the instructions to connect your account.

1. Download the `ngrok` installation file and unzip it.
2. Add your `auth-token` to the default ngrok.yml configuration file using:

```
$ ./ngrok authtoken <your-auth-token>
```

Fire up `ngrok`, we already have our API server ready, now we’ll have to expose the particular local port for HTTP tunnel forwarding using the following command:

```
$ ./ngrok http 8000
```

Awesome, we can now see that the local APIs are now being forwarded to a different server on production using `ngrok`. Below is a screenshot,

![ngrok commands](https://lh5.googleusercontent.com/5Qdqw3U5EYtDk5EhpWrTrrUw5EcKPqZGE8xX2W7NjazBd\_cdSQZNUgVkUzkQXjG0NqCusqQW4ftUp3GAOg794gsWCZpXrDi1lmtBF7ZplJ5lAAcdsc\_hfKOFr93KebVE4nZ1JKp9)

### Testing APIs on Appsmith

Now that we have API, up and running, let’s test these out on Appsmith.

* Create an application on Appsmith
* Create a New API by clicking on the `+` icon next to the APIs section on the left navigation and rename it to `getGames`
* Add the forwarded API link and hit RUN, we’ll have to see the API response on the response pane.
* Next, navigate to Pages, and drag and drop a Table Widget onto the canvas.
* Open the table property pane and add use the API to display data on to the table by adding the following code snippet under the Table Data property:

```javascript
{{ getGames.data }}
```

Below is a GIF, following the same steps:

![Test API](/img/NGROK.gif)
