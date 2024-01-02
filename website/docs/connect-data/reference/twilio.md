---
sidebar_position: 18
description: Connect Appsmith to Twilio and create queries.
---
# Twilio

This page provides information for connecting Appsmith to Twilio and reading and writing data in your applications.

<VideoEmbed host="youtube" videoId="QHrEfSxL-aA" title="How To Send SMS Notifications With Twilio" caption="How To Send SMS Notifications With Twilio"/>

## Connection parameters

The following section is a reference guide that provides a complete description of all the parameters to connect to Twilio.

<figure>
   <img src="/img/twilio-datasource-config.png" style= {{width:"100%", height:"auto"}} alt="Configuring a Twilio datasource."/>
   <figcaption align = "center"><i>Configuring a Twilio datasource.</i></figcaption>
</figure>

#### Authentication Type

<dd>
 <i>Options:</i>
  <ul>
      <li>
         <b>Basic auth:</b> Connect to Twilio using your <b>Account SID</b> and an <b>Auth token</b> issued by Twilio.
      </li>
  </ul>
</dd>

#### Account SID

<dd>
A unique ID string that identifies your Twilio account. You can find this on your <a href="https://console.twilio.com">Twilio Console</a> under the <b>Account Info</b> section. 
</dd>

#### Auth token

<dd>
A token string used to authenticate your queries. You can find this on your <a href="https://console.twilio.com">Twilio Console</a> under the <b>Account Info</b> section. 
</dd>

## Query Twilio

The following section is a reference guide that provides a description of the available commands with their parameters to create Twilio queries.

<figure>
   <img src="/img/twilio-query-config.png" style= {{width:"100%", height:"auto"}} alt="Configuring a Twilio query."/>
   <figcaption align = "center"><i>Configuring a Twilio query.</i></figcaption>
</figure>

### Create message

You can use this command to create and send a message to a specific phone number. The following section lists all the available parameters:

#### Twilio account SID

<dd>
A unique ID string that identifies your Twilio account. You can find this on your <a href="https://console.twilio.com">Twilio Console</a> under the <b>Account Info</b> section. 
</dd>

#### To

<dd>
The phone number to which the message should be sent. Be sure to follow <a href="https://www.twilio.com/docs/glossary/what-e164">E.164 format</a>: <code>+15551234567</code>.
</dd>

#### From

<dd>
The Twilio phone number from which the message should be sent. Be sure to follow <a href="https://www.twilio.com/docs/glossary/what-e164">E.164 format</a>: <code>+15551234567</code>. Once you've created your Twilio phone number, you can find it in the Twilio console under the <b>Account Info</b> section.
</dd>

:::info
To send a message to a WhatsApp phone number, see [Using Twilio Phone Numbers With WhatsApp](https://www.twilio.com/docs/whatsapp/api#using-twilio-phone-numbers-with-whatsapp).
:::

#### Body

<dd>
The text content of the message.
</dd>

### Schedule message

You can use this command to create and schedule a message for sending at a future date and time. The following section lists all the available parameters:

#### Twilio account SID

<dd>
A unique ID string that identifies your Twilio account. You can find this on your <a href="https://console.twilio.com">Twilio Console</a> under the <b>Account Info</b> section. 
</dd>

#### Messaging service SID

<dd>
A unique ID string that identifies a messaging service that you create on your Twilio account. You can find or create the service in the Twilio Console under <b>Explore Products</b> &gt; <b>Messaging</b> &gt; <b>Services</b>.
</dd>

#### To

<dd>
The phone number to which the message should be sent. Be sure to follow <a href="https://www.twilio.com/docs/glossary/what-e164">E.164 format</a>: <code>+15551234567</code>.
</dd>

#### Body

<dd>
The text content of the message.
</dd>

#### Send at

<dd>
A string that defines the date and time to send the message. The given date must be between 15 minutes and 7 days from the time of the request and must be in UTC format <code>YYYY-MM-DDTHH:MM:SSZ</code>.
</dd>

### List message

You can use this command to fetch a list of past messages sent from a specified Twilio phone number. The following section lists all the available parameters:

:::info
To fetch scheduled messages that haven't been sent, leave the <b>To</b>, <b>From</b>, and <b>Date Sent</b> fields empty.
:::

#### To

<dd>
The phone number to which the message was sent. Be sure to follow <a href="https://www.twilio.com/docs/glossary/what-e164">E.164 format</a>: <code>+15551234567</code>.
</dd>

#### From

<dd>
The Twilio phone number from which the message was sent. Be sure to follow <a href="https://www.twilio.com/docs/glossary/what-e164">E.164 format</a>: <code>+15551234567</code>. Once you've created your Twilio phone number, you can find it in the Twilio console under the <b>Account Info</b> section.
</dd>

#### Date Sent

<dd>
A string that defines which date to fetch records from. Must be in the format <code>YYYY-MM-DD</code>.
</dd>

#### Page size

<dd>
The maximum number of records to fetch in your query.
</dd>

#### Twilio account SID

<dd>
A unique ID string that identifies your Twilio account. You can find this on your <a href="https://console.twilio.com">Twilio Console</a> under the <b>Account Info</b> section. 
</dd>

### Fetch message

You can use this command to fetch the body and send status of a specific message. The following section lists all the available parameters:

#### Twilio account SID

<dd>
A unique ID string that identifies your Twilio account. You can find this on your <a href="https://console.twilio.com">Twilio Console</a> under the <b>Account Info</b> section. 
</dd>

#### Message SID

<dd>
A unique ID string that identifies the message. You can get the <b>Message SID</b> from a <a href="#list-message">List message</a> query on the <code>sid</code> property, or when you create a new message with a <a href="#create-message">Create message</a> query.
</dd>

### Delete message

You can use this command to delete a specific message. The following section lists all the available parameters:

#### Twilio account SID

<dd>
A unique ID string that identifies your Twilio account. You can find this on your <a href="https://console.twilio.com">Twilio Console</a> under the <b>Account Info</b> section. 
</dd>

#### Message SID

<dd>
A unique ID string that identifies the message. You can get the <b>Message SID</b> from a <a href="#list-message">List message</a> query on the <code>sid</code> property, or when you create a new message with a <a href="#create-message">Create message</a> query.
</dd>

### Cancel message

You can use this command to cancel sending a specific scheduled message. The following section lists all the available parameters:

#### Twilio account SID

<dd>
A unique ID string that identifies your Twilio account. You can find this on your <a href="https://console.twilio.com">Twilio Console</a> under the <b>Account Info</b> section. 
</dd>

#### Message SID

<dd>
A unique ID string that identifies the message. You can get the <b>Message SID</b> from a <a href="#list-message">List message</a> query on the <code>sid</code> property, or when you create a new message with a <a href="#create-message">Create message</a> query.
</dd>

## Troubleshooting

If you are experiencing difficulties, you can refer to the [Datasource troubleshooting guide](/help-and-support/troubleshooting-guide/action-errors/datasource-errors) or contact the support team using the chat widget at the bottom right of this page.