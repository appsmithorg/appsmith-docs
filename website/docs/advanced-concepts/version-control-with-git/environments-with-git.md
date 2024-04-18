# Environments With Git

This guide shows you how to set up multiple instances/environments in Appsmith using Git, making application development easier. Appsmith allows you manage multiple app versions, making development streamlined with separate staging and production workspaces.

:::info
This method doesn't support APIs, Google Sheets, Twilio, or any authenticated API datasources.
:::


## Prerequisites

* Basic Knowledge of Git.
* A self-hosted instance of Appsmith. Refer to the [Appsmith installation](/getting-started/setup/installation-guides) guides for detailed instructions on setting up your Appsmith instance.

:::note
If you're using two different self-hosted instances for production and staging, take a backup of both instances before updating Appsmith. Update only the staging instance and test all your apps on it before updating the production instance. In the event of an error, you can rollback by following the instructions on [Restore Appsmith Instance](/getting-started/setup/instance-management/appsmithctl#restore-instance)
:::

## Setup environments

Follow these steps to set up multiple environments for your app:

1. Create separate workspaces for each phase, such as staging and production.

2. Create an app within the `staging` workspace and [connect to a Git repository](/advanced-concepts/version-control-with-git/connecting-to-git-repository). Once connected, check out a `staging` branch from the default branch.

3. Navigate to the Appsmith homepage and [Import the app](/advanced-concepts/version-control-with-git/import-from-repository) into your `production` workspace using the **Import from Git** feature.

4. Once the import is complete, add your production datasource configurations in the **Reconnect Datasources** Modal.


5. Protect the `master` and `staging` branches, with `staging` set as the [Default branch](/advanced-concepts/version-control-with-git/working-with-branches#default-branch), and [protect](/advanced-concepts/version-control-with-git/working-with-branches#branch-protection) the `master` branch in the production workspace.

6. If you are an enterprise user, set up the Git CI/CD to pull & deploy changes on the `master` branch in the `production` instance.


## Build and deploy

Once you've configured the different environments, follow these steps to build apps, manage changes, and deploy them:


1. Build the app in the `staging` workspace with staging datasources.

2. Create feature branches from the `staging` branch and merge them into `staging` regularly through pull requests.

3. Once a milestone is completed, merge the `staging` branch into the `master` branch.

4. In the production instance manually pull the `master` branch to deploy the app for end users. For Enterprise, set up [Git CD](/advanced-concepts/version-control-with-git/cd-with-git) to automatically pull and deploy the `master` branch.

5. Share and invite apps with users and developers:

<dd>

* Invite end users to the production app with the *App Viewer* role for viewing access.
* Assign *Administrator* roles to trusted individuals in the production app to set up datasources and deploy the app periodically.
* Invite developers to the staging app with the *Developer* role to build and test changes on staging datasources.

</dd>


