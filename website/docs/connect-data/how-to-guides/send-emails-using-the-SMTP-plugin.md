# Send Emails Using the SMTP Plugin

This page shows how to use the SMTP Plugin to send emails and attach files and images.


## Prerequisites
* App Connected to [SMTP](/connect-data/reference/using-smtp) datasource.
* A [Filepicker](/reference/widgets/filepicker) widget to upload files.

## Configure query

Configure the query to send mail, using the following parameters:



1. Select the Send email command from the **Commands** dropdown.

2. Specify the email address you want to send the mail from in the **From email** field. You can also use mustache bindings `{{}}` to dynamically set the email.

3. In the **To email(s)** field, specify the email addresses to which you want to send the email. For multiple recipients, separate the addresses with commas. 

<dd>

*Example 1*: If you have a Table widget displaying user details and you want to retrieve the email addresses, you can use the following:

```js
// Retrieve the email of the selected row in the table
{{Table1.selectedRow.email}}

// Get the emails of all users in the table
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
Welcome Aboard! {{appsmith.user.name}}
```

</dd>


7. Select the email body format from **Body type** field. Use HTML for formatted emails with images and links, and plain text for simple, text-based messages.

<dd>

*Example*: 


```html
<!DOCTYPE html>
<html>
<head>
    <title>Product Info</title>
</head>
<body>
     <section>
        <!-- Display the name of the selected row from Table1 -->
        <h1>Name: {{Table1.selectedRow.name}}</h1>

        <p>DOB: {{Table1.selectedRow.dob}}</p>

        <p>Status: {{Select1.selectedOptionValue}}</p>
 
        <p>Date of Purchase: {{DatePicker1.formattedDate}}</p>

        <p>This is the description of the content. It provides more details about what this is all about.</p>
    </section>

    <!-- Display an image using a URL -->
    <img src="https://assets.appsmith.com/widgets/default.png" alt="Text">
    
    <!-- Add a clickable button that links to https://example.com -->
    <a href="https://example.com" class="action-button">Click Me</a>

    <footer>
        <p>If you have any questions, feel free to reply to this email or contact our support team.</p>
    </footer>
</body>
</html>
```

</dd>


### Add attachments

To send emails with various attachments, such as files, PDFs, and images, you can achieve this by using the Filepicker widget to upload the desired files and then send them as email attachments.



1. Drag a Filepicker widget and configure the **Allowed file types** property to specify the file formats that users can upload.

2. Select your preferred **Data format** based on the file type.

3. In the **Attachment(s)** field of the SMTP query, add the following code to upload files:

<dd>

```js
// Accessing single file data
{{ FilePicker1.files[0].data }}

// Accessing all files
{{FilePicker1.files}}

//here [0] represents index of the file.
```



 </dd>



## Execute the query

Once your query is configured, you can send emails by executing the query in response to a specific event, such as clicking a button or when files are uploaded using a Filepicker. 

*Example:*

Configure the **onClick** event of the Form widget's Submit button to execute the send email query.


<figure>
  <img src="/img/smtp-form.png" style= {{width:"650px", height:"auto"}} alt="Display external website"/>
  <figcaption align = "center"><i></i></figcaption>
</figure>


