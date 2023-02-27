---
sidebar_position: 9
---

# Best practices with Git

### General

- Define a naming convention for branches that works for your team.
    - Might help to include MMYYYY, developer name, purpose of branch, etc
- Avoid making changes directly to the main branch, especially when others have a branch started.
- Write meaningful commit messages that your coworkers will understand.
    - Use code comments in JS Object for more detailed notes if needed.

### Multiple developers with a single branch (developer/reviewer)

- Determine the scope of the update to be performed
    - Break into smaller tasks
    - use separate branches and review cycles for each task
- Create a new branch for the update
- Follow the git workflow
    - Complete update and commit change to the new branch
    - Coworker reviews new branch and merges with Main

### Multiple Developers with separate branches

Merge conflicts can occur when different branches attempt to merge changes to the same page of an app. Multiple developers can collaborate on the same app, but each one should focus on a different page.

#### For changes that affect more than just one page of the app (theme, datasources, etc),

1. Avoid making these changes when other branches are in the middle of building new updates.
2. Ensure that these changes are completed and pushed to the main branch.
3. Pull changes from main to any other branch that's in development.
4. Finish updates to the other branch, then commit and merge with main.