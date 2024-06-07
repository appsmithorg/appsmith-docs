# Git Errors

This page shows how to resolve common Git errors on Appsmith.

### Invalid Git repo

<Message
 messageContainerClassName='error'
messageContent='Invalid Git repo'></Message>

#### Cause

The SSH address provided is incorrect or access rules prevent connection to the repository.

#### Solution

- Verify if the SSH address is correct and functional.
- Check connection rules on the platform where the application is deployed.
- If issues persist, contact support for assistance.

 ### Invalid GitConfig

<Message
 messageContainerClassName='error'
messageContent='Invalid GitConfig.'></Message>



#### Cause

 This error occurs due to a Redis cache issue with user profiling, resulting in an invalid Git configuration.


#### Solution

- Logout from the application.
- Login again to refresh the user profile and Git configuration.
- If issues persist, contact support for assistance.



### Conflicts while merging

<Message
 messageContainerClassName='error'
messageContent='Conflicts while merging branch b <= a'></Message>



#### Cause

Conflicts arise during the merging process when the same file has been edited on both branches, and Git cannot automatically resolve these conflicts.


#### Solution

If facing conflicts in the Appsmith UI while merging branch `A` into branch `B`, raise a pull request targeting branch `B` on your Git provider, and manually resolve the conflicts.

See [Resolve Merge Conflicts in Git](/advanced-concepts/version-control-with-git/commit-and-push)



 ### Git push failed for pending upstream changes

<Message
 messageContainerClassName='error'
messageContent='Looks like there are pending upstream changes. To prevent you from losing history, we will pull the changes and push them to your repo.'></Message>



#### Cause

If you're working on branch `A` and someone else pushes changes to the remote counterpart of the same branch, you may encounter conflicts if both have edited the same files.



#### Solution

To resolve this:

- Create a new branch from your local branch `A`, naming it branch `A-fix`.
- Raise a pull request from branch `A-fix` against the original branch `A`.
- Resolve conflicts within the pull request interface or locally before merging.
- In Appsmith, discard and pull the changes into branch `A`. 


See [Resolve Merge Conflicts in Git](/advanced-concepts/version-control-with-git/commit-and-push)

 ### Maximum call size exceeded error

<Message
 messageContainerClassName='error'
messageContent='Maximum call size exceeded'></Message>



#### Cause

This error is due to the size limit on the merge operation being exceeded, possibly from large files or too many changes.




#### Solution

Split the merge operation into smaller chunks and remove any unnecessary large files from the repository.



 ### Private repo limit error


<Message
 messageContainerClassName='error'
messageContent='Private Repo Limit Error'></Message>



#### Cause

 This occurs due to restrictions on the number of private repositories that can be connected.

#### Solution

In the community edition, you can only connect to 3 private repositories. If you want to connect more private repositories, you must upgrade to a paid plan. For more information, see [Pricing](https://www.appsmith.com/pricing).






