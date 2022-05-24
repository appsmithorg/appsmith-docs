# Merging Branches



When you want to merge your branch with the base branch -

1. Click on the Merge button at the bottom left corner of the screen. It will open the merge tab
2. Select your base branch and check the merge status
   1. The `base` and `head` branches shouldn't have any uncommitted changes.
   2. The remote counterpart of the `base` branch shouldn't have any commits that are missing locally (the local and remote versions should be in sync.)
   3. The `base` and the `head` branch shouldn't have any conflicting changes.
3. Click on `Merge Changes` if the merge status check is successful.

#### **Conflicts**

Consider a scenario where the **user1** wants to develop a new feature and have a single branch _<mark style="color:green;">main</mark>_**.** As a general practice user creates _<mark style="color:orange;">feature/f1</mark>_ from the main branch. At the same time, **user2** updates the _<mark style="color:green;">main</mark>_ branch with the same resources like page, query, or JSObject that **user1** modifies on the _<mark style="color:orange;">feature/f1</mark>_ branch. If **user1** tries to merge _<mark style="color:orange;">feature/f1</mark>_ to _<mark style="color:green;">main</mark>_**,** it leads to a merge conflict.

You can resolve it in the following way:

* Create a pull request with _<mark style="color:green;">main</mark>_ as the base branch;
* Resolve the conflicts on remote branches (Between _<mark style="color:orange;">origin/f1</mark>_ and _<mark style="color:green;">origin/main</mark>_);
* Once the conflicts are resolved, merge this new branch(_<mark style="color:orange;">origin/f1</mark>_) into the old branch(_<mark style="color:green;">origin/main</mark>_);

(_<mark style="color:green;">origin/main</mark>_ **<-** _<mark style="color:orange;">origin/f1</mark>_)

* Pull the main branch again in your app. Now you should have all the changes from the _<mark style="color:orange;">feature/f1</mark>_ branch;
* Delete branch _<mark style="color:orange;">origin/feature/f1</mark>_ on remote;
* Sync branch with remote to remove _<mark style="color:orange;">feature/f1</mark>_ from the local repository.
