---
description: Configure your google maps API key to enable the maps widget on Appsmith
---

# Google Maps

![](../../.gitbook/assets/screenshot-2020-07-17-at-5.02.29-pm.png)

To enable the maps widget, login to your [google cloud console](https://console.cloud.google.com/)

**1. Navigate to the** [**credentials section**](https://console.cloud.google.com/apis/credentials) **under APIs & Services**

![Click to expand](../../.gitbook/assets/maps-credentials.png)

**2. Create a new API Key Credential**

![Click to expand](../../.gitbook/assets/maps-api-key.png)

**3. Restrict the API Key**

![click to expand](../../.gitbook/assets/maps-api-restrict%20%281%29.png)

**4. Enable the following APIs**

* Maps Embed API
* Maps JavaScript API
* Places API
* Geolocation API

![Click to expand](../../.gitbook/assets/maps-apis.png)

**5. Update the** [**instance configuration**](./) **with the below fields**

```bash
# Example Docker Configuration
# ******** Google Maps ***********
APPSMITH_GOOGLE_MAPS_API_KEY=YOUR_API_KEY
# ********************************
```

**6.** [**Restart the Appsmith Instance**](./)\*\*\*\*

{% hint style="success" %}
The maps widget should now be enabled on your installation. Read more about [Obtaining a google API key](https://developers.google.com/maps/documentation/javascript/get-api-key)
{% endhint %}

