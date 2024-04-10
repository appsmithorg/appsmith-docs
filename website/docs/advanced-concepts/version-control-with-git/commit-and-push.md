---
sidebar_position: 2
---

# Manage Changes



## Commit and Push changes

After creating a new branch, follow these steps to commit and push changes to your remote repository:

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "90%" }}>
  <iframe src="https://demo.arcade.software/urZJd1ad19VGRAFFuXSs?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>


1. Make modifications to the application. For example, creating queries and configuring widgets.

2. Click the **+** icon at the bottom left corner to commit the changes. The plus sign also reflects the number of entities you have modified.

<dd>
  Entities refer to changes in the app, such as creating queries, JSObjects, and page edits.


**Renaming files:**  if you rename an entity (query, widgets etc), it's the same as deleting the old entity and creating a new one in the Git file system. For example, when you rename a query, you may see `2 queries modified` while trying to commit; the 2 changes are the old query being deleted and the new one being created.

</dd>


3. In the deploy tab on the Modal, enter your commit message and click **Commit and Push** to update your branch with the latest changes. 


After pushing your feature branch to the remote repository, you can view the deployed version of the branch in Appsmith. To check the deployed app associated with your branch, select the **Deploy button** located at the top right corner. 

This deployed version corresponds to the specific branch. Once the remote feature branch is updated in the repository, you can raise a PR to merge the changes with the master branch.

:::note
If the remote counterpart of your current branch contains commits not present on the local branch, the push command fails. In such a scenario, you'll need to pull the changes to continue. Once you've pulled the changes, re-attempt the push command, and all changes, including the last commit, are successfully pushed to the repository.
:::


## Discard changes


Discarding changes have the following impact on the entities (pages, queries, JSObjects etc.): 
- Any entity (pages, queries, JSObjects etc.) added after the last commit is removed. 
- Any resources that are deleted after the last commit is restored. 
- Changes made to any resource after the last commit is removed.

Follow these steps to discard changes and revert to the last deployed changes:

* Click on the Commit and Push icon within Appsmith.
* In the Deploy Modal, select the Discard Changes option.
* This action will discard any current modifications and restore the application to reflect the latest deployment changes from the repository.


While developing an application in Appsmith, sometimes, you may want to discard the current changes and revert to the previous stable version. To discard the changes, click **Commit and Push** icon and in the Deploy Modal, click the **Discard Changes** button. When this button is clicked, along with the current changes being discarded, the latest changes are pulled from the remote repository so that your application is in sync. 


## Auto-commit changes

**Appsmith updates:** when an Appsmith version is updated, you may see uncommitted changes in your local Git branch even when you've made no changes in your app. This happens due to new feature additions to the platform. You can commit these changes as version update changes. To avoid conflicts due to Appsmith version updates, follow the steps below:
1. Open your app in the master branch and commit the version update changes.
2. After successfully committing and pushing your changes, switch to your local feature branch and merge the changes from the master branch into the feature branch.


Whenever you upgrade your Appsmith instance, the Domain Specific Language (DSL) that describes your app's layout and interactions is also updated. These updates are essential to take advantage of new features and enhancements that come with each new version of Appsmith. Appsmith automatically commits these DSL version changes on your behalf. 

These commits appear in your repository as follows:

```
System generated commit, to support new features after upgrading Appsmith to the version: #appsmithVersion
```

The auto-commit feature ensures you no longer have to manually manage version upgrade changes. You can disable the auto-commit feature by going to your app's Git settings. 

:::info
The auto-commit feature does not apply to the protected branches.
:::

## Further reading

[Merge and Pull changes](/advanced-concepts/version-control-with-git/merging-branches)





