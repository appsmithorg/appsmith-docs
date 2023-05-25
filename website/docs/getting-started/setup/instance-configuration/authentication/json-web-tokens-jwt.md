---
sidebar_position: 5
---
# Identity and Access Tokens

When you log in using the [OIDC](/getting-started/setup/instance-configuration/authentication/openid-connect-oidc) protocol, the identity provider sends back the identity and access token to Appsmith. These tokens can be utilized in your applications for various purposes.

:::info
**Identity and Access Tokens** can be accessed as part of [OpenID Connect (OIDC),](/getting-started/setup/instance-configuration/authentication/openid-connect-oidc) available **only** in Appsmith's [**business edition**](https://www.appsmith.com/pricing).
:::

## Identity token

An ID token serves as a verified confirmation of a user's identity and includes essential information such as their name, picture, email address etc. According to the OpenID Connect (OIDC) specifications, when a user successfully logs in, Appsmith receives an ID token.

You can read the value of an ID token in your APIs/Queries by using the mustache syntax `{{}}` as shown below:

```
{{appsmith.user.idToken}}
```
Appsmith provides the `idToken` parameter on the client side, allowing you to incorporate it into various operations like JavaScript functions, APIs, or queries as needed.

## Access token

An access token is a self-contained object that contains information, known as claims, about an entity. Unlike other tokens, you don't need to contact a server to validate an access token.

Once a user has successfully authenticated through a Single Sign-On (SSO) Provider, the access tokens can be used within Appsmith. The access token is stored in the environment variable `APPSMITH_USER_OAUTH2_ACCESS_TOKEN`, and for security reasons, it is not accessible on the client side.

You can read the value of the access token using the environment variable between the angular braces`<<>>.`

```
<<APPSMITH_USER_OAUTH2_ACCESS_TOKEN>>
```

By incorporating this syntax into your Appsmith application, you can retrieve and utilize the value of the access token as needed.

