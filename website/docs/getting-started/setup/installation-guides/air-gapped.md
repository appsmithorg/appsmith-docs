# Airgapped Edition

In the context of Appsmith, air-gapped instances are addressed to a niche category of users operating within highly regulated industries or scenarios that necessitate the absolute isolation of the server from any external internet connectivity. This concept document provides an overview of air-gapped instances, reasons for their necessity, functionalities affected by such an environment, and guidance on setup and maintenance.

## The necessity of air-gapping

Air-gapping is essential in environments where security protocols mandate that the servers handling sensitive data do not connect to the internet under any circumstances. Such cases are typically found in sectors with stringent regulatory compliance requirements, like defense, national security, finance, and critical infrastructure.

It's crucial to understand that air-gapping at the server level is distinct from situations where the client device, such as a browser, does not have internet connectivity. An air-gapped server cannot reach out to or be accessed from any outside network, ensuring an additional layer of security from external threats.

## Telemetry and Privacy in Appsmith

Privacy-minded users may equate air-gapping with the reluctance to share usage telemetry for privacy reasons. However, air-gapping is not a prerequisite for privacy within Appsmith. Users who wish to disable telemetry can do so regardless of their network setup. For instructions on disabling telemetry, please refer to the documentation on [disabling telemetry](/product/telemetry).

## Whitelisting and requesting Airgapped Edition

The majority of users can effectively use Appsmith by allowing access to `cs.appsmith.com`. However, in organizations where maintaining complete internet isolation is a critical compliance requirement, obtaining an airgapped edition is imperative. To initiate this process, contact the Appsmith sales team at `sales@appsmith.com`.

## Unsupported features in Airgapped Edition

When using the airgapped edition, these features will be unavailable or have limited functionality due to the lack of internet access.

- **Templates:** Offering users a selection of pre-built templates for rapid application development.
- **SaaS Integrations:** Connecting to integrated SaaS services such as Google Sheets & Airtable for seamless data exchange.
- **Custom JavaScript Libraries:** Enabling the installation of third-party libraries to extend the platform's capabilities.

## Update policy for Airgapped Edition

Updates for the airgapped edition are specifically packaged and released once every quarter. Since the air-gapped servers cannot access the internet, these updates need to be manually downloaded from an authorized source with internet access and transferred to the isolated network, where they are applied to the Appsmith instance. Organizations using airgapped edition should plan for a regular update cycle to ensure the platform remains secure and up to date.

:::info
Always [backup your instance](/getting-started/setup/instance-management/appsmithctl) before attempting an update to protect your applications.
:::

## Conclusion

Airgapped Edition of Appsmith serves a unique purpose for organizations operating under the most rigorous confidentiality and security protocols. By understanding the concept, affected functionalities, and the process to acquire and maintain such an environment, institutions can ensure the integrity of their data while utilizing the powerful application development capabilities of Appsmith.

For detailed information on Appsmith and the airgapped edition, or to initiate a request for an air-gapped deployment, organizations should contact the Appsmith sales team.
