# Connect to Other Git Providers

This guide shows how to connect your Appsmith application to any Git provider, using an Azure repos as an example.


<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/NgHgIyVHeXMdIhS0o56b?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

1. Open the Appsmith app you want to connect to Git and click the **Connect Git** button on the left of the bottom bar.

2. Select **Others** as the service provider. 

<dd>
:::info
Version Control works with any Git hosting service that supports the SSH protocol and deploy keys. HTTPS Git connections are not currently supported in Appsmith.
:::

</dd>

3. Create a new Git repository or open an existing empty repository. The connection may fail if the repository is not empty.

4. After setting up an empty repository, navigate to the repository's landing page, and copy the **SSH** URL.

5. Paste the URL in the **Generate SSH Key** section on Appsmith.

6. Click the **Generate SSH Keys** button, and unique `ECDSA 256` and `RSA 4096` keys are displayed. Select the `RSA 4096` key when connecting to Azure Repos.

7. Copy the key, then navigate to **User Settings** from the top right corner and open **SSH public keys**.

8. Click **+ New key**, add the key name and paste the generated `RSA 4096` key in the Public Key Data input box.

9. In Appsmith, click the **Connect Git** button.

With these steps, you have successfully connected to Git.

:::caution
A user needs to have **Create** permission for application resources on the workspace to be able to connect or disconnect an app to Git. For more information, see [Create Permission](/advanced-concepts/granular-access-control/reference/permissions#create-permission).
:::


## See also

- [Git Reference](/advanced-concepts/version-control-with-git/reference/git-settings)
- [Multi environments using Git](/advanced-concepts/version-control-with-git/environments-with-git)