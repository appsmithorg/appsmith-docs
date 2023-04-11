# Use Git to manage your software development lifecycle

Git in Appsmith allows you to create and maintain multiple versions of your applications and make changes to them in isolation. Having separate staging and production workspaces ensures that users can continue to use your apps even while they're being changed or upgraded.

:::info
This method doesn't support APIs, Google Sheets, Twilio, or any authenticated API datasources.
:::

Follow the steps below to setup the pipeline:

### Setup

1. Create two workspaces for your staging and production versions of the app. These workspaces can be across two separate instances of Appsmith.
2. Create your app in the staging workspace and connect to Git version control. Once connected, check out a staging branch from the default branch(you can name the default branch as production).
3. Import the app into your production workspace using [Import from Git](/advanced-concepts/version-control-with-git/import-from-repository).

### Build and deploy
1. Build the app in the staging workspace with staging datasources. 
2. Use the Git workflow to make changes in the staging branch(or feature branches), before merging to the production branch through a pull request.
3. When you're ready to deploy, pull the changes on the production branch in the production workspace app.
4. Connect the production workspace app to your production datasources.

### Share
1. Invite your end users to your production app as App Viewers. They only have access to view the deployed app.
2. Invite a few trusted individuals as Admins to the production app to setup datasources and deploy the app periodically.
3. Invite your developers to the staging app as "Developers" to build the app and test out changes on the staging datasources.
4. QA team members can be invited to both staging and production apps as App Viewers to test out the changes deployed.

### General notes
1. If you're using two different instances, take a backup of both instances before upgrading. Upgrade only the staging instance and test all your apps on it before upgrading the production instance.
2. In the event of an error, you can rollback by following the instructions on [Restore Appsmith Instance](https://docs.appsmith.com/getting-started/setup/instance-management/appsmithctl#restore-appsmith-instance)