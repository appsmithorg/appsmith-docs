# Best Practices


This page provides essential Git best practices to help teams avoid merge conflicts, ensuring a smoother and more efficient workflow.


## Use Branching Strategy

Implement a well-defined branching strategy to enhance collaboration and maintain code quality in Git. Key points to consider:

 <ZoomImage
        src="/img/gitflow.webp"
        alt=""
        caption=""
        lazyLoad="true"
/>


- Select a branching model that aligns with your team's workflow and project requirements. Popular models like [GitFlow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow), [GitHub Flow](https://docs.github.com/en/get-started/using-github/github-flow), and [Trunk-Based Development](https://www.atlassian.com/continuous-delivery/continuous-integration/trunk-based-development) offer different approaches suited for various scenarios. 

- Developers should create separate `feature` branches for implementing features and improvements.

- Create a `staging` branch for testing features. Merge feature branches into this branch and raise pull requests to `master` after testing.

- Reserve the `master` branch for production-ready code. Only merge thoroughly tested and reviewed changes into this branch to ensure stability.

- To prevent accidental commits, make the `master` branch protected from [Git settings](/advanced-concepts/version-control-with-git/reference/git-settings).

- If you are self-hosting Appsmith and want to stick with an older platform version in `production` while you test that your apps are compatible with an updated `release`. You can create a new branch, fire up a Docker container running the latest version of Appsmith, and test and tweak it without affecting your production deployment.

- To prevent conflicts, multiple developers should avoid editing the UI on the same page, even across different branches.

- Keep branches and pull requests short-lived to streamline the development process and minimize conflicts.







## Keep Commits Atomic

Atomic commits are small, self-contained changes that address a single concern. Each commit should represent a single logical change or fix. 

- Avoid mixing unrelated changes within a single commit to maintain a clean and understandable history. 

- Consider breaking down large UI modifications into smaller tasks.

- Divide work among developers so each person is responsible for different parts of the app to avoid overlap and conflicts.

- Regularly push your Appsmith changes to the remote repository. This can be done by clicking on the **+** plus icon located in the bottom left corner. 

- Communicate with your teammates before making any changes to ensure coordination.




## Regularly Pull Changes

Keep your local repository up-to-date with changes from the remote counterpart to minimize conflicts and ensure smooth collaboration.


- Pull changes frequently to incorporate updates from the remote repository into your local branch. You can do this by clicking on the **Pull icon** at the bottom left corner.

- Merge changes from the `master` branch regularly into the `feature` branch to keep it updated with the latest developments. You can do this by clicking on the **Merge icon** at the bottom left and merging changes from the `master` branch to the `feature` branch.

## Storing secrets

Properly managing secrets is crucial for maintaining the security of your application. Secrets include credentials used to access databases, APIs, communication services, and other sensitive information. Here are some best practices for handling secrets in your projects:

- In Appsmith, credentials used to access configured datasources are automatically redacted and never enter the version control system.

- For other types of secrets that need to be kept out of version control, store them in a secure location such as repository environment variables. For example, you can store your CI/CD bearer token in an environment variable.

- Ensure that these secrets are retrieved from a secure location at runtime so they are not present in your code.







