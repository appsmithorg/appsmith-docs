---
sidebar_position: 8
---
# Updating Local File Path

Appsmith clones the git repositories in the local filesystem, attached to the persistent volume within the docker container. To maintain the git repositories, we will need a file path that will point to the volume within the docker container. We can quickly achieve this by just updating the relevant environment variable.

:::info
If the file path is not present, git repositories will be cloned, but this will not be persistent, and Appsmith will try to clone the repositories in case they got deleted by docker restart, etc.
:::

#### Custom Git Root

To point to a custom Git Root where the git repositories will be persisted, update the env variable called APPSMITH\_GIT\_ROOT to point to your custom file path.

```
APPSMITH_GIT_ROOT=./path/to/repo/directory 
```

Please remember to restart the container to apply changes.
