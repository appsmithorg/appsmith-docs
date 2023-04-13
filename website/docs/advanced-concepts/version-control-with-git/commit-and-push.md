---
sidebar_position: 2
---

# Commit Changes

After developing your app on a feature branch, to commit and push changes to your remote repository, follow the steps below:

1.  Click the **+** icon at the bottom left corner to commit the changes. 
2. In the deploy tab on the modal, enter your commit message and click **Commit and Push** to update your repository with the latest changes. 

![](/img/commit_changes_git.gif)


In case the remote counterpart of your current branch has some commits that aren't present on the local branch, the push command would fail, and you would need to [pull the changes](/advanced-concepts/version-control-with-git/pull-and-sync) to proceed. After pulling the changes, push the changes again and all changes would be finally pushed to the repository, including the last commit.

Once the remote branch is updated with the repository, you can raise a PR to merge the changes with the main branch.

:::note
Renaming an entity (query, widgets etc) is the same as deleting the old entity and creating a new one in the Git file system. For example, when you rename a query, you may see `2 queries modified` while trying to commit; the 2 changes are the old query being deleted and the new one being created.
:::

## Changes due to Appsmith updates

When an Appsmith version is updated, you may see uncommitted changes in your local Git branch even when you've made no changes in your app. This happens due to new feature additions to the platform. You can commit these changes as version upgrade changes. Conflicts that may arise during the review process should be resolved on the remote repository.

## Discard changes

While developing an application in Appsmith, sometimes, you may want to discard the current changes and revert to the previous stable version. To discard the changes, click **Commit and Push** icon and in the deploy modal, click the **Discard Changes** button. When this button is clicked, along with the current changes being discarded, the latest changes are pulled from the remote repository so that your application is in sync. 

Discarding changes have the following impact on the entities (pages, queries, JSObjects etc.): 
- Any entity (pages, queries, JSObjects etc.) added after the last commit is removed. 
- Any resources that are deleted after the last commit is restored. 
- Changes made to any resource after the last commit is removed.





