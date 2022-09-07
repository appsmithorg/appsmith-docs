# Super Admin

Admin settings menu option is an alternative to updating <mark style="color:red;">`environment`</mark> variables by editing the `env` file from the UI. This new UI makes it easy for the superuser to change instance configuration without moving away from the comfort of your instance UI.

The admin settings page is a UI available **only to superusers on all self-hosted instances**.

## Using the Admin Settings UI

Once you log in as a superuser, you can find the Admin settings option in the profile dropdown.

![Admin Settings option is available in the profile dropdown.](../../../.gitbook/assets/Admin\_settings.png)

You can update all the instance configurations listed [here](./) in the Admin settings.

<figure><img src="../../../.gitbook/assets/Profile-Admin-Settings-Setup-Info.png" alt=""><figcaption><p>Use Admin Settings to configure your instance.</p></figcaption></figure>

{% hint style="info" %}
With the Admin Settings page, you can also configure [email](email/), [custom authentication](authentication/), [google maps](google-maps.md), and [more](./).
{% endhint %}

The Admin settings are segregated based on the area they affect. Pick the desired category from the left panel. you can update any setting and click <mark style="color:red;">`save & restart`</mark> (The UI will show a restart modal while the instance restarts.) Once it restarts, your instance will have new settings.

### Configuring a Superuser

If you don’t see the “Admin Settings” option in the Profile dropdown, you’re likely not the super admin of this instance. However, you can give superuser privileges to any user signed up in your instance.

#### Docker Setup

If you have a <mark style="color:orange;">`docker-compose.yml`</mark> setup, then you can run the following single shell command that will do this for you in a single go:

{% code overflow="wrap" %}
```bash
email='<EMAIL OF USER TO MAKE SUPER ADMIN>'; sudo docker-compose exec appsmith mongo "$(awk -F= '$1 == "APPSMITH_MONGODB_URI" {print $2}' stacks/configuration/docker.env | cut -d '?' -f1)" --eval "db.user.updateOne({email: '$email'}, {\$addToSet: {policies: {permission: 'manage:instanceEnv', users: ['$email'], groups: []}}})"
```
{% endcode %}

{% hint style="warning" %}
Please change the parameter <mark style="color:red;">`<EMAIL OF USER TO MAKE SUPER ADMIN>`</mark> and add the email of the user who would be the superuser.
{% endhint %}

#### Other Instances

For other instances, please connect to your database (the database that is in use with the Appsmith instance) and run the following query after replacing <mark style="color:red;">`<EMAIL OF SUPER ADMIN>`</mark> with the user's email address should become a superuser.

{% hint style="warning" %}
&#x20;Please note that in the below command, you would have to replace the <mark style="color:red;">`<EMAIL OF SUPER ADMIN>`</mark> twice.
{% endhint %}

{% code overflow="wrap" %}
```mongodb
db.user.updateOne({email: '<EMAIL OF SUPER ADMIN>'}, {$addToSet: {policies: {permission: 'manage:instanceEnv', users: ['<EMAIL OF SUPER ADMIN>'], groups: []}}})
```
{% endcode %}

{% hint style="info" %}
The email address change **doesn’t** need a **restart** of any server. Refreshing the browser will show the **Admin Settings** option in the profile dropdown for the said user.
{% endhint %}
