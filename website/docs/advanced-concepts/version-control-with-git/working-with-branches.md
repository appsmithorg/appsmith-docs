---
sidebar_position: 1
---
# Manage Branches

This guide shows you how to create, switch, and delete Git branches within your Appsmith application, which allows you to establish separate branches to manage different stages of your app development process.


By default, Appsmith enables the protected branch feature for the `master/main` branch. This means that direct edits to this branch are restricted. To make changes, you must create a new branch, implement the changes, and then merge them into the `main/master` branch.

Direct merges to protected branches are not allowed, users should merge via PR







:::note
It's recommended to organize branches according to development phases, such as having a `master/main` branch for stable releases, `feature` branches for new features, and `release` branches for testing and QA purposes.
:::

## Create branch

To create these branches in your Appsmith app, follow the steps below:


<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "90%" }}>
  <iframe src="https://demo.arcade.software/lpXnJuEduL502KIavxLb?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>


1. Select the current branch located at the bottom left corner to access the branch Modal, which displays the available branches.

2. To create a new branch, enter the new branch name (Eg. feature) in the input box and click on **Create branch: feature**. Your application switches to the new `(feature)` branch.

After creating a new branch, you can make changes to the branch and commit them. Each branch has a unique URL format: `<APPSMITH-APP-URL>?branch=<BRANCH-NAME>`. If the branch name is not specified, the URL defaults to the `default` branch.

:::note
* When you create a new branch, it includes any uncommitted changes from its parent branch.
* When you switch to another branch, any uncommitted changes in your current branch are not transferred to the destination branch.
:::





## Delete local branch

Follow the steps to delete a local branch that is no longer needed:


<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "90%" }}>
  <iframe src="https://demo.arcade.software/jq9yBSnhA8GBOF7VRdb7?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

1. Open the branch menu from the bottom left corner.

2. Navigate to the branch you want to delete, click options, and select **Delete**.

With these steps, the local branch gets deleted. To delete a remote branch, you need to delete/remove it from your Git service provider.


## Sync branches

Follow these steps to sync your local branch with its remote counterpart:

![](/img/Sync_branches.png)


1. Open the branch menu from the bottom left corner.

2. Select and open the branch you want to sync.

3. Click on the sync icon 🔄 located at the top-left corner of the branch menu.

Syncing the branches won’t merge any change you’ve made on the remote branch. You’ll have to click on the pull button to get the latest changes.



<!-- vale off -->

<div className="tag-wrapper">

## Change default branch

<Tags
  tags={[
    {
      name: "Enterprise",
      link: "https://www.appsmith.com/pricing",
      additionalClass: "enterprise",
    }
  ]}
/>

</div>

<!-- vale on -->

The default branch is the base branch of the app. It is the branch where all changes are eventually merged back. 

If you are an enterprise user and using Git across multiple instances, you have the option to select a different default branch for each instance.

<ZoomImage
  src="/img/git-default-branch.png" 
  alt="Default branch"
  caption="Default branch"
/>


1. Open **Git Settings** located on the left side of the bottom bar.

2. Navigate to the branch tab.

3. Change the default branch and click on the **Update** button.

Users launching the app from the dashboard will see the deployed version from this branch.

<!-- vale off -->

<div className="tag-wrapper">

## Change protected branch


<Tags
  tags={[
    {
      name: "Enterprise",
      link: "https://www.appsmith.com/pricing",
      additionalClass: "enterprise",
    }
  ]}
/>

</div>



Protecting branches means that changes to the app are not allowed within those branches. Users must create a new branch or checkout an existing one to make edits. 

If you are an enterprise user, you can select multiple branches as protected. However, for non-enterprise users, the default branch is automatically set as the protected branch. You have the option to exclude the default branch from branch protection if needed. Follow these steps to change protected branches:

1. Open **Git Settings** located on the left side of the bottom bar.

2. Navigate to the branch tab.

3. Select the list of branches you want to designate as protected. 

<ZoomImage
  src="/img/git-branch-protection.png" 
  alt="Branch Protection"
  caption="Branch Protection"
/>

Learn how to [create and maintain multiple versions](/advanced-concepts/version-control-with-git/environments-with-git) of your applications and make changes to them in isolation using Git. 

## Next steps

* [Commit and Push Changes](/advanced-concepts/version-control-with-git/commit-and-push)


