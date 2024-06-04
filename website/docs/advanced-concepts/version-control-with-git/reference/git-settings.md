# Git Settings

This page provides information on all Git-related settings available within Appsmith. These properties become available once you've connected your app to Git. You can access these settings by clicking on the gear icon located on the bottom bar.


<ZoomImage src="/img/git-settings.png" alt="" caption="" />


## General

These properties are customizable options accessible within the Git settings modal.





#### Git author

<dd>

This section allows you to modify the name and email associated with the author. You can choose to either use the default settings or disable the **Use Default Configuration** button and add a new name and email.

* **Name**: You can update the Git author's name, which changes how your identity is displayed in the commit history. 
* **Email**: You can specify a new email address. This change affects how your contributions are linked and identified across the repository's history.

</dd>

#### Danger zone

<dd>

This section allows you to change important Git settings such as disabling auto-commit or disconnecting Git from Appsmith.

**Disable Auto-Commit**: 

The Auto Commit feature in Appsmith automatically commits changes related to version upgrades. If you disable auto-commit, it prevents automatic migrations from Appsmith, potentially resulting in uncommitted system changes after an Appsmith instance upgrade. This may require manual handling and could lead to discrepancies in Git versioning.


- Whenever you upgrade your Appsmith instance, the Domain Specific Language (DSL) that describes your app's layout and interactions is updated. 

- Auto commit occurs to a non-protected branch when you open the branch in your app. If the app is not actively in use, the auto-commit will not take place.

- With the auto commit, only the changes related to Appsmith's DSL components are committed, not your specific app changes. 

<dd>

*Example:*

If you are working on a Table widget in your app. When Appsmith updates its version and auto commits, only the changes related to the updated Table widget—like new properties or methods—are committed. Your specific customizations, such as styling or behavior modifications, remain unaffected and aren't committed. You can find DSL-related changes in your Git repository inside the relevant page folder.




<dd>

 ```js
 "dsl": {
          "widgetName": "MainContainer",
          "parentRowSpace": 1,
          "type": "CANVAS_WIDGET",
          "canExtend": true,
          // highlight-next-line
          "version": 89,
          "minHeight": 1292,
          "parentColumnSpace": 1,
        },
    ```

</dd>

</dd>

**Disconnect Git**: 

This action permanently disconnects your Appsmith app from Git. Once disconnected, it is not possible to reconnect to the same repository. If you want to reconnect, you need to connect a new empty repository.





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


This property allows you to set multiple branches as protected, meaning that changes to the app are not allowed within those branches. To make changes to these branches, you need to raise a PR and merge it manually from the Git provider.


By default, Appsmith enables the [protected branch](#change-protected-branch) feature for the default (`master/main`) branch. This means that direct edits to this branch are restricted. To make changes, you must create a new branch, implement the changes, and then merge them into the default branch via PR.


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



The CI/CD feature in Appsmith enables you to automatically deploy changes to the selected branch, eliminating the need to manually pull updates after each change.


<dd>

* **CURL command**: The provided CURL command is specifically intended for configuring automatic deployments within Appsmith's CI/CD setup. It triggers a POST request to the specified endpoint, initiating the deployment process for the designated app and branch.

* **Bearer token**: You can use this bearer token for authenticating CI/CD requests. You can add this bearer token to your secrets or environment variables for secure access. Once generated, paste your bearer token immediately. You won't be able to do this later.


For more information see [Continuous Delivery (CI/CD) with Git](/advanced-concepts/version-control-with-git/cd-with-git)



</dd>