# Workflow Errors

Appsmith workflows allow you to build backend logic visually. If your workflow isn't working as expected, this guide will help you troubleshoot and resolve common setup or connectivity issues.


## Workflow Setup Requirements

If you’re encountering issues with workflows not running or triggering, start by reviewing the following setup checklist. These are required for workflows to function correctly in Appsmith.

1. **Verify PostgreSQL is configured and accessible**:

<dd>

Appsmith requires a PostgreSQL database for all setups.

- Supported versions: 13 to 16
- Version 17 is not supported

See [how to configure PostgreSQL](https://docs.appsmith.com/getting-started/setup/instance-configuration/external-postgresql-rds).

</dd>


2. **Use external PostgreSQL for ECS or Kubernetes**:

<dd>

If you’re deploying Appsmith on ECS or Kubernetes, you must use an external PostgreSQL instance (e.g., AWS RDS). The embedded PostgreSQL database is not suitable for production or containerized environments.

</dd>


3. **Confirm Temporal and RTS services are running**:

<dd>

Workflows depend on the following services:

- Temporal for workflow execution

- RTS (Real-Time Service) for triggering and communication

- Make sure both services are running and healthy:

- For Docker: Run `docker ps` to confirm containers are up

- For Kubernetes: Use `kubectl get pods` to check pod status

[See required services for self-hosted Appsmith](/getting-started/setup/instance-configuration).

</dd>

## Common Workflow Errors

If the required services are set up correctly and you're still experiencing issues, review the following common workflow errors and their resolutions.

### Workflow not triggering


<Message  
messageContainerClassName="error"  
messageContent="Workflow failed to start. Temporal client is not connected."/>


This error occurs when the Temporal service is unavailable or not connected to the Appsmith instance.

**Resolution:**

- Ensure the Temporal service is running.
  - For Docker: Run `docker ps` and check that the `temporal` container is listed.
  - For Kubernetes: Run `kubectl get pods` and verify the Temporal pod is running and healthy.
- Check Temporal logs for startup or connectivity issues.
- Restart the Temporal service if needed.

---

### Real-time service not responding


<Message  
messageContainerClassName="error"  
messageContent="Failed to start workflow. RTS service is not responding."/>


This error indicates that the RTS (Real-Time Service) is not running or not communicating with the Appsmith server.

**Resolution:**

- Confirm that the RTS service is running.
  - For Docker: Run `docker ps` and look for the `rts` container.
  - For Kubernetes: Run `kubectl get pods` and ensure the RTS pod is running.
- Check RTS logs for connection errors.
- Ensure network access between RTS, Appsmith server, and Temporal.

### Payload too large


<Message  
messageContainerClassName="error"  
messageContent="Workflow execution failed: Payload size exceeds allowed limit."/>


This error is triggered when the data passed into a workflow exceeds the supported payload size.

**Resolution:**

- Avoid sending large data blobs (e.g., files, large arrays) directly into workflows.
- Instead, store large data in external services like S3 or a database, and pass only a reference (e.g., URL or ID) into the workflow.


### Temporal migration failure (rare)


<Message  
messageContainerClassName="error"  
messageContent="Temporal schema migration failed. See logs for details."/>


This is an uncommon error that may occur during upgrades if the Temporal database schema is not updated properly.

**Resolution:**

- Review the Temporal migration logs to identify the issue.
- Follow the correct upgrade steps for Temporal.
- If the issue persists, reset the Temporal schema in a non-production environment to test.

If you've verified the setup and reviewed the common errors but are still facing issues, please [get in touch with Appsmith Support](/product/support) with relevant logs and configuration details.








