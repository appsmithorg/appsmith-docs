---
sidebar_position: 4
description: Troubleshoot the issues with your Appsmith applications. This page includes a list of common errors, causes, and solutions to help you resolve application issues.
---
# Application Errors

## Invalid / empty name error

![Click to expand](/img/application-name-error.png)

#### Error message
<Message
    messageContainerClassName="error"
    messageContent="Application name can't be empty."
></Message>

#### Cause
This error indicates that the application name field has been left empty.

#### Solution
This error can be fixed by editing the application name field and providing a non-empty string as the application name.

## Duplicate name error

#### Error message

<Message
    messageContainerClassName="error"
    messageContent="Entity name: <name> is already being used."
></Message>

#### Cause
This error indicates that the name being assigned to the entity has been used before.

#### Solution
[JavaScript reserved keywords](https://www.w3schools.com/js/js\_reserved.asp) and [the window object methods and properties](https://www.w3schools.com/jsref/obj\_window.asp) can't be used as entity names. You can fix the error by assigning a new unique name to the entity.

## Login / signup errors


![Click to expand](/img/signup-error.png)

### Account already registered error

#### Error message
<Message
    messageContainerClassName="error"
    messageContent="There is already an account registered with this email. Please sign in instead."
></Message>

#### Cause
This error indicates that the email used to sign up has already been used before.

#### Solution
This error can be fixed by either using a different email to signup or doing `login` instead of `signup`

### Reset password error

#### Error message
<Message
    messageContainerClassName="error"
    messageContent="It looks like you may have entered incorrect/invalid credentials. Please try again or reset password using the button below."
></Message>

#### Cause

This error appears when the user attempts to log into the Appsmith platform with invalid email and/or password.

#### Solution
If you are unable to log in due to forgotten credentials, it's recommended to reset your account password. This can be done with the "Forgot Password" button on the Appsmith sign-in page; the page prompts you for the email address associated with your account, and then Appsmith sends an email to that address with a link for creating a new password.

Alternatively, you may be able to access your account by using an SSO method like Google or GitHub. If you use SSO with an account that has the same email address as the one you normally use to log in via email and password, you should be signed in successfully.

If you need to reset your password while using a self-hosted instance of Appsmith, the instance must first be [configured to send email notifications](/getting-started/setup/instance-configuration/email).

### No user error

#### Error message
<Message
    messageContainerClassName="error"
    messageContent="Unable to find user <email>."
></Message>

#### Cause
The error indicates that the email provided to reset the password isn't registered with Appsmith.

#### Solution
You can fix the error by providing an email that has been used to register with Appsmith before. Alternatively, any new un-registered email can be used to create a new account using the sign-up option.

## Page access error

![Click to expand](/img/page-not-found-error.png)

#### Error message
<Message
    messageContainerClassName="error"
    messageContent="Either this page does not exist, or you don't have access to this page."
></Message>

#### Cause
This message indicates one of the following:

* The page URL is invalid. 
* The User doesn't have [permission](/advanced-concepts/share-application) to access the page. 

#### Solution
You can fix the error by requesting access permission for the page from the `admin/developer`.

