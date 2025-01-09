import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Resolve Merge Conflicts in Git

 This guide offers strategies for resolving these conflicts to ensure smoother collaboration and project management in Git. The specific steps may vary depending on your Git service provider and local code editor; please refer to the documentation of your provider for specific instructions.

You can encounter merge conflicts in two cases:

* When merging two separate branches.
* When updating changes to a local or remote branch.

## Branch merge conflicts

Merge conflicts occur when changes from different branches overlap, leading to conflicts that need manual resolution.

<ZoomImage src="/img/seperate-conflicts-git.png" alt="" caption=""/>


1. To resolve these conflicts, raise a pull request for your source branch, targeting the destination branch where you intend to merge the changes.


<dd>

*Example:*

If you're working on the `feature` branch and want to merge changes into `staging`, but are facing conflicts, you can raise a pull request for your `feature` branch on your Git provider, targeting the `staging` branch for merging.

</dd>

 2. Once the PR is created, scroll down to the bottom of the PR page: 
 


*  If the Resolve conflicts button is available, you can resolve conflicts directly from the pull request interface by selecting the conflicting files and making the necessary changes.

* If the Resolve conflicts button is disabled, you need to clone the Git repository to your local machine and resolve the conflicts using the command-line interface. If you don't want to resolve conflicts locally, you can use tools like [GitHub.dev](https://github.com/github/dev), [GitLab Web IDE](https://docs.gitlab.com/ee/user/project/web_ide/) to resolve conflicts directly from your browser.

    For more information, see how to resolve a merge conflict on [GitHub](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github), [GitLab](https://docs.gitlab.com/ee/user/project/merge_requests/conflicts.html#methods-of-resolving-conflicts), [Bitbucket](https://support.atlassian.com/bitbucket-cloud/docs/resolve-merge-conflicts/).


3. After resolving all conflicts in all files and ensuring that the changes are correctly edited, click on **Commit merge**, and Merge the pull request.

4. Update your Appsmith app by pulling the changes.

<dd>

*Example:*

If you are facing issues merging from a `feature` branch to `staging`, then ensure you are on the `staging` branch in your Appsmith app and pull the changes there.


</dd>



## Remote branch pull conflicts

These conflicts arise when changes in your local branch cannot be directly merged with changes in the remote branch. For example, If you're working on the `feature` branch and someone else pushes changes to the remote counterpart of the same branch, you may encounter conflicts if both have edited the same files. 

<ZoomImage src="/img/remote-Conflicts.drawio.png" alt="" caption=""/>


1. Create a new branch from the conflicted branch and raise a Pull Request.


<dd>

*Example:*

 Create a new branch from your local `feature` branch, name it `feature-fix`, and then raise a pull request from this new branch against the original `feature` branch.


</dd>



 2. Once the PR is created, scroll down to the bottom of the PR page: 
 


*  If the Resolve conflicts button is available, you can resolve conflicts directly from the pull request interface by selecting the conflicting files and making the necessary changes.

* If the Resolve conflicts button is disabled, you need to clone the Git repository to your local machine and resolve the conflicts using the command-line interface. If you don't want to resolve conflicts locally, you can use tools like [GitHub.dev](https://github.com/github/dev), [GitLab Web IDE](https://docs.gitlab.com/ee/user/project/web_ide/) to resolve conflicts directly from your browser.

    For more information, see how to resolve a merge conflict on [GitHub](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github), [GitLab](https://docs.gitlab.com/ee/user/project/merge_requests/conflicts.html#methods-of-resolving-conflicts), [Bitbucket](https://support.atlassian.com/bitbucket-cloud/docs/resolve-merge-conflicts/).




3. After resolving all conflicts in all files and ensuring that the changes are correctly edited, click on **Commit merge**, and Merge the pull request.

4. In Appsmith, click **Discard and Pull** from the commit modal to update the app.



<dd>

*Example:*

If you face conflicts within the same branch due to changes made remotely, open your Appsmith app, click on the **+** icon, and click **Discard and Pull**. This discards any local changes that have not been saved and updates your app with the latest changes from the remote branch.




</dd>

## New app merge Conflicts


When creating a new app and connecting it to a Git repository, merge conflicts may occur during the initial merge into the `master` branch. These steps are intended for self-hosted Appsmith users with access to the backend file system. If you are using a cloud-hosted version, these steps do not apply. 

1. Open and Navigate to the Git Directory: `appsmith-stacks/git-storage/<workspace-id>/<application-id>`.

<dd> 

- **Workspace ID**: Open the Appsmith UI, navigate to the workspace, and find the `workspaceId` in the browser URL, like:

<dd>

```js
https://internal.appsmith.com/applications?workspaceId=<workspace_id>
```

</dd>

- **Application ID**: Edit the app, open the Network tab in developer tools, filter by `consolidated`, and copy the `applicationId` from the response. 

</dd>


2. Ensure Git is installed on your system. If it is not already installed, use the following command to install it:

<dd>

```bash
apt-get update && apt-get install git
```

</dd>

3. Navigate to the application directory (`appsmith-stacks/git-storage/<workspace-id>/<application-id>`) and execute the following command to perform a hard reset:

<dd>

```bash
git reset origin/master --hard
```

</dd>

4. Open the app displaying the conflict. From the commit modal, click the **+** icon and select **Discard and Pull**. This action removes unsaved local changes and updates your app with the latest changes from the remote branch.

## See also

- [Revert Changes](/advanced-concepts/version-control-with-git/revert-changes)
- [Best Practices](/advanced-concepts/version-control-with-git/merging-branches)