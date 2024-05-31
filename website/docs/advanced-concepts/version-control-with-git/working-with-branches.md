---
sidebar_position: 1
---
# Manage Branches

This guide shows you how to create, and manage Git branches within your Appsmith application, allowing you to better manage your app development process at different stages.


:::info
By default, Appsmith enables the [protected branch](#change-protected-branch) feature for the default (`master/main`) branch. This means that direct edits to this branch are restricted. To make changes, you must create a new branch, implement the changes, and then merge them into the default branch via PR.
:::



## Create branch

To create these branches in your Appsmith app, follow the steps below:




1. Select the branch menu located at the bottom left corner to access the branch Modal. This modal displays all available remote and local branches.

2. To create a new branch, enter the new branch name (Eg. `feature`) in the input box and click on **Create branch**. Your application switches to the new `(feature)` branch. When you create a new branch, it includes uncommitted changes made in the parent branch. But switching to another branch won't bring along any changes from the previous branch.


Each branch has a unique URL format: `<APPSMITH-APP-URL>?branch=<BRANCH-NAME>`. If the branch name is not specified, the app URL defaults to the `default` branch.

:::tip
It's recommended to organize branches according to development phases, such as having a `master/main` branch for stable releases, `feature` branches for new features, and `release` branches for testing and QA purposes.
:::

* To **Merge branches**, click on the **Merge** icon at the bottom left corner. Then, select the branch where you want to merge the changes. Make sure both branches are updated and free of conflicts. To merge changes into the `default`/`master` branch, raise a Pull Request and merge it.


* To **Sync** your local branch with its remote counterpart, open the desired branch from the bottom branch menu, and click on the sync icon at the top-left corner. Syncing doesn't automatically merge remote changes; use the pull button to update your local branch with the latest changes from the remote branch.











## Next steps

* [Commit and Push Changes](/advanced-concepts/version-control-with-git/commit-and-push)


