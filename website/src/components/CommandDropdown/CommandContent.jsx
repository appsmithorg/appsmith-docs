import React, { useState, Fragment } from 'react';
import CommandDropdown from './index';

export default function CommandContent() {
  const [selectedCommand, setSelectedCommand] = useState('');

  const renderCommandContent = () => {
    if (!selectedCommand) return null;

    const content = {
      /* ===================== Create Record - Contact ===================== */
      'Create Record - Contact': (
        <Fragment>
          <h3>Create Record - Contact</h3>
          <p>
            Create a new contact record in Salesforce with specified details such as name, account association, and contact information.
          </p>
          <h4>First Name <code>string</code></h4>
          <dd>The contact's given name used for identification in the CRM. It is typically the first part of the full name and helps distinguish between contacts. Example: <code>"John"</code>.</dd>

          <h4>Last Name <code>string</code></h4>
          <dd>The contact's family name or surname. Required for proper record-keeping. Example: <code>"Doe"</code>.</dd>

          <h4>Account ID <code>string</code></h4>
          <dd>
            The unique identifier of the Salesforce account associated with this contact. You can find this ID by navigating to the account record in Salesforce and copying the 15- or 18-character ID from the URL. Example: <code>"0013Z00002ABC12345"</code>.
          </dd>

          <h4>Email <code>string</code></h4>
          <dd>
            The contact's primary email address. Must be in a valid format and unique within the account. Example: <code>"johndoe@example.com"</code>.
          </dd>

          <h4>Title <code>string</code></h4>
          <dd>
            The contact’s job title or designation within their organization. Example: <code>"Marketing Manager"</code>.
          </dd>

          <h4>Description <code>string</code></h4>
          <dd>
            Additional information about the contact. Example: <code>"John is a key decision-maker in the marketing team."</code>.
          </dd>

          <h4>Additional Fields <code>string</code></h4>
          <dd>
            Any custom fields required for specific business needs. Example: <code>"Preferred language: English"</code>.
          </dd>
        </Fragment>
      ),
      'Create Record - Lead': (
        <Fragment>
          <h3>Create Record - Lead</h3>
          <p>
            Create a new lead record in Salesforce by providing key details such as name, company, email, phone, and status.
          </p>

          <h4>First Name <code>string</code></h4>
          <dd>The lead's given name used for identification and communication. Example: <code>"Jane"</code>.</dd>

          <h4>Last Name <code>string</code></h4>
          <dd>The lead's family name or surname. Example: <code>"Smith"</code>.</dd>

          <h4>Company <code>string</code></h4>
          <dd>The business entity associated with the lead. Example: <code>"Acme Inc."</code>.</dd>

          <h4>Email <code>string</code></h4>
          <dd>The lead's primary business email address. Example: <code>"janesmith@acme.com"</code>.</dd>

          <h4>Phone <code>string</code></h4>
          <dd>The lead's primary contact number. Example: <code>"+1-555-1234"</code>.</dd>

          <h4>Website <code>string</code></h4>
          <dd>
            The lead's company website URL. Must start with <code>http://</code> or <code>https://</code>. Example: <code>"https://acme.com"</code>.
          </dd>

          <h4>Title <code>string</code></h4>
          <dd>The lead's job title. Example: <code>"CTO"</code>.</dd>

          <h4>Status <code>string</code></h4>
          <dd>
            The current position of the lead in your sales pipeline:
            <ul>
              <li><strong>Open</strong> - Initial contact made, needs qualification.</li>
              <li><strong>Working</strong> - Active engagement and discovery.</li>
              <li><strong>Qualified</strong> - Ready for opportunity conversion.</li>
              <li><strong>Unqualified</strong> - Not a good fit for current offerings.</li>
            </ul>
          </dd>
        </Fragment>
      ),

      /* ===================== Create Record - Opportunity ===================== */
      'Create Record - Opportunity': (
        <Fragment>
          <h3>Create Record - Opportunity</h3>
          <p>
            Create a new opportunity record in Salesforce to track potential sales and revenue opportunities.
          </p>

          <h4>Name <code>string</code></h4>
          <dd>A descriptive name for the opportunity.</dd>

          <h4>Stage Name <code>string</code></h4>
          <dd>The current stage in the sales process.</dd>

          <h4>Close Date <code>date</code></h4>
          <dd>The expected or actual closing date (Format: YYYY-MM-DD).</dd>

          <h4>Account ID <code>string</code></h4>
          <dd>The unique identifier of the associated account.</dd>

          <h4>Amount <code>number</code></h4>
          <dd>The estimated total value of the opportunity.</dd>

          <h4>Description <code>string</code></h4>
          <dd>Additional details about the opportunity.</dd>

          <h4>Owner ID <code>string</code></h4>
          <dd>The ID of the Salesforce user managing this opportunity.</dd>
        </Fragment>
      ),

      /* ===================== Create Record - Task ===================== */
      'Create Record - Task': (
        <Fragment>
          <h3>Create Record - Task</h3>
          <p>Create a new task record in Salesforce to track activities and follow-ups.</p>
          <h4>Subject <code>string</code></h4>
          <dd>A brief description of the task.</dd>
          <h4>What ID <code>string</code></h4>
          <dd>The ID of the related object (Lead, Contact, Opportunity, etc.).</dd>
          <h4>Activity Date <code>date</code></h4>
          <dd>The due date for the task (Format: YYYY-MM-DD).</dd>
          <h4>Status <code>string</code></h4>
          <dd>The current status of the task.</dd>
        </Fragment>
      ),

      /* ===================== Create Record - Account ===================== */
      'Create Record - Account': (
        <Fragment>
          <h3>Create Record - Account</h3>
          <p>Create a new account record in Salesforce to represent a company or organization.</p>
          <h4>Name <code>string</code></h4>
          <dd>The official company name.</dd>
          <h4>Website <code>string</code></h4>
          <dd>The company's official website URL.</dd>
          <h4>Phone <code>string</code></h4>
          <dd>The primary contact number for the account.</dd>
          <h4>Owner ID <code>string</code></h4>
          <dd>The ID of the Salesforce user who owns this account.</dd>
          <h4>Description <code>string</code></h4>
          <dd>A detailed description of the account.</dd>
        </Fragment>
      ),

      /* ===================== Update Record - Contact ===================== */
      'Update Record - Contact': (
        <Fragment>
          <h3>Update Record - Contact</h3>
          <p>
            Update an existing contact record in Salesforce. Ensure you have the correct record ID before updating.
          </p>

          <h4>Record ID <code>string</code></h4>
          <dd>The unique identifier of the contact record to update. Retrieve this from the Contacts Table.</dd>

          <h4>First Name <code>string</code></h4>
          <dd>Update the contact’s given name.</dd>

          <h4>Last Name <code>string</code></h4>
          <dd>Update the contact’s family name or surname.</dd>

          <h4>Account ID <code>string</code></h4>
          <dd>Modify the associated account ID if the contact has changed accounts.</dd>

          <h4>Email <code>string</code></h4>
          <dd>Update the contact’s primary email address.</dd>

          <h4>Title <code>string</code></h4>
          <dd>Update the job title of the contact.</dd>

          <h4>Description <code>string</code></h4>
          <dd>Add or modify additional details about the contact.</dd>

          <h4>Additional Fields <code>string</code></h4>
          <dd>Include any extra fields necessary for updating.</dd>
        </Fragment>
      ),

      /* ===================== Update Record - Lead ===================== */
      'Update Record - Lead': (
        <Fragment>
          <h3>Update Record - Lead</h3>
          <p>Update an existing lead record in Salesforce. Ensure you have the correct record ID before updating.</p>

          <h4>Record ID <code>string</code></h4>
          <dd>The unique identifier of the lead record to update. Retrieve it from the Leads Table or API response. Format: "00QXXXXXXXXXXXXXXX".</dd>

          <h4>First Name <code>string</code></h4>
          <dd>Update the lead’s given name.</dd>

          <h4>Last Name <code>string</code></h4>
          <dd>Update the lead’s family name or surname.</dd>

          <h4>Company <code>string</code></h4>
          <dd>Update the business entity associated with the lead.</dd>

          <h4>Email <code>string</code></h4>
          <dd>Update the lead’s primary business email address.</dd>

          <h4>Phone <code>string</code></h4>
          <dd>Update the lead’s primary contact number.</dd>

          <h4>Website <code>string</code></h4>
          <dd>Update the lead’s company website URL.</dd>

          <h4>Status <code>string</code></h4>
          <dd>Update the current position of the lead in the sales pipeline.</dd>
        </Fragment>
      ),

       /* ===================== Update Record - Opportunity ===================== */
       'Update Record - Opportunity': (
        <Fragment>
          <h3>Update Record - Opportunity</h3>
          <p>Update an existing opportunity record in Salesforce. Ensure you have the correct record ID before updating.</p>

          <h4>Record ID <code>string</code></h4>
          <dd>The unique identifier of the opportunity record. Retrieve it from the Opportunities Table or API response. Format: "006XXXXXXXXXXXXXXX".</dd>

          <h4>Name <code>string</code></h4>
          <dd>Update the opportunity’s name.</dd>

          <h4>Stage Name <code>string</code></h4>
          <dd>Update the current sales stage of the opportunity.</dd>

          <h4>Close Date <code>date</code></h4>
          <dd>Update the expected or actual closing date (Format: YYYY-MM-DD).</dd>

          <h4>Account ID <code>string</code></h4>
          <dd>Update the associated account ID.</dd>

          <h4>Amount <code>number</code></h4>
          <dd>Update the estimated total value of the opportunity.</dd>

          <h4>Description <code>string</code></h4>
          <dd>Update additional details about the opportunity.</dd>

          <h4>Additional Details <code>string</code></h4>
          <dd>Include any extra fields necessary for updating.</dd>

          <h4>Owner ID <code>string</code></h4>
          <dd>Update the Salesforce user who owns the opportunity.</dd>

          <h4>Next Steps <code>string</code></h4>
          <dd>Update the next actions required for this opportunity.</dd>
        </Fragment>
      ),

      /* ===================== Update Record - Task ===================== */
      'Update Record - Task': (
        <Fragment>
          <h3>Update Record - Task</h3>
          <p>Update an existing task record in Salesforce. Ensure you have the correct record ID before updating.</p>

          <h4>Record ID <code>string</code></h4>
          <dd>The unique identifier of the task record. Retrieve it from the Tasks Table or API response. Format: "00TXXXXXXXXXXXXXXX".</dd>

          <h4>What ID <code>string</code></h4>
          <dd>Update the related object ID (Lead, Contact, Opportunity, etc.).</dd>

          <h4>Who ID <code>string</code></h4>
          <dd>Update the person associated with the task.</dd>

          <h4>Subject <code>string</code></h4>
          <dd>Update the task’s subject.</dd>

          <h4>Activity Date <code>date</code></h4>
          <dd>Update the due date of the task.</dd>

          <h4>Status <code>string</code></h4>
          <dd>Update the current status of the task.</dd>
        </Fragment>
      ),

      /* ===================== Update Record - Account ===================== */
      'Update Record - Account': (
        <Fragment>
          <h3>Update Record - Account</h3>
          <p>Update an existing account record in Salesforce. Ensure you have the correct record ID before updating.</p>

          <h4>Record ID <code>string</code></h4>
          <dd>The unique identifier of the account record. Retrieve it from the Accounts Table or API response. Format: "001XXXXXXXXXXXXXXX".</dd>

          <h4>Name <code>string</code></h4>
          <dd>Update the account’s name.</dd>

          <h4>Owner ID <code>string</code></h4>
          <dd>Update the Salesforce user who owns the account.</dd>

          <h4>Website <code>string</code></h4>
          <dd>Update the company’s official website URL.</dd>

          <h4>Phone <code>string</code></h4>
          <dd>Update the account’s primary contact number.</dd>

          <h4>Description <code>string</code></h4>
          <dd>Update additional details about the account.</dd>

          <h4>Additional Fields <code>string</code></h4>
          <dd>Include any extra fields necessary for updating.</dd>
        </Fragment>
      ),

      /* ===================== Get Record by ID - Contact ===================== */
      'Get Record by ID - Contact': (
        <Fragment>
          <h3>Get Record by ID - Contact</h3>
          <p>Retrieve a specific contact record in Salesforce using its unique identifier.</p>
          <h4>Record ID <code>string</code></h4>
          <dd>
            The unique identifier for a contact record. Record IDs are automatically generated when a contact is created in Salesforce. 
            Retrieve it from the Contacts Table, API response, or Salesforce URL when viewing a contact. 
            Format: "003XXXXXXXXXXXXXXX".
            <br/><strong>Example:</strong> "0035g00000Abc123AAA"
          </dd>
        </Fragment>
      ),

      /* ===================== Get Record by ID - Lead ===================== */
      'Get Record by ID - Lead': (
        <Fragment>
          <h3>Get Record by ID - Lead</h3>
          <p>Retrieve a specific lead record in Salesforce using its unique identifier.</p>
          <h4>Record ID <code>string</code></h4>
          <dd>
            The unique identifier for a lead record. Generated when a lead is created, it can be found in the Leads Table, API response, or the Salesforce URL. 
            Format: "00QXXXXXXXXXXXXXXX".
            <br/><strong>Example:</strong> "00Q4x00000Abc567XXX"
          </dd>
        </Fragment>
      ),

      /* ===================== Get Record by ID - Opportunity ===================== */
      'Get Record by ID - Opportunity': (
        <Fragment>
          <h3>Get Record by ID - Opportunity</h3>
          <p>Retrieve a specific opportunity record in Salesforce using its unique identifier.</p>
          <h4>Record ID <code>string</code></h4>
          <dd>
            The unique identifier for an opportunity record. Created automatically, it can be retrieved from the Opportunities Table, API response, or Salesforce URL. 
            Format: "006XXXXXXXXXXXXXXX".
            <br/><strong>Example:</strong> "0067x00000Xyz890YYY"
          </dd>
        </Fragment>
      ),

      /* ===================== Get Record by ID - Task ===================== */
      'Get Record by ID - Task': (
        <Fragment>
          <h3>Get Record by ID - Task</h3>
          <p>Retrieve a specific task record in Salesforce using its unique identifier.</p>
          <h4>Record ID <code>string</code></h4>
          <dd>
            The unique identifier for a task record. It is created when a task is logged and can be found in the Tasks Table, API response, or Salesforce URL. 
            Format: "00TXXXXXXXXXXXXXXX".
            <br/><strong>Example:</strong> "00T9x00000Bcd234ZZZ"
          </dd>
        </Fragment>
      ),

      /* ===================== Get Record by ID - Account ===================== */
      'Get Record by ID - Account': (
        <Fragment>
          <h3>Get Record by ID - Account</h3>
          <p>Retrieve a specific account record in Salesforce using its unique identifier.</p>
          <h4>Record ID <code>string</code></h4>
          <dd>
            The unique identifier for an account record. It is generated upon creation and can be found in the Accounts Table, API response, or Salesforce URL. 
            Format: "001XXXXXXXXXXXXXXX".
            <br/><strong>Example:</strong> "0012x00000Abc456AAA"
          </dd>
        </Fragment>
      ),

      /* ===================== Get Record by ID - Any ===================== */
      'Get Record by ID - Any': (
        <Fragment>
          <h3>Get Record by ID - Any</h3>
          <p>Retrieve any record in Salesforce by specifying its type and unique identifier.</p>
          <h4>Record ID <code>string</code></h4>
          <dd>
            The unique identifier for any Salesforce record. IDs are automatically generated when records are created and can be found in relevant tables, API responses, or URLs. 
            Format varies by object type.
            <br/><strong>Example:</strong> "0035g00000Xyz789AAA" (Contact), "00Q4x00000Abc123BBB" (Lead)
          </dd>
          <h4>Record Type <code>string</code></h4>
          <dd>Specify the type of record to fetch, such as Contact, Lead, Account, etc.</dd>
        </Fragment>
      ),

       /* ===================== Search Record - Contact ===================== */
       'Search Record - Contact': (
        <Fragment>
          <h3>Search Record - Contact</h3>
          <p>Search for contact records in Salesforce using filters and pagination.</p>
          <h4>Filter Formula <code>string</code></h4>
          <dd>
            The filter formula allows refining search results based on specified conditions. It helps fetch only the relevant records, reducing unnecessary data retrieval.
            <br/><strong>Example 1:</strong> "FirstName = 'John' AND LastName = 'Doe'" retrieves contacts with the exact first and last name.
            <br/><strong>Example 2:</strong> "FirstName LIKE 'J%'" finds contacts with names starting with J.
          </dd>
          <h4>Pagination Parameters <code>object</code></h4>
          <dd>
            Pagination ensures data is retrieved in manageable chunks instead of fetching all records at once. 
            <br/><strong>Example 1:</strong> limit=10, offset=0 fetches the first 10 records.
            <br/><strong>Example 2:</strong> limit=10, offset=10 fetches the next 10 records (11-20).
          </dd>
        </Fragment>
      ),

      /* ===================== Search Record - Lead ===================== */
      'Search Record - Lead': (
        <Fragment>
          <h3>Search Record - Lead</h3>
          <p>Search for lead records in Salesforce using filters and pagination.</p>
          <h4>Filter Formula <code>string</code></h4>
          <dd>
            This property is used to specify conditions for filtering leads. By applying criteria, users can narrow results to leads that match specific attributes.
            <br/><strong>Example 1:</strong> "Company = 'Acme Corp'" retrieves leads from Acme Corp.
            <br/><strong>Example 2:</strong> "Company = 'Acme Corp' OR Company = 'Globex'" finds leads from either company.
          </dd>
          <h4>Pagination Parameters <code>object</code></h4>
          <dd>
            Defines how many records should be retrieved per request and how to skip previously fetched records.
            <br/><strong>Example 1:</strong> limit=10, offset=20 fetches leads 21-30.
            <br/><strong>Example 2:</strong> limit=5, offset=15 fetches leads 16-20.
          </dd>
        </Fragment>
      ),

      /* ===================== Search Record - Opportunity ===================== */
      'Search Record - Opportunity': (
        <Fragment>
          <h3>Search Record - Opportunity</h3>
          <p>Search for opportunity records in Salesforce using filters and pagination.</p>
          <h4>Filter Formula <code>string</code></h4>
          <dd>
            Filters opportunities based on specified conditions, making searches more precise and meaningful.
            <br/><strong>Example 1:</strong> "StageName = 'Closed Won'" retrieves successfully closed deals.
            <br/><strong>Example 2:</strong> "Amount > 50000" finds opportunities with a value greater than $50,000.
          </dd>
          <h4>Pagination Parameters <code>object</code></h4>
          <dd>
            Allows users to navigate large datasets by defining how many records to fetch and where to start.
            <br/><strong>Example 1:</strong> limit=5, offset=0 fetches the first five records.
            <br/><strong>Example 2:</strong> limit=10, offset=10 retrieves records 11-20.
          </dd>
        </Fragment>
      ),

      /* ===================== Search Record - Any ===================== */
      'Search Record - Any': (
        <Fragment>
          <h3>Search Record - Any</h3>
          <p>Search any Salesforce records by specifying type, filters, and pagination.</p>
          <h4>Record Type <code>string</code></h4>
          <dd>
            Define the object type to search (e.g., Contact, Lead, Account).
          </dd>
          <h4>Filter Formula <code>string</code></h4>
          <dd>
            Allows filtering records based on multiple attributes for efficient data retrieval.
            <br/><strong>Example 1:</strong> "Name LIKE '%Acme%'" searches for records containing "Acme" in the name.
            <br/><strong>Example 2:</strong> "Industry = 'Finance' AND BillingState = 'NY'" fetches finance-related records in New York.
          </dd>
          <h4>Pagination Parameters <code>object</code></h4>
          <dd>
            Helps manage result sets efficiently by limiting records per request.
            <br/><strong>Example 1:</strong> limit=20, offset=50 fetches records 51-70.
            <br/><strong>Example 2:</strong> limit=30, offset=90 retrieves records 91-120.
          </dd>
        </Fragment>
      ),

         /* ===================== Get Record by View ID - Contact ===================== */
         'Get Record by View ID - Contact': (
          <Fragment>
            <h3>Get Record by View ID - Contact</h3>
            <p>Retrieve contact records using a specific list view in Salesforce.</p>
            <h4>List View ID <code>string</code></h4>
            <dd>
              A List View ID is a unique identifier assigned to a saved list view in Salesforce. It allows fetching records based on predefined filters.
              Retrieve it from the Salesforce UI by opening the list view and copying the ID from the URL. Example: "00B5g00000Xyz123AAA".
            </dd>
            <h4>Pagination Parameters <code>object</code></h4>
            <dd>
              Used to control the number of records fetched at a time. 
              <br/><strong>Example 1:</strong> limit=10, offset=0 fetches the first 10 records.
              <br/><strong>Example 2:</strong> limit=20, offset=20 fetches records 21-40.
            </dd>
          </Fragment>
        ),
  
        /* ===================== Get Record by View ID - Lead ===================== */
        'Get Record by View ID - Lead': (
          <Fragment>
            <h3>Get Record by View ID - Lead</h3>
            <p>Retrieve lead records using a specific list view in Salesforce.</p>
            <h4>List View ID <code>string</code></h4>
            <dd>
              The List View ID uniquely identifies saved lead views. Find it by selecting a lead list view in Salesforce and copying the ID from the URL.
              Example: "00B6x00000Abc789BBB".
            </dd>
            <h4>Pagination Parameters <code>object</code></h4>
            <dd>
              Adjusts the retrieval of records in batches.
              <br/><strong>Example 1:</strong> limit=15, offset=0 retrieves the first 15 leads.
              <br/><strong>Example 2:</strong> limit=10, offset=30 retrieves leads 31-40.
            </dd>
          </Fragment>
        ),
  
        /* ===================== Get Record by View ID - Opportunity ===================== */
        'Get Record by View ID - Opportunity': (
          <Fragment>
            <h3>Get Record by View ID - Opportunity</h3>
            <p>Retrieve opportunity records using a specific list view in Salesforce.</p>
            <h4>List View ID <code>string</code></h4>
            <dd>
              This ID is used to reference a saved list view for opportunities. Obtain it from the Salesforce UI by opening an opportunity list view.
              Example: "00B7x00000Def567CCC".
            </dd>
            <h4>Pagination Parameters <code>object</code></h4>
            <dd>
              Helps manage large datasets efficiently.
              <br/><strong>Example 1:</strong> limit=5, offset=0 fetches the first five opportunities.
              <br/><strong>Example 2:</strong> limit=10, offset=10 retrieves records 11-20.
            </dd>
          </Fragment>
        ),
  
        /* ===================== Get Record by View ID - Any ===================== */
        'Get Record by View ID - Any': (
          <Fragment>
            <h3>Get Record by View ID - Any</h3>
            <p>Retrieve records of any type using a specific list view in Salesforce.</p>
            <h4>Record Type <code>string</code></h4>
            <dd>
              Specify the type of record (e.g., Contact, Lead, Account) to be fetched using the list view.
            </dd>
            <h4>List View ID <code>string</code></h4>
            <dd>
              The identifier for a saved list view, which can be obtained from the Salesforce UI by navigating to the desired view.
              Example: "00B8x00000Ghi890DDD".
            </dd>
            <h4>Pagination Parameters <code>object</code></h4>
            <dd>
              Determines how records are retrieved in chunks to optimize performance.
              <br/><strong>Example 1:</strong> limit=20, offset=50 fetches records 51-70.
              <br/><strong>Example 2:</strong> limit=30, offset=90 retrieves records 91-120.
            </dd>
          </Fragment>
        ),

            /* ===================== Create Custom Field - Lead ===================== */
     /* ===================== Create Custom Field - Lead ===================== */
     'Create Custom Field - Lead': (
      <Fragment>
        <h3>Create Custom Field - Lead</h3>
        <p>Add a custom field to the Lead object in Salesforce.</p>
        <h4>Label <code>string</code></h4>
        <dd>The display name for the custom field, shown in the UI. Choose a descriptive name that aligns with business terminology. Example: "Lead Source Category".</dd>
        <h4>Type <code>string</code></h4>
        <dd>The data type of the field, such as Text, Number, Boolean, or Picklist. Determines how data is stored and validated. Example: "Text" for a custom Lead Identifier.</dd>
        <h4>Default Checkbox Value <code>boolean</code></h4>
        <dd>For checkbox fields, define whether it should be checked (true) or unchecked (false) by default. Example: "Is Active" set to true.</dd>
        <h4>Length <code>integer</code></h4>
        <dd>Defines the maximum number of characters allowed for a text field. Helps prevent excessive data entry. Example: "Company Code" with a max length of 10.</dd>
        <h4>Decimal Places <code>integer</code></h4>
        <dd>Specifies how many decimal places a numeric field should allow. Useful for financial or measurement-related fields. Example: "Discount Percentage" with 2 decimal places (e.g., 15.75%).</dd>
        <h4>Picklist Values <code>array</code></h4>
        <dd>A set of predefined selectable values for picklist fields. Ensures data consistency. Example: "Lead Status" with options: "New, Contacted, Qualified".</dd>
        <h4>Visible Lines <code>integer</code></h4>
        <dd>Specifies the number of visible lines in a long text field. Helps with structured data entry. Example: "Notes" field with 5 visible lines.</dd>
        <h4>Helper Text <code>string</code></h4>
        <dd>Provides guidance on what to enter in the field. Displayed as a tooltip or inline text. Example: "Enter the primary reason for lead disqualification".</dd>
        <h4>Default Field Value <code>string</code></h4>
        <dd>The pre-populated value shown when creating a new record. Ensures faster data entry. Example: "Country" defaulting to "United States".</dd>
      </Fragment>
    ),

    /* ===================== Create Custom Field - Contact ===================== */
    'Create Custom Field - Contact': (
      <Fragment>
        <h3>Create Custom Field - Contact</h3>
        <p>Add a custom field to the Contact object in Salesforce.</p>
        <h4>Label <code>string</code></h4>
        <dd>The name of the field as displayed in the UI. Example: "Preferred Contact Method".</dd>
        <h4>Type <code>string</code></h4>
        <dd>Defines the data type, such as Text, Boolean, or Picklist. Example: "Picklist" for selecting communication preferences.</dd>
        <h4>Default Checkbox Value <code>boolean</code></h4>
        <dd>Defines whether a checkbox should be checked by default. Example: "Subscribed to Newsletter" set to true.</dd>
        <h4>Length <code>integer</code></h4>
        <dd>Specifies the maximum number of characters for text fields. Example: "Nickname" with a max length of 30.</dd>
        <h4>Decimal Places <code>integer</code></h4>
        <dd>Determines how many decimal places a numeric field should support. Example: "Credit Score" with 2 decimal places.</dd>
        <h4>Picklist Values <code>array</code></h4>
        <dd>A predefined list of values for selection. Example: "Communication Preference" with options: "Email, Phone, SMS".</dd>
        <h4>Visible Lines <code>integer</code></h4>
        <dd>Defines how many lines are visible for long text fields. Example: "Additional Notes" with 4 visible lines.</dd>
        <h4>Helper Text <code>string</code></h4>
        <dd>Instructions or hints displayed to users. Example: "Enter the best way to contact this person".</dd>
        <h4>Default Field Value <code>string</code></h4>
        <dd>A default value pre-filled in new records. Example: "Preferred Language" defaulting to "English".</dd>
      </Fragment>
    ),

      /* ===================== Create Custom Field - Opportunity ===================== */
      'Create Custom Field - Opportunity': (
        <Fragment>
          <h3>Create Custom Field - Opportunity</h3>
          <p>Add a custom field to the Opportunity object in Salesforce.</p>
          <h4>Label <code>string</code></h4>
          <dd>The display name for the field as shown in the UI. Choose a meaningful name like "Expected Revenue Category".</dd>
          <h4>Type <code>string</code></h4>
          <dd>Defines the kind of data the field holds, such as Text, Number, Boolean, or Picklist. Example: "Stage Progress Indicator" as a picklist field.</dd>
          <h4>Default Checkbox Value <code>boolean</code></h4>
          <dd>Determines whether a checkbox field is selected by default. Example: "Include in Forecast" set to true.</dd>
          <h4>Length <code>integer</code></h4>
          <dd>Defines character limits for text fields to maintain data quality. Example: "Sales Representative Name" with a 50-character limit.</dd>
          <h4>Decimal Places <code>integer</code></h4>
          <dd>Controls decimal precision for numeric values. Useful for currency or percentage fields. Example: "Projected Growth Rate" with 3 decimal places (e.g., 3.145%).</dd>
          <h4>Picklist Values <code>array</code></h4>
          <dd>A predefined list of selectable values for structured data entry. Example: "Sales Cycle Stage" with values: "Negotiation, Proposal, Closed".</dd>
          <h4>Visible Lines <code>integer</code></h4>
          <dd>Defines the number of lines visible in a long text field. Example: "Deal Summary" with 6 visible lines.</dd>
          <h4>Helper Text <code>string</code></h4>
          <dd>Provides additional instructions for users entering data. Example: "Specify the primary competitor involved in this deal".</dd>
          <h4>Default Field Value <code>string</code></h4>
          <dd>The automatically populated value when creating new records. Example: "Probability" defaulting to "50%".</dd>
        </Fragment>
      ),

  /* ===================== Create Custom Field - Task ===================== */
  'Create Custom Field - Task': (
    <Fragment>
      <h3>Create Custom Field - Task</h3>
      <p>Add a custom field to the Task object in Salesforce.</p>
      <h4>Label <code>string</code></h4>
      <dd>The name displayed in the UI for this field. Example: "Task Category".</dd>
      <h4>Type <code>string</code></h4>
      <dd>Defines the type of data stored, such as Text, Boolean, or Picklist. Example: "Picklist" for task priority (High, Medium, Low).</dd>
      <h4>Default Checkbox Value <code>boolean</code></h4>
      <dd>Determines whether a checkbox field is selected by default. Example: "Send Reminder" set to true.</dd>
      <h4>Length <code>integer</code></h4>
      <dd>Defines character limits for text fields. Example: "Task Description" with a max length of 200 characters.</dd>
      <h4>Decimal Places <code>integer</code></h4>
      <dd>Determines decimal precision for numeric values. Example: "Estimated Duration (Hours)" with 1 decimal place (e.g., 2.5 hours).</dd>
      <h4>Picklist Values <code>array</code></h4>
      <dd>A predefined list of selectable values for task categorization. Example: "Task Type" with values: "Call, Meeting, Email".</dd>
      <h4>Visible Lines <code>integer</code></h4>
      <dd>Defines how many lines are visible for long text fields. Example: "Notes" with 3 visible lines.</dd>
      <h4>Helper Text <code>string</code></h4>
      <dd>Instructions or hints displayed to users. Example: "Enter specific instructions for completing this task".</dd>
      <h4>Default Field Value <code>string</code></h4>
      <dd>A default value pre-filled in new records. Example: "Task Status" defaulting to "Open".</dd>
    </Fragment>
  ),

  /* ===================== Create Custom Field - Account ===================== */
  'Create Custom Field - Account': (
    <Fragment>
      <h3>Create Custom Field - Account</h3>
      <p>Add a custom field to the Account object in Salesforce.</p>
      <h4>Label <code>string</code></h4>
      <dd>The name displayed in the UI for this field. Example: "Account Tier".</dd>
      <h4>Type <code>string</code></h4>
      <dd>Defines the type of data stored, such as Text, Boolean, or Picklist. Example: "Picklist" for Tier selection (Gold, Silver, Bronze).</dd>
      <h4>Default Checkbox Value <code>boolean</code></h4>
      <dd>Defines whether a checkbox should be checked by default. Example: "Preferred Customer" set to true.</dd>
      <h4>Length <code>integer</code></h4>
      <dd>Defines character limits for text fields. Example: "Industry Type" with a max length of 50.</dd>
      <h4>Decimal Places <code>integer</code></h4>
      <dd>Specifies decimal precision for numeric values. Example: "Annual Revenue" with 2 decimal places.</dd>
      <h4>Picklist Values <code>array</code></h4>
      <dd>A predefined list of selectable values for account types. Example: "Business Type" with values: "Enterprise, Small Business, Nonprofit".</dd>
      <h4>Visible Lines <code>integer</code></h4>
      <dd>Defines the number of lines visible for long text fields. Example: "Account History" with 4 visible lines.</dd>
      <h4>Helper Text <code>string</code></h4>
      <dd>Instructions or hints displayed to users. Example: "Specify key details about the business relationship".</dd>
      <h4>Default Field Value <code>string</code></h4>
      <dd>A default value pre-filled in new records. Example: "Account Status" defaulting to "Active".</dd>
    </Fragment>
  ),

  /* ===================== Write SOQL Query ===================== */
  'Write SOQL Query': (
    <Fragment>
      <h3>Write SOQL Query</h3>
      <p>SOQL (Salesforce Object Query Language) is used to fetch data from Salesforce objects. It follows a structured format similar to SQL but tailored for Salesforce.</p>
      <h4>Query <code>string</code></h4>
      <dd>
        The SOQL query used to retrieve records from Salesforce. Queries must specify the object and fields to retrieve.
        <br/><strong>Example 1:</strong> Retrieve all contacts with a specific last name:
        <br/><code>SELECT Id, FirstName, LastName FROM Contact WHERE LastName = 'Smith'</code>
        <br/><strong>Example 2:</strong> Fetch opportunities that are in the proposal stage:
        <br/><code>SELECT Id, Name, StageName FROM Opportunity WHERE StageName = 'Proposal'</code>
        <br/><strong>Example 3:</strong> Get accounts created in the last 30 days:
        <br/><code>SELECT Id, Name FROM Account WHERE CreatedDate = LAST_N_DAYS:30</code>
      </dd>
    </Fragment>
  ),

  /* ===================== Create Custom Object ===================== */
  'Create Custom Object': (
    <Fragment>
      <h3>Create Custom Object</h3>
      <p>Defines a new custom object in Salesforce with specific properties.</p>
      <h4>Label <code>string</code></h4>
      <dd>The display name of the object. Example: "Project".</dd>
      <h4>Plural Label <code>string</code></h4>
      <dd>The plural form of the object label for UI display. Example: "Projects".</dd>
      <h4>Description <code>string</code></h4>
      <dd>A brief explanation of the object's purpose. Example: "Stores details about company projects."</dd>
      <h4>Record Name <code>string</code></h4>
      <dd>The unique name field for each record. Example: "Project Name".</dd>
    </Fragment>
  ),

  /* ===================== Describe Action Schema ===================== */
  'Describe Action Schema': (
    <Fragment>
      <h3>Describe Action Schema</h3>
      <p>Provides metadata details about a Salesforce object or action.</p>
      <h4>Record Type <code>string</code></h4>
      <dd>The type of record being described. Example: "Lead".</dd>
      <h4>Operation <code>string</code></h4>
      <dd>The action being performed on the object, such as Create, Update, or Delete. Example: "Update".</dd>
    </Fragment>
  ),


      
    };

    return content[selectedCommand] || <p></p>;
  };

  return (
    <Fragment>
      <CommandDropdown onSelect={setSelectedCommand} />
      {renderCommandContent()}
    </Fragment>
  );
}
