---
description: This page provides steps to configure HTTP/HTTPS proxy on your self-hosted instance.
---

# Configure HTTP/HTTPS Proxy

When Appsmith runs behind a corporate firewall or a Virtual Private Network (VPN), it may require proxy settings to access the internet and communicate with [cs.appsmith.com](http://cs.appsmith.com). This page shows how to set up HTTP/HTTPS proxy on your self-hosted Appsmith instance so that you can access Appsmith using a proxy.

## Prerequisites

- Self-hosted Appsmith instance. If not installed yet, see the [installation guides](/getting-started/setup/installation-guides) for installing Appsmith.

## Verify connectivity

Before you begin proxy configuration, verify if your Appsmith instance can connect to [cs.appsmith.com](http://cs.appsmith.com/) for internal communication. 

1. Connect to the `appsmith` container as root:

    ```bash
    docker exec -it -u root appsmith bash
    ```

2. Test connection with:

    ```bash
    curl -i -v cs.appsmith.com
    ```

    The command shows output as below:

    ```bash
    * Trying <IP_Address>...
    * TCP_NODELAY set
    ```
    If you see below connection errors after the above output, it shows that a connection is not established and a proxy set up may be required.

    - `connect to <IP address> port 80 failed: Connection timed out`
    - `curl: (7) Failed to connect to <IP address> port 80: Network unreachable`

## Set up proxy

Follow below steps to configure proxy by setting environment variables:

1. Open the Appsmith installation configuration file:
    - Docker: `docker.env`
    - Kubernetes: `values.yaml`

2. Use any one of the below pair of environment variables to set proxy:
    - `HTTP_PROXY` and `HTTPS_PROXY` (uppercase)
    - `http_proxy` and `https_proxy` (lowercase)

    For example, set up proxy using uppercase environment variables:

    ```bash
    HTTP_PROXY=http://1.2.3.4:8080
    HTTPS_PROXY=http://1.2.3.4:8080
    ```

3. Save the file and restart Appsmith instance.

4. Confirm proxy configuration with:

    ```bash
    curl -i -v cs.appsmith.com
    ```

    The command shows below output when connection is successfully established:

    ```bash
    Trying <IP_ADDRESS>:8080...
    * TCP_NODELAY set
    * Connected to proxy (<IP_ADDRESS>) port 8080 (#0)
    ```

5. When using an HTTPS proxy, you may want to add a trusted custom Certificate Authority to Appsmith. For more information, see [Custom Root CA Certificate](/getting-started/setup/instance-configuration/custom-domain/custom-ca-root-certificate) guide.

## Troubleshooting

You may face some common issues while configuring the proxy. Troubleshoot by:

- Verifying the proxy address and port.
- Confirming that you've set up correct environment variables.
- Reviewing the network or firewall settings.

If you continue to face issues, contact the support team using the chat widget at the bottom right of this page.


