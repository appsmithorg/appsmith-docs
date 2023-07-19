---
sidebar_position: 4
---
# Disable Intercom

To disable Intercom on your self-hosted instance, set the key `APPSMITH_INTERCOM_APP_ID` to an empty string and `APPSMITH_DISABLE_INTERCOM` to 'true' in your `docker.env` file, and restart your instance.

Example:

```
APPSMITH_INTERCOM_APP_ID=''
APPSMITH_DISABLE_INTERCOM=true
```
