---
sidebar_position: 1
---
# Manage Branches

This guide shows you how to create, and manage Git branches within your Appsmith application, allowing you to better manage your app development process at different stages.


:::info
By default, Appsmith enables the [protected branch](#change-protected-branch) feature for the default (`master/main`) branch. This means that direct edits to this branch are restricted. To make changes, you must create a new branch, implement the changes, and then merge them into the default branch via PR.
:::



## Create branch

To create these branches in your Appsmith app, follow the steps below:


<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/lpXnJuEduL502KIavxLb?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>


1. Select the branch menu located at the bottom left corner to access the branch Modal. This modal displays all available remote and local branches.

2. To create a new branch, enter the new branch name (Eg. `feature`) in the input box and click on **Create branch**. Your application switches to the new `(feature)` branch. When you create a new branch, it includes uncommitted changes made in the parent branch. But switching to another branch won't bring along any changes from the previous branch.


Each branch has a unique URL format: `<APPSMITH-APP-URL>?branch=<BRANCH-NAME>`. If the branch name is not specified, the app URL defaults to the `default` branch.

:::tip
It's recommended to organize branches according to development phases, such as having a `master/main` branch for stable releases, `feature` branches for new features, and `release` branches for testing and QA purposes.
:::

* To **Merge branches**, click on the **Merge** icon at the bottom left corner. Then, select the branch where you want to merge the changes. Make sure both branches are updated and free of conflicts. To merge changes into the `default`/`master` branch, raise a Pull Request and merge it.


* To **Sync** your local branch with its remote counterpart, open the desired branch from the bottom branch menu, and click on the sync icon at the top-left corner. Syncing doesn't automatically merge remote changes; use the pull button to update your local branch with the latest changes from the remote branch.









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

The default branch is the base branch of the app. If there is no branch tag in the URL, the user is directed to the app associated with this branch.

When you create a new repository, Git automatically creates a default branch, often named `master` or `main`. You have the option to select a different default branch for each instance.

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/p4gmMV9148bi2ON1vCnr?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>


1. Open **Git Settings** located on the left side of the bottom bar.

2. Navigate to the branch tab.

3. Change the default branch and click on the **Update** button. Once the default branch is updated, users launching the app from the dashboard sees the deployed version from this branch.




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


Protected branches mean that changes to the app are not allowed within those branches. You have to create a new branch to make changes. The default branch is automatically set as the protected branch. You have the option to exclude the default branch from branch protection if needed. 

If you are an enterprise user, you can select multiple branches as protected. Follow these steps to change protected branches:

1. Open **Git Settings** located on the left side of the bottom bar.

2. Navigate to the branch tab.

3. Select the list of branches you want to designate as protected. To make changes to these branches, you need to raise a PR and merge manually from the git provider.

<ZoomImage
  src="/img/git-branch-protection.png" 
  alt="Branch Protection"
  caption="Branch Protection"
/>



## Next steps

* [Commit and Push Changes](/advanced-concepts/version-control-with-git/commit-and-push)


