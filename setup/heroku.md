---
description: Deploy appsmith on Heroku with our one click deploy option
---

# Heroku
Heroku is a cloud platform as a service supporting several programming languages. One of the first cloud platforms, Heroku has been in development since June 2007, when it supported only the Ruby programming language, but now supports Java, Node.js, Scala, Clojure, Python, PHP, and Go.

{% embed url="https://youtu.be/Bclt\_VmDMpo" caption="" %}

## Deployment Steps

1. Sign up for a free account on Heroku
2. Click the button [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/appsmithorg/appsmith/tree/master)
3. Fill in the **Required** **Config Field**:

### Required Config Fields

1. **APPSMITH\_ENCRYPTION\_PASSWORD**: Encryption password to encrypt all credentials in the database. You can use any random string \(Eg. abcd\). The more random, the better.
2. **APPSMITH\_ENCRYPTION\_SALT**: Encryption salt used to encrypt all credentials in the database. You can use any random string \(Eg. abcd\). The more random, the better.
3. **APPSMITH\_MONGODB\_URI**: Your Mongo Database URI. Since Heroku doesn't support a managed MongoDB instance, you'll have to create a Mongo DB instance on another service such as [https://cloud.mongodb.com](https://cloud.mongodb.com). Check out [this link](https://docs.atlas.mongodb.com/getting-started/) for steps on creating a free account with MongoDB Atlas and setting up your first cluster.

### Optional Config Fields

1. **App Name**: Optionally select a name for your application \(this will be used in the application URL\)
2. **Runtime Selection**: Select which region your app should run in \(the United States or Europe\)

The other optional fields can be used to [configure various services](instance-configuration/#available-configurations) in the appsmith instance.

{% hint style="success" %}
After Heroku finishes setting up the app, click “View” and your Appsmith should be up and running. You will be taken to the account creation page, where you can enter credentials to create an account and get started.
{% endhint %}

{% hint style="warning" %}
We use the **Heroku Redis Addon** for caching which requires your account to have billing information, but we use the free plan of this addon so it will charge you nothing. Please ensure your account already has billing information.
{% endhint %}

{% hint style="warning" %}
You may need to wait 2 - 3 minutes before accessing the application. This is because Heroku may take a while to spin up the dyno and start the Appsmith application.
{% endhint %}

## Re-Deploy your App using Heroku CLI

To re-deploy your app \(re-build & re-run\), make sure you have Docker & Heroku CLI setup locally. Docker is required to build the updated image locally before being pushed to the Heroku platform.

Then follow the steps below:

* Pull the Appsmith repository from Github & move to the `heroku` folder:

  ```text
    git clone --branch master https://github.com/appsmithorg/appsmith
    cd ./appsmith/deploy/heroku
  ```

* Login to Heroku CLI

  ```text
    heroku login
  ```

* Login to Container Registry

  ```text
    heroku container:login
  ```

* Get your application name

  ```text
    heroku apps
  ```

* Push your Docker-based app

  ```text
    heroku container:push web -a <Your App Name>
  ```

* Deploy the changes

  ```text
    heroku container:release web -a <Your App Name>
  ```

Wait for a couple of minutes to let Heroku re-deploy Appsmith with the latest changes. You can check if Appsmith is running properly by visiting your Heroku URL \(or custom domain if you've set one up\)

## Troubleshooting

If you encounter any errors during this process, check out our guide on [debugging deployment errors](../troubleshooting-guide/deployment-errors.md), if you are still facing an issue please reach out to [support@appsmith.com](mailto:support@appsmith.com) or join our [Discord Server](https://discord.com/invite/rBTTVJp) to directly speak to the appsmith team!

## Further Reading

* [Configuring Self Hosted Instances](instance-configuration/#configuring-docker-installations)
* [Managing the Appsmith instance](instance-management.md)
* [Tutorials](../tutorials/)

