---
sidebar_position: 3
description: Guide on how to embed Appsmith apps into an existing application
---

# Embed Appsmith

To embed an Appsmith application into your website, follow the steps below:

<VideoEmbed host="youtube" videoId="Zoiy1tKcjzU" title="How To Set Up Private Embedding With SSO" caption="How To Set Up Private Embedding With SSO" />

## Prerequisites

1. Go to **Admin Settings > General > Embed Settings**, click **Limit embedding to certain URLs** and add the URL of your website in the input box. If you want to allow the Appsmith application to be embedded on any website, select the **Allow embedding everywhere** option.
2. To embed Appsmith in your web page or web application, ensure that the hosting of the said web page or application is done on a server.

## Embed an Application

1. Open your Appsmith application and click **App Settings > Share & Embed**.
2. Enable the Make **application public** and copy the **Embed URL**.

:::info
Embedding [private applications](#embed-private-application) is only available in Appsmith's [Business Edition](https://www.appsmith.com/pricing).
::: 3. On your web application, create an `iframe` tag and add the **Embed URL** to its `src` attribute. You can set the dimensions of the embedded application using the `height` and `width` attributes as shown below:

```javascript
<iframe src="<Embed-URL>" height="700" width="100%"></iframe>
```

### Embed configurations

- You can set the dimensions of the embedded application in the iframe tag using the `height` and `width` attributes:

```javascript
<iframe src="<Embed-URL>" height="700" width="100%"></iframe>
```

If you want to get your app to use the whole page in your browser, you can change your height and width parameters, like shown below:

```javascript
<iframe
  src="<LINK_OF_APP>"
  scrolling="yes"
  seamless="seamless"
  style="display:block; width:100%; height:100vh;"
></iframe>
```

- You can remove the Appsmith top bar from the embedded application from the App settings:

  a. Go to **App settings > Share & Embed** and enable the **Show navigation bar** toggle.

  b. Copy the updated **Embed URL** and add it to the iframe tag of your web application.

## Embed private application

:::info
Appsmith supports embedding private apps only on self-hosted [**Business Edition**](https://www.appsmith.com/pricing) instances.
:::

You can embed private Appsmith apps on your website or in an external application and authenticate users through SSO.

### Prerequisites

- The Appsmith app and the parent app should be under sub-domains of the same domain. For eg. `appsmith.company.com` and `internal.company.com`.
- You must configure the same SSO identity provider(IDP) on the Appsmith and the parent applications.

### SSO configurations for embedded application

To configure the Appsmith application with the SSO of your parent application, follow the steps below:

1. Go to **App settings > Share & Embed** and navigate to the **SSO method**.
2. Select the preferred SSO type from the given list.
3. Once selected, copy the updated **Embed URL** and add it your web application.

### General notes

- The feature may not work on `HTTP` URLs. Use `HTTPS` for both the Appsmith instance and the parent application.
- Firefox has additional third-party cookie restrictions that may cause issues with private embeds.
- Users may see issues when strict third-party cookie-sharing restrictions are enabled on the browser.
- SSO in private embeds isn't supported for GitHub OAuth 2.0.
- For Google OAuth 2.0 configuration, the parent and child can be two OAuth 2.0 clients under the same project.

### Further reading

- [Communication between an embedded app and the parent app](/reference/appsmith-framework/widget-actions/post-message)
