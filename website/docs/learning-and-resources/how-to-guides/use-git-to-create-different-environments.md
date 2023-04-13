# Use Git to Create Different Environments

In this guide, you’ll learn how to create different environments for your App using the Git connection in Appsmith.

:::info
This method doesn't support APIs, Google Sheets, Twilio, or any authenticated API datasources.
:::

## Environments
Environments are container entities within a space that allows you to create and maintain multiple versions of your applications and make changes to them in isolation.

You may need to create and maintain separate environments for your production apps to rigorously test them and remove any errors before the changes are deployed and made available to the users. This also helps prevent making any accidental changes to production databases.  

With the Connect to Git feature in Appsmith, you can create separate environments for each version of your app, each with different databases.

To create different environments following the steps below:

### 1. Establish a Git connection

To get started, connect your app to a git repository. You can follow the steps from [Connecting to repository](/advanced-concepts/version-control-with-git/connecting-to-git-repository) to complete the setup.
Once the setup is complete, commit and push the initial state of your app to your Git repository from the Appsmith.

### 2. Import application

Go to the workspace or the instance where you want to add the development environment and import the application from the Git repository using [Import from Git](/advanced-concepts/version-control-with-git/import-from-repository). Since Appsmith doesn't store your database credentials, the datasource window appears and prompts you to re-enter them for your newly created app. In this window, enter the credentials for your development database which is different from the production environment. Test and save the connection.

### 3. Commit and push

Once the development database is connected, open the app. You’ll be prompted to make an initial push to the Git repository from the app.
The development environment for your app is now complete. To test it out, make some changes in the app. For example, add a select widget and bind it to your development data. Once you’ve made the changes, commit and push it to your Git repository.

### 4. Pull the changes

You’ve made changes in your development environment, but they're not in the production app yet. To sync the changes, go back to the production app and pull the latest changes from the Git repository. You’ll see that a select widget appears on the canvas bonded with the production database when the pull from the repository is complete.
