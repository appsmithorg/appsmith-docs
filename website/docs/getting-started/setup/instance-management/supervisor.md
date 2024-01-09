---
sidebar_position: 1
---
# Monitor Processes

The container runs multiple processes, including the Appsmith server, Caddy, MongoDB, etc., inside a single Docker container. These processes are started, managed, and monitored by [Supervisor](http://supervisord.org/) for your self-hosted instance.

Supervisor provides:
* [Web Interface](#web-interface)
* [Command line Interface](#command-line-interface) 

## Web interface

To set up the credentials for accessing the web interface, update the environment variables:
1. Go to the `docker.env` file available in the `stacks/configuration` folder.
2. Set the values for the below variables:

```bash
APPSMITH_SUPERVISOR_USER=<SUPERVISOR-USER>
APPSMITH_SUPERVISOR_PASSWORD=<SUPERVISOR-PASSWORD>
```

3. Access the web interface of Supervisord to manage the Appsmith server, Caddy, MongoDB, and other components at http://[my_domain]/supervisor. For example, if Appsmith is accessible via `http://localhost`, you can access the Supervisor web interface at `http://localhost/supervisor`.

<ZoomImage src="/img/appsmith_supervisord_ui.png" alt="The web interface listing of all the managed processes" caption="The web interface listing of all the managed processes" />

## Command line interface
The command line interface also helps in managing the Appsmith server, Caddy, MongoDB, and more. 

For example:
* Check the status of all running processes with:

```bash
docker-compose exec appsmith supervisorctl status
```

* View the last few lines of the `stderr` output of a specific process with: 

```bash
docker-compose exec appsmith supervisorctl tail <process_name> stderr
```

Refer to the Supervisor official documentation to learn more about the [supervisorctl actions](http://supervisord.org/running.html#supervisorctl-actions).
