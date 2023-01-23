# How to use Git flow for different environments

In this guide, you’ll learn how to create different environments for your App using the Git connection in Appsmith.

## Environments
If you have an App connected to Git in Appsmith, you can create separate branches to work on it independently. The problem arises when you are working on the same database. Any alteration to the database can cause multiple failures on various branches. So, it's better to have a different environment with a test database for developing an application that won't affect the production database. But, what are Environments?
Environments are container entities within a space that allows you to create and maintain multiple versions of your App and make changes to them in isolation. A separate environment can be an app with a test database in another workspace or instance.

The multiple environments feature is still under development, but till then, you can use Version control with Git in Appsmith to create different environments by following these steps:

1. Establishing Git connection
2. Import your App
3. Commit and push
4. Pull the changes


### Establish a Git connection
To get started, connect your app to a git repository. You can follow the steps from [Connecting to repository](/advanced-concepts/version-control-with-git/connecting-to-git-repository) to complete the setup.
Once the setup is complete, commit and push the initial commit to your Git repository from the Appsmith.

### Import Application

Go to the workspace or the instance where you want to add the development environment. Import the application from the Git repository using [Import from Git](/advanced-concepts/version-control-with-git/import-from-repository). As Appsmith doesn't store the credentials of your database, the datasource window appears when the import is complete. In this window, enter the credentials for your development data which is different from the production environment. Test and save the connection.

### Commit and push
Once the development database is connected, open the app. You’ll be prompted to make an initial push to the Git repository from the app.
The development environment for your app is now complete. To test it out, make some changes in the app. For example, add a select widget and bind it to your development data. Once you’ve made the changes, commit and push it to your Git repository.

### Pull the changes
You’ve made changes in your development environment, but they're not in the production app yet. To sync the changes, go back to the production app and pull the latest changes from the Git repository. You’ll see that a select widget will appear on the canvas bonded with the production database when the pull from the repository is complete.

:::info
This method does not support GSheet, Twilio, API or any SAAS-type datasource. 
:::

