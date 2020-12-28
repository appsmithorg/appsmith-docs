---
description: Appsmith is open source and is very easy to deploy
---

# Setting up Appsmith

You can start using appsmith on

[Appsmith Cloud](appsmith-cloud.md) **\(Recommended\)**

or deploy it on your own servers via

* [Docker](docker.md)
* [Heroku](heroku.md)
* [AWS AMI](https://github.com/appsmithorg/appsmith-docs/tree/59aba8f49d764fa83b0af607119f5fce7d129575/setting-up-appsmith/setting-up-appsmith/aws-ami.md)

## Troubleshooting

If at any time you encounter an error while installing Appsmith on any platform, reach out to **support@appsmith.com** or join our [Discord Server](https://discord.com/invite/rBTTVJp)

If you know the error and would like to reinstall Appsmith, simply delete the installation folder and the templates folder and execute the script again

## Enabling Services for Self Hosting

Appsmith ships with third-party services that improve the app building experience. All third party services are entirely optional.

{% hint style="success" %}
All third party services are enabled by default in our [cloud hosted](https://appsmith.com) version.
{% endhint %}

Our self-hosted version allows you to configure your own keys to enable third party services such as Google OAuth. To enable a service, simply open the folder of your Appsmith installation and edit the **docker.env** file.

You may need root access to modify the docker.env file.

Restart docker and nginx using the following command

```text
sudo docker-compose rm -fsv appsmith-internal-server nginx && sudo docker-compose up -d
```

## Configuring Third-Party Services

Each service requires a specific key or configuration to be enabled. Configure the service of your choice using the following guides

* [Email](../third-party-services/email/)
* [Google OAuth](../third-party-services/google-login.md)
* [Github OAuth](../third-party-services/github-login.md)
* [Google Maps](../third-party-services/google-maps.md)

