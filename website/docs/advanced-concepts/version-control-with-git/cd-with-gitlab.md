---
description: Continuous Delivery with GitLab CI/CD
title: Setup CI/CD Using GitLab
hide_title: true
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Setup CI/CD Using GitLab</h1>

<Tags
tags={[
{ name: "Enterprise", link: "https://www.appsmith.com/pricing", additionalClass: "enterprise" }
]}
/>

</div>

<!-- vale on -->

GitLab CI/CD is a continuous integration and continuous deployment service integrated into GitLab repositories. It automates the processes of building, testing, and deploying software, streamlining software development workflows.


This guide shows how to integrate Continuous Delivery with Git in Appsmith, enabling automatic updates to the master branch with GitLab CI/CD. This eliminates the need for manual pulling after each update.

## Prerequisites

* A self-hosted instance of Appsmith. Refer to the [Appsmith installation guides](/getting-started/setup/installation-guides) for detailed instructions on setting up your Appsmith instance.
* An app that is already connected with Git. See [How to Connect Git Repository](/advanced-concepts/version-control-with-git/connecting-to-git-repository).
* Basic knowledge of [GitLab CI/CD](https://docs.gitlab.com/ee/ci/).

## Configure continuous delivery

Follow these steps to configure GitLab CI/CD workflow and automate continuous delivery for your Appsmith application:


<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/n7sYdZoQIEZe62Ji5oo4?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

1. In GitLab, go to **Build** tab and select **Pipelines**.

2. Select one of the available templates. If you're unsure, use the test template.

3. Configure the YAML file. Alternatively, you can directly create a file named `gitlab-ci.yml` within your project directory. GitLab requires the filename to be exactly as `gitlab-ci.yml`.


<dd>






This YAML code configures a GitLab Pipeline to execute a deployment task using the `curl` command provided by Appsmith.

```yaml
stages:
  - deploy

deploy-job:
  stage: deploy
  rules:
      // highlight-next-line
    - if: '$CI_COMMIT_BRANCH == "master"'
      when: always
    - when: never
  script:
    # - echo $APPSMITH_CD
        // highlight-next-line
    - "curl --location --fail-early --request POST https://app.appsmith.com/api/v1/git/deploy/app/66042fd670bf652918?branchName=master --header \"Authorization: Bearer $APPSMITH_CD\""
```

</dd>

4. Open your Appsmith application and then select **Git Settings** located on the left side of the bottom bar.

5. Click on the **Continuous Delivery** tab.

6. Select the branch where you want to implement continuous delivery. For example, the `master` branch or any `feature` branch.

7. Copy the Appsmith-provided endpoint and paste it into your CI/CD pipeline configuration. Replace the `curl` command with the command provided by Appsmith(as mentioned in the YAML file in step 3).

8. Generate and copy the bearer token for authenticating requests to the provided endpoint. Save this token for future reference. Once done, click the **Finish Setup** button in your Appsmith application.

9. In GitLab, add the **bearer token**. It is recommended that you create secrets or secure variables instead of directly adding them to the repository. 


<dd>


*Example:* You can use GitLab's variables and secrets to securely store your bearer token. Add your token as a variable within the CI/CD settings of your repository. Subsequently, in your YAML file, use the token using `$GITLAB_CD_TOKEN`, like:


```yaml
Replace:
  - 'Authorization: Bearer <bearer token>'
With:
  - "Authorization: Bearer $GITLAB_CD_TOKEN\"
```



For information see [GitLab CI/CD variables](https://docs.gitlab.com/ee/ci/variables/).

</dd>

10. Commit the YAML file changes to the repository.


11. To check the status, open the **Pipelines** tab:


 <ZoomImage
        src="/img/gitlab-cd-img.png"
        alt=""
        caption="Pipeline Status"
        lazyLoad="true"
/>


Upon successful completion of the run, you can monitor the pipeline's status, access detailed log information from its execution, and gather various other data. For information see [GitLab CI/CD pipelines](https://docs.gitlab.com/ee/ci/pipelines/).




## Test the continuous delivery

Follow these steps to test continuous delivery after you have committed the YAML workflow file and added the bearer token:

1. Open the Appsmith App and create a new feature branch.

2. **Commit & Push** your modifications to the designated feature branch.

3. Open the repository and raise a pull request.

4. When you merge this into the `master` or specified branch, the pipeline workflow automatically triggers and updates the deployed version and branch accordingly.

The changes are deployed to that branch without the need to pull the changes manually. Additionally, the live version of the Appsmith app reflects those changes. 









