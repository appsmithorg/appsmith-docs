# Share and Embed

This page provides information on how to configure settings for sharing and embedding apps.



### Share

#### Make application public

When enabled, anyone with the app URL can view the application, even users without an Appsmith account. You can even make your applications public and share them with users who are not part of your workspace. These external users do not need to log in to Appsmith to access the shared applications. 

To obtain the application URL, click on the **Share** button in the top-right corner of the app's dashboard and copy the URL.



### Fork

#### Make application forkable


Enabling this option allows anyone viewing the app to fork the application and its content to their workspace. Users can easily duplicate and work on their personalized versions of the app, fostering collaboration and flexibility in project development.

### Embed

#### Show navigation bar

Enabling this feature displays the navigation bar in the embedded app, allowing users to easily navigate through different sections of the application. If not enabled, only the application content is shown.




#### Embed URL

This property contains the URL of your app. You can use this URL to integrate and share your application across various platforms or embed it within other websites or applications.

<dd>

*Example*: On your web application, add the Embed URL to the `src` attribute of the `iframe` tag. You can set the dimensions of the embedded application using the height and width attributes as shown below:


```html
<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1"
    <title></title>
</head>
<body>
    <iframe src="<Embed_URL>" scrolling="yes" seamless="seamless" style="display:block; width:100%; height:100vh;"></iframe>
</body>
</html>
```

</dd>

:::info
In self-hosted instances, you can restrict embedding an application to certain web applications. For more information, see Embed settings option in [Admin settings](/getting-started/setup/instance-configuration#configure-instance).
:::







To embed private Appsmith apps and seamlessly authenticate users through SSO, try our [Business Edition](https://customer.appsmith.com/?source=cloud&instance=5f68a8ad7f2d33301e7bd43b&feature=private_embeds&section=app_settings).







