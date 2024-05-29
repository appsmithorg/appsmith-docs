# Multi-instance setup with Git 

This guide shows you how to set up multiple instances in Appsmith using Git, making application development easier. With Multi-instance:

* You can work in an isolated environment, ensuring that any changes made in one instance do not affect the other instance.
* Configure each instance with different datasource settings to streamline Staging according to varied needs.
* You can collaborate within instances, allowing different teams to access specific instances; for example, QA teams can use the staging instance for their tasks.



## Prerequisites

* Two separate self-hosted instances: one for *Staging* and the other for *Production*. Refer to the [Appsmith installation](/getting-started/setup/installation-guides) guides for detailed instructions on setting up your Appsmith instance.
* Basic knowledge of Git.





 <ZoomImage
        src="/img/git-new-ins.png"
        alt=""
        caption=""
        lazyLoad="true"
/>


## Setup instances

Follow these steps to set up multiple instances for your app:


<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/KW8UHVsaBJquF3TNfNiE?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

1. Create an app within the *Staging* instance or connect an existing app to a [Git repository](/advanced-concepts/version-control-with-git/connecting-to-git-repository). Once connected, create and check out a `staging` branch from the default `master` branch.

2. In the *Staging* instance, configure the datasource using the `staging` settings, then **Commit and push** the changes.

3. In the *Production* instance, click on the **Create New** button, select [Import from Git](/advanced-concepts/version-control-with-git/import-from-repository) and import the same app used in the *Staging* instance.

4. Once the import is complete, configure the datasource using the `production` datasource in the **Reconnect Datasources** modal.

5. To protect the app from unnecessary commits, in the *Staging* instance:

<dd>

* Protect the `Staging` and `master` branches.
* Set the `Staging` branch as the default.

</dd>

6. In the *Production* instance:

<dd>

* Protect the `master` branch.
* Set the `master` branch as the default.

For more information see [Default Branch](/advanced-concepts/version-control-with-git/working-with-branches#default-branch) and [Branch Protection](/advanced-concepts/version-control-with-git/working-with-branches#branch-protection).

</dd>

7. After setting up both instances, you can share and invite apps with users and developers:

<dd>

* **App Viewer Role:** Assign this role to end users for viewing access to the production app.
* **Administrator Role:** Give this role to trusted individuals in the *Production* instance to manage datasources and deploy the app periodically.
* **Developer Role:** Assign this role to developers for building and testing changes in the *Staging* instance.

</dd>

8. To build and deploy your application, follow this [branching strategy](/advanced-concepts/version-control-with-git/best-practices#use-branching-strategy) for your multi-instance setup. 
