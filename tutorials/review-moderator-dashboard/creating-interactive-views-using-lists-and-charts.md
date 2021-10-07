---
description: Part Three of Review Moderator Tutorial
---

# Creating Interactive Views, Using Lists and Charts

## Storing Data in Appsmith Context Object

You are now almost ready with your super cool dashboard. Next, let's add a button that'll redirect to a new page. Also, on the new page, you would require the `business_id` to filter the reviews from the review table. Hence now store the value in Appsmith Context Object and use it as a reference. Follow the below steps:

1. Drag and drop a button widget under business details
2. Open the buttons property pane and change the label to `View Reviews`
3. Under Actions, toggle the JS button and paste the following code:

```javascript
{{
(function () {
    storeValue("business_id", businessTable.selectedRow.business_id);
    navigateTo("Business Reviews") })() 
}}
```

Awesome, you've successfully written your first JS function on Appsmith. As you can notice, these are primary Invoked functions, which means it runs as soon as it defines. Here inside the function, we've first used the `storeValue` method to store the business key from `businessTable` into the `business_id` variable. Next, you've used a `navigateTo` method to be able to redirect to a new page.

{% hint style="info" %}
To access widget's properties or an APIs/DB Query's results on another page, there are two ways:

1. Store the data in your browser cache using the[ storeValue function](https://docs.appsmith.com/function-reference/store-value) so that it's available for accessing even when the user moves to another page in your app.
2. Pass the data as a query param in the URL of the page you redirect the user to. This can be done using the[ navigateTo function](https://docs.appsmith.com/function-reference/navigateto).
{% endhint %}

![Storing Value and Redirecting to a Page](https://lh6.googleusercontent.com/fhRvo5jcgs7LOYIsmytxmhj0F2x9TnKiPUYB5_ElSCIA_qMlChit2Hr_BL9m8_i0fj8e1kbeGZ0CHP5KVMj5XC_8GS4ZV0r9TtfA4nKhFV1qbn_3AWPN9NFe2futv7wKrAItVxVA)

As you can see here, as soon as view click the button, it now navigates to a new Page! Also, we have the `business_id` saved from the selected row.

## Using Store Value in DB Queries

Now, let’s write one more DB query to filter the reviews from the reviews table based on the selected `business_id` by following the below steps:

1. First, click on the `+` icon next to the `Datasources`.
2. Find the created `Postgres Mock DB` datasource under the Active tab and click `NEW QUERY`.
3. Rename the query to `filterBusinessReviews`.
4. Now paste the following query on the query pane:

```sql
select * from yelp_review where business_id = {{appsmith.store.business_id}}
```

Here, we’re selecting all the rows from the `yelp_review` table and filtering them by the `business_id` variable you’ve saved in the appsmith store while navigating to the new page. Hence, you’ve used it for the WHERE clause using the moustache syntax. Now hit RUN!

{% hint style="info" %}
Tip: You can also run queries or APIs using `CMD + return` or `CTRL + enter` shortcuts on Appsmith!
{% endhint %}

By running the query, we can see all the reviews based on the selected business\_id, also, in the query properties tab, make sure you toggle the `Run query on page load` option.

![](https://lh5.googleusercontent.com/wqJ9SwtblDQw397mgyAv1ZzwFf6lUut_CHlx9QFhkVeTIbz2bhwD1mMNLN5bAkZQ207QIVXGz-IlwBZBDDoF5thWGTeVxSB2ovSJJFajtOH6d2LPt-MMvztGxiNHwayxU1ivG_sL)

Additionally, you’ll need to fetch `thebusiness` details again on this page, which makes it easier on dashboards to show complete details from a DB query. Follow the below steps:

1. First, click on the `+` icon next to the `Datasources`.
2. Find the created `Postgres Mock DB` datasource under the Active tab and click `NEW QUERY`.
3. Rename the query to `getBusinessDetails`.
4. Now paste the following query on the query pane:

```sql
select * from yelp_business where business_id={{appsmith.store.business_id}}
```

If you run this, you’ll only see one row that fetches all the business details from the business table based on the `business_id stored` inside the appsmith context object.

Now, let’s build a dashboard that will show all the reviews that are fetched from the reviews table.

1. First, drag and drop a container widget and rearrange it for the whole page.
2. Next, add a text widget and paste the following in the Value property pane:

```sql
Found {{filterBusinessReviews.data.length}} Reviews for {{getBusinessDetails.data[0].name}}
```

![](https://lh4.googleusercontent.com/azCYvUSRkqHgu7wChBeh7CspMfcQZoyxVV903H1MG2qD1FZB7EvCAlkjpWINkt6MCvTkaU4UGlwosULyF2xrecLmIX9g2ZE18I0ojMLU1E8pPX4unLC2ZnAhsvJilpwuGNs9TZHF)

## **Using List Widget to display the Reviews**

Now, lets us a List Widget to display all the reviews from the `filterBusinessReviews` query. Follow the below steps:

1. Drag and drop the list widget onto the canvas.
2. Bind the data from `filterBusinessReviews` onto the list widget.
3. For this, open the list widget property pane and paste the following in the `Items` property:

```text
{{filterBusinessReviews.data}}
```

1. Now, delete the data that’s already populated in the list widget and add a few text widgets.
2. You should notice that the widgets will be automatically added to the other items of the list widget.
3. Lastly, you can bind the Items into these widgets by using the `currentItem` property.
4. In the text widgets use the moustache syntax and bind the data like `{{currentItem.text}}`

Below is the GIF showing how you can bind data into the List widget:

![Using the List Widget](https://lh6.googleusercontent.com/9NYc90cu7lpMJAmyEHYY2uvvmdIkKfnn2NZlx4wMY_nN9WaQ2yNYeS3VLqY9HBzUa-4n2ZGNKKbaV1Hqoz0A-x2ERBGMpZ-kFIw6tr0wvLYBiJaSr567VSA4BusyM2SwE_HrurrN)

Excellent, now you can try displaying the rest of the data onto the list widget using the `currentItem` property.

## **Displaying Date**

Drag and drop a text widget onto the table, and add the following code snippet in the `Text` property from its property pane:

`currentItem.date`

Here, if you notice, the date isn’t in a readable way. You can use \`moment.js\` to transform this, which is already configured on Appsmith’s environment. Now update the value to the following:

```text
{{moment(currentItem.date).format("LL")}}
```

The date automatically formats based on the type we give in the `.format()` method.

## **Displaying Ratings**

After adding the date, we can bind the review text in one more text widget using the following `Text` value in the text widget inside the list widget.

`currentItem.text`

Next, add the reviews from the query by settings the following in the text widgets:

Stars Ratings: **``{{ `Stars: ${currentItem.stars}` }}``**

Funny Ratings: **``{{ `Funny: ${currentItem.funny}` }}``**

Useful Ratings: **``{{ `Useful: ${currentItem.useful}` }}``**

Cool Ratings: **``{{ `Cool: ${currentItem.cool}` }}``**

After finishing this, you can also customise the text widget, find the background-colour property in the text widget property pane, and add any background colours. Now, finally, this is how the app looks like:

![Customising the List Widget](https://lh3.googleusercontent.com/CFG4g63CO47naltKSacaa7DEDMXWShccKnsjK6CtZ0z1w5YthoFqeMX6U1YK5ipkg8SGIIBqrlUzkwgUQXnSkVp2wkhaAm2m_1wp3SxSFoZ2IDBQKm5Klayz4Bkc-pTJHmNrifaz)

## Adding Chart Widget

The chart widget on Appsmith is used to view the graphical representation of your data. It’s available in multiple configurations, however, if you want to do advanced visualisation, you can choose the custom configuration and use `Custom Fusion Chart Configuration`

{% hint style="info" %}
There are almost 100+ variants of Fusion Chart Configuration, learn more from the official docs[ here](https://www.fusioncharts.com/dev/chart-guide/list-of-charts/).
{% endhint %}

Now follow the below steps to create a chart for visualising the ratings of the business based on reviews.

1. Drag and drop a chart widget onto the canvas
2. Open the chart widget property pane and set the chart type to Line chart. 
3. Next, set the title as Star Ratings of Business and use the following code snippet to pass co-ordinated of chart data.

```text
{{filterBusinessReviews.data.map((item, index)=>{return {x:moment(item.date).format("L"), y:item.stars}})}}
```

Awesome! With this, you should be able to see all the data plotted on the chart widget. Similarly we can plot the other ratings by clicking on `ADD SERIES` option.

Below is the live link to the fully configured app.

{% embed url="https://app.appsmith.com/applications/60caeaa2d79dbb613bcb7761/pages/60caeaa2d79dbb613bcb7763" caption="" %}

## Sharing your Application

Let's deploy your app for the final time. Once deployed, you can share your deployed application with both internal and external users:

1. Click on the **"Share"** button on the top right
2. Invite a user using their email ID
3. Select an appropriate role for the user 
4. Share the application’s URL with the user

You can also make the application public, in which case, anyone with the URL to the application can view the application without having to sign in. You can read more about [access control here](https://docs.appsmith.com/core-concepts/access-control).

**What's next?**

The basic Catalog Dashboard is now up and running. This also marks the end of the beginner tutorial. At this point, you should know enough to start a project of your own and start fooling around. The following resources will come in handy as you need to learn new tricks:

* [Core Concepts](https://docs.appsmith.com/core-concepts/)
* [Widget Reference](https://docs.appsmith.com/widget-reference)
* [Function Reference](https://docs.appsmith.com/function-reference/)

