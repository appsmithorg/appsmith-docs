---
description: >-
  The tabs widget is a special widget that contains multiple containers. Tabs
  can be used to contextually show UI to a user based on their choices.
---

# Tabs

{% embed url="https://youtu.be/NLe0To\_fB7E" caption="" %}

## Creating Dynamic Views

You can create separate UIs in each tab container and dynamically switch between the containers by controlling the Default Tab property. The below code snippet demonstrates how you can control the selected tab based on the value the user sets in a dropdown

```text
{{ Dropdown1.selectedOption === "1" ? "Tab1" : "Tab2" }}
```

## Properties

| Internal Property | Description |
| :--- | :--- |
| **selectedTab** | Contains the id of the tab currently selected |

| Widget Property | Description |
| :--- | :--- |
| **Tabs** | This property lets you add and remove tabs from the widget. Tabs are uniquely identified by their tab names |
| **Default Tab** | This property selects the tab which matches the corresponding name |
| **Show Tabs** | This property hides / shows the tabs in the tab widget. It can be used to create the illusion of dynamically changing UI |
| **Scroll Contents** | This property enables scrolling within the contents of each tab |
| **Visible** | Controls widget's visibility on the page. When turned off, the widget will not be visible when the app is published |

| Events | Description |
| :--- | :--- |
| **onTabSelected** | Sets the action to be run when the user selects a tab. See a list of [supported actions](../core-concepts/writing-code/appsmith-framework.md) |

