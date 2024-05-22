# Git Best Practices

Merge conflicts occur when different branches of code cannot be automatically reconciled by the version control system, causing delays and potential errors. This document provides essential best practices to help development teams avoid these conflicts, ensuring a smoother and more efficient workflow.


 <ZoomImage
        src="/img/gitflow.webp"
        alt=""
        caption=""
        lazyLoad="true"
/>


## Use Branching Strategy

Adopt a clear and effective branching strategy for efficient collaboration and code management in Git. Here are some key points to consider:

- Select a branching model that aligns with your team's workflow and project requirements. Popular models like GitFlow, GitHub Flow, and Trunk-Based Development offer different approaches suited for various scenarios. For example;
    - **Master Branch:** Contains the final version of the app for production; make it protected in the Git settings.
    - **Development Branch:** For testing and QA; merge feature branches here and raise a PR to master after testing.
    - **Feature Branches:** Individual branches for developers to work on app development; raise PRs to Development branch upon completion.

- Reserve the `master` branch for production-ready code. Only merge thoroughly tested and reviewed changes into this branch to ensure stability.
- Encourage developers to create feature branches for implementing new features or fixing bugs. 

- Use release branches for preparing releases and hotfix branches for addressing critical issues in production.

- Establish a clear and consistent naming convention for branches to enhance clarity and organization. Include relevant information such as feature name, issue number, or task description in branch names.

- This is also useful if you are self-hosting Appsmith and want to stick with an older platform version in production while you test that your apps are compatible with an updated release. You can create a new branch, fire up a Docker container running the latest version of Appsmith, and test and tweak it without affecting your production deployment.


## Keep Commits Atomic

Maintaining atomic commits is essential for a clear and manageable version history in Git. Here's how:

- Each commit should represent a single logical change or fix. Avoid mixing unrelated changes within a single commit to maintain a clean and understandable history.

- Write clear and concise commit messages that explain the purpose and context of the change. This helps team members understand the intent behind each commit. For example, a good commit message might be: "Connected table widget to user data."

- Avoid committing temporary or debugging changes that are not meant to be part of the final codebase. These can clutter the history and make it harder to track the evolution of the code.



## Never Commit Directly to the Main Branch


The main branch should be reserved for production-ready code. Developers should use separate branches for each feature or improvement to maintain code stability and reduce conflicts.

- To prevent accidental commits, make the base branch protected from [Git settings](/advanced-concepts/version-control-with-git/reference/git-settings).

- Developers should create separate branches for implementing features and improvements.

- After testing, merge feature branches into the base branch via pull requests.

- Keep branches and pull requests short-lived to streamline the development process and minimize conflicts.


## Avoid editing the UI on the same page

You should avoid editing the UI on the same page, even across branches, as it often leads to conflicts. For example, moving widgets within the canvas or renaming widgets can also result in conflicts. This is because such actions can lead to changes in the underlying structure of the UI components, causing discrepancies between different branches. To minimize the risk of conflicts:

- Communicate with your teammates before making any changes to ensure coordination.

- Create new feature branches if needed to isolate UI changes and avoid conflicts.

- Consider breaking down large UI modifications into smaller tasks.


## Regularly Pull Changes

Keep your local repository up-to-date with changes from the remote counterpart to minimize conflicts and ensure smooth collaboration.


- Pull changes frequently to incorporate updates from the remote repository into your local branch.

- Merge changes from the main branch regularly into the feature branch to keep it updated with the latest developments. You can do this by clicking on the **Merge icon** at the bottom left and merging changes from the main branch to the feature branch.

## Storing secrets

Properly managing secrets is crucial for maintaining the security of your application. Secrets include credentials used to access databases, APIs, communication services, and other sensitive information. Here are some best practices for handling secrets in your projects:

- In Appsmith, credentials used to access configured datasources are automatically redacted and will never enter version control. 

- If you have other types of secrets that need to be kept out of version control, ensure they are retrieved from a secure location at runtime so they are not present in your code.

- Store secrets in a secure location outside of your version control system. For example, use environment variables or dedicated secret management tools like Secrets Manager, Azure Key Vault, or HashiCorp Vault.
 


 ## Push Your Code to a Remote Repository Often

Regularly push your Appsmith code to a remote repository to ensure secure offsite backups and enhance collaboration. This practice helps protect against data loss due to hardware failures or other emergencies and keeps your team synchronized with the latest project updates, minimizing conflicts and ensuring efficient development.