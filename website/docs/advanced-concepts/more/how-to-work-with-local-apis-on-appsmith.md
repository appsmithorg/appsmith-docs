---

sidebar_position: 1

description: >-
  This guide helps you to connect your APIs or databases running on localhost
  with Appsmith using host.docker.internal or ngrok.
---

# Connect via Localhost

## Connect to a localhost database/ API

With your on-premises Appsmith instance running on the same system, you may use [`host.docker.internal` ](how-to-work-with-local-apis-on-appsmith.md#using-docker-internal)or [ngrok](how-to-work-with-local-apis-on-appsmith.md#using-ngrok) to connect to databases, APIs, and services that are running on localhost or as other docker containers.

## Using host.docker.internal

You can use [`host.docker.internal`](https://docs.docker.com/desktop/networking/#i-want-to-connect-from-a-container-to-a-service-on-the-host) to connect with the databases/APIs/other docker containers running on `localhost`. The video below shows how to set things up.

:::info
You can also visit docker docs to read the use cases and workarounds for the [host.docker.internal](https://docs.docker.com/desktop/networking/#use-cases-and-workarounds-for-all-platforms) usage.
:::



 <VideoEmbed host="youtube" videoId="4XlgsVekzhI" title="Connect to databases/APIs running on localhost" caption="Connect to databases/APIs running on localhost"/>
 
For Linux systems, you would need to provide a run flag `add-host`. 

```
--add-host=host.docker.internal:host-gateway
```
:::note
Only more recent versions of Docker support host-gateway, which is transformed to the Docker default bridge network IP (or virtual IP of the host).
:::

Run the below command to test and ensure the IP address from the hosts’ file is displayed.

```bash
 run —-rm -—add-host=host.docker.internal:host-gateway
 ```
For Docker Compose on Linux, you need to manually add it to the ```docker-compose.yaml``` file. Use ```extra hosts``` to add the entry as shown below: 

```yaml
 extra_hosts:
    - "host.docker.internal:host-gateway"
```

## Using ngrok

Appsmith allows you to work with APIs and databases running on `localhost` using the help of **`ngrok`**. You'll have to set up `ngrok` for the same.

### Setting ngrok

To set up 'ngrok’- you would have to signup at [ngrok](https://dashboard.ngrok.com/get-started/setup) (it’s free!). Follow the instructions to connect your account.

* Download the `ngrok` installation file and unzip it
* Add the [`auth-token` to the configuration](https://ngrok.com/docs/ngrok-agent#install-your-authtoken)


### Connect via ngrok
With 'ngrok,’ you would be able to connect to the databases and APIs running on your localhost.

 <VideoEmbed host="youtube" videoId="IUX2rXmS17E" title="Connect to localhost using ngrok" caption="Connect to localhost using ngrok"/>

### Connecting to a localhost database
You've a MongoDB instance running on your localhost. You wish to connect the app you are building on [Appsmith Cloud](https://app.appsmith.com) to MongoDB.

Follow the below steps to connect to the MongoDB instance:
* Expose your local MongoDB instance using ```ngrok``` command
```bash
ngrok <PROTOCOL> <LOCAL_PORT> 
```
MongoDB uses a ```tcp``` protocol for creating connections, and ```27017``` is the default port. If you are not using a default port, provide it in place of ```27017```.

```bash
ngrok tcp 27017
```

![connect using ngrok MongoDB running on localhost](/img/connect-localhost-mongodb-using-ngrok.png)

Use the host address ```0.tcp.in.ngrok.io``` and the port number ```17392``` to add a MongoDB datasource to your app.

![create a MongoDB datasource using ngrok by connecting to local MongoDB ](/img/Appsmith-connect-localhost-mongodb-using-ngrok.png)

#### Create query
You can [create queries](/core-concepts/data-access-and-binding/querying-a-database/#setting-up-a-query) to the newly added localhost instance of MongoDB ```LocalMongoDBUsingNgrok``` datasource.

### Building a simple local API

To host an API locally, you could use a [Python FastAPI](https://realpython.com/fastapi-python-web-apis/#what-is-fastapi) server. You could install it using ```pip```.

```bash
$ python3 -m pip install fastapi uvicorn
```

You could serve the API request by using the code snippet:

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

In the code snippet - you have:
* Imported a FastAPI library and initiated an app using the `FastAPI` class
* Defined a collection of steam game objects
* Declared a route “/” at which the items (game objects) could be accessed 

You could run the server with the following command:

```bash
$ uvicorn main:app --reload
```
> The command uvicorn main:app refers to:
>
> * `main`: the file main.py (the Python "module").
> * `app`: the object created inside main.py with the line app = FastAPI().
> * `--reload`: to restart the server after code changes. Only used for a development environment.

You would see a screen below when the app is up and API is ready to use.

![Run the localhost API using FastAPI](/img/start-localhost-api-using-fastapi.png)

Awesome, you could see your [API in action](http://127.0.0.1:8000).

Fire up `ngrok` and expose the local port[8000] to access the local API in your app available on [Appsmith Cloud](https://app.appsmith.com).

```bash
ngrok <PROTOCOL> <LOCAL_PORT> 
```

To access the API, you would have to use the `HTTP` protocol and port `8000`.

```bash
ngrok http 8000
```

`ngrok` creates an HTTP tunnel, forwards the externally accessible address to the local address, and enables access to the local API over the internet.

![connect local api using ngrok](/img/connect-localhost-api-using-ngrok.png)

#### Connect to local API
You can [create an API](/core-concepts/connecting-to-data-sources/authentication/connect-to-apis#api-editor) and add the localhost API with the address `https://a8cc-2405-201-21-4011-5564-59ac-2209-1c4c.in.ngrok.io`.

![connect to an API hosted on localhost using ngrok](/img/create-api-for-local-api-on-appsmith.png)

## Further reading
You could read the API/ query response and [display the data](/core-concepts/data-access-and-binding/displaying-data-read/) by binding it with different [widgets](/reference/widgets/) available on Appsmith.
