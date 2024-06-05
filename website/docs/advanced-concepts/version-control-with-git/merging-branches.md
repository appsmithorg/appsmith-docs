# Git Best Practices


This page provides essential Git best practices to help teams avoid merge conflicts, enhance collaboration, and maintain code quality, ensuring a smoother and more efficient workflow.

## Use Branching Strategy

Implement a well-defined branching strategy to enhance collaboration and maintain code quality in Git. 

- Select a branching model that aligns with your team's workflow and project requirements. Popular models like [GitFlow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow), [GitHub Flow](https://docs.github.com/en/get-started/using-github/github-flow), and [Trunk-Based Development](https://www.atlassian.com/continuous-delivery/continuous-integration/trunk-based-development) offer different approaches suited for various scenarios. 

- Create different feature branches from the `Staging` branch and merge them into `Staging` regularly through pull requests.

- Create a `Staging` branch for testing features. Once a milestone is completed, merge the `Staging` branch into the `master` branch via a pull request.

- Reserve the `master` branch for production-ready code. Only merge thoroughly tested and reviewed changes into this branch to ensure stability.

- To prevent accidental commits, make the `master` branch protected from [Git settings](/advanced-concepts/version-control-with-git/reference/git-settings).

- For large-scale deployment, it is recommended to use a multi-instance setup. For more information, see [Multi environments using Git](/advanced-concepts/version-control-with-git/environments-with-git).

- If you have configured a multi-instance setup, manually pull the `master` branch in the *Production* instance to deploy changes. If you are an enterprise user, set up [Git CD](/advanced-concepts/version-control-with-git/cd-with-git) to automatically pull and deploy the `master` branch.


- Keep branches and pull requests short-lived to streamline the development process and minimize conflicts.







## Avoid Merge Conflicts

While working with Git, you may face merge conflicts. To avoid these conflicts, follow these best practices:



- Break down changes into small, self-contained updates that address a single concern. Each commit should represent a single logical change or fix. 

- Multiple developers should avoid making changes to the same UI elements on the same page, even if they are working on different branches

- Pull changes frequently to incorporate updates from the remote repository into your local branch. 

- Merge changes from the `master` branch regularly into the `feature` branch to keep it updated with the latest developments. You can do this by clicking on the **Merge icon** at the bottom left and merging changes from the `master` branch to the `feature` branch.

- Divide work among developers so each person is responsible for different parts of the app to avoid overlap and conflicts.

- Communicate with your teammates before making any changes to ensure coordination.


For more information, see [Resolve Merge Conflicts in Git](/advanced-concepts/version-control-with-git/commit-and-push).










