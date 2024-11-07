# Custom CA Root Certificate

You can install custom CA root certificates in your Appsmith container. It is useful when:


1. You interact with internal endpoints that use private [SSL certificates](./#custom-ssl-certificate) via Appsmith without disabling SSL verification.
2. If you have your Appsmith instance behind a firewall or a proxy, that requires SSL decryption.

## Set up using custom CA root folder

To set up custom CA certificates using the folder method, follow these steps:

1. Create a `ca-certs` folder in your `stacks` folder.

2. Save all your CA root certificates in the `ca-certs` folder. If your `cert` file has a `.pem` extension, rename it to `.crt` before adding it to the s`tacks/ca-certs` folder

3. Restart Appsmith.


Appsmith checks the `ca-certs` folder for CA root certificates and applies them on startup.

:::caution
If you **remove** a **certificate** from the `ca-certs` folder, it's also **removed** from the **trust store** and **won't** be **trusted** anymore.
:::

## Set Up Using values.yaml

For Appsmith installations on Kubernetes, you can add custom CA certificates by updating the `values.yaml` file. Follow these steps:

1. Open `values.yaml`.

2. Locate the `customCAcert` section.

3. Add your certificates by pasting their content as shown:

<dd>

```yaml
customCAcert:
  cert1: |
    (Paste the certificate content here)
  cert2: |
    (Paste additional certificate content here)
```

</dd>

4. Save the file and run the Helm upgrade command to apply your changes:

<dd>

```bash
helm upgrade -i appsmith-ee appsmith-ee/appsmith -n appsmith-ee -f values.yaml
```

These steps add your custom certificates to the Appsmith trust store.


</dd>