---
title: Salesforce
hide_title: true
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Dropdown from "@site/src/components/Dropdown"; 

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Salesforce</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" }
]}
/>

</div>

<!-- vale on -->


This page provides information for connecting Appsmith to Salesforce, which allows you to integrate Salesforce data into your applications. With this integration, you can retrieve, update, and manage Salesforce records such as Leads, Contacts, Accounts, and Opportunities directly from Appsmith.

![Appsmith Salesforce Integration](/img/appsmith-salesforce.png)


### Connect Salesforce

The following section is a reference guide that provides a complete description of all the parameters to connect to a Salesforce datasource.

#### Salesforce Production Account

A Salesforce Production Account is the primary environment where live customer data is stored and business operations are managed. Connecting Appsmith to a Production account allows you to interact with real Salesforce records such as Leads, Contacts, Accounts, and Opportunities.

Once selected, you are redirected to the Salesforce authentication page, where you can log in and grant Appsmith access to your Salesforce data. The authentication method displayed is based on your Salesforce account configuration and may include:

- **OAuth 2.0:** A secure, token-based authentication method that allows you to authorize Appsmith to access your Salesforce data without exposing your credentials.
- **SAML** (Security Assertion Markup Language): A standard for single sign-on (SSO) that allows authentication via a centralized identity provider.
- **OIDC** (OpenID Connect): An authentication protocol built on OAuth 2.0 that provides identity verification in addition to authorization.

#### Salesforce Sandbox Account

A Salesforce Sandbox Account is a testing and development environment that mirrors your production Salesforce instance. It is used for developing, testing, and training without impacting live customer data. Connecting Appsmith to a Salesforce Sandbox account allows you to interact with simulated Salesforce records and test integrations before deploying them to production.

Once selected, you are redirected to the Salesforce authentication page, where you can log in and authorize Appsmith to access your Salesforce Sandbox data. The authentication method displayed depends on your Salesforce account configuration and may include:

- **OAuth 2.0:** A secure, token-based authentication method that allows you to authorize Appsmith to access your Salesforce data without exposing your credentials.
- **SAML** (Security Assertion Markup Language): A standard for single sign-on (SSO) that allows authentication via a centralized identity provider.
- **OIDC** (OpenID Connect): An authentication protocol built on OAuth 2.0 that provides identity verification in addition to authorization.

## Query Salesforce

The following section is a reference guide that provides a description of the available commands with their parameters to create Salesforce queries.


<Dropdown
  label="Select a command"
  options={["Create Record Contact", "Update Record Contact", "Delete Record Contact"]}
  content={{
    "Create Record Contact": `

### Create Record Contact

Contacts in Salesforce represent individuals associated with an **Account**. Creating a contact allows businesses to store and manage customer details, track communication, and build relationships.  

With Appsmith, users can dynamically create Salesforce contacts using input widgets. This enables automatic population of fields, reducing manual effort and ensuring data accuracy.  

The following properties are required when creating a contact in Salesforce:  

#### First Name 

The **First Name** of the contact. While this field is optional in Salesforce, it is commonly used to personalize interactions.  

It must only contain alphabetical characters, and special symbols or numbers should not be included.  

**Example:** If the name is entered dynamically from an input widget:


### **Solution 2: Use a More MDX-Friendly Format**
Instead of using curly braces directly, wrap the expression inside a template string:  

{"```javascript"}
{{first_name_input.text}}
// Example: "John"
{"```"}





    `,
    "Update Record Contact": `
### Update Record Contact

Updates an existing contact in Salesforce. This allows modifying contact details dynamically through Appsmith applications. Fields such as email, phone, and address can be updated as business relationships evolve.

    `,
    "Delete Record Contact": `
### Delete Record Contact

Deletes a contact from Salesforce. This action is irreversible and removes the contact permanently.
    `
  }}
/>