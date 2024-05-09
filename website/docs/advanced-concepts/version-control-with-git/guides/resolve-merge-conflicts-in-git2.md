import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Resolve Merge Conflicts in Git

Merge conflicts are a regular part of working with Git, arising when changes from separate branches cannot be merged. 

This guide provides strategies for resolving different types of merge conflicts, ensuring smoother collaboration and project management in Git.



## Conflicts when merging branches

These conflicts can arise when integrating changes from one branch to another, typically due to conflicting modifications in the same application entities. 


<dd>

<ZoomImage src="/img/merge-error-git.png" alt="" caption=""/>

</dd>


<Tabs>
  <TabItem value="pr" label="Resolve via PR Interface" default>
   
1. Once you have committed the changes to a particular branch, go to your Git provider and raise a Pull Request. For example, if you encounter merge conflicts while merging branch `b1` into `b2`, raise a PR.

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


  </TabItem>
  <TabItem value="cli" label="Resolve via CLI">
   This approach allows you to directly edit the files in conflict and decide manually which changes to keep, which can be particularly useful in large projects or when merging significant changes.
Many popular code editors have interfaces for resolving a merge conflict when you try to merge locally.


1. Clone your App repository to your local system and open it in any code editor.

2. Switch to the branch where you want to resolve the change:

<dd>

```js
git checkout <branch-name>
```

</dd>

3. Ensure you are on the target branch and it is up to date:

<dd>

```js
git pull
```

</dd>

4. Merge your feature branch into the target branch:

<dd>

*Example:* if you want to merge `b1` into `b2`, use:

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

  </TabItem>
</Tabs>

## Update Your Local Branch/ Branch behind remote

If someone else has pushed changes to the same branch on the remote repository that you are working on, and particularly if you are both editing the same files, you might find your local branch falls behind the remote branch. This discrepancy can lead to conflicts when you try to push your changes.

 In such cases, you can do the following:

- You can commit your changes and push without pulling the latest updates, you risk overriding the remote changes. This could result in important files being deleted or lost.

- You can create a new branch from your local and resolve conflicts manually, ensuring that no code or files are overridden in the main branch, thereby preserving all changes.


<dd>

<ZoomImage src="/img/branch-issue-git.png" alt="" caption=""/>

</dd>




<Tabs>
  <TabItem value="pr" label="Resolve via PR Interface" default>
    Follow these steps to see how to resolve conflicts in such scenarios, where both remote and local changes are important, and you want to manually fix them.

1. Open your Appsmith app and create a new branch from your local branch. For example, if your branch name is `feature-update`, then rename the new branch to `feature-update-fix`.

2. Commit the changes into `feature-update-fix` and raise a Pull request against the original branch(`feature-update`).

3. Scroll down to the bottom of the PR page and click the **Resolve conflicts** button. If the resolve button is disabled, you need to resolve using the command-line interface to resolve conflicts.

4. You can see a list of files and pages with merge conflicts. Select a conflicted file/page to begin resolving conflicts.


5. In the editor, you can see the lines where the conflicts have occurred:

<dd>

The conflict markers used by Git are `<<<<<<<`, `=======`, and `>>>>>>>.` The code between `<<<<<<<` and `=======` includes your local changes that haven't been pushed to the remote repository yet. The code between `=======` and `>>>>>>>` contains changes from the remote repository or another branch.

```js
<<<<<<< feature-update-fix
 "totalRecordsCount": "{{Total_record_movies1.data.n}}", 
=======  // Separator for conflict resolution
 "totalRecordsCount": 0, 
>>>>>>> feature-update  // End of changes from the feature branch
```

</dd>


5. Decide which version to keep based on your project needs. 

6. If other files also show conflicts, follow the same steps as described earlier for each file. In some situations, you might need to retain both sets of changes from a conflict. If that's the case, you can keep both lines from the conflicting sections, making sure their integration preserves the code’s functionality and integrity.

7. After resolving all conflicts in all files and ensuring that the changes are correctly edited, click on **Commit merge** in the top right corner of your version control system’s interface. 

8. Merge the pull request into the original branch(`feature-update`).

9. In your Appsmith app, switch to the original branch (`feature-update`). Click on the **+** plus icon, then select **Discard and Pull** to discard any local changes and pull the latest updates from the remote repository.


  </TabItem>
  <TabItem value="cli" label="Resolve via CLI">
To manually resolve conflicts using the command-line interface (CLI) when both remote and local changes are crucial, follow these steps. This approach gives you full control over the merge process and is particularly useful when you're dealing with complex code bases or need precise conflict resolution.

1. Open your Appsmith app and create a new branch from your local branch. For example, if your branch name is `feature-update`, then rename the new branch to `feature-update-fix`.

2. Commit the changes into `feature-update-fix` and raise a Pull request against the original branch(`feature-update`).

3. Clone your App repository to your local system and open it in any code editor.

4. Switch to the new `feature-update-fix` Branch.

5. Merge your `feature-update-fix` branch into the original branch:

<dd>

```js
git merge feature-update
```

</dd>


6. If there are conflicts, Git pauses the merge and lists the files that need to be resolved. Open these files in your code editor and look for the conflict markers `<<<<<<<,` `=======,` and `>>>>>>>.` These markers delineate the differing blocks of code that Git couldn't merge automatically, highlighting the areas that require your attention for resolution.

7. Decide which version to keep based on your project needs. You can either manually remove the conflict markers and update the code, or select one of the options provided and modify the changes as needed.

8. After resolving the conflicts, commit your changes by running the following command to automatically stage and commit:

<dd>

```js
git commit -am "Your message"
```

</dd>

9. Push and merge `feature-update-fix` into `feature-update`.

10. In your Appsmith app, switch to the original branch (`feature-update`). Click on the **+** plus icon, then select **Discard and Pull** to discard any local changes and pull the latest updates from the remote repository.




  </TabItem>

</Tabs>