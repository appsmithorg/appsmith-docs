# Contributing to Appsmith documentation

Thank you for your interest and for taking time to contribute to the Appsmith documentation project. 🙌
Appsmith is a project by developers for developers. Appsmith documentation help developers learn and build apps faster on Appsmith.

In this guide, you'll get an overview of the workflow from opening an issue, creating pull requests, reviewing, and merging.

> You could use the table of contents icon at the top left corner to navigate to a specific section.

## Code of conduct

Appsmith has a Code of Conduct that the participants should adhere to. Please read the [Code of Conduct](https://github.com/appsmithorg/appsmith/blob/release/CODE_OF_CONDUCT.md) before contributing.

## Issue
You can raise an issue by using different templates to choose the one that best suits your case. Follow the steps listed below to raise issues:

> Please ensure that you are raising an issue against the [appsmith-docs](https://github.com/appsmithorg/appsmith-docs/issues) repository.

- Login to [GitHub.com](https://github.com/login).
- Navigate to the repository page and select the [appsmith-docs](https://github.com/appsmithorg/appsmith-docs) repository.
- Click Issues
- Click New Issue

![Raise a doc Issue](/website/static/img/Raise-Issues.png)

### Types
You could select one of the available templates for raising an issue.

![Issue Types](/website/static/img/Issue-Types.png)

- Documentation Improvement - to raise an improvement request. You could select this issue for raising issues in the existing documents.
- Documentation Feature - to raise a new documentation request. You could select this type of issue for raising a new documentation request.

#### Documentation improvement

You can use this template to raise any improvements on the existing documentation. The improvement request could include replacing images/videos/modifying the content to enhance readability etc. You’ll have to add the below details to raise a doc improvement issue.

![Documentation Improvement Issue](/website/static/img/Documentation-Improvement-Issue-Template.png)

| Attribute | Description |
| --- | --- |
| Title | Title of the Doc Issue |
| Existing Issues | Ensure that you’ve searched the existing issues for any similar issues if there are similar issues available. Update the existing issue with your scenario. |
| Documentation Link | Add the link from docs.appsmith.com to the appropriate page for which the improvement request is raised. |
| Discord/Slack/intercom link | Add the link to the appropriate channel/discussion thread. |
| Describe the problem | Add a summary of issues or sections that needs improvements. |
| Describe the improvement | Add a summary of improvements that you are requesting. |
| Why do you think this change is needed?  | Explain the reasons for which the change is requested. Add user queries/requests/issues and resolutions. |

#### Documentation feature

You can use this template to raise a new documentation request. For example, if you couldn't find documentation for GraphQL or if you want to submit an upcoming feature documentation request.

![Documentation Feature Issue](/website/static/img/Documentation-Feature-Issue-Template.png)

| Attribute | Description |
| --- | --- |
| Title | Title of the Doc Issue |
| Existing Issue | Ensure that you’ve searched the existing issues for any similar issues if there are similar issues available. Update the existing issue if needed. |
| First Draft Link | Add the link to the first draft. (Typically, this would be the link to a sub-page available under First Drafts on the notion) |
| Loom video link |  Add the link to a loom video that explains the feature. |
| Discord/Slack/intercom link | Add the link to the appropriate channel/discussion thread. |
| Documentation search terms/ link | Add a link or search terms|
| Release Date | Add a tentative/actual release date of the feature. |
| Link to PRD | Add a link to PRD, Design doc, or any other document that would help the documentation team better understand the feature. |
| Link to test plan/cases | Add a link to the test plan or cases to help the documentation team understand the edge cases (if any). |
| Add user use cases summary /user requests  |  Add a summary of user requests/use cases so the same can be included in the documentation. |

## Pull request
You would have to branch out from the ```main``` branch. Make changes to the existing documents or add a new document in this branch. Once you're happy, create a pull request[PR].

It's recommended that you add the ticket number to the branch name, so it's easy to follow when reviewing the changes.

> Please ensure that a doc ticket is raised. If not, please use one of the available [issue types](#types) to submit an issue.

### Raising a new document pull request
You should raise a pull request[PR] for adding the first draft by creating a folder structure in the appropriate directory structure of the documentation hierarchy.

For example, you are working on adding the first draft for SSO - OIDC integration with AWS Cognito. Then, you would add the new documentation page in the below documentation hierarchy:

filename - aws-cognito.md
hierarchy - website/docs/getting-started/setup/instance-configuration/authentication/openid-connect-oidc

Write your first draft, raise a pull request against the ```main``` branch, and assign it to the appropriate stakeholders (engineering team members) for review. 

Once the review is completed, update the documentation ticket with the link to the PR and the loom video, and assign the ticket to the documentation team.

> Please ensure that the PR is left open and not merged. Please link the issue to the PR.

The documentation team would work on the same PR to share the outline/refine the document by rewriting the content/adding videos/images.

### Raise an existing document change pull request
You should raise a pull request[PR] for adding changes to a current document in the appropriate directory structure of the documentation hierarchy.

For example, you are modifying docker documentation. Then, you should edit the file available in the below documentation hierarchy:

filename - README.md
hierarchy - website/docs/getting-started/setup/installation-guides/docker/README.md

Do the changes to the file and raise a pull request against the ```main``` branch, and assign it to the appropriate stakeholders (engineering team members and documentation team members) for review. 

> Please ensure that the PR is left open and not merged. Please link the issue to the PR.

The documentation team would refine the changes/structure and approve and merge the PR.

#### Approving and merging the pull request

The reviews would happen as part of the pull request, as pull request comments.
* You can apply the changes to the pull request[PR].
* As you apply changes to the PR, please mark the comments as resolved.
* You can verify the content changes as part of the deploy review, available on the conversation tab under the vercel section.

  ![Preview your changes](/website/static/img/Deploy-preview-Content-Changes.png)

* Once all the review comments are addressed, please re-request the review.

>  It's mandatory to accept the Contributor License Agreement [CLA]. Please ensure that you've signed and accepted the CLA.

The PR can be merged with the main branch by the relevant stakeholders; when all parties are happy with the changes, the PR is approved, and CLA is accepted.
