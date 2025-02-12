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
            <p>Filters help refine search results based on contact field values.</p>
            <p>Example 1: Find contacts with exact first and last names.</p>
            <pre><code>"FirstName = 'John' AND LastName = 'Doe'"</code></pre>
            <p>Example 2: Find contacts whose first name starts with 'J'.</p>
            <pre><code>"FirstName LIKE 'J%'"</code></pre>
          </dd>
          
          <h4>Pagination Parameters <code>object</code></h4>
          <dd>
            <p>Pagination allows fetching records in batches.</p>
            <pre><code>limit=10, offset=0 // Fetch first 10 records</code></pre>
            <pre><code>limit=10, offset=10 // Fetch next 10 records</code></pre>
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
            <p>Apply filters to refine lead searches.</p>
            <p>Example 1: Find leads from Acme Corp.</p>
            <pre><code>"Company = 'Acme Corp'"</code></pre>
            <p>Example 2: Find leads from multiple companies.</p>
            <pre><code>"Company = 'Acme Corp' OR Company = 'Globex'"</code></pre>
          </dd>
          <h4>Pagination Parameters <code>object</code></h4>
          <dd>
            Define how many records to fetch per request. Example: limit=10, offset=20 fetches leads 21-30.
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
            <p>Use conditions to search opportunities.</p>
            <p>Example 1: Find successful deals.</p>
            <pre><code>"StageName = 'Closed Won'"</code></pre>
            <p>Example 2: Find opportunities above $50,000.</p>
            <pre><code>"Amount > 50000"</code></pre>
          </dd>
          <h4>Pagination Parameters <code>object</code></h4>
          <dd>
            Manage large datasets by limiting records per request. Example: limit=5, offset=0 fetches the first five results.
          </dd>
        </Fragment>
      ),

      /* ===================== Search Record - Task ===================== */
      'Search Record - Task': (
        <Fragment>
          <h3>Search Record - Task</h3>
          <p>Search for task records in Salesforce using filters and pagination.</p>
          <h4>Filter Formula <code>string</code></h4>
          <dd>
            Example: "Status = 'In Progress'" retrieves active tasks.
            Filter by date: "ActivityDate >= '2024-01-01'" fetches tasks from January 2024 onwards.
          </dd>
          <h4>Pagination Parameters <code>object</code></h4>
          <dd>
            Specify batch size and position. Example: limit=10, offset=30 retrieves results 31-40.
          </dd>
        </Fragment>
      ),

      /* ===================== Search Record - Account ===================== */
      'Search Record - Account': (
        <Fragment>
          <h3>Search Record - Account</h3>
          <p>Search for account records in Salesforce using filters and pagination.</p>
          <h4>Filter Formula <code>string</code></h4>
          <dd>
            Example: "Industry = 'Technology'" finds accounts in the tech sector.
            Use conditions like "BillingCountry = 'USA'" to refine searches by location.
          </dd>
          <h4>Pagination Parameters <code>object</code></h4>
          <dd>
            Fetch records in batches using limit and offset. Example: limit=15, offset=0 fetches the first 15 results.
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
            Example: "Name LIKE '%Acme%'" searches for records containing "Acme" in the name.
            Apply multiple conditions: "Industry = 'Finance' AND BillingState = 'NY'".
          </dd>
          <h4>Pagination Parameters <code>object</code></h4>
          <dd>
            Define record batches with limit and offset. Example: limit=20, offset=50 fetches records 51-70.
          </dd>
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
