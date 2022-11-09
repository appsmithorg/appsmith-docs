# Settings User Provisioning

This document will explain step by step how to create and run all available HubSpot queries for HubDB.

For more information, consult official HubSpot API docs >> [HubSpot Docs](https://developers.hubspot.com/docs/api/cms/hubdb)

HubSpot official docs for final users >> [HubSpot Docs](https://developers.hubspot.com/docs/cms/data/hubdb)

## Table of Contents

1. [Get Published Tables](/HubDB#get-published-tables)
2. [Create Table](/HubDB#add-user#create-table)
3. [Get Details of a Published Table](/HubDB#get-details-of-a-published-table)
4. [Archive Table](/HubDB#archive-table)
5. [Update Existing Table](/HubDB#update-existing-table)
6. [Clone Table](/HubDB#clone-table)
7. [Export Published Version Table](/HubDB#export-published-version-table)
8. [Unpublish Table](/HubDB#unpublish-table)
9. [Get Table Rows](/HubDB#get-table-rows)
10. [Add New Table Row](/HubDB#add-new-table-row)
11. [Get Table Row](/HubDB#get-table-row)
12. [Update Existing Row](/HubDB#update-existing-row)
13. [Replace Existing Archive](/TableubDB#replace-existing-archive)
14. [Permanently Delete Row](/HubDB#Permanently-delete-row)
15. [Clone Row](/HUbDB#clone-row)
16. [Get Set Rows](/HubDB#get-set-rows)
17. [Permanently Delete Rows](/HubDB#permanently-delete-rows)


### Get Published Tables

1. Click in Queries/JS.
2. Select your HubSpot Data source.
3. Click on Commands.
4. Select HubDB – Get Published Tables.
5. Click on the RUN button.

[Video Tutorial](https://www.loom.com/share/02328b092ad24d529bf4e9f09ed1a50e)


### Create Table


1. Click in Queries/JS.
2. Select your HubSpot Data source.
3. Click on Commands.
4. Select HubDB – Create Table.
5. Write the name of the table
6. Write the Label of the resulting table.
7. Write the List of columns in the table.
    -Write example:
      ```json
      {"name": "text_column",
      "label": "Text Column",
      "id": 2,
      "type": "TEXT"}
      ```
8. Click on the RUN button.

[Video Tutorial](https://www.udrop.com/7wM3/Create_Table.mkv)

### Get Details of a Published Table

1. Click in Queries/JS.
2. Select your HubSpot Data source.
3. Click on Commands.
4. Select HubDB – Get Details of a Published Table.
5. Write the name of the table you want to see.
6. Click on the RUN button.

[Video Tutorial](https://www.loom.com/share/8ed546e8506e46299a682962ce9bafd6)

### Archive Table

1. Click in Queries/JS.
2. Select your HubSpot Data source.
3. Click on Commands.
4. Select HubDB – Archive Table.
5. Type the name for the table you want to archive.
6. Click on the RUN button.

[Video Tutorial](https://www.loom.com/share/9eb2606a99444a6db0d498527b34556e)

### Update Existing Table

1. Click in Queries/JS.
2. Select your HubSpot Data source.
3. Click on Commands.
4. Select HubDB - Update Existing Table.
5. Write the name of the table to update in `Table ID or Name.`
6. Write the value of the resulting table in `Name` example:`test_table_new`
7. Write the value of the resulting table in `Label` example:`Test Table New`
8. In Enable `Child Table Pages` escribe el valor `true` 

[Video Tutorial](https://www.udrop.com/7wMb/Update_Existing_Table.mk)

### Clone Table

1. Click in Queries/JS.
2. Select your HubSpot Data source.
3. Click on Commands.
4. Select HubDB - Clone Table.
5. Write the name or id of the table you want to clone in `Table ID or Name.`
6. Write the name of the cloned table in `New Name`
7. Write the label of the cloned table in `New Label`
8. Click on the RUN button.

[Video Tutorial](https://www.udrop.com/7wM5/Clone_Table.mkv)

### Export Published Version Table

1. Click in Queries/JS.
2. Select your HubSpot Data source.
3. Click on Commands.
4. Select HubDB - Export Published Version Table.
5. Write the format in which you want to export the table
6. Write the name of the table to export in `Table ID or Name.`
7. Click on the RUN button.

[Video Tutorial](https://www.loom.com/share/a66ae90565cf4adaab64f87bb2055977)

### Unpublish Table

1. Click in Queries/JS.
2. Select your HubSpot Data source.
3. Click on Commands.
4. Select HubDB - Unpublish Table.
5. Write the name of the table to Unpublish in `Table ID or Name.`
6. Click on the RUN button.

[Video Tutorial](https://www.loom.com/share/75ab0c76623d4124b3ab76f0c4b30cc2)


### Get Table Rows

1. Click in Queries/JS.
2. Select your HubSpot Data source.
3. Click on Commands.
4. Select HubDB - Get Table Rows.
5. Write the name of the table to get rows in `Table ID or Name.`
6. Click on the RUN button.

[Video Tutorial](https://www.loom.com/share/1d12370ebcfb4f1191a8c9956f6b55b9)

### Add New Table Row

1. Click in Queries/JS.
2. Select your HubSpot Data source.
3. Click on Commands.
4. Select HubDB - Add New Table Row.
5. Write the name of the table to add rows in `Table ID or Name.`
6. Write the name of the route.
7. Write the Value for the hs_name column. in the `name`
8. Write the values as in the example below
    ```json
    {    "text_column": "sample text value",  
         "multiselect": [{"id": "1",
                          "name": "Option 1",
                          "type": "option",
                          "order": 0},
                         {"id": "2",
                          "name": "Option 2",
                          "type": "option",
                          "order": 1}]
    }
    ```

    [Video Tutorial](https://www.udrop.com/7wM4/Add_new_table_row.mkv)
### Get Table Row

1. Click in Queries/JS.
2. Select your HubSpot Data source.
3. Click on Commands.
4. Select HubDB - Get Table Row.
5. Write the name of the table to Get Row in `Table ID or Name.`
6. Click on the RUN button.

[Video Tutorial](https://www.loom.com/share/652a132103464cb8b25f1d1e51e95a7a)

### Update Existing Row

1. Click in Queries/JS.
2. Select your HubSpot Data source.
3. Click on Commands.
4. Select HubDB - Update Existing Row.
5. Write the name of the table to Update Row in `Table ID or Name.`
6. Write a path in `Path`
7. 
7. Write a child table ID in `Child Table ID`
8. Write values in `Values`
    -Write example: 
       ```json
            {    "text_column": "sample text value",
                 "multiselect": [{"id": "1",
                                 "name": "Option 1",        
                                 "type": "option",       
                                  "order": 0      },  
                                 {"id": "2",        
                                 "name": "Option 2",        
                                 "type": "option",        
                                 "order": 1}]  
          }
       ```

[Video Tutorial](https://www.udrop.com/7wM9/Update_Existing_Row.mkv)
9. Click on the RUN button.

### Replace Existing row

1. Click in Queries/JS.
2. Select your HubSpot Data source.
3. Click on Commands.
4. Select HubDB - Replace Existing Archive
5. Write the name of the table to Replace Existing Archive in `Table ID or Name.`
6. Write the row ID in `Row ID`
7. Write a path in `Path`
8. Write a name in `Name`
9. Write a Child Table ID `Child Table ID`
10. Write values in `Values`
    -Write example: 
       ```json
            {"text_column": "sample text value",
                             "multiselect": [{"id": "1",
                                              "name": "Option 1",                                         "type": "option",                                         "order": 0      },
                                              {"id": "2",                                         
                                              "name": "Option 2",                                         "type": "option",                                         "order": 1}]}
       ```
[Video Tutorial](https://www.udrop.com/7wMa/Replace_Existing_Row.mkv)
11. Click on the RUN button.



### Clone Row
1. Click in Queries/JS.
2. Select your HubSpot Data source.
3. Click on Commands.
4. Select HubDB - Clone Row
5. Write the name of the table to clone row`Table ID or Name.`
6. Write the name row ID for the clone.
7. Click on the RUN button.

[Video Tutorial](https://www.loom.com/share/6c69140163d24e53b362be7f5d1b30bb)


### Permanently Delete Row

1. Click in Queries/JS.
2. Select your HubSpot Data source.
3. Click on Commands.
4. Select HubDB - Permanently Delete Row
5. Write the name of the table to Permanently Delete Row in `Table ID or Name.`
6. Write the name row ID for the permanently delete.
7. Click on the RUN button

[Video Tutorial](https://www.loom.com/share/697c46e3580f44e5b290f6ca3919f9c2)

### Get Set Rows

1. Click in Queries/JS.
2. Select your HubSpot Data source.
3. Click on Commands.
4. Select HubDB - Get Set Rows
5. Write the name of the table to get set rows in `Table ID or Name.`
6. Write the List with row IDs
     ```json
         ["90463600182", "90558470529"]
     ```
7. Click on the RUN button.

[Video Tutorial](https://www.udrop.com/7wM6/Get_Set_Rows.mkv)

### Permanently Delete Rows

1. Click in Queries/JS.
2. Select your HubSpot Data source.
3. Click on Commands.
4. Select HubDB - Permanently Delete Rows
5. Write the name of the table in `Table ID or Name.`
6. Write the List with row IDs for Permanently Delete.
7. Click on the RUN button.

[Video Tutorial](https://www.udrop.com/7wM8/Permanently_Delete_Rows.mkv)

