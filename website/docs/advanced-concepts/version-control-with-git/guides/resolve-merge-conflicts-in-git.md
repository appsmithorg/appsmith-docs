import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Resolve Merge Conflicts in Git

Git merge conflicts arise when changes in different or the same branches clash, requiring manual resolution due to Git's inability to automatically resolve them. The page shows you strategies for resolving different types of merge conflicts, ensuring smoother collaboration and project management in Git.

You can resolve merge conflicts in two main ways: by raising a Pull Request to handle conflicts via your Git provider's interface, or by manually resolving them in your local environment using Command-line interface. The specific steps may vary depending on your Git service provider and local code editor; please refer to the documentation of your provider for specific instructions.


1. Once you have made changes to your Appsmith app, you might encounter merge conflicts in the Appsmith when you try to pull changes, push changes or when you try to merge changes.


2. Based on the nature of your conflict, raise a Pull request for your source branch, targeting the destination branch where you intend to merge the changes.

<dd>

<dd>


***Example 1:* Separate Branch Merge Conflicts**

If you're working on the `feature` branch and want to merge changes into `staging`, but are facing conflicts in the Appsmith UI, you can raise a pull request for your `feature` branch on your Git provider, targeting the `staging` branch for merging.


   <ZoomImage src="/img/branch-issue-1.png" alt="" caption=""/>



***Example 2:* Remote Branch Conflicts**

  If you're working on the `feature-update` branch and someone else pushes changes to the remote counterpart of the same branch, you may encounter conflicts if both have edited the same files. 

Create a new branch from your local `feature-update` branch, name it `feature-update-fix`, and then raise a pull request from this new branch against the original `feature-update` branch.


   <ZoomImage src="/img/remote-issue1.png" alt="" caption=""/>


</dd>
</dd>


2. Once the PR is created, scroll down to the bottom of the PR page and click the **Resolve conflicts** button. If the resolve button is disabled, you need to resolve using the [Command Line Interface](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line). The interface and steps may vary depending on your Git service provider.

<dd>

<ZoomImage src="/img/conflicts-git-ui.png" alt="" caption=""/>

</dd>

3. From the list of files, select the conflicted file and resolve the conflicts by editing the conflicting code between the markers.

<dd>



For more information, see how to resolve a merge conflict on [GitHub](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-on-github), [GitLab](https://docs.gitlab.com/ee/user/project/merge_requests/conflicts.html#methods-of-resolving-conflicts), [Bitbucket](https://support.atlassian.com/bitbucket-cloud/docs/resolve-merge-conflicts/).
 

</dd>

4. After resolving all conflicts in all files and ensuring that the changes are correctly edited, click on **Commit merge**, and Merge the pull request.

5. Update your Appsmith app based on the resolved conflicts:

<dd>

**Example 1: Separate Branch Merge Conflicts**


If you are facing issues merging from a `feature` branch to `staging`, then ensure you are on the `staging` branch in your Appsmith app and pull the changes there.

**Example 2: Remote Branch Conflicts**


If you face conflicts within the same branch due to changes made remotely, open your Appsmith app, click on the **+** icon, and click **Discard and Pull**. This discards any local changes that have not been saved and updates your app with the latest changes from the remote branch.








</dd>


