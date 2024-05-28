# Best Practices


This page provides essential Git best practices to help teams avoid merge conflicts, ensuring a smoother and more efficient workflow.


## Use Branching Strategy

Implement a well-defined branching strategy to enhance collaboration and maintain code quality in Git. For large-scale deployment, it is recommended to use a multi-instance setup. For more information, see [Multi-instance setup with Git](/advanced-concepts/version-control-with-git/environments-with-git).



 <ZoomImage
        src="/img/gitflow.webp"
        alt=""
        caption=""
        lazyLoad="true"
/>


- Select a branching model that aligns with your team's workflow and project requirements. Popular models like [GitFlow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow), [GitHub Flow](https://docs.github.com/en/get-started/using-github/github-flow), and [Trunk-Based Development](https://www.atlassian.com/continuous-delivery/continuous-integration/trunk-based-development) offer different approaches suited for various scenarios. 

- Create different feature branches from the `Staging` branch and merge them into `Staging` regularly through pull requests.

- Create a `Staging` branch for testing features. Once a milestone is completed, merge the `Staging` branch into the `master` branch via a pull request.

- Reserve the `master` branch for production-ready code. Only merge thoroughly tested and reviewed changes into this branch to ensure stability.

- To prevent accidental commits, make the `master` branch protected from [Git settings](/advanced-concepts/version-control-with-git/reference/git-settings).

- If you have configured a multi-instance setup, manually pull the `master` branch in the *Production* instance to deploy changes. If you are an enterprise user, set up [Git CD](/advanced-concepts/version-control-with-git/cd-with-git) to automatically pull and deploy the `master` branch.

- To prevent conflicts, multiple developers should avoid making changes to the same UI elements on the same page, even if they are working on different branches

- Keep branches and pull requests short-lived to streamline the development process and minimize conflicts.







## Keep Commits Atomic

Atomic commits are small, self-contained changes that address a single concern. Each commit should represent a single logical change or fix. 

- Avoid mixing unrelated changes within a single commit to maintain a clean and understandable history. 

- Consider breaking down large UI modifications into smaller tasks.

- Divide work among developers so each person is responsible for different parts of the app to avoid overlap and conflicts.

- Regularly push your Appsmith changes to the remote repository. This can be done by clicking on the **+** plus icon located in the bottom left corner. 

- Communicate with your teammates before making any changes to ensure coordination.




## Regularly Update Changes

Keep your local repository up-to-date with changes from the remote counterpart to minimize conflicts and ensure smooth collaboration.


- Pull changes frequently to incorporate updates from the remote repository into your local branch. You can do this by clicking on the **Pull icon** at the bottom left corner.

- Merge changes from the `master` branch regularly into the `feature` branch to keep it updated with the latest developments. You can do this by clicking on the **Merge icon** at the bottom left and merging changes from the `master` branch to the `feature` branch.

## Storing secrets

Properly managing secrets is crucial for maintaining the security of your application. Secrets include credentials used to access databases, APIs, communication services, and other sensitive information. Here are some best practices for handling secrets in your projects:

- In Appsmith, credentials used to access configured datasources are automatically redacted and never enter the version control system.

- For other types of secrets that need to be kept out of version control, store them in a secure location such as repository environment variables. For example, you can store your CI/CD bearer token in an environment variable.

- Ensure that these secrets are retrieved from a secure location at runtime so they are not present in your code.







