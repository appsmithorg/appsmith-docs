# Bitbucket

This guide shows how to connect your Appsmith application to a remote Bitbucket repository.

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/1G22udy8fLxh2Yx6Ysps?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>


1. Open the Appsmith app you want to connect to Git and click the **Connect Git** button on the left of the bottom bar.

2. Select **Bitbucket** as the service provider. 

<dd>
:::info
Version Control works with any Git hosting service that supports **SSH protocol** and **deploy keys**. HTTPS Git connections are currently not supported on Appsmith.
:::

</dd>

3. Create a new Git repository if you don't already have one. The connection may fail if the repository is not empty. See [How to create a new repository / project](https://support.atlassian.com/bitbucket-cloud/docs/create-a-git-repository/)


4. After setting up an empty repository, navigate to the repository's landing page, click on the **Clone** button, select **SSH** and copy the **SSH** URL.

5. Paste the SSH URL into the **Generate SSH Key** section in Appsmith, remove the `git clone` from the URL. 

6. Click the **Generate SSH Keys** button, and unique `ECDSA 256` and `RSA 4096` keys are displayed. Choose the appropriate key based on your specific security requirements and system constraints.

7. Copy one of the keys, then navigate to your **Workspace settings**. Proceed to **SSH keys**, click on **Add SSH key**, paste the copied key, and provide a meaningful title for future reference.

8. In Appsmith, click the **Connect Git** button.

With these steps, you have successfully connected to Git.

:::caution
A user needs to have **Create** permission for application resources on the workspace to be able to connect or disconnect an app to Git. This permission can be shared through Workspace Administrator and Developer roles or through custom roles using granular access control. For more information, see [Default Roles](/advanced-concepts/invite-users#default-roles-for-workspace) and [Granular Access Control](/advanced-concepts/granular-access-control/roles#application-resources).
:::

## Next steps

[Setup branches](/advanced-concepts/version-control-with-git/working-with-branches)

