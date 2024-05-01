---
description: Change Protected Branch
title: Change Protected Branch
hide_title: true
---
<!-- vale off -->

<div className="tag-wrapper">

## Change Protected Branch


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


:::info
By default, Appsmith enables the [protected branch](#change-protected-branch) feature for the default (`master/main`) branch. This means that direct edits to this branch are restricted. To make changes, you must create a new branch, implement the changes, and then merge them into the default branch via PR.
:::


If you are an enterprise user, you can select multiple branches as protected. Follow these steps to change protected branches:

1. Open **Git Settings** located on the left side of the bottom bar.

2. Navigate to the branch tab.

3. Select the list of branches you want to designate as protected. To make changes to these branches, you need to raise a PR and merge manually from the git provider.

<ZoomImage
  src="/img/git-branch-protection.png" 
  alt="Branch Protection"
  caption="Branch Protection"
/>

