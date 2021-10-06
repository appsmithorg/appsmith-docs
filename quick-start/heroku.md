# Heroku
You can quickly set up Appsmith with Heroku to check your product functionality.
## Heroku Installation

* Sign up for a free account on Heroku
* Click the button [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/appsmithorg/appsmith/tree/master)
* Fill in the following required `Config Variables`:
  * `APPSMITH_ENCRYPTION_PASSWORD`: The password used to encrypt all credentials in the database
  * `APPSMITH_ENCRYPTION_SALT`: The encription salt used to encrypt all credentials in the database
  * `APPSMITH_MONGODB_URI`: Your Mongo Database URI
  <br>
* You can also customize the default settings in Heroku. This is optional.
  * `App Name`: The name of your project, which will also be used in its URL.
  * `Runtime Selection`: The region in which your app should run in. (You can choose from The United States or Europe)
  * `Config Variables`:

    * Email Configuration:
      * `APPSMITH_MAIL_ENABLED`: Set this value to true to enable email sending \(Accepted values are true or false`\)
      * `APPSMITH_MAIL_FROM`: The email ID with which emails will be sent from your installation
      * `APPSMITH_REPLY_TO`: The email ID to which all email replies will be sent to
      * `APPSMITH_MAIL_HOST`: The host endpoint for the SMTP server
      * `APPSMITH_MAIL_SMTP_TLS_ENABLED`: Set this value to true to enable TLS for your SMTP server \(Accepted values are true or false`\)
      * `APPSMITH_MAIL_USERNAME`: SMTP username
      * `APPSMITH_MAIL_PASSWORD`: SMTP password
    * OAuth Configuration:
      * Google OAuth:
        * `APPSMITH_OAUTH2_GOOGLE_CLIENT_ID`: Client ID provided by Google for OAuth2 login
        * `APPSMITH_OAUTH2_GOOGLE_CLIENT_SECRET`: Client secret provided by Google for OAuth2 login
      * Github OAuth2:
        * `APPSMITH_OAUTH2_GITHUB_CLIENT_ID`: Client ID provided by Github for OAuth2 login
        * `APPSMITH_OAUTH2_GITHUB_CLIENT_SECRET`: Client secret provided by Github for OAuth2 login
    * `APPSMITH_GOOGLE_MAPS_API_KEY`: Google Maps API key which is required if you wish to leverage the Google Maps widget. Read more at [https://docs.appsmith.com/third-party-services/google-maps](https://docs.appsmith.com/third-party-services/google-maps)
    * `APPSMITH_DISABLE_TELEMETRY`: We want to be transparent and request that you share anonymous usage data with us. This data is purely statistical in nature and helps us understand your needs & provide better support to your self-hosted instance. You can read more about what information is collected in our documentation [https://docs.appsmith.com/telemetry/telemetry](https://docs.appsmith.com/telemetry/telemetry)

    After Heroku finishes setting up the app, click “View” and your Appsmith should be up and running. You will be taken to the account creation page, where you can enter credentials to create an account and get started.

{% hint style="warning" %}
* We use the Heroku Redis addon for caching which requires your account to have billing information, but we use the free plan of this addon so it will charge you nothing. Please make sure your account already has your billing information.
* You may need to wait 2 - 3 minutes before accessing the application. This is because Heroku may take a while to spin up the dyno and start the Appsmith application.
{% endhint %}

## Custom domain

If you wish to link a custom domain \(Eg: [https://appsmith.yourcompany.com/](https://appsmith.yourcompany.com)) to your Appsmith installation, please follow these steps:

* Go to the `Settings` tab in your Heroku app

  ![App setting](../.gitbook/assets/heroku-app-settings.png)

* Click the `Add domain` button in the `Domains` section

  ![Add domain button](../.gitbook/assets/heroku-add-domain-button.png)

* Input your domain name & click `Next`. Heroku will provide you a DNS target that you can map your domain with ![Add domain form](../.gitbook/assets/heroku-add-domain-form.png) ![Finish](../.gitbook/assets/heroku-finish.png)
* Go to your DNS provider and make sure that your custom DNS Record \(Eg appsmith.yourcompany.com\) is updated to map to the `DNS Target`.
* Once you finish, you can access Appsmith from your custom domain

{% hint style="warning" %}
* Once you use a custom domain, You might want to set up SSL for your dyno. Please check the official Heroku documentation on [how to configure SSL](https://devcenter.heroku.com/articles/ssl)
* Your dyno will need to be upgraded to at least the `hobby` plan to use this feature.
{% endhint %}

## Re-Deploy your App with the Heroku CLI

To re-deploy your app \(re-build & re-run\), make sure you have Docker & Heroku CLI set up locally. Docker is required to build the updated image before being pushed to the Heroku platform.

After that, follow the steps below:

* Pull the Appsmith repo from GitHub & move to the `heroku` folder:

  ```text
    git clone --branch master https://github.com/appsmithorg/appsmith
    cd ./appsmith/deploy/heroku
  ```

* Then, log in to the Heroku CLI with

  ```text
    heroku login
  ```

* After that, log in to the Container Registry with

  ```text
    heroku container:login
  ```

* Get your application name by entering

  ```text
    heroku apps
  ```

* Push your Docker-based app with

  ```text
    heroku container:push web -a <Your App Name>
  ```

* And finally, Deploy the changes with

  ```text
    heroku container:release web -a Your-App-Name
  ```

Wait for a couple minutes to let Heroku re-deploy Appsmith with the latest changes. You can check if Appsmith is running properly by visiting your Heroku URL \(or custom domain if you've set one up.\)

