---
sidebar_position: 5
---
# JSON Web Tokens (JWT)

JSON Web Token(JWT) is an open standard ([RFC 7519](https://datatracker.ietf.org/doc/html/rfc7519)) for securely transmitting information between parties in the form of a JSON object.

:::info
**JSON Web Tokens** (JWT) can be accessed as part of [OpenID Connect (OIDC),](openid-connect-oidc/) available **only** in the [**business edition**](https://www.appsmith.com/pricing) for **self-hosted instances**.
:::

## Identity token

An ID token is a signed assurance of a user’s identity and contains basic information like the name, picture, email address, etc. When a user logs in successfully, an ID token is shared as per the Open ID Connect (OIDC) specification. Once the SSO provider successfully authenticates a user, the ID token is available on the Appsmith platform.

You can read the value of an id token in your APIs/Queries by using the mustache syntax `{{}}`.

```
{{appsmith.user.idToken}}
```
Appsmith exposes the `idToken` parameter on the client side. It thus can be embedded in any operation that you would like to perform in JavaScript functions, APIs, or queries.

## Access token

An access token is an object that stores information about an entity in the form of claims. Access tokens are self-contained. You don’t have to call a server to validate a token.

After successful user authentication through an SSO Provider, you can use the access tokens on Appsmith. The access token is available as an environment variable. The environment variable isn't accessible on the client side as per security norms.

The environment variable `APPSMITH_USER_OAUTH2_ACCESS_TOKEN` stores the access token. You can read the value of the access token by using it between the angular braces`<<>>.`

`<<APPSMITH_USER_OAUTH2_ACCESS_TOKEN>>`

## How to use JSON web tokens in Appsmith

Suppose you have integrated your Single Sign On(SSO) provider with Appsmith using [_OpenID Connect_](openid-connect-oidc/), and you are using Appsmith to log in and your SSO provider to authenticate the request.

Refer to the image below to see how this interaction takes place.

![Interaction between Appsmith and SSO Provider](</img/Appsmith-SSO-Provider-JWT_Integration.png>)

In the above image, you can see that:

* A user requests to log in using Appsmith.
* Behind the scenes, Appsmith is integrated with the SSO provider.
* SSO Provider authorizes the request.
* The SSO provider generates a token for authenticated users and shares them with Appsmith.
* Appsmith has the token accessible on the platform. You can pass it on in your APIs to provide access to the resources or perform desired operations.

### Types of tokens

Appsmith provides two types of JSON Web Tokens that your application can integrate with ID Token and Access Token.



## Why use JSON web tokens?

The key benefits of using a JWT are that it is more compact. It is secured and can use a shared secret between an issuer and a consumer. It uses JSON format; almost every programming language has a JSON parser, so you don’t have to reinvent the wheel.

