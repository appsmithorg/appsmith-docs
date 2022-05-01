# Security

## Does Appsmith store my data?

No, Appsmith does not store any data returned from your API endpoints or DB queries. Appsmith only acts as a proxy layer. When you query your database/API endpoint, the Appsmith server only appends sensitive credentials before forwarding the request to your backend. The Appsmith server doesn't expose sensitive credentials to the browser because that can lead to security breaches. Such a routing ensures the security of your systems and data.

## Security measures within Appsmith

Appsmith applications are secure-by-default. The security measures implemented for Appsmith installations are:

* On Appsmith Cloud, all connections are TLS encrypted. For self-hosted instances, we offer the capability to setup SSL certificates via LetsEncrypt during the installation process.
* All sensitive credentials, such as database credentials, are encrypted with AES-256 encryption. Each self-hosted Appsmith instance configures unique salt and password values ensuring data-at-rest security.
* Appsmith Cloud will only connect to your databases/API endpoints through whitelisted IPs: <mark style="color:green;">**18.223.74.85**</mark> <mark style="color:green;"></mark><mark style="color:green;"></mark> & <mark style="color:green;"></mark> <mark style="color:green;"></mark><mark style="color:green;">**3.131.104.27**</mark>, ensuring that you only expose database access to specific IPs when using our cloud offering.
* Appsmith Cloud is hosted in AWS data centers on SOC 1 and SOC 2 compliant servers. We also maintain data redundancy on our cloud instances via regular backups.
* Internal access to Appsmith Cloud is controlled through a 2-factor authentication system and audit logs.&#x20;

{% hint style="info" %}
The audit logs here are about Appsmith's cloud-hosted instance only and should not be confused with the audit logs feature.
{% endhint %}

## **Securely Executing Queries**

The Appsmith's backend system doesn't store any information related to the inputs made by users using an app or the responses of the queries. It acts as a pure proxy system. It ensures that any private/confidential data is never logged or stored in Appsmith's data stores. Appsmith stores the configuration of the queries so that the SQL query body or custom API URLs are never exposed to the client in "view" mode. Thus protecting the application as viewers cannot deduce the executed query.&#x20;

All SQL queries are also created with prepared statements switched on by default to prevent SQL injection from the client.

## Securely Executing JavaScript

All JS written within Appsmith is executed on the client only. We don't execute any code on the server. Like all JS codes on the browser, the user can inspect the site and view the code. Hence, please code accordingly.&#x20;

The code is stored in the MongoDB database that Appsmith uses to store all other application configurations. To ensure that all data is secure, please read the following carefully:

1. No API keys or sensitive keys are printed in plain text in the JS Code because the JS code is not stored in an encrypted format.
2. When you connect an application to Git, the JS Code will be stored as a JS file in the repository. Hence, the security measures you take with your standard JS code should be taken with the Appsmith's JS code.

{% hint style="success" %}
We maintain an open communication channel with security researchers to report security vulnerabilities responsibly. If you notice a security vulnerability, please email [security@appsmith.com](mailto:security@appsmith.com), and we'll resolve them ASAP.
{% endhint %}
