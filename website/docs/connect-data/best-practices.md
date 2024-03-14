---
description: Best practices for connecting your data with Appsmith.
---

# Best Practices

Appsmith enables you to build custom applications using data from different sources such as databases, APIs, and third-party services. Following the best practices will help ensure efficient integration and optimal performance of your applications. This page provides best practices for connecting your data within Appsmith applications.

# OAuth Authenticated APIs

Configuring OAuth authenticated APIs in Appsmith involves selecting the appropriate OAuth grant type for your business requirements. Understanding when to use each grant type is crucial for seamless integration with Appsmith.

## Authorization code

When your application requires access to user-specific resources, the Authorization Code grant type is the recommended choice. This flow facilitates secure authentication and authorization, ensuring that only authorized users can access sensitive data or perform actions within your application for which they have permission.

## Client credentials

For machine-to-machine interactions or when accessing application-specific resources that do not require user involvement, the Client Credentials grant type is the preferred option. This flow allows your application to authenticate itself securely without the need for user consent, making it suitable for backend services or automated processes.

## Scopes

When configuring OAuth scopes, define precise permissions to limit access to resources and operations based on your application requirements. Granular scopes reduce the risk of unauthorized access to sensitive data. For example, if you want to read files from a folder in Dropbox, you will need file read permission, and setting scope as `files.content.read` will allow the file reading operation. These scopes are available in the official documentation of the provider with which you have integrated Appsmith.

## Refresh tokens

Ensure that refresh tokens have a longer expiry than access tokens to maintain long-term access to resources without frequent user re-authentication. By configuring refresh tokens with extended expiry, you can provide a seamless user experience while maintaining security. On refresh token expiry, you will have to re-authorize the datasource to keep the integration working. Below are some considerations why you are dealing with refresh tokens:

* Some providers, for example, Salesforce, doesn't allow sending the refresh token in scope and rejects the requests. For such cases, you will have to set `Send Scope with Refresh Token` as `No`. This field is available under **Advanced Settings** section, when the grant type is `Authorization Code`.

* There are policies governing refresh tokens based on the provider you are using. Ensure that you have set up the refresh token rotation or understand the limit on validity of consecutive availability of refresh tokens.
