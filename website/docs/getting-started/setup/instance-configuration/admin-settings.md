---
sidebar_position: 8
---
# Super Admin

Admin settings menu option is an alternative to updating <mark style="color:red;">`environment`</mark> variables by editing the `env` file from the UI. This new UI makes it easy for the superuser to change instance configuration without moving away from the comfort of your instance UI.

The admin settings page is a UI available **only to superusers on all self-hosted instances**.

## Using the Admin Settings UI

Once you log in as a superuser, you can find the Admin settings option in the profile dropdown.

![Admin Settings option is available in the profile dropdown.](/img/Admin\_settings.png)

You can update all the instance configurations listed [here](./) in the Admin settings.

![Use Admin Settings to configure your instance.](/img/Profile-Admin-Settings-Setup-Info.png)

:::tip
With the Admin Settings page, you can also configure [email](email/), [custom authentication](authentication/), [google maps](google-maps.md), and [more](./).
:::

The Admin settings are segregated based on the area they affect. Pick the desired category from the left panel. You can update any setting and click <mark style="color:red;">`save & restart`</mark> (The UI will show a restart modal while the instance restarts.) Once it restarts, your instance will have new settings.

### Configuring a Super Admin

If you don’t see the “**Admin Settings**” option in the Profile dropdown, you’re likely not the super admin of this instance. However, you can give super admin privileges to any user signed up in your instance by configuring the environment variable `APPSMITH_ADMIN_EMAILS` with comma-separated email ids of the users.

<pre class="language-bash"><code class="lang-bash"># Example Docker Configuration
<strong>APPSMITH_ADMIN_EMAILS=user1@appsmith.com,user2@appmith.com</strong></code></pre>

