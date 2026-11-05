---
description: Send page views from published apps to Google Analytics 4, using only the measurement IDs an administrator approves.
title: Approved Analytics (GA4)
hide_title: true
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1> Approved Analytics (GA4) </h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" },
{ name: "Enterprise", link: "https://www.appsmith.com/pricing", additionalClass: "enterprise" }
]}
/>
</div>

<!-- vale on -->

Approved Analytics sends page views from your published apps to Google Analytics 4 (GA4). An administrator decides which GA4 measurement IDs apps may use. App authors pick from that list. Viewers see a consent banner, and nothing from Google loads until they allow it.

:::note Edition
Approved Analytics is available only in the Appsmith EE edition (Business and Enterprise). It is not part of the Community edition. It is not available on airgapped instances, because it loads Google's script.
:::

Approved Analytics supports GA4 only. You cannot add your own scripts, and Google Tag Manager containers are not supported.

This feature is about analytics for *your* apps. It is separate from the data Appsmith collects about the product itself. For that, see [Telemetry](/product/telemetry).

## How it works

| Who | Where | What they do |
|---|---|---|
| Administrator | **Admin Settings** > **Approved analytics** | Turns analytics on for the organization and approves GA4 measurement IDs (up to 20). |
| App author | **App Settings** > **Analytics** | Picks the app's measurement ID from the approved list, and chooses what each page does. |
| Viewer | The published app | Chooses **Allow analytics** or **Decline analytics**. Can turn analytics off later. |

Analytics runs on a published page only when all of these are true:

1. The administrator turned analytics on.
2. The page uses a measurement ID, either the app's ID or its own override.
3. That ID is on the approved list.
4. The viewer allowed analytics.

If any of these is false, the page sends nothing to Google.

## Before you start: prepare the GA4 property

Do these steps in Google Analytics and Google Tag Manager before you approve an ID. Appsmith cannot see or change these settings, so they are your responsibility.

### Use a dedicated Google tag

A GA4 measurement ID (`G-XXXXXXX`) loads a Google tag. Google can send the tag's events to every destination connected to it, such as Google Ads, another GA4 property, or a Tag Manager container.

1. Open the Google tag for the measurement ID, and go to its **Destinations**.
2. Make sure the only destination is the GA4 stream that owns this ID.
3. Remove any Google Ads, Floodlight, Tag Manager container, or other GA4 destinations. If the tag must keep them for another website, create a new web stream and a new tag just for Appsmith.

### Turn off data sharing in the GA4 property

1. In GA4, go to **Admin** > **Product links**. Remove links that share this property's data, such as Google Ads, BigQuery, Search Ads 360, and Merchant Center.
2. Go to **Admin** > **Data collection**, and turn off **Google signals**.

### Turn off Enhanced measurement options

Appsmith sends its own page views, with a URL and title that contain no app data. Google's Enhanced measurement runs separately and can send the real URL, search terms, or form details.

Go to **Admin** > **Data streams** > *your web stream* > **Enhanced measurement**, and click the settings icon. Then:

- **Page views:** open the advanced settings and turn off page changes based on browser history events.
- **Site search:** turn it off. It reads search terms from the URL.
- **Form interactions:** turn it off.
- **Video engagement:** turn it off. It can send video URLs.
- **Outbound clicks** and **File downloads:** turn them off, unless your data policy allows link URLs to be sent.

Check these settings again whenever someone changes your Google account setup. A destination or link added later takes effect at once.

## Turn on Approved Analytics

You need to be an instance administrator. On instances without granular access control, the organization's super user can do this.

1. Go to **Admin Settings** > **Approved analytics**.
2. Turn on **Allow apps to use approved analytics**.
3. Under **Approved measurement IDs**, enter a GA4 measurement ID, such as `G-ABCD12`, and click **Add**. The ID must start with `G-` and use only capital letters and numbers. `GTM-`, `GT-`, `AW-`, and `UA-` IDs are not accepted.
4. Repeat for each ID that apps may use.
5. Click **Save**.

<ZoomImage
  src="/img/approved-analytics-admin-approved-analytics.png"
  alt="Approved analytics in Admin Settings, with analytics turned on and one approved measurement ID"
  caption="Admin Settings > Approved analytics"
/>

Changes apply to pages that load after you save. Tabs that are already open keep the old setting until they are refreshed.

To stop all analytics in the organization, turn off **Allow apps to use approved analytics** and click **Save**. To stop one ID, remove it from the list and click **Save**. Apps and pages that used it stop sending data, and the app settings mark the ID as *(no longer approved)*.

## Set analytics for an app

You need edit access to the app.

1. Open the app in the editor.
2. Click the settings icon to open **App Settings**, and select **Analytics**.
3. In **Measurement ID for this app**, pick an ID from the approved list. Pick **Disabled** to turn analytics off for the app.
4. Under **Pages**, choose what each page does:
   - **Use app setting:** the page uses the app's measurement ID.
   - **Disabled:** the page never sends analytics.
   - **Use a different ID:** pick another approved ID for this page.
5. Click **Save**.
6. Deploy the app. Viewers get the new settings only after you deploy.

<ZoomImage
  src="/img/approved-analytics-app-settings-analytics.png"
  alt="App Settings Analytics section with the app measurement ID and a page set to Use app setting"
  caption="App Settings > Analytics"
/>

The **Analytics** section appears only to users who can edit the app. Viewers never see the app's analytics settings.

## What viewers see

When a viewer opens a published page that has analytics, Appsmith shows a consent banner. Nothing from Google loads until the viewer clicks **Allow analytics**.

<ZoomImage
  src="/img/approved-analytics-viewer-consent-banner.png"
  alt="Published app with the consent banner and the Allow analytics and Decline analytics buttons"
  caption="Consent banner in a published app"
/>

- **Allow analytics:** Appsmith loads GA4 and sends a page view for each page.
- **Decline analytics:** nothing is sent. The viewer can change this choice later with **Analytics choices** at the bottom left.
- **Turn off analytics and reload:** after allowing, the viewer can use this control at the bottom left to turn analytics off. Appsmith stops sending data, deletes its analytics cookies, and reloads the page.

<ZoomImage
  src="/img/approved-analytics-viewer-analytics-on.png"
  alt="Published app after the viewer allowed analytics, with the Turn off analytics and reload control"
  caption="After the viewer allows analytics"
/>

The viewer's choice is remembered for 180 days. Appsmith asks again if the measurement ID or the administrator's settings change.

## What Appsmith sends to Google

For each page view, Appsmith sends:

- **Page location:** `<your Appsmith URL>/app/<app ID>/page/<page ID>`. The real URL, query string, and hash are never sent.
- **Page title:** always `Appsmith page`. The real page or app name is never sent.
- **Referrer:** the previous page in the same app, in the same form, or empty.

Appsmith does not send widget values, query results, form data, search terms, or user identities. Google signals and ad personalization are turned off, and advertising consent stays denied. GA4 cookies are named `appsmith_aa_ga` and `appsmith_aa_ga_<ID>`, and stay on the app's host.

Google's own script still runs in the page after the viewer allows analytics. Approving a measurement ID is a decision to trust Google with that script.

## Content Security Policy

The Content Security Policy that ships with Appsmith does not block GA4. If you add your own policy, add Google's hosts to the sources you already allow. Do not replace them.

For example, if your policy has `script-src 'self'`, `img-src 'self' data:`, and `connect-src 'self'`, use:

```text
script-src 'self';
script-src-elem 'self' https://www.googletagmanager.com;
img-src 'self' data: https://www.googletagmanager.com https://*.google-analytics.com;
connect-src 'self' https://www.googletagmanager.com https://*.google-analytics.com https://*.google.com
```

This is one header value, split across lines for reading. End each directive with a semicolon, except the last. Without the semicolons, the browser reads everything as one directive. Keep every other source your policy already has, such as CDN or datasource hosts.

If your policy blocks Google's script, analytics stays off and the app still works. See Google's [CSP guide](https://developers.google.com/tag-platform/security/guides/csp) for the current host list.

## Limits

- **Open tabs:** a tab that is already open keeps the setting it loaded with until it is refreshed.
- **Import, Git, fork, and clone:** these copy an app's analytics settings. The copied ID does nothing unless the target organization approves it.
- **Airgapped instances:** Approved Analytics is not available.

## Troubleshooting

#### The Approved analytics page says I don't have permission

Only an instance administrator can change these settings. On instances without granular access control, the organization's super user can. Ask your administrator.

#### The Analytics section shows "no longer approved"

The administrator removed that ID from the approved list. Pick another approved ID, or ask the administrator to approve it again.

#### No data appears in GA4

Check each of these:

1. The administrator turned analytics on and approved the ID.
2. The app or page uses that ID, and you deployed the app after saving.
3. The viewer clicked **Allow analytics**.
4. Your Content Security Policy allows Google's hosts.
5. The instance is not airgapped.
