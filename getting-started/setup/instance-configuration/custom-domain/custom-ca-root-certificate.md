# Custom CA Root Certificate

You can install custom CA root certificates in your Appsmith container. It is useful when:

1. You interact with internal endpoints that use private [SSL certificates](./#custom-ssl-certificate) via Appsmith without disabling SSL verification.
2. If you have your Appsmith instance behind a firewall or a proxy, that requires SSL decryption.

### Setup Custom CA Root Folder

You can easily do this:

* By creating a `ca-certs` folder in your `stacks` folder
* Saving all the CA root certificates in the `ca-certs` folder&#x20;
* Restart Appsmith

{% hint style="info" %}
If your cert file has a `.pem` extension, rename it to `.crt.` You should add it in the `stacks/ca-certs` folder so that it will be picked up.
{% endhint %}

Appsmith will check the `ca-certs` folder for CA root certificates and apply them on startup.

{% hint style="info" %}
If you **remove** a **certificate** from the `ca-certs` folder, it'll also be **removed** from the **trust store** and **won't** be **trusted** anymore.&#x20;
{% endhint %}
