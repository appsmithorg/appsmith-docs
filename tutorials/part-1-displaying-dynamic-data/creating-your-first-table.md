# Creating your first table

In the following section, we will create a table to view the list of products. Let’s first rename **Page1** to **ProductListPage**:

1. Click on **⋮** next to **Page1**
2. Choose **Edit Name**
3. Type **ProductListPage**

![](https://lh5.googleusercontent.com/0rI5_YOs-6SUuU5AKpCKQCio2Q6jqbyc1YZuoRr9zZ8Vfa3QsEq45ol0z6qFiD1bA5Fw_gN6UZgDLVmXRl9P5gSaarNSaXK8MK1AmqPaqYZ80i1v0wF58bMMNIqDil5FoI4tjvjv)

The Product List page currently doesn’t have any widget. Let’s add a table widget to it.  


1. Navigate to **Product List → Widgets**
2. Click on **+**
3. Choose the **table widget** 
4. Drag and drop the table widget to the page on the right 

![](https://lh4.googleusercontent.com/p6VRCgNSNPxyq1IdSgVbU7oHE8fkTDmayGM-YPIuOBKHCzEhE2qYYaTyDQ6XyCG7xmQ6CoNlUCBTO6iat52sZqs8Ig8GzOLFpDF2_3GEXgGcSgwMmOuba5Pekv1ZY3roaOgr5EI0)

This will create a new table. Let’s take a look at what you now see on screen:

* You can see that the table is populated with some default static data.
* You see a modal, titled **Table1**, open up on the right of the table. This modal is where you configure the widget’s properties. 
* The name **Table1** is the name of the table that we just created. It can be renamed to anything you like. Click on it to rename it to **Products\_Table**. The name property of a widget is its identifier. It is used to access its properties. Read about table-widget properties [here](https://docs.appsmith.com/widget-reference/table#properties). 
* The **Table Data** property in the modal defines what data will be displayed on the table. It is by default populated with dummy data. The dummy data is also displayed in the table. You can read about the table-widget's properties in the [Table widget reference](https://docs.appsmith.com/widget-reference/table).

{% hint style="info" %}
Renaming a widget: 

1. Open the properties modal 
2. You’ll see the widget’s current name at the top 
3. Click on the name Type the new name 
4. Press Enter
{% endhint %}

|  |
| :--- |


Let’s play with Table Data to get a hang of how it affects the data displayed in the table:

1. Go to **Table Data** property of **Products\_Table**
2. Go to the first object of the array 
3. Change the value of the key **“productName”** from **“Michael Lawson”** to **“New Name”**
4. Verify that the **userName** column of the first row of the table now shows **New Name**

Let’s deploy the changes again, and view the application. You can see the table rendered on the web-page.

![](https://lh4.googleusercontent.com/7e6zxV5LcEpGFtwTzunX7yy5xa8X20rsFqaLeIiOwYjOYmgorL2uPRFQqE64VxHh9Qfbs1BGHYlTUbM88XZ69bwNufya028cuasyvmZe2423hgc6fsLho4kfApo3TrqFjHoRUNmH)

|  |
| :--- |


{% hint style="info" %}
Auto-save:

Appsmith auto-saves changes in real-time so you never lose your work. However, the changes reflect in the application only after you deploy.
{% endhint %}

The table on your page shows static data. For your Catalogue Dashboard app, you want it to display dynamic product data from the database. The first step is to set up the database query that fetches this data. 

