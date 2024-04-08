---
sidebar_position: 2
---

# Commit and Push Changes

After developing your app on a feature branch, to commit and push changes to your remote repository, follow the steps below:

1.  Click the **+** icon at the bottom left corner to commit the changes. 
2. In the deploy tab on the Modal, enter your commit message and click **Commit and Push** to update your repository with the latest changes. 

![](/img/commit_changes_git.gif)


When you push your feature branch to the remote repository, you can see the deployed version of the branch in Appsmith. To check the deployed app for your branch, click the **Deploy** button from the top right corner and in the deploy modal, click **Latest Deploy Preview**.

## Upstream changes

In case the remote counterpart of your current branch has some commits that aren't present on the local branch, the push command would fail, and you would need to [pull the changes](/advanced-concepts/version-control-with-git/merging-branches#pull-changes) to proceed. After pulling the changes, push the changes again and all changes would be finally pushed to the repository, including the last commit.

Once the remote feature branch is updated in the repository, you can raise a PR to merge the changes with the master branch.
 

## File changes

**Renaming files:**  if you rename an entity (query, widgets etc), it's the same as deleting the old entity and creating a new one in the Git file system. For example, when you rename a query, you may see `2 queries modified` while trying to commit; the 2 changes are the old query being deleted and the new one being created.


**Appsmith updates:** when an Appsmith version is updated, you may see uncommitted changes in your local Git branch even when you've made no changes in your app. This happens due to new feature additions to the platform. You can commit these changes as version update changes. To avoid conflicts due to Appsmith version updates, follow the steps below:
1. Open your app in the master branch and commit the version update changes.
2. After successfully committing and pushing your changes, switch to your local feature branch and merge the changes from the master branch into the feature branch.

## Discard changes

While developing an application in Appsmith, sometimes, you may want to discard the current changes and revert to the previous stable version. To discard the changes, click **Commit and Push** icon and in the Deploy Modal, click the **Discard Changes** button. When this button is clicked, along with the current changes being discarded, the latest changes are pulled from the remote repository so that your application is in sync. 

Discarding changes have the following impact on the entities (pages, queries, JSObjects etc.): 
- Any entity (pages, queries, JSObjects etc.) added after the last commit is removed. 
- Any resources that are deleted after the last commit is restored. 
- Changes made to any resource after the last commit is removed.

## Auto-commit changes

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





