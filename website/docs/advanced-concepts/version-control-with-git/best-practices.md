# Preventing Merge Conflicts: Best Practices

Merge conflicts occur when different branches of code cannot be automatically reconciled by the version control system, causing delays and potential errors. This document provides essential best practices to help development teams avoid these conflicts, ensuring a smoother and more efficient workflow.






## Understanding Merge Conflicts

Merge conflicts arise when changes made to different branches of code cannot be automatically merged by the version control system. These conflicts typically occur due to the following reasons:

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


## Preventing Merge Conflicts in Appsmith


#### Never Commit Directly to the Main Branch

The main branch should be reserved for code that is ready to ship. All code should go through a full process of ideation, planning, implementation, and testing before being merged into the main branch. This helps ensure that only stable, well-reviewed code is deployed, reducing the risk of conflicts and bugs.

#### Use Feature Branches

Developers should work on different branches for each new feature or improvement. This practice enables individual work streams to proceed without interfering with each other. By working in isolation, developers can focus on their specific tasks, run tests independently, and ensure their changes do not impact others' work until they are fully ready. 

Once the feature or improvement is complete and has been tested in the development environment, the changes should be merged into the main branch via a pull request. 


#### Keep Branches and Pull Requests Short-Lived

Keeping branches and pull requests short-lived means making small, incremental changes and merging them back into the main branch frequently. This is a best practice because it reduces the risk of merge conflicts, makes code reviews faster and more manageable, and helps maintain a stable and up-to-date main branch. By integrating changes regularly, teams can respond to feedback quicker, ensure higher code quality, and streamline the development process.

#### Avoid editing the UI on the same page