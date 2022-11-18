# Drafts directory
Drafts directory stores the first drafts, outline, and final content that would be published.


We've sunset the drafts directory. Please refer to the [contributing guidelines](https://github.com/appsmithorg/appsmith-docs/blob/main/CONTRIBUTING.md) to raise PR for first drafts/change to existing documentation.


> **Please ensure that a doc ticket is raised. Use one of the available [templates](https://github.com/appsmithorg/appsmith-docs/issues/new/choose) to raise an issue.**


## Engineering team member
Engineering team members would be responsible for creating a first draft, a loom video explaining the feature, and sharing it with the doc team.

> **Along with the first draft, please create a loom video and add the link to the #doc.**

### Raise a draft request
Engineering team members to raise a draft request by following the below steps:

* Create a sub-folder with GitHub Doc Issue Id. For example, ```12345`` is the #doc issue. The folder hierarchy would be ```drafts >> 12345```
* Create a ```<file-title>_First_Draft.md``` file and add the first draft in the markdown. For example, you are writing the first draft for console api. The file path and title would be ```drafts >> 12345 >> Console_First_Draft.md``` where ```Console_First_Draft.md``` would be the title of the file.

> **You cannot create an empty folder. However, you can create a folder when creating the first file. You can do this by using the ```Add file >> Create new file``` option. Just make sure to add the ```/``` in the file path. For ```12345```, add ```12345/``` in the file name field to add it as a folder and then add the ```<file-title>_First_Draft.md``` to it.**

* Raise a pull request against v1.4 and assign it to the concerned EM/PM/Peer to review.
* Fix the review comments on the PR branch. Once finalized, merge the PR to v1.4.
* Engineer to assign the ticket to the documentation team and add the label ```Ready for Doc team```, push the ticket to ```Backlog (Draft Ready)``` pipeline on Zenhub. 

> **Please ensure that you have added the first draft (GitHub ```<file-title>_First_Draft.md```) file and the loom video link to the [ticket](https://github.com/appsmithorg/appsmith-docs/issues)**.

## Documentation team member
Documentation team members would be responsible for creating an outline, initial drafts, adding the finalized content to GitBook, resolving formatting issues (if any), and publishing the content.

> **Please ensure you use the same #ticket folder to add the outline and initial draft.** 

### Raise an outline request 
Doc team members to raise an outline request by following the below steps:
* Create an outline file with title - ```<#docId_title_outline>.md```. 
* Write the outline in markdown
    * Your outline should describe:
        * A high-level structure of the document
        * Content that would be added under each head
        * Cross-references, troubleshooting, and support links

* Raise a PR
    * Add the ```<#docId_title_outline>.md``` file to the #doc issue folder(12345)
        * Write an outline in markdown
        * Reviews, feedback, and finalize the outline with the engineer/peers
        * Merge the PR to v1.4.

 > **Please ensure that you have assigned PR to the peer/engineer for reviews**.     

### Raise an initial draft request
Doc team members to raise an initial draft request by following the below steps:
* Add a new file ```#docId_title.md```
    * Create the content in markdown using ```VS Code Editor```
    * Perform the vale linter and Grammarly checks
* Raise a PR
    * Reviews, Feedback, and finalize the draft with the engineer/peers
    * Merge the PR to v1.4

### Publish content
Now that the content is reviewed and signed off, add the markdown to GitBook. Follow the steps listed below:
* Raise a CR on GitBook

> **Please ensure that you have added the ``` doc issue id``` to the CR's subject.**

* Add the markdown from ```drafts\doc_issue_id\#docId_title.md```
* Resolve any formatting issue
* Submit the CR for review
* Finalize and merge the CR

> **Please verify the published doc. Add the published doc link to the doc ticket and close the ticket.**
