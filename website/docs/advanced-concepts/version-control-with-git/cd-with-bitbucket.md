---
description: Bitbucket Pipelines
title: Using Bitbucket Pipelines
hide_title: true
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Using Bitbucket Pipelines</h1>

<Tags
tags={[
{ name: "Enterprise", link: "https://www.appsmith.com/pricing", additionalClass: "enterprise" }
]}
/>

</div>

<!-- vale on -->

Bitbucket Pipelines is a CI/CD service integrated into Bitbucket repositories, automating build, test, and deployment workflows for software development.

This guide shows how to integrate Continuous Delivery with Git in Appsmith, enabling automatic updates to the master branch with Bitbucket Pipelines. This eliminates the need for manual pulling after each update.

## Prerequisites

* A self-hosted instance of Appsmith. Refer to the [Appsmith installation guides](/getting-started/setup/installation-guides) for detailed instructions on setting up your Appsmith instance.
* An app that is already connected with Git. See [How to Connect Git Repository](/advanced-concepts/version-control-with-git/guides/overview#connect-git-repository).
* You need to have a Bitbucket Cloud account.
* Basic knowledge of [Bitbucket Pipelines](https://support.atlassian.com/bitbucket-cloud/docs/get-started-with-bitbucket-pipelines/).

## Configure continuous delivery

Follow these steps to configure Bitbucket Pipelines workflow and automate continuous delivery for your Appsmith application:

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/f7cbRH8QjLrSbZGuP18W?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

1. In Bitbucket, go to your repository and select **Pipelines**.

2. Select one of the available templates. If you're unsure, use the one that is recommended.

3. Configure the YAML file. Alternatively, you can directly create a file named `bitbucket-pipelines.yml` within your project directory. Bitbucket requires the filename to be exactly as `bitbucket-pipelines.yml`.

<dd>

This YAML code configures a Bitbucket Pipeline to execute a deployment task using the `curl` command provided by Appsmith.

```yaml
image: atlassian/default-image:3

pipelines:
  branches:
      // highlight-next-line
    master:
      - step:
          script:
              // highlight-next-line
            - "curl --location --request POST https://internal.appsmith.com/api/v1/git/deploy/app/660d20f5d4a9150802bb8098?branchName=master --header \"Authorization: Bearer $NEW_APP_CD\""
```

</dd>

4. Open your Appsmith application and then select **Git Settings** located on the left side of the bottom bar.

5. Click on the **Continuous Delivery** tab.

6. Select the branch where you want to implement continuous delivery. For example, the `master` branch or any `feature` branch.

7. Copy the provided endpoints and paste them into your CI/CD pipeline configuration. Replace the `curl` command with the command provided by Appsmith(as mentioned in the YAML file in step 3).



8. Remove the `--fail-early` option from the endpoint, as it is not supported by bitbucket.




9. Generate and copy the bearer token for authenticating requests to the provided endpoint. Save this token for future reference. Once done, click the **Finish Setup** button in your Appsmith application.

10. In Bitbucket, add the **bearer token**. It is recommended that you create secrets or secure variables instead of directly adding them to the repository. 

<dd>

*Example:* You can use Bitbucket's variables and secrets to store the bearer token. Add your token as a variable in the repository settings, then in the YAML file, use `Authorization: Bearer $APP_CD_TOKEN`, where `APP_CD_TOKEN` represents the variable name, like:

```yaml
Replace:
  - 'Authorization: Bearer <bearer token>'
With:
  - "Authorization: Bearer $APP_CD\"
```



For information see [Variables and secrets](https://support.atlassian.com/bitbucket-cloud/docs/variables-and-secrets/).

</dd>

11. Commit the YAML file changes to the repository.

12. To check the status, click the **Run initial pipeline** button, and choose the branch and pipeline.


 <ZoomImage
        src="/img/bit-cd-status-.png"
        alt=""
        caption="Pipeline Status"
        lazyLoad="true"
/>


Upon successful completion of the run, you can monitor the pipeline's status, access detailed log information from its execution, and gather various other data. For information see [Bitbucket pipelines](https://support.atlassian.com/bitbucket-cloud/docs/view-your-pipeline/).


## Test the continuous delivery

Follow these steps to test continuous delivery after you have committed the YAML workflow file and added the bearer token:

1. Open the Appsmith App and create a new feature branch.

2. **Commit & Push** your modifications to the designated feature branch.

3. Open the repository and raise a pull request.

4. When you merge this into the `master` or specified branch, the pipeline workflow automatically triggers and updates the deployed version and branch accordingly.

The changes are deployed to that branch without the need to pull the changes manually. Additionally, the live version of the Appsmith app reflects those changes. 









