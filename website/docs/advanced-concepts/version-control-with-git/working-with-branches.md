---
sidebar_position: 1
---
# Manage Branches

This guide shows you how to create, switch, and delete Git branches within your Appsmith application, allowing you to better manage your app development process at different stages.


:::info
By default, Appsmith enables the protected branch feature for the default (`master/main`) branch. This means that direct edits to this branch are restricted. To make changes, you must create a new branch, implement the changes, and then merge them into the default branch via PR.
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

:::note
It's recommended to organize branches according to development phases, such as having a `master/main` branch for stable releases, `feature` branches for new features, and `release` branches for testing and QA purposes.
:::





## Delete local branch

Follow the steps to delete a local branch that is no longer needed:


<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/jq9yBSnhA8GBOF7VRdb7?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

1. Open the branch menu from the bottom left corner.

2. Navigate to the branch you want to delete, click options, and select **Delete**.

With these steps, the local branch gets deleted. To delete a remote branch, you need to delete/remove it from your Git service provider.

## Merge branches

You can merge changes from one branch to another, ensuring project cohesion and progress. Follow these steps to merge changes between branches:

:::info
Directly merging changes into the default branch (master) is not possible; you must either raise a PR or pull the changes.
:::


<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/VujLmtTJGdKSQIwNgcRb?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

1. Open the branch from which you want to merge the changes. For example, if merging changes from the `feature` branch to `release`, open the `feature` branch.

2. Click the **Merge** icon at the bottom left corner. 

3. Select the branch into which you want to merge the changes. For example, merging changes from `feature` to `release`.

4. Ensure both branches have no uncommitted changes, are synchronized with the remote repository, and have no conflicting changes before merging.

5. If there are no conflicts between the branches, click the **Merge Changes** button.

If you want to merge branch changes into the `base`/`master` branch, you must raise a Pull Request from the Git provider and merge the changes through the platform.

## Sync branches

Follow these steps to sync your local branch with its remote counterpart:

![](/img/Sync_branches.png)


1. Open the branch menu from the bottom left corner.

2. Select and open the branch you want to sync.

3. Click on the sync icon 🔄 located at the top-left corner of the branch menu. Syncing the branches won’t merge any change you’ve made on the remote branch. You’ll have to click on the pull button to get the latest changes.



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

The default branch is the base branch of the app. You have the option to select a different default branch for each instance.

<ZoomImage
  src="/img/git-default-branch.png" 
  alt="Default branch"
  caption="Default branch"
/>


1. Open **Git Settings** located on the left side of the bottom bar.

2. Navigate to the branch tab.

3. Change the default branch and click on the **Update** button. Once the default branch is updated, users launching the app from the dashboard will see the deployed version from this branch.




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


However, for non-enterprise users,

1. Open **Git Settings** located on the left side of the bottom bar.

2. Navigate to the branch tab.

3. Select the list of branches you want to designate as protected. 

<ZoomImage
  src="/img/git-branch-protection.png" 
  alt="Branch Protection"
  caption="Branch Protection"
/>


## Next steps

* [Commit and Push Changes](/advanced-concepts/version-control-with-git/commit-and-push)


