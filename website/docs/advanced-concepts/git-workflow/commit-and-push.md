---
sidebar_position: 2
---

# Commit Changes

After developing your app further, you’d want to update the changes to your remote repository. To update the Git repository with the app changes, follow the steps below:

1. Commit the changes using the **deploy** button at the top right or the **+** icon at the bottom left corner.
2. In the deploy modal, enter your commit message and click **Commit and Push** to update your repository with the latest changes. 

The user committing changes on Appsmith is tagged as the commit author. Once you commit and push changes, the changes are also published for the app viewers. 

:::note
The deployed version of one branch doesn't affect the other. For example, if you are working on a feature branch `f1` and you deploy the changes from the `f1` branch, the changes of the master branch aren't affected.
:::

Let’s discuss some common scenarios around the commit and push process.

## Remote is ahead

In case the remote counterpart of your current branch has some commits that aren't present on the local branch, the push command would fail, and you would need to pull the changes to proceed. After pulling the changes, once you click on the push button, all changes would be finally pushed to the repository, including the last commit.

:::note
Renaming an entity (query, widgets etc) is the same as deleting the old entity and creating a new one in the Git file system. For example, when you rename a query, you may see `2 queries modified` while trying to commit; the 2 changes are the old query being deleted and the new one being created.
:::