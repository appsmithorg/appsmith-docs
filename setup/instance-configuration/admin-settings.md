# Admin Settings

Admin settings is an alternative to updating <mark style="color:red;">`env`</mark> variables by editing the `env` file from the UI. This new UI makes it easy for the superuser to change instance configuration without moving away from the comfort of your instance UI.

The admin settings page is a UI available only to superusers on all self-hosted instances.

## Using the Admin Settings UI

Once you log in as a superuser, you can find the Admin settings option in the profile dropdown.

You can update all the instance configurations listed [here](https://docs.appsmith.com/setup/instance-configuration) in the Admin settings.

![](../../.gitbook/assets/Admin\_settings.png)

The Admin settings are segregated based on the area they affect. Pick the desired category from the left panel. you can update any setting and click <mark style="color:red;">`save & restart`</mark> (The UI will show a restart modal while the instance restarts.) Once it restarts, your instance will have new settings.

### Configuring a Superuser

If you don’t see the “Admin Settings” option in the Profile dropdown, you’re likely not the super admin of this instance. However, you can give superuser privileges to any user signed up in your instance.

#### Docker Setup

If you have a typical <mark style="color:orange;">`docker-compose.yml`</mark> based setup, then you can run the following single shell command that will do this for you in a single go:

```
email='<EMAIL OF USER TO MAKE SUPER ADMIN>'; sudo docker-compose exec appsmith mongo "$(awk -F= '$1 == "APPSMITH_MONGODB_URI" {print $2}' stacks/configuration/docker.env | cut -d '?' -f1)" --eval "db.user.updateOne({email: '$email'}, {\$addToSet: {policies: {permission: 'manage:instanceEnv', users: ['$email'], groups: []}}})"
```

Please change <mark style="color:red;">`<EMAIL OF USER TO MAKE SUPER ADMIN>`</mark> with the email of the user that should become the superuser.

#### Other Instances

For other instances, please connect to your database (the database that is in use with the Appsmith instance) and run the following query:

```
db.user.updateOne({email: '<EMAIL OF SUPER ADMIN>'}, {$addToSet: {policies: {permission: 'manage:instanceEnv', users: ['<EMAIL OF SUPER ADMIN>'], groups: []}}})
```

After replacing <mark style="color:red;">`<EMAIL OF SUPER ADMIN>`</mark> with the email address of the user that should become a superuser. Please note that this email occurs twice in the above command.

{% hint style="info" %}
This change doesn’t need a restart of any server. Refreshing the browser page is enough. The “Admin Settings” entry should now be available in the profile menu.
{% endhint %}
