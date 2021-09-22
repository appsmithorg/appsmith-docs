---
description: >-
  The Map widget is used to display lat, long data on a google map and allow
  users to select locations on a map as lat, long.
---

# Maps

{% embed url="https://youtu.be/xCTiPNlBKLU" caption="" %}

## Properties

| Internal Property | Description |
| :--- | :--- |
| **selectedMarker** | This contains the marker object selected by the user |
| **markers** | This contains the list of markers on the map |

| Widget Property | Description |
| :--- | :--- |
| **Initial location** | This property sets the default location that the map should focus on. |
| **Enable search location** | This property enables a search bar on the map which users can use to navigate |
| **Enable pick location** | This property allows users to select a location on the map and moves the map marker to this location. The selectedMarker field is populated with this marker. |
| **Create new marker** | This property enables scrolling within the contents of each tab |
| **Visible** | Controls widget's visibility on the page. When turned off, the widget will not be visible when the app is published |
| **Zoom Level** | Sets the default zoom level of the map |

| Action | Description |
| :--- | :--- |
| **onMarkerClick** | Sets the action to be run when the user clicks a marker on the map. See a list of [supported actions](../core-concepts/writing-code/appsmith-framework.md). |
| **onMarkerCreated** | Sets the action to be run when the user creates a new marker on the map. See a list of [supported actions](../core-concepts/writing-code/appsmith-framework.md) |

