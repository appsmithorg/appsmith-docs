**What purpose do environments serve?**

While building apps, there is usually a clear distinction between the version of the app that end users see versus the version that is still under development/testing. Most pieces of software of reasonable complexity make this distinction clear by having different “environments” for development/testing and production use. This ensures that end users of the app are not impacted by changes which are still in development.

**What do environments mean on Appsmith?**

Appsmith allows you to define different environments for datasources. It allows you to switch between different environments as you develop your app in edit mode. By switching environments, you are applying the datasource configurations defined in that environment.

**What environments are available on Appsmith?**

Appsmith provides two environments out of the box - staging and production. Staging environment configurations should ideally point to data sources which are used for development, QA or user acceptance testing. Production environment configurations should point to data sources which have live, end-user facing data.

**How can I configure my environments?**

Environments can be configured by going to the create/edit datasource page. By default, all of the configuration values for a data source are shared across staging and production. If you want to have different values for staging and production, you can do so by going to the “manage environments” page. On this page, you can configure different values for any of the available fields for staging and production.

**How can I toggle between environments?**

In edit mode, you have the option to toggle between staging and production environments. You can find the toggle on the bottom right hand side of the screen.

Toggling between environments in edit mode will have no impact on the deployed instance of the app. However, toggling will impact all other users of the app who are using it in edit mode.

**Which environment is applied for production deployments?**

The deployed version of the app always uses the production environment. However, if the user has requisite permissions, they will be able to “apply” the staging environment configuration in view mode.

**Access controls**

You can specify access controls for the staging and production environments. For each of these environments, you can specify if the user can read the environment, update the environment and apply the environment configuration in edit/view modes.


----------------------------------------------------
# Multiple Environments Outline
--

## Introduction

Information about multiple environments

* **What are Multiple Environments?**

* **Why do we need Multiple Environments?**

* **What Environments are available on Appsmith?**  
Explain the differences between the production and staging environments.

  
## How to Configure an Environment  
This will be the main section of the document, where we will explain how users can configure environments.  
### Configure databases  
In this section, we will discuss how users can configure databases, like PostgreSQL,  
MongoDB, MySQL, etc. We will add videos, screenshots, and steps to setup the environment.

  
### Configure APIs  
In this section, we will discuss how users can configure APIs, like REST, GraphQL, Google Sheets, etc. We will add videos/ screenshots, and steps to setup the environment.

  
## Switch environments  
In this section, we will explain how users can switch between different environments. and discuss a few questions like: Which environment is applied for production deployments?

## Access control
Discuss access controls for the staging and production environments.