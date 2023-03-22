# Embedded Database

Appsmith comes with an integrated PostgreSQL v13 database. The embedded database is only available for self-hosted instances. The database comes with mock databases that you can use to try out and test various scenarios.

## Disable the embedded database
You may choose to disable the built-in database. To disable the database navigate to the `docker.env` file located in the installation root folder. For example, if you are using Docker installation, you can locate the file in the `<PROJECT_ROOT>/stacks/configuration` file. 

1. Update the key `APPSMITH_ENABLE_EMBEDDED_DB` as shown below:

    ```yaml
    APPSMITH_ENABLE_EMBEDDED_DB=0
    ```
2. Restart the Appsmith container by using the following command:

    ```bash
    docker-compose restart appsmith
    ```

After a server restart, the embedded database is unavailable on your self-hosted instance.
