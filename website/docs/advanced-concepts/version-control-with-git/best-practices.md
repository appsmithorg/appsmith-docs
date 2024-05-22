# Git Best Practices

Merge conflicts occur when different branches of code cannot be automatically reconciled by the version control system, causing delays and potential errors. This document provides essential best practices to help development teams avoid these conflicts, ensuring a smoother and more efficient workflow.




## Use Branching Strategy

Adopt a clear and effective branching strategy for efficient collaboration and code management in Git. For example, in a typical project setup:

- **Master Branch:** Contains the final version of the app for production; make it protected in the Git settings.
- **Development Branch:** For testing and QA; merge feature branches here and raise a PR to master after testing.
- **Feature Branches:** Individual branches for developers to work on app development; raise PRs to release branch upon completion.


Here are some key points to consider:

- Select a branching model that aligns with your team's workflow and project requirements. Popular models like GitFlow, GitHub Flow, and Trunk-Based Development offer different approaches suited for various scenarios.
- Reserve the `master` branch for production-ready code. Only merge thoroughly tested and reviewed changes into this branch to ensure stability.
- Encourage developers to create feature branches for implementing new features or fixing bugs. 
- Use release branches for preparing releases and hotfix branches for addressing critical issues in production.
- Establish a clear and consistent naming convention for branches to enhance clarity and organization. Include relevant information such as feature name, issue number, or task description in branch names.


## Keep Commits Atomic

Maintaining atomic commits is essential for a clear and manageable version history in Git. Here's how:

- Each commit should represent a single logical change or fix. Avoid mixing unrelated changes within a single commit to keep the history clean and understandable.
- Write clear and concise commit messages that explain the purpose and context of the change. A well-written message helps team members understand the intent behind each commit.




## Never Commit Directly to the Main Branch


The main branch should be reserved for production-ready code. Developers should use separate branches for each feature or improvement to maintain code stability and reduce conflicts.

- To prevent accidental commits, make the base branch protected from [Git settings](/advanced-concepts/version-control-with-git/reference/git-settings).
- Developers should create separate branches for implementing features and improvements.
- After testing, merge feature branches into the base branch via pull requests.
- Keep branches and pull requests short-lived to streamline the development process and minimize conflicts.


## Avoid editing the UI on the same page

Merge conflicts are usually caused by different developers working on the same code in the same file on separate branches and then trying to merge them. Git is not an intelligent system: it just does what you tell it to do, so it has no way of knowing which is the “correct” change to keep.


You should refrain from editing the UI on the same page, even across branches, as it often leads to conflicts. For example, moving widgets within the canvas or renaming widgets can also result in conflicts. This is because such actions can lead to changes in the underlying structure of the UI components, causing discrepancies between different branches. To minimize the risk of conflicts:

- Communicate with your teammates before making any changes to ensure coordination.
- Create new feature branches if needed to isolate UI changes and avoid conflicts.
- Consider breaking down large UI modifications into smaller tasks.


## Regularly Pull Changes

Keep your local repository up-to-date with changes from the remote counterpart to minimize conflicts and ensure smooth collaboration.


- Pull changes frequently to incorporate updates from the remote repository into your local branch.
- Merge changes from the main branch regularly into the feature branch to keep it updated with the latest developments. You can do this by clicking on the **Merge icon** at the bottom left and merging changes from the main branch to the feature branch.

## Storing secrets

“Secrets” are the credentials you use to access database, API, communication, and other services when developing and deploying your software. They must be kept secret for a reason — database and API credentials can be used to access and modify data intended to be kept private and, in the case of APIs for paid services, cost you money if somebody else gains access and decides to run up your bill.

In Appsmith, we automatically redact all credentials used to access configured datasources. They'll never enter version control if you use the in-built functionality for storing those credentials.

If you have other kinds of secrets that you would like to avoid committing to version control, you should ensure that they are retrieved from a secure location when your app is run so that they are not present in your code.