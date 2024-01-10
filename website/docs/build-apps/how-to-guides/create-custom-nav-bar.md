---
description: This page shows you how to build a custom navigation bar.
---

# Create Custom Navigation Bar
Custom navigation bars help you customize the menu items and group the related menu items together, enabling you to create a user-friendly experience and making it easier for users to find what they're looking for. This page shows you steps to create a custom navigation bar.

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/suRpjEoLqqohjO3q24ug?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

To create a custom navigation bar, follow these steps:
1. Create all the pages in the application you would like to display in the custom navigation bar.
2. On the first page of your app, add a Button Group widget to hold the menu items for the navigation bar. To rearrange and configure the buttons, click the gear icon ⚙️ beside each button. You can later export the components of the navigation bar and use it in the rest of your application's pages.
3. To configure the nested menu for the nav bar, click the gear icon ⚙️ beside the Menu button of the Button Group.
4. Add the **Navigate to** action to the **OnClick** event of each button to navigate to the desired page. To add action to the **onClick** event of the Menu items, click the gear icon ⚙️ beside the menu item.
5. To export the navigation bar, click the menu icon (three dots) beside the page.
6. Select Export and then click the widgets you want to export.

    <ZoomImage src="/img/export-navbar.png" alt="Export nav bar" caption="Export nav bar"/>

7. Click Export selected entities. The system downloads a JSON file containing the chosen widget details.
8. Go to the page where you want to import the navigation bar and select the Menu icon (three dots) beside the page.
9. Select **Import**, and then select the downloaded JSON file. Your page now includes the navigation bar.

## See also
- [Navigate Between Pages](/build-apps/how-to-guides/navigate-between-pages)
- [Share Data Across Pages](/advanced-concepts/sharing-data-across-pages)
