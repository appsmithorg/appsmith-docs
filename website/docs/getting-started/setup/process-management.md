---
description: This page explains how process management is handled to ensure reliability and stability.
---

# Process Management

Appsmith uses [Supervisor](http://supervisord.org/), a lightweight process manager, to manage its internal processes. Supervisor ensures that essential services are started, monitored, and restarted automatically in case of failures. This page explains how Supervisor manages these processes and its role in ensuring system reliability.

## Managing services

When Appsmith starts, a container’s entry-point script initializes the environment and sets up Supervisor to manage all required services. Specifically, the entry-point script:
- Generates **configuration files** for each process managed by Supervisor.
- Sets up SSL certificates and installs custom Certificate Authority (CA) roots if required.
- Launches the Supervisor daemon to start and monitor services.

Supervisor ensures seamless operation of Appsmith by:
- Continuously monitoring processes and automatically restarting them in case of failures, reducing downtime.
- Aggregating logs from all services, simplifying debugging and system maintenance.

The processes managed by Supervisor include:
- **Backend server**: Handles core business logic, integrations, and user interactions.
- **RTS (Real-Time Server)**: Manages real-time updates to ensure a responsive user experience.
- **Caddy server**: Functions as a web server and reverse proxy for secure communication and efficient routing.
- Any other services, such as **MongoDB** or **Redis**, if they are not managed externally.

Users can manage services using Supervisor’s command-line tool, `supervisorctl`. This tool allows individual control of processes, such as:
- Restarting services (`supervisorctl restart redis`) when needed.
- Applying changes via the **Save and Restart** button in the **Admin Settings** UI, which internally executes `supervisorctl` commands to restart backend processes.

For more information about how to monitor and troubleshoot processes managed by Supervisor, see [Monitoring processes with Supervisor](/getting-started/setup/instance-management/supervisor).

## See also

* [Deployment Architecture](/getting-started/setup/deployment-architecture): Learn about Appsmith's deployment architecture.
* [Installation Guides](/getting-started/setup/installation-guides): Learn how to install Appsmith on different platforms.
