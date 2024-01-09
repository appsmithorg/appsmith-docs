---
description: This page shows you how to build a custom navigation bar.
---

# Create Custom Navigation Bar
Custom navigation bars help you customize your navigation bar and add a nested menu. This page shows you steps to create a custom navigation bar.

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/HQlo5QgJJeUW6bGFS8F4?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

To create a custom navigation bar, follow these steps:
1. Create all the pages in the application you would like to display in the custom navigation bar.
2. In the first page of your app, add a Button Group widget to hold the menu items for the navigation bar. To rearrange the buttons and configure them, click the gear icon ⚙️ beside each button.
   You can later export the components of the navigation bar and use it in rest of the pages of your application.
3. To configure the nested menu for the nav bar, click the gear icon ⚙️ beside the Menu button of the Button Group.
4. Add the **Navigate to** action to the **OnClick** event of each button to navigate to the desired page.
   To add action to the **onClick** event of the Menu items, click the gear icon ⚙️ beside the menu item.
5. To export the navigation bar, click the menu icon (three dots) beside the page.
6. Select **Export** and then click the widgets you want to export.
7. Click **Export selected entities**. A JSON file gets downloaded with the selected widgets details.

   <ZoomImage src="/img/export-navbar.png" alt="Export nav bar" caption="Export nav bar"/>
   
8. Go to the page where you want to import the navigation bar and select the Menu icon (three dots) beside the page.
9. Select **Import**, and then select the downloaded JSON file. The navigation bar is now included in your page.

   <ZoomImage src="/img/import-nav-bar.png" alt="Import nav bar" caption="Import nav bar"/>
   

## See also
- [Navigate Between Pages](/build-apps/how-to-guides/navigate-between-pages)
- [Share Data Across Pages](/advanced-concepts/sharing-data-across-pages)
