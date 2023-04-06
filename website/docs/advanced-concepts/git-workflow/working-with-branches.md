---
sidebar_position: 1
---
# Setup Branches

The initial commit while connecting to a repository is made to the master branch. If you want to work on a feature independently, you can create a separate branch.

To create a new branch, click the branch button at the bottom left corner. You can switch to an existing branch or create a new one from the branch pop-up.

Please the note following while creating a new branch:

* When you **create** a new branch, it carries the uncommitted changes of your parent branch. 
* When you **switch** to another branch, the uncommitted changes in your current branch aren't carried over to the destination branch.
* Branch names shouldn't start with `origin/` since this prefix is used to distinguish between local and remote versions of a branch.
* Checking out a remote branch with a local counterpart already available would result in an error.
* Branch protections on the remote repository may cause errors with some operations involving Git push.

## Sync local with remote branch

To sync the local with the remote branch (fetching or pruning), click on the branch pop-up and hit the **Sync branches** button. Syncing the branches won’t merge any change you’ve made on the remote branch. You’ll have to click on the pull button to get the latest changes.

## Delete a branch

Similar to the Git flow, you can delete a branch in Appsmith that's no longer needed. You can delete any branch other than the default branch. Please make sure that you aren't editing the branch you want to delete.


If you want to delete a branch from Appsmith, follow the steps given below:

1. Click the branch list at the bottom left corner.
2. Move the cursor to the branch you want to delete, hit the options button, and click **Delete**.
