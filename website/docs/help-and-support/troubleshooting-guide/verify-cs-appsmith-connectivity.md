---
description: Verify that your self-hosted Appsmith instance can reach cs.appsmith.com for license validation, updates, and other control-plane services.
---

# Verify connectivity to cs.appsmith.com

Self-hosted Appsmith instances must reach `cs.appsmith.com` over outbound HTTPS for license validation, automatic updates, and other control-plane services managed by Appsmith. If your instance is behind a firewall, proxy, or restricted egress policy, use the steps below to confirm connectivity from inside the Appsmith runtime.

:::info Domain whitelisting
Whitelist the domain `cs.appsmith.com` for outbound HTTPS. Do not use IP-based whitelisting for this domain. See [Security](/product/security) and [Air-gapped Edition](/getting-started/setup/installation-guides/air-gapped).
:::

## Docker

1. Connect to the Appsmith container as root:

    ```bash
    docker exec -it -u root appsmith bash
    ```

2. Test connectivity to the Appsmith control server:

    ```bash
    curl -i -v https://cs.appsmith.com/api/v1/health
    ```

## Kubernetes

1. Connect to an Appsmith pod:

    ```bash
    kubectl exec -it -n <namespace> <appsmith-pod-name> -- bash
    ```

    Replace `<namespace>` with your Appsmith namespace and `<appsmith-pod-name>` with the name of a running Appsmith pod. To list pods:

    ```bash
    kubectl get pods -n <namespace>
    ```

2. Test connectivity to the Appsmith control server:

    ```bash
    curl -i -v https://cs.appsmith.com/api/v1/health
    ```

## Interpret the results

A successful connection returns an HTTP **200** response from the health endpoint. If the command times out, fails to resolve the hostname, or returns connection errors, your instance cannot reach `cs.appsmith.com`. Common causes include:

- Outbound HTTPS blocked by a firewall or security group
- Missing proxy configuration in a corporate network. See [Configure HTTP/HTTPS Proxy](/getting-started/setup/instance-configuration/http-proxy).
- DNS resolution failures inside the container or pod

If connectivity fails and you are not using the dedicated air-gapped edition, resolve network access before expecting license validation or update features to work. For license-specific errors, see [License and activation errors](/help-and-support/troubleshooting-guide/license-and-activation-errors).
