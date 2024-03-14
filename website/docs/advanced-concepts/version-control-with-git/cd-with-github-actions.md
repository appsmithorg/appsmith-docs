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

Follow these steps to set up continuous delivery in Appsmith:

1. Open Git Settings located on the left side of the bottom bar.

2. Click on the **Continuous Delivery** tab.

3. Select the branch where you want to implement continuous delivery. For example, the `master`/`main` branch or any `feature` branch.

4. Copy the provided endpoints to integrate them into your CI/CD pipeline configuration. 

5. Generate a bearer token for authenticating requests to the provided endpoint. Save this token for future reference.

6. Click the **Finish Setup**.


## Set Up GitHub Actions Workflow

Follow these steps to configure a GitHub Actions workflow and automate continuous delivery for your Appsmith application:

1. Open the GitHub repository connected with your Appsmith application.

2. Create a directory called `.github/workflows` in the root of the repo.

3. Create a workflow `yaml` file in the `workflows` directory with an appropriate name, for example, `.github/workflows/deploy-appsmith.yaml`.

4. In the `deploy-appsmith.yaml` file, add the following code to enable automatic deployment of changes to your Appsmith application.

<dd>

Replace the `curl` command with the command provided by Appsmith.

```yaml
name: appsmith-cd  # Workflow name

on:
  push:
    branches:
      - main  # Trigger on push to main branch

jobs:
  deploy-appsmith:
    runs-on: ubuntu-latest  # Run on Ubuntu

    steps:
    // highlight-next-line
      - run: "curl --location --request POST https://app.appsmith.com/api/v1/git/deploy/app/65f2806f68?branchName=main --header 'Authorization: Bearer <bearer token>'"
```

This YAML code defines a GitHub Actions workflow named `appsmith-cd` that triggers on every push to the `main` branch. Within this job, a single step is defined to execute a `curl` command. 

</dd>

5. For the bearer token, it is recommended that you create secrets or secure variables instead of directly adding them to the repository. 


<dd>


*Example:* You can use GitHub Secrets, where you can securely add your token in the repository's **Secrets and Variables** settings.

And in the `deploy-appsmith.yaml` file, replace the `Authorization: Bearer <bearer token>` with `Authorization: Bearer ${{ secrets.APPSMITH_CD_KEY }}`


Learn more about [Github action secrets](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-a-repository)
</dd>



## Test the Continuous Delivery

Follow these steps to test continuous delivery after you have committed the YAML workflow file and added the bearer token:

1. Open the Appsmith App and create a new feature branch.

2. **Commit & Push** your modifications to the designated feature branch.

3. Open the GitHub repository and raise a pull request.

4. When you merge this into the `master`/`main` or specified branch, the GitHub Actions workflow automatically triggers and updates the deployed version and branch accordingly.


The changes are deployed to that branch without the need to pull the changes manually. Additionally, the live version of the Appsmith app reflects those changes. 









