---
description: >-
  This page provides information on how users can reach Appsmith support.
---

# Support at Appsmith

When users need help with Appsmith, prompt access to support is crucial. This page provides an overview of the available channels through which you can reach Appsmith support and the information you should include to ensure timely assistance.

## Support Channels

### Appsmith Support Portal

The [Appsmith Support Portal](https://support.appsmith.com) is the primary support destination for managing support tickets and accessing your support history. It is the recommended channel for raising and tracking issues.

Through the portal, you can:

- Submit new support requests
- View and respond to open tickets
- Track the status of your previous support requests

:::note
If you need to reset your password for the support portal, use the following link: [Reset Support Portal Password](http://support.appsmith.com/access/help)
:::

### Discord

The Discord community serves as a valuable resource for users seeking help and community engagement. While it may not always be the primary channel for paid support, the support team is available to assist users in Discord. Here's how you can contact support through the Discord server:

1. Join Appsmith on [Discord Server](https://discord.com/invite/rBTTVJp).
2. Navigate to the [Support channel](https://discord.com/channels/725602949748752515/1006426744129069096) to raise queries.

### Intercom

If you need immediate help while using Appsmith, you can access support directly through the Intercom chat feature:

- Click the **Help** button within Appsmith.
- Select **Chat with Us** to start a conversation with the support team.

### Priority support

Priority Support ensures expedited assistance for paid plan customers. Here's how you can access priority support:

- **Email**: You can reach the support team directly via email at [support@appsmith.com](mailto:support@appsmith.com).

- **Account Manager**: Enterprise plan customers have the option to contact their dedicated Account Manager for personalized assistance.

## Required Information for Support

To help our team resolve your issue efficiently, please include the following details in your ticket:

1. **Appsmith version**:  
    * Open `https://your-appsmith-installation.com/info`
    * Copy the version number from that page
2. **Steps to Reproduce and Error Description**:
    * **Preferred:** Record a short video showing the issue in action. You can use [Loom](https://www.loom.com/) or any other screen recording tool, and share the link in your support request
    * **Alternative:** Provide clear screenshots and describe each step leading to the error
3. **Logs (Self-hosted instances only)** - Logs help our team diagnose backend issues:
    * If you're running a **self-hosted** instance of Appsmith, access your server or container host
    * Follow the steps outlined in the [How to Get Container Logs](https://docs.appsmith.com/learning-and-resources/how-to-guides/how-to-get-container-logs) guide
    * Attach the relevant logs to your support request
4. **Optional but Useful API Responses** - These endpoints provide insight into the health and configuration of your Appsmith instance. Including their responses can help speed up troubleshooting:
    * **Health Check:** `https://your-appsmith-installation.com/api/v1/health`
    * **Settings Overview:** `https://your-appsmith-installation.com/api/v1/consolidated-api/view`

## Example Ticket Template

This is a sample format you can follow when opening a support request:

```
**Issue Summary:**
Unable to deploy applications – receiving a 502 error on publish.

**Appsmith Version:** v1.78

**Steps to Reproduce:**
1. Open an application
2. Click 'Deploy'
3. Observe the 502 error

**Loom Video:**
https://www.loom.com/share/example

**APIs Output (if applicable):**
<insert API responses or relevant metrics>

**Logs:**
Attached logs from Docker as per guide
```

Providing detailed, structured information ensures a faster and more accurate resolution. Thank you for helping us help you!
