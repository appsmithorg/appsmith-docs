# JSON Web Tokens (JWT)

JSON Web Token(JWT) is an open standard ([RFC 7519](https://datatracker.ietf.org/doc/html/rfc7519)) for securely transmitting information between parties in the form of a JSON object.

{% hint style="info" %}
**JSON Web Tokens** (JWT) can be accessed as part of [OpenID Connect (OIDC),](../setup/instance-configuration/single-sign-on-sso/openid-connect-oidc/) available **only** in the **** [**enterprise edition**](https://www.appsmith.com/pricing) for **self-hosted instances**.
{% endhint %}

## When to Use JSON Web Tokens?

Following are some common scenarios where JSON Web Tokens are used:

{% hint style="info" %}
If you are aware of JSON Web Tokens, move directly to [How to Use JSON Web Tokens in Appsmith?](json-web-tokens-jwt.md#how-to-use-json-web-tokens-in-appsmith).
{% endhint %}

### Authentication

For an authenticated user, whenever a user requests to access resources or services, or routes, the application passes the information in the form of an access token that follows a JWT format. Single Sign-On (SSO) commonly uses JWTs to communicate with different systems residing on similar or other domains.

### Information Exchange

JSON Web Tokens are a secure way of transmitting information between different applications. JWTs can also be signed. Tokens can have a timestamp associated with them, and once the timestamp is expired, you can block the information exchange for the expired token. You can also verify that the content of the token has not been tampered with. For example, using public/private keypairs, you can ensure that the sender is an authorized sender. This provides an additional layer of security for data or information exchange.

## How Does JSON Web Token Work?

For instance, you are authenticating a user. Your SSO Provider shares a JSON Web Token(JWT) on the successful authentication.

{% hint style="info" %}
As a best practice, you should only store the token for the time it is needed.
{% endhint %}

Whenever a user requests access to a resource, the user agent should send the JWT, usually in the Authorization header using Bearer.

```
Authorization: Bearer <followed by the token value>
```

The server’s validation mechanism will verify the token in the `Authorization` header and grant access to the resources or allow the user to perform an action.

{% hint style="info" %}
Sending a token as a part of the Authorization header eliminates the Cross-Origin Resource Sharing(CORS) usually faced while sharing through cookies.
{% endhint %}

## JSON Web Token Structure

A JSON Web Token has three main parts separated with a dot(.) - Header, Payload, and Signature.

For example, your header is HEADER1, Payload is PAYLOAD1, and Signature is SIGNATURE1, then the JWT structure will be:

`HEADER1`**`.`**`PAYLOAD1`**`.`**`SIGNATURE1`

### Header

A JWT header stores information about the type of token that is JWT and the algorithm used for signing, like SHA256 or RSA, etc.

So, the header is represented as:

```
{

   “alg”:”HS256”,

   “typ”:”JWT”

}
```

Here alg stands for the algorithm used for signing, and typ stands for the token type. The JSON is then encoded as a Base64Url to form the first part of the JSON Web Token, the header.

### Payload

The second part of the token, a payload, comprises claims. Claims are information about the entity usually associated with the user and the metadata. There are three types of claims - public, private, and reserved.

#### Public

If you create [public claims](https://datatracker.ietf.org/doc/html/rfc7519#section-4.2), you must define them in IANA JSON Web Token Registry or define them as a URI with a collision-resistant namespace.

{% hint style="info" %}
The public claims should be validated and agreed upon by Issuer and Consumer.
{% endhint %}

#### Private

The parties communicating with each other might want to have some custom claims identified. You can define these custom claims under [private claims](https://datatracker.ietf.org/doc/html/rfc7519#section-4.3). These claims are neither registered nor public.

{% hint style="info" %}
The public/private claims should not have similar names as reserved claims as it will break the interoperability between the systems exchanging information.
{% endhint %}

#### Registered

A set of pre-defined claims that are not mandatory but are deemed recommended are defined as [registered claims](https://datatracker.ietf.org/doc/html/rfc7519#section-4.1). Such claims provide useful information like expiration time, issuer details, the intended audience, etc.

{% hint style="info" %}
The claim names are only three characters long to ensure compact JWT.
{% endhint %}

A sample payload could be:

```
{

  “sub”: “SSOProvider”,

  “email_verified”: true,

  “updated_at”: 1646310160264

}
```

The payload is then encoded to form a Base64Url and forms the second part of the token.

#### Signature

To create a signature, you have to encode the header, payload, a secret, use the algorithm defined in the header and sign it.

For example, you are using HMAC SHA-256(HS256) algorithm. Then the generated signature is as follows:

```
 ​​HMACSHA256(

  base64UrlEncode(header) + "." +

  base64UrlEncode(payload),

  secret)
```

You can use the signature to validate the sender's authenticity, check if the message is tampered with or not, and can sign with a private key.

The signature is encoded as Base64Url and appended to form a complete JSON Web Token.

For example, an encoded JWT with header, payload, and signature could be as follows:

```
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9**.**eyJzdWIiOiJTU09Qcm92aWRlciIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJ1cGRhdGVkX2F0IjoxNjQ2MzEwMTYwMjY0fQ**.**qUwYZqYbtfCjhODEEF9M6B3JFN4WtUSg37MixYVN1h0
```

You can see that the three parts of the JWT are separated by a dot(.).

{% hint style="info" %}
You can use the JWT Debugger to encode, decode, or verify the generated JWTs.
{% endhint %}

## Why use JSON Web Tokens?

The key benefits of using a JWT are that it is more compact and thus smaller in size. It is secured and can use a shared secret between an issuer and a consumer. It uses JSON format; almost every programming language has a JSON parser, so you don’t have to reinvent the wheel.

## How to Use JSON Web Tokens in Appsmith?

Let’s take an example. You have integrated your Single Sign On(SSO) provider with Appsmith using [_OpenID Connect_](../setup/instance-configuration/single-sign-on-sso/openid-connect-oidc/). You are using Appsmith to log in and your SSO provider to authenticate the request.

Let’s take a closer look at how this interaction happens from Appsmith.

![Interaction between Appsmith and SSO Provider](<../.gitbook/assets/Appsmith-SSO-Provider-JWT Integration.png>)

In the above diagram, you can see that:

* A user requests for login using Appsmith.
* Behind the scenes, Appsmith is integrated with the SSO provider.
* SSO Provider authorizes the request.
* The SSO provider generates a token for authenticated users and shares them with Appsmith.
* Appsmith has the token accessible on the platform. You can pass it on in your APIs to provide access to the resources or perform desired operations.

### Types of Token

Appsmith provides two types of JSON Web Tokens that your application can integrate with: ID Token and Access Token.

#### ID Token

An ID token is a signed assurance of a user’s identity and contains basic information like the name, picture, email address, etc. When a user logs in successfully, an ID token is shared as per the Open ID Connect (OIDC) specification.

**How to read ID token on Appsmith?**

Once the SSO provider successfully authenticates a user, the ID token is available on the Appsmith platform.

{% hint style="info" %}
Appsmith exposes the `idToken` parameter on the client-side. It thus is available to be embedded in any operation that you would like to perform either in JavaScript functions, APIs, or queries.
{% endhint %}

You can read the value of an id token in your APIs/Queries by using a mustache sign \{{\}}.

```
{{appsmith.user.idToken}}
```

#### Access Token

An access token is an object that stores information about an entity in the form of claims. When you want to use token-based authentication, an access token comes in handy. Access tokens are self-contained. You don’t have to call a server to validate a token.

**How to read Access token on Appsmith?**

After successful user authentication through an SSO Provider, you can use the access tokens on Appsmith. The access token is available as an environment variable.

{% hint style="info" %}
The environment variable is not accessible on the client-side as per security norms.
{% endhint %}

The environment variable `APPSMITH_USER_OAUTH2_ACCESS_TOKEN` stores access token. You can read the value of the access token by using it in between the angular braces`<<>>.`

`<<APPSMITH_USER_OAUTH2_ACCESS_TOKEN >>`

With the JSON Web Tokens available on Appsmith, you can securely exchange data or information between Appsmith and your apps or APIs.
