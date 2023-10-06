---
description: Reference to Identity and Access token
title: Identity and Access Tokens
hide_title: true
---
<!-- vale off -->

<div className="tag-wrapper">
 <h1>Identity and Access Tokens</h1>

<Tags
tags={[
{ name: "Enterprise", link: "https://www.appsmith.com/pricing", additionalClass: "enterprise" }
]}
/>

</div>

<!-- vale on -->

When you log in using the [OIDC](/getting-started/setup/instance-configuration/authentication/openid-connect-oidc) protocol in Appsmith, you gain access to the identity and access tokens. These tokens can be used within your applications to implement custom logic and authorize API requests on behalf of the authenticated user.

## Identity token

An ID token serves as a verified confirmation of a user's identity and includes essential information such as their name, picture, email address etc. According to the OpenID Connect (OIDC) specifications, when a user successfully logs in, Appsmith receives an ID token.

Appsmith provides the `idToken` on the client side, allowing you to incorporate it into various operations like JavaScript functions, APIs, or queries as needed. You can read the value of an ID token in your APIs/Queries by using the mustache syntax `{{}}` as shown below:

```
{{appsmith.user.idToken}}
```

`idToken` is also provided in its raw format for you to incorporate into API headers. You can read the value of an ID token in its raw format in your APIs/Queries by using the mustache syntax `{{}}` as shown below:

```
{{appsmith.user.rawIdToken}}
```

If you have defined custom scopes in your identity provider, the information associated with those scopes can be accessed within the Identity token.

## Access token

An access token is a self-contained object that holds claims, which are pieces of information about an entity. Unlike other tokens, you don't need to contact a server to validate an access token.

Once a user has successfully authenticated through a Single Sign-On (SSO) Provider, the access tokens can be used within Appsmith. The access token is stored on the server, and for security reasons, it is not accessible on the client side.

You can reference the access token using the placeholder `<<APPSMITH_USER_OAUTH2_ACCESS_TOKEN>>`. This placeholder is automatically substituted with the access token of the currently logged-in user.
