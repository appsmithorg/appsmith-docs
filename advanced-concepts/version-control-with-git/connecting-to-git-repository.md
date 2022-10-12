# Connecting to Git Repository

To connect your app with git, follow the steps below:

### Creating a new Repository

* Create a new repository on your git service and copy the `SSH` URL. The repository should be empty except `README.md`, `.gitignore`, and `LICENSE` files (These can be auto-created when you create a new repository.)

### **Generating a Deploy key**

* Open the app you want to connect to git and click on the `Connect GIT` button on the bottom bar.
* In the Git connection window, paste your repository’s `SSH` URL and click on `Generate key` to generate an `SSH` key.

{% embed url="https://youtu.be/oFfdIwhSPL8" %}

### Adding the deploy key in the Repository

* Copy the generated deploy key and add it to your repository. Please note that you have to <mark style="color:red;">**enable write access**</mark> for pushing the changes to the remote repo from Appsmith.

#### **For Github**

* Open the settings of the repository and go to deploy keys.
* Click on “_**Add deploy key**_.” Add a title for the key and paste the generated key into the key section.
* Check the “_**Allow write access**_” checkbox and add the key.

{% embed url="https://youtu.be/4xMHO4G2hEA" %}

#### **For Gitlab**

* Open the Settings> Repository and expand the deploy keys section.
* Click on "_**Add key**"_, Add the title and paste the generated key in the key section.
* Check the "_**Grant write permissions**" to this key_ and add the key.

{% embed url="https://youtu.be/9aaiE6OERW0" %}

#### **For Bitbucket**

* Open "_**Personal settings**_" from the bottom right corner and go to "_**SSH keys**"_.
* Click on "_**Add key**_", add the label and paste the generated key in the key section.

{% embed url="https://youtu.be/A8ZOvW1CVIk" %}

### **User Configurations**

* In user settings, define the user configurations. By default, the global user configurations are used. Click on the "_<mark style="color:red;">Edit</mark>_" button or directly open the profile section to change the global configurations. If you want to add a user configuration specific to the current app, you must uncheck the "_<mark style="color:red;">use default configuration</mark>_" checkbox and enter the author details below.

{% embed url="https://youtu.be/d5R1MYKtpCM" %}

Finally, click on _**connect**_, and if the connection is successful, your repository will have a `README.md` file. On the Git window, you’ll move to the _<mark style="color:orange;">Deploy</mark>_ section, where you can make an initial commit.

{% embed url="https://youtu.be/Z67SfBpKrnk" %}

{% hint style="info" %}
In the community edition, You can connect up to <mark style="color:green;">**three**</mark> private repositories in a workspace. If you wish to connect more, you can upgrade to the [enterprise edition](https://www.appsmith.com/pricing) (coming soon). However, you can connect **unlimited** public repositories.
{% endhint %}
