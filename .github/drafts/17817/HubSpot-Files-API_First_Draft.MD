
# Settings User Provisioning

This document will explain step by step how to create and run all available HubSpot queries for HubDB.

For more information, consult official HubSpot API docs >> [HubSpot Docs](https://developers.hubspot.com/docs/api/files/files)

HubSpot official docs for final users >> [HubSpot Docs](https://knowledge.hubspot.com/files/upload-files-to-use-in-your-hubspot-content)

## Table of Contents

1. [Import File](HubSpot-Files-API_First_Draft#import-file)
2. [Delete File](HubSpot-Files-API_First_Draft#delete-file)
3. [Get File](HubSpot-Files-API_First_Draft#get-file)
4. [Create Folder](HubSpot-Files-API_First_Draft#create-folder)
5. [Search File](HubSpot-Files-API_First_Draft#search-file)
6. Upload File (Not added due to #11983, Binary file uploading requires testing)
7. [Search Folder](HubSpot-Files-API_First_Draft#search-folder)
8. [Update Folder Properties](HubSpot-Files-API_First_Draft#update-folder-properties)
9. [Check Folder Update Status](HubSpot-Files-API_First_Draft#check-folder-update-status)
10. [Get Folder](HubSpot-Files-API_First_Draft#get-folder)
11. [Delete Folder](HubSpot-Files-API_First_Draft#delete-folder)

### Import File
1. Click in Queries/JS.
2. Select your HubSpot Data source.
3. Click on Commands.
4. Select Files – Import File
5. Write in Access `PUBLIC_INDEXABLE`
6. Write in Name `test`
7. Write in URL `https://23166390.fs1.hubspotusercontent-na1.net/hubfs/23166390/Appsmith/appsmith_logfile.log`
8. Write in Folder Path `test`
9. Write in Duplicate Validation Strategy `NONE`
10. Write in Duplicate Validation Scope `ENTIRE_PORTAL` or `EXACT_FOLDER`

[Video Tutorial](https://www.loom.com/share/56927da9a92b44f4938080523efa4ed9)
### Delete File

1. Click in Queries/JS.
2. Select your HubSpot Data source.
3. Click on Commands.
4. Select Files – Delete File
5. Type the ID of the file you want to delete.
6. Click on the RUN button.

[Video Tutorial](https://www.loom.com/share/16137649a54146848400811ba8e7c4ca)

### Get File

1. Click in Queries/JS.
2. Select your HubSpot Data source.
3. Click on Commands.
4. Select Files – Get File
5. Write the ID of the file you want to get.
6. Click on the RUN button.

[Video Tutorial](https://www.loom.com/share/f5f61a8476c2438d89864362df71c47f)

### Search File

1. Click in Queries/JS.
2. Select your HubSpot Data source.
3. Click on Commands.
4. Select Files – Search File
5. Let's leave all the entries blank
6. To filter a specific file, write the ID of the file in the input `ID`.
7. Click on the RUN button.

[Video Tutorial](https://www.loom.com/share/73b2cbf480e34f88bb19ff10bf033a19)

### Search Folder
1. Click in Queries/JS.
2. Select your HubSpot Data source.
3. Click on Commands.
4. Select Files – Search Folder
5. To get all existing folders, remove the values of all entries.
6. To get only the child folders of a folder, write the ID of the parent folder.
7. Click on the RUN button.

[Video Tutorial](https://www.loom.com/share/489c46de890d46ad924f73e6aefd5d85)

### Update Folder Properties
1. Click in Queries/JS.
2. Select your HubSpot Data source.
3. Click on Commands.
4. Select Files – Update Folder Properties
5. Write the ID of the folder to modify.
6. Write the new name of the folder
7. Write the new folder ID exp:`0`
8. Click on the RUN button.

[Video Tutorial](https://www.loom.com/share/0b513cdd1ea843f98bc5761949ec7300)

### Check Folder Update Status

1. Click in Queries/JS.
2. Select your HubSpot Data source.
3. Click on Commands.
4. Select Files – Check Folder Update Status
5. Paste the ID that is given when you update your folder.

[Video Tutorial](https://www.loom.com/share/6c277fc13f02471698787e13eefc3872)

### Create Folder

1. Click in Queries/JS.
2. Select your HubSpot Data source.
3. Click on Commands.
4. Select Files – Create Folder
5. Write the name of the folder
6. Write the path where the folder will be created `Do not place '/'`
7. Click on the RUN button.

[Video Tutorial](https://www.loom.com/share/3a0cd8f7dc6e457695da4d9bb0d86b6c)

### Get Folder

1. Click in Queries/JS.
2. Select your HubSpot Data source.
3. Click on Commands.
4. Select Files – Get Folder
5. Write the ID of the folder you want to get.
6. Click on the RUN button.

[Video Tutorial](https://www.loom.com/share/1e9d5ae361d647798d473c73789edf29)

### Delete Folder

1. Click in Queries/JS.
2. Select your HubSpot Data source.
3. Click on Commands.
4. Select Files – Delete Folder
5. Write the name of the folder
6. Click on the RUN button.

[Video Tutorial](https://www.loom.com/share/e025c0f6c48145e8b96e25f361c64551)