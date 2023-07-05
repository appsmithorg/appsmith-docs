---
description: Configure Gmail to invite users to your Appsmith installation
sidebar_position: 2.3
---

# Gmail

To configure Gmail as your [SMTP server](https://developer.mozilla.org/en-US/docs/Glossary/SMTP) for Appsmith, begin by logging into your Gmail account. To start, you must set up an App Password within your Gmail account settings.

:::info
To use App Passwords, please enable 2-factor authentication for your Gmail account. For more information on App Passwords, see [this reference](https://support.google.com/accounts/answer/185833?hl=en).
:::

* Navigate to your [Google Account settings dashboard](https://myaccount.google.com), and go to the Security tab.

![Find the "App Passwords" section under the Security tab.](/img/Security\_Full.png)

* Click the **App passwords** section.
* On the next screen, find two dropdown boxes labeled **Select app** and **Select device**.

![](/img/dropdowns.png)

* In the **Select app** box, choose **Mail**.
* In the **Select device** box, choose **Other** and enter a name for your Appsmith instance.
* Click **Generate** to create your App password.
* The next screen contains your App password. Copy this password to your clipboard.

![Generate App Password](/img/app\_pass\_generated\_edit.png)

* Paste your new Gmail App Password into your SMTP datasource's `Password` field.

:::info
You can also configure the email service provider using [Admin settings](/getting-started/setup/instance-configuration/email#admin-settings).
:::

