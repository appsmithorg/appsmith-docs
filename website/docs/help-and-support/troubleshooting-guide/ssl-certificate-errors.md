# SSL, Certificate, and Reverse Proxy Errors

This page shows how to resolve common SSL, certificate, and reverse proxy errors on self-hosted Appsmith.

### Custom CA or self-signed certificate not trusted

<Message
 messageContainerClassName='error'
messageContent='PKIX path building failed: sun.security.provider.certpath.SunCertPathBuilderException: unable to find valid certification path to requested target'></Message>

#### Cause

Appsmith does not trust the certificate presented by an internal endpoint or by a firewall/proxy that performs SSL decryption. This happens when the signing CA root certificate is not in Appsmith's trust store.

#### Solution

- Add the custom CA root certificate to the `ca-certs` folder. For Docker, place it in `stacks/ca-certs`; for Kubernetes add it via `values.yaml`. If the file has a `.pem` extension, rename it to `.crt`. See [Custom CA Root Certificate](/getting-started/setup/instance-configuration/custom-domain/custom-ca-root-certificate).
- Add the correct **issuing CA** certificate, not the server's own self-signed certificate. You can extract the chain with `openssl s_client -connect <host>:443 -showcerts` and identify the issuing CA cert.
- Restart Appsmith after adding the certificate so it applies the change on startup.
- Verify the bundle works before relying on it: `curl --cacert <bundle>.crt https://<your-appsmith-host>`.

### Self-signed certificate on a datasource or API action

#### Cause

A self-signed certificate used by a specific datasource or API endpoint is not a CA-signed certificate, so adding it to the `ca-certs` folder is not the intended fix and will not work.

#### Solution

- For a **self-signed** certificate, attach the certificate directly to the API action in the UI rather than placing it in `ca-certs`.
- Only use the `ca-certs` folder when the certificate is signed by a custom Certificate Authority (CA). In that case add the custom CA's certificate, not the leaf/self-signed certificate.

### External MongoDB TLS connection fails

<Message
 messageContainerClassName='error'
messageContent='Client network socket disconnected before secure TLS connection was established'></Message>

#### Cause

Appsmith cannot complete the TLS handshake with an external MongoDB. This typically occurs when the replica set is not initialized or the connecting user lacks the required roles, rather than a certificate problem in Appsmith itself.

#### Solution

- Run `rs.initiate()` as an admin user inside your MongoDB cluster to start the replica set configuration, which Appsmith requires for an external MongoDB.
- Ensure the user Appsmith connects with has the `readWrite` and `clusterMonitor` roles assigned.
- Test connectivity from a standalone instance in the same network to confirm MongoDB is reachable.

### Certificate renewal not reflected when SSL terminates at a load balancer

#### Cause

When SSL termination happens at a load balancer, the application servers communicate over plain HTTP and never see or validate the external SSL certificate. Updating `ca-certs` on the application servers therefore has no effect on the public certificate.

#### Solution

- If SSL terminates at the load balancer, update the certificate there; there is no need to update `ca-certs` on the application servers.
- Only update `ca-certs` on the application servers if Appsmith makes outbound HTTPS calls to other services, if load-balancer-to-application traffic is encrypted, or if mutual TLS (mTLS) is in use.

### Custom domain causes redirect loops or 401s behind a reverse proxy

#### Cause

When NGINX, ingress-nginx, or another load balancer sits in front of the Appsmith container and also handles SSL termination, setting `APPSMITH_CUSTOM_DOMAIN` conflicts with the proxy and causes bad redirects, infinite redirect loops, 401s, or NULL domain errors.

#### Solution

- If you have NGINX, ingress-nginx, or any load balancer in front of the Appsmith container, remove the [`APPSMITH_CUSTOM_DOMAIN`](/getting-started/setup/environment-variables) environment variable from your `docker.env` / values to avoid bad redirects and 401s.
- Avoid using the `latest` image tag; pin a concrete version so multiple Appsmith versions don't run in the cluster simultaneously.

### Setting up a custom domain with SSL

#### Cause

A custom domain with HTTPS is not reachable because prerequisites such as open ports are not met, or because custom domains are being attempted on Appsmith Cloud (not supported).

#### Solution

- Custom domains and SSL are only available on **self-hosted** Appsmith; this cannot be configured on Appsmith Cloud.
- Ensure ports **80 and 443** are open and accessible (or your custom ports if used). See [Custom Domain and SSL](/getting-started/setup/instance-configuration/custom-domain).
- Appsmith can provision a certificate automatically through Let's Encrypt when the domain is set; access the instance via HTTPS on port 443 after restart.

### Adding the HTTP Strict-Transport-Security (HSTS) header

#### Cause

Appsmith does not provide a built-in option to add the `Strict-Transport-Security` (HSTS) header to all responses.

#### Solution

- Adding the HSTS header to all Appsmith responses is not available directly in Appsmith. Configure it on your gateway/reverse proxy instead (for example, a header-setting policy on the API gateway in front of Appsmith).
