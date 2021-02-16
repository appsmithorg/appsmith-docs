---
description: "Completely disable signing up of new users on Appsmith or restrict the domains of email address that can be used to sign-up."
---

# Restricting Sign-up

The following section describe ways to restrict signing up of new accounts in Appsmith. This configuration is done using
environment variables. If you've setup Appsmith use our `install.sh` script, these environment variables can be set in
the `docker.env` file located in your installation directory.

## Disable sign-up

The environment variable `APPSMITH_SIGNUP_DISABLED` should be set to `true` to disable signing up of new users. When
this environment variable is set to `true`, the following facts hold:

1. *New*, *uninvited* users cannot signup using the signup form or the OAuth buttons. Both modes of signing up are
   disallowed.
1. *New*, but *invited* users can still signup using either the form or the OAuth buttons.

Note: This environment variable's value does not affect the *login* behaviour of existing users.

## Email domains white-list

The environment variable `APPSMITH_SIGNUP_ALLOWED_DOMAINS` can be used to allow emails belonging to a specific set of
domains.

For example, setting `APPSMITH_SIGNUP_ALLOWED_DOMAINS=appsmith.com` will allow `homer@appsmith.com` to sign up, but not
`bart@gmail.com`. But setting `APPSMITH_SIGNUP_ALLOWED_DOMAINS=appsmith.com,gmail.com` will allow both
`homer@appsmith.com` and `bart@gmail.com` to sign up, but not `lisa@outlook.com`.

When this environment variable is set to one or more domains, the following facts hold:

1. *New*, *uninvited* users cannot signup using the signup form or the OAuth buttons, unless the email they use has a
   domain that's present in this environment variable.
1. *New*, but *invited* users can still signup using the signup form or the OAuth buttons, even if their email **does
   not** have a domain in the environment variable.

Note: This environment variable's value does not affect the *login* behaviour of existing users.

## Administrator emails

The environment variable `APPSMITH_ADMIN_EMAILS` can be set to a comma separated list of email addresses, that will
*always* be allowed to sign up, irrespective of the above two environment variables.

For example:

```
APPSMITH_ADMIN_EMAILS=homer@appsmith.com,marge@yahoo.com
```

These two email addresses, if don't already have accounts, will be able to sign up to Appsmith using the form or the
OAuth buttons, even if signing up is restricted.
