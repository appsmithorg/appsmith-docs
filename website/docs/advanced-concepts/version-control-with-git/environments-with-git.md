# Multi-instance setup with Git 

This guide shows you how to set up multiple instances in Appsmith using Git, making application development easier. 

An instance in Appsmith refers to a workspace where you develop and deploy your applications. Using Git for managing these instances enables you to handle multiple app versions, each configured with different datasource settings, facilitating streamlined development with separate development and production workspaces.


## Prerequisites

* Basic knowledge of Git.
* A self-hosted instance of Appsmith. Refer to the [Appsmith installation](/getting-started/setup/installation-guides) guides for detailed instructions on setting up your Appsmith instance.

:::note
If you're using two different self-hosted instances for production and development, take a backup of both instances before updating Appsmith. Update only the development instance and test all your apps on it before updating the production instance. In the event of an error, you can rollback by following the instructions on [Restore Appsmith Instance](/getting-started/setup/instance-management/appsmithctl#restore-instance)
:::

## Setup instances

Follow these steps to set up multiple instances for your app:

1. Create separate workspaces(instances) for each phase, such as **Development** and **Production**.

2. Create an app within the development instance and [connect to a Git repository](/advanced-concepts/version-control-with-git/connecting-to-git-repository). Once connected, check out a `development` branch from the default branch.

3. In the Development instance(workspace), set up the datasource using the `development` database configuration.

4. In the Production instance(workspace) import the app using the [Import from Git](/advanced-concepts/version-control-with-git/import-from-repository) feature.

4. In the Production instance(workspace), click on the **Create New** button, and select [Import from Git](/advanced-concepts/version-control-with-git/import-from-repository) and import the same app used in the Production instance.

5. Once the import is complete, add your `production` datasource configurations in the **Reconnect Datasources** Modal.

6. To ensure the security and management of branches in both instances:


<dd>

* Protect `development` and `master` branches in development instances and make `development` branch default.
* Protect `master` branch in `production` instance and make `master` branch default.

Learn more about [Default branch](/advanced-concepts/version-control-with-git/working-with-branches#default-branch) and [Branch protection](/advanced-concepts/version-control-with-git/working-with-branches#branch-protection).
</dd>


7. If you are an enterprise user, set up the [Git CI/CD](/advanced-concepts/version-control-with-git/cd-with-git) to automatically deploy changes on the `master` branch in the `production` instance.


## Build and deploy

Once you've configured the different environments, follow these steps to build apps, manage changes, and deploy them:


1. Build the app in the `development` workspace with development datasources.

2. Create feature branches from the `development` branch and merge them into `development` regularly through pull requests.

3. Once a milestone is completed, merge the `development` branch into the `master` branch.

4. In the production instance manually pull the `master` branch to deploy the app for end users. For Enterprise, set up [Git CD](/advanced-concepts/version-control-with-git/cd-with-git) to automatically pull and deploy the `master` branch.

5. Share and invite apps with users and developers:

<dd>

* Invite end users to the production app with the *App Viewer* role for viewing access.
* Assign *Administrator* roles to trusted individuals in the production app to set up datasources and deploy the app periodically.
* Invite developers to the development app with the *Developer* role to build and test changes on development datasources.

</dd>


