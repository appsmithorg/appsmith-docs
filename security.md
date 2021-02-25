# Security

## Does Appsmith store my data?

No, Appsmith does not store any data returned from your API endpoints or DB queries. Appsmith only acts as a proxy layer. When you query your database/API endpoint, the Appsmith server only appends sensitive credentials before forwarding the request to your backend. The Appsmith server doesn't expose sensitive credentials to the browser because that can lead to security breaches. Such a routing ensures security of your systems and data.

## Security measures within Appsmith

Appsmith applications are secure-by-default. The security measures implemented for Appsmith installations are:

* On Appsmith Cloud, all connections are encrypted with TLS. For self-hosted instances, we offer the capability to setup SSL certificates via LetsEncrypt during the installation process.
* Encrypt all sensitive credentials such as database credentials with AES-256 encryption. Each self-hosted Appsmith instance is configured with unique salt and password values ensuring data-at-rest security.
* Appsmith Cloud will only connect to your databases/API endpoints through whitelisted IPs: 18.223.74.85 & 3.131.104.27. This ensures that you only have to expose database access to specific IPs when using our cloud offering.
* Appsmith Cloud is hosted in AWS data centers on servers that are SOC 1 and SOC 2 compliant. We also maintain data redundancy on our cloud instances via regular backups.
* Internal access to Appsmith Cloud is controlled through 2-factor authentication system along with audit logs.
* Maintain an open channel of communication with security researchers to allow them to report security vulnerabilities responsibly. If you notice a security vulnerability, please email [security@appsmith.com](mailto:security@appsmith.com) and we'll resolve them ASAP.
