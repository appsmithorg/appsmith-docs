---
description: >-
  Appsmith ships with third party services that improves the app building
  experience. All third party services are entirely optional.
---

# Enabling Third Party Services

> 
All third party services are enabled by default in our [cloud hosted](https://appsmith.com) version.


## Enabling Services for Self Hosting

Our self-hosted version allows you to configure your own keys to enable third party services such as Google OAuth. To enable a service, simply open the folder of your Appsmith installation and edit the **docker.env** file.

You may need root access to modify the docker.env file.

Restart docker and nginx using the following command

```text
sudo docker-compose rm -fsv appsmith-internal-server nginx && sudo docker-compose up -d
```

## Configuring Third Party Services

Each service requires a specific key or configuration to be enabled. Configure the service of your choice using the following guides

* [Email](third-party-services/email/)
* [Google OAuth](third-party-services/google-login.md)
* [Github OAuth](third-party-services/github-login.md)
* [Google Maps](third-party-services/google-maps.md)

