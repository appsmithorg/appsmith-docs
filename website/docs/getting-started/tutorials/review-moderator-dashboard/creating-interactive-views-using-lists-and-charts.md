---
description: >-
  In this final part of the tutorial, you'll learn how to build an interactive
  UI using widgets like buttons, lists, charts, and more.
sidebar_position: 4

---

# Creating Interactive Views

### Storing Data in Appsmith Context Object

You are now almost ready with your super cool dashboard. To make your app more interactive, add another page that shows reviews of that particular business.

 Start by adding a button that'll redirect to a new page. Also, on the new page, you would require the **`business_id`** to filter the reviews from the review table. Hence, now store the value in the [Appsmith Context Object ](/reference/appsmith-framework/context-object)and use it as a reference. Follow the instructions below:

<VideoEmbed host="youtube" videoId="7xQid95aHuM" title="Storing Value and Redirecting to a Page" caption="Storing Value and Redirecting to a Page"/>

1. Drag and drop a **button widget** under business details.
2. Open the buttons property pane and change the label to **View Re**views.
3. Under Actions, go to the onClick event and **toggle the JS button and paste the following code:**

```
{{
(function () {
    storeValue("business_id", businessTable.selectedRow.business_id);
    navigateTo("Business Reviews") })() 
}}
```

Awesome, you've successfully written your first JS function on Appsmith. As you can notice, these are primary Invoked functions, which means it runs as soon as it defined. Inside the function, use the **`storeValue`** method to store the business key from `businessTable` into the **`business_id`** variable. Next, you've used a **`navigateTo`** method to be able to redirect to a new page.

Now create a new page and name it "Business Reviews". So, when you click the button, it takes you to a page called **"Business Reviews."**

As you can see here, as soon as the viewer clicks the button, it now navigates to a new Page. Also, you have the **`business_id`** saved from the selected row.

### Using Store Value in DB Queries

Now, to fetch review data, write a query for the **Business Reviews Page** that filters the reviews from the reviews table based on the selected business\_id by following the below steps:

<VideoEmbed host="youtube" videoId="7hQqJ2Cfj5o" title="Writing a query for Business Reviews Page" caption="Writing a query for Business Reviews Page"/>

1. Find and select **Postgres Mock DB** data source under the Explorer tab.
2. Click **`NEW QUERY`** on the top-right corner.
3. Rename the query to **`filterBusinessReviews`**.
4. Now paste the following query on the query pane:

```
select * from yelp_reviews where business_id = {{appsmith.store.business_id}}
```

:::info
Make sure you perform this query for the "Business Reviews" page.
:::

You're selecting all the rows from the **`yelp_review`** table and filtering them by the **`business_id`** variable you've saved in the appsmith store while navigating to the new page. Hence, you've used it for the WHERE clause using the mustache syntax. **Now hit RUN.**

By running the query, you can see all the reviews based on the selected **`business_id`** . In the query settings tab, make sure you toggle the **Run query on the page load option.**

Additionally, you'll need to **fetch the business details again on this page**, making it easier on dashboards to show complete details from a DB query. Follow the below steps:

1. Find the created **Postgres Mock DB** data source under the Explorer tab and click **NEW QUER**Y.
2. Rename the query to **`getBusinessDetails`**.
3. Now paste the following query on the query pane:

```
select * from yelp_business where business_id={{appsmith.store.business_id}}
```

If you run this, you'll only see one row that fetches all the business details from the business table based on the **`business_id`** stored inside the appsmith context object.

Now, build a dashboard that shows all the reviews fetched from the reviews table.

<VideoEmbed host="youtube" videoId="dFcX2fs38ak" title="Creating a UI for the Business Reviews Page" caption="Creating a UI for the Business Reviews Page"/>

1. First, drag and drop a container widget and rearrange it for the whole page.
2. Next, add a text widget and paste the following in the Value property pane:

```
Found {{filterBusinessReviews.data.length}} Reviews for {{getBusinessDetails.data[0].name}}
```

3\. Add a few text widgets to display the business name and the business ID. The below query can be used to add a name. You can use a business id or any other value in place of a name.

```
To get name - {{getBusinessDetails.data[0].name}}

To get business_id-{{getBusinessDetails.data[0].business_id}}
```

:::info
Tip: You can also run queries or APIs using `CMD + return` or `CTRL + enter` shortcuts on Appsmith!
:::

### **Using List Widget to display the Reviews**

Now display all the reviews in the [list view](/reference/widgets/list). List widget provides you with out-of-the-box capability to iterate over a structured data collection. The datasets can be static or generated by the response from API/queries.

Now, use a List Widget to display all the reviews from the filterBusinessReviews query. Follow the below steps:

1. Drag and drop the **list widget** onto the canvas.
2. Bind the data from **`filterBusinessReviews`** on the list widget.
3. Open the list widget property pane and paste the following into the **Items**.

```
{{filterBusinessReviews.data}}
```

Now, customize the list view according to your needs and remove the items you don't need in the list view.

1. Delete the already populated data in the list widget and add a few text widgets inside the list view.
2. You should notice that the widgets are automatically added to the other items of the list widget.
3. You can bind the Items into these widgets by using the **`currentItem`** property.
4. In the text, widgets use the mustache syntax and bind the data like `{{currentItem.text}}`.
5. Now, in the overflow setting, change it to "scroll contents". So this makes the text view scrollable.

<VideoEmbed host="youtube" videoId="e4f1QMq2zoA" title="Using the List Widget" caption="Using the List Widget"/>

Now you can try displaying the rest of the data onto the list widget using the `currentItem` property.

### **Displaying Date**

Now make the list view even more intuitive. Drag and drop a text widget onto the table, and add the following code snippet in the Text property from its property pane:

```
{{currentItem.date}}
```

Here, if you notice, the date isn't in a readable way. You can use `` `moment.js` `` to transform this, which is already configured on Appsmith's environment. Now update the value to the following:

```
{{moment(currentItem.date).format("LL")}}
```

The date automatically formats based on the type give in the `.format()` method.

### **Displaying Ratings**

Display the reviews in a colorful way. Add a few text widgets inside the list view.

Next, add the reviews from the query by settings the following in the text widgets:

```
Stars Ratings: {{ `Stars: ${currentItem.stars}` }}

Funny Ratings: {{ `Funny: ${currentItem.funny}` }}

Useful Ratings: {{ `Useful: ${currentItem.useful}` }}

Cool Ratings: {{ `Cool: ${currentItem.cool}` }}
```

After finishing this, you can customize the text widget, find the background-color property in the text widget property pane, and add any background colors. Now, finally, this is what the app looks like:

![Customizing the List Widget](/img/issue_12550_img4.png)

### Adding chart widget

The chart widget on Appsmith is used to view the graphical representation of your data. It's available in multiple configurations; however, if you want to do advanced visualization, you can choose the custom configuration and use `Custom Fusion Chart Configuration.`

:::info
There are almost 100+ variants of Fusion Chart Configuration; learn more from the official docs[ here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts/).
:::

Appsmith uses the Chart Series property head to supply the data and details related to identifying the data points.

* `Series Title` - the name of the series.
* `Series Data` - stores the data points for the total bugs.
* `X-axis Label` - to define a title for the x-axis.
* `Y-axis Label` - to define a title for the y-axis

Now, follow the below steps to create a chart for visualizing the ratings of the business based on reviews.

<VideoEmbed host="youtube" videoId="ujmjVmkSO9c" title="Adding Chart Widget" caption="Adding Chart Widget"/>

1. Drag and drop a **chart widget** onto the canvas.
2. Open the chart widget property pane and set the chart type to **Line chart**.
3. Next, set the title as **Star Ratings of Business** and use the following code snippet to pass coordinated chart data.

```
{{filterBusinessReviews.data.map((item, index)=>{return {x:moment(item.date).format("L"), y:item.stars}})}}
```

Awesome! You should see all the data plotted on the chart widget. Similarly, you can plot the other ratings by clicking on the **`ADD SERIES`** option. The video below demonstrates how to add series to your chart.

<VideoEmbed host="youtube" videoId="fIBjUCBL6wA" title="Customizing Chart Widget" caption="Customizing Chart Widget"/>

With that, you have created an interactive and beautiful dashboard on Appsmith.

Below is the live link to the fully configured app.
<a  href="https://app.appsmith.com/applications/60caeaa2d79dbb613bcb7761/pages/60caeaa2d79dbb613bcb7763" target="_blank"><button name="button" style = {{color: '#ff6d2c'}}>View App in New Tab</button></a>
<br/>
<figure>
  <object data="https://app.appsmith.com/applications/60caeaa2d79dbb613bcb7761/pages/60caeaa2d79dbb613bcb7763" width='800px' height='480px'></object> 
   <figcaption align="center"><i>Dasbhboard on Appsmith</i></figcaption>
</figure>

### Sharing your application

Deploy your app for the final time. Once deployed, you can share your deployed application with both internal and external users:

1. Click on the **"Share"** button on the top right
2. Invite a user using their email ID
3. Select an appropriate role for the user
4. Share the application's URL with the user

You can also make the application public. In that case, anyone with the URL to the application can view the application without signing in. You can read more about [Make applications public](advanced-concepts/invite-users#make-application-public).

## **What's next**

The basic Review Moderator Dashboard is now up and running. It also marks the end of the beginner tutorial. At this point, you should know enough to start a project of your own and start fooling around. The following resources will come in handy as you need to learn new tricks:

* [Widgets](/reference/widgets/)
* [Datasource Reference](/connect-data/reference)
* [Appsmith Framework](/reference/appsmith-framework/)
* [JavaScript Editor](/core-concepts/writing-code/javascript-editor-beta/)
