# Signup Restriction

This document describes ways to restrict users from signing up on your self-hosted Appsmith instance. This configuration is done by editing the [**instance configuration**](./).

## Disable Sign-up

The environment variable `APPSMITH_SIGNUP_DISABLED` should be set to `true` to disable signing up of new users. When set, the following facts hold:

1. **New, uninvited users** cannot signup using the signup form or the OAuth buttons. Both modes of signing up are disallowed.
2. **New, invited users** can still signup using either the form or the OAuth buttons.

{% hint style="success" %}
The signup page will continue to show up but will throw an error when a user tries to sign up. This environment variable's value does not affect the _**login**_ behavior of existing users.
{% endhint %}

## Email domains white-list

The environment variable `APPSMITH_SIGNUP_ALLOWED_DOMAINS` can be used to restrict signups to emails belonging to only a specific set of domains. This field takes a comma-separated set of values.

Setting `APPSMITH_SIGNUP_ALLOWED_DOMAINS=appsmith.com` will allow `homer@appsmith.com` to sign up, but not `bart@gmail.com`. 

Setting `APPSMITH_SIGNUP_ALLOWED_DOMAINS=appsmith.com,gmail.com` will allow both `homer@appsmith.com` and `bart@gmail.com` to sign up, but not `lisa@outlook.com`.

When this environment variable is set to one or more domains, the following facts hold:

1. **New, uninvited users** cannot signup using the signup form or the OAuth buttons unless the email they use has a domain that's present in this environment variable.
2. **New, but invited users** can still signup using the signup form or the OAuth buttons, even if their email \*\***does not**\*\* have a domain in the environment variable.

{% hint style="success" %}
This environment variable's value does not affect the _**login**_ behavior of existing users
{% endhint %}

{% hint style="danger" %}
Accounts created via form signup are not validated via an email
{% endhint %}

## Administrator emails

The environment variable `APPSMITH_ADMIN_EMAILS` can be set to a comma-separated list of email addresses, that will always be allowed to sign up, irrespective of the above two environment variables.

```text
// Example docker configuration
APPSMITH_ADMIN_EMAILS=homer@appsmith.com,marge@yahoo.com
```

These two email addresses will be able to sign up on the Appsmith instance irrespective of the `APPSMITH_SIGNUP_ALLOWED_DOMAINS`and`APPSMITH_SIGNUP_DISABLED configurations`

