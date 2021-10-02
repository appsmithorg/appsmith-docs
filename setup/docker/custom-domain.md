# Custom Domain

You can easily make Appsmith available on a custom domain by updating your domain's DNS records to point to the instance running Appsmith. Most domain registrars / DNS-providers have documentation on how you can do this yourself.

* [GoDaddy](https://in.godaddy.com/help/create-a-subdomain-4080)
* [Amazon Route 53](https://aws.amazon.com/premiumsupport/knowledge-center/create-subdomain-route-53/)
* [Digital Ocean](https://www.digitalocean.com/docs/networking/dns/how-to/add-subdomain/)
* [NameCheap](https://www.namecheap.com/support/knowledgebase/article.aspx/9776/2237/how-to-create-a-subdomain-for-my-domain)
* [Domain.com](https://www.domain.com/help/article/domain-management-how-to-update-subdomains)

## HTTPS

After configuring your custom domain as above, getting HTTPS support is super easy. Just tell Appsmith about the custom domain and you're on.

In the folder where you installed appsmith, edit the `stacks/configuration/docker.env` file and set the variable `APPSMITH_CUSTOM_DOMAIN` to the custom domain / sub domain you are using.

For example, if you are using `appsmith.mydomain.com` as your custom domain for Appsmith, then set this variable like this:

```bash
APPSMITH_CUSTOM_DOMAIN=appsmith.mydomain.com
```

Save this file and [restart the appsmith container](./#configuring-self-hosted-instances)

{% hint style="success" %}
Your Appsmith instance should be available at [https://appsmith.mydomain.com](https://appsmith.mydomain.com) with automatic certificate provisioning and renewals
{% endhint %}

