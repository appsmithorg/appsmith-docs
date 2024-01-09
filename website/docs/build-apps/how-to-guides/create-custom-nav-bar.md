---
description: This page shows you how to build a custom navigation bar.
---

# Create Custom Navigation Bar
A custom navigation bar improves the user experience in your application and allows you to structure it to make navigation easier. This page shows you steps to create a custom navigation bar.

<div style={{ position: "relative", paddingBottom: "calc(50.520833333333336% + 41px)", height: "0", width: "100%" }}>
  <iframe src="https://demo.arcade.software/HQlo5QgJJeUW6bGFS8F4?embed" frameborder="0" loading="lazy" webkitallowfullscreen mozallowfullscreen allowfullscreen style={{ position: "absolute", top: "0", left: "0", width: "100%", height: "100%", colorScheme: "light" }} title="Appsmith | Connect Data">
  </iframe>
</div>

## Create and export navigation bar
1. Create a new page in your application for the navigation bar.
2. Add a Container to your page and design it by adding Buttons to create a navigation bar. 
   To add a nested menu to the navigation bar, add Menu Buttons and then add **Menu items**.
3. Add the **Navigate to** action to the **OnClick** event of each button to navigate to the desired page.
   To add action to the **onClick** event of the Menu items, click the gear icon ⚙️ beside the menu item.
4. To export the navigation bar, select the menu icon (three dots) beside the page created in Step 1.
5. Select **Export** and then select the widgets you want to export.
6. Click **Export selected entities**.

   <ZoomImage src="/img/export-navbar.png" alt="Export nav bar" caption="Export nav bar"/>

   A JSON file gets downloaded with the widgets details.
7. Go to the page where you want to import the navigation bar and select the Menu icon (three dots) beside the page.
8. Select **Import**, and then select the downloaded JSON file.

   <ZoomImage src="/img/import-nav-bar.png" alt="Import nav bar" caption="Import nav bar"/>

   The navigation bar is now included in your page.

## See also
- [Navigate Between Pages](/build-apps/how-to-guides/navigate-between-pages)
- [Share Data Across Pages](/advanced-concepts/sharing-data-across-pages)
