---
description: Deploy Appsmith on Heroku with our one-click deploy option
sidebar_position: 7
---

# Heroku

[Heroku](https://www.heroku.com/) is a platform that enables developers to build, run, and operate applications entirely in the cloud. Let's see how to self-host Appsmith on Heroku.

<VideoEmbed host="youtube" videoId="Bclt_VmDMpo" /> 

:::info
The administrative privileges (Admin settings) are not available due to deployment restrictions with the Heroku container (dynos).
:::

## Deployment steps

1. Sign up for a free account on Heroku
2. Click the button [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/appsmithorg/appsmith/tree/master)
3. Fill in the required `Config Variables` including:
   * `APPSMITH_ENCRYPTION_PASSWORD`: Encryption password to encrypt all credentials in the database. You can use any random string (For example, `abcd`). The more random, the better.
   * `APPSMITH_ENCRYPTION_SALT`: Encryption salt is used to encrypt all credentials in the database. You can use any random string (For example, `abcd`). The more random, the better.
   * `APPSMITH_MONGODB_URI`: Your MongoDB URI. Since Heroku doesn't support a managed MongoDB instance, you'll have to create a MongoDB instance on another service such as [https://cloud.mongodb.com](https://cloud.mongodb.com). Check out [this link](https://docs.atlas.mongodb.com/getting-started/) for steps on creating a free account with MongoDB Atlas and setting up your first cluster.
4. (Optional) Customize the default settings in Heroku
   * `App Name`: Optionally select a name for your application (it is used in the application URL)
   * `Runtime Selection`: Select which region your app should run in (the United States or Europe)
   * `Config Variables`:
     * **Sign Up**
       * `APPSMITH_SIGNUP_DISABLED`: Set this value to true to disable allowing users to sign up on your Appsmith instance. Users can only sign up if a workspace administrator invites them.
     * **Email Configuration:**
       * `APPSMITH_MAIL_ENABLED`: Set this value to true to enable email sending (value should be `true/false` only).
       * `APPSMITH_MAIL_FROM`: Email ID used to send emails.
       * `APPSMITH_REPLY_TO`: Email ID to which all email replies are sent.
       * `APPSMITH_MAIL_HOST`: The host endpoint for the SMTP server.
       * `APPSMITH_MAIL_SMTP_TLS_ENABLED`: Set this value to enable TLS for your SMTP server (value should be `true/false` only.)
       * `APPSMITH_MAIL_USERNAME`: SMTP username.
       * `APPSMITH_MAIL_PASSWORD`: SMTP password.
     * **OAuth Configuration:**
       * **Google OAuth:**
         * `APPSMITH_OAUTH2_GOOGLE_CLIENT_ID`: Client ID provided by Google for OAuth 2.0 login.
         * `APPSMITH_OAUTH2_GOOGLE_CLIENT_SECRET`: Client secret provided by Google for OAuth 2.0 login.
       * **GitHub OAuth:**
         * `APPSMITH_OAUTH2_GITHUB_CLIENT_ID`: Client ID provided by GitHub for OAuth 2.0 login.
         * `APPSMITH_OAUTH2_GITHUB_CLIENT_SECRET`: Client secret provided by GitHub for OAuth 2.0 login.
     * `APPSMITH_GOOGLE_MAPS_API_KEY`: Google Maps API key that is required if you wish to leverage the Google Maps widget. Read more [here](/getting-started/setup/instance-configuration/google-maps).
     * `APPSMITH_DISABLE_TELEMETRY`: You may share anonymous usage data with Appsmith. This data is purely statistical and helps Appsmith understand your needs & provide better support to your self-hosted instance. For more information, see [what information is collected by Appsmith](/product/telemetry).

After Heroku finishes setting up the app, click "View," and your Appsmith should be up and running. It takes you to the account creation page, where you can enter credentials to create an account and get started.

:::note
* The Heroku Redis add-on is used for caching, which requires your account to have billing information, but Appsmith uses the free plan of this add-on so that you are not charged. Please make sure your account has already finished providing billing information.
* You may need to wait 2-3 minutes before accessing the application as Heroku may take a while to spin up the dyno and start the Appsmith application.
:::

## Custom domain

If you wish to link a custom domain (For example, [https://appsmith.yourcompany.com)](https://appsmith.yourcompany.com)to your Appsmith installation, please follow the steps below:

* Go to the `Settings` tab in your Heroku app.

![](/img/heroku-app-settings.png)

* Click the `Add domain` button in the `Domains` section.

![](/img/heroku-add-domain-button.png)

* Input your domain name & click `Next`.

![](/img/kerolkuss.PNG)

* Heroku provides you with a `DNS target` to which you can map your domain.

![](</img/spaces\_-Lzuzdhj8LjrQPaeyCxr-3757176148\_uploads\_git-blob-c050be55c7e166092b49c238dba5d9202c550d90\_heroku-finish_(1)_(1).png>)

* Now, go to your DNS provider and make sure that your custom DNS Record (`Eg appsmith.yourcompany.com`) is updated to map to the `DNS Target.`

```
//For example,
Change the CNAME records of your domain like this:
Host: www
Points to: "Paste the DNS Value"
TTL: 1 hour
```

* Once you finish, now you can access Appsmith from your custom domain.

:::note
* Once you use a custom domain, You might want to set up SSL for your dyno. Please check the official document of Heroku on [how to configure SSL](https://devcenter.heroku.com/articles/ssl).
* Your dyno needs to be upgraded to at least a `hobby` type to use this feature of Heroku.
:::

## Re-Deploy your app using Heroku CLI

To re-deploy your app (re-build & re-run), make sure you have Docker & Heroku CLI set up locally. Docker is required to build the updated image locally before being pushed to the Heroku platform.

Then follow the steps below:

*   Pull the Appsmith repository from GitHub & move it to the `heroku` folder:

    ```
      git clone --branch master https://github.com/appsmithorg/appsmith
      cd ./appsmith/deploy/heroku
    ```
*   For the existing repository, pull the fresh Appsmith image:

     ```
      docker pull appsmith/appsmith-ce
     ```
*   Login to Heroku CLI.

    ```
      heroku login
    ```
*   Login to Container Registry.

    ```
      heroku container:login
    ```
*   Get your application name.

    ```
      heroku apps
    ```
*   Push your Docker-based app.

    ```
      heroku container:push web -a <Your App Name>
    ```
*   Deploy the changes.

    ```
      heroku container:release web -a <Your App Name>
    ```

Please wait for a couple of minutes to let Heroku re-deploy Appsmith with the latest changes. You can check if Appsmith is running by visiting your Heroku URL (or custom domain if you've set one up).
