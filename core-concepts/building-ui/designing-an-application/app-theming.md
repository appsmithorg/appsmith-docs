# App Theming

App theming allows you to style your pages and [widgets](../../../reference/widgets/) using global controls, making it easy to change the visual layout with a single click.

Themes are application-level styles that apply to all the widgets linked to the theme properties.

{% hint style="warning" %}
All apps support theming, but for older apps, changing the theme or customizing the theme may not update the app entirely. This is to prevent overriding any changes you have already done by styling your widgets. If you still want to use themes in your existing application, please reset your widget's styles.
{% endhint %}

## Applying a Theme

Within apps, themes can be changed and customized using the "Theme properties" in the property pane when opening your app or when no widgets are selected.

Each app has an applied theme that can be modified. There are two ways you can modify an applied theme:

1. **Changing the theme** - You can change the theme from the saved list of themes or default themes.
2. **Customizing the theme** - The theme can be customized further based on the customization options available in theme properties.

## **Changing the theme**

You can browse the default themes or your saved themes by clicking the **Change Theme** button. Once you select the preferred theme, it is applied automatically. After the theme is applied, you can go back and customize it further.

You can choose to undo the applied theme if you don't like it.

## **Customizing the theme**

Once applied, you can customize the theme further by updating the following items:

1. **App font:** It changes the font family used in the app.
2. **Colors:**
   1. Primary Color - It applies to all the components/widgets in your app.
   2. Background Color - It changes the app's background color (canvas).
3. **App border radius:** It changes the default border-radius across all widgets. Currently, we support three different border radii by default.
4. **App box-shadow**: It changes the default box shadow for layout widgets like containers, forms ,and lists.

### **Saving the theme**

All changes made to the applied theme are auto-saved. However, you can save themes for re-using them later. Think of this as checkpointing a theme; it will help keep a safe version of the theme if you want to keep customizing your current theme.

You can view these themes from the theme list and choose to apply them when you wish to. You can also choose to delete a saved theme, which will have no impact on your application.

{% hint style="info" %}
When you apply a theme from the themes section and customize it, we create a copy and apply it to the app. It ensures that default themes are never overridden.
{% endhint %}

## **Impact of themes on a widget**

Within each widget's style properties, there are some properties that the theme can control. When you drag a new widget to the canvas, it will automatically sync with the theme values.

You can choose to override the values from the widget, and once you do, there is an indication with an "Orange dot" that the value has changed from the theme's value. You can go back to the theme's value using the "Reset value" icon present on the right end of the property.
