---
description: Learn about Appsmith's security features and how to protect your data on the Appsmith platform.
---
# Security

This page explains the security features and considerations that Appsmith has implemented in its platform, and steps you can take to make your apps as safe as possible.

## Secure data

Appsmith applications are secure-by-default, with a number of strategies in place to protect your data.

All sensitive credentials such as database credentials and Git SSH keys are encrypted with [AES-256 encryption](https://en.wikipedia.org/wiki/Advanced\_Encryption\_Standard), and each self-hosted Appsmith instance ensures [data-at-rest](https://en.wikipedia.org/wiki/Data\_at\_rest) security by configuring unique salt and password values. In the cloud, Appsmith is hosted in AWS data centers on **SOC 1** and **SOC 2** compliant servers, with data redundancy maintained by regular backups. Internal access to Appsmith Cloud is controlled with a two-factor authentication aystem and audit logs.

Appsmith Cloud only connects to your databases and API endpoints through specific whitelisted IPs: `18.223.74.85` and `3.131.104.27`. All connections to Appsmith Cloud are encrypted with [TLS](https://en.wikipedia.org/wiki/Public\_key\_certificate). For self-hosted instances, it's possible to set up [SSL](https://en.wikipedia.org/wiki/Public\_key\_certificate) certificates during installation via [LetsEncrypt](https://letsencrypt.org/), or administrators can upload their own SSL certificate to Appsmith.

## Secure queries

Appsmith's backend system doesn't log or store any data returned from your databases or API endpoints, nor does it store information about responses or user input; Appsmith only acts as a proxy layer.

The configuration and body of your queries are securely stored, and are never exposed to clients while the app is in **View** mode. Users can't access any data that would allow them to infer the query's content. When a query is executed, the Appsmith server appends sensitive credentials just before forwarding the request to your backend, without exposing any sensitive credentials to the client's browser.

It's safe to add secrets to APIs or datasource configurations, as they are not exposed while the app is in **View** mode. You can update the secrets in **Edit** mode, but it's not possible to view the current value of existing secrets, regardless of the app's mode.

To avoid SQL injections, all SQL queries have [prepared statements](/connect-data/concepts/how-to-use-prepared-statements) enabled by default.

## Secure JavaScript

JavaScript code written in any Appsmith app is executed on the client, and a user can inspect the site to view your code in their browser. Similarly, when you sync applications to Git repositories, the JavaScript code in your app is stored and accessible as a JavaScript file in the repository. Therefore, it is recommended to implement the standard best practices for dealing with client-side code. Specifically:

* Don't hard-code sensitive keys, credentials, or other sensitive information in plain text within JavaScript objects.

* Don't store sensitive information using the [`storeValue()`](/reference/appsmith-framework/widget-actions/store-value) function, because the data is stored in the browser's local storage and can be viewed by the user.

Appsmith does not expose JavaScript DOM APIs directly to the user while writing JavaScript code, but it does implement some simliar features like [`setInterval()`](/reference/appsmith-framework/widget-actions/intervals-time-events#setinterval) and [`clearInterval()`](/reference/appsmith-framework/widget-actions/intervals-time-events#clearinterval) which are available as global [framework functions](/reference/appsmith-framework/widget-actions).

The JavaScript `Fetch` API is supported, and it never sends cookies or session information when called from within Appsmith.

## Sandboxed Iframe widgets

After v1.8.6 of Appsmith, [Iframe](/reference/widgets/iframe/) widgets have a `sandbox` attribute set on them by default to help protect from [XSS](https://en.wikipedia.org/wiki/Cross-site_scripting) vulnerabilities. This attribute is controlled with an environment variable in your Appsmith instance's `stacks/configuration/docker.env` file:

```sh
APPSMITH_DISABLE_IFRAME_WIDGET_SANDBOX=false
```

The `sandbox` attribute reduces some capabilities of the iframe, but increases security and is unlikely to impede most real-world uses of this widget.

:::tip
Appsmith maintains an open communication channel with security researchers to report security vulnerabilities responsibly. If you notice a security vulnerability, please email [security@appsmith.com](mailto:security@appsmith.com), and it'll be resolved as quickly as possible.
:::
