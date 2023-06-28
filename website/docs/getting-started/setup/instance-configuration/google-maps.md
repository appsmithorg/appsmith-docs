---
description: Configure your google maps API key to enable the maps widget on Appsmith
sidebar_position: 5
---

# Google Maps

This page provides instructions to integrate Google Maps so that you can use a Map Widget in your Apps on your Appsmith self-hosted instance.

## Prerequisites

- A [Google Cloud account](https://www.google.com/aclk?sa=l&ai=DChcSEwi0373S7OX_AhW7Vn0KHT5BD30YABABGgJzZg&sig=AOD64_3YNMGHJAu3vGJmjK-vrl8qni2BxA&q&adurl&ved=2ahUKEwjjs7XS7OX_AhWy3TgGHWtHAkYQ0Qx6BAgIEAE). 
- A running self-hosted Appsmith instance.

## Configure Google Maps

1. Log into your [Google Cloud console](https://console.cloud.google.com/).
2. Generate a Google Maps API Key by following the instructions available on the Google Maps Platform to [Create API keys](https://developers.google.com/maps/documentation/javascript/get-api-key).
3. Restrict the Google Maps API Key by following the instructions available on the Google Maps Platform to [Restrict API keys](https://developers.google.com/maps/documentation/javascript/get-api-key).
4. Follow these steps to add the API key to your self-hosted instance:

    a. Log into your Appsmith instance as a superuser.

    b. Go to **Admin Settings** screen.

    c. Select **Google Maps** from the left nav bar.

    <figure>
    <img src="/img/admin-settings-configure-google-maps-api-key.png" style={{width: "100%", height: "auto"}} alt="Use DNS or Public IP to access Appsmith." />
    <figcaption align="center"><i>Add your Google Maps API Key</i></figcaption>
    </figure>

    d. Add your API key to the **Google Maps API Key** field.

    e. Click the **SAVE & RESTART** button to restart the instance.

You're all set to use the Map widget in your Appsmith apps.

## Further reading

* [Map Widget](/reference/widgets/maps)
