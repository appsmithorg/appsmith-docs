
# Multiple Environments

Environments are container entities within a workspace that let you create different updates to different versions of your content types while still keeping them all in isolation. This process is often utilized when developing, identifying errors, or introducing new features without any concerns about how it might influence the current production.

:::info
Multiple Environments are only available on [Business Edition](https://www.appsmith.com/pricing). 
:::

Developers can run numerous tests in these environments to filter out bugs and raise the application's overall quality before deploying it to production. 

## Environments on Appsmith
There are two different environments that are available on Appsmith:

### Staging environment
Before launching an application, staging environments are created to evaluate builds, codes, and updates in an environment which is similar to a production environment. This is the area that developers take advantage of to inspect new aspects, debug, and explore their applications.

:::info
It's also referred to as the Testing or QA environment
:::
* The configuration values for a datasource are usually the same for staging and production. If you want to change them, you can go to the ```manage environments``` page and make the necessary adjustments.
* Integration testing frequently takes place in a staging environment.
* Each team member has a particular level of access to this collaborative workspace.


### Production environment
Once the latest software, services, or upgrades are ready for public use, they're pushed live to the users in a production environment. This is the final stage of production, where the end user can view, use, and interact with the new product.

* When deployed, the application always uses the production environment. However, if the user has requisite permissions, they can “apply” the staging environment configuration in view mode.
* Similar to a staging environment, each team member has a designated level of access to this environment.

This type of infrastructure makes it possible for teams to completely control the quality of their product releases. It encourages innovation and improvement, while ensuring efficient monitoring of the creation, testing, and deployment of a new product or updates. In addition, it guarantees the end user receives the best experience possible.

## How to configure an environment


With Appsmith, it's easy to set up staging and production environments. By default, all the configuration values for a datasource are shared between staging and production. If you have to configure different parameters for staging and production, follow the steps mentioned below:

### Configure environment for databases

![](/img/me-db-3.png)
![](/img/me-db-2.png)
//remove-above-images-and-add-videos

* On the Explorer tab, click the **+** sign next to datasources.
* Select a **Database**.
* Add the necessary information, such as host name, access key, username, and password, depending on the database.
* Click **Manage Environments** on the top-right corner.
* Set the parameters for the production and staging environments. 

You can set different values for each environment. For instance, if you have a Postgresql database with different configuration, you can select a particular environment and set the values.

//remove-below-images-and-add-videos
![](/img/me-db-1.png)

Once parameters are configured, **bind** the values. 


### Configure environment for APIs

//add video

//don't have figma files for APIs, so keeping the steps same

* On the Explorer tab, click the **+** sign next to datasources.
* Select a **API**.
* Add the necessary information, such as API key, headers, and body, depending on the datasource.
* Click **Manage Environments** on the top-right corner.
* Set the parameters for the production and staging environments. 

//add example and video for rest API

Once parameters are configured, **bind** the values. 

//info, add-google-sheet-example, as the google sheet is having different UI

//add example video for google sheets

## Switch environments

You can decide which environment to use when you are editing the app. In edit mode, you can switch between staging and production environments by using the **toggle** located on the **bottom right corner of the screen**. 

:::note
Already-deployed version of the app won't be impacted by this. However, any modifications you make may have an impact on other editors who are still working on the app.
:::
![](/img/switch-environments.png)
//Will update the image when DP is ready



## Access control

You can set up access controls for both the staging and production environments. For each, you can decide if a user can view the environment, modify it, and apply the environment configuration in edit/view modes.

//need more info and cross-link to RBAC. 