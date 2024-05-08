
## Understand the Conflict

Merge conflicts occur when Git is unable to automatically reconcile differences between two branches being merged. This happens because Git doesn't know which changes to prioritize, especially when conflicting changes occur in the same part of a file or when changes conflict logically.

*Example:* 

<dd>

Imagine there are two developers, John and Alex, working on the same branch. John pulls changes from the remote repository and commits some modifications, such as adding a Table widget displaying user data. Meanwhile, Alex, without syncing his local repository with the remote, starts working on the same page and adds a Table with the same name but connected with movie data.

In this scenario, Alex's action of not syncing with the remote repository means he's unaware of John's recent changes. Hence, both developers unintentionally work on the same page, resulting in conflicting modifications. Git is not able to automatically resolve the conflict because it can't determine which changes should take precedence.

In such a situation, Alex would need to manually resolve the conflict by reviewing the changes, and he can take one action from the following:


* Keep Alex's changes and remove John's
* Keep John's changes and remove Alex's
* Keep both sets of changes
* Remove both changes

</dd>

### Types of Merge Conflicts

When working with Git, different scenarios can lead to merge conflicts. Here are the primary types:

#### Entity Conflicts

These conflicts occur when two developers make changes to the same application entities within Appsmith, such as pages, widgets, or queries. When merging branches, Git may encounter conflicts if modifications conflict with each other, requiring manual resolution by developers.

#### Rename/Move Conflict:
 Similar to conflicts in traditional code repositories, rename/move conflicts in Appsmith occur when one developer renames or moves an application entity (e.g., renaming a page or moving a widget to a different location) while another developer makes conflicting changes to the same entity. Resolving these conflicts involves deciding which changes to retain or merge.

#### Submodule Conflict: 
In larger Appsmith projects or projects with dependencies, conflicts can arise with submodules. These conflicts occur when changes are made to submodules by multiple developers simultaneously, leading to merge conflicts during branch integration. Resolving submodule conflicts involves ensuring consistency across submodule references and synchronizing changes between branches.

#### Branch Behind Remote: 
This conflict occurs when a developer attempts to merge changes into their branch while their branch is behind the remote repository. Git detects the difference between the local and remote branches and requires the developer to pull the latest changes from the remote repository before merging. Resolving this conflict involves pulling the latest changes from the remote repository and then merging them into the local branch.

Merge conflicts can occur in various scenarios while working with version control systems like Git. Here are some common types of merge conflicts:
