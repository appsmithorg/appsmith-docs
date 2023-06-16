---
description: >-
  Configure your Google reCAPTCHA to ensure only humans can submit forms and
  click buttons
---

# Re-Captcha

[Google reCAPTCHA v3](https://www.google.com/recaptcha) is a service provided by Google that returns a user score without any interaction from the user. This can be integrated with [buttons](./) to prevent bots from clicking the button on your website without a human present.

**1. Go to the reCAPTCHA** [**add site page**](https://www.google.com/recaptcha/admin/create)

**2. Create a new site with version reCAPTCHA v3 and the domain `app.appsmith.com`**

![Click to expand](/img/button-recaptcha-setup.png)

**3. Copy the site and secret key**

![Click to expand](/img/recaptcha-keys.png)

**4. Paste the site key into the** [**button**](./) **reCAPTCHA field**

![Click to expand](/img/button-recaptcha-config.png)

**5. Configure the server-side integration on your backend**

:::note
The exact steps depend on your backend - see [Google's reference](https://developers.google.com/recaptcha/docs/verify) for detailed instructions.
:::

The user's reCAPTCHA response can be obtained in the API Pane with the `recaptchaToken` key.

Make a `POST` request to `https://www.google.com/recaptcha/api/siteverify` with the `secret` (secret key) and `response` (user response) parameters to retrieve the score in a JSON format:

```javascript
{
  "success": true|false,      // whether this request was a valid reCAPTCHA token for your site
  "score": number             // the score for this request (0.0 - 1.0)
  "action": string            // the action name for this request (important to verify)
  "challenge_ts": timestamp,  // timestamp of the challenge load (ISO format yyyy-MM-dd'T'HH:mm:ssZZ)
  "hostname": string,         // the hostname of the site where the reCAPTCHA was solved
  "error-codes": [...]        // optional
}
```

## Validation example

Now that you have registered the site with [Google Recaptcha](https://www.google.com/recaptcha/about/), you can validate if it is working by using a [button widget](/reference/widgets/button) and adding an [API](/data/datasource-reference/authenticated-api) on Appsmith. Follow these steps to validate the reCAPTCHA:

* Drag and drop a [button widget](/reference/widgets/button) onto the canvas
* Add the **site key** to the [button's `Google reCAPTCHA Key` ](./#widget-properties)property

:::info
Navigate to [Google reCAPTCHA v3 Admin Console](https://www.google.com/recaptcha/admin) >> Select **Settings** for your site>> expand **reCAPTCH Keys** section >> click **Copy Site Key**
:::

* Navigate to **Explorer** >> Add **New Blank API** >> Add details as below:
  * Add **Header** `content-type` as `multipart/form-data`.
  * Select the HTTP Method as `POST`.
  * Add URL `https://www.google.com/recaptcha/api/siteverify`.

![Add header, HTTP Method, and URL to validate reCaptcha](</img/Widgets__Button__reCAPTCHA__Validate_API__Content_Type_.png>)

* Select **Body** tab >> Add details as below:
  * Select `MULTIPART_FORM`_`_`_`DATA`.
  * Add key as **response** and bind the button's recaptchaToken property by using `{{<<BUTTON_NAME.recaptchaToken>>}}`.
  * Add key as **secret** and add your site's **Recaptcha secret key**.

:::info
Navigate to  [Google reCAPTCHA v3 Admin Console](https://www.google.com/recaptcha/admin) >> Select **Settings** for your site>> expand **reCAPTCH Keys** section >> click **Copy Secret Key**
:::

![Add response and secret to Body - Multipart form data.](</img/Widgets__Button__reCAPTCHA__Validate_API__Add_reCaptchToken_and_Secret_to_Body_.png>)

Once the API is set up, click the **button** to trigger the validation. On successful validation, you'll see the response generated as below in the API response tab:

```
{
  "success": true,
  "challenge_ts": "2022-08-09T12:55:40Z",
  "hostname": "app.appsmith.com",
  "score": 0.9,
  "action": "submit"
}
```
