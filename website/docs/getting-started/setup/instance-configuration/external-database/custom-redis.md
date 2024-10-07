
# External Redis

Appsmith runs embedded instances of MongoDB and Redis. It uses MongoDB and Redis for data storage and session management. You can also switch to external instances. Using external instances enable better performance and scalability. Follow the steps on this page to set up external MongoDB and Redis for Appsmith.

:::caution Attention
To use external MongoDB with Appsmith v1.9.0 onwards, you need MongoDB version 5 or higher. Follow the steps in the MongoDB official documentation to [Upgrade a Replica Set to 5.0](https://www.mongodb.com/docs/manual/release-notes/5.0-upgrade-replica-set/)
:::


## External Redis

You can add your external Redis to Appsmith using one of the below ways:

- [Admin Settings](#admin-settings-1)
- [Environment Variables](#environment-variable-1)

#### Admin settings

You can use [Admin Settings](/getting-started/setup/instance-configuration#admin-settings) to set up an external Redis. The **Redis URL** property is present under **Advanced** Settings. Add your Redis URL to the setting and click the **SAVE & RESTART** button. The server restart establishes a connection with the external Redis.

<ZoomImage src="/img/setup-external-redis-using-admin-settings.png" alt="Setup an external Redis using Admin settings" caption="Setup an external Redis using Admin settings" />

#### Environment variable

To connect to an external Redis server, update the environment variable `APPSMITH_REDIS_URL`:

```bash
APPSMITH_REDIS_URL=redis://hostname:6379
```

Restart the Appsmith container by using the below command:

```bash
docker-compose restart appsmith
```

## Troubleshooting

If you are facing issues during deployment, please refer to the guide on [troubleshooting deployment errors](/help-and-support/troubleshooting-guide/deployment-errors). If you continue to face issues, contact the support team using the chat widget at the bottom right of this page.

## Further reading

- [Container logs](/getting-started/setup/instance-management/how-to-get-container-logs)
- [Instance Management](/getting-started/setup/instance-management)
