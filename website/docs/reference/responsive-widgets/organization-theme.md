---
title: Organization Theme (ALPHA)
sidebar_label: Organization Theme
hide_title: true
description: Which Responsive apps follow the organization theme, which theme values Appsmith accepts, and what changes on upgrade.
toc_max_heading_level: 3
---

<!-- vale off -->

<div className="tag-wrapper">
 <h1>Organization Theme (ALPHA)</h1>

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

An instance administrator can set one theme for every Responsive app in the organization. Each Responsive app either follows the organization theme or uses its own theme. This page explains which apps follow the theme, which values the theme accepts, and what changes when you upgrade or roll back.

The organization theme applies only to Responsive apps. Fixed-layout apps never follow it and don't change.

## How apps follow the organization theme

When an app starts to follow the organization theme, Appsmith copies the theme values into the app once. While the organization theme is turned on, the app shows the organization theme. If an administrator turns the organization theme off later, the app keeps showing the values that were copied into it. These are the values from when the app started to follow, not later changes to the organization theme.

The way an app is created decides whether it follows the organization theme:

| How the app is created | Theme |
| --- | --- |
| New app | Follows the organization theme when the theme is turned on. Otherwise the app uses its own theme. |
| From a template | Follows the organization theme when the theme is turned on. |
| Imported as a new app, from a JSON file or Git | Follows the organization theme only if the file says the app follows it. The destination organization's theme values are then copied in, when that theme is turned on. Otherwise the app keeps the theme values in the file. |
| Built by the Appsmith MCP server | Follows the organization theme unless the app spec sets its own theme. The theme values are copied in when the organization theme is turned on. |
| Forked | Keeps the source app's theme, including whether it follows the organization theme. |
| Duplicated | Copies the source app's whole theme setting, including whether it follows the organization theme. |

A Git pull into an existing app keeps the theme values in the Git files, so pulling doesn't change those files.

An imported or forked app never fails because of its theme. If the app uses a font that isn't in the [list of fonts](#allowed-theme-values), Appsmith switches it to the system font.

### Switch an app between the organization theme and its own theme

- When you switch an app to its own theme, the app stops following the organization theme. Later changes to the organization theme don't reach it.
- When you switch an app back to the organization theme, Appsmith copies the current organization theme values into the app again, if the theme is turned on.

If the instance isn't licensed for Responsive apps, Appsmith ignores changes to the organization theme and to the custom CSS setting. It also keeps each app's font, and whether the app follows the organization theme, as they are. The other settings in the same save still apply.

## Allowed theme values

Appsmith checks every theme value when you save the organization theme. The **Key** column shows the name of each value in the [audit log](/advanced-concepts/audit-logs).

| Setting | Key | Allowed values |
| --- | --- | --- |
| Theme on or off | `enabled` | `true` or `false`. |
| Accent color | `accentColor` | A hex color, such as `#553DE9`. An `rgb()`, `rgba()`, `hsl()`, or `hsla()` color. A CSS named color, such as `teal`. `transparent` and `currentcolor` aren't allowed. |
| Color mode | `colorMode` | `LIGHT` or `DARK`. |
| Corners | `borderRadius` | `0px`, `8px`, or `20px`. |
| Density | `density` | `0.8`, `1`, or `1.2`. |
| Sizing | `sizing` | `0.8`, `1`, or `1.2`. |
| Font | `anvilFont` | One of the bundled fonts: `inter` (Inter), `roboto` (Roboto), `open-sans` (Open Sans), `montserrat` (Montserrat), `nunito` (Nunito), `raleway` (Raleway), `work-sans` (Work Sans), `dm-sans` (DM Sans), `source-sans-3` (Source Sans 3), or `plus-jakarta-sans` (Plus Jakarta Sans). If no font is set, apps use the system font. |
| App background | `appBackground` | A plain color, or a `linear-gradient()`, `radial-gradient()`, or `conic-gradient()` value. The `repeating-` forms are allowed too. |
| Maximum app width | `appMaxWidth` | `UNLIMITED`, `LARGE`, or `MEDIUM`. |

Appsmith also applies these rules:

- Accent color and app background values can't contain `url(`, `var(`, `expression(`, `;`, a backslash (`\`), or other tokens that load files or break out of a CSS value. Values that contain these are rejected.
- A value left blank counts as not set.
- Keys that aren't in the table are dropped.
- A save that sends back the same organization theme doesn't check the theme again, so other organization settings still save. A save that changes any theme value checks the whole theme, including values you didn't change.
- When you save an app's theme, Appsmith checks the font only if you changed it.

### Invalid theme value error

When a theme value breaks a rule, the save fails with error `AE-THM-4001`. The message names the setting and the rule, but doesn't repeat the value you entered. For example:

```
The theme value for accentColor is not valid. Use a hex, rgb(), rgba(), hsl(), hsla() or named color.
```

An app's theme gets the same error when you change its font to one that isn't in the list.

## Upgrade and rollback

When you upgrade to a version with the organization theme:

- The earlier instance-wide background for Responsive apps is no longer applied. To set a background for every Responsive app, set **App background** in the organization theme.
- Color and background values that contain `url()` no longer render.

You can roll back without any extra steps. Apps keep the theme values that were copied into them.
