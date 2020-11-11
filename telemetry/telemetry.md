# Telemetry

Appsmith collects anonymous telemetry data that helps the appsmith team better understand how the product is being used.

Data collected is strictly **anonymous** in nature and cannot be used to uniquely identify a user. Access to the collected data is limited to the appsmith team and not shared with any third parties.

{% hint style="success" %}
Appsmith is a lightweight proxy and **will** **never capture** any data returned by your APIs, databases, or third-party tools. 
{% endhint %}

If you are uncomfortable with sending usage stats data, you can disable telemetry [here](telemetry.md#disable-telemetry)

## What data is collected?

### Docker Installation

During installation, we collect some basic stats around which installations were successful and which need our help.

* **Installation Started**
* **Installation Success**
* **Installation Errors**
* **Installation Support**

**Sample event**

```text
{
  "anonymousId": "anonymoustId",
  "context": {
    "library": {
      "name": "unknown",
      "version": "unknown"
    }
  },
  "event": "Installation Started",
  "integrations": {},
  "messageId": "api-1joj5LZSzuVCI9KshnaX059JYKo",
  "properties": {
    "os": "ubuntu"
  },
  "receivedAt": "2020-11-04T08:05:52.726Z",
  "timestamp": "2020-11-04T08:05:52.726Z",
  "type": "track",
  "userId": "111.65.255.130"
}
```

{% hint style="warning" %}
The email is only captured when you request for support and explicitly enter it in the installation script
{% endhint %}

### Appsmith Server

The appsmith server sends a keep-alive ping every 6 hours to indicate that it is still running without any errors. This is the **only** event it sends.

**Sample event**

```text
{
  "context": {
    "ip": "203.192.213.46",
    "library": {
      "name": "unknown",
      "version": "unknown"
    }
  },
  "event": "Instance Active",
  "integrations": {},
  "messageId": "api-1jokIBOkNv8nEmu2fGeNb01G1RC",
  "properties": {
    "instanceId": "<uuid>"
  },
  "receivedAt": "2020-11-04T08:15:49.537Z",
  "timestamp": "2020-11-04T08:15:49.537Z",
  "type": "track",
  "userId": "203.192.213.46"
}
```

No other data is captured by the server 

### Appsmith Client

The client captures anonymous behavioral data around navigation and clicks. No data from data sources is capture by appsmith.

**Sample data**

```text
{
  "anonymousId": "0b62ab60-02ad-4f69-a181-d9c5eb2f97fa",
  "context": {
    "ip": "49.207.192.209",
    "library": {
      "name": "analytics.js",
      "version": "4.0.4"
    },
    "locale": "en-US",
    "page": {
      "path": "/applications",
      "referrer": "https://dev.appsmith.com/applications",
      "search": "",
      "title": "Editor | Appsmith",
      "url": "https://dev.appsmith.com/applications"
    },
    "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36"
  },
  "event": "APPLICATIONS_PAGE_LOAD",
  "integrations": {},
  "messageId": "ajs-9176c8f5ebc607524746206ea6aa7502",
  "originalTimestamp": "2020-11-04T10:52:14.616Z",
  "properties": {},
  "receivedAt": "2020-11-04T10:52:14.750Z",
  "sentAt": "2020-11-04T10:52:14.618Z",
  "timestamp": "2020-11-04T10:52:14.748Z",
  "type": "track",
  "userId": "a3d8b23b9b0cac986af79f4826d009463f8dfc372f188934710115491b7665a1"
}
```

## Disable Telemetry

You can disable telemetry by setting `APPSMITH_DISABLE_TELEMETRY=true` in the **docker.env** file. This file can be found in your appsmith deployment folder. 

You must restart docker and nginx for the changes to take effect

```text
sudo docker-compose rm -fsv appsmith-internal-server nginx && sudo docker-compose up -d
```

## Disable Telemetry for existing installations

Existing installations need to make an extra change to their Nginx configuration files. 

Please confirm that the line (as shown in the example below) is set in the file `data/nginx/app.conf.template`. This should be set in both the HTTP & HTTPS sections of the Nginx configuration.

Sample Configuration:
```
location / {
        try_files \$uri /index.html =404;

        sub_filter __APPSMITH_SENTRY_DSN__ '\${APPSMITH_SENTRY_DSN}';
        sub_filter __APPSMITH_SMART_LOOK_ID__ '\${APPSMITH_SMART_LOOK_ID}';
        sub_filter __APPSMITH_OAUTH2_GOOGLE_CLIENT_ID__ '\${APPSMITH_OAUTH2_GOOGLE_CLIENT_ID}';
        sub_filter __APPSMITH_OAUTH2_GITHUB_CLIENT_ID__ '\${APPSMITH_OAUTH2_GITHUB_CLIENT_ID}';
        sub_filter __APPSMITH_MARKETPLACE_ENABLED__ '\${APPSMITH_MARKETPLACE_ENABLED}';
        sub_filter __APPSMITH_SEGMENT_KEY__ '\${APPSMITH_SEGMENT_KEY}';
        sub_filter __APPSMITH_OPTIMIZELY_KEY__ '\${APPSMITH_OPTIMIZELY_KEY}';
        sub_filter __APPSMITH_ALGOLIA_API_ID__ '\${APPSMITH_ALGOLIA_API_ID}';
        sub_filter __APPSMITH_ALGOLIA_SEARCH_INDEX_NAME__ '\${APPSMITH_ALGOLIA_SEARCH_INDEX_NAME}';
        sub_filter __APPSMITH_ALGOLIA_API_KEY__ '\${APPSMITH_ALGOLIA_API_KEY}';
        sub_filter __APPSMITH_CLIENT_LOG_LEVEL__ '\${APPSMITH_CLIENT_LOG_LEVEL}';
        sub_filter __APPSMITH_GOOGLE_MAPS_API_KEY__ '\${APPSMITH_GOOGLE_MAPS_API_KEY}';
        sub_filter __APPSMITH_TNC_PP__ '\${APPSMITH_TNC_PP}';
        sub_filter __APPSMITH_VERSION_ID__ '\${APPSMITH_VERSION_ID}';
        sub_filter __APPSMITH_VERSION_RELEASE_DATE__ '\${APPSMITH_VERSION_RELEASE_DATE}';
        sub_filter __APPSMITH_INTERCOM_APP_ID__ '\${APPSMITH_INTERCOM_APP_ID}';
        sub_filter __APPSMITH_MAIL_ENABLED__ '\${APPSMITH_MAIL_ENABLED}';

        ### Set this line to disable telemetry
        sub_filter __APPSMITH_DISABLE_TELEMETRY__ '${APPSMITH_DISABLE_TELEMETRY}';
    }
```

