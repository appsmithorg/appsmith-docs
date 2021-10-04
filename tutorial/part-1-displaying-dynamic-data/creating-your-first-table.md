# Creating your first page

Now that your environment – an “app” – is set up, you’re set to start doing work. 

Each application that you build in Appsmith, comprises of one or more pages. A page in Appsmith is where the three building blocks of your app - Widgets, APIs, and DB Queries come together to create a view. 

To view all the products at Oakry, we will create a page having a table that lists these products. A page was already created when you created a new page. Let's use the rename that page **Page1** to **ProductListPage**:

1. Click on **⋮** next to **Page1**
2. Choose **Edit Name**
3. Type **ProductListPage**

![](https://lh5.googleusercontent.com/0rI5_YOs-6SUuU5AKpCKQCio2Q6jqbyc1YZuoRr9zZ8Vfa3QsEq45ol0z6qFiD1bA5Fw_gN6UZgDLVmXRl9P5gSaarNSaXK8MK1AmqPaqYZ80i1v0wF58bMMNIqDil5FoI4tjvjv)

## Adding your first widget

The **ProductListPage** is blank. Let’s add a table-widget to it.

1. Navigate to **Product List → Widgets**
2. Click on **+**
3. Choose the **table widget** 
4. Drag and drop the table widget to the page on the right

This will create a new table. 

![](https://lh4.googleusercontent.com/p6VRCgNSNPxyq1IdSgVbU7oHE8fkTDmayGM-YPIuOBKHCzEhE2qYYaTyDQ6XyCG7xmQ6CoNlUCBTO6iat52sZqs8Ig8GzOLFpDF2_3GEXgGcSgwMmOuba5Pekv1ZY3roaOgr5EI0)

Let’s take a look at what you now see on screen:

* You can see that the table is populated with some default static data.
* You see a modal, titled **Table1**, open up on the right of the table. This modal is where you configure the widget’s properties. 
* The name **Table1** is the name of the table that we just created. It can be renamed to anything you like. Click on it to rename it to **Products\_Table**. The name property of a widget is its identifier. It is used to access its properties. Read about table-widget properties [here](https://docs.appsmith.com/widget-reference/table#properties). 
* The **Table Data** property in the modal defines what data will be displayed on the table. It is by default populated with default static data. The same data is displayed in the table. You can read about the table-widget's properties in the [Table widget reference](https://docs.appsmith.com/widget-reference/table).

{% hint style="info" %}
To open a widget’s properties:

1. Hover over it
2. Click on its name on the top right


{% hint style="info" %}
To rename a widget: 

1. Open the properties modal 
2. You’ll see the widget’s current name at the top 
3. Click on the name Type the new name 
4. Press Enter


|  |
| :--- |


Let’s play with **Table Data** to get a hang of how it affects the data displayed in the table:

1. Go to **Table Data** property of **Products\_Table**.
2. Go to the first object of the array.
3. Change the value of the key **“productName”** from **“Michael Lawson”** to **“New Name”**.
4. Verify that the **userName** column of the first row of the table now shows **New Name**.
5. Click on the **Deploy** button on the top right.

Open the application's URL in your web-browser. You can see the table like below:

![](https://lh4.googleusercontent.com/7e6zxV5LcEpGFtwTzunX7yy5xa8X20rsFqaLeIiOwYjOYmgorL2uPRFQqE64VxHh9Qfbs1BGHYlTUbM88XZ69bwNufya028cuasyvmZe2423hgc6fsLho4kfApo3TrqFjHoRUNmH)

|  |
| :--- |


{% hint style="info" %}
Auto-save:

Appsmith auto-saves changes in real-time so you never lose your work. However, the changes reflect in the application only after you deploy.


The table on your page shows static data right now. For your app to display product data from the database:

1. The first step is to set up the database query that fetches this data.
2. The second step is to configure the table to show the query's results

## Writing your first query

1. Click on **+** next to **DB Queries**
2. Choose **Mock Database**
3. Note that the **Mock Database** is a PostgreSQL database
4. Click on **New Query**
5. You’ll see a query created with the name **Query1**
6. Rename the query to **ProductsQuery**
7. Copy-paste the query shown below in the **Query** tab `SELECT "productId", "productName", "category", "mrp" FROM products ORDER BY "productId" LIMIT 100;`
8. Click on **Run**
9. Note the pop-up informing that the query ran successfully \[TODO: Figure how to move the query near point 7.\]

{% hint style="info" %}
Mock Database

Your Personal Organization comes with a pre-configured mock PostgreSQL Database called Mock Database. However, when you build your own app, you’ll connect to your own database. If you’re new to Appsmith, read [this](https://docs.appsmith.com/core-concepts/connecting-to-databases) to learn to configure a database of your choice.


## Displaying query results in a table

The next step is to display the query results in the table:

1. Navigate to **ProductListPage → Widgets → Products\_Table**
2. Open **Product\_Table’**s properties
3. Type the following in the Table Data property: `{{ProductsQuery.data}}`
4. Your table now displays ProductsQuery’s results
5. Click the Deploy button on top right. 
6. Click on the down arrow button next to the deploy button to get the URL of your app.

Visit the app URL with your web browser. You'll see a page displaying your query results in a table like below:  


![](https://lh5.googleusercontent.com/wjbhU2Nsq_tfEFoAsI4qEn60jo6E8dkySMMUqoV9h1IdfBJ9Ug48_EkI-LZVaRK3VB4ebTi0OTbYFczticODH13A-XWJi-qhE12Lhz8OSXnCvRDB6uqceArq3wDVZA5xOaQlAogK)

Let’s see how this works:

1. By using mustaches, you’re asking Appsmith to resolve anything within it as JavaScript code.
2. By using the query’s name within mustaches `{{ ProductsQuery }}`, you’re accessing the entire query object of **ProductsQuery**.
3. By calling the data function on **ProductsQuery**, you’re accessing its results. 
4. By setting the **Table Data** to `{{ ProductsQuery.data }}`, you’re telling **Products\_Table** to display the results of **ProductsQuery**.

Now let’s see what Appsmith is doing behind the scenes. To ensure that widgets always display the latest data, Appsmith runs the code within mustaches every time the page loads; and it runs it in the following sequence:

1. It looks for the query **ProductsQuery** within its parent page 
2. It runs query **ProductsQuery** 
3. Run code `ProductsQuery.data`
4. Render results of `ProductsQuery.data` in  **Products\_Table**

{% hint style="info" %}
Names & Scope:

All names within a page must be unique - be it widget names, query names, or API names. Any name is like a variable name of any programming language—it is a unique identifier, and it has a scope. Names in Appsmith are accessible from only within the page they're defined in.  


{% hint style="info" %}
Application Hosting your application:

By default, the deployed app is hosted on Appsmith's domain, i.e. app.appsmith.com. To host your app on your custom domain,  read the detailed steps [here](https://docs.appsmith.com/quick-start), depending on where you've set up Appsmith, 


## What's next?

When you’re comfortable with the basics of using a display-widget, setting up a DB query, and connecting the widget to display query results, read [part 2 ](https://app.gitbook.com/@appsmith/s/appsmith/~/drafts/-MNXsPmxVacsRbqB7S_f/v/v1.3/tutorial/part-2-creating-a-basic-form)of the tutorial to learn to use widgets that enable you to take and process user input.

