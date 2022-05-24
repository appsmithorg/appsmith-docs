# Working with Branches

The initial commit while connecting to a repository is made to the master branch. If you want to work on a feature independently, you can create a separate branch.

To create a new branch -

* Click on the branch button at the bottom left corner. You can switch to an existing branch or create a new one from the branch pop-up.&#x20;
* When you switch to another branch, the uncommitted changes in your current branch won’t carry over to the destination branch.

However, if you create a new branch, it will have the uncommitted changes of your parent branch.

{% hint style="info" %}
* Branch names should **not** start with `origin/` since this prefix is used to distinguish between local and remote versions of a branch.
* Checking out a remote branch with a local counterpart already available would result in an error.
* If you create a new branch, it will have the uncommitted changes of your parent branch. When you switch to another branch, the uncommitted changes in your current branch won’t be carried over to the destination branch. In both cases, the current branch will retain the uncommitted changes.
{% endhint %}

#### Syncing Local with Remote Branch

To sync the local with the remote branch (fetching or pruning), click on the branch pop-up and hit the “<mark style="color:purple;">Sync branches</mark>” button.

![](<../../.gitbook/assets/Git\_sync\_syc branches.gif>)

Syncing the branches won’t merge any change you’ve made on the remote branch. You’ll have to click on the pull button to get the latest changes.
