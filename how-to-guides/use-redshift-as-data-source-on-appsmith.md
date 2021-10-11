---
description: >-
  Guide on how to use Redshift as a Data Source on Appsmith
---

# How to use Redshift as a Data Source on Appsmith

The guide presumes that you are familiar with the basic core concepts of [Appsmith](https://www.appsmith.com/) and builds further on integrating Appsmith with other tools. In case you don't have much understanding of the [core concepts](../core-concepts/connecting-to-data-sources/) of Appsmith, it is recommended to create an account and try applying implementing them.

## Redshift

Redshift, or Amazon Redshift is based on PostgreSQL, with added functionality to manage very large datasets and support high-performance analysis and reporting of those data. 

In this guide you will learn to create a Redshift Database and use it as a data source in your Appsmith application.

## Building A Demo Application

Let us try to learn this concept by building a simple application which fetches data from Redshift database.
We will be creating a simple virtual library application which will hold details of various e-books.

Let us begin with configuring the Redshift.