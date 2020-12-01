# Displaying query results

The next step is to display the query results in the table. For that, you’ll set the Table Data property of the table to read the results of ProductsQuery. Follow the below steps:

1. Navigate to ProductListPage → Widgets → Products\_Table
2. Open Product\_Table’s properties
3. Type the following in the Table Data property: {{ProductsQuery.data}}
4. Your table now displays ProductsQuery’s results
5. Click the Deploy button on top right. 
6. Click on the down arrow button next to the deploy button to get the URL of your app.

Visit the app URL with your web browser. You'll see a page displaying your query results in a table like below:  


![](https://lh5.googleusercontent.com/wjbhU2Nsq_tfEFoAsI4qEn60jo6E8dkySMMUqoV9h1IdfBJ9Ug48_EkI-LZVaRK3VB4ebTi0OTbYFczticODH13A-XWJi-qhE12Lhz8OSXnCvRDB6uqceArq3wDVZA5xOaQlAogK)

Let’s see how this works:

1. By using mustaches, you’re asking Appsmith to resolve anything within it as JavaScript code.
2. By using the query’s name within mustaches {{ ProductsQuery }}, you’re accessing the entire query object of ProductsQuery.
3. By calling the data function on ProductsQuery, you’re accessing its results. 
4. By setting the Table Data to {{ ProductsQuery.data }}, you’re telling Products\_Table to display the results of ProductsQuery.

Now let’s see what Appsmith is doing behind the scenes. To ensure that widgets always display the latest data, Appsmith runs the code within mustaches every time the page loads; and it runs it in the following sequence:

1. It looks for the query ProductsQuery within its parent page 
2. It runs query ProductsQuery 
3. Run code ProductsQuery.data
4. Render results of ProductsQuery.data in Products\_Table

{% hint style="info" %}
Names & Scope:

All names within a page must be unique - be it widget names, query names, or API names. Any name is like a variable name of any programming language—it is a unique identifier, and it has a scope. Names in Appsmith are accessible from only within the page they're defined in.  
{% endhint %}

{% hint style="info" %}
Application Hosting:

By default, the deployed app is hosted on Appsmith's domain, i.e. app.appsmith.com. To host your app on your custom domain, read here. TODO: Add link here. Should cover whether custom possible in cloud, docker, etc.
{% endhint %}

When you’re comfortable with the basics of using a display-widget, setting up a DB query, and connecting the widget to display query results, read part 2 of the tutorial to learn to use widgets that enable you to take and process user-input.

