# Resolve Merge Conflicts in Git

Merge conflicts are a regular part of working with Git, arising when changes from separate branches cannot be seamlessly merged. 

This guide provides strategies for resolving different types of merge conflicts and offers few tips to mitigate them, ensuring smoother collaboration and project management in Git.



## Understand the Conflict

Merge conflicts occur when Git is unable to automatically reconcile differences between two branches being merged. This happens because Git doesn't know which changes to prioritize, especially when conflicting changes occur in the same part of a file or when changes conflict logically.


### Types of Merge Conflicts

Merge conflicts can occur in various scenarios while working with version control systems like Git. Here are some common types of merge conflicts:

* **Conflicts during branch merging:** This is the most typical scenario where conflicts arise. When you merge changes from one branch into another, Git may encounter conflicting changes in the same file between the source and target branches. 
* **Branch behind remote:** This happens when you attempt to push changes to a remote branch but realize that your local branch is behind the remote one. In such cases, Git will reject your push request and ask you to pull the changes from the remote branch first.
* **Conflicts with upstream changes:** When you're working on a feature branch and the main branch (often called 'master' or 'main') gets updated with new changes, merging your feature branch into the main branch can lead to conflicts if there are overlapping changes.
* **Conflicts with submodule changes:** If your repository contains submodules (nested Git repositories within a Git repository), conflicts may arise if the submodule references in the parent repository are updated differently in different branches.
* **Conflicts in pull requests:** When collaborating with others using pull requests, conflicts can occur when the changes proposed in the pull request cannot be automatically merged into the target branch due to conflicting changes.
* **Conflicts with file renaming/moving:** If a app entity is renamed or moved in one branch while another branch contains modifications to the same file under its old name or location, conflicts may arise during merging.


### Types of Resolutions
There are four primary ways to resolve merge conflicts:

* **Keep one version:** You can choose to prioritize changes from one developer over the other, effectively discarding the conflicting changes from the other version.
* **Keep both versions:** Merge conflicting changes by manually selecting lines or sections from each version, incorporating both developers' modifications into the final version.
* **Custom resolution:** Write your own resolution to address the conflict, crafting a solution that combines, modifies, or replaces conflicting changes according to project requirements.
* **Discard both versions**: Opt to discard both sets of conflicting changes entirely, reverting the file(s) to their pre-conflict state.

## Resolve Merge Conflicts


### Resolve via Interface
Resolving conflicts via the Git interface is recommended when conflicts involve a small number of files with straightforward changes.


1. Once you have committed the changes to a particular branch, go to your Git provider and raise a Pull Request. For example, if you encounter merge conflicts while merging branch `b1` into `b2`, raise a PR with the base branch set as `b2`.

2. Scroll down to the bottom of the PR page and click the **Resolve conflicts** button. If the resolve button is disabled, you need to resolve using the command-line interface to resolve conflicts.

<dd>

<ZoomImage src="/img/conflicts-git-ui.png" alt="" caption=""/>

</dd>

3. You can see a list of files and pages with merge conflicts. Select a conflicted file/page to begin resolving conflicts.


4. In the editor, you can see the lines where the conflicts have occurred:

<dd>

The conflict markers used by Git are `<<<<<<<`, `=======`, and `>>>>>>>.` The code between `<<<<<<<` and `=======` includes your local changes that haven't been pushed to the remote repository yet. The code between `=======` and `>>>>>>>` contains changes from the remote repository or another branch.

```js
<<<<<<< HEAD  // Changes from the local
 "totalRecordsCount": "{{Total_record_movies1.data.n}}", 
=======  // Separator for conflict resolution
 "totalRecordsCount": 0, 
>>>>>>> feature  // End of changes from the feature branch
```
</dd>

5. Decide which version to keep based on your project needs. 

<dd>

For example, if the dynamic retrieval of data is crucial for the app, keep the line `totalRecordsCount": "{{Total_record_movies1.data.n}}`,  and remove the other version `totalRecordsCount": 0`, along with the conflict markers.

</dd>



6. If other files also show conflicts, follow the same steps as described earlier for each file. In some situations, you might need to retain both sets of changes from a conflict. If that's the case, you can keep both lines from the conflicting sections, making sure their integration preserves the code’s functionality and integrity.

7. After resolving all conflicts in all files and ensuring that the changes are correctly edited, click on **Commit merge** in the top right corner of your version control system’s interface. 

8. Merge the pull request and pull changes into your Appsmith App.



### Resolve Merge Conflicts via Command Line

Resolving merge conflicts through the command line is a method suited for handling complex conflicts or when precise control is needed over the merging process. Many popular code editors have interfaces for resolving a merge conflict when you try to merge locally, providing a visual aid to complement the command-line tools.

This approach allows you to directly edit the files in conflict and decide manually which changes to keep, which can be particularly useful in large projects or when merging significant changes.
Many popular code editors have interfaces for resolving a merge conflict when you try to merge locally.


--------------------------------------------------



### Conflicts during branch merging

This error typically occurs when attempting to merge branches in Git, and it indicates that there are conflicting changes between the source and target branches. These conflicts can arise when integrating changes from one branch to another, typically due to conflicting modifications in the same application entities. 

Conflicts during branch merging: When merging changes from one branch into another, conflicts may arise if changes in the same file conflict between the source and target branches. To resolve:
Manually open the conflicted file(s) in a text editor.
Identify and edit the conflicting sections to integrate desired changes.
Save the file(s) and mark conflicts as resolved.
Stage the changes and commit them to complete the merge.
Branch behind remote: Occurs when attempting to push changes to a remote branch while the local branch is behind. To resolve:
Pull the latest changes from the remote branch using git pull.
Resolve any conflicts that arise during the pull process.
Push the changes to the remote branch after it is up to date.
Conflicts with upstream changes: Happens when merging a feature branch into the main branch, causing conflicts with new changes on the main branch. To resolve:
Fetch the latest changes from the main branch using git fetch.
Merge the fetched changes into the feature branch using git merge.
Resolve any conflicts that occur during the merge process.
Conflicts with submodule changes: Arise when changes to submodules conflict between branches. To resolve:
Navigate to the submodule directory and update it to the appropriate commit or branch.
Resolve any conflicts within the submodule itself.
Update the parent repository to reflect the resolved submodule state.
Conflicts in pull requests: Occur when proposed changes cannot be automatically merged due to conflicts with the target branch. To resolve:
Review the conflicting files in the pull request interface.
Manually resolve conflicts within the interface by selecting the desired changes from each conflicting file.
Commit the resolved changes and complete the pull request.
Conflicts with file renaming/moving: Arise when a file is renamed or moved in one branch while another branch contains modifications to the same file under its old name or location. To resolve:
Manually edit the conflicted file(s) to accommodate the renaming or moving changes.
Save the file(s) and mark conflicts as resolved.
Stage the changes and commit them to complete the merge.