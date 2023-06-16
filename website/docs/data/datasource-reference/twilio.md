---
sidebar_position: 18
---
# Twilio

[Twilio](https://www.twilio.com/) is a customer engagement platform businesses use to build personalized customer experiences. Twilio provides APIs for voice, text, chat, video, and email integrations. By using these APIs, businesses build integrations that can provide updates to their customers in real-time.

Appsmith integration with Twilio provides an easy way to manage your customer-focused messaging. With these integrations, you can design a custom UI on Appsmith to support easy integrations for users.

<VideoEmbed host="youtube" videoId="QHrEfSxL-aA" title="How To Send SMS Notifications With Twilio" caption="How To Send SMS Notifications With Twilio"/>

## Create Twilio datasource

To add a **Twilio** datasource, navigate to **Explorer**>> Click plus sign(+) next to **Datasources** >> Select **Twilio** under APIs.

## Connection settings

Configure the Twilio datasource as illustrated below:

### Authentication type

As part of the authentication type, you can choose from the available options:

![Create a Twilio Datasource](</img/Datasources__Twilio__Create_Datasource.png>)

* **Basic Auth** - Select **Basic Auth** for using Basic Authentication to create a Twilio datasource.

### Get Twilio account info

You’ll have to log into your **Twilio** **Account** to get account information to be added to the datasource configuration:

![Get your Twilio Account Information](</img/Datasources__Twilio__Get_Account_Info.png>)

* **Account SID** - Navigate to your **Twilio** **account** >> Select **Develop** tab >> Scroll down to **Account Info** >> Copy **Account SID**.
* **Auth Token** - Navigate to your **Twilio** **account** >> Select **Develop** tab >> Scroll down to **Account Info** >> Copy **Auth Token**.

### Get my Twilio phone number

You can get your Twilio Phone Number (`My Twilio phone number`) from the [account info](twilio.md#get-twilio-account-info) section to add it to the **From** field in [commands](twilio.md#commands).

Navigate to the [account info](twilio.md#get-twilio-account-info) section and click the copy icon to copy your Twilio Phone Number.

![Get your Twilio Phone Number](</img/Datasources__Twilio__My_Twilio_Phone_Number.png>)

### Save configuration

Click the **Save** button to save the configuration and complete the setup of the Twilio datasource. On successful configuration, you’ll be navigated to the datasources screen.

:::info
You’ll have to ensure that your **Twilio account** has a [Messaging Service setup](https://support.twilio.com/hc/en-us/articles/223181308-Getting-started-with-Messaging-Services).
:::

## Trial Twilio Account

If you are using a Twilio trial account, you can only add the **Verified Caller IDs** in the destination phone number (**To)** field.

:::info
Read more on [how to work with your Free Twilio Account](https://www.twilio.com/docs/usage/tutorials/how-to-use-your-free-trial-account).
:::

### Add verified caller ID

You can add a verified caller to your **Twilio account**. Navigate to **Twilio Account >>** Click **Develop** tab **>>** Click **#Phone Numbers** section >> Click **Verified Caller IDs** >> Click **Add a new Caller ID** button to add a new `Verified Caller ID`.

![Add a Verified Caller ID](</img/Datasources__Twilio__Add_Verified_Caller_ID.png>)

## Create queries

You can add queries to the **Twilio datasource** by selecting the **New API +** button next to the datasource. You can also navigate to **Explorer** >> Click plus (**+**) sign next to **Queries/JS** >> Select the **datasource** name (**TwilioAppsmithIntegration**).

:::info
You’ll have to add your [Twilio Account SID](twilio.md#get-twilio-account-info) to every command, so keep it handy.
:::

### Query

You can use the Query tab to define the type of commands you want to execute.

### **Commands**

With the help of Commands, you can choose the type of action you want to perform with Twilio integration. Following is the list of available commands:

| **Command**                                    | **Description**                                                                                                                                                                 |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Create Message](twilio.md#create-message)     | Send a new message with [Create Message](https://www.twilio.com/docs/sms/api/message-resource#create-a-message-resource) command.                                               |
| [Schedule Message](twilio.md#schedule-message) | Schedule a message delivery with the [Schedule Message](https://www.twilio.com/docs/sms/api/message-resource#schedule-a-message-resource) command at a specified date and time. |
| [List Message](twilio.md#list-message)         | Read messages sent by the given number with the [List Message](https://www.twilio.com/docs/sms/api/message-resource#read-multiple-message-resources) command.                   |
| [Fetch Message](twilio.md#fetch-message)       | Read a message with the [Fetch Message](https://www.twilio.com/docs/sms/api/message-resource#fetch-a-message-resource) command.                                                 |
| [Delete Message](twilio.md#delete-message)     | Delete the given message using the [Delete Message](https://www.twilio.com/docs/sms/api/message-resource#delete-a-message-resource) command.                                    |
| [Update Message](twilio.md#update-message)     | Update or cancel the scheduled message using the [Update Message](https://www.twilio.com/docs/sms/api/message-resource#update-a-message-resource) command.                      |

## Create message

You can use the create message command when you want to send a message.

To create a message, you can set the below parameter values:

* **Twilio Account SID** - Add your [Twilio Account SID](twilio.md#get-twilio-account-info) to this field.
* **To** - Add the phone number to which you want to send the message.

:::info
The destination phone number (**To**) and your Twilio Phone number (**From**) should follow the [E.164 format](https://en.wikipedia.org/wiki/E.164).
:::

![How to Create Message using Twilio?](</img/Datasources__Twilio__Queries__Command__Create_Message.png>)

* **From** - Add your Twilio phone number to this field.

:::info
You can get your **Twilio phone number** from the [account info](twilio.md#get-twilio-account-info) section. Copy [My Twilio phone number](twilio.md#get-my-twilio-phone-number) to add to the **Twilio Phone Number** field.
:::

* **Body** - Add the message text you want to send to this field.

> You can also read the [widget](/reference/widgets) values selected by the users for the above fields in the **Create Message** Command. For example, if you want to bind a [text widget](/reference/widgets/text.md) value that captures the message content, you can read the value as `<WIDGET_NAME.TEXT>` and add it to **Create Message** >> **Body**.

:::note
You can change the [Query settings](/data/datasource-reference/query-settings.md) by clicking the **settings** tab.
:::

## Schedule message

You can use the Schedule Message command to configure a message delivery in the future.

To schedule a message, you can set the below parameter values:

* **Twilio Account SID** - Add your [Twilio Account SID](twilio.md#get-twilio-account-info) to this field.
* **Messaging Service SID** - Add your Twilio registered message service SID to this field.

:::info
You can get the Message Service SID from the Twilio Develop Console.
:::

> To get the **Message Service SID**, navigate to your **Twilio account** >> Select the **Develop** Tab >> Expand the **Messaging** head >> Click on **Services**. You can copy the existing service SID, or If you don’t have a messaging service configured, you can click the **Create Messaging Service** button to **create one**.

![Get the Message Service ID from your Twilio Account](</img/Datasources__Twilio__Messaging_Service_ID.png>)

* **To** - Add the phone number to which you want to send the message.

:::info
The destination phone number (**To**) should follow the [E.164 format](https://en.wikipedia.org/wiki/E.164).
:::

![How to Schedule Message using Twilio?](</img/Datasources__Twillio__Queries__Command__Schedule_Message.png>)

* **Body** - Add the message text that you want to send to this field
* **Send At** - Add the date and timestamp you want to schedule the message delivery. The data and timestamp should follow the format [ISO 8601 format](https://en.wikipedia.org/wiki/ISO\_8601).

:::note
Please supply the date and timestamp for the `Send At` in the [UTC](https://en.wikipedia.org/wiki/Coordinated\_Universal\_Time).
:::

> You can also read the [widget](/reference/widgets) values selected by the users for the above fields in the **Create Message** Command. For example, if you want to bind a [text widget](/reference/widgets/text.md) value that captures the message content, you can read the value as `<WIDGET_NAME.TEXT>` and add it to **Create Message** >> **Body**.

:::note
The schedule data and timestamp should follow the [**Time range limitations for scheduled messages**](https://support.twilio.com/hc/en-us/articles/4412165297947-Message-Scheduling-FAQs-and-Beta-Limitations) as defined on Twilio Site.
:::

By default, the Twilio Schedule Message uses the [UTC](https://en.wikipedia.org/wiki/Coordinated\_Universal\_Time). You can change the timezone from your Twilio account’s [User Settings](https://www.twilio.com/console/user/settings).

:::info
Call an [update message](twilio.md#update-message) command with the status selected as “**Canceled**” to **Cancel** a **scheduled** message **delivery**.
:::

## List message

You can use the List Message command to view all the messages sent by using a specified [Twilio Phone Number](twilio.md#get-my-twilio-phone-number).

For listing messages, you can set parameter values as below:

![How to read all messages sent by a Twilio phone number?](</img/Datasources__Twilio__Queries__Command__List_Message.png>)

* **To** - Add the phone number to which you want to send the message.

:::info
The destination phone number (**To**) and your Twilio Phone number (**From**) should follow the [E.164](https://en.wikipedia.org/wiki/E.164) format.
:::

* **From** - Add your Twilio phone number to this field.

:::info
You can get your [Twilio phone number](twilio.md#get-my-twilio-phone-number) from the [account info](twilio.md#get-twilio-account-info) section. Copy [My Twilio phone number](twilio.md#get-my-twilio-phone-number) to add to the **Twilio Phone Number** field.
:::

* **DateSent** - Supply the date for which you want to view sent messages. The date should follow a `YYYY-MM-DD` format.
* **PageSize** - Give the maximum number of records you wish to pull per page.
* **Twilio Account SID** - Add your [Twilio Account SID](twilio.md#get-twilio-account-info) to this field.

:::info
You can **read** the response of the **List message** command by using `<QUERY_NAME.data.messages>`
:::

## Fetch message

You can use the Fetch Message command to read a sent message. **** To read a sent message, you can set the below parameter values:

![How to read a sent message?](</img/Datasources__Twilio__Queries__Command__Fetch_Message.png>)

* **Twilio Account SID** - Add your [Twilio Account SID](twilio.md#get-twilio-account-info) to this field.
* **Message SID** - Add the Message SID for the message you want to read.

:::info
You can get the **Message SID** from [List Message](twilio.md#list-message) Command or when you **create** a message using [Create Message](twilio.md#create-message) command.
:::

You can read the **Message SID** in the [create message](twilio.md#create-message) response (sid) as shown below:

```
{
  "sid": "SM2a93468381134d92aa07342322bf3a82",
  "date_created": "Fri, 29 Jul 2022 07:12:42 +0000",
  "date_updated": "Fri, 29 Jul 2022 07:12:42 +0000",
  .
  .
  .
  "body": "Sent from your Twilio trial account - A Create message triggered",
  "status": "queued",
 .
 .
  }
}

```

## **Delete message**

You can use the Delete Message command to delete the delivered message. To delete a delivered message, you can set up the parameter values below:

![How to delete a delivered message?](</img/Datasources__Twilio__Queries__Command__Delete_Message.png>)

* **Twilio Account SID** - Add your [Twilio Account SID](twilio.md#get-twilio-account-info) to this field.
* **Message SID** - Add the **Message SID** for the message you want to read.

:::info
You can get the **Message SID** from [List Message](twilio.md#list-message) Command or when you **create** a message using [Create Message](twilio.md#create-message) command.
:::

## Update message

You can use the Update Message command to **update/cancel** a **scheduled** message. For updating or canceling a scheduled message, supply the parameter values as below:

![How to update/cancel a scheduled message?](</img/Datasources__Twilio__Queries__Command__Update_Message.png>)

* **Twilio Account SID** - Add your [Twilio Account SID](twilio.md#get-twilio-account-info) to this field.
* **Message SID** - Add the **Message SID** for the message you want to read.

:::info
You can get the **Message SID** from [List Message](twilio.md#list-message) Command or when you **create** a message using [Create Message](twilio.md#create-message) command.
:::

* **Body** - Add the updated message text to this field
* **Status - Only** select **canceled** status if you wish to **cancel** the delivery of a **scheduled** message

:::note
You can change the [Query settings](/data/datasource-reference/query-settings.md) for all the queries by clicking the **settings** tab.
:::

## WhatsApp and text message integration

You can use the commands to send a text or a WhatsApp message. For a WhatsApp integration, add the keyword `whatsapp:` in the **To** and **From** fields in the commands. You can read more about [using Twilio phone numbers with WhatsApp](https://www.twilio.com/docs/whatsapp/api#using-twilio-phone-numbers-with-whatsapp).

With Twilio Appsmith integration, you can build an easy and intuitive interface to enhance your customer engagement.
