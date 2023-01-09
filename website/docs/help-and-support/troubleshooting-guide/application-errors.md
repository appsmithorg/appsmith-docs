---
sidebar_position: 4
---
# Application Errors

## Invalid / Empty Name Error

![Click to expand](/img/application-name-error.png)

```
Application name can't be empty
```

This error indicates that the application name field has been left empty.

This error can be fixed by editing the application name field and providing a non-empty string as the application name.

## Duplicate Name Error

```
Entity name: <name> is already being used
```

This error indicates that the name being assigned to the entity has been used before.

[JavaScript reserved keywords](https://www.w3schools.com/js/js\_reserved.asp) and [the window object methods and properties](https://www.w3schools.com/jsref/obj\_window.asp) cannot be used as entity names. You can fix the error by assigning a new unique name to the entity.

## Login / Signup Errors

![Click to expand](/img/signup-error.png)

### Account Already Registered Error

```
There is already an account registered with this email. Please sign in instead
```

This error indicates that the email used to sign up has already been used before.

This error can be fixed by either using a different email to signup or doing `login` instead of `signup`

### Reset Password Error

#### No User Error

```
Unable to find user <email>
```

The error indicates that the email provided to reset the password is not registered with Appsmith.

You can fix the error by providing an email that has been used to register with Appsmith before. Alternatively, any new un-registered email can be used to create a new account using the sign-up option.

## Page Access Error

![Click to expand](/img/page-not-found-error.png)

```
Either this page doesn't exist, or you don't have access to
this page.
```

This message indicates one of the following:

* The page URL is invalid. This error can be fixed by getting the correct page URL from the administrator/developer.
* The User doesn't have [permission](/advanced-concepts/access-control) to access the page. You can fix the error by requesting access permission for the page from the `admin/developer`.
