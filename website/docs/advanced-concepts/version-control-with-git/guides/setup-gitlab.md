# Connect to GitLab

This guide shows how to connect your Appsmith application to a remote GitLab repository.

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/E3R3wF3mFywz7HvmnMsa?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

1. Open the Appsmith app you want to connect to Git and click the **Connect Git** button on the left of the bottom bar.

2. Select **Gitlab** as the service provider. 

<dd>
:::info
Version Control works with any Git hosting service that supports the SSH protocol and deploy keys. HTTPS Git connections are not currently supported in Appsmith.
:::

</dd>

3. Create a new Git repository or open an existing empty repository. The connection may fail if the repository is not empty. See [How to create a new repository / project](https://docs.gitlab.com/ee/user/project/index.html)


4. After setting up an empty repository, navigate to the repository's landing page, click on the Code button, and copy the **SSH** URL.

5. Paste the URL in the **Generate SSH Key** section on Appsmith.

6. Click the **Generate SSH Keys** button, and unique `ECDSA 256` and `RSA 4096` keys are displayed. Choose the appropriate key based on your specific security requirements and system constraints.

7. Copy one of the keys, then navigate to your **Repository settings**. Proceed to **Deploy keys**, click on **Add deploy keys**, paste the copied key, and provide a meaningful title for future reference.

8. Check the **Allow write access** option and then add the key.

9. In Appsmith, click the **Connect Git** button.

With these steps, you have successfully connected to Git.

:::caution
A user needs to have **Create** permission for application resources on the workspace to be able to connect or disconnect an app to Git. This permission can be shared through Workspace Administrator and Developer roles or through custom roles using granular access control. For more information, see [Default Roles](/advanced-concepts/invite-users#default-roles-for-workspace) and [Granular Access Control](/advanced-concepts/granular-access-control/roles#application-resources).
:::


## See also

- [Git Reference](/advanced-concepts/version-control-with-git/reference/git-settings)
- [Multi environments using Git](/advanced-concepts/version-control-with-git/environments-with-git)
- [Configure CI/CD Using GitLab CI/CD](/advanced-concepts/version-control-with-git/cd-with-gitlab)