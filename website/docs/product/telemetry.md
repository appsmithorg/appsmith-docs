---
description: >-
  We ask you to opt-in to send us regular usage telemetry during the
  installation process. Even if you don't, we understand and appreciate your
  security requirements. Read on to understand more.
---

# Telemetry

:::note
Data collected is strictly **anonymous** in nature and **cannot** be used to **uniquely** **identify** a **user**.
:::

## What data is collected?

### Appsmith Server

The Appsmith server sends a keep-alive ping every 6 hours to indicate that it is still running without any errors.

:::info
Appsmith is a lightweight proxy and **does not capture** any data returned by your APIs, databases, or third-party tools.
:::

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

## Opt-in Telemetry

The following data is opt-in only. You can say no during the installation process.

### Appsmith Client

The client captures anonymous behavioral data around navigation and clicks. No data from data sources is captured by Appsmith.

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

### Appsmith Server

The server captures anonymous usage data around which plugins are being used. No data from data sources is captured by Appsmith.

```javascript
{
  "context": {
    "library": {
      "name": "analytics-java",
      "version": "2.1.1"
    }
  },
  "event": "execute_ACTION_TRIGGERED",
  "integrations": {},
  "messageId": "0f6b07ee-0717-413-808c-c25b09c0468",
  "originalTimestamp": "2021-08-24T07:23:35.610Z",
  "properties": {
    "appId": "612465f87b2230debedfc6",
    "appMode": "edit",
    "appName": "APP1",
    "datasource": {
      "name": "Test App"
    },
    "instanceId": "612460418944011a10fa5b",
    "isExampleApp": false,
    "isSuccessfulExecution": true,
    "name": "Test",
    "orgId": "612464f7f230debedfc4",
    "originService": "appsmith-server",
    "pageId": "612465802230debedfc8",
    "pageName": "Page1",
    "pluginName": "PostgreSQL",
    "statusCode": "",
    "timeElapsed": 8,
    "type": "DB",
    "username": "70280e5d07e61e5e915e5d26ac8704bbd68d3f75ebad67ba439f4c354d7"
  },
  "receivedAt": "2021-08-24T07:23:39.996Z",
  "sentAt": "2021-08-24T07:23:39.885Z",
  "timestamp": "2021-08-24T07:23:35.721Z",
  "type": "track",
  "userId": "70280e5dd9e61e5e91526ac8704bbd68d3f75ebad67ba439f4c354d7",
}
```

## Disable Telemetry

If you have accidentally opted for Telemetry, you can disable it. You can either disable the telemetry from [**Admin Settings**](telemetry.md#admin-settings) or by making changes to the [**`docker.env`**](telemetry.md#docker.env-file) file.

### Admin Settings

* Navigate to **Profile** >> Click **Admin Settings** >> Click on **General** >> Scroll to **Share anonymous usage** **data.**

<YoutubeEmbed videoId="di3CkNX7oUQ" title="How to disable telemetry from Admin Settings?" caption="How to disable telemetry from Admin Settings?"/>

* Toggle to turn off telemetry

![Navigate to Admin Settings >> General to turn off Telemetry](</img/Telemetry__Admin_Settings__Turn_off_telemetry.png>)

* Click Save & Restart to restart the container for the changes to take effect.

### Docker.env file

* Navigate to the **directory** where the `docker.env` file is located.
* Open the file in an editor and search for `APPSMITH_DISABLE_TELEMETRY`
* Change the value of `APPSMITH_DISABLE_TELEMETRY` from `false` to `true`
* After changes, the property in the `docker.env` file should read as below:

```
APPSMITH_DISABLE_TELEMETRY=true
```

* Save Changes

<YoutubeEmbed videoId="a8_S2fhskW4" title="How to disable telemetry?" caption="How to disable telemetry?"/>

* Open the terminal and navigate to the location where the `docker-compose.yml` file is located **`(docker host directory)`**.
* Copy and paste the below command to restart the container:

```bash
sudo docker-compose rm -fsv appsmith && sudo docker-compose up -d
```

* Once the container restarts, Appsmith is up and running.

You can verify that the telemetry is turned off by navigating to [**Admin Settings**](telemetry.md#admin-settings) and checking the toggle for **Share anonymous usage** **data.**
