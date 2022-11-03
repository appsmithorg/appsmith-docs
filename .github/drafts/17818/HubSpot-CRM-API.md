# Settings User Provisioning

This document will explain step by step how to create and run all available HubSpot queries for HubSpot CRM.

For more information, consult official HubSpot API docs >> [HubSpot Docs](https://developers.hubspot.com/docs/api/crm/understanding-the-crm)

HubSpot official docs for final users >> [HubSpot Docs](https://developers.hubspot.com/docs/cms/data/crm-objects)

## Table of Contents

1. [BUG Fixed][List Objects](/HubSpotCRM#list-objects)
2. [BUG Fixed][Create Object](/HubSpotCRM#create-object)
3. [Read Object](/HubSpotCRM#read-object)
4. [ERROR Fixed][Update Object](/HubSpotCRM#update-object)
5. [Archive Object](/HubSpotCRM#archive-object)
6. [Error Fixed][Search Object](/HubSpotCRM#search-object)
7. [GDPR Delete](/HubSpotCRM#gdpr-delete)

### List Objects
1. Click in Queries/JS.
2. Select your HubSpot Data source.
3. Click on Commands.
4. Select CRM – List Objects.
5. Write the object to search list `contacts`
6. Click on the RUN button.
[Video Tutorial](https://www.loom.com/share/13166b3d234e458882da9af95e67dde8)

### Create Object
1. Click in Queries/JS.
2. Select your HubSpot Data source.
3. Click on Commands.
4. Select CRM – Create Object.
5. Click on the RUN button.
6. Write the type of object you are going to create `contacts`
7. Write the values of the object to create example:
   ```json
     {		                "company": "Biglytics2",		                "email": "bcooper24@biglytics.net",		                "firstname": "Bryan25",		                "lastname": "Cooper2",		                "phone": "(877) 929-0686",		                "website": "biglytics.net"			        }

   ```
8. Click on the RUN button.

[Video Tutorial](https://www.loom.com/share/61022e3ec7d34a2180b557acdf1e10eb)

### Read Object

1. Click in Queries/JS.
2. Select your HubSpot Data source.
3. Click on Commands.
4. Select CRM – Read Object.
5. In `Object Type` write the object to read
6. Click on the RUN button.
[Video Tutorial](https://www.loom.com/share/de289ef1d18d46a587ca459ffb294502)

### Update Object
1. Click in Queries/JS.
2. Select your HubSpot Data source.
3. Click on Commands.
4. Select CRM – Update Object
5. In `Object Type` write the object. `contacts`
6. In `Object ID` write the object to update. `351`
     -Write example:
      ```json
      {"company": "Biglytics",
       "email": "bcooper@biglytics.net",
       "firstname": "Bryan",
       "lastname": "Cooper",
       "phone": "(877) 929-0687",
       "website": "biglytics.net"}
      ```
7. Click on the RUN button.

[Video Tutorial](https://www.loom.com/share/48016e8f619144d8b8b5629b7396f140)


### Archive Object

1. Click in Queries/JS.
2. Select your HubSpot Data source.
3. Click on Commands.
4. Select CRM – Archive Object.
5. In `Object Type` write the object.
6. In `Object ID` write the object to Archive.
7. Click on the RUN button.

[Video Tutorial](https://www.loom.com/share/84e8069d90ed42d8b919d268be558f22)

### Search Object

1. Click in Queries/JS.
2. Select your HubSpot Data source.
3. Click on Commands.
4. Select CRM – Search Object
5. Write the type of object you will query `contacts`
6. Write the value to look for `Bryan`
7. Write in which property will be searched `firstname`
8. Write `EQ` in the logical operator
9. Write to sorts different sorting rules. exmp:
 ```json
   [
       {
        "propertyName": "createdate",
        "direction": "DESCENDING"
       }
   ]
 ```
 10. Write in query `b`
 11. Write the properties to be displayed exmp:
 ```json
    [ 
      "firstname",
      "hs_additional_emails",
      "phone",
      "fax",
      "mobilephone",
      "company",
      "email",
      "lastname" 
    ]
 ```
 12. Write the limit `1`
. Click on the RUN button.

[Video Tutorial](https://www.loom.com/share/1384ccd1ddab4b5bbbdc49b9b4a58cf0)


### GDPR Delete

1. Click in Queries/JS.
2. Select your HubSpot Data source.
3. Click on Commands.
4. Select CRM – GDPR Delete.
5. In `Object Type` write the object.
6. In `Object ID` write the object to Delete.
7. Click on the RUN button.

[Video Tutorial](https://www.loom.com/share/945c15d102de4326856e2cd082ede05d)