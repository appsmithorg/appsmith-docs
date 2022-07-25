# Docker

Follow **** the steps listed below to **upgrade** your **Community Edition (CE)** to a **Business Edition (EE)** installed on **docker:**

{% hint style="info" %}
These steps can be used to **upgrade** the **docker installations only**. You can also follow the steps below for **any docker-enabled instances**, including **** [**AWS AMI** ](../aws-ami.md)and [**Digital Ocean**](../digitalocean.md).
{% endhint %}

### **Step 1: Database Backup**

The Community and Business editions use Mongo DB, so you don't have to migrate the database. However, backup your **Community Edition** Mongo DB by following the [steps here](../instance-management.md#export-database).

{% hint style="info" %}
The database backup should be taken with the docker instance **up** and **running**.
{% endhint %}

### **Step 2: Update Image**

Navigate to the directory where the `docker-compose.yml` file is located. Open the `docker-compose.yml` file, and look for `image:` key. Update the image name to point to the Business Edition (BE) image. Update:

From CE Image:

```
services:
  appsmith:
    image: index.docker.io/appsmith/appsmith-ce
```

To EE Image:

```
services:
  appsmith:
    image: index.docker.io/appsmith/appsmith-ee
```

And save the file.

### **Step3: Add or Replace License Key**

Navigate to the directory where the `docker-compose.yml` file is located. Add/replace the Business Edition license key under the **environment** key and save the file.

{% hint style="warning" %}
Add the key **environment** to the `docker-compose.yml` file if **not** already present.
{% endhint %}

```
environment:
      - APPSMITH_LICENSE_KEY=<<< Enter your license key here >>>
```

### **Step 4: Add Keycloak Master Credentials**

Navigate to the directory where the `docker.env` file is located. In the `docker.env` file, add the below Keycloak master credentials and save the file.

```
KEYCLOAK_ADMIN_USERNAME=admin
KEYCLOAK_ADMIN_PASSWORD=<Add a generated password>
```

### Step 5: Recreate the Instance

You can recreate the instance by running the below command:

```
docker-compose up -d
```

Once the container is up and running, you have successfully upgraded the docker instance to the Business Edition.

You could verify that the business image (appsmith-ee) is in use with the help of the **** `docker ps` command.

### **Rollback (Optional)**

If you face issues during the upgrade process, you can contact support on:

* [Discord](https://discord.com/invite/rBTTVJp)
* [Email](mailto:support@appsmith.com)

You can also rollback to Community Edition while the team looks at the issues. Follow the below steps:

*   Stop the docker instance by using

    ```
    docker-compose down
    ```
* Navigate to the directory where the `docker.env` file is located. Remove the [Keycloak Master Credentials](docker.md#step-4-add-keycloak-master-credentials) from **the** `docker.env` file
* Navigate to the directory where the `docker-compose.yml` file is located. Remove the license key (APPSMITH\_LICENSE\_KEY)
* Update the image in the `docker-compose.yml` file from Business Edition to Community Edition.

From EE Image

```
services:
  appsmith:
    image: index.docker.io/appsmith/appsmith-ee
```

To CE Image

```
services:
  appsmith:
    image: index.docker.io/appsmith/appsmith-ce
```

* Recreate Instance by running the below command:

```
docker-compose up -d
```

* Restore the [database backup](docker.md#step-1-database-backup) you had taken at the start of the upgrade process by following the [steps here](../instance-management.md#import-database).
