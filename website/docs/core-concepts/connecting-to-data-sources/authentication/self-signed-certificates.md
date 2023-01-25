# Self Signed Certificates

In case you need to use a self-signed certificate to access your REST endpoint, the [**Authenticated API**](./#create-authenticated-api) Datasource allows you to upload your own self-signed certificate within the API's configuration page.

To upload your self-signed certificate:

1. Navigate to your Authenticated API Datasource in the Explorer pane. If you haven't already created one, you can find instructions in the [Authenticated API docs](./#create-authenticated-api).
2. Click **Edit** in the top-right of the window.
3. Click to open the **Advanced Settings** dropdown at the bottom of the window.
4. Set the **Use Self-signed certificate\*** option to `Yes`.
5. In the new **Upload Certificate** field, click the **Select** button. Now you can browse to find and upload your self-signed certificate file.

![After creating a New Datasource, select Authenticated API and use the Advanced Settings to upload your certificate.](/img/as\_selfsigned\_annotated.png)

This information needs to be provided in .PEM (_Privacy Enhanced Mail_) format, as shown below. The certificate information is stored securely in an encrypted format in the database.

![Example contents of a self-signed certificate in .PEM format.](</img/Self-signed_certificate.png>)
