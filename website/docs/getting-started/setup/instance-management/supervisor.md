---
sidebar_position: 1
---
# Supervisor

Appsmith integrates with the `supervisorctl` command line utility. It handles the management of the Appsmith server, Nginx, MongoDB, and more. The page gives you steps to manage your Appsmith instance using the supervisor interface.

[Supervisor](http://supervisord.org/) also provides a web interface accessible on `http://localhost/supervisor`.

## Web interface
<figure>
  <img src="https://raw.githubusercontent.com/appsmithorg/appsmith/release/deploy/docker/images/appsmith\_supervisord\_ui.png" style= {{width:"700px", height:"auto"}} alt="The web interface listing all the managed processes"/>
  <figcaption align = "center"><i>The web interface listing all the managed processes</i></figcaption>
</figure>

To set up the credentials for accessing the web interface, update the environment variables:
1. Go to the `docker.env` file available in the `stacks/configuration` folder.
2. Set the values for the below variables:
```
APPSMITH_SUPERVISOR_USER=<SUPERVISOR-USER>
APPSMITH_SUPERVISOR_PASSWORD=<SUPERVISOR-PASSWORD>
3. Use the interface to manage the Appsmith server, Nginx, MongoDB, and more.

## Command line interface
The command line interface also helps in managing the Appsmith server, Nginx, MongoDB, and more. 

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
