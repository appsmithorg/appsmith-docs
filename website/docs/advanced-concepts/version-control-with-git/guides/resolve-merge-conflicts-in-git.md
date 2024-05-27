import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Resolve Merge Conflicts in Git

Git merge conflicts happen when changes in different or the same branches overlap, requiring manual resolution. This guide offers strategies for resolving these conflicts to ensure smoother collaboration and project management in Git.

The specific steps may vary depending on your Git service provider and local code editor; please refer to the documentation of your provider for specific instructions.

1. You can encounter merge conflicts in two cases: when merging two separate branches or when pulling or pushing changes to a remote branch. 

<dd>

To resolve these conflicts, raise a pull request for your source branch, targeting the destination branch where you intend to merge the changes.


***Case 1:* Separate Branch Merge Conflicts**

If you're working on the `feature` branch and want to merge changes into `staging`, but are facing conflicts in the Appsmith UI, you can raise a pull request for your `feature` branch on your Git provider, targeting the `staging` branch for merging.


   <ZoomImage src="/img/branch-issue-1.png" alt="" caption=""/>



***Case 2:* Remote Branch Conflicts**

  If you're working on the `feature` branch and someone else pushes changes to the remote counterpart of the same branch, you may encounter conflicts if both have edited the same files. 

Create a new branch from your local `feature` branch, name it `feature-fix`, and then raise a pull request from this new branch against the original `feature` branch.


   <ZoomImage src="/img/remote-issue1.png" alt="" caption=""/>


</dd>

2. Once the PR is created, scroll down to the bottom of the PR page, and click the **Resolve conflicts** button to resolve conflicts directly from the pull request interface.


<dd>


If the resolve button is disabled, you need to resolve the conflicts using your [local Git environment](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line). The interface and steps may vary depending on your Git service provider. For more information, see how to resolve a merge conflict on [GitHub](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github), [GitLab](https://docs.gitlab.com/ee/user/project/merge_requests/conflicts.html#methods-of-resolving-conflicts), [Bitbucket](https://support.atlassian.com/bitbucket-cloud/docs/resolve-merge-conflicts/).

<ZoomImage src="/img/conflicts-git-ui.png" alt="" caption=""/>




</dd>


3. After resolving all conflicts in all files and ensuring that the changes are correctly edited, click on **Commit merge**, and Merge the pull request.

4. Update your Appsmith app based on the resolved conflicts:

<dd>

**Case 1: Separate Branch Merge Conflicts**


If you are facing issues merging from a `feature` branch to `staging`, then ensure you are on the `staging` branch in your Appsmith app and pull the changes there.

**Case 2: Remote Branch Conflicts**


If you face conflicts within the same branch due to changes made remotely, open your Appsmith app, click on the **+** icon, and click **Discard and Pull**. This discards any local changes that have not been saved and updates your app with the latest changes from the remote branch.








</dd>


