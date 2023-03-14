---
sidebar_position: 3
---

# Commit and Push

After developing your app further, you’d want to sync it with your repository. To sync the app and the repository, commit the changes using the deploy button at the top right or `+` icon at the bottom left corner.

In the deploy window, enter your commit message and click **Commit and Push** to update your repository with the latest changes. The user committing changes on Appsmith is tagged as the commit author.

:::info
Once you commit and push changes, the changes are also published for the app viewers. Please note that the deployed version of one branch does not affect the other. For example, if you are working on a feature branch `f1` and you deploy the changes from `f1` branch, it will not affect the changes of the master branch
:::

Let’s discuss some common errors you may face during the commit and push process.

#### Remote is Ahead

In case the remote counterpart of your current branch has some commits that are not present on the local branch, the push command would fail, and you would need to pull the changes to proceed. After pulling the changes, once you click on the pull button, all changes would be finally pushed to the repository, including the last commit.

#### Merge Conflicts

If there are any merge conflicts, you will have to resolve them manually on the repository. Once you fix the conflicts, you can try pulling the changes again.

#### General notes
1. Renaming a resource is the same as deleting the old resource and creating a new one in the Git file system. For example, when you rename a query, you may see `2 queries modified` while trying to commit; the 2 changes are the old query being deleted and the new one being created.
