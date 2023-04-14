# Security

## Does Appsmith store my data?

Appsmith does not store any data returned from your API endpoints or DB queries. Appsmith only acts as a proxy layer. When you query your database/API endpoint, the Appsmith server only appends sensitive credentials before forwarding the request to your backend. It doesn’t expose sensitive credentials to the browser as it can lead to security breaches. The routing ensures the security of your systems and data.

## Security measures within Appsmith

Appsmith applications are secure-by-default. The security measures implemented for Appsmith installations are:

* All sensitive credentials, such as database credentials, are encrypted with [AES-256 encryption](https://en.wikipedia.org/wiki/Advanced\_Encryption\_Standard). Each self-hosted Appsmith instance ensures [data-at-rest](https://en.wikipedia.org/wiki/Data\_at\_rest) security by configuring unique salt and password values.
* On Appsmith Cloud, all connections are [TLS](https://en.wikipedia.org/wiki/Public\_key\_certificate) encrypted. For self-hosted instances, we offer the capability to set up [SSL ](https://en.wikipedia.org/wiki/Public\_key\_certificate)certificates via [LetsEncrypt ](https://letsencrypt.org/)during installation.
* Appsmith Cloud will **only** connect to your databases/API endpoints through whitelisted IPs: **18.223.74.85** & **3.131.104.27**, ensuring that you only expose database access to specific IPs when using our cloud offering.
* Appsmith Cloud is hosted in AWS data centers on **SOC 1** and **SOC 2** compliant servers. We also maintain data redundancy on our cloud instances via regular backups.
* Internal access to Appsmith Cloud is controlled through a [Two-Factor Authentication System](https://en.wikipedia.org/wiki/Help:Two-factor\_authentication) and audit logs.

:::note
The above reference to the **audit logs** pertains only to the **cloud-hosted instance** of Appsmith and does **not** refer to the **audit logs** **feature.**
:::

## Securely Executing Queries & APIs

Appsmith's backend system doesn't store any data when responding to API calls or executing any queries. The security measures implemented for Appsmith Executing Queries & APIs are:

* The Appsmith's backend system doesn't store any information about query responses or user inputs. Appsmith **only** acts as a proxy and never logs or stores the private/confidential data in Appsmith's data stores.
* To protect the application so that users cannot infer the executed query - Appsmith stores the query configuration and ensures that the SQL query body or custom API URLs are never exposed to the client in `view` mode. 
* To avoid SQL injections, all SQL queries have [prepared statements](../learning-and-resources/how-to-guides/how-to-use-prepared-statements.md) enabled by default.

## Securely Executing JavaScript

The JavaScript code written within Appsmith is executed on the client only, and a user can inspect the site and view the code in the browser. Hence, we recommend implementing the standard best practices when dealing with client-side code.

The code is stored in the MongoDB database that Appsmith uses to store all other application configurations. To ensure that all data is secure, please read the following carefully:

* We recommend that you **do** **not** hard code the sensitive keys, credentials, or other sensitive information in the JavaScript objects in plain text.

:::tip
You can add **secrets** to **APIs** or **datasource configurations** as they are **not** exposed in the **view mode**. You can update the **secrets** in **edit** **mode** but **cannot** view the existing **secrets** while **viewing** or **editing** the configurations.
:::

* When you sync applications to git repositories, the JavaScript code is also synced and stored as a JavaScript file in the repository. As a result, we recommend following standard best practices when dealing with JavaScript code written on Appsmith.
* We **do not** expose DOM APIs directly to the user while writing JavaScript code, but we support a few features via global actions like `setInterval()` and `clearInterval()` available on Appsmith.
* Appsmith does not allow some actions like `Fetch`. You cannot call an external API directly from the JavaScript code. However, you can add an API on Appsmith and use it to request, read data, or manipulate the response from the external API.
* You should not store sensitive information using a `storeValue` function because the data is stored in the browser's local storage and can be read.

## Sandboxing Iframe widgets

The [Iframe](/reference/widgets/iframe/) widget on older versions of Appsmith is vulnerable to XSS attacks. This was fixed in v1.8.6 of Appsmith. For this fix to be applied on your Appsmith instance, ensure you have the following environment variable set in your `stacks/configuration/docker.env` file:

```sh
APPSMITH_DISABLE_IFRAME_WIDGET_SANDBOX=false
```

This is automatically set for any Appsmith instance created after the release of v1.8.6.

The fix works by setting a `sandbox` attribute on iframe widgets. This reduces what the widget is capable of, by a little bit, and shouldn't impact most real-world uses of this widget.

:::tip
We maintain an open communication channel with security researchers to report security vulnerabilities responsibly. If you notice a security vulnerability, please email [security@appsmith.com](mailto:security@appsmith.com), and we'll resolve it ASAP.
:::
