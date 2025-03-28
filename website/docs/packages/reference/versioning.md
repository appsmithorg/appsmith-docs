# Package Version Control 

This page provides information about versioning and tagging in Packages. You can connect a Package to any Git remote repository, similar to applications. When a Package is Git-connected, you can commit changes, merge branches, and create tagged releases.

A Package repository is separate from the application's repository. If a Package is not connected to Git, the latest version is always used, and manual versioning is not available. To connect a Package to Git, see [Version Control With Git](/advanced-concepts/version-control-with-git).


## Managing Package Versions

You can manage versions of a Git-connected Package using the Commit button in the top-right corner of the interface. This opens the Commit Modal, where you can commit changes, merge branches, and release a new Package version.

If the Package is not Git-connected, the Deploy button appears instead of Commit. Deploying applies changes immediately without version control.




#### Deploy

<dd>

The Deploy section allows you to commit changes to the active Git branch. You can see Changes since the last deployment, such as updates to queries and JS modules.

- If there are uncommitted changes, they must be committed before merging or releasing.
- You can provide a commit message to describe the update.
- Clicking **Commit & Push** Changes synchronizes the latest modifications with the repository.
- The **Discard & Pull** button discards all local changes and pulls the latest updates from the remote repository.


</dd>

#### Merge

<dd>

The Merge section allows you to combine updates from a source branch into a target branch.
Before merging, ensure that both branches have the latest committed changes and that there are no merge conflicts.

- Merging incorporates updates from feature or development branches before releasing.
- If conflicts exist, Git prompts you to resolve them before completing the merge.
- After merging, the target branch reflects the latest updates.

For more details, see [How to Resolve Merge Conflicts](/advanced-concepts/version-control-with-git/commit-and-push).



</dd>

#### Release

<dd>

The Release tab allows you to tag a version based on the latest commit in the repository. This feature is built on [Git tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging) and currently applies only to Packages. The latest commit is tagged with the selected version, and uncommitted changes are not included in the release.

Version tagging allows applications to reference a specific release instead of the latest changes. It follows semantic versioning, where each increment indicates the type of update.

- **Major (1.x.x → 2.0.0)**: Indicates breaking changes that require modifications in dependent applications. For example: Removing or renaming existing functions.

- **Minor (1.0.x → 1.1.0)**: Introduces new features while maintaining backward compatibility. For example: Adding a new method without modifying existing functionality.

- **Patch (1.0.0 → 1.0.1)**: Applies bug fixes or minor improvements that do not affect functionality. For example: Resolving an error in an existing function.


</dd>


## Using Package Versions in Applications

You can select a Package version from the **Libraries** section in the **Entity Explorer** by choosing from the available options. Only Packages currently used in the application are listed. If a Package or module is not used in the application, it will not appear in the selection menu.

- **For Git-connected Packages:** You can choose from a list of available Package versions that have been released. Each version corresponds to a tagged commit, allowing you to control which version is used in your application. 

- **For Non-Git-connected Packages:** Version selection is not available, and the application always uses the latest Package version. Any updates to the Package are immediately applied without version control.






