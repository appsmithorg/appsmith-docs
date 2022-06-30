---
description: >-
  The signature header can be used to verify the authenticity and integrity of
  API requested made by Appsmith.
---

# Signature Header

This is an option that can be enabled on [REST](./#create-authenticated-api) datasources. When enabled, we also require a signature secret (a string of at least 32 characters) as input from the user. The effect of this option being enabled is that every API call made to this datasource will include an additional header, `X-Appsmith-Signature`, whose value is a [JSON Web Token (JWT)](https://jwt.io) signed with the secret provided by the user. Following are details of how this signature is constructed, what the JWT contains, and what significance this header holds to users.

## Enabling the Header

There are two steps to enable the signature header for a particular [REST datasource](./#create-authenticated-api):

1. Set [`Send Appsmith signature header`](./#send-appsmith-signature-header) to `Yes`.
2. Set the `Session Details Signature Key` to a random string that is at least 32 characters long.

Now _Save_ the datasource and any action built on top of this datasource should now have an `X-Appsmith-Signature` header with a JWT (described below) as it's value.

## Contents of the JWT

A [JSON Web Token (JWT)](https://jwt.io) is made up of three parts. The header, payload, and signature. The header and payload are essentially base64 encoded JSON objects.

A typical header JSON object looks like the following:

```javascript
{
  "alg": "HS256",
  "typ": "JWT"
}
```

A typical payload JSON object looks like the following:

```javascript
{
  "iss": "Appsmith",
  "exp": 1516239022
}
```

## Construction of token and signature

Now, these two are taken to construct the following string (let's call this the body):

```javascript
base64Encode(JSON.stringify(header)) + "." + base64Encode(JSON.stringify(payload))
```

This body is then signed using the algorithm specified in the header's `alg` key. The secret used to make this signature is the one configured in the datasource by the user. This signature is then appended to the above body, with another `"."` in the middle.

## Significance of the signature

The signature will ensure the authenticity and integrity of this JWT.

**Authenticity**: Authenticity is the property of the token that proves that the token is originating from Appsmith.

A signature cannot be recreated without access to the secret that was used to create it. The fact that the secret signature is only available to Appsmith and the user proves the signature's and so the token's authenticity.

**Integrity**: Integrity is the property of the token that it cannot be tampered with.

The signature is constructed using the body, in addition to the secret. So, if the contents of the header or payload or changed (causing a change in the body part of the token), the signature will not match. However, the signature cannot be recreated by the tamperer since the secret is not available to them. So, integrity is ensured, as long as the secret remains a secret.
