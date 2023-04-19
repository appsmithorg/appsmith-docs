# Custom CA Root Certificate

You can install custom CA root certificates in your Appsmith container. It is useful when:

1. You interact with internal endpoints that use private [SSL certificates](./#custom-ssl-certificate) via Appsmith without disabling SSL verification.
2. If you have your Appsmith instance behind a firewall or a proxy, that requires SSL decryption.

### Setup custom CA root folder

You can easily do this:

* By creating a `ca-certs` folder in your `stacks` folder
* Saving all the CA root certificates in the `ca-certs` folder
* Restart Appsmith

:::info
If your cert file has a `.pem` extension, rename it to `.crt.` You should add it to the `stacks/ca-certs` folder so that it can be picked up.
:::

Appsmith checks the `ca-certs` folder for CA root certificates and applies them on startup.

:::info
If you **remove** a **certificate** from the `ca-certs` folder, it's also **removed** from the **trust store** and **won't** be **trusted** anymore.
:::
