---
sidebar_position: 6
---

# Import From Repository

​If you already have an Appsmith App in a Git repository, you can import it to a new workspace or a different Appsmith account.

 <VideoEmbed host="youtube" videoId="B4gR4XligTo" title="Import Apps from Git" caption="Import Apps from Git"/>


Follow the steps given below:

1. On the Appsmith workspace home, click on desired workspace Menu button and select Import.
2. Choose the `Import from a Git repo` option on the import application pop-up. You'll be navigated to an `Import from the Git Repository` screen.
3. Add your Repository’s SSH URL and click on [Generate key](/advanced-concepts/version-control-with-git/connecting-to-git-repository#generate-a-deploy-key).
4. Add the [Deploy key to your repository.](/advanced-concepts/version-control-with-git/connecting-to-git-repository#add-the-deploy-key-in-the-repository)​
5. Go back to the Git connection window and [configure the user settings](/advanced-concepts/version-control-with-git/connecting-to-git-repository#user-configuration) and click on **Import.**
6. Once the import is complete, you’ll see a data source configuration modal where you can configure the data sources used by the imported Application. Appsmith doesn't export any configuration values used for connecting a data source. So either you have to configure it in the data source configuration modal, or you can skip this and choose to configure it later.

:::info
If the imported workspace already has a data source with the same name but a different type, the import fails due to name conflicts. For example, a git-connected application has a MongoDB data source - "movies" and you are importing it to a workspace that has a Postgres data source also named "movies." In such a case, the import fails.
:::
