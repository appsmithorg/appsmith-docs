import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Resolve Merge Conflicts in Git

 This guide offers strategies for resolving these conflicts to ensure smoother collaboration and project management in Git. The specific steps may vary depending on your Git service provider and local code editor; please refer to the documentation of your provider for specific instructions.

You can encounter merge conflicts in two cases:

* When merging two separate branches.
* When updating changes to a local or remote branch.

## Branch Merge Conflicts

Merge conflicts occur when changes from different branches overlap, leading to conflicts that need manual resolution.

<ZoomImage src="/img/seperate-conflicts.png" alt="" caption=""/>


1. To resolve these conflicts, raise a pull request for your source branch, targeting the destination branch where you intend to merge the changes.


<dd>

*Example:*

If you're working on the `feature` branch and want to merge changes into `staging`, but are facing conflicts, you can raise a pull request for your `feature` branch on your Git provider, targeting the `staging` branch for merging.

</dd>

 2. Once the PR is created, scroll down to the bottom of the PR page, and click the **Resolve conflicts** button to resolve conflicts directly from the pull request interface.


<dd>

If the resolve button is disabled, you need to clone the Git repository to your local machine and resolve the conflicts using the command-line interface. If the resolve button is disabled, you need to clone the Git repository to your local machine and resolve the conflicts using the command-line interface.  Alternatively, you can use [GitHub.dev](https://github.com/github/dev) to resolve conflicts directly from your browser.

For more information, see how to resolve a merge conflict on [GitHub](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github), [GitLab](https://docs.gitlab.com/ee/user/project/merge_requests/conflicts.html#methods-of-resolving-conflicts), [Bitbucket](https://support.atlassian.com/bitbucket-cloud/docs/resolve-merge-conflicts/).


</dd>

3. After resolving all conflicts in all files and ensuring that the changes are correctly edited, click on **Commit merge**, and Merge the pull request.

4. Update your Appsmith app by pulling the changes.

<dd>

*Example:*

If you are facing issues merging from a `feature` branch to `staging`, then ensure you are on the `staging` branch in your Appsmith app and pull the changes there.


</dd>



## Remote Branch Pull Conflicts

These conflicts arise when changes in your local branch cannot be directly merged with changes in the remote branch. For example, If you're working on the `feature` branch and someone else pushes changes to the remote counterpart of the same branch, you may encounter conflicts if both have edited the same files. 

<ZoomImage src="/img/remote-Conflicts.png" alt="" caption=""/>


1. Create a new branch from the conflicted branch and raise a Pull Request.


<dd>

*Example:*

 Create a new branch from your local `feature` branch, name it `feature-fix`, and then raise a pull request from this new branch against the original `feature` branch.


</dd>



2. Once the PR is created, scroll down to the bottom of the PR page, and click the **Resolve conflicts** button to resolve conflicts directly from the pull request interface.


<dd>

If the resolve button is disabled, you need to clone the Git repository to your local machine and resolve the conflicts using the command-line interface.  Alternatively, you can use [GitHub.dev](https://github.com/github/dev) to resolve conflicts directly from your browser.


For more information, see how to resolve a merge conflict on [GitHub](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github), [GitLab](https://docs.gitlab.com/ee/user/project/merge_requests/conflicts.html#methods-of-resolving-conflicts), [Bitbucket](https://support.atlassian.com/bitbucket-cloud/docs/resolve-merge-conflicts/).




</dd>


3. After resolving all conflicts in all files and ensuring that the changes are correctly edited, click on **Commit merge**, and Merge the pull request.

4. In Appsmith, click **Discard and Pull** from the commit modal to update the app.



<dd>

*Example:*

If you face conflicts within the same branch due to changes made remotely, open your Appsmith app, click on the **+** icon, and click **Discard and Pull**. This discards any local changes that have not been saved and updates your app with the latest changes from the remote branch.




</dd>


## See Also

- [Revert Changes](/advanced-concepts/version-control-with-git/revert-changes)
- [Best Practices](/advanced-concepts/version-control-with-git/merging-branches)