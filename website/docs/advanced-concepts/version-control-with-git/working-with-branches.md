---
sidebar_position: 1
---
# Setup Branches

Similar to using Git flow in SDLC, you can make separate branches in Appsmith for different stages of your app development. You can set up branches for the development phases as given below:

- **Master** - The master branch contains the final version of the app that's accessible to the app viewer. You can make this branch protected from the settings in the remote repository.
- **Release** - Create a  new branch `release` from the master branch where all the feature branches should be merged. In this branch, the app goes through testing and QA. When the QA is completed, raise a PR from the release to the master branch in the remote repository.
- **Feature** - A feature branch is for the developers to work on building the app. Each developer should have an individual feature branch and on completion, raise a PR to the release branch in the remote repository

## Create a branch

To create these branches in your Appsmith app, follow the steps below:

1. Click the current branch at the bottom left corner to open the branch modal that shows the list of existing branches.
2. To create a new branch, enter the new branch name (Eg. release) in the input box and click on **Create branch:release**. Your application switches to the new (release) branch

![](/img/create_branch.gif)

Please the note following while creating a new branch:

* When you create a new branch, it carries the uncommitted changes of your parent branch. 
* When you switch to another branch, the uncommitted changes in your current branch aren't carried over to the destination branch.
* Checking out a remote branch with a local counterpart already available would result in an error.

## Sync branches

To sync the local with the remote branch (fetching or pruning), click on the branch pop-up and hit the **Sync branches** button. Syncing the branches won’t merge any change you’ve made on the remote branch. You’ll have to click on the pull button to get the latest changes.

![](/img/Sync_branches.png)

## Delete a branch

Similar to the Git flow, you can delete a branch in Appsmith that's no longer needed. If you want to delete a branch from Appsmith, follow the steps given below:

1. Click the current branch at the bottom left corner.
2. Go to the branch you want to delete, click options, and **Delete**.

![](/img/delete_branch.gif)


