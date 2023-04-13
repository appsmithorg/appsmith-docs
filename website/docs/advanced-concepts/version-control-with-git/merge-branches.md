# Merge Changes

Merging branches is typically done when you want to incorporate changes made to the master branch into your feature branch. Here are a few scenarios where you may want to merge branches:

1. **Keeping up-to-date with changes in the master branch**: if you have been working on your feature branch for a while and the main branch has been updated with new changes, you may want to merge the master branch into your feature branch to keep it up-to-date with the latest changes. This can help you avoid conflicts later on when you merge your changes back into the main branch.

2. **Resolving conflicts**: If you have made changes to your feature branch that conflict with changes made to the main branch, you may want to merge the main branch into your feature branch to resolve these conflicts. This can help you identify and fix any conflicts early on, rather than waiting until you merge your changes back into the main branch.
  
Follow the steps below when you want to merge your feature branch with the master branch -

1. Click the **Merge icon** at the bottom left corner of the screen. It opens the merge tab.
2. Select your base branch and check the merge status.
   1. The `base` and `head` branches shouldn't have any uncommitted changes.
   2. The remote counterpart of the `base` branch shouldn't have any commits that are missing locally (the local and remote versions should be in sync.)
   3. The `base` and the `head` branch shouldn't have any conflicting changes.
3. Click **Merge Changes** if the merge status check is successful.

Once the merge is successful, you can raise a PR on the remote repository to merge the changes of the feature branch to the master branch.

## Merge conflicts

Consider a scenario where user 1 wants to develop a new feature and has a single branch main. As a general practice, the user creates feature-f1 from the main branch. At the same time, user 2 updates the main branch with the same resources like page, query, or JSObject that user 1 modifies on the feature-f1 branch. If user 1 tries to merge feature-f1 to the main branch, it creates a merge conflict.

You can resolve it in the following way:

1. Create a pull request with the master as the base branch;
2. Resolve the conflicts on remote branches (Between origin/feature-f1 and origin/main);
3. Once the conflicts are resolved, merge this new branch(origin/feature-f1) into the old branch(origin/main);
4. Pull the main branch again in your app. Now you should have all the changes from the feature-f1 branch;
5. Delete branch origin/feature-f1 on the remote repository;
6. Sync branches in the Git branch modal on Appsmith to remove origin/featuref1 from the local repository.

### Best practices to avoid merge conflicts
Merge conflicts can occur when different branches attempt to merge changes to the same page of an app. Multiple developers can collaborate on the same app, but each one should focus on a different page.

**For changes that affect more than just one page of the app, like the app theme, datasources, etc: **

* Avoid making these changes when feature branches are in the middle of building new updates.
* Ensure that these changes are completed and pushed to the `master` branch.
* Pull changes from the `master` to the feature branches that are in development.
* Finish updates on the feature branch, then commit and merge with the master branch.