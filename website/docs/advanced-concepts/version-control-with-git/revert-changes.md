
# Revert Changes

If you need to fix a mistake, undo an unwanted change, or simply view an earlier version of your app, you can revert changes that have already been committed to your Git repository. To revert a commit, you can use the `git revert` command in the remote repository. This command creates a new commit that undoes the changes made by a previous commit.

To revert a commit, follow these steps:

1. Clone the remote repository to a local system.
2. Identify the commit you want to revert: Use the `git log` command to identify the commit you want to revert. Take note of the commit hash.
3. Use the `git revert` command followed by the commit hash to create a new commit that undoes the changes made by the previous commit. For example, `git revert abc123`.
    1. If you need to revert multiple commits, you can use the `git revert` command multiple times, starting with the most recent commit and working backward.
    2. Some Git service providers such as [GitHub](https://docs.github.com/en/desktop/contributing-and-collaborating-using-github-desktop/managing-commits/reverting-a-commit) provide GUI to perform this operation.
4. Once you have reverted the commit, you should push the changes to your remote Git repository so that other members of your team can see the changes.
5. Once your changes have been reverted, you can pull them in the Appsmith app to deploy the changes.