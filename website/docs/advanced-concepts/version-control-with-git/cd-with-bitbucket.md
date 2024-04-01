---
description: Continuous Delivery with Bitbucket Pipelines
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

This guide shows how to integrate Continuous Delivery with Git in Appsmith, enabling automatic updates to the master/main branch with Bitbucket Pipelines. This eliminates the need for manual pulling after each update.

## Prerequisites

* [Enterprise edition plan](https://www.appsmith.com/pricing).
* An app that is already connected with Git. See [How to Connect Git Repository](/advanced-concepts/version-control-with-git/connecting-to-git-repository).
* You need to have a Bitbucket Cloud account.
* Basic knowledge of [Bitbucket Pipelines](https://support.atlassian.com/bitbucket-cloud/docs/get-started-with-bitbucket-pipelines/).

## Configure continuous delivery

Follow these steps to set up continuous delivery in Appsmith:


<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/qyXQyJVooFHKHPPyqfvU?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>


1. Open Git Settings located on the left side of the bottom bar.

2. Click on the **Continuous Delivery** tab.

3. Select the branch where you want to implement continuous delivery. For example, the `master`/`main` branch or any `feature` branch.

4. Copy the provided endpoints to integrate them into your CI/CD pipeline configuration. 

5. Generate a bearer token for authenticating requests to the provided endpoint. Save this token for future reference.

6. Click the **Finish Setup**.


## Set Up Bitbucket Pipelines

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/tOESOR4JMTtaniUAk1ob?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>


Follow these steps to configure Bitbucket Pipelines workflow and automate continuous delivery for your Appsmith application:

1. In Bitbucket, go to your repository and select **Pipelines**.

2. Select one of the available templates. If you're unsure, use the one that is recommended.

3. Configure the YAML file. Alternatively, you can directly create a file named `bitbucket-pipelines.yml` within your project directory.

<dd>

:::note
Bitbucket requires the filename to be exactly as `bitbucket-pipelines.yml`.
:::



This YAML code configures a Bitbucket Pipeline to execute a deployment task using the `curl` command provided by Appsmith(as mentioned in step 4 of section 1).

```yaml
image: atlassian/default-image:3

pipelines: 
  branches:
    main:
      - step:
          script:
              // highlight-next-line
            - "curl --location --fail-early --request POST https://release-ee.appsmith.com/api/v1/git/deploy/app/660427bb3927480dc0720914?branchName=master --header \"Authorization: Bearer <bearer token>\""
```

</dd>


4. For the bearer token, it is recommended that you create secrets or secure variables instead of directly adding them to the repository. 


<dd>


*Example:* You can use Bitbucket's variables and secrets to store the bearer token. Add your token as a variable in the repository settings, then in the YAML file, use `Authorization: Bearer $APP_CD_TOKEN`, where `APP_CD_TOKEN` represents the variable name.


For information see [Variables and secrets](https://support.atlassian.com/bitbucket-cloud/docs/variables-and-secrets/).
</dd>

5. Commit the YAML file changes to the repository.

6. Click the **Run initial pipeline** button, and choose the branch and pipeline.


 <ZoomImage
        src="/img/bit-cd-status-.png"
        alt=""
        caption="Pipeline Status"
        lazyLoad="true"
/>


Upon successful completion of the run, you can monitor the pipeline's status, access detailed log information from its execution, and gather various other data.




## Test the Continuous Delivery

Follow these steps to test continuous delivery after you have committed the YAML workflow file and added the bearer token:

1. Open the Appsmith App and create a new feature branch.

2. **Commit & Push** your modifications to the designated feature branch.

3. Open the repository and raise a pull request.

4. When you merge this into the `master`/`main` or specified branch, the pipeline workflow automatically triggers and updates the deployed version and branch accordingly.

The changes are deployed to that branch without the need to pull the changes manually. Additionally, the live version of the Appsmith app reflects those changes. 









