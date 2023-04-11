---
sidebar_position: 3
---
# Pull and Deploy Changes

In Git, a pull is a command that updates a local repository with changes from a remote repository. Similarly, when you make changes to the remote repository of the Appsmith app (Eg. - merged a pull request to the main branch), the local counterpart has to be updated with those changes. To sync the local branch with the remote updates, pull the latest changes by clicking on the pull button at the bottom left corner.

:::info
The pull function can sometimes result in merge conflicts if there are changes made to the same files in both the local and remote repositories. In such cases, resolve the conflicts manually on the remote repository.
:::

## Merging branches

Merging branches is typically done when you want to incorporate changes made to the base branch into your feature branch. Here are a few scenarios where you may want to merge branches:

1. **Keeping up-to-date with changes in the main branch**: if you have been working on your feature branch for a while and the main branch has been updated with new changes, you may want to merge the main branch into your feature branch to keep it up-to-date with the latest changes. This can help you avoid conflicts later on when you merge your changes back into the main branch.

2. **Resolving conflicts**: If you have made changes to your feature branch that conflict with changes made to the main branch, you may want to merge the main branch into your feature branch to resolve these conflicts. This can help you identify and fix any conflicts early on, rather than waiting until you merge your changes back into the main branch.
  
Follow the steps below when you want to merge your feature branch with the base branch -

1. Click the Merge button at the bottom left corner of the screen. It opens the merge tab
2. Select your base branch and check the merge status.
   1. The `base` and `head` branches shouldn't have any uncommitted changes.
   2. The remote counterpart of the `base` branch shouldn't have any commits that are missing locally (the local and remote versions should be in sync.)
   3. The `base` and the `head` branch shouldn't have any conflicting changes.
3. Click on `Merge Changes` if the merge status check is successful.

:::info
Merging the branches can also introduce new conflicts or issues, so it's important to review the changes and test your app after merging.
:::

### Best practices to avoid merge conflicts
Merge conflicts can occur when different branches attempt to merge changes to the same page of an app. Multiple developers can collaborate on the same app, but each one should focus on a different page.

**For changes that affect more than just one page of the app, like the app theme, datasources, etc: **

* Avoid making these changes when feature branches are in the middle of building new updates.
* Ensure that these changes are completed and pushed to the `main` branch.
* Pull changes from `main` to the feature branches that are in development.
* Finish updates on the feature branch, then commit and merge with main.


