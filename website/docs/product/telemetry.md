---
description: This page provides information on the data collected by Appsmith.
---

# Telemetry

Telemetry in Appsmith refers to the collection of data about how users interact with the platform. This data helps the Appsmith team identify usage patterns, troubleshoot issues, and make informed decisions about new features and improvements.

## Data collected by Appsmith

Appsmith is a lightweight proxy and **does not capture** any data returned by your APIs, databases, or third-party tools. All data captured from a self-hosted instance is completely anonymised.

### Keep-alive ping

The Appsmith server sends a keep-alive ping every 6 hours to indicate that it's still running without any errors & captures anonymous usage data around which plugins are being used. This data is collected irrespective of whether telemetry is turned on or off.

```javascript title="sample keep-alive ping"
{
    "event": "FETCH_RELEASE_NOTES",
    "properties": {
        "time": 1704784217.602,
        "distinct_id": "609ce8fb4092701c69df9846",
        "$identified_id": "609ce8fb4092701c69df9846",
        "$import": true,
        "$insert_id": "75ddda7c-ba47-41e0-9578-7d3afaf05284",
        "$lib_version": "3.3.1",
        "$mp_api_endpoint": "api.mixpanel.com",
        "$mp_api_timestamp_ms": 1704784233604,
        "$source": "segment",
        "$user_id": "609ce8fb4092701c69df9846",
        "edition": "CE",
        "id": "609ce8fb4092701c69df9846",
        "instanceId": "609ce8fb4092701c69df9846",
        "mp_lib": "Segment Actions: analytics-java",
        "mp_processing_time_ms": 1704784233665,
        "originService": "cloud-services",
        "segment_source_name": "cloud-services",
        "type": "fetch-release-notes",
        "version": "v1.9.15"
    }
}
```

### Server setup ping
Appsmith server sends a ping first time a new instance is created. This data is collected irrespective of telemetry is turned on or off.

```javascript title="sample server-setup ping"
{
    "event": "Installation Setup Complete",
    "properties": {
        "time": 1704784091.249,
        "distinct_id": "659cf0bd504813315c336bf7",
        "$browser": "",
        "$city": "Mysore",
        "$identified_id": "659cf0bd504813315c336bf7",
        "$import": true,
        "$insert_id": "d684e7ed-1211-4518-a19c-8f22925526e0",
        "$lib_version": "3.3.1",
        "$mp_api_endpoint": "api.mixpanel.com",
        "$mp_api_timestamp_ms": 1704784101374,
        "$region": "Karnataka",
        "$source": "segment",
        "$user_id": "659cf0bd504813315c336bf7",
        "disable-telemetry": false,
        "email": "",
        "emailDomainHash": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
        "goal": "just exploring",
        "id": "659cf0bd504813315c336bf7",
        "instanceId": "659cf0bd504813315c336bf7",
        "ipAddress": "117.211.16.3", // IP address is of the server used to host the instance and not the client IP
        "mp_country_code": "IN",
        "mp_lib": "Segment Actions: analytics-java",
        "mp_processing_time_ms": 1704784101771,
        "name": "",
        "originService": "appsmith-server",
        "proficiency": "",
        "role": "frontend engineer",
        "segment_source_name": "ce",
        "subscribe-marketing": false, // If user subscribes to marketing updates, we get the name and email address as well along with above information
        "version": "v1.9.56"
    }
}

```

### Usage pulse for billing

The Appsmith client triggers a usage pulse whenever a user performs an action on their Appsmith instance. The usage pulse primarily contains information such as the timestamp, a hashed `userId` to map the user, and the app mode in which the action was performed. The data is collected on the server-side and sent to the Appsmith cloud services in batches every hour irrespective of whether telemetry is turned on or off. These pulses are then processed to present aggregate information to customers on customer portal. This data is collected only for paying customers, regardless of whether telemetry is on or off.

```javascript title="sample usage-payload billing"
{
    "usageData": [{
        "user": "f3273dd18d95bc19d51d3e6356e4a679e6f13824497272a270e7bb540b0abb9d",
        "tenantId": "6fh76357fbe7e44f3a47a",
        "viewMode": false, // To determine if action was done in edit mode or view mode of application
        "isAnonymousUser": false, // To determine if pulse was triggered by logged-in user or an anonymous user
        "createdAt": 188474747
    }],
    "message": "hash-message",
    "hashedMessage": "c8ec6166d030765ff0f88ce40f4494bc6ef99f9d65dfbecd974c6359d1cac7ac",
    "instanceId": "63ef757fbe7e44f3a47a"
}

``` 

### Navigation and clicks

The client captures anonymous behavioral data around navigation and clicks. This data is only collected when telemetry is turned on. 

```javascript title="Sample event"
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

### Successful backend calls
The server shares anonymous information about successful query processes, new application creation, user logins, connections to additional plugins, etc. This data is only collected when telemetry is turned on. 

```javascript title="sample successful backend call"
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

## Disable telemetry

Telemetry sharing is an optional setting, and you can disable telemetry either from Admin Settings or by making changes to the environment variable.

### Admin Settings

Follow the steps below to turn off telemetry using Admin settings:

1. Go to **Admin Settings**, select **General** from left navigation bar, and scroll to **Share anonymous usage data**.
2. Click the **Save & Restart** button to restart the container for the changes to take effect.

### Environment variable

You may also choose to turn off telemetry setting using environment variable `APPSMITH_DISABLE_TELEMETRY`. For example, to turn off the setting for your docker installation, follow the steps below:

1. Go to the _directory_ where the `docker.env` file is located.
2. Open the file in an editor and search for `APPSMITH_DISABLE_TELEMETRY`
3. Change the value of `APPSMITH_DISABLE_TELEMETRY` from `false` to `true` and save it
4. Go to the location where the `docker-compose.yml` file is located **`(docker host directory)`**
5. Restart the container using the command

```bash
sudo docker-compose rm -fsv appsmith && sudo docker-compose up -d
```
Once the container restarts, Appsmith is up and running, the telemetry is turned off. You can verify that the telemetry is turned off using **Admin Settings**, select **General**, and verify the toggle is off for **Share anonymous usage data** setting.
