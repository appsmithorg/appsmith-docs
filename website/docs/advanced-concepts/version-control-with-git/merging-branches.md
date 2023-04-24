# Merge and Pull Changes

In Git, you typically merge branches when you want to combine changes from one branch into another. Before merging the branches, please ensure that the following conditions have been met:

- Both the base and head branches have no uncommitted changes.
- The remote version of the base branch is synchronized with the local version, with no missing commits.
- The base and head branches have no conflicting changes that could cause issues during the merge.

There are 2 scenarios when you may want to merge branches in Appsmith:

**Update master branch:** after developing an app on your feature branch, you must update the master branch with the new feature. If the update does not require a review, you can merge your feature branch directly into the master branch. Follow these steps to merge the feature branch into the master branch:
1. Open your app in the feature branch and locate the **Merge** icon at the bottom left corner of the screen to open the merge modal.
2. Select **master** as the base branch and verify the merge status.
3. If there are no conflicts, click **Merge Changes** to complete the merge.

If you are working collaboratively with your team, it is recommended that you create a Pull Request (PR) in the remote repository to get your changes reviewed before merging them into the master branch. This allows other team members to review and provide feedback on your changes before they are merged into the master branch.

**Avoid conflicts:** If you have been working on your feature branch for a while, the master branch may have been updated with new changes. In this case, to prevent conflicts, you should merge the master branch into your feature branch to ensure that it is up-to-date with the latest changes. Follow these steps to merge your master branch with your feature branch:

1. Click the **Merge** icon at the bottom left corner of the screen. It opens the merge modal.
2. Select the **feature** as the base branch and verify the merge status.
3. Click **Merge Changes** if there are no conflicts.

Once the merge is successful, you can either merge your feature branch directly into the master branch in Appsmith or create a PR in the remote repository.

## Pull changes

When a feature branch is merged with the master branch in the remote repository, the local counterpart has to be updated with those changes. To sync the local branch with the remote updates, pull the latest changes by clicking on the **pull** icon at the bottom left corner. 

![](/img/pull_changes.gif)

Once the pull is successful, the app is automatically deployed. You can view the deployed version by clicking the **﹀** icon from the top right corner.

The pull function can sometimes result in merge conflicts if there are changes made to the same files in both the local and remote branches. In such cases, resolve the conflicts manually on the remote repository.


## Delete a branch

Similar to the Git flow, you can delete a branch in Appsmith that's no longer needed. If you want to delete a branch from Appsmith, follow the steps given below:

1. Click the current branch at the bottom left corner.
2. Go to the branch you want to delete, click options, and **Delete**.

![](/img/delete_branch.gif)

## Further reading

- [Revert Changes](/advanced-concepts/version-control-with-git/revert-changes)
- [Import from a Git Repository](/advanced-concepts/version-control-with-git/import-from-repository)