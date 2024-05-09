import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Resolve Merge Conflicts in Git

Merge conflicts are a regular part of working with Git, arising when changes from separate branches cannot be merged. This page provides strategies for resolving different types of merge conflicts, ensuring smoother collaboration and project management in Git.



### Resolve via Pull Request

This method allows you to resolve merge conflicts via Git (Pull Request), ideally suited for situations involving a small number of files or straightforward changes. The steps may vary depending on your Git service provider; please refer to the documentation of your provider for specific instructions.


1. Once you have made changes to your Appsmith app, you might encounter merge conflicts in the Appsmith UI when you try to pull changes or when you try to merge changes.


2. Based on the nature of your conflict, raise a Pull request for your source branch, targeting the destination branch where you intend to merge the changes.

<dd>

<Tabs groupId="method">
  <TabItem value="separate" label="Branch Merge Conflicts">

<dd>

   <ZoomImage src="/img/1-merge-error-git.png" alt="" caption=""/>

   </dd>
   
If you're working on branch `feature-development` and want to merge changes into `staging`, and you are facing conflicts in the Appsmith UI. In this case, you can raise a Pull request for your `feature-development` branch on your Git provider, targeting the `staging` branch for merging.


  </TabItem>
  <TabItem value="Remote" label="Remote Branch Conflicts">

  If you're working on the `feature-update` branch and someone else pushes changes to the remote counterpart of the same branch, you may encounter conflicts if both have edited the same files. In such cases, instead of committing and pushing directly which risks overriding remote changes and potentially losing important files.

  <dd>

   <ZoomImage src="/img/1branch-issue-git.png" alt="" caption=""/>

   </dd>


   - Create a new branch from your local branch. For example, if your branch name is `feature-update`, then set the new branch to `feature-update-fix`. 

   - Raise a pull request from the `feature-update-fix` branch against the original `feature-update` branch.

  </TabItem>
</Tabs>





</dd>


2. Scroll down to the bottom of the PR page and click the **Resolve conflicts** button. If the resolve button is disabled, you need to resolve using the command-line interface to resolve conflicts.

<dd>

<ZoomImage src="/img/conflicts-git-ui.png" alt="" caption=""/>

</dd>

3. You can see a list of files and pages with merge conflicts. Select a conflicted file/page to begin resolving conflicts.


4. In the editor, you can see the lines where the conflicts have occurred:

<dd>

The conflict markers used by Git are `<<<<<<<`, `=======`, and `>>>>>>>.` 

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


1. Clone your App repository to your local system and open it in any code editor.

2. Switch to the branch where you want to resolve the change:

<dd>

```js
git checkout <branch-name>
```

</dd>

3. Merge the branch; for example, if you want to merge `b1` into `b2`, use:

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

