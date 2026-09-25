---
description: Deploy Appsmith with one click using Easypanel's official template.
---

# Easypanel

[Easypanel](https://easypanel.io/) is a server control panel that can deploy Appsmith with one click using its official template, without needing to manually run Docker commands.

## Steps

1. Open your Easypanel dashboard and create (or open) a project
2. Click **+ Add Service** and choose **Templates**
3. Search for **Appsmith** and select it
4. Click **Create** to deploy the service

Easypanel runs the official Appsmith Docker image (`appsmith/appsmith-ce`) for you and mounts a persistent volume for `/appsmith-stacks`.

See the [official Appsmith template on Easypanel](https://easypanel.io/templates/appsmith) for more details.
