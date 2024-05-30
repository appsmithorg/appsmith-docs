# Multi-instance setup with Git 

This guide shows you how to set up multiple instances in Appsmith using Git, making application development easier. With Multi-instance:

* You can work in an isolated environment, ensuring that any changes made in one instance do not affect the other instance.
* Configure each instance with different datasource settings to streamline development according to varied needs.
* You can collaborate within instances, allowing different teams to access specific instances; for example, QA teams can use the staging instance for their tasks.

<ZoomImage
        src="/img/git-new-ins.png"
        alt=""
        caption=""
        lazyLoad="true"
/>


## Prerequisites

* Two separate self-hosted instances: one for *Staging* and the other for *Production*. Refer to the [Appsmith installation](/getting-started/setup/installation-guides) guides for detailed instructions on setting up your Appsmith instance.
* Basic knowledge of Git.





 

## Setup instances

Follow these steps to set up multiple instances for your app:


<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/KW8UHVsaBJquF3TNfNiE?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

1. Create an app within the *Staging* instance or connect an existing app to a [Git repository](/advanced-concepts/version-control-with-git/connecting-to-git-repository). Once connected, create and check out a `staging` branch from the default `master` branch.

2. In the *Staging* instance, configure the datasource using the `staging` database configuration, then **Commit and push** the changes.

3. In the *Staging* instance, open Git settings and:

<dd>

* Protect the `staging` and `master` branches.
* Set the `staging` branch as the default.

For more information see [Default Branch](/advanced-concepts/version-control-with-git/reference/git-settings#branch) and [Branch Protection](/advanced-concepts/version-control-with-git/reference/git-settings#branch).


</dd>

4. In the *Production* instance, click on the **Create New** button, select [Import from Git](/advanced-concepts/version-control-with-git/import-from-repository) and import the same app used in the *Staging* instance.


5. Once the import is complete, configure the datasource by using the `production` database configuration in the **Reconnect Datasources** modal.

6. In the *Production* instance:

<dd>

* Protect the `master` branch.
* Set the `master` branch as the default.


</dd>

7. After setting up both instances, share the app by inviting users and developers. You can assign different roles to each developer or create custom roles based on your needs.


<dd>

For more information, see [Roles](/advanced-concepts/granular-access-control/roles).

</dd>

8. To manage your instances, follow this [branching strategy](/advanced-concepts/version-control-with-git/best-practices#use-branching-strategy). 
