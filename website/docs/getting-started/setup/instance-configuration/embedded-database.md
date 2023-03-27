# Embedded Database
Appsmith has a built-in PostgreSQL v13 database. It's useful for testing various scenarios using mock databases.

:::info
The built-in database is only available for self-hosted Appsmith instances.
:::

To connect to the mock databases within the built-in database, see [Connect to an embedded database](/core-concepts/connecting-to-data-sources/connecting-to-databases#embedded-database).

## Disable the embedded database

You can disable the built-in database if needed. Follow the below steps to disable the built-in database:

1. Go to the root directory where Appsmith is installed. 
2. Open the `docker.env` file. For example, if you have deployed Appsmith on Docker, you can find the `docker.env` in the `<PROJECT_ROOT>/stacks/configuration` folder.
3. Set the value of the environment variable `APPSMITH_ENABLE_EMBEDDED_DB`.
```yaml
APPSMITH_ENABLE_EMBEDDED_DB=0
```
4. Save and restart your Appsmith instance. To restart the instance run the below command.
```bash
docker-compose restart appsmith
```

Once disabled, your Appsmith instance can no longer use the built-in database and the mock databases it hosts.

## Troubleshooting

If you're facing issues, reach out to the [support team](mailto:support@appsmith.com).

## Further reading
* [Manage Appsmith instance](/getting-started/setup/instance-management)