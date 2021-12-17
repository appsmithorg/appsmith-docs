# Git sync (Beta)
Using git sync developers can version control their apps, making it easy to track changes and make rollbacks on a rainy day. In addition to that git branches enables collaboration and quick iterations.

It works with any git hosting provider which supports SSH.

## Connecting to a git repo
1. Create a new git repo and copy the `SSH` url. (Please create a new repo, repos with existing apps are not supported)
2. Click on connect git button on the bottom bar
3. Paste the URL and generate the key
4. Copy the generated deploy key and add it to your repo, make sure to enable write access (link to more details)
5. Update the git user config, these details are used to author commits made by you (link to more details)
6. Click on connect, once the connection is successful, you can verify that on the repo, it should have a `README.md` file.

## Commit and push
To sync your app changes to the git repo, you'd need to commit those changes. The commit tab is accessible via clicking on the `deploy` on the top right or the `plus` button on the bottom left.

Note: Once you commit and push changes, the changes are also published for the app viewers.

### Steps
1. Make changes
2. Open the commit modal
3. Update the commit message and push

Errors during commit and push:
#### Remote is ahead
In case the remote counter part of your current branch has some commit that are not there on the local branch, `git push` would fail and you would need to pull the changes in order to proceed. Once you click on the pull button after pulling the changes, all changes would be finally pushed to the repo, including the last commit.

#### Conflicts
Merge conflicts if any, would need to be resolved manually on the repository. Once the conflicts are resolved, you may try pulling the changes again.

## Working with branches
You may create a separate branch to work on a feature independently. To create a separate branch please find the branch button a the bottom left. You may switch branches or create a new branch from the branch popup.

Note:
- Branch names should not start with `origin/` since this prefix is used to distinguish b/w local and remote versions of a branch.
- Checking out a remote branch with a local counterpart already available would result in an error

## Syncing local branches with the remote repo: ie. pruning local and fetching remote branches
Steps:
- Open the branch list popup from the bottom left
- Click on the `refresh` button beside the popup title
Any branches created on the repo should now be visible on the branch list
Caution: this would prune any local branches that are deleted from the repository

## Conflicts
(Separate section to show an example scenario)

## Merging changes
Steps:
1. Switch to the merge tab
2. Select the base branch
3. Check the merge status, proceed with the merge operation if the branches are mergeable.

### Merge status checks
1. Both the `base` and `head` branch shouldn't have any uncommitted changes
2. The remote counterpart of the `base` branch shouldn't have any commit that are missing locally, (the local and remote versions should be in sync)
3. The `base` and the `head` branch shouldn't have any conflicting changes

## Git config
Global config: Similar to git global config, it's used by default. It can be edited from the user profile sections
Local config: If you need to specify an app specific config, you'd need to uncheck the `use default config` checkbox

## Using deploy keys
(Details mentioning deploy key usage for github, gitlab and bitbucket)

## Local development and importing apps
With the upcoming import app via git feature, the following local development workflow would be made possible:

## Bottom bar buttons
(Commit, push, pull buttons)

### Pull button
Remote commits that are not fetched locally yet can be fetched by clicking on the pull button.
Any uncommitted changes on the app would need to be committed before pulling remote changes.
In case the remote changes and the app changes are conflicting, for example a button was renamed within the app to `Button1`, but another commit on the remote branch renamed the same button to `Button2`, pulling would lead to a conflict. In that case the conflicts would need to be resolved on the repo to make sure there are no conflicts between the app and the repo. 

## CE limitations to number of private repos

## Disconnect git flow

## Switching and creating branches caveats
Creating branches: Uncommitted changes from the parent, would exist both on the parent branch and the child branch
Switching branches: Switching with uncommitted changes won't carry along the changes to the switched branch

## Forking a git connected app
Forking a git connected app, just forks the default branch

## Default branch
This is set at the time of connecting to the git repo
If we access the app link without the branch query param, we would be redirected to the default app
