# Upgrade to Business Edition

Follow the below guides to **upgrade** your **Community Edition (CE)** to a **Business Edition (BE)** based on the type of your **Appsmith Installation:**

:::tip
You'll need your **** [**Business Edition License Key**](https://www.appsmith.com/pricing) **** to complete the upgrade**.**
:::

{% content-ref url="docker.md" %}
[docker.md](docker.md)
{% endcontent-ref %}

:::tip
For **non-docker Appsmith installations**, please get in touch with us via [discord](https://discord.com/invite/rBTTVJp) or [email](mailto:support@appsmith.com). We will help you upgrade your Appsmith instance.
:::

## License Renewal

The Appsmith server shuts down if your Business license key is expired. You will see an invalid license key message like below in the logs:

```
Exiting application. Invalid license key.
```

:::tip
Please get in touch with our support team either on [Discord](https://discord.com/invite/rBTTVJp) or by [email](mailto:support@appsmith.com) to renew your license.
:::

Once you have a new license key, [replace the existing license key](docker.md#step3-add-or-replace-license-key) in the `docker-compose.yml` file.
