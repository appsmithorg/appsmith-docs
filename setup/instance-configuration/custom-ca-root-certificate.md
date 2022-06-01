# Custom CA Root Certificate

You can install custom CA root certificates in your Appsmith container. This can be useful when:

1. You need to interact with internal endpoints that use private SSL certificates via Appsmith without disabling SSL verification.

2. If you have your Appsmith instance behind a firewall or a proxy, that requires SSL decrypion.

This can be easily done by creating a `ca-certs` folder in your `stacks` folder, and saving all the CA root certificates in this folder and restart Appsmith. On startup, Appsmith will check this folder for any CA root certificates and apply them.

Note that if you later remove a certificate from this folder, then it'll also be removed from the trust store and so won't be trusted anymore.

Also note that if your cert file has a `.pem` extension, please rename it to `.crt` when placed in the `stacks/ca-certs` folder, otherwise it **won't** be picked up.
