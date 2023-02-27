---
sidebar_position: 6
---
# Merging Branches

When you want to merge your branch with the base branch -

1. Click on the Merge button at the bottom left corner of the screen. It will open the merge tab
2. Select your base branch and check the merge status
   1. The `base` and `head` branches shouldn't have any uncommitted changes.
   2. The remote counterpart of the `base` branch shouldn't have any commits that are missing locally (the local and remote versions should be in sync.)
   3. The `base` and the `head` branch shouldn't have any conflicting changes.
3. Click on `Merge Changes` if the merge status check is successful.

#### Conflicts

Consider a scenario where the **user 1** wants to develop a new feature and has a single branch `main`. As a general practice user creates `feature-f1` from the `main` branch. At the same time, **user 2** updates the `main` branch with the same resources like page, query, or JSObject that **user 1** modifies on the `feature-f1` branch. If **user 1** tries to merge `feature-f1` to `main` branch it leads to a merge conflict.

You can resolve it in the following way:

* Create a pull request with `main` as the base branch;
* Resolve the conflicts on remote branches (Between `origin/feature-f1` and `origin/main`);
* Once the conflicts are resolved, merge this new branch(`origin/feature-f1`) into the old branch(`origin/main`);
* Pull the `main` branch again in your app. Now you should have all the changes from the `feature-f1` branch;
* Delete branch `origin/feature-f1` on the remote repository;
* Sync branches in the Git branches modal on Appsmith to remove `origin/featuref1` from the local repository.

##### Best practices to avoid merge conflicts
Merge conflicts can occur when different branches attempt to merge changes to the same page of an app. Multiple developers can collaborate on the same app, but each one should focus on a different page.

**For changes that affect more than just one page of the app like app theme, datasources**

* Avoid making these changes when feature branches are in the middle of building new updates.
* Ensure that these changes are completed and pushed to the `main` branch.
* Pull changes from `main` to the feature branches that are in development.
* Finish updates on the feature branch, then commit and merge with main.

