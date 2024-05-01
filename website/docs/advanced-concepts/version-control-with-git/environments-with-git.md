# Multi-instance setup with Git 

An instance in Appsmith refers to a workspace where you develop and deploy your applications.  With Git, you can create multiple instances for different stages like staging, development, or production, each with different datasource settings for the same app. With Multi-instance:

* You can work in an isolated environment, ensuring that any changes made in one instance do not affect the other instance.
* Configure each instance with different datasource settings to streamline development according to varied needs.
* You can collaborate within instances, allowing different teams to access specific instances; for example, QA/testing teams can user the staging instance for their tasks.


This guide shows you how to set up multiple instances in Appsmith using Git, making application development easier. 

## Prerequisites

* A self-hosted instance of Appsmith. Refer to the [Appsmith installation](/getting-started/setup/installation-guides) guides for detailed instructions on setting up your Appsmith instance.
* Basic knowledge of Git.

## Setup instances

Follow these steps to set up multiple instances for your app:

1. Create two separate workspaces, for example, **Development** and **Production**, each corresponding to a separate instance.

2. Create an app within the development instance and [connect to a Git repository](/advanced-concepts/version-control-with-git/connecting-to-git-repository). Once connected, create and check out a `development` branch from the default `master` branch.

3. In the Development instance, configure the datasource using either the `development` or `testing` settings.

4. In the Production instance, click on the **Create New** button, select [Import from Git](/advanced-concepts/version-control-with-git/import-from-repository) and import the same app used in the Development instance.

5. Once the import is complete, you can either use the same datasource configuration or add a different `production` datasource in the **Reconnect Datasources** Modal.

6. To protect app from unnecessary commits, in the Development instance:

<dd>

* Protect the `development` and `master` branches.
* Set the `development` branch as the default.

</dd>

7. In the Production instance:

<dd>

* Protect the `master` branch.
* Set the `master` branch as the default.

For more information see [Default branch](/advanced-concepts/version-control-with-git/working-with-branches#default-branch) and [Branch protection](/advanced-concepts/version-control-with-git/working-with-branches#branch-protection).
</dd>

7. After setting up both instances, you can share and invite apps with users and developers:

<dd>

* Invite end users to the production app with the *App Viewer* role for viewing access.
* Assign *Administrator* roles to trusted individuals in the production app to set up datasources and deploy the app periodically.
* Invite developers to the development app with the *Developer* role to build and test changes on development datasources.

</dd>



## Build and deploy

Once you've configured the different instances, follow these steps to build apps, manage changes, and deploy them:


1. Build the app in the `development` workspace with development/testing datasources.

2. Create different feature branches from the `development` branch and merge them into `development` regularly through pull requests.

3. Once a milestone is completed, merge the `development` branch into the `master` branch.

4. In the production instance manually pull the `master` branch to deploy the app for end users. For Enterprise, set up [Git CD](/advanced-concepts/version-control-with-git/cd-with-git) to automatically pull and deploy the `master` branch.

