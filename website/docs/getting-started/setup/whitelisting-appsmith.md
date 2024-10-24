# Whitelisting in Appsmith

Whitelisting is essential for securing communication on both self-hosted Appsmith instances and Appsmith Cloud. This page outlines the key aspects of whitelisting for both environments and explains how it ensures secure and reliable operation.

## Self-hosted Appsmith

For self-hosted Appsmith instances, it’s necessary to whitelist the domain `cs.appsmith.com` to ensure proper functionality, such as version control with Git and cloud storage.

Appsmith uses dynamic IPs for scaling and load balancing, so IP-based whitelisting is not supported for `cs.appsmith.com` domain. By whitelisting this domain, you ensure that your Appsmith instance can access essential services and maintain uninterrupted performance, even if the backend infrastructure changes.

## Appsmith cloud
For users who log into Appsmith via the cloud (for example, `app.appsmith.com`) and wish to connect to a database within their ecosystem, it's necessary to whitelist specific IP addresses. Appsmith Cloud establishes connections with databases and API endpoints exclusively through whitelisted IP addresses `18.223.74.85` and `3.131.104.27`. All traffic to and from Appsmith Cloud is secured using TLS encryption.
For users of Appsmith Cloud (`app.appsmith.com`) and wish to connect to a database or API within their ecosystem, it's necessary to whitelist Appsmith's specific IP addresses to establish connections securely within their ecosystem.

Whitelist the IPs `18.223.74.85` and `3.131.104.27` to establish secure communication. All communication between Appsmith Cloud and your environment through these IPs are encrypted using TLS, ensuring that data remains secure and protected from unauthorized access.
