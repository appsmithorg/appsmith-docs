---
sidebar_position: 7
description: Custom branding for Appsmith is a feature that allows users to customize the appearance of their Appsmith workspace and apps with their own logo and color palette.
---

# Branding

Custom branding for Appsmith is a feature that allows app builders to customize the appearance of their Appsmith workspace and apps with their own logo and color palette. This ensures that the end-users of the app have a more familiar and cohesive experience, with the login screen, invite emails, and error pages matching the branding of your company. 

:::info
Branding is only available on self-hosted, [**Business Edition**](https://www.appsmith.com/pricing) instances of Appsmith.
:::

When you use custom branding with Appsmith, not only are the login screen and email templates customized to match your organization's branding, but other screens in your app or service are also affected.

![Branding affects the 404 and login screens.](/img/branding_404_login.png)
![Branding affects the dashboard and email templates.](</img/branding_dash_email.png>)

## Configure branding

If you are using custom branding with Appsmith, setting it up is simple and straightforward. All you need to do is provide your own logo and branding assets, and Appsmith handles the rest.

![Access the branding settings within the Admin Settings area.](/img/branding_newbrand.png)

To configure Appsmith to show your brand, follow these steps:

<VideoEmbed host="youtube" videoId="aK-JHRFNUrU" title="Branding | Demo" caption="Set up Appsmith to show your own branding" /> 

1. From your Appsmith dashboard, navigate to the [Admin Settings](/getting-started/setup/instance-configuration/admin-settings). You must to have Administrator privileges to see access this area.
2. Click on the **Branding** tab to open branding settings.
3. To upload your logo, click in the **Logo** box and browse to select the image file you'd like to upload. Appsmith supports .svg, .png, and .jpg files up to 2 MB in size.
4. To upload a favicon, click in the **Favicon** box and browse to select the file you'd like to upload. You may provide a file of type .ico, .png, or .jpg which shouldn't be larger than 32x32 pixels.
5. In the **Color** section, each of the three bars of color represent the primary, background, and font colors. Click the one you'd like to customize, and enter a hex color code in the input box. Alternatively, you can click the color preview circle in the box to open a color-picker window and select it that way.
<!-- 
:::tip
Updating the **Colors** section makes your brand colors easily accessible while building apps. In the app's theme settings or a widget's style settings, open the color picker and you can quickly select any of your brand's palette.
::: -->

6. Once you are satisfied with your changes and the previews look acceptable, click the **SUBMIT** button to save your changes. Your branding is now available throughout Appsmith.