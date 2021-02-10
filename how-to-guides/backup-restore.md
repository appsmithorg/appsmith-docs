# Migrate between instances

**On the old VM:** 1. Dump the mongo data from the old VM via the command: `mongodump --uri "mongodb://<rootUsername>:<rootPassword>@localhost:27017/appsmith" --out=/tmp/appsmith-mongo-dump` 2. Copy the dump file to the new VM 3. Open the file `encryption.env` and note the values in this file. The values here are important for Appsmith to be able to read sensitive information in the new installation.

**On the new VM:** 1. Install Appsmith via the install.sh script. 2. Restore the dump on the newly created mongo container via the command: `mongorestore /tmp/appsmith-mongo-dump -d appsmith --uri=mongodb://<rootUsername>:<rootPassword>@localhost/appsmith` 5. Open the file `encryption.env` and change the variables `APPSMITH_ENCRYPTION_PASSWORD` & `APPSMITH_ENCRYPTION_SALT` to the same ones as the old VM. This is important because sensitive data in Mongo is encrypted using these credentials. Without this, you risk corrupting any passwords you've saved. 6. Restart the Appsmith system using the command: `sudo docker-compose down && sudo docker-compose up -d`

