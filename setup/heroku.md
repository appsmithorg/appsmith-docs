---
description: Deploy appsmith on Heroku with our one click deploy option
---

# Heroku

## Deployment Steps

1. Sign up for a free account on Heroku
2. Click the button [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/appsmithorg/appsmith/tree/master)
3. Fill in the required `Config Variables`  including:
   * `APPSMITH_ENCRYPTION_PASSWORD`: Encryption password to encrypt all credentials in the database. You can use any random string \(Eg. abcd\). The more random, the better.
   * `APPSMITH_ENCRYPTION_SALT`: Encryption salt used to encrypt all credentials in the database. You can use any random string \(Eg. abcd\). The more random, the better.
   * `APPSMITH_MONGODB_URI`: Your Mongo Database URI. Since Heroku doesn't support a managed MongoDB instance, you'll have to create a Mongo DB instance on another service such as [https://cloud.mongodb.com](https://cloud.mongodb.com). Check out [this link](https://docs.atlas.mongodb.com/getting-started/) for steps on creating a free account with MongoDB Atlas and setting up your first cluster.
4. \(Optional\) Customize the default settings in Heroku
   * `App Name`: Optionally select a name for your application \(this will be used in the application URL\)
   * `Runtime Selection`: Select which region your app should run in \(the United States or Europe\)
   * `Config Variables`:
     * **Sign Up**
       * `APPSMITH_SIGNUP_DISABLED` : Set this value to true to disable allowing users to signup on your appsmith instance. Users can only signup if they are invited by an organization administrator.
     * **Email Configuration:**
       * `APPSMITH_MAIL_ENABLED`: Set this value to true to enable email sending \(value should be `true/false` only\)
       * `APPSMITH_MAIL_FROM`: Email ID using which emails will be sent from your installation
       * `APPSMITH_REPLY_TO`: Email ID to which all email replies will be sent to
       * `APPSMITH_MAIL_HOST`: The host endpoint for the SMTP server
       * `APPSMITH_MAIL_SMTP_TLS_ENABLED`: Set this value to enable TLS for your SMTP server \(value should be `true/false` only\)
       * `APPSMITH_MAIL_USERNAME`: SMTP username
       * `APPSMITH_MAIL_PASSWORD`: SMTP password
     * **Oauth Configuration:**
       * **Google OAuth:**
         * `APPSMITH_OAUTH2_GOOGLE_CLIENT_ID`: Client ID provided by Google for OAuth2 login
         * `APPSMITH_OAUTH2_GOOGLE_CLIENT_SECRET`: Client secret provided by Google for OAuth2 login
       * **Github OAuth2:**
         * `APPSMITH_OAUTH2_GITHUB_CLIENT_ID`: Client ID provided by Github for OAuth2 login
         * `APPSMITH_OAUTH2_GITHUB_CLIENT_SECRET`: Client secret provided by Github for OAuth2 login
     * `APPSMITH_GOOGLE_MAPS_API_KEY`: Google Maps API key which is required if you wish to leverage Google Maps widget. Read more at [https://docs.appsmith.com/third-party-services/google-maps](https://docs.appsmith.com/third-party-services/google-maps)
     * `APPSMITH_DISABLE_TELEMETRY`: We want to be transparent and request that you share anonymous usage data with us. This data is purely statistical in nature and helps us understand your needs & provide better support to your self-hosted instance. You can read more about what information is collected in our documentation [https://docs.appsmith.com/telemetry/telemetry](https://docs.appsmith.com/telemetry/telemetry)

After Heroku finishes setting up the app, click “View” and your Appsmith should be up and running. You will be taken to the account creation page, where you can enter credentials to create an account and get started.

{% hint style="warning" %}
* We use the Heroku Redis addon for caching which required your account to have billing information, but we use the free plan of this addon so it will charge you nothing. Please make sure your account already finish providing billing information.
* You may need to wait 2 - 3 minutes before accessing the application. This is because Heroku may take a while to spin up the dyno and start the Appsmith application.
{% endhint %}

## Custom Domain

If you wish to link a custom domain \(Eg: [https://appsmith.yourcompany.com\)to](https://appsmith.yourcompany.com%29to) your Appsmith installation, please follow these steps below:

* Go to the `Settings` tab in your Heroku app

  ![App setting](../.gitbook/assets/heroku-app-settings.png)

* Click the `Add domain` button in the `Domains` section

  ![Add domain button](../.gitbook/assets/heroku-add-domain-button.png)

* Input your domain name & click `Next`. Heroku will provide you a DNS target that you can map your domain with ![Add domain form](../.gitbook/assets/heroku-add-domain-form.png) ![Finish](../.gitbook/assets/heroku-finish.png)
* Go to your DNS provider and make sure that your custom DNS Record \(Eg appsmith.yourcompany.com\) is updated to map to the `DNS Target`
* Once you finish, now you can access Appsmith from your custom domain

{% hint style="warning" %}
* Once you use a custom domain, You might want to set up SSL for your dyno. Please check the official document of Heroku [how to configure SSL](https://devcenter.heroku.com/articles/ssl)
* Your dyno will need to be upgraded to at least `hobby` type to use this feature of Heroku
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

