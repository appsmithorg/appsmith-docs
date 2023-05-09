---
sidebar_position: 17
---
# SMTP

This page describes how to use the SMTP datasource to create and send emails from your Appsmith app.

<VideoEmbed host="youtube" videoId="hAln7o1aUA4" title="" caption=""/>

## Connect to SMTP

<figure>
  <img src="/img/smtp_datasource_config.png" style= {{width:"100%", height:"auto"}} alt="Configuring an SMTP datasource"/>
  <figcaption align = "center"><i>Configuring an SMTP datasource</i></figcaption>
</figure>

To add an SMTP datasource:

1. Click the (**+**) sign in the **Explorer** tab next to **Datasources**.
1. On the next screen, select the **SMTP** button. This creates the datasource and takes you to the datasource's configuration page.
1. Enter the URL for your SMTP server into the **Host Address** field.
1. Enter the port for your SMTP server into the **Port** field.
1. Enter your account's username in the **Username** field. Depending on your SMTP provider, this might be your email address.
1. Enter your password into the **Password** field.

:::note
Some SMTP providers use a multi-factor authentication flow and may require you to generate a special password specifically to authenticate your Appsmith app. For example, Gmail SMTP requires you to [generate an app password](https://support.google.com/mail/answer/185833?hl=en) to use instead of your usual password.
:::

7. Once you've entered your credentials, click the **Test** button to check that they are working.
8. Click **Save** when you are finished, and your datasource is ready for queries.

## Create queries

<figure>
  <img src="/img/smtp_query_config.png" style= {{width:"100%", height:"auto"}} alt="Configuring an SMTP query"/>
  <figcaption align = "center"><i>Configuring an SMTP query</i></figcaption>
</figure>

<<<<<<< HEAD
You can write queries to send emails through your SMTP server by selecting the **+ New Query**  button on the SMTP datasource page, or by clicking (**+**) next to **Queries/JS** in the **Explorer** tab and selecting your SMTP datasource. You'll be brought to a new query screen where you can write a query.

=======

You can write queries to send emails through your SMTP server by selecting the **+ New Query**  button on the SMTP datasource page, or by clicking (**+**) next to **Queries/JS** in the **Explorer** tab and selecting your SMTP datasource. You'll be brought to a new query screen where you can write a query.

You can write [queries](https://docs.appsmith.com/core-concepts/data-access-and-binding/querying-a-database/query-settings) to send emails through your SMTP server by selecting the **+ New Query**  button on the SMTP datasource page, or by clicking (**+**) next to **Queries/JS** in the **Explorer** tab and selecting your SMTP datasource. You'll be brought to a new query screen where you can write a query.


>>>>>>> a86353b119f352f0a4eebdd9c6e9e74cc6635d25
## Send email

This action sends an email through your SMTP server.

When the query is successful, you'll recieve the following response:
```json
{
  "message": "Sent the email successfully"
}
```

#### Example

> Use a Form widget to write and send an email.

**Setup**:

Create an SMTP datasource and a query `SendMail` based on it.

**Configure the email form**:

1. Create a [Form widget](/reference/widgets/form) `EmailForm`, and update the title to `Send Mail`.
1. In the form's body area, create widgets to accept input for the email's configuration fields such as **To email(s)**, **From email(s)**, **Subject**, etc.
    1. Use [Rich Text Editor widget](/reference/widgets/rich-text-editor) for the **Body** field, and a [Filepicker widget](/reference/widgets/filepicker) for the **Attachment(s)** field.
    1. Be sure to name each widget so that you can reference it later in your query.
1. In the properties for the form's submit button, configure the **onClick** action to execute your `SendMail` query.

**Configure the query**:

1. In each configuration field, reference the appropriate widget from the Form that contains its intended value. For example, you can use the Form's `data` property, followed by the input widget's name and the property that holds its content:
  ```javascript
  // in the "From email" field
  {{ EmailForm.data.FromInput.text }}
  ```
  ```javascript
  // in the "Body" field
  {{ EmailForm.data.BodyEditor.text }}
  ```
  ```javascript
  // in the "Attachment(s)" field
  {{ EmailForm.data.AttachmentPicker.files }}
  ```

Once you fill in your form fields, your query is ready to send the email.

---

### Parameters

| Property Name      | Description                                                                               |   Type    |
| ------------------ | ----------------------------------------------------------------------------------------- | --------- |
| From email         | Sets the email address that appears as the message sender.                                | Mandatory |
| Set Reply To Email | Toggles the **Reply to email** field.                                                     | Optional  |
| Reply to email     | Sets an email address that recieves all replies to your email.                            | Optional  |
| To email(s)        | Sets the email addresses that recieves your email. For multiple recipients, separate the addresses with commas.   | Mandatory |
| CC email(s)          | Sets the email address that recieves a CC (carbon copy). For multiple CC recipients, separate the addresses with commas.       | Optional  |
| BCC email(s)         | Sets the email address that recieves a BCC (blind carbon copy). For multiple BCC recipients, separate the addresses with commas.      | Optional  |
| Subject            | Sets the email's subject line.                                                            | Optional  |
| Body               | Sets the main body of the email. Supports rich text and  HTML.                            | Optional  |
| Attachment(s)      | Attaches one or more files to the email. Expects an array of file objects.                | Optional  |

## Further reading

* [Rich Text Editor widget](/reference/widgets/rich-text-editor)
* [Filepicker widget](/reference/widgets/filepicker)
* [Upload or download files from S3](/learning-and-resources/how-to-guides/how-to-upload-to-s3)
