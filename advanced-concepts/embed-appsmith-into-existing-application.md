---
description: Guide on how to embed Appsmith into an existing application
---

# Embed Apps

Tools and Dashboards are great as an app and on a website, and now, you can have it both in one go by embedding apps to your website! In this guide, you'll learn how to embed Appsmith Apps into any website.

For this guide, we’ll be considering the [Customer Support Dashboard](https://app.appsmith.com/applications/5f2aeb2580ca1f6faaed4e4a/pages/5f2d61b580ca1f6faaed4e79) from the demo app’s, and embed that into an HTML page. You can also check out the live preview [here](https://appsmith-embed.netlify.app/).

Firstly, let’s create an HTML page and call it \`cs\_dashboard.html\`. Now, add the basic HTML structure to make it an HTML page:

```markup
<!DOCTYPE html>
<html>
<head>
    <title> Customer Support Dahboard </title>
</head>
<body>

</body>
</html>
```

You’ll also have to make sure that your app is public to embed into other application. You can do this by clicking on the Share option on the top toolbar and toggling the viewing option to Public. Here’s a GIF showing the same:

![Making the Application Public on Appsmith](https://lh3.googleusercontent.com/qpfBY24qpHXf\_21sq52dNAXR52axc260x\_ZFClh2fb8zUuEeM3Cd9fbKeLslK4jUXb4KTYucJXB92AxAOkHwKpj0ke15OJ5EH8EXHoN2bmtz5loZHmQ9ofvcCGEdsYyDVJQ04SUg)

Next, create an `iframe` tag and add the shareable link from share options to the `src` attribute with height and width set to `500` and `100%` respectively.

Include the meta tag in head to ensure that the embedded application renders responsively on different screen sizes:

```markup
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1"
    <title></title>
</head>
<body>
    <iframe src="https://app.appsmith.com/applications/5f2aeb2580ca1f6faaed4e4a/pages/5f2d61b580ca1f6faaed4e79" height="700" width="100%"></iframe>
</body>
</html>
```

Awesome, by opening the HTML page in a web browser, you should see your application embedded into your HTML page. Below is a screenshot of the same:

![Sceenshot of Appsmith Embed](https://lh5.googleusercontent.com/cky5Ayi-RETeeZ10cPZOo0b73dIfBi\_z9f1dwvhfj1-FOOfpkcdprLZvf2Dm\_j8POy5AOAnd\_SK4SKEbWz67BK78vUY57EbB0Dh9Nby2MmNPjcHyRwpKqaxWPYs8cYM9D8A0twiY)

If you want to get your app to use the whole page in your browser, you can still change your height and width parameters like so:

```markup
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1"
    <title></title>
</head>
<body>
    <iframe src="https://app.appsmith.com/applications/5f2aeb2580ca1f6faaed4e4a/pages/5f2d61b580ca1f6faaed4e79"frameborder="0" scrolling="yes" seamless="seamless" style="display:block; width:100%; height:100vh;"></iframe>
</body>
</html>
```

## Remove Appsmith Top Bar

Additionally, you can also see the Appsmith toolbar on the top, you can remove this by adding **`?embed=true`** to the share URL. Update the code to the following:

```markup
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1"
    <title></title>
</head>
<body>
    <iframe src="https://app.appsmith.com/applications/5f2aeb2580ca1f6faaed4e4a/pages/5f2d61b580ca1f6faaed4e79?embed=true" height="700" width="100%"></iframe>
</body>
</html>
```

Awesome! Now you can see the app without any toolbar! Below is a screenshot:

![Appsmith Embed with ?embed=true property](https://lh6.googleusercontent.com/\_-JxziLtFfJXfpxLURSBGuRTrdYRsYnMBcyK7eZoJzaKyFcts81swlqHK1dwGk6c90Otl2x5PCVmeTHDq2RwmGp6b0WA85zw2LHapvhtlhNWKesMIM7BsyM9QcdPUe-F3nrmLMuQ)
