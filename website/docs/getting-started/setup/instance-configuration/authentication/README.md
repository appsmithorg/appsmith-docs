---
sidebar_position: 1
---
# Authentication

This section covers different authentication methods available on Appsmith. The default form login allows users to sign in using their email address and password. Besides, you can authorize users into Appsmith apps using **Google OAuth**, **GitHub OAuth** and popular SSO authentication protocols like **SAML**(enterprise version) and **OpenID Connect**(enterprise version).

**Single Sign-On (SSO)** is a session and user authentication service that permits users to use one set of login credentials. For example, you can use a single ID(email) to log in to any related or independent software applications. SSO lets you get your users quickly and securely into your apps, using an authentication system they're already using and trust. You can configure SSO in Appsmith to use custom authentication.


* [Google Login](/getting-started/setup/instance-configuration/authentication/google-login)
* [GitHub Login](/getting-started/setup/instance-configuration/authentication/github-login)
* [Security Assertion Markup Language (SAML)](/getting-started/setup/instance-configuration/authentication/security-assertion-markup-language-saml)
* [Openid Connect (OIDC)](/getting-started/setup/instance-configuration/authentication/openid-connect-oidc)

## Reset password on a self-hosted instance

If you need to reset your password while using a self-hosted instance of Appsmith, you can do so from your user profile page. If you are logged in to Appsmith, click your user display picture and then click the "Edit Profile" button. The "Reset password" button is located in the Email settings area. You should receive an email shortly that guides you through creating a new password. This method requires that the instance has been [configured to send email notifications](/getting-started/setup/instance-configuration/email).

If you need to access your account but aren't logged in to Appsmith, you may be able to do so by using an SSO method like Google or GitHub. As these are more secure, the SSO method replaces the form login for an existing account if they both use the same email address. This removes the need for a password entirely, and allows you to log in.