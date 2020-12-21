---
description: >-
  We are changing things quickly to build a better product every day. Stay up to
  date on what's new with our weekly changelog.
---

# Changelog

## New Change Log

Our Change Log has moved to our [Github Release Page](https://github.com/appsmithorg/appsmith/releases)

## 8th June, 2020

* Dropdown test case fixed
* Locator Updated
* Map Widget Publish tests added
* Embedded Datasource UI changes
* Table widget migrated to react table
* Chart text binding test added
* Evaluated value popup added
* Chart series data fix added
* Default page name for a new application changed to Page1
* Added default DSL for layouts on new page create.

## 11th May, 2020

* Hide autocomplete when certain keys are pressed
* Dynamic post body in api form
* Add info icon in API form
* Display helper text and placeholders dynamically in API form
* Increase timeout of execute action on the frontend
* Fix: provider image in search container
* Fix issue with reset on form error
* Filter plugins
* App creation and Deletion is added during test
* Datasource test timeout set to 15 seconds on the frontend
* Service workers : Caching
* Add api analytic events on the frontend
* In scenarios with no service workers, remove the need to fetch all pages when appviewer loads
* Create a seperate action for datasource generated from datasource pane
* Query pane fixes
* fix: create new api - fix create new api button doesn't work sometimes
* Navigate to datasource pane when there are no valid datasources
* Add test case for executing blank api and add test case for executing blank api by selecting the available datasource
* fix autocomplete visibility
* Fix/map issues
* Create query action with an actionConfiguration object
* Tests for datasource pane
* Fix opening and closing of autocomplete
* Fix content type switching to raw when content type is not json or form data.
* Stop showing property pane on click
* Update widget configuration.
* Adding a docker image tag for the master commit. This will allow us to revert to previous versions of the image \(if required\)
* Add missing default database field in Mongo plugin form.
* Add `delete:datasources` permission to all existing groups.
* Hide Exception class details in the Plugin error message.
* Added timeout in DslActionDTO which is used to represent actions inside a layout and in turn is used for page load action execution.
* Guard against NPE when action is null due to cURL command being invalid.
* Backend Database : Remove index annotations as they don't accurately reflect actual indexes
* Backend Database : Migration to install existing default plugins to existing organizations.

## 4th May, 2020

* Fix minor data tree issues
* Datasource bug fixes
* Fix for provider cards UI
* Alignment of provider cards in api home screen fixes
* Fix : do not load the providers if already present
* Fixed 'Add to page' button moving on click in provider templates
* Fixed table scroll on load issue.
* NavigateTo dynamic binding support
* Search container ui fixes - remove unwanted imports
* Getting datasource form configs from backend via API.
* Remove use of reselect in editorSelectors.
* Rename action from UPDATE\_CURRENT\_PAGE to SWITCH\_CURRENT\_PAGE\_ID.
* Update new page name in bread crumbs
* Fixed Container background color
* Widget Name Restrictions added
* Fixed for map tab issues
* Fixed for incorrect action type
* Remove references of plugin name
* Fixed for page creation test
* Create API from action creator issues fixed. Removed unused calls.
* Marketplace : URL decoding the provider name before sending it to the appsmith service and vice versa on the appsmith server.
* Fixed potential NPE in AppsmithException. Also removed unused methods.
* Added delete service operation for datasources.
* Fixed page-load action not being picked up when using the spread operator.
* Show passwords in datasource forms backend fix.
* Fixed cURL import bugs with new cURL command parser
* Added NO\_SSL option to SSL authType to turn off SSL explicitly.
* Added `allowUserDatasources` to plugins to hide from create datasource UI.
* Create action with template id was leading to mock response. Removed this to allow for copy of actions which have been created using 3p API
* Added `deletedAt` field into the unique index of datasources and pages.
* Update form.json for datasource configurations.
* More readable plugin names.
* Fixed testing of REST API datasources fails when no port is set.
* Check the value of `Content-Type` before trying to make an HTTP call.
* Handle 500 when JSON body doesn't make up an object data type.

## 20th April, 2020

* Added batched redux updates.
* Added validation for isVisible in chart widget
* Table Fix:  event bubbling handling
* Removed errors when 401 unauthorized.
* Improved the saving workflow after batching
* DRY property control creation.
* Generate ids for property pane config on the client.
* Add Multi switch control.
* Add Icon Widget \(WIP\).
* Enable blueprint based actions.
* Sidenav width reduction to 220px
* add rel=preload to index.html
* UI fixes and type definition fixes
* Avoid using any or undefined types in the code
* Fix ui issues for api home screen
* Update naming convensions
* Use color variables
* Table features added
* Added row highlight colour in Table
* Moved source map explorer to dependencies
* Added lazy loading of fusioncharts, richtext and syncfusion
* Temporary fixes added for chart widget.
* Added basic skeleton for widget loading
* Moved registration to application editor
* Application viewer fixes added
* Removed tinymce external dependency
* Fixes added for the test suite to make it less flaky
* Issue fixed for REST API actions not getting the plugin id
* Fixed the filepicker issues
* Added pluginId in datasource instead of action.
* Fixed the batched action execution issue.
* Action selector refactor.
* Added an endpoint to update the provider count per category in the local memory. This is a force reset method.
* Re-added the full subscribe to the platform code flow after issues were fixed.
* In case the marketplace does not find the provider, return an empty provider instead of 404.
* Add a boolean field for enabling/disabling SSH Proxy on datasources.
* Fixed NPE in refactor name caused by using OR instead of AND operator. Also Mono.zipping the update Action and update Layout instead of this.then because in some optimization done by Spring, one mono doesnt end up emitting.
* Update action now leads to update layout being called.
* If an action is being created from 3P template, since the marketplace service has been migrated, hit the marketplace server to fetch provider instead of local ProviderService.
* Because of db migrations, the older provider ids saved in actions are no longer available. This leads to api pane not loading. Removing the error to return an empty provider so that the api pane can be loaded.
* Test API for data sources added
* Fixed mustache key parsing failing due to escaping in JSON serialization.
* Rich datasource support added for MongoPlugin
* Added URL Encoding the route parameters as well.
* Added setting of the organization id in case of missing plugin while creating a datasource. This was being skipped over earlier.
* Datasource API cleanup and better error reporting
* Fixed NPE when `invalids` in Datasource is not initialized yet.
* Fixed 500 error when authentication.type is not provided in request body.
* Fixed mustache parsing fail when keys have double-quotes or backslashes.

## 13th April, 2020

* Table Pagination CSS fixes
* Copying of API leads to context switch to the newly copied API
* Issue Fix for Data undefined error for state not logged in.
* API URL trimmed to avoid spaces.
* Data tree no longer has URL.
* Classname for property control label added.
* Form widget cypress test added.
* Frontend Perfomance : Fast get eval added with a debounce
* Frontend Performance : Batched redux update
* Validation added for isVisible in chart widget
* 3rd Party APIs : Credential Steps fixed.
* Marketplace deployment updated with a new marketplace database. Migration of the service done from appsmith proxy db to marketplace staging db.
* Endpoints added for 3rd party data cleanup
* Fixed error for NumberFormatException in case of bad data being sent in the query params for get Providers.
* Fixed bug : If name and categories are empty strings, no results were being returned because of the usage of Example of to search for providers. Added a check for empty strings for both name and category.
* Added a new endpoint to fetch provider by name
* Fixed bug : In case of no categories being set, instead of sending empty categories array list, send null in the example search to get providers by parameters other than category
* Added an endpoint to update the provider count per category in the local memory. This is a force reset method.
* Increase REST api client buffer size from 256KB to 10MB.
* newUser is getting written over and the current organization id before the createUser call is not preserved. Extracting this information before calling createUser lets us set the invited organization id as the newly created user's current organization id.
* Add Spring application property to enable/disable Rollbar.
* Suppress redundant-if warning in datasource validation method.
* Fix: Duplicate key error when reusing the name of a deleted application
* Fix Datasource data structure to be inline with UI
* Fix old enums being used in Postgres plugin. Build failed because of this.
* Upgrade pf4j-spring to 0.6.0 so we can consistently use pf4j 3.2.0.
* Richer plugin validations added
* Fix : Slug should be set by the application instead of insisting on the slug being present in the organization object. Added to the create valid organization test case to assert that the slug must exist.
* Add a boolean field for enabling/disabling SSH Proxy on datasources.
* Fix: error of using OR instead of AND. Also Mono.zipping the update Action and update Layout instead of this.then because in some optimization done by Spring, one mono doesn't end up emitting.
* Fix: When update action is executed, the page layout must also be updated.

## 6th April, 2020

* Safari button error fixed.
* Fixes added for multi select \(Default values, Filters, Removing options\)
* Form widget fixes added.
* Regex field in InputWidget has a validation.
* Navigation to url validation has been fixed.
* Evaluated data not being passed anymore to property pane.
* Fix richtexteditor header z-index.
* Remove resizable collision for Canvas Widgets.
* Fix issue where new containers had the same children as the previously created container's children
* Edit form widget test cases added.
* Fix checkbox onCheckChange not triggering.
* Fix added to show default image when image is invalid.
* Fix added to hide error when autocomplete is shown.
* Fix for CSS and margin of column delete button
* Fix page saving status messages.
* Fix scrolling when resizing and scroll amount.
* Fix property pane title update on error issue.
* Create modal button has been added.
* Pagination of Providers added in Marketplace Repository
* Docker deployment script for Marketplace Repository fixed and deployed.
* Pagination of Providers now has defaults associated with page & size if not specified by the client.
* Marketplace Repository : Provider Controller returns total along with a list of providers. New DTO has been added to help here.
* JSON serialization error fixed for rest api plugin where special characters like '\n', '\t', etc were not being preserved.
* Datasource CRUD APIs edited for enhancement of datasource configuration to support db plugins.
* Fetching the providers from the Marketplace using webclient. Introduced a temporary end point to support the new source for Providers
* Setting the active profile as environment in Rollbar configuration.
* Updated the marketplace URL in Appsmith Proxy after marketplace deployment.
* Fixed the subscribe provider API.
* New parser for extracting interpolations for Mustache templates.
* Stack traces removed from plugin migrations.
* PF4J-spring dependency duplicacy removed.
* Appsmith proxy now handles the new paginated DTO to support provider pagination.
* Remove nesting into enum properties during bean properties copying.

## 30th March, 2020

* Frontend Performance instrumentation added
* Test fix for duplicate element in Table\_spec file
* API pane initialization issue fixed
* Generation of widgets happening from blueprint now
* Unicode page name issue fixed in pagelist sidebar
* Fixed the tooltip overlap with the dynamic input hint issue
* New widget added - Modal Widget
* Updated the default widget sizes
* Log level flag added on the editor codebase
* Table’s hidden columns are now persisted
* Fix added for Safari button issue.
* Plugin ID added to action for the UI to ascertain the display for different plugins \(api pane & db pane\)
* Action code refactor to support action’s transient fields returned for display every time an action is returned from different path
* New error state added for erroneous state of widget name refactor when there is no dsl stored in the database.
* `findByName` API removed and \`findBySlug\` added for Organizations
* Mongock added for use for migration
* Organization slug added
* Fixed issue where two users with the same first name couldn’t successfully sign up.
* JSON serialization fix added for JSON replacements in API pane

## 23rd March, 2020

* Error messages updated on the backend.
* Add to Page changes- 
  * In case the sample response is null, don't set the cached response for the action.
  * Documentation object has been added in Action to handle the extra Template documentation for actions that have been imported from 3p marketplace
* Updated Provider

  - Include fields to help with display and sort order

  - Credential steps should only be written but not read at Provider level

  - The providers returned are sorted by sortOrder in ascending order

* Rest API and Rapid api plugin url encode the query parameters
* Property Pane config changed to generic JSONObject on the server for faster updates for the front end
* Show Appsmith as the From name in sent emails
* Form input default value issues fixed
* Front end gitlab-ci changed for conditional execution
* User added to Sentry and Source maps fixed on the front end
* Page Load issues fixed
* Frontend Docker packaging corrected for master and building the project in Gitlab CI instead of Docker container
* Fixed array issues with JSON Path Keys
* Navigation to URL fixed
* Updated Widget Configuration
* Updated Form Button widths
* Page Events added
* Radio Option blur on edit has been fixed
* Data tree updated to only include the actions of the current page for performance
* Table refresh added on Page change
* Help Tooltips added on Property Pane
* Chart component dimension changes added
* Date Picker added
* Rich Text Editor added
* Test suite for common widgets added

## 16th March, 2020

![Different charts are now a part of Appsmith](.gitbook/assets/screen-shot-2020-03-20-at-10.56.18-am.png)

* File picker minor fixes.
* Cypress test framework
* Front end docker CI/CD
* Analytics : Navigation events
* Page load action issues fix.
* Form widget issues fix
* App initialization trigger loading issue fix.
* Graph widget added
* Navigation to a page fixes
* Javascript toggle fixes
* Error boundary changed to allow for sentry tracking
* Communication emails updated for signup, forgot password and invite users.
* Document version removed from Mongo to avoid optimize lock exception
* Added an endpoint to get all categories.
* When provider is being fetched without a category, only Business Software category providers are returned
* Add to Page changes : In case the sample response is null, don't set the cached response for the action.
* Add to Page changes : Documentation object has been added in Action to handle the extra Template documentation for actions that have been imported from 3p marketplace
* Segment events from backend now hitting different sources depending on environment
* Provider fields added with the transient property which is set for Actions when they are read.
* Get all categories now return Mono of List instead of Flux

## 9th March, 2020

![File picker now accepts more file versions](.gitbook/assets/screen-shot-2020-03-20-at-10.50.23-am.png)

* P0 issues fixed :

  -  Property pane does not toggle for the containers when dragging/resizing a widget within the container

  -  Property pane stays in the same state\(open/closed\) before and after drag/resize

  -  Changing the UI reducers does not re-evaluate the datatree

  -  Focus event does not trigger when moving the mouse out of the boundaries of a widget.

  -  When the user clicks outside the canvas, the widget focus and selection is reset.

  -  Fix invite users issue where selecting the roles dropdown used to cause a page reload.

  -  Remove DropTargetMask Component. Use DragLayerComponent to render Grids

  -  Fix canvas width to 1224px

  -  Fix n-1 page save issue. This issue caused the previous state of the canvas to be saved. Resulting in the latest changes not being reflected in the published view and on reload

  -  Removed Roboto font. It wasn't being used, however, was being downloaded

  -  Increased the min bottom row offset for the main container to 5.

  -  Dropzone mistakenly colored as colliding

  -  Input validation with Dirty Check.

  -  Backend segment events for create & delete of objects were not being sent.

* Fixes for disparity in the styles of the local and release builds.
* Code Editor critical fixes.
* Event tracking for analytics. Also segregated events for production and staging environment.
* Sentry sourcemaps are working now. Sourcemaps were getting uploaded to our servers which is removed. Sentry issues are also segregated for production and staging environment.
* Fixes for file picker.
* Addition of Enhanced user profile after Login using a new API endpoint \("/profile"\)
* Remove roboto font.
* Change the property pane toggling mechanism.
* Increase max bottom row offset for main container from 2 to 5.
* Fix padding and offsets for the widget border component, resize handles.
* Addition of Form widget
* Addtion of Marketplace repository with a CRUD for providers and templates with proper authentication
* Addition of CI for Marketplace repository
* Addition of more details to the invalid action error to pin point which action is invalid in the backend logs.
* Addition of API to Add an Action \(Use in Page\) for a template in the current page
* Addition of filter to fetch Providers by Category name as well.
* Addition of sessionId to the MDC logging to make debugging simpler on the backend.

## 2nd March, 2020

* Fix for user auth forms styles & page styles & fixed input fields for signup, create password, forgot password, reset password pages
* Fix for table and selectedRow issues.
* Fixed focus state of editor
* Minor fix for file picker
* For radio, changed the default option to text.
* Remove default click from filepicker
* Added classes for login button, publish button, application card, widgetcard, editor nav links and application search input.
* Added auto complete function support
* Convert control to dynamic for property pane.
* Added classes to property controls.
* Fix property pane invalid control error.
* Added storybook.
* Added sentry sourcemaps for error logging.
* To support file picker of less than 5MB size on the backend, increasing the request buffer size to 5 MB in the default application.properties file
* When deleting a page, also remove it from the application page cache.
* Creating an embedded datasource for an action to support CURL & 3P Import on the backend.
* Adding the field shouldCacheResponse to the ActionExecutionResult to make the response caching generic across various plugins
* Fixing the spring data auditable issue by creating a dummy embedded Datasource object in Action
* Adding test cases in ActionService for some create Action workflows

## 24th February, 2020



![Action creation UI is now simpler](.gitbook/assets/screen-shot-2020-02-25-at-4.53.42-pm.png)

* Action refactor including handling old actions.
* Fixed Visibility issue.
* Fixed widget padding issue.
* Fixed issue where dropzone disappears.
* Fixed resize flicker. Add resize handles to corners. Enforce minimum width and height for widgets.
* Enforce uniform padding in resizable components
* Remove deleted page from list. Disable setting a page as default when it is already the default. Throw error when deleting the homepage.
* Refactor widget name
* Updated dsl with files picked in base 64 & moved to storing file on add instead of upload
* Change toast font size from 14px to 16px
* Fixed single select dropdown background style
* Fixed Infinite spinner when create application fails.
* Adding provider plan subscribed to and list of all the plans to Provider
* Curl Importer calls create action instead of saving it directly so that all the defaults can be set up properly.
* Making the Templates searchable by name, provider id, versionId,  and Id
* Added hashValue and scraperid to Template
* This fixes the bug during refactor of name of a widget/action. This bug is recreatable if in the page there is an action with no jsonPathKeys. Handled the null pointer exception by first checking for the null pointer.

## 17th February, 2020

* Fixed Widget visibility
* Updated meta & widget property not need widgetid
* Fixed dropdown option delete issues
* Api pane css fixes
* Focus widget only if not already focused. Remove routerparams reducer, we have the info in editorReducer. Change anchor link to button to remove accessibility warnings
* Transparent Canvas - Template 1
* api fixes
* Dropdown widget fixes
* Removed Google Auth domain restrictions for all environments
* Extended the ActionConfiguration to accept rest api body in the form of key-value for form-data input. Also extended Property to include fields which would help the user in configuring the API \(like description, mandatory, etc.\)
* Added checks to ensure that we can remove the oauth2 allowed domains from the properties file
* Fixed Gitlab CI/CD pipeline in the short term for server

## 10th February, 2020

1. You can now create different organizations and switch across organizations. This will help developers organize their work better and help freelance developers collaborate with different teams easily.
2. Applications can now be deleted
3. Table widget now works for server side paginated responses as well. We’ve now enabled server side and client side pagination. We’ve allowed for different kinds of pagination that might arise in the future.
4. Brackets auto-close so that you don’t need to worry about tracking the exact number of brackets
5. Drag and drop is smoother because the drop zone does not fly from far way when dragging for the first time. Friction is lower and tension is higher for more responsive spring animation.
6. We started integrating with multiple third party APIs so that you can now find your SAAS products that you can integrate with

* set value after initializing editor
* autoclose brackets and default input
* Fixed issue where login button is disabled despite having creds autofilled by chrome
* Widget Styles 
* Added default implementation in BaseRepositoryImpl for default JPA queries defined by Spring Data.
* Added the permission to delete pages to acl.rego file 
* Refactoring the code to add page archival for a given application 
* Refactoring the code to fix bug where a user creating an organization wasn’t getting assigned the default groups
* Renaming isPaginated to PaginationType to support different types of pagination on the frontend
* Mock apis for 3P frontend work
* Correcting the error response returned by the AclFilter to match the ErrorDTO returned from controller functions

