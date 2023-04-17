# Merge and Pull Changes

When you are working on your feature branch for a while, the master may get updated with new changes. As your branch is behind the master now, to avoid conflicts, you have to merge the master branch into your feature branch to keep it up-to-date with the latest changes.
  
Follow the steps below when you want to merge your feature branch with the master branch -

1. Click the **Merge icon** at the bottom left corner of the screen. It opens the merge tab.
2. Select your base branch and check the merge status.
   1. The `base` and `head` branches shouldn't have any uncommitted changes.
   2. The remote counterpart of the `base` branch shouldn't have any commits that are missing locally (the local and remote versions should be in sync.)
   3. The `base` and the `head` branch shouldn't have any conflicting changes.
3. Click **Merge Changes** if the merge status check is successful.

Once the merge is successful, you can raise a PR on the remote repository to merge the changes of the feature branch to the master branch.

## Pull changes

When the PR raised from the feature branch is merged to the master in the remote repository, the local counterpart has to be updated with those changes. To sync the local branch with the remote updates, pull the latest changes by clicking on the **pull icon** at the bottom left corner. 

![](/img/pull_changes.gif)

Once the pull is successful, the app is automatically deployed. You can view the deployed version by clicking the **﹀** icon from the top right corner.

:::info
The pull function can sometimes result in merge conflicts if there are changes made to the same files in both the local and remote branches. In such cases, resolve the conflicts manually on the remote repository.
:::

### Best practices to avoid merge conflicts
Merge conflicts can occur when different branches attempt to merge changes to the same page of an app. Multiple developers can collaborate on the same app, but each one should focus on a different page.

**For changes that affect more than just one page of the app, like the app theme, datasources, etc: **

* Avoid making these changes when feature branches are in the middle of building new updates.
* Ensure that these changes are completed and pushed to the `master` branch.
* Pull changes from the `master` to the feature branches that are in development.
* Finish updates on the feature branch, then commit and merge with the master branch.

## Delete a branch

Similar to the Git flow, you can delete a branch in Appsmith that's no longer needed. If you want to delete a branch from Appsmith, follow the steps given below:

1. Click the current branch at the bottom left corner.
2. Go to the branch you want to delete, click options, and **Delete**.

![](/img/delete_branch.gif)

## Further reading

- [Revert Changes](/advanced-concepts/version-control-with-git/revert-changes)
- [Import from a Git Repository](/advanced-concepts/version-control-with-git/import-from-repository)