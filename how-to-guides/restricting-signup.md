---
description: Control the users who can sign up on your appsmith instance.
---

# Restricting Sign-up

This document describes ways to restrict users from signing up on your self-hosted Appsmith instance. This configuration is done using environment variables in your installation folder. If you've setup Appsmith use the `install.sh` script, these environment variables can be set in the `docker.env` file located in your installation directory.

## Disable Sign-up

The environment variable `APPSMITH_SIGNUP_DISABLED` should be set to `true` to disable signing up of new users. When set, the following facts hold:

1. **New, uninvited users** cannot signup using the signup form or the OAuth buttons. Both modes of signing up are

   disallowed.

2. _**New, invited users**_ can still signup using either the form or the OAuth buttons.

{% hint style="success" %}
This environment variable's value does not affect the _login_ behavior of existing users.
{% endhint %}

## Email domains white-list

The environment variable `APPSMITH_SIGNUP_ALLOWED_DOMAINS` can be used to restrict signups to emails belonging to only a specific set of domains. This field takes a comma-separated set of values.

Setting `APPSMITH_SIGNUP_ALLOWED_DOMAINS=appsmith.com` will allow `homer@appsmith.com` to sign up, but not `bart@gmail.com`. 

Setting `APPSMITH_SIGNUP_ALLOWED_DOMAINS=appsmith.com,gmail.com` will allow both `homer@appsmith.com` and `bart@gmail.com` to sign up, but not `lisa@outlook.com`.

When this environment variable is set to one or more domains, the following facts hold:

1. **New, uninvited users** cannot signup using the signup form or the OAuth buttons unless the email they use has a

   domain that's present in this environment variable.

2. **New, but invited users** can still signup using the signup form or the OAuth buttons, even if their email \*\*does

   not\*\* have a domain in the environment variable.

{% hint style="success" %}
This environment variable's value does not affect the _login_ behavior of existing users
{% endhint %}

{% hint style="danger" %}
Accounts created via form signup are not validated via an email
{% endhint %}

## Administrator emails

The environment variable `APPSMITH_ADMIN_EMAILS` can be set to a comma-separated list of email addresses, that will _always_ be allowed to sign up, irrespective of the above two environment variables.

For example:

```text
APPSMITH_ADMIN_EMAILS=homer@appsmith.com,marge@yahoo.com
```

These two email addresses will be able to sign up on the Appsmith instance irrespective of the `APPSMITH_SIGNUP_ALLOWED_DOMAINS`and`APPSMITH_SIGNUP_DISABLED configurations`

