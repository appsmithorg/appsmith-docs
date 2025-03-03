---
title: Session 3
hide_title: false
---

<!-- vale off -->

## Getting Started 

**Ignore this if you were able to attend the previous Session.**

1. Sign up on this instance: [Training Instance](https://training.app.appsmith.com/user/signup)

2. Create a workspace of your own and name it as **\<Name\>-Training-Workspace**

3. Share access to this workspace to **Training Admin** as an Administrator

4. From the workspace, click on the top-right **info icon**, then select **Chat with us**. This is Appsmith’s support assistant that can help you with any issues. Send a test message to familiarize yourself with the support feature.

##  Version Control: Development Process and Collaboration

1. **Setting up your GIT branches**

<dd>

* Open the **Git-connected App** in your workspace and click **Edit** to enter the Editor mode.
* Look at the **bottom-left corner**; you will see that you are currently on the **master** branch.
* Click on the branch name, and a popover will appear listing all branches (both local and remote).
* Create a new branch:
  - Enter **\<Name\>-prod** as the branch name.
  - This will create a **production branch** from the master branch.
* After switching to the **prod** branch:
  - Click the **Cog icon ⚙️** on the bottom bar to open Git settings.
  - Under the **Branch tab**, set **\<Name\>-prod** as the default branch.
* Now, create another branch:
  - Open the branch list, type **\<Name\>-dev**, and create a **development branch** from your production branch.

</dd>

2. **Making changes and commiting to GIT**

<dd>

* Make some changes in your app:
  - Add new widgets, update styling, or create a new page.
* Once you are done, Click the **+ button** next to the branch name and a modal will pop up.
* In the modal, go to the **Deploy Tab**:
  - Review the changes.
  - Add a commit message to describe your changes.
  - Click **Commit & Push** to push changes to your remote branch.
* Great, you have successfully commited your changes to your very own dev branch of this Application.
* You can preview the deployed version by
 - Click on **Deploy > Latest deployed preview**
 - By changing value of branch to `?branch=<BRANCH_NAME>` in your app's URL.

</dd>

3. **Merging your changes**

<dd>

* Click the **+ button** again to open the modal.
* Navigate to the **Merge Tab**.
* Select **\<Name\>-prod** as the target branch to merge your **dev** branch changes.
* Check for merge conflicts before proceeding.
* After merging:
  - Switch to the **prod** branch from the GIT branches list.
  - Click the **down arrow** (⬇) next to the branch name to pull the latest changes.
  - Click **Deploy > Latest deployed preview** to see the updated app in production.
  
</dd>

4. **Resolving conflicts**

<dd>

* Merge conflicts occur when two users make conflicting changes to the same part of an app. Here's how to resolve them:
* If there is a **conflict warning** during merge, you will need to go to the Github repo and create a Pull Request from your develop to prod branch
* In the PR you will see the same conflicts, and based on it, would get option to resolve it from Github itself
* In the case where there are major conflicts, Github will recommend to checkout the repository in your local and resolve them manually

</dd>

## Configuring Multiple Environments and Setting Up CI/CD Pipelines

### 1. Creating and Managing Multiple Environments
<dd>

* Open your **Application** and navigate to the **Datasources** page (bottom-left corner).
* Click on any **existing datasource** and select **Edit**.
* On the right panel, you will notice:
  - **Production Environment** is already configured as the default.
  - **Staging Environment** can be configured manually.
* Click on **Manage Environments** at the bottom.
* Here, you can:
  - Create new environments (e.g., **Development, QA, UAT**).
  - View how many datasources are already configured for each environment across your workspace.

</dd>

### 2. Automating Deployments with CI/CD
<dd>

* Open the **Application** for which you want to set up CI/CD, preferably the one in the production instance/workspace.
* Click the **⚙️ (Cog icon)** to open **Git Settings** and go to the **Continuous Delivery** tab.
* Here, you'll see setup instructions along with a **cURL command** for the master branch.
* Click **Generate Bearer Token** to create an authentication token.
* Open the [Appsmith CI/CD documentation](https://docs.appsmith.com/advanced-concepts/version-control-with-git/cd-with-git) and choose a deployment tool (e.g., **GitHub Actions**).
* Follow the instructions to create a **GitHub Action** and copy-paste the YAML code.
* Replace the cURL command in the YAML file with:
  - The command generated for your application.
  - The **Bearer Token** from Appsmith.
* **Best Practice:** Store the **Bearer Token** as a **GitHub Secret** and reference it in your YAML file instead of hardcoding it.
* After saving the changes to your YAML file, check the confirmation box and click **Finish Setup**.
* Now, any time changes are merged, pushed, or committed to the **master branch**, the application will automatically redeploy with the latest updates.

</dd>

## Best practices

When you are working as team and collaborating using Version Control, some best practices need to be followed to ensure consistency and synchronisation across your org.

Here is a [documentation](https://www.appsmith.com/blog/appsmith-git-internal-tools-3) stating some of these practices that you can follow.
