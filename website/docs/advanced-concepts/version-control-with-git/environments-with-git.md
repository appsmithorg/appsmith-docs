# Environments With Git

Appsmith enables you to create and maintain multiple versions of your applications and make changes to them in isolation using Git. Having separate staging and production workspaces ensures that users can continue to use your apps even while they're being changed or upgraded.

:::info
This method doesn't support APIs, Google Sheets, Twilio, or any authenticated API datasources.
:::

Follow the steps below to setup the pipeline:

### Setup environments

1. Create two workspaces for your staging and production versions of the app. These workspaces can be across two separate instances of Appsmith.
2. Create your app in the staging workspace and [connect to a Git repository](/advanced-concepts/version-control-with-git/connecting-to-git-repository) . Once connected, check out a staging branch from the default branch(you can name the default branch as production).
3. Import the app into your production workspace using [Import from Git](/advanced-concepts/version-control-with-git/import-from-repository).
4. Once the import is complete, add your production datasource configurations in the **Reconnect Datasources** Modal.

### Build and deploy app
1. Build the app in the staging workspace with staging datasources. 
2. Use the Git workflow to make changes in the staging branch(or feature branches), before merging to the production branch through a pull request.
3. When you're ready to deploy, [pull the changes](/advanced-concepts/version-control-with-git/merging-branches#pull-changes) on the production branch in the production workspace app.

### Share app
1. Invite end users to your production app with the *App Viewer* role. They only have access to view the deployed app.
2. Invite a few trusted individuals with *Administrator* roles to the production app to setup datasources and deploy the app periodically.
3. Invite your developers to the staging app with the *Developer* role to build the app and test out changes on the staging datasources.
4. QA team members can be invited to both staging and production apps with the *App Viewer* role to test out the changes deployed.

### General notes
- If you're using two different self-hosted instances for production and staging, take a backup of both instances before updating Appsmith. Update only the staging instance and test all your apps on it before updating the production instance.
- In the event of an error, you can rollback by following the instructions on [Restore Appsmith Instance](/getting-started/setup/instance-management/appsmithctl#restore-instance)