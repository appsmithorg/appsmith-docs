# Migrate apps to a new instance

On Appsmith, you can migrate all Appsmith data from one instance to another or just migrate necessary applications. 

### **Steps to Migrate entire Appsmith Data onto instances:**

#### **Backup the old VM** 

1. Dump the mongo data from the old VM via the command: `mongodump --uri "mongodb://<rootUsername>:<rootPassword>@localhost:27017/appsmith" --out=/tmp/appsmith-mongo-dump` 

2. Copy the dump file to the new VM 

3. Open the file `encryption.env` and note the values in this file. The values here are important for Appsmith to be able to read sensitive information in the new installation.

## **Restore the backup on the new VM:** 

1. Install Appsmith via the install.sh script. 

2. Restore the dump on the newly created mongo container via the command: `mongorestore /tmp/appsmith-mongo-dump -d appsmith --uri=mongodb://<rootUsername>:<rootPassword>@localhost/appsmith` 

3. Open the file `encryption.env` and change the variables `APPSMITH_ENCRYPTION_PASSWORD` & `APPSMITH_ENCRYPTION_SALT` to the same ones as the old VM. This is important because sensitive data in Mongo is encrypted using these credentials. Without this, you risk corrupting any passwords you've saved. 

4. Restart the Appsmith system using the command: `sudo docker-compose down && sudo docker-compose up -d`

### Steps to migrate only particular applications onto instances:

Using this feature, you can now import or export desired application onto different Appsmith instances, follow the below steps:

1. Exporting Appsmith application from source: There is an option to export the application \(from source instance\), in the overflow menu from the application icon on the homepage. 
2. Import Appsmith application to the destination: To import the application to the destination instance, find the `import application` option on the overflow menu on the homepage beside the organization name.

![](../.gitbook/assets/import-export.gif)

