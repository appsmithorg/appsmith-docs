
# Revert Changes

This guide shows how to revert a committed change to a specific branch or default branch in Git, allowing you to fix a mistake or undo an unwanted change.

You can revert changes from Git user interfaces provided by some platforms, but it is recommended to perform reverts from the local system using Git commands.


1. Open your App Git repository and clone it to your local system.

2. Switch to the branch where you want to revert the change:

<dd>

```bash
git checkout <branch-name>
```
</dd>

3. To identify the commits, in the terminal use:

<dd>

```bash
git log
```

This displays a list of commits in reverse chronological order, starting with the most recent commit. Each commit entry includes information such as the commit hash, author name, date, and commit message, like:

```sql
commit 2f50d7dd1dc4874b7ca6054099b54 (HEAD -> feature, origin/feature)
Author: John Doe <john.doe@appsmith.com>
Date:   Wed May 1 08:34:56 2024 +0000

    Fixed bug in user authentication logic

commit af0e737a28e0d5c816912a336
Author: James <j.james@appsmith.com>
Date:   Wed May 1 08:27:00 2024 +0000

    Added new feature to user dashboard
```

</dd>

4. To revert a commit, use the `git revert` command followed by the commit hash: 


<dd>

*Example*: 

If you want to revert a single commit:

```bash
git revert 2f50d7dd1dc4874b7ca6054099b54
```

If you want to revert multiple commits:

```js
git revert 2f50d7dd1dc4874b7ca6054099b54^..af0e737a28e0d5c816912a336

//git revert <commit-hash-1>^..<commit-hash-2>
```

Make sure to revert changes in chronological order, starting with the newest commit first.

Some Git platforms, like [GitHub](https://docs.github.com/en/desktop/managing-commits/reverting-a-commit-in-github-desktop) & [GitLab](https://docs.gitlab.com/ee/user/project/merge_requests/revert_changes.html#revert-a-commit), also offer a graphical user interface that allows you to revert changes directly from the platform's interface.


</dd>


5.  If there are conflicts during the revert process, resolve them manually by editing the conflicting files and then continue with the revert process.

6. After resolving conflicts (if any), commit and push the changes to your remote Git repository.

7. Once your changes have been reverted, you can pull them in the Appsmith app to deploy the changes.




## See also

* Git Best Practices
* Resolve Merge Conflicts



