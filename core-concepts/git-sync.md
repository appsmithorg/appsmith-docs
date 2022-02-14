# Git Sync

Git Sync allows you to version control your apps by connecting them with a Git hosting provider (Github, GitLab, Bitbucket), making it easier to track changes, make rollbacks or collaborate using git branches.

**Note:**

{% hint style="info" %}
Git Sync works with any Git hosting service that supports SSH protocol.
{% endhint %}

## Connecting to Git Repository

To connect your app with git, follow the steps below:

* Create a new repository on your git service and copy the `SSH` URL. The repository should be empty except `README.md`, `.gitignore`, and `LICENSE` files (These can be auto-created when you create a new repository.)
* Open the app you want to connect to git and click on the `Connect GIT` button on the bottom bar.
* In the Git connection window, paste your repository’s `SSH` URL and click on `Generate key` to generate an `SSH` key.

{% embed url="https://youtu.be/oFfdIwhSPL8" %}

*   Copy the generated deploy key and add it to your repository. Please note that you have to <mark style="color:red;">**enable write access**</mark> for pushing the changes to the remote repo from Appsmith.\


    **For Github:**

    * Open the settings of the repository and go to deploy keys.
    * Click on “_Add deploy key_.” Add a title for the key and paste the generated key in the key section.
    * Check the “_Allow write access_” checkbox and add the key.

{% embed url="https://youtu.be/4xMHO4G2hEA" %}

&#x20;**For Gitlab:**

* Open the Settings> Repository and expand the deploy keys section.
* Click on "_Add key"_, Add the title and paste the generated key in the key section.
* Check the "_Grant write permissions" to this key <mark style="color:purple;"></mark>_ and add the key.

{% embed url="https://youtu.be/9aaiE6OERW0" %}

****\
**For Bitbucket:**

* Open "_Personal settings_" from the bottom right corner and go to "_SSH keys"_.
* Click on Add key, add the label and paste the generated key in the key section.

{% embed url="https://youtu.be/A8ZOvW1CVIk" %}

* In user settings, define the user configurations. By default, the global user configurations are used. Click on the "_<mark style="color:red;">Edit</mark>_" button or directly open the profile section to change the global configurations. If you want to add a user configuration specific to the current app, you must uncheck the "_<mark style="color:red;">use default configuration</mark>_" checkbox and enter the author details below.

{% embed url="https://youtu.be/d5R1MYKtpCM" %}

* Click on _connect_, and if the connection is successful, your repository will have a `README.md` file. On the Git Sync window, you’ll move to the _Deploy_ section, where you can make an initial commit.

{% embed url="https://youtu.be/Z67SfBpKrnk" %}

{% hint style="info" %}
In the community edition, you can connect up to <mark style="color:green;">three</mark> private repositories in the Cloud version **** (**for each organization**) and self-hosted instances (**for each instance**). If you wish to connect more, you can upgrade to the [enterprise edition](https://www.appsmith.com/pricing) (coming soon). However, you can connect unlimited public repositories.
{% endhint %}

## See Git In Action

Now that your app is connected to the Git repository let’s understand how to update the repository with changes made in the App.\
The flow is similar to how you work on Git - Commit the changes, push them to the remote branch. You can create new branches from the app and pull the changes from the repository if your app is out of sync with the branch you are working on.

### Commit and Push

After developing your app further, you’d want to sync it with your repository. To sync the app and the repository, commit the changes using the deploy button at the top right or `+` icon at the bottom left corner.

In the deploy window, enter your commit message and click on `Commit and Push` to update your repository with the latest changes.

{% hint style="info" %}
Once you commit and push changes, the changes are also published for the app viewers.
{% endhint %}

Let’s discuss some common errors you may face during the commit and push process.

#### Remote is Ahead

In case the remote counterpart of your current branch has some commits that are not present on the local branch, the push command would fail, and you would need to pull the changes to proceed. After pulling the changes, once you click on the pull button, all changes would be finally pushed to the repository, including the last commit.

#### Merge Conflicts

If there are any merge conflicts, you will have to resolve them manually on the repository. Once you fix the conflicts, you can try pulling the changes again.

### Working with branches

The initial commit while connecting to a repository is made to the master branch. If you want to work on a feature independently, you can create a separate branch.

To create a branch, click on the branch button at the bottom left corner. You can switch to an existing branch or create a new one from the branch pop-up.

When you switch to another branch, the uncommitted changes in your current branch won’t carry over to the destination branch.

However, if you create a new branch, it will have the uncommitted changes of your parent branch.

{% hint style="info" %}
* Branch names should **not** start with `origin/` since this prefix is used to distinguish between local and remote versions of a branch.
* Checking out a remote branch with a local counterpart already available would result in an error.
* If you create a new branch, it will have the uncommitted changes of your parent branch. When you switch to another branch, the uncommitted changes in your current branch won’t be carried over to the destination branch. In both cases, the current branch will retain the uncommitted changes.
{% endhint %}

#### Syncing Local with Remote Branch

To sync the local with the remote branch (fetching or pruning), click on the branch pop-up and hit the “<mark style="color:purple;">Sync branches</mark>” button.

![](<../.gitbook/assets/Git\_sync\_syc branches.gif>)

Syncing the branches won’t merge any change you’ve made on the remote branch. You’ll have to click on the pull button to get the latest changes.

### Pull from the Repository

If your local branch is not in sync with the remote branch of the git repository, you pull the latest changes by clicking on the pull button at the bottom left corner.

#### **Conflicts**

Consider a scenario where multiple users work on a single branch, say, the _feature/f1_ branch (we don’t recommend this approach), and update the same resources from 2 different Appsmith instances (e.g., cloud and self-hosted). Now whoever commits later will face the issue of a merge conflict as the user who tries to commit and push will have to pull the changes from remote first.

You can resolve it in the following way:

* Create a new branch in appsmith from the conflicted branch (_<mark style="color:orange;">feature/f1\_conflicted</mark>_);
* Resolve the conflicts on the remote repository (Between _<mark style="color:green;">origin/feature/f1</mark>_ and _<mark style="color:orange;">origin/feature/f1\_conflicted</mark>_) by creating a pull request with _<mark style="color:green;">origin/feature/f1</mark>_ as a base branch;
* Once the conflicts are resolved merge this new branch (_<mark style="color:orange;">origin/feature/f1\_conflicted</mark>_) into the old branch(_<mark style="color:green;">origin/feature/f1</mark>_);

&#x20;        (<mark style="color:green;">origin/feature/f1</mark> <- <mark style="color:orange;">origin/feature/f1\_conflicted</mark>)

* Pull the branch (_<mark style="color:green;">feature/f1</mark>_) again in Appsmith’s local repository;
* Delete branch _<mark style="color:orange;">origin/feature/f1\_conflicted</mark>_ on the remote repository;
* Run sync branch flow to remove _<mark style="color:orange;">feature/f1\_conflicted</mark>_ from the local repository.

### Merging

When you want to merge your branch with the base branch -

1. Click on the Merge button at the bottom left corner of the screen. It will open the merge tab
2. Select your base branch and check the merge status
   1. The `base` and `head` branches shouldn't have any uncommitted changes.
   2. The remote counterpart of the `base` branch shouldn't have any commits that are missing locally (the local and remote versions should be in sync.)
   3. The `base` and the `head` branch shouldn't have any conflicting changes.
3. Click on `Merge Changes` if the merge status check is successful.

#### **Conflicts**

Consider a scenario where the **user1** wants to develop a new feature and have a single branch _<mark style="color:green;">main</mark>_**.** As a general practice user creates _<mark style="color:orange;">feature/f1</mark>_ from the main branch. At the same time, **user2** updates the _<mark style="color:green;">main</mark>_ branch with the same resources like page, query, or JSObject that **user1** modifies on the _<mark style="color:orange;">feature/f1</mark>_ branch. If **user1** tries to merge _<mark style="color:orange;">feature/f1</mark>_ to _<mark style="color:green;">main</mark>_**,** it leads to a merge conflict.

You can resolve it in the following way:

* Create a pull request with _<mark style="color:green;">main</mark>_ as the base branch;
* Resolve the conflicts on remote branches (Between _<mark style="color:orange;">origin/f1</mark>_ and _<mark style="color:green;">origin/main</mark>_);
* Once the conflicts are resolved, merge this new branch(_<mark style="color:orange;">origin/f1</mark>_) into the old branch(_<mark style="color:green;">origin/main</mark>_);

&#x20;           (_<mark style="color:green;">origin/main</mark>_ **<-** _<mark style="color:orange;">origin/f1</mark>_)

* Pull the main branch again in your app. Now you should have all the changes from the _<mark style="color:orange;">feature/f1</mark>_ branch;
* Delete branch _<mark style="color:orange;">origin/feature/f1</mark>_ on remote;
* Sync branch with remote to remove _<mark style="color:orange;">feature/f1</mark>_ from the local repository.

### Updating the File path for Git Repository

Appsmith clones the git repositories in the local filesystem, attached to the persistent volume within the docker container. To maintain the git repositories, we will need a file path that will point to the volume within the docker container. We can quickly achieve this by just updating the relevant environment variable.

{% hint style="info" %}
If the file path is not present, git repositories will be cloned, but this will not be persistent, and Appsmith will try to clone the repositories in case they got deleted by docker restart, etc.&#x20;
{% endhint %}

#### &#x20;Custom Git Root&#x20;

To point to a custom Git Root where the git repositories will be persisted, update the env variable called <mark style="color:orange;">APPSMITH\_GIT\_ROOT</mark> to point to your custom file path.

```
APPSMITH_GIT_ROOT=./path/to/repo/directory 
```

Please remember to restart the container to apply changes.

{% hint style="info" %}

{% endhint %}

## Disconnecting the Git Repository

If you want to disconnect your app from the Git repository, click Settings and hit the delete icon next to the remote URL. It will take you to the disconnection window, ensuring that you want to delete the connection.

{% hint style="info" %}
Once you disconnect with Git, all the local branches and their changes (except the default branch) will be deleted, and you cannot connect to the same remote repository again.
{% endhint %}
