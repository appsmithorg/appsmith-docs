---
description: >-
  We collect telemetry data during the installation process to identify errors.
  In addition we ask you to opt-in to send us regular usage telemetry during the
  installation process. Read on to understand
---

# Telemetry

{% hint style="warning" %}
The self-hosted version is not air-gapped and pings a cloud service to fetch release notes about our product updates. This helps you stay up to date with the latest changes to your Appsmith deployment. If you would like a fully air-gapped deployment, please write to support@appsmith.com
{% endhint %}

Data collected is strictly **anonymous** in nature and cannot be used to uniquely identify a user.

{% hint style="success" %}
Appsmith is a lightweight proxy and **does not capture** any data returned by your APIs, databases, or third-party tools.
{% endhint %}

## What data is collected?

### Docker Installation

During the installation process, we collect stats of which installations were successful, which were unsuccessful and need our help. This is used to analyze the

* **Installation Started**
* **Installation Success**
* **Installation Errors**
* **Installation Support**

**Sample event**

```javascript
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
Your email id is captured when you request for support and explicitly enter it in the installation script
{% endhint %}

### Appsmith Server

The Appsmith server sends a keep-alive ping every 6 hours to indicate that it is still running without any errors. This is the **only** event it sends.

**Sample event**

```javascript
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

## Opt-in Telemetry \#\#

The following data is opt-in only and you can say no during the installation process.

### Appsmith Client

The client captures anonymous behavioral data around navigation and clicks. No data from data sources is capture by appsmith.

**Sample data**

```javascript
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

If you accidentally opted In and want to disable telemetry, you can set`APPSMITH_DISABLE_TELEMETRY=true` in the **docker.env** file found in your Appsmith deployment folder.

You must restart docker and Nginx with the following command for the changes to take effect.

```text
sudo docker-compose rm -fsv appsmith-internal-server nginx && sudo docker-compose up -d
```

