# Air-gapped Instance

## Introduction

In the context of Appsmith, air-gapped instances are addressed to a niche category of users operating within highly regulated industries or scenarios that necessitate the absolute isolation of the server from any external internet connectivity. This concept document provides an overview of air-gapped instances, reasons for their necessity, functionalities affected by such an environment, and guidance on setup and maintenance.

## The necessity of air-gapping

Air-gapping is essential in environments where security protocols mandate that the servers handling sensitive data do not connect to the internet under any circumstances. Such cases are typically found in sectors with stringent regulatory compliance requirements, like defense, national security, finance, and critical infrastructure.

It is crucial to understand that air-gapping at the server level is distinct from situations where the client device, such as a browser, does not have internet connectivity. An air-gapped server cannot reach out to or be accessed from any outside network, ensuring an additional layer of security from external threats.

## Telemetry and Privacy in Appsmith

Privacy-minded users may equate air-gapping with the reluctance to share usage telemetry for privacy reasons. However, air-gapping is not a prerequisite for privacy within Appsmith. Users who wish to disable telemetry can do so regardless of their network setup. For instructions on disabling telemetry, please refer to our documentation on [disabling telemetry](/product/telemetry).

## Appsmith Connectivity Requirements

To leverage the complete suite of features provided by Appsmith, external internet connectivity is essential for accessing the following Appsmith cloud services at `cs.appsmith.com`:

- **License Checks:** Validating the license key of the instance
- **Release Notes:** Keeping users informed about new features, improvements, and bug fixes.
- **Templates:** Offering users a selection of pre-built templates for rapid application development.
- **SaaS Integrations:** Connecting to integrated SaaS services such as Google Sheets & Airtable for seamless data exchange.

Connectivity is also necessary when working with third party libraries

- **Custom JavaScript Libraries:** Enabling the installation of third-party libraries to extend the platform's capabilities.
- **Intercom Widget:** Providing real-time support to users through a customer communication platform.

When operating an air-gapped instance, these features will be unavailable or have limited functionality due to the lack of internet access.

## Whitelisting and Requesting Air-gapped Instances

Most users can fully utilize Appsmith by simply whitelisting `cs.appsmith.com`. However, for organizations where having no internet connectivity is a strict compliance criterion, requesting an air-gapped instance is necessary. This can be done by reaching out to the Appsmith sales team at `sales@appsmith.com`.

## Update Policy for Air-gapped Instances

Updates for air-gapped instances are specifically packaged and released once every quarter. Since the air-gapped servers cannot access the internet, these updates need to be manually downloaded from an authorized source with internet access and transferred to the isolated network, where they are applied to the Appsmith instance. Organizations using air-gapped instances should plan for a regular update cycle to ensure the platform remains secure and up to date.

:::info
Always [backup your instance](/getting-started/setup/instance-management/appsmithctl) before attempting an update to protect your applications.
:::

## Conclusion

Air-gapped instances of Appsmith serve a unique purpose for organizations operating under the most rigorous confidentiality and security protocols. By understanding the concept, affected functionalities, and the process to acquire and maintain such an environment, institutions can ensure the integrity of their data while utilizing the powerful application development capabilities of Appsmith.

For detailed information on Appsmith and air-gapped instances, or to initiate a request for an air-gapped deployment, organizations should contact the Appsmith sales team.
