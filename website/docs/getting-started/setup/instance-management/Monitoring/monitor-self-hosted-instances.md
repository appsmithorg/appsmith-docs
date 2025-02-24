
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Monitoring Installations

This page shows you how to monitor a self-hosted Appsmith installation, which allows you to track system health, performance, and resource usage. By setting up monitoring, you can detect potential issues early, ensure smooth operation, and maintain high availability for your Appsmith instance.


## Prerequisites

Before you begin, ensure you have the following:

- Access to your installation’s endpoints (e.g., health check and API endpoints).
- A telemetry or monitoring system configured to receive data from your Appsmith instance (e.g., Datadog, Prometheus, New Relic, or Grafana).


## Monitor key system metrics

Monitoring key system metrics helps ensure the stability, performance, and reliability of your application. You can integrate the following API endpoints into monitoring tools to automate tracking and alerts.

### Check System Health

The Health Check API verifies whether your Appsmith instance is running and accessible. Regular monitoring helps detect downtime early and ensures system availability.


1. Run the following Health Check API to verify your instance’s status. Replace `your-appsmith-installation.com` with your actual instance domain.

<dd>

```bash
https://your-appsmith-installation.com/api/v1/health  
```

</dd>

2. Verify the response. A functional instance returns a `200 OK` status with the following response:

<dd>

```js
{
  "responseMeta": {
    "status": 200,
    "success": true
  },
  "data": "All systems are up",
  "errorDisplay": ""
}  
```

The Health Check API should respond in less than 1 second under normal conditions. If the response time exceeds 2 seconds, it may indicate high server load or performance issues.

If the response status is `500`, the server may be down or misconfigured. A `503` status indicates the system may be overloaded or restarting. A `401` status suggests authentication is required.

</dd>


### Monitor Subsystems

Appsmith uses [Supervisor](https://supervisord.org/) to manage and monitor the health of various subsystems, including the Appsmith server, Caddy, and MongoDB. If a subsystem becomes unresponsive, Supervisor attempts to restart it automatically. If the [Health Check API](#check-system-health) fails, you can use Supervisor to diagnose and manage subsystems.


You can monitor and manage processes using either the Web Interface or the Command Line Interface (CLI).


<Tabs queryString="current-interface-type">
  <TabItem label="Web Interface" value="web">

    The Supervisor Web Interface provides an easy-to-use, graphical way to monitor and manage Appsmith processes. Follow the steps below to configure and access the web interface.

    1. Go to the `docker.env` file located in the `stacks/configuration` folder.
    2. Set the following environment variables to configure the Supervisor credentials:
        ```bash
        APPSMITH_SUPERVISOR_USER=<SUPERVISOR-USER>
        APPSMITH_SUPERVISOR_PASSWORD=<SUPERVISOR-PASSWORD>
        ```
    3. Once the credentials are set, you can access the Supervisor web interface at `http://[your-domain]/supervisor`. For example, if your Appsmith instance is available at `http://localhost`, the Supervisor web interface can be accessed at `http://localhost/supervisor`.

        <ZoomImage src="/img/appsmith_supervisord_ui.png" alt="All managed processes listed in the web interface" caption="All managed processes listed in the web interface" />

  </TabItem>
  <TabItem label="Command Line Interface" value="commandline">

    The Supervisor Command Line Interface (CLI) provides a way to interact with and manage processes directly from the terminal. Follow the steps below to monitor the processes using the CLI.

    1. To check the status of all running processes, use the following command:
        ```bash
        docker-compose exec appsmith supervisorctl status
        ```

    2. To view the last few lines of the `stderr` output of a specific process, use:
        ```bash
        docker-compose exec appsmith supervisorctl tail <process_name> stderr
        ```

    For a complete list of `supervisorctl` commands, refer to the [Supervisor official documentation](http://supervisord.org/running.html#supervisorctl-actions).
  </TabItem>
</Tabs>



###  Application Performance Monitoring

Application Performance Monitoring (APM) helps track API response times to ensure smooth application performance. It allows you to detect slow responses and take action to optimize performance.

1. Run the following API request to check performance:

<dd>

```bash
https://your-appsmith-installation.com/api/v1/consolidated-api/view
```

Replace `your-appsmith-installation.com` with your instance domain.



</dd>

2. Verify the response. A successful request returns status: `200`.

<dd>

Along with the status, you can see a list of key response elements, which help you monitor system health, track feature availability, and debug potential issues.

- **Status Code:** `200` (success), `500` (server error), `503` (service unavailable).
- **Expected Latency:** Less than 300ms

</dd>

3. If you want to continuously monitor API performance, you can use this same API endpoint in automated monitoring scripts or integrate it with external monitoring tools (e.g., Datadog, New Relic, Prometheus).

<dd>

Using monitoring tools helps track API performance, detect slow response times, and identify failures in real-time. They also provide historical trends, automated alerts, and reports to help maintain system stability.

</dd>

### Monitor Resource Utilization and SLO Compliance

Monitoring resource usage ensures system stability and helps maintain performance within defined thresholds. Tracking CPU and memory usage allows you to prevent bottlenecks and meet Service Level Objectives (SLOs).


1. Set up monitoring in your preferred tool. Use built-in cloud monitoring (e.g., [AWS CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/GettingSetup.html), G[CP Monitoring](https://cloud.google.com/monitoring?hl=en)) or third-party tools (e.g., [Datadog](https://www.datadoghq.com/blog/how-to-monitor-docker-resource-metrics/), [New Relic](https://newrelic.com/blog/how-to-relic/docker-kubernetes-monitoring), [Prometheus](https://grafana.com/docs/alloy/latest/reference/components/prometheus/prometheus.exporter.cadvisor/)).

2. Add CPU, memory usage, and network traffic metrics to your monitoring dashboard to track system health and detect anomalies.

3. Configure alerts for resource thresholds.

<dd> 

- Trigger alerts if CPU usage exceeds **80%**. 
- Set notifications when memory usage goes beyond **80%**. 
- Monitor uptime to ensure compliance with the **99.5% SLO target**. 

</dd>


4. Analyze trends and optimize resource usage by identifying recurring patterns, optimizing queries, and scaling resources to maintain performance.





### Check Feature Flags

If you want to check which feature flags are enabled for your instance, you can retrieve the list using the feature flags API. This lets you see available features, but you cannot enable or disable them manually.

1. Run the API request to retrieve feature flags:

<dd>

```bash
http://your-appsmith-installation.com/api/v1/users/features
```

Replace `your-appsmith-installation.com` with your instance domain.


</dd>

2. Verify and check the response. The API returns a list of feature flags along with their status, indicating whether each feature is enabled or disabled.

<dd>

</dd>