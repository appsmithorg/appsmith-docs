---
description: This page provides detailed steps to set up a Webhook workflow on Appsmith.
---

# Lesson 2 - Integrate Webhook Workflow

Intro and goal of this lesson

## Configure Datasources
    * Set up a datasource that holds data
    * Create a select query to retrieve data
    * Drag a Table widget and bind it to the select query for displaying records
    * Set up action on Table widget
        * Approve button
        * Reject button

## API Setup to Trigger Workflow
    * Setup an API in Appsmith that sets up the workflow.
    * Create a JS object to read the action, capture the parameters and call the API in step above to trigger the workflow.

## Workflow in action
* Set the `onClick` event of the Approve and Reject buttons to call the JS object and pass relevant actions.

