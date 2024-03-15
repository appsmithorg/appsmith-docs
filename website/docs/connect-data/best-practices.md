---
description: Best practices for connecting your data with Appsmith.
---

# Best Practices

Appsmith enables you to build custom applications using data from different sources such as databases, APIs, and third-party services. Following the best practices will help ensure efficient integration and optimal performance of your applications. This page provides best practices for connecting your data within Appsmith applications.

## OAuth Authenticated API

Configuring OAuth authenticated APIs in Appsmith involves selecting the appropriate OAuth grant type for your business requirements. Understanding when to use each grant type is crucial for seamless integration with Appsmith.

### Authorization code

When your application requires access to user-specific resources, the Authorization Code grant type is the recommended choice. This flow facilitates secure authentication and authorization, ensuring that only authorized users can access sensitive data or perform actions within your application for which they have permission.

### Client credentials

For machine-to-machine interactions or when accessing application-specific resources that do not require user involvement, the Client Credentials grant type is the preferred option. This flow allows your application to authenticate itself securely without the need for user consent, making it suitable for backend services or automated processes.

### Scopes

When configuring OAuth scopes, define precise permissions to limit access to resources and operations based on your application requirements. Granular scopes reduce the risk of unauthorized access to sensitive data. For example, if you want to read files from a folder in Dropbox, you will need file read permission, and setting scope as `files.content.read` will allow the file reading operation. These scopes are available in the official documentation of the provider with which you have integrated Appsmith.

### Refresh tokens

Ensure that refresh tokens have a longer expiry than access tokens to maintain long-term access to resources without frequent user re-authentication. Some providers allow refresh tokens to never expire, while others set a long expiry, such as 6 months. Once every 6 months, the user will need to come in and perform authentication again. Upon refresh token expiry, you'll need to re-authorize the datasource on Appsmith to re-establish the connection. 

Below are some considerations when dealing with refresh tokens:

* Some providers, for example, Salesforce, doesn't allow sending the refresh token in scope and rejects the requests. For such cases, you will have to set `Send Scope with Refresh Token` as `No`. This field is available under **Advanced Settings** section, when the grant type is `Authorization Code`.

* Policies governing refresh tokens differ depending on your provider. It's advisable to either set up refresh token rotation, if provided by your provider, or understand any restrictions on the number of active refresh tokens that can exist at the same time.
