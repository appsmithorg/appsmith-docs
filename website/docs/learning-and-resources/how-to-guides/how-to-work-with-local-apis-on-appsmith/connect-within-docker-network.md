---
sidebar_position: 1

description: This guide helps you to connect your APIs or databases to your Appsmith instance from inside networked Docker containers.
---

# Connect Within Docker Network

This guide describes how to connect your APIs and databases to your Appsmith instance from inside networked Docker containers.

## Set up services

In this guide, you'll use networked Docker containers to spin up a Postgres instance alongside Appsmith and connect to the database from an Appsmith app.

1. From the command line, create a Docker network with the following:

    ```bash
    docker network create appsmithnetwork
    ```

1. Create two folders, `Appsmith` and `Datasource`.

1. Within the `Appsmith` folder, create a `docker-compose.yml` file for Appsmith. Assign it to the network from the first step, such as in the bottom of this example file:

    ```yaml
    version: "3"
    services:
        appsmith:
            image: index.docker.io/appsmith/appsmith-ce:v1.9.12
            container_name: appsmith
            ports:
                - "80:80"
                - "443:443"
            volumes:
                - ./stacks:/appsmith-stacks
            restart: unless-stopped
            networks:
                - appsmithnetwork
    networks:
    appsmithnetwork:
        external: true
    ```

    :::caution
    Be sure to use the correct image of Appsmith, depending on whether you're setting up the Community (`ce`) or Business (`ee`) edition.
    :::

1. Start the Appsmith container with `docker-compose up -d`.

1. Inside the `DataSource` folder, create `docker-compose.yml` file and assign it to the same network. For example:

    ```yaml
    version: '3'
    services:
        postgres:
            image: 'postgres:12'
            restart: always
            volumes:
                - './postgres_data:/var/lib/postgresql/data'
            environment:
                - POSTGRES_PASSWORD=secure_pass_here
            ports:
                - '5433:5432'
            networks:
                - appsmithnetwork
    networks:
        appsmithnetwork:
            external: true
    ```

1. Start the Postgres container with `docker-compose up -d`.

## Connect to the database from Appsmith

Now, you are ready to open your app and connect to your Postgres instance.

1. Navigate to your application and create a Postgres datasource.

1. For the **Host Address** field, enter the name of the Docker container that's running your Postgres instance. For example, this might look something like `postgres_postgres_1`.

    :::tip
    If you need to see the names of the containers running on your network, you can use the command:

    ```bash
    docker network inspect <network_name>
    ```
    :::

1. Fill in the remaining fields for your database and try the **Test** button. Your database should now be connected.

