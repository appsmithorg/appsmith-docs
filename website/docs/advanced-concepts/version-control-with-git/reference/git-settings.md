# Git Settings

This page provides information on all Git-related settings available within Appsmith. These settings become available once you've connected your app to Git. You can access these settings by clicking on the settings icon located on the left side of the bottom bar.


<ZoomImage src="/img/git-settings.png" alt="" caption="" />


## General

These properties are customizable options accessible within the Git settings modal.





#### Git author

<dd>

This section allows you to modify the name and email associated with the author. You can choose to either use the default settings or disable the **Use Default Configuration** button and add a new name and email.

</dd>

#### Danger zone

<dd>

This section allows you to change important Git settings such as disabling auto-commit or disconnecting Git from Appsmith.

* **Disable Auto-Commit**: This action prevents automatic migrations from Appsmith, potentially resulting in uncommitted system changes after an Appsmith instance upgrade. This may require manual handling and could lead to discrepancies in Git versioning.
* **Disconnect Git**: This action permanently disconnects your Appsmith app from Git. Once disconnected, it is not possible to reconnect to the same repository. If you want to reconnect, you need to connect a new empty repository.





</dd>

## Branch

These settings are customizable options available for modifying branch-related settings.






<div className="tag-wrapper">


#### Default branch 

<Tags
  tags={[
    {
      name: "Enterprise",
      link: "https://www.appsmith.com/pricing",
      additionalClass: "enterprise",
    }
  ]}
/>

</div>

<dd>

This property allows you to modify the default branch, which determines the base branch of your app. If there is no branch tag in the App URL, users are directed to the app associated with this branch.

You can choose a different default branch for each instance, while the default branch on Git remains unchanged until modified in the Git provider settings.

*Example:* You can set the `master` branch as default for the production instance and the `staging` branch as default for the staging instance. Meanwhile, the default branch on Git remains unchanged, usually set as `master` by default.

</dd>



<div className="tag-wrapper">


#### Branch protection

<Tags
  tags={[
    {
      name: "Enterprise",
      link: "https://www.appsmith.com/pricing",
      additionalClass: "enterprise",
    }
  ]}
/>

</div>

<dd>


This property allows you to set multiple branches as protected, meaning that changes to the app are not allowed within those branches. To make changes to these branches, you need to raise a PR and merge manually from the Git provider.


The default branch is automatically set as the protected branch. You have the option to exclude the default branch from branch protection if needed. 

:::info
By default, Appsmith enables the [protected branch](#change-protected-branch) feature for the default (`master/main`) branch. This means that direct edits to this branch are restricted. To make changes, you must create a new branch, implement the changes, and then merge them into the default branch via PR.
:::



</dd>




<div className="tag-wrapper">


## Continuous delivery


<Tags
  tags={[
    {
      name: "Enterprise",
      link: "https://www.appsmith.com/pricing",
      additionalClass: "enterprise",
    }
  ]}
/>

</div>

This section provides configuration for CI/CD, enabling automatic updates to the selected branch, eliminating the need for manual pulling of changes after each update.




<dd>

* **CURL command**: The provided CURL command is specifically intended for configuring automatic updates within Appsmith's CI/CD setup. It triggers a POST request to the specified endpoint, initiating the deployment process for the designated app and branch.

* **Bearer token**: A bearer token is a type of access token used for authentication. You can add this bearer token to your secrets or environment variables for secure access. Once generated, paste your bearer token immediately. You won't be able to do this later.


For more information see [Continuous Delivery (CI/CD) with Git](/advanced-concepts/version-control-with-git/cd-with-git)



</dd>