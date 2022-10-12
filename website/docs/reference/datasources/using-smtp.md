---
sidebar_position: 15
---
# SMTP

:::caution
The following document assumes that you understand the [basics of connecting to a datasource on Appsmith](../../core-concepts/connecting-to-data-sources/connecting-to-databases.md#connecting-to-a-database). If not, please go over them before reading further.
:::

The SMTP plugin can connect to an SMTP server to send the dynamic email(s) to a list of recipients.

<figure>
  <object data="https://www.youtube.com/embed/hAln7o1aUA4?autoplay=0" width='750px' height='400px'></object> 
  <figcaption align="center"><i></i></figcaption>
</figure>

## Connection Settings

The SMTP datasource requires the following information to establish a connection. All fields are mandatory.

![Click to expand](/img/smtp_create_datasource.png)

1. **Host address:** This is the host address of the SMTP server.
2. **Port:** The port over which you will communicate with the SMTP server. Typically this is 25 or 587.
3. **Username:** The username of the SMTP server.
4. **Password:** The password of the SMTP server. Please note that if you have a multi-factor authentication setup for your SMTP server, your normal password may not work. You may have to generate a separate password from your provider, which will work without multi-factor authentication.

## Send Email

This action sends an email with a dynamic subject and body to a list of the recipient(s). You can also optionally attach files along with this email.

| Property Name      | Description                                                                                           | Type      |
| ------------------ | ----------------------------------------------------------------------------------------------------- | --------- |
| From email         | This is the email address that the email will be sent from.                                           | Mandatory |
| Set Reply To Email | Toggle to set if the reply to email ID needs to be set                                                | Optional  |
| Reply to email     | This is the email address that responses to your email will be sent to.                               | Optional  |
| To email(s)        | This is the email address(es) of the recipients. Multiple email IDs must be comma separated.          | Mandatory |
| CC email(s)        | List of email adderess(es) of the recipients to be CC'd. Multiple email IDs must be comma separated.  | Optional  |
| BCC email(s)       | List of email adderess(es) of the recipients to be BCC'd. Multiple email IDs must be comma separated. | Optional  |
| Subject            | The subject of the email                                                                              | Optional  |
| Body               | The body of the email                                                                                 | Optional  |
| Attachment(s)      | List of file paths of the attachments to be attached to the email.                                    | Optional  |

### Response Format

If the email has been sent successfully, the response will be a JSON object with the following structure:

```
{
  "success": true,
  "message": "Email sent successfully"
}
```

On the other hand, if Appsmith encounters an error while sending the email, an error will be displayed on the screen. An example is shown below: ![Click to expand](/img/smtp_error_response.png)

## Using Queries in applications

Once you have successfully run a Query, you can use it in your application to

* [Display Data](../../core-concepts/data-access-and-binding/displaying-data-read/)
* [Capture Data](../../core-concepts/data-access-and-binding/capturing-data-write/)
* [Upload files](../../learning-and-resources/how-to-guides/how-to-upload-to-s3.md#uploading-a-file)
* [Download files](../../learning-and-resources/how-to-guides/how-to-upload-to-s3.md#downloading-files)
