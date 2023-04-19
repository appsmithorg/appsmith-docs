---
sidebar_position: 1
---
# Supervisor

The container runs multiple processes, including the Appsmith server, Nginx, MongoDB, etc., inside a single Docker container. These processes are started and managed by [Supervisor](http://supervisord.org).

Supervisor comes with a web interface for managing the various processes, available at [http://localhost/supervisor](http://localhost/supervisor), as well as a command-line interface towards the same goal.

:::info
The credentials for supervisor access are defined by the environment variables `APPSMITH_SUPERVISOR_USER` and `APPSMITH_SUPERVISOR_PASSWORD` in the `stacks/configuration/docker.env` file.
:::

Here's a screenshot of the web interface listing all the processes managed:

![](https://raw.githubusercontent.com/appsmithorg/appsmith/release/deploy/docker/images/appsmith\_supervisord\_ui.png)

The command-line interface can also be used to perform operations like restarting the Appsmith server, restarting Nginx, etc. For example, the following command (run in the installation folder) can be used to get the status of all running processes:

```bash
docker-compose exec appsmith supervisorctl status
```

Or to view the last few lines of the `stderr` output of one of the processes:

```bash
docker-compose exec appsmith supervisorctl tail backend stderr
```

To learn more, please refer to [Supervisor's documentation](http://supervisord.org/running.html#supervisorctl-actions) on what actions are available to be performed by the command-line interface.
