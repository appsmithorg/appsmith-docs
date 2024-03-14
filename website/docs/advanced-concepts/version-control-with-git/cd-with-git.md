---
description: Continuous Delivery with Git
title: Continuous Delivery with Git
hide_title: true
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Continuous Delivery with Git</h1>

<Tags
tags={[
{ name: "Enterprise", link: "https://www.appsmith.com/pricing", additionalClass: "enterprise" }
]}
/>

</div>

<!-- vale on -->

This guide shows how to integrate Continuous Delivery with Git in Appsmith. This allows for automatic updates to the master/main branch, eliminating the need to manually pull changes after each update.





## Prerequisites

* [Enterprise edition plan](https://www.appsmith.com/pricing).
* An app that is already connected with Git. See [How to Connect Git Repository](/advanced-concepts/version-control-with-git/connecting-to-git-repository)


## Configure continuous delivery

To configure continuous delivery follow these steps:



1. Open Git Settings located on the left side of the bottom bar.

2. Click on the Continuous Delivery tab.

3. Select the branch where you want to implement continuous delivery. For example, the `master`/`main` branch or any `feature` branch.

4. Copy the provided endpoints and integrate them into your CI/CD pipeline configuration, deployment scripts, or any other relevant tool. 

<dd>

*Example:* You can integrate this command into your GitHub Actions workflow to automate deployments after successful builds. Add it as a step in your workflow YAML file, specifying the endpoint URL and bearer token as environment variables or directly in the script.


```api
curl --location --request POST https://app.appsmith.com/api/v1/git/deploy/app/65f28?branchName=main --header 'Authorization: Bearer <bearer token>'
```

This curl command sends a POST request to deploy an application to the specified branch (main), using the provided endpoint URL and authorization token.

</dd>

5. Generate a bearer token for authenticating requests to the provided endpoint. 

6. Click the Finish Setup button.


