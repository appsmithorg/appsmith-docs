# Disable User Signup

To disable users from signing up on your self hosted instance, set the below env variables in your [**docker.env file**](./#configuring-self-hosted-instances)\*\*\*\*

```bash
APPSMITH_SIGNUP_DISABLED=true
APPSMITH_ADMIN_EMAILS=YOUR_ADMIN_EMAIL
```

[**Restart the Appsmith instance**](./#configuring-self-hosted-instances)\*\*\*\*

This will disable allowing users other than those specified in the `APPSMITH_ADMIN_EMAILS` field from signing up on your appsmith instance. Other users can only signup once they have been invited by an existing user.

{% hint style="success" %}
The signup page will continue to show up but will throw an error when a user tries to sign up.
{% endhint %}

{% hint style="info" %}
Learn about more options to restrict signup, including allowing emails with specific domains to signup at the page on [Restricting Sign-up](../../how-to-guides/restricting-signup.md).
{% endhint %}

