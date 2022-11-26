---
description: Follow the steps to upgrade the Appsmith installation to a Business Edition.
---
# Upgrade to Business Edition

:::info Important
Keep the License Key ready to complete the upgrade. Learn more on [Business Edition & pricing](https://www.appsmith.com/pricing) options.
:::

Choose the type of  Appsmith Installation to upgrade your Community Edition (CE) to a Business Edition (BE).

<div class="containerBorder">
    <div class="containerGrid">
        <div class="columnGrid column-one" align="center">
            <div class="containerCol">
                <a href="docker/">
                <img class="containerImage" src="/img/docker-logo.png" alt="Docker-logo"/>
                </a> 
            </div> 
            <b><a href="docker/">Docker</a></b>
        </div>
        <div class="columnGrid column-two" align="center">
       </div>
        <div class="columnGrid column-three" align="center">
        </div>
    </div>
</div>

## Renew license
The Appsmith server shuts down once the license key expires. You would see `Invalid license key` message in the logs:

```bash
Exiting application. Invalid license key.
```

[Send an email to support](mailto:support@appsmith.com) to raise a renewal request. Once you have a renewed license key, [replace](docker#step2-add-or-replace-license-key) it in the configuration file and start Appsmith.


## Next steps
* [Configuring Self Hosted Instances](/getting-started/setup/instance-configuration/)
* [Managing Self Hosted Instances](/getting-started/setup/instance-management/)