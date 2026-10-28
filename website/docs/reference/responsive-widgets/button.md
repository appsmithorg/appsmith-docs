---
title: Button (ALPHA)
sidebar_label: Button
hide_title: true
description: The Button widget runs an action when users click it, such as running a query or submitting a form.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Button (ALPHA)</h1>

<Tags
tags={[
{ name: "Business", link: "https://www.appsmith.com/pricing", additionalClass: "business" },
{ name: "Enterprise", link: "https://www.appsmith.com/pricing", additionalClass: "enterprise" }
]}
/>
</div>

<!-- vale on -->

:::caution Alpha feature: invite only
Responsive Widgets are in alpha and available by invitation only on Business and Enterprise plans. Behavior and properties may change. To request access, [open a support ticket](https://support.appsmith.com) and name the feature **Responsive Widgets (ALPHA)**.
:::

The Button widget runs an action when users click it. Use it to run a query, open a modal, or submit a form. It can also protect the action with Google reCAPTCHA.

Widget type: `WDS_BUTTON_WIDGET`

<ZoomImage src="/img/responsive-widgets/button.png" alt="Button widget in a Responsive app" caption="Button widget" />

## Content properties

These properties appear in the **Content** tab of the property pane.

### Basic

#### Label `string`

<dd>

Sets the text on the button. Default: `Do something`.

</dd>

### General

#### Tooltip `string`

<dd>

Shows helper text when users hover over the button.

</dd>

#### Visible `boolean`

<dd>

Controls whether the widget is visible. Default: on.

</dd>

#### Disabled `boolean`

<dd>

Stops users from clicking the button. Default: off.

</dd>

#### Animate loading `boolean`

<dd>

Controls the loading animation of the widget. Default: on.

</dd>

### Validation

This section is hidden on air-gapped instances.

#### Google reCAPTCHA key `string`

<dd>

Sets the Google reCAPTCHA site key for the button. When you set a key, the button gets a reCAPTCHA token before it runs **onClick**. You can read the token in the `recaptchaToken` reference property.

- With reCAPTCHA v3, if the key contains a double quote (`"`), the widget ignores it.
- If the key is wrong, or belongs to a different domain, the app shows an error message. The **onClick** action still runs.
- reCAPTCHA v3 loads its script from `https://www.google.com/recaptcha/api.js`.

</dd>

#### Google reCAPTCHA version `string`

<dd>

Sets the reCAPTCHA version. Options:

- **reCAPTCHA v3** (default)
- **reCAPTCHA v2**. The v2 check is invisible to users.

</dd>

### Form settings

These settings work when the button is inside a zone that has **Use as a form** turned on.

#### Disable when form invalid `boolean`

<dd>

Disables the button while any field in the form is invalid. Default: off.

</dd>

#### Reset form on success `boolean`

<dd>

Resets the form fields after the **onClick** action succeeds. If **onClick** is empty, the button resets the form when clicked. Default: off.

</dd>

## Style properties

These properties appear in the **Style** tab of the property pane.

### General

#### Button variant `string`

<dd>

Sets the look of the button. Options: **Filled** (default), **Outlined**, **Subtle**, **Ghost**.

Values for code: `filled`, `outlined`, `subtle`, `ghost`.

</dd>

#### Button color `string`

<dd>

Sets the semantic color of the button. Options: **Accent** (default), **Neutral**, **Positive**, **Negative**, **Warning**.

Values for code: `accent`, `neutral`, `positive`, `negative`, `warning`.

</dd>

### Icon

#### Select icon `string`

<dd>

Sets an icon to show on the button.

</dd>

#### Position `string`

<dd>

Sets where the icon appears. Options: start (default) or end. You cannot bind this property.

</dd>

## Reference properties

Reference properties let you read the widget's state in bindings and code, for example `{{Button1.isVisible}}`. You cannot set them directly.

#### isVisible `boolean`

<dd>

Shows whether the widget is visible.

*Example:*

```js
{{Button1.isVisible}}
```

</dd>

#### text `string`

<dd>

Holds the button label.

*Example:*

```js
{{Button1.text}}
```

</dd>

#### isDisabled `boolean`

<dd>

Shows whether the button is disabled.

*Example:*

```js
{{Button1.isDisabled}}
```

</dd>

#### recaptchaToken `string`

<dd>

Holds the reCAPTCHA token from the last click. It is empty until a reCAPTCHA check succeeds. Send it to your server to verify the user.

*Example:*

```js
{{Button1.recaptchaToken}}
```

</dd>

## Methods

Methods let you change the widget's properties from code, for example in a JS Object.

#### setVisibility (param: boolean): Promise

<dd>

Shows or hides the widget.

*Example:*

```js
Button1.setVisibility(false)
```

</dd>

#### setDisabled (param: boolean): Promise

<dd>

Turns the button on or off.

*Example:*

```js
Button1.setDisabled(true)
```

</dd>

#### setLabel (param: string): Promise

<dd>

Sets the button label.

*Example:*

```js
Button1.setLabel("Save")
```

</dd>

#### setColor (param: string): Promise

<dd>

Sets the button color. Use one of `accent`, `neutral`, `positive`, `negative`, or `warning`.

*Example:*

```js
Button1.setColor("negative")
```

</dd>

## Events

#### onClick

<dd>

Runs when users click the button. The button shows a loading state until the action finishes. If a reCAPTCHA key is set, the action runs after the token is ready.

</dd>
