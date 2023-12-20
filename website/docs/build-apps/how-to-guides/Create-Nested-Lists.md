# Create Nested Lists

You can nest lists within a List widget up to three levels. The **level_*** property can be used to access the parent List item's data and widget properties where * represents the level number (from 1 through 3).

Suppose there is a parent list - `parentList`, and a child list - `childList1`. The widgets present in the inner list `childList1` can access the values of an attribute/field in the dataset using the **currentItem** property of the outer list `parentList` as shown below:

```javascript
{{level_1.currentItem.fieldName}}
```


You can use the **currentView** and **currentIndex** properties similarly.

Suppose there is another List widget `childList2` inside `childList1`. The innermost list, `childList2` can access two levels - **level_1** and **level_2**. Here, **level_1** represents the data and state of the topmost list widget, `parentList` and **level_2** represents `childList1`.

The parent list widgets don't have access to it's child list widgets. In the preceding example, the widgets in `childList1` can't use `level_2` or `level_3` to access the data in it child lists. Similarly, `childList1` can only access `level_1` and not `level_2`, but `childList2` can access both `level_1` and `level_2`.
