---
sidebar_position: 3
---
# Deploy Changes

If your local branch is not in sync with the remote branch of the git repository, you pull the latest changes by clicking on the pull button at the bottom left corner.

#### **Conflicts**

Consider a scenario where multiple users work on a single branch, say, the _feature/f1_ branch (we don’t recommend this approach), and update the same resources from 2 different Appsmith instances (e.g., cloud and self-hosted). Now whoever commits later will face the issue of a merge conflict as the user who tries to commit and push will have to pull the changes from remote first.

You can resolve it in the following way:

* Create a new branch in appsmith from the conflicted branch (feature/f1\_conflicted);
* Resolve the conflicts on the remote repository (Between origin/feature/f1 and origin/feature/f1\_conflicted) by creating a pull request with origin/feature/f1 as a base branch;
* Once the conflicts are resolved merge this new branch (origin/feature/f1\_conflicted) into the old branch(origin/feature/f1);

(origin/feature/f1 <- origin/feature/f1\_conflicted)

* Pull the branch (feature/f1) again in Appsmith’s local repository;
* Delete branch origin/feature/f1\_conflicted on the remote repository;
* Run sync branch flow to remove feature/f1\_conflicted< from the local repository.

## Discard and pull changes

While developing an application in Appsmith, sometimes, you may end up in a situation where you want to discard the current changes and revert to the previous stable version. Now, with discard and pull functionality, you can remove the unwanted changes, and pull the changes present in the remote repository so that your application will always be in sync.

Discarding changes will result in the following scenarios: Any resources added after the last commit will be removed. Any resources deleted after the last commit will be restored. Changes made to any resource after the last commit will be removed.

Note: Resources refers to pages, JSObjects, queries, etc
