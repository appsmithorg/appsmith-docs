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

This guide shows how to integrate Continuous Delivery with Git in Appsmith, enabling automatic updates to the master branch with GitHub Actions. This eliminates the need for manual pulling after each update.

## Prerequisites

* [Enterprise edition plan](https://www.appsmith.com/pricing).
* An app that is already connected with Git. See [How to Connect Git Repository](/advanced-concepts/version-control-with-git/connecting-to-git-repository).
* Basic knowledge of [GitHub Actions](https://docs.github.com/en/actions).

## Configure continuous delivery

Follow these steps to configure a GitHub Actions workflow and automate continuous delivery for your Appsmith application:


<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/kGleXejshDUbL9Qoy215?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>


1. Open the GitHub repository connected with your Appsmith application.

2. Navigate to the **Actions** tab and select the option to set up a workflow.

3. Rename the file to `deploy-appsmith.yaml`, and add the following code to enable automatic deployment of changes to your Appsmith application.

<dd>

```yaml
name: appsmith-cd  # Workflow name

on:
  push:
    branches:
        // highlight-next-line
      - master  # Trigger on push to master branch

jobs:
  deploy-appsmith:
    runs-on: ubuntu-latest  # Run on Ubuntu

    steps:
    // highlight-next-line
      - run: "curl -f --location --request POST https://app.appsmith.com/api/v1/git/deploy/app/65f14c735?branchName=master --header 'Authorization: Bearer <bearer token>'"
```

This YAML code defines a GitHub Actions workflow named `appsmith-cd` that triggers on every push to the `master` branch. Within this job, a single step is defined to execute a `curl` command. 

</dd>

4. Open your Appsmith application and then select **Git Settings** located on the left side of the bottom bar.

5. Click on the **Continuous Delivery** tab.

6. Select the branch where you want to implement continuous delivery. For example, the `master` branch or any `feature` branch.

7. Copy the provided endpoints and paste them into your CI/CD pipeline configuration.  Replace the `curl` command with the command provided by Appsmith(as mentioned in step 3).

5. Generate a bearer token for authenticating requests to the provided endpoint. Save this token for future reference.

<dd>

 For the [bearer token](https://oauth.net/2/bearer-tokens/), it is recommended that you create secrets or secure variables instead of directly adding them to the repository. 


*Example:* You can use GitHub Secrets, where you can securely add your token in the repository's **Secrets and Variables** settings. In the `deploy-appsmith.yaml` file, replace the `Authorization: Bearer <bearer token>` with `Authorization: Bearer ${{ secrets.APPSMITH_CD_KEY }}`


For information see [Github action secrets](https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-a-repository).
</dd>



9. Click the **Finish Setup** in your Appsmith application.




## Test the Continuous Delivery

Follow these steps to test continuous delivery after you have committed the YAML workflow file and added the bearer token:

1. Open the Appsmith App and create a new feature branch.

2. **Commit & Push** your modifications to the designated feature branch.

3. Open the GitHub repository and raise a pull request.

4. When you merge this into the `master` or specified branch, the GitHub Actions workflow automatically triggers and updates the deployed version and branch accordingly.


The changes are deployed to that branch without the need to pull the changes manually. Additionally, the live version of the Appsmith app reflects those changes. 









