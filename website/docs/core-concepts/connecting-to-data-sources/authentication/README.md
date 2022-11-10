# REST APIs

If your APIs are protected by an authentication mechanism, that requires a standard set of headers or parameters that need to be sent with every request, you can save these in a common data source to be reused with every request known as Authenticated APIs.

## Create Authenticated API

Navigate to **Explorer** → scroll down to **Datasources** → Click on the **(+)** sign → Click **Authenticated API**.

 <VideoEmbed host="youtube" videoId="Uy7ZDviGbtM" title="Add new API" caption="Add new API"/> 


You’ll be redirected to the create datasource page as shown below:

![Create a new Datasource](</img/OAuth__API_Integration__Create_New_DB.png>)

## Configure

You can configure the data source as follows:

### Name

By default, Appsmith supplies a running sequence for the data source created. You can click on the pencil icon next to it to edit the name of the data source.

:::info
It is advisable that you give a meaningful name to your Authenticated API datasource.
:::

### URL

Use this field to add the API URL you would like to access. For example, I would like to access the mock API of Appsmith, and for that, I’ll supply the URL as  [`https://mock-api.appsmith.com`](https://mock-api.appsmith.com)``

### Headers

You can add one or more header details that you would like to send along with the request to access the API you have integrated.

### Query Parameters

You can add one or more query parameters to the API you integrate with as part of the request.

### Send Appsmith Signature Header

When you want to ensure that the incoming requests originate from Appsmith, you can enable `Send Appsmith Signature Header` by selecting **Yes**. You’ll see a new field - **Session Details Signature Key** to supply the signature key.

![Appsmith Signature Header](</img/OAuth__API_Integration__Appsmith_Signature_Header__Enable__.png>)

### Authentication Type

You can define an [authentication type](authentication-type/) for REST APIs by using the protocols available on Appsmith.

## Security

Appsmith safely encrypts all your authentication credentials and stores them securely. Appsmith also does not store any data returned from your data sources and acts only as a proxy layer to orchestrate the API / Query calls. Since Appsmith is an open-source framework, you can [deploy it on-premise](../../../getting-started/setup/), and audit it to ensure none of your data leaves your VPC.

## Smart JSON Substitution

The smart JSON substitution feature allows Appsmith to dynamically perform type conversions on field values in a request body. The video below illustrates how to use this feature:

 <VideoEmbed host="youtube" videoId="-Z3y-pdNhXc" title="How to use smart JSON substitution" caption="How to use smart JSON substitution"/>