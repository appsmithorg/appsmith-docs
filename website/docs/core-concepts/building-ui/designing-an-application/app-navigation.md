# App Navigation

We have introduced new navigation styles - a better default [top navigation (stacked)](app-navigation.md#variant), a variant for the [top navigation (inline)](app-navigation.md#variant), and a [collapsible sidebar](app-navigation.md#orientation). You can now configure your app's navigation by opening the navigation settings tab inside the app settings pane. You'll also see a preview of how your app will look as you change and try out different options in the navigation settings.

<figure>
  <img src="/img/app-navigation-new-default.png" alt="The new default navigation - Top (Stacked)"/>
  <figcaption align="center"><i>The new default navigation - Top (Stacked)</i></figcaption>
</figure>

## Navigation settings

:::info
Configuring the navigation is an application level change, which means that the scope of the navigation settings configured will only apply to the application where these settings have been set, and not the entire workspace.
:::

You can configure the navigation for your app using -

- Open the `App settings`.
- Click on `Navigation`.
- Select the desired settings.
- The settings will auto save.

<figure>
  <img src="/img/app-navigation-settings.gif" alt="Changing navigation settings"/>
  <figcaption align="center"><i>Changing navigation settings</i></figcaption>
</figure>

### Configuration

The options available of configuring the navigation settings are as follows -

| Property         | Description                                                                                           | Default | Available Options                                                      |
| ---------------- | ----------------------------------------------------------------------------------------------------- | ------- | ---------------------------------------------------------------------- |
| Show navbar      | Toggles the visibility of the navbar. If turned off, the navbar won't be visible on the deployed app. | On      | -                                                                      |
| Orientation      | Changes if the navbar should be on top or side.                                                       | Top     | Top and Side. [Read more here.](app-navigation.md#orientation)         |
| Variant          | Only available when the orientation is set to Top. Available options are Stacked and Inline.          | Stacked | Stacked and Inline. [Read more here.](app-navigation.md#variant)       |
| Background color | Changes the background color of the navigation.                                                       | Light   | Light and Theme. [Read more here.](app-navigation.md#background-color) |
| Show sign in     | Toggles the visibility of the sign-in button when someone who is not logged in views the app.         | On      | -                                                                      |

### Available options

#### Orientation

1. **Top** - Shows the header and the navigation bar at the top of the app.
<figure>
  <img src="/img/app-navigation-top-stacked.png" alt="Top navigation"/>
  <figcaption align="center"><i>Top navigation</i></figcaption>
</figure>
2. **Side** - Shows a collapsible sidebar on the left side of the app.
<figure>
  <img src="/img/app-navigation-side.png" alt="Side navigation"/>
  <figcaption align="center"><i>Side navigation</i></figcaption>
</figure>

#### Variant

This option is only available when the orientation is set to *Top*.

1. **Stacked** - Shows the header (containing the application title, user dropdown, and share and edit buttons) and the navigation bar below that.
<figure>
  <img src="/img/app-navigation-top-stacked.png" alt="Top navigation with stacked variant"/>
  <figcaption align="center"><i>Top navigation with stacked variant</i></figcaption>
</figure>

2. **Inline** - The navigation bar is included in the header (containing the application title, user dropdown, and share and edit buttons).
<figure>
  <img src="/img/app-navigation-top-inline.png" alt="Top navigation with inline variant"/>
  <figcaption align="center"><i>Top navigation with inline variant</i></figcaption>
</figure>

#### Background color

1. **Light** - The background color is set to white.
<figure>
  <img src="/img/app-navigation-top-stacked.png" alt="Top navigation with background set to light"/>
  <figcaption align="center"><i>Top navigation with background set to light</i></figcaption>
</figure>

2. **Theme** - The background color is set to the primary theme color.
<figure>
  <img src="/img/app-navigation-theme.png" alt="Top navigation with background set to theme"/>
  <figcaption align="center"><i>Top navigation with background set to theme</i></figcaption>
</figure>

## Effect of theming on navigation

The [theme of the app](app-theming.md) defines the foundation styles for the navigation as it does with the rest of your application. This ensures that if you change your app's theme, the navigation will look like a native part of the app. Therefore, we inherit and use the primary color and border radius from your theme to style the buttons and links in the navigation.
