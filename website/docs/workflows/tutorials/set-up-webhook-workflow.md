---
description: This page provides detailed steps to set up a Webhook workflow on Appsmith.
---

# Lesson 1 - Set up Webhook Workflow
 
Intro and goal of this lesson

## Prerequisites

* Ensure you have a self-hosted instance of Appsmith. See the [Appsmith installation guides](/getting-started/setup/installation-guides) for detailed instructions on setting up your Appsmith instance.

## Configure Datasources

 * Set up a datasource that holds data
    * Add an update query that updates the data on approval
 * Set up an SMTP datasource
    * Add an email query to trigger the email on successful update

## Create Webhook Workflow

* Workflow Logic
    * Write JavaScript logic in the workflow to move the user to the approval pipeline
    * Add parameters that will be substituted in the query for updating
    * Verify that the updates are successful
    * Integrate the email query to trigger an email notification

* Workflow Settings
    * Set up the workflow as webhook
    * Save the webhook URL and token



