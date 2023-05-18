---

sidebar_position: 5

description: >-
  This guide helps you to connect your APIs or databases running on localhost
  with Appsmith using host.docker.internal or ngrok.
---

# Connect to Local Databases and APIs

This page describes how to connect a database or API that is hosted locally on the same machine as your Appsmith instance.

## Connect Appsmith in Docker to datasource on localhost

To connect from Appsmith running in a Docker container to a database or API service on localhost, use `host.docker.internal` as the URL; it resolves to the internal IP address used by the host machine. See the official [Docker documentation](https://docs.docker.com/desktop/networking/#i-want-to-connect-from-a-container-to-a-service-on-the-host) for more information.

<VideoEmbed host="youtube" videoId="4XlgsVekzhI" title="Connecting from Appsmith in Docker to local datasource" caption="Connecting from Appsmith in Docker to local datasource"/>

To connect to your database or API from Appsmith:

1. Ensure that all of the relevant Docker containers are running. If you are running on Linux, [see the note below](#linux-note) before starting. 

2. In your Appsmith app, create a [datasource](/core-concepts/connecting-to-data-sources) for the appropriate type of database or API.

3. In the **Host Address** or URL field where you'd normally provide the URL for your datasource, instead enter `host.docker.internal`. Otherwise, configure your datasource details as normal.

4. Click **Test** to verify that the connection is valid.

<!-- anchor placed here to accommodate docs page header bar -->
<a name="linux-note"></a>

Your localhost application should now be connected and query-able from within your Appsmith app.


:::caution note
**Linux**: If your containers are running on a Linux machine, start your Appsmith container with the following command line argument to `docker run`. This is only supported for Docker 20.10.0 and later.

```bash
--add-host=host.docker.internal:host-gateway
```

Or, for `docker-compose`, update your docker-compose.yaml file to include the following `extra_hosts` option:

```yml
services: ...
  postgres: ...
    environment: ...
    extra_hosts:
      - "host.docker.internal:host-gateway"
```
:::

<figure>
  <img src="/img/local_db_config.png" style={{width: "100%", height: "auto"}} alt="Connecting from Appsmith in Docker container to PostgreSQL database running on localhost" />
  <figcaption align="center"><i>Connecting from Appsmith in Docker container to PostgreSQL database running on localhost</i></figcaption>
</figure>

## Connect Appsmith cloud to datasource on localhost

With ngrok, you can expose and connect to your database or API from the internet via a secure network tunnel:

<VideoEmbed host="youtube" videoId="IUX2rXmS17E" title="Connect to localhost using ngrok" caption="Connect to localhost using ngrok"/>

**Set up ngrok:** to begin, you'll need to [sign up for an account](https://dashboard.ngrok.com/signup) with ngrok if you don't have one already. Then, follow the [setup instructions](https://dashboard.ngrok.com/get-started/setup) to install and configure ngrok for the first time. Run `ngrok help` to make sure it's ready to work.

Once you are ready to work with ngrok, follow these steps to connect Appsmith to your database:

1. Expose your database or API with the ```ngrok``` command:
  ```
  ngrok <protocol> <port>
  ```
  For example, you might use this for a PostgreSQL database instance:
  ```
  ngrok tcp 5432
  ```

2. When the command completes, ngrok returns you a set of session details including the **Forwarding** address. It should look something like:
    * For **tcp**:
    ```
    tcp://0.tcp.in.ngrok.io:17392
    ```
    In this address, `tcp://0.tcp.in.ngrok.io` is the **Host Address** and `17392` is the **Port**.

    * For **http**:
    ```
    https://e4da-2600-1700-ede0-5b20-b092-ac43-60a7-178b.ngrok-free.app
    ```
    This is simply the URL to use for your API, no port necessary.

3. Back in your Appsmith app, create a [datasource](/core-concepts/connecting-to-data-sources) for the appropriate type of database or API.

4. Enter the URL or **Host Address** & **Port** that you just got from ngrok, then configure your remaining datasource details as normal.

5. Click **Test** to verify that the connection is valid.

Your localhost application should now be connected and query-able from within your Appsmith app.

<figure>
  <img src="/img/ngrok-config-example.png" style={{width: "100%", height: "auto"}} alt="Connecting from Appsmith to local PostgreSQL database using ngrok" />
  <figcaption align="center"><i>Connecting from Appsmith to local PostgreSQL database using ngrok</i></figcaption>
</figure>


## Further reading

* [Create environments with Git](/advanced-concepts/version-control-with-git/environments-with-git)
* [Table widget](/reference/widgets/table)
