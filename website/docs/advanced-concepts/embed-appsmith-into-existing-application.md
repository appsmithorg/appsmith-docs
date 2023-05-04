---
sidebar_position: 3
description: Guide on how to embed Appsmith apps into an existing application
---

# Embed Appsmith

<VideoEmbed host="youtube" videoId="l7508s-5VwU" title="Embed Appsmith in your Website" caption="Embed Appsmith in your Website"/>



Tools and Dashboards are great as an app and on a website, and now, you can have both by embedding apps into your website. In this guide, you'll learn how to embed Appsmith Apps into any website.

### Creating HTML page

Firstly, lets create an HTML page and call it \``dashboard.html`\`. Now, add the basic HTML structure to make it an HTML page:

```markup
<!DOCTYPE html>
<html>
<head>
    <title> Customer Dashboard </title>
</head>
<body>

</body>
</html>
```

You'll also have to ensure your app is public to embed into other applications. You can do this by clicking on the Share option on the top toolbar and toggle the viewing option to **Public**. Here's a video example:




<VideoEmbed host="youtube" videoId="gD0xV-Tt1_U" title="Follow these steps to make your application public" caption="Follow these steps to make your application public"/>

Next, create an `iframe` tag and add the shareable link from share options to the `src` attribute with height and width set to `500` and `100%`, respectively.

Include the meta tag in the head to ensure that the embedded application renders responsively on different screen sizes:

```markup
<!DOCTYPE html>
<html> 
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title> Customer Support Dashboard </title>
</head>
<body>
    <iframe src="<LINK_OF_APP>" height="700" width="100%"></iframe>
</body>
</html>
```



### Opening the HTML page

:::info
If you are opening the HTML page as a `file`, the browser won't allow you to do that. The HTML file needs to come from a server.
:::

After creating the HTML page, save it as `dashboard.html` and have an HTTP server serve it. There are several ways to do it as described below:

#### Serving an HTML file with Node.js

Once you have created your HTML file, create a new `app.js`` `**``** file. Paste the below-mentioned code and edit your HTML filename.

```markup
const http = require('http');
const fs = require('fs');

http.createServer(function(req, res) {
    res.writeHead(200, { 'content-type': 'text/html' });
    const html = fs.readFileSync('./dashboard.html');
    res.end(html);
}).listen(3000, () => {
    console.log('running on 3000');
});
```

Now, in the terminal, run `node app.js`

This would prompt a `running on 3000` message. Next, go to your browser and open [http://localhost:3000/](http://localhost:3000/)

This opens your HTML file.

![screenshot of Appsmith Embed](/img/Appsmith\_embed.png)

#### Running npx http-server

Here's another way to open an HTML file.

Now, if you have _Node JS_ installed, go to the command terminal and run:

```
npx http-server
```

Next, open [http://localhost:8080/dashboard.html](http://localhost:8080/dashboard.html), and it should open the HTML File.

### Modifying layout

You can modify the layout of your embedded code directly from within your Appsmith app and control the appearance when displayed on a website or external application. 

<VideoEmbed host="youtube" videoId="qACSzNMsdKA" title="Modifying layout" caption="Modifying layout"/>

* To change the layout, open the `app settings`.
* Click `Share & Embed`.
* Update the Embed size as desired.
* Copy the updated embed code.

If you want to get your app to use the whole page in your browser, you can change your height and width parameters, like shown below:

```markup
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1"
    <title></title>
</head>
<body>
    <iframe src="<LINK_OF_APP>" scrolling="yes" seamless="seamless" style="display:block; width:100%; height:100vh;"></iframe>
</body>
</html>
```

#### Remove Appsmith top bar

You can remove the Appsmith top bar with page tabs by appending **`?embed=true`** to the share URL. Alternatively, you can get this prepared URL from the `App Settings` on the canvas, as shown below.

![Remove Appsmith top bar](/img/embed_apps.png)

* Click `App settings` in the Canvas properties.
* Click `Share & Embed`.
* Toggle `Show navigation bar`.
* Copy the updated embed code.

```markup
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title> Customer Support Dashboard </title>
</head>
<body>
    <iframe src="<LINK_OF_APP>" height="700" width="100%"></iframe>
</body>
</html>
```


![Appsmith Embed with ?embed=true property](/img/embed=true.png)

### Embedding private apps

:::info
Appsmith supports embedding private apps only on self-hosted [**Business Edition**](https://www.appsmith.com/pricing) instances.
:::

You can embed private Appsmith apps on your website or in an external application and authenticate users seamlessly through SSO. 

#### Prerequisites
* The Appsmith app and the parent app should be under sub-domains of the same domain. For eg. `appsmith.company.com` and `internal.company.com`.
* You must configure the same SSO identity provider(IDP) on the Appsmith and the parent applications.

To configure Appsmith to use SSO, you can append the below parameters (based on your SSO type) to the URL path of the app you're embedding.
* `ssoTrigger=oidc` for OIDC SSO.
* `ssoTrigger=saml` for SAML 2.0 based SSO.
* `ssoTrigger=google` for Google OAuth 2.0 SSO

#### General notes
* The feature may not work on `HTTP` URLs. Use `HTTPS` for both the Appsmith instance and the parent application.
* Firefox has additional third-party cookie restrictions that may cause issues with private embeds.
* Users may see issues when strict third-party cookie sharing restrictions are enabled on the browser. 
* SSO in private embeds isn't supported for GitHub OAuth 2.0.
* For Google OAuth 2.0 configuration, the parent and child can be two OAuth 2.0 clients under the same project.


### Further reading
* [Communication between embedded app and the parent app](/reference/appsmith-framework/widget-actions/post-message)
