---
description: >-
  Whitelist the IP of the appsmith instance in your AWS database to access it
  from within your applications
---

# Whitelist Appsmith

Whitelist the Appsmith IP address with the following steps:

**1. Log in to the AWS** [**console**](https://aws.amazon.com/console/)

**2. Navigate to the RDS Console**

**3. Choose the RDS database from the list of instances**

![Click to expand](../../.gitbook/assets/chose_rds.png)

**4. Select the security group linked to your RDS\(Make sure the RDS instance is publically accessible\)**

![Click to expand](../../.gitbook/assets/chose_sg.png)

**5. Click on “Inbound” at the bottom and then click “Edit”**

![Click to expand](../../.gitbook/assets/chose_inbound.png)

**6. Select the port to whitelist. If you are using the default MySQL port then selecting the “MYSQL/Aurora” option works**

![Click to expand](../../.gitbook/assets/edit_inbound.png)

**7. Set** _**Source**_ **to** _**Custom**_ **and enter the Appsmith IP address 18.223.74.85/32 and 3.131.104.27/32**

**8. Click** _**Save**_

Your database should now be accessible from your EC2 instance. Read more about [security group rules](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithSecurityGroups.html).

