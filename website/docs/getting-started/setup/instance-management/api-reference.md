# API Reference

This page provides details on APIs available for monitoring a self-hosted Appsmith instance. These APIs enable you to monitor system health, performance metrics, and configuration statuses. You can integrate them with third-party monitoring tools like Prometheus, Datadog, or Grafana to automate health checks, analyze trends, and receive alerts for potential issues.

## Health Check API

The Health Check API allows you to monitor the availability and status of a self-hosted Appsmith instance. It helps detect downtime early and ensures the system is running as expected. You can also integrate this API with third-party monitoring tools to automate health checks.

#### Endpoint

```
GET https://your-appsmith-installation.com/api/v1/health
```

#### Request

- **Base URL**: https://your-appsmith-installation.com
- **Method**: GET
- **Authentication**: Not required

#### Response

**Success Response**

```js
  "responseMeta": {
    "status": 200,
    "success": true
  },
  "data": "All systems are up",
  "errorDisplay": ""
}
```

- **200 OK**: The system is operational.

**Error Responses**

- **500 Internal Server Error**: The server may be down or misconfigured.
- **503 Service Unavailable**: The system is overloaded or restarting.
- **401 Unauthorized**: Authentication is required.
- **504 Gateway Timeout**: The server did not receive a timely response from an upstream service.
 

#### Notes

- The Health Check API should respond in less than 1 second under normal conditions.
- Response times exceeding 2 seconds may indicate performance issues.


## Application Performance API

The Application Performance API provides insights into API response times, user session details, feature flag statuses, and system configuration. It helps monitor application health, track user authentication settings, and ensure optimal performance. This API can be used to analyze response metrics and identify potential performance bottlenecks.

#### Endpoint

```
GET https://your-appsmith-installation.com/api/v1/consolidated-api/view
```

#### Request

- **Base URL**: https://your-appsmith-installation.com
- **Method**: GET
- **Authentication**: Not required

#### Response

**Success Response**

```js
{
  "responseMeta": {
    "status": 200,
    "success": true
  },
  "data": {
    "userProfile": {
      "responseMeta": {
        "status": 200,
        "success": true
      },
      "data": {
        "email": "anonymousUser",
        "workspaceIds": [],
        "username": "anonymousUser",
        "name": "anonymousUser",
        "enableTelemetry": true,
        "roles": [],
        "groups": [],
        "emptyInstance": false,
        "accountNonExpired": true,
        "accountNonLocked": true,
        "credentialsNonExpired": true,
        "isAnonymous": true,
        "isEnabled": true,
        "isSuperUser": false,
        "isConfigurable": true,
        "adminSettingsVisible": false,
        "isIntercomConsentGiven": false
      },
      "errorDisplay": ""
    },
    "featureFlags": {
      "responseMeta": {
        "status": 200,
        "success": true
      },
      "data": {
        "license_git_unlimited_repo_enabled": true,
        "release_query_module_enabled": true,
        "license_sso_saml_enabled": true,
        "release_git_cleanup_feature_enabled": true
      },
      "errorDisplay": ""
    },
    "organizationConfig": {
      "responseMeta": {
        "status": 200,
        "success": true
      },
      "data": {
        "instanceId": "644b84db80127e0eff78a737",
        "instanceName": "Release EE",
        "license": {
          "plan": "ENTERPRISE",
          "active": true,
          "type": "TRIAL",
          "status": "ACTIVE"
        },
        "thirdPartyAuths": ["google", "github", "oidc", "saml"],
        "userSessionTimeoutInMinutes": 43200
      },
      "errorDisplay": ""
    }
  }
}
```

- A successful request returns **200 OK** with an expected latency of less than **300ms**.


**Error Responses**

- **500 Internal Server Error**: The server may be down or misconfigured.
- **503 Service Unavailable**: The system is overloaded or restarting.
- **401 Unauthorized**: Authentication is required.
- **504 Gateway Timeout**: The server did not receive a timely response from an upstream service.
 
**Notes:** You can integrate the API endpoint into a third-party monitoring tool to track latency, uptime, and response times.


