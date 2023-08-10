---
description: Learn about Appsmith's security features and how to protect your data on the Appsmith platform.
---
# Security

This page explains the security features and considerations that Appsmith has implemented in its platform, and steps you can take to make your apps as safe as possible.

## Does Appsmith store my data?

Appsmith does not store any data returned from your API endpoints or DB queries. Appsmith only acts as a proxy layer. When you query your database/API endpoint, the Appsmith server only appends sensitive credentials before forwarding the request to your backend. It doesn’t expose sensitive credentials to the browser.

## Security measures within Appsmith

Appsmith applications are secure-by-default. The security measures implemented for Appsmith installations are:

* All sensitive credentials, such as database credentials and Git SSH keys, are encrypted with [AES-256 encryption](https://en.wikipedia.org/wiki/Advanced\_Encryption\_Standard). Each self-hosted Appsmith instance ensures [data-at-rest](https://en.wikipedia.org/wiki/Data\_at\_rest) security by configuring unique salt and password values.
* All connections to Appsmith Cloud are encrypted with [TLS](https://en.wikipedia.org/wiki/Public\_key\_certificate). For self-hosted instances, it's possible to set up [SSL](https://en.wikipedia.org/wiki/Public\_key\_certificate) certificates during installation via [LetsEncrypt](https://letsencrypt.org/), or administrators can upload their own SSL certificate to Appsmith.
* Appsmith Cloud only connects to your databases and API endpoints through whitelisted IPs: `18.223.74.85` and `3.131.104.27`. This ensures that your data is only exposed to specific IPs when using Appsmith Cloud.
* Appsmith Cloud is hosted in AWS data centers on **SOC 1** and **SOC 2** compliant servers. Data redundancy is maintained on Appsmith Cloud instances with regular backups.
* Internal access to Appsmith Cloud is controlled with a two-factor authentication aystem and instance audit logs.

## Securely executing queries

Appsmith's backend system doesn't store any data when responding to API calls or executing queries. The following security measures have been implemented:

* Appsmith's backend system doesn't store any information about query responses or user inputs. Appsmith acts only as a proxy and never logs or stores private data.
* Appsmith securely stores queries' configuration and body to ensure that they are never exposed to clients while the app is in **View** mode. Users are not able to access data to infer the contents of a query.
* To avoid SQL injections, all SQL queries have [prepared statements](/connect-data/concepts/how-to-use-prepared-statements) enabled by default.

## Securely executing JavaScript

The JavaScript code written in any Appsmith app is executed only on the client, and a user can inspect the site and view the code in the browser. Therefore, it is recommended to implement the standard best practices for dealing with client-side code.

The code is stored in the same MongoDB database that Appsmith uses to store all other app configuration. To ensure that all data is secure, please read the following carefully:

* It's recommend that you do not hard code sensitive keys, credentials, or other sensitive information in plain text within JavaScript objects.

:::tip
You can add secrets to APIs or datasource configurations, as they are not exposed while the app is in **View** mode. You can update the secrets in **Edit** mode, but it's not possible to view the current value of existing secrets that have been previously saved, regardless of the app's mode.
:::

* When you sync applications to Git repositories, any JavaScript code in your app is stored as a JavaScript file in the repository. Therefore, it is recommended to follow standard best practices for dealing with visible JavaScript code.
* Appsmith does not expose DOM APIs directly to the user while writing JavaScript code, but it supports a handful of simliar features like [`setInterval()`](/reference/appsmith-framework/widget-actions/intervals-time-events#setinterval) and [`clearInterval()`](/reference/appsmith-framework/widget-actions/intervals-time-events#clearinterval) available as [framework functions](/reference/appsmith-framework/widget-actions).
* Appsmith supports the `Fetch` API, however it never sends cookies or session information when called from within Appsmith.
* You should not store sensitive information using the [`storeValue()`](/reference/appsmith-framework/widget-actions/store-value) function, because the data is stored in the browser's local storage and can be viewed by the user.

## Sandboxing Iframe widgets

After v1.8.6 of Appsmith, [Iframe](/reference/widgets/iframe/) widgets have a `sandbox` attribute set on them by default to help protect from XSS vulnerabilities. This attribute is controlled with an environment variable in your Appsmith instance's `stacks/configuration/docker.env` file:

```sh
APPSMITH_DISABLE_IFRAME_WIDGET_SANDBOX=false
```

The `sandbox` attribute reduces some capabilities of the iframe, but increases security and is unlikely to impede most real-world uses of this widget.

:::tip
We maintain an open communication channel with security researchers to report security vulnerabilities responsibly. If you notice a security vulnerability, please email [security@appsmith.com](mailto:security@appsmith.com), and it'll be resolved as quickly as possible.
:::
