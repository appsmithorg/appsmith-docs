---
description: Continuous Delivery with GitHub Actions
title: Continuous Delivery with GitHub Actions
hide_title: true
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Continuous Delivery with GitHub Actions</h1>

<Tags
tags={[
{ name: "Enterprise", link: "https://www.appsmith.com/pricing", additionalClass: "enterprise" }
]}
/>

</div>

<!-- vale on -->

This guide shows how to integrate Continuous Delivery with Git in Appsmith, enabling automatic updates to the master/main branch with GitHub Actions. This eliminates the need for manual pulling after each update.

## Prerequisites

* [Enterprise edition plan](https://www.appsmith.com/pricing).
* An app that is already connected with Git. See [How to Connect Git Repository](/advanced-concepts/version-control-with-git/connecting-to-git-repository).
* Basic knowledge of how [GitHub Actions](https://docs.github.com/en/actions) work.

## Configure continuous delivery

To configure continuous delivery follow these steps:

1. Open Git Settings located on the left side of the bottom bar.

2. Click on the Continuous Delivery tab.

3. Select the branch where you want to implement continuous delivery. For example, the `master`/`main` branch or any `feature` branch.

4. Copy the provided endpoints to integrate them into your CI/CD pipeline configuration. 

5. Generate a bearer token for authenticating requests to the provided endpoint. Save this token for future reference or use in subsequent steps.

6. Click the Finish Setup button.


## Set Up GitHub Actions Workflow


1. Open the GitHub repository connected with your Appsmith application.

2. Open the [GitHub code editor](https://docs.github.com/en/codespaces/the-githubdev-web-based-editor) by pressing `.`, or change the URL from `github.com` to `github.dev`.

3. Create a new GitHub Actions workflow file within the `.github` folder, like `.github/workflows/deploy-appsmith.yaml`.

4. In the `deploy-appsmith.yaml` file, add the following code to enable automatic deployment of changes to your Appsmith application.

<dd>

Replace the `curl` command with the command provided by Appsmith.

```yaml
name: appsmith-cd

on:
  push:
    branches:
      - main

jobs:
  deploy-appsmith:
    runs-on: ubuntu-latest
    steps:
     // highlight-next-line
      - run: "curl --location --request POST https://app.appsmith.com/api/v1/git/deploy/app/65f28036aa8d2a48b3e96f68?branchName=main --header 'Authorization: Bearer <bearer token>'"
```

This YAML code defines a GitHub Actions workflow named `appsmith-cd` that triggers on every push to the `main` branch. Within this job, a single step is defined to execute a `curl` command. 

</dd>


5. For the bearer token, it is recommended to avoid direct inclusion in the repository when using GitHub Actions. Instead, use GitHub Secrets for secure storage and access. Secrets are encrypted variables that you can create in your repository and are securely stored by GitHub.


<dd>

In the `deploy-appsmith.yaml` file, replace the `Authorization: Bearer <bearer token>` with `Authorization: Bearer ${{ secrets.APPSMITH_CD_KEY }}`


</dd>

6. Commit and push the changes from the Github code editor.


7. Open the GitHub repository settings, then navigate to the **Secrets and Variables** section under the **Security** tab, and select **Actions**.


8. Create a new repository secret named `APPSMITH_CD_KEY`, and add the **bearer token** from Appsmith as the secret value.




## Test the Workflow

1. Open your Appsmith App and create a new feature branch.

2. **Commit & Push** your modifications to the designated feature branch.

3. Open GitHub and raise a pull request.

4. When you merge this into the master/main or specified branch, the GitHub Actions workflow automatically triggers and updates the deployed version and branch accordingly.











