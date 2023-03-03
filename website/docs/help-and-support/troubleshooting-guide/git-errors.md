---
sidebar_position: 7
---

# Git Errors

<details>
  <summary>What if I deleted a remote branch?</summary>

  Branches deleted directly on the remote repository canont be re-created through Appsmith. The user needs to checkout a new branch from the local version of the deleted remote branch, commit and push the changes to remote.

  For example: If `fix-abc` was deleted from the remote repository. The user needs to checkout `fix-abc` on Appsmith, create a new branch `new-fix-abc`, commit their changes and push them to remote. The user can then follow the Git flow with `new-fix-abc` branch.

  To prevent these kind of errors, important branches should have protections on remote repositories that prevent deletion.
</details>
