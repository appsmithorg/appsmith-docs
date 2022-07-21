# Frame Ancestors

Starting with Appsmith v1.7.10, you can control where your apps can be loaded in a frame.

Why should I control this? Allowing your Appsmith apps to be embedded on any website makes them susceptible to clickjacking attacks. Controlling this is one of the simplest ways to avoid these attacks.

By default, starting Appsmith v1.7.10, apps **cannot** be loaded in a frame/iframe, on domains other than the domain of the app. That is, if your Appsmith is available at `http://mydomain.com`, then only pages on `http://mydomain.com` will be able to embed apps.

To change/customize this, we've introduced `APPSMITH_ALLOWED_FRAME_ANCESTORS` environment variable. To allow another domain like `http://trusted-other.com` to also embed apps from your Appsmith, use:

```sh
APPSMITH_ALLOWED_FRAME_ANCESTORS="'self' http://trusted-other.com"
```

Or, to allow all subdomains on `mycompany.com`, use:

```sh
APPSMITH_ALLOWED_FRAME_ANCESTORS="'self' http://*.mycompany.com"
```

You can add multiple such entries by separating with spaces. For example:

```sh
APPSMITH_ALLOWED_FRAME_ANCESTORS="'self' http://trusted-other.com http://*.mycompany.com"
```

Under the covers, this feature uses a `Content-Security-Policy` header with `frame-ancestors` directive. Learn more at <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors>.
