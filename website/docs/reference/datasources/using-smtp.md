---
sidebar_position: 16
---
# SMTP

:::note
The following document assumes that you understand the [basics of connecting to a datasource on Appsmith](/core-concepts/connecting-to-data-sources/connecting-to-databases.md#connecting-to-a-database). If not, please go over them before reading further.
:::

The SMTP plugin can connect to an SMTP server and send dynamic emails to a list of recipients.

<YoutubeEmbed videoId="hAln7o1aUA4" title="" caption=""/>

## Connection settings

The SMTP datasource requires the following information to establish a connection. All fields are mandatory.

![Click to expand](/img/smtp_create_datasource.png)

1. **Host address:** This is the host address of the SMTP server.
2. **Port:** The port for communication with the SMTP server. Typically this is 25 or 587.
3. **Username:** The username of the SMTP server.
4. **Password:** The password of the SMTP server. Please note that if you have a multi-factor authentication setup for your SMTP server, your normal password may not work. You may have to generate a separate password from your provider which won't require multi-factor authentication. For example, Gmail requires that you [generate an app password](https://support.google.com/mail/answer/185833?hl=en) to use as authentication instead of your regular password.

## Send email

This action sends an email with a dynamic subject and body to a list of recipients. You can also optionally attach files along with this email.

| Property Name      | Description                                                                                           | Type      |
| ------------------ | ----------------------------------------------------------------------------------------------------- | --------- |
| From email         | This is the email address to send from.                                                               | Mandatory |
| Set Reply To email | Toggle to set whether the reply to email ID needs to be set                                           | Optional  |
| Reply to email     | This is the email address that should receive the replies.                                            | Optional  |
| To emails          | This is the email address(es) of the recipients. Multiple email IDs must be comma separated.          | Mandatory |
| CC emails          | List of email adderess(es) of the recipients to CC. Multiple email IDs must be comma separated.       | Optional  |
| BCC emails         | List of email adderess(es) of the recipients to BCC. Multiple email IDs must be comma separated.      | Optional  |
| Subject            | The subject of the email                                                                              | Optional  |
| Body               | The body of the email                                                                                 | Optional  |
| Attachments        | List of file paths of the attachments to be attached to the email.                                    | Optional  |

### Response format

On successful sending, the response is a JSON object with the following structure:

```
{
  "success": true,
  "message": "Email sent successfully"
}
```

If Appsmith encounters an error while sending the email, an error is displayed on the screen. An example is shown below: ![Click to expand](/img/smtp_error_response.png)

## Using queries in applications

Once you have successfully run a Query, you can use it in your app to

* [Display Data](/core-concepts/data-access-and-binding/displaying-data-read/)
* [Capture Data](/core-concepts/data-access-and-binding/capturing-data-write/)
* [Upload files](/learning-and-resources/how-to-guides/how-to-upload-to-s3.md#uploading-a-file)
* [Download files](/learning-and-resources/how-to-guides/how-to-upload-to-s3.md#downloading-files)
