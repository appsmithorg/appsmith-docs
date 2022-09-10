---
description: Configure Gmail to invite users to your Appsmith installation
---

# Gmail

To configure Gmail as your [SMTP server](https://developer.mozilla.org/en-US/docs/Glossary/SMTP) for Appsmith, begin by logging into your Gmail account. To start, you must set up an App Password within your Gmail account settings.

{% hint style="info" %}
To use App Passwords, please enable 2-factor authentication for your Gmail account. For more information on App Passwords, see [this reference](https://support.google.com/accounts/answer/185833?hl=en).
{% endhint %}

* Navigate to your [Google account settings dashboard](https://myaccount.google.com), and go to the Security tab.

![Find the "App Passwords" section under the Security tab.](../../../../.gitbook/assets/Security\_Full.png)

* Click on the **App passwords** section.
* On the next screen, find two dropdown boxes labeled **Select app** and **Select device**.

![](../../../../.gitbook/assets/dropdowns.png)

* In the **Select app** box, choose **Mail**.
* In the **Select device** box, choose **Other** and enter a name for the Appsmith platform, e.g., “MyAppsmithInstance.”
* Click **Generate** to create your App password.
* The next screen will contain your App password. Copy this password to your clipboard.

![Generate App Password](../../../../.gitbook/assets/app\_pass\_generated\_edit.png)

{% hint style="info" %}
You can also configure the email service provider using [Admin settings](./#configure-using-admin-settings). Add `Gmail App Password` in the `SMTP Password` Field.
{% endhint %}

