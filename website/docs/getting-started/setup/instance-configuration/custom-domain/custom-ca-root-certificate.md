# Custom CA Root Certificate

You can install custom CA root certificates in your Appsmith container. It is useful when:


1. You interact with internal endpoints that use private [SSL certificates](./#custom-ssl-certificate) via Appsmith without disabling SSL verification.
2. If you have your Appsmith instance behind a firewall or a proxy, that requires SSL decryption.

## Setup custom CA root folder

You can easily do this:

* By creating a `ca-certs` folder in your `stacks` folder
* Saving all the CA root certificates in the `ca-certs` folder
* Restart Appsmith

:::info
If your cert file has a `.pem` extension, rename it to `.crt`. You should add it to the `stacks/ca-certs` folder so that it can be picked up.
:::

Appsmith checks the `ca-certs` folder for CA root certificates and applies them on startup.

:::info
If you **remove** a **certificate** from the `ca-certs` folder, it's also **removed** from the **trust store** and **won't** be **trusted** anymore.
:::

## values.yaml Configuration

If you're using Kubernetes, you may need to update the `values.yaml` configuration file to ensure the certificate is included correctly. Follow these steps to add custom CA certificates in `values.yaml`:

1. Open `values.yaml`.

2. Locate the `customCAcert` section.

3. Add your certificates by pasting their content as shown:

<dd>

```js
customCAcert:
  cert1: |
    (Paste the certificate content here)
  cert2: |
    (Paste additional certificate content here)
```

</dd>

4. Save the file and run the Helm upgrade command to apply your changes:

<dd>

```js
helm upgrade -i appsmith-ee appsmith-ee/appsmith -n appsmith-ee -f values.yaml
```

Certificates defined in `values.yaml` provide the same trusted CA functionality as those in the ca-certs folder for non-Helm setups.



</dd>