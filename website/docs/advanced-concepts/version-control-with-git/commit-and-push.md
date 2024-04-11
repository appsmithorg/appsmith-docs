---
sidebar_position: 2
---

# Manage Changes

This guide shows you how to commit, pull, and manage Git changes within your application.


## Commit and Push changes

After creating a new branch and making changes to the app, follow these steps to commit and push the changes to your remote repository:

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/urZJd1ad19VGRAFFuXSs?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>


1. Click the **+** icon at the bottom left corner to commit the changes. The **+** icon also reflects the number of entities you have modified. Entities refer to changes in the app, such as queries, JSObjects, and page edits.

<dd>

*Example:* if you rename a query, you might see 2 queries modified during commit, indicating both the deletion of the old query and the creation of the new one.

</dd>


:::info
If the remote counterpart of your current branch contains commits not present on the local branch, the push command fails. In such a scenario, you'll need to pull the changes to continue. Once you've pulled the changes, re-attempt the push command, and all changes, including the last commit, are successfully pushed to the repository.
:::

2. In the deploy tab, enter your commit message and click **Commit and Push** to update your branch with the latest changes. 

3. To check the deployed app associated with your branch, click the down arrow next to the **Deploy** button, and select the **Currently Deployed Version**.


Once the remote feature branch is updated in the repository, you can raise a PR to merge the changes with the `master` branch.





## Pull changes

To fetch the latest version from the remote repository, follow these steps to pull changes.

:::info
In cases where changes are made to the same files in both local and remote branches, the pull operation may encounter merge conflicts. In such instances, conflict resolution must be performed manually on the remote repository.
:::


1. Open the branch from which you want to pull the changes.

2. Click the **Pull** icon at the bottom left corner to commit the changes. The **Pull** icon also reflects the number of changes.

Once the pull is successful, the app is automatically deployed. To check the deployed version, click the **Deploy** button from the top right corner and in the deploy modal, click **Current Deployed Version**







## Discard changes


Discarding changes removes newly added entities, restores deleted resources, and reverts changes made to any resource after the last commit. Follow these steps to discard current changes and return to a previous committed version:


1. Click on the **+** icon at the bottom left corner.

2. In the Deploy Modal, select the **Discard Changes** button.

This action discards any current modifications and reverts the application to reflect the last committed changes from the repository.



## Auto-commit changes


When Appsmith is updated, the changes are automatically committed to the designated branch, including updates to the Domain Specific Language (DSL) that describes your app's layout and interactions. This ensures that you can take advantage of new features and enhancements with each new version of Appsmith.

These commits appear in your repository as follows:

```
System generated commit, to support new features after upgrading Appsmith to the version: #appsmithVersion
```

The auto-commit feature ensures you no longer have to manually manage version upgrade changes. You can disable the auto-commit feature by going to your app's Git settings. 

:::info
The auto-commit feature does not apply to the protected branches.
:::

## Further reading

[Merge and Pull changes](/advanced-concepts/version-control-with-git/merging-branches)





