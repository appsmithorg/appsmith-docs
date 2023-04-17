# Update Local File path

For self-hosted instances, Appsmith clones the Git repositories in the local file system, attached to the persistent volume within the Docker container. To maintain the Git repositories, you need a file path that points to the volume within the Docker container.

To update the file path to point to a custom Git root where the repositories are persisted:

1.  Update the `APPSMITH_GIT_ROOT` environment variable as shown below:

```
APPSMITH_GIT_ROOT= <path-to-repo-directory>
```

2. Restart the container to apply changes.

:::info
If the file path isn't present, git repositories are cloned, but this isn't persistent, and Appsmith would try to clone the repositories in case they got deleted by docker restart, etc.
:::