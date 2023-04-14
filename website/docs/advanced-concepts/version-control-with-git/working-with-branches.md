---
sidebar_position: 1
---
# Setup Branches

Similar to using Git flow in SDLC, you can make separate branches in Appsmith for different stages of your app development. It's recommended to set up the branches for the development phases as given below:

- **Master** - The master branch contains the final version of the app that's accessible to the app viewer. You can make this branch protected from the settings in the remote repository.
- **Release** - Create a  new branch `release` from the master branch where all the feature branches should be merged. In this branch, the app goes through testing and QA. When the QA is completed, raise a PR from the release to the master branch in the remote repository.
- **Feature** - A feature branch is for the developers to work on building the app. Each developer should have an individual feature branch and on completion, raise a PR to the release branch in the remote repository

:::info
It is recommended that each developer should have an individual feature branch

## Create a branch

To create these branches in your Appsmith app, follow the steps below:

1. Click the current branch at the bottom left corner to open the branch modal that shows the list of existing branches.
2. To create a new branch, enter the new branch name (Eg. release) in the input box and click on **Create branch:release**. Your application switches to the new (release) branch

![](/img/create_branch.gif)

Please the note following while creating a new branch:

* When you create a new branch, it carries the uncommitted changes of your parent branch. 
* When you switch to another branch, the uncommitted changes in your current branch aren't carried over to the destination branch.
* Checking out a remote branch with a local counterpart already available would result in an error.



