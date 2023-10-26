# Send Emails Using the SMTP Plugin

## Prerequisites
* App Connected to [SMTP](/connect-data/reference/using-smtp) datasource.
* A [Filepicker](/reference/widgets/filepicker) widget to upload files.

## Configure query

Configure the query to send mail, using the following parameters:



1. Select the Send email command from the **Commands** dropdown.

2. Specify the email address you want to send the mail from in the **From email** field. You can also use mustache bindings `{{}}` to dynamically set the email.

3. In the **To email(s)** field, specify the email addresses to which you want to send the email. For multiple recipients, separate the addresses with commas. 

<dd>

*Example 1*: If you have a Table widget displaying user details and you want to retrieve the email addresses for all user, you can use the following:

```js
{{Table1.tableData.map(user => user.email)}}
```

*Example 2*: To get the email provided by a user in a Form widget, you can use the following code:

```js
{{Form1.data.Input1}}
```


</dd>

4. In the **CC email(s)** field, specify the email addresses receiving a carbon copy (CC). To include multiple CC recipients, separate the addresses with commas. You can also use mustache bindings `{{}}` to dynamically set the email.

5. In the **BCC email(s)** field, specify the email addresses receiving a blind carbon copy (BCC). To include multiple BCC recipients, separate the addresses with commas. You can also use mustache bindings `{{}}` to dynamically set the email.

6. In the **Subject** field, add the email's subject, for example:

<dd>

*Example*: if you want to display a welcome message to the current Appsmith user, you can use the following code:

```sql
Welcome Aboard!  {{appsmith.user.name}}
```

</dd>


7. Select the email body format from **Body type** field. Use HTML for formatted emails with images and links, and plain text for simple, text-based messages.

<dd>

*Example*: 


```js
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    .container {
      border: 1px solid #e0e0e0;
      padding: 20px;
      max-width: 600px;
      margin: 0 auto;
    }
    .header {
      background-color: #007bff;
      color: #fff;
      text-align: center;
      padding: 10px;
    }
    .content {
      padding: 20px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>Loan Approval Details</h2>
    </div>
    <div class="content">
      <p><strong>Name:</strong> {{tbl_applications.selectedRow.Name}}</p>
      <p><strong>Email:</strong> {{tbl_applications.selectedRow.Email}}</p>
      <p><strong>Address:</strong> {{tbl_applications.selectedRow.Address}}</p>
      <p><strong>Amount Requested:</strong> {{tbl_applications.selectedRow.Amount}}</p>
      <p><strong>Amount Offered:</strong> {{tbl_applications.selectedRow.AmountOffered}}</p>
      <p><strong>Approval Date:</strong> {{tbl_applications.selectedRow.AppliedOn}}</p>
      
      <!-- Add images here -->
      <img src="https://cdn-icons-png.flaticon.com/512/748/748463.png" alt="Image 1" width="150" height="150">
			
			<p>If you have any questions about this receipt, simply reply to this email or reach out to our <a href="www.test.com">support team</a> for help.</p>
<p>Cheers,
  <br>The YBDC Bank Team</p>
    </div>
  </div>
</body>
</html>

```

</dd>


### Add attachments to emails

To send emails with various attachments, such as files, PDFs, and images, you can achieve this by using the FilePicker widget to upload the desired files and then send them as email attachments.



1. Drag a Filepicker widget and configure the **Allowed file types** property to specify the file formats that users can upload.

2. Select your preferred **Data format** based on the file type.

3. In the **Attachment(s)** field, add the following code to upload files:

<dd>

```js
 {{FilePicker1.files}}
```



 </dd>







