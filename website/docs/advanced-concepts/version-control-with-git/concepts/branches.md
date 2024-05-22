
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


- **Simultaneous Changes on the Same Branch or Application:** When multiple developers work on the same branch or within the same Appsmith application and make changes to the same lines of code or entities, merge conflicts are likely. For instance, if two developers edit the same widget or API configuration concurrently, merging their changes can result in conflicts.

- **Editing and Deleting the Same Entity:** Conflicts arise when one developer deletes an entity (like a widget, API, or query) while another developer makes edits to it. If both try to merge their changes to the same branch, Git cannot reconcile the deletion with the modifications.

- **Deleting and Editing the Same Line:** Similar to entity conflicts, if one developer deletes a line of code while another edits it, a conflict will occur when attempting to merge both sets of changes into the same branch.

- **Cherry-Picking Commits:** When a developer cherry-picks a commit (selecting a specific commit from one branch and applying it to another), conflicts can happen if the cherry-picked changes overlap with existing changes in the target branch.

- **Rebasing Branches:** Rebasing involves moving a sequence of commits to a new base commit. Conflicts occur if the rebased commits introduce changes that conflict with existing changes in the target base.

- **Branch Behind Remote:** When your local branch is behind the remote branch and you attempt to push changes, Git will reject the push. You need to pull the latest changes from the remote branch first, which may lead to conflicts if there are overlapping modifications.

- **Conflicts with Upstream Changes:** If you're working on a feature branch and the main branch (e.g., 'master' or 'main') gets updated with new changes, merging your feature branch into the main branch can lead to conflicts if there are overlapping changes.

- **Conflicts with Submodule Changes:** In repositories with submodules (nested repositories within a repository), conflicts can arise if submodule references in the parent repository are updated differently across branches.

- **Conflicts in Pull Requests:** When collaborating through pull requests, conflicts occur when the proposed changes cannot be automatically merged into the target branch due to conflicting modifications.

- **File Renaming/Moving Conflicts:** If an entity (such as a widget, API, or query) is renamed or moved in one branch while another branch contains modifications to the same entity under its old name or location, conflicts will arise during merging.

