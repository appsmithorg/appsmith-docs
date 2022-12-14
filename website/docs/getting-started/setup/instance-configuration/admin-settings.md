---
sidebar_position: 8
---
# Super Admin

Admin Settings page provides a comfortable UI to configure your Appsmith instance. It's available only to superusers on all self-hosted instances. See below on how to [configure superusers](#configuring-a-super-admin) for your instance.

## Using the Admin Settings UI

Once you log in as a superuser, you can find the Admin Settings option in the left sidebar.

![Admin Settings option is available in the left sidebar.](/img/Admin\_settings.png)

You can update all the instance configurations listed [here](./) in the Admin Settings, including [email](email/), [custom authentication](authentication/), [google maps](google-maps/).

![Use Admin Settings to configure your instance.](/img/Profile-Admin-Settings-Setup-Info.png)

The Admin Settings are segregated based on the area they affect. Pick the desired category from the left panel. You can update any setting and click `save & restart` (the UI shows a restart modal while the instance restarts). Once it restarts, your instance has the new settings.

### Configuring a Super Admin

If you don’t see the “**Admin Settings**” option in the left sidebar, you’re likely not the super admin of this instance. You can give super admin privileges to any user signed up in your instance by configuring the environment variable `APPSMITH_ADMIN_EMAILS` with comma-separated email ids of the users.

```bash
# Example Docker Configuration
APPSMITH_ADMIN_EMAILS=user1@mydomain.com,user2@mydomain.com
```
