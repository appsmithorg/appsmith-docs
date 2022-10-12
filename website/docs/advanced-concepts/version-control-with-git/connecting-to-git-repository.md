---
sidebar_position: 1
---
# Connecting to Git Repository

To connect your app with git, follow the steps below:

### Creating a new Repository

* Create a new repository on your git service and copy the `SSH` URL. The repository should be empty except `README.md`, `.gitignore`, and `LICENSE` files (These can be auto-created when you create a new repository.)

### **Generating a Deploy key**

* Open the app you want to connect to git and click on the `Connect GIT` button on the bottom bar.
* In the Git connection window, paste your repository’s `SSH` URL and click on `Generate key` to generate an `SSH` key.



 <figure>
 <object data="https://www.youtube.com/embed/oFfdIwhSPL8" width='860px' height='515px'></object> 
<figcaption align = "center"><i>Generating a Deploy key
</i></figcaption>
</figure>

### Adding the deploy key in the Repository

* Copy the generated deploy key and add it to your repository. Please note that you have to **enable write access** for pushing the changes to the remote repo from Appsmith.

#### **For Github**

* Open the settings of the repository and go to deploy keys.
* Click on “_**Add deploy key**_.” Add a title for the key and paste the generated key into the key section.
* Check the “_**Allow write access**_” checkbox and add the key.



  <figure> 
  <object data="https://www.youtube.com/embed/4xMHO4G2hEA" width='860px' height='515px'></object> 
<figcaption align = "center"><i>Adding the deploy key in the Repository | Github
</i></figcaption>
</figure>

#### **For Gitlab**

* Open the Settings> Repository and expand the deploy keys section.
* Click on "_**Add key**"_, Add the title and paste the generated key in the key section.
* Check the "_**Grant write permissions**" to this key_ and add the key.



 <figure>
 <object data="https://www.youtube.com/embed/9aaiE6OERW0" width='860px' height='515px'></object> 
<figcaption align = "center"><i>Adding the deploy key in the Repository | Gitlab
</i></figcaption>
</figure>

#### For Bitbucket

* Open "_**Personal settings**_" from the bottom right corner and go to "_**SSH keys**"_.
* Click on "_**Add key**_", add the label and paste the generated key in the key section.




 <figure>
 <object data="https://www.youtube.com/embed/A8ZOvW1CVIk" width='860px' height='515px'></object> 
<figcaption align = "center"><i>Adding the deploy key in the Repository | Bitbucket
</i></figcaption>
</figure>

### User Configurations

* In user settings, define the user configurations. By default, the global user configurations are used. Click on the **Edit** button or directly open the profile section to change the global configurations. If you want to add a user configuration specific to the current app, you must uncheck the "use default configuration" checkbox and enter the author details below.





 <figure>
 <object data="https://www.youtube.com/embed/d5R1MYKtpCM" width='860px' height='515px'></object> 
<figcaption align = "center"><i>User Settings | Git Sync
</i></figcaption>
</figure>

Finally, click on _**connect**_, and if the connection is successful, your repository will have a `README.md` file. On the Git window, you’ll move to the **Deploy** section, where you can make an initial commit.



  <figure>
 <object data="https://www.youtube.com/embed/Z67SfBpKrnk" width='860px' height='515px'></object> 
<figcaption align = "center"><i>Initial Commit | Git Sync
</i></figcaption>
</figure>

:::info
In the community edition, You can connect up to **three** private repositories in a workspace. If you wish to connect more, you can upgrade to the [Enterprise Edition](https://www.appsmith.com/pricing) (coming soon). However, you can connect **unlimited** public repositories.
:::
