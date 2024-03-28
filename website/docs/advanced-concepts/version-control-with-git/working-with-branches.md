---
sidebar_position: 1
---
# Manage Branches

This guide shows you how to create, switch, and delete Git branches within your Appsmith application.



Similar to using Git flow in SDLC, you can establish separate branches in Appsmith to manage different stages of your app development process. It's recommended to organize branches according to development phases, such as having a `master/main` branch for stable releases, `feature` branches for new features, and `release` branches for testing and QA purposes.

Each branch that you create has its own unique URL in the following format:

```javascript
<APPSMITH-APP-URL>?branch=<BRANCH-NAME>
```

In case the branch name is not mentioned in the URL, the URL directs to the default branch, which is the master branch. 

By default, Appsmith enables the protected branch feature for the `master/main` branch. This means that direct edits to this branch are restricted. To make changes, you must create a new branch, implement the changes, and then merge them into the `main/master` branch.


## Create branch

To create these branches in your Appsmith app, follow the steps below:


<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/lpXnJuEduL502KIavxLb?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

1. Select the current branch located at the bottom left corner to access the branch Modal, which displays the available branches.

2. To create a new branch, enter the new branch name (Eg. feature) in the input box and click on **Create branch: feature**. Your application switches to the new `(feature)` branch.

After creating a new branch, you can make changes to the branch and commit them.

:::note
* When you create a new branch, it includes any uncommitted changes from its parent branch.
* When you switch to another branch, any uncommitted changes in your current branch are not transferred to the destination branch.
:::





## Delete a branch

Similar to the Git flow, you can delete a branch in Appsmith that's no longer needed. If you want to delete a branch from Appsmith, follow the steps given below:

1. Click the current branch at the bottom left corner.
2. Go to the branch you want to delete, click options, and **Delete**.

![](/img/delete_branch.gif)

## Sync branches

To sync the local with the remote branch (fetching or pruning), click on the branch pop-up and hit the **Sync branches** button. Syncing the branches won’t merge any change you’ve made on the remote branch. You’ll have to click on the pull button to get the latest changes.

![](/img/Sync_branches.png)


<!-- vale off -->

<div className="tag-wrapper">

## Default branch

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

The default branch is the base branch of the app. Users launching the app from the dashboard will see the deployed version from this branch. It is the branch where all changes are eventually merged back. It's the central hub from which new features, bug fixes, and other changes are based and into which they are integrated.

If you are an enterprise user and using Git across multiple instances, you have the option to select a different default branch for each instance, offering configuration based on specific project requirements or preferences.

<ZoomImage
  src="/img/git-default-branch.png" 
  alt="Default branch"
  caption="Default branch"
/>

<!-- vale off -->

<div className="tag-wrapper">

## Branch protection

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

Changes to the app are not allowed in protected branches, the user needs to create a new branch or checkout an existing branch to edit the app. This enforces Git Workflows, ensuring development happens securely and by following good development practices.

If you are an enterprise user, you can select multiple branches as protected, enhancing security measures across various aspects of the codebase. However, for non-enterprise users, the default branch is automatically set as the protected branch. You have the option to exclude the default branch from branch protection if needed, from the Git settings located in the left corner.

<ZoomImage
  src="/img/git-branch-protection.png" 
  alt="Branch Protection"
  caption="Branch Protection"
/>

Learn how to [create and maintain multiple versions](/advanced-concepts/version-control-with-git/environments-with-git) of your applications and make changes to them in isolation using Git. 

## Further reading

[Commit Changes](/advanced-concepts/version-control-with-git/commit-and-push)

