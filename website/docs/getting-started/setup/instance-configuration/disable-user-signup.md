---
sidebar_position: 6
---
# Signup Restriction

This document describes ways to restrict users from signing up on your self-hosted Appsmith instance. This configuration is done by editing the [**Instance configuration**](./).

## Disable Signup

The environment variable `APPSMITH_SIGNUP_DISABLED` should be set to `true` to disable the signing up of new users. When set, the following facts hold:

1. **New, uninvited users** cannot sign up using the signup form or the OAuth buttons. Both modes of signing up are disallowed.
2. **New, invited users** can still signup using either the form or the OAuth buttons.

:::tip
The signup page continues to show up but throws an error when a user tries to sign up. This environment variable's value does not affect the **login** **behavior** of existing users.
:::

:::caution
The user email IDs entered on the form login or signup are not verified by email or otherwise. This can lead to a breach while giving or receiving access to applications, resetting your password, using the email ID in any of your applications, etc. Make sure the user email IDs used exist to avoid issues like these.
:::

## Email domains white-list

The environment variable `APPSMITH_SIGNUP_ALLOWED_DOMAINS` can be used to restrict signups to emails belonging to only a specific set of domains. This field takes a comma-separated set of values.

Setting `APPSMITH_SIGNUP_ALLOWED_DOMAINS=appsmith.com` allows `homer@appsmith.com` to sign up, but not `bart@gmail.com`.

Setting `APPSMITH_SIGNUP_ALLOWED_DOMAINS=appsmith.com,gmail.com` allows both `homer@appsmith.com` and `bart@gmail.com` to sign up, but not `lisa@outlook.com`.

When this environment variable is set to one or more domains, the following facts hold:

1. **New, uninvited users** cannot sign up using the signup form or the OAuth buttons unless the email they use has a domain that's present in this environment variable.
2. **New, but invited users** can still signup using the signup form or the OAuth buttons, even if their email \*\***does not**\*\* have a domain in the environment variable.

:::tip
This environment variable's value does not affect the **login behavior** of existing users
:::

:::danger
Accounts created via form signup are not validated via an email
:::

## Administrator emails

The environment variable `APPSMITH_ADMIN_EMAILS` can be set to a comma-separated list of email addresses, that is always allowed to sign up, irrespective of the above two environment variables.

```bash
# Example docker configuration
APPSMITH_ADMIN_EMAILS=homer@appsmith.com,marge@yahoo.com
```

These two email addresses can sign up on the Appsmith instance irrespective of the `APPSMITH_SIGNUP_ALLOWED_DOMAINS`and`APPSMITH_SIGNUP_DISABLED configurations`
