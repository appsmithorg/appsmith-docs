
Similar to using Git flow in SDLC, you can establish separate branches in Appsmith to manage different stages of your app development process. It's recommended to organize branches according to development phases, such as having a `master/main` branch for stable releases, `feature` branches for new features, and `release` branches for testing and QA purposes.

Each branch that you create has its own unique URL in the following format:

```javascript
<APPSMITH-APP-URL>?branch=<BRANCH-NAME>
```

In case the branch name is not mentioned in the URL, the URL directs to the default branch, which is the master branch. 

By default, Appsmith enables the protected branch feature for the `master/main` branch. This means that direct edits to this branch are restricted. To make changes, you must create a new branch, implement the changes, and then merge them into the `main/master` branch.

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
