---
description: This page provides steps to configure HTTP/HTTPS proxy on your self-hosted instance.
---

# Configure HTTP/HTTPS Proxy

Appsmith offers support for running behind a forward proxy, which is beneficial when deploying Appsmith on a server behind a corporate firewall, and allows internet access through a proxy server. This page provides instructions for configuring HTTP/HTTPS proxy server on your self-hosted Appsmith instance.

## Prerequisites

- A self-hosted Appsmith instance. See the [installation guides](/getting-started/setup/installation-guides) to set up your Appsmith instance.

## Add Proxy configuration on Appsmith

Follow these steps to configure HTTP/HTTPS proxy for your self-hosted instance:

1. Go to your Appsmith instance configuration file, such as the `docker.env` file for Docker or the `values.yaml` file for Kubernetes.
2. Use any one of the below pair of environment variables to set proxy:

 a. `HTTP_PROXY` and/or `HTTPS_PROXY` 

 b. `http_proxy` and/or `https_proxy`

For example, add the chosen environment variables as shown below:
 ```bash
 HTTP_PROXY=http://1.2.3.4:8080
 HTTPS_PROXY=http://1.2.3.4:8080
 ```
3. Save the changes and restart the Appsmith instance.
4. When using an HTTPS proxy, you may want to add a trusted custom Certificate Authority (CA) to Appsmith. See [Custom Root CA Certificate](/getting-started/setup/instance-configuration/custom-domain/custom-ca-root-certificate) to set up a certificate authority.

## Troubleshooting

If you face issues, contact the support team using the chat widget at the bottom right of this page.
