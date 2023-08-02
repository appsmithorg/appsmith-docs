---
sidebar_position: 10
---
# HTTP/HTTPS Proxy

Appsmith supports running behind a forward proxy. This is usually useful when Appsmith is run on a server that's behind a corporate firewall and needs to access the internet through a proxy.

## How to configure a proxy

As is standard for configuring a proxy for most applications, Appsmith respects any `HTTP_PROXY` and/or `HTTPS_PROXY` env variables that are set. Fox extra compatibility, Appsmith also respects the lower-case versions, `http_proxy` and `https_proxy`.

For example, adding the following to the `stacks/configuration/docker.env`:

```sh
HTTP_PROXY=http://1.2.3.4:8080
HTTPS_PROXY=http://1.2.3.4:8080
```

Saving and restarting Appsmith with this, will make all outgoing requests from the Appsmith server, go through this proxy.

## Trust custom CA for HTTPS proxy

Using an `HTTPS_PROXY` will usually also need you to add a custom CA, as a trusted CA to Appsmith. This is described in detail [here](/getting-started/setup/instance-configuration/custom-domain/custom-ca-root-certificate).
