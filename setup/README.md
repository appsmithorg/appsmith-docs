---
description: Appsmith is open source and very easy to deploy on your own machine
---

# Setup Appsmith

You can follow one of our guides to deploy appsmith via the technology you prefer

* [Docker Guide](docker/) **\(Recommended\)**
* [Kubernetes](kubernetes.md)  
* [AWS AMI Guide](aws-ami.md)
* [Heroku Guide](heroku.md)
* [DigitalOcean](digitalocean.md)

{% hint style="warning" %}
The self-hosted version is not air-gapped and pings a cloud service to fetch release notes about our product updates. This helps you stay up to date with the latest changes to your Appsmith deployment. If you would like a fully air-gapped deployment, please write to support@appsmith.com
{% endhint %}

## Custom Domains

To host Appsmith on a custom domain, you can contact your domain registrar and update your DNS records. Most domain registrars have documentation on how you can do this yourself.

* [GoDaddy](https://in.godaddy.com/help/create-a-subdomain-4080)
* [Amazon Route 53](https://aws.amazon.com/premiumsupport/knowledge-center/create-subdomain-route-53/)
* [Digital Ocean](https://www.digitalocean.com/docs/networking/dns/how-to/add-subdomain/)
* [NameCheap](https://www.namecheap.com/support/knowledgebase/article.aspx/9776/2237/how-to-create-a-subdomain-for-my-domain)
* [Domain.com](https://www.domain.com/help/article/domain-management-how-to-update-subdomains)

## Troubleshooting

If at any time you encounter an error while installing Appsmith on any platform, reach out to **support@appsmith.com** or join our [Discord Server](https://discord.com/invite/rBTTVJp)

If you know the error and would like to reinstall Appsmith, simply delete the installation folder and the templates folder and execute the script again

## Telemetry Opt-In

During the installation process, we ask that you share anonymous usage statistics to help make the product better. You can read more about the data we collect below

{% page-ref page="../telemetry.md" %}

