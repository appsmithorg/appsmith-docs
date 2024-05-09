import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Resolve Merge Conflicts in Git

Merge conflicts are a regular part of working with Git, arising when changes from separate branches cannot be merged. This page provides strategies for resolving different types of merge conflicts, ensuring smoother collaboration and project management in Git.



### Resolve via Pull Request

This method allows you to resolve merge conflicts via Git (Pull Request), ideally suited for situations involving a small number of files or straightforward changes. The steps may vary depending on your Git service provider; please refer to the documentation of your provider for specific instructions.


1. Once you have made changes to your Appsmith app, you might encounter merge conflicts in the Appsmith when you try to pull changes or when you try to merge changes.


2. Based on the nature of your conflict, raise a Pull request for your source branch, targeting the destination branch where you intend to merge the changes.

<dd>

<dd>


***Example 1:* Separate Branch Merge Conflicts**

If you're working on branch `feature-development` and want to merge changes into `staging`, and you are facing conflicts in the Appsmith UI. In this case, you can raise a Pull request for your `feature-development` branch on your Git provider, targeting the `staging` branch for merging.




   <ZoomImage src="/img/branch-issue-1.png" alt="" caption=""/>



***Example 2:* Remote Branch Conflicts**

  If you're working on the `feature-update` branch and someone else pushes changes to the remote counterpart of the same branch, you may encounter conflicts if both have edited the same files. In such cases, instead of committing and pushing directly which risks overriding remote changes and potentially losing important files.

Create a new branch from your local `feature-update` branch, name it `feature-update-fix`, and then raise a pull request from this new branch against the original `feature-update` branch.


   <ZoomImage src="/img/remote-issue1.png" alt="" caption=""/>


</dd>
</dd>


2. Scroll down to the bottom of the PR page and click the **Resolve conflicts** button. If the resolve button is disabled, you need to resolve using the [Command Line Interface](#resolve-via-command-line-interface). 

<dd>

<ZoomImage src="/img/conflicts-git-ui.png" alt="" caption=""/>

</dd>

3. You can see a list of files with merge conflicts. Select a conflicted file to begin resolving conflicts.


4. In the editor, you can see the lines where the conflicts have occurred. The conflict markers used by Git are `<<<<<<<`, `=======`, and `>>>>>>>.` 

<dd>


- The code from `<<<<<<<` to `=======` represents changes made in your source branch that have not yet been pushed to the remote repository.
- The code from `=======` to `>>>>>>>` includes changes from the destination branch or another remote repository branch.

```js
<<<<<<< HEAD  // Changes from the local
 "totalRecordsCount": "{{Total_record_movies1.data.n}}", 
=======  // Separator for conflict resolution
 "totalRecordsCount": 0, 
>>>>>>> feature  // End of changes from the feature branch
```
</dd>

5. Decide which version to keep based on your project needs. You can:

<dd>

- Remove one version and keep the other.
- Keep both versions, or remove both versions.
- Create a custom one to best fit the requirements of your project.

</dd>


6. After resolving all conflicts in all files and ensuring that the changes are correctly edited, click on **Commit merge**. 

7. Merge the pull request.

8. Update your Appsmith app based on the resolved conflicts:

<dd>

**Example 1: Separate Branch Merge Conflicts**


If you encounter conflicts from merging separate branches, after merging the PR, pull the changes into your Appsmith app in the destination branch.  If you are facing issues merging from a `feature` branch to `staging`, then ensure you are on the `staging` branch in your Appsmith app and pull the updates there.

**Example 2: Remote Branch Conflicts**


If you face conflicts within the same branch due to changes made remotely, open your Appsmith app, click on the **+** icon, and click **Discard and Pull**. This discards any local changes that have not been saved and updates your app with the latest changes from the remote branch.








</dd>


### Resolve via Command-line interface

Resolving merge conflicts through the command line is a method suited for handling complex conflicts or when precise control is needed over the merging process. Many popular code editors have interfaces for resolving a merge conflict, providing a visual aid to complement the command-line tools.


1. Clone your App repository to your local system and open it in any code editor.

2. Switch to the destination branch where you want to resolve the change:

<dd>

```js
git checkout <branch-name>
```

</dd>

3. Merge the branch based on our conflict; if you're merging changes from a feature-development branch into a main branch, switch to the main

<dd>

*Example:*



```js
git checkout b2
git merge b1
```

</dd>

4. If there are conflicts, Git pauses the merge and lists the files that need to be resolved. Open these files in your code editor and look for the conflict markers `<<<<<<<,` `=======,` and `>>>>>>>.` These markers delineate the differing blocks of code that Git couldn't merge automatically, highlighting the areas that require your attention for resolution.

5. Decide which version to keep based on your project needs. You can either manually remove the conflict markers and update the code, or select one of the options provided and modify the changes as needed.

<dd>

<ZoomImage src="/img/vs-code-git.png" alt="" caption=""/>

</dd>

6. After resolving the conflicts, commit your changes by running the following command to automatically stage and commit:


<dd>

```js
git commit -am "Your message"
```

</dd>

7. Push your changes to the remote branch:

<dd>

```js
git push
```


</dd>

8. Pull the changes into your Appsmith App by clicking the pull icon located on the left side of the bottom bar.

