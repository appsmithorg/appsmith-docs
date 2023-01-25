---
description: Troubleshooting guide that provides solutions to common MongoDB errors that may occur while using Appsmith. Follow these steps to resolve any issues you may be experiencing with your MongoDB setup.
---
# MongoDB Errors
This section helps you troubleshoot common MongoDB errors on the Appsmith platform.

## 503 - service unavailable
You may see 503 - Service Unavailable error on Appsmith.

### 503 - after upgrading Appsmith to v1.9.0
You may see this error after upgrading Appsmith to `v1.9.0`. 

#### Error message
<Message
messageContainerClassName="error" 
messageContent="Appsmith server is unavailable. Please try again later."></Message>

#### Cause
If you are using the Appsmith platform and encounter a 503 - Service Unavailable error, it may be due to upgrading to Appsmith v1.9.0 and using an older version of MongoDB (before v5.0). 

#### Solution
To fix this issue, upgrade your MongoDB to version 5.0. For more information, follow the steps detailed on MongoDB official documentation to [Upgrade a Replica Set to 5.0](https://www.mongodb.com/docs/manual/release-notes/5.0-upgrade-replica-set/).