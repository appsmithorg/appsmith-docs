# Maps

The Map widget is used to display lat, long data on a google map and allows users to select locations on a map as lat, long.

:::info
To use the Maps widget on a self-hosted Appsmith, ensure that Google Maps is set up on your instance. For more information, see [Configuring Google Maps on a Self-hosted Appsmith Instance](/getting-started/setup/instance-configuration/google-maps).
:::

<VideoEmbed host="youtube" videoId="xCTiPNlBKLU" title="How to use Map Widget" caption="How to use Map Widget"/>

## Properties

Properties allow you to edit the widget, connect it with other widgets and customize the user actions.

### Widget Properties

These properties allow you to edit the Map widget. All these properties are present in the property pane of the widget. The following table lists all the widget properties.

| Widget Property            | Description                                                                                                                                                                                |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Initial location**       | This property sets the default location that the map should focus on.                                                                                                                      |
| **Default markers**        | This property sets an array of default markers. Every default marker will have the following format: `{lat: number, long: number, title?: string, color?: string}` |
| **Map & Marker Centring**  | Controls whether the clicked marker is centred on the map.                                                                                                                                 |
| **Enable search location** | This property enables a search bar on the map which users can use to navigate                                                                                                              |
| **Enable pick location**   | This property allows users to select a location on the map and moves the map marker to this location. The `selectedMarker` field is populated with this marker.                            |
| **Create new marker**      | This property enables scrolling within the contents of each tab                                                                                                                            |
| **Visible**                | Controls widget's visibility on the page. When turned off, the widget will not be visible when the app is published                                                                        |
| **Animate Loading**        | Allows you to control a widget’s animation on the page load.                                                                                                                               |
| **Zoom Level**             | Sets the default zoom level of the map                                                                                                                                                     |

### Binding Properties

These properties allow you to bind your Map widget with any other widget in queries or JS objects. The following table lists all the binding properties.

| Binding Property   | Description                                                   |
| ------------------ | ------------------------------------------------------------- |
| **selectedMarker** | This contains the marker object selected by the user          |
| **markers**        | This contains the list of markers on the map                  |
| **isVisible**      | This property indicates whether the widget is visible or not. |

### Events

They are a set of actions that you can perform on the widget. The following table lists the actions:

| Events              | Description                                                                                                                                       |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| **onMarkerClick**   | Sets the action to be run when the user clicks a marker on the map. See a list of [supported actions](../appsmith-framework/widget-actions/).     |
| **onMarkerCreated** | Sets the action to be run when the user creates a new marker on the map. See a list of [supported actions](../appsmith-framework/widget-actions/) |

### Styles

Style properties allow you to change the look and feel of the widget.

| Styles            | Description                                            |
| ----------------- | ------------------------------------------------------ |
| **Border Radius** | Allows you to define curved corners.                   |
| **Box Shadow**    | Allows you to choose from the available shadow styles. |
