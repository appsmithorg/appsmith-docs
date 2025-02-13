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
  The <strong>Create Record - Contact</strong> command allows you to create a new <strong>Contact</strong> record in Salesforce.  
  A <strong>Contact</strong> in Salesforce represents an individual associated with an <strong>Account</strong> (business or organization).  
</p>


<p>
  Once the <strong>Create Record - Contact</strong> command is successfully executed, Salesforce returns a response with a unique <strong>Contact ID</strong>.  
  You can use this ID to retrieve the contact details via API or search for the Contact in <strong>Salesforce → Contacts</strong>.  
</p>
          <h4>First Name <code>string</code></h4>
          <dd>The contact's given name, used for identification in Salesforce. It is typically the first part of the full name and helps distinguish between contacts. Example: John.</dd>

          <h4>Last Name <code>string</code></h4>
          <dd> The contact's family name or surname. This field is mandatory for proper record-keeping and searching in Salesforce. Example: Doe.</dd>

          <h4>Account ID <code>string</code></h4>
<dd>
  The unique identifier of the Salesforce <strong>Account</strong> associated with this Contact.  
  This is <strong>not</strong> the Account ID of the user creating the Contact but the ID of the <strong>business or organization</strong> the Contact belongs to.  
  <br />
  <br />
  <ul>
    <li>If the Contact is linked to an Account, this field should contain the <strong>Account's Salesforce ID</strong>.</li>
    <li>If the Contact is an individual without an associated Account, this field can be left blank (depending on your Salesforce setup).</li>
  </ul>
  You can find the Account ID by navigating to the <strong>Account record</strong> in Salesforce and copying the 15- or 18-character ID from the URL. Example: 0013Z00002ABC12345.   
  <br />
  <br />
  For more information,&nbsp;
<a href="https://help.salesforce.com/s/articleView?id=000381643&type=1" target="_blank">
   Account ID Reference.
</a>

</dd>

          <h4>Email <code>string</code></h4>
          <dd>
          The contact's primary email address. It must be in a valid email format and should be unique within Salesforce to avoid duplicate records. Example: <code>"johndoe@example.com"</code>.
          </dd>

          <h4>Title <code>string</code></h4>
          <dd>
          The contact’s job title or designation within their organization. This helps in identifying the contact’s role and responsibilities. Example: <code>"Marketing Manager"</code>.
          </dd>

          <h4>Description <code>string</code></h4>
          <dd>
          Additional notes or details about the contact. Can be used to store context or specific information about interactions. Example: <code>"John is a key decision-maker in the marketing team."</code>.
          </dd>

          <h4>Additional Fields <code>string</code></h4>
          <dd>
          Any custom fields required for specific business needs. Salesforce allows custom fields based on organizational requirements. Example: <code>"Preferred language: English"</code>.
          </dd>


          <img 
  src="/img/Create-Record-Contact.png" 
  alt="Appsmith Salesforce Integration" 
  style={{ maxWidth: '100%', maxHeight: '500px', height: 'auto' }} 
/>

    
        </Fragment>
      ),
    /* ===================== Create Record - Lead ===================== */
'Create Record - Lead': (
  <Fragment>
    <h3>Create Record - Lead</h3>
    <p>
      The <strong>Create Record - Lead</strong> command allows you to create a new <strong>Lead</strong> record in Salesforce.  
      A <strong>Lead</strong> in Salesforce represents a potential customer who has shown interest in your business but has not yet been qualified as a Contact or Opportunity.
    </p>

    <p>
      Once the <strong>Create Record - Lead</strong> command is successfully executed, Salesforce returns a response with a unique <strong>Lead ID</strong>.  
      You can use this ID to track the lead's status or update the lead details in <strong>Salesforce → Leads</strong>.
    </p>

    <h4>First Name <code>string</code></h4>
    <dd>The lead's given name, used for identification and communication. Example: <code>"Jane"</code>.</dd>

    <h4>Last Name <code>string</code></h4>
    <dd>The lead's family name or surname. This field is mandatory. Example: <code>"Smith"</code>.</dd>

    <h4>Company <code>string</code></h4>
    <dd>The business entity associated with the lead. Example: <code>"Acme Inc."</code>.</dd>

    <h4>Email <code>string</code></h4>
    <dd>The lead's primary business email address. It must be in a valid email format. Example: <code>"janesmith@acme.com"</code>.</dd>

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
    <h4>Description <code>string</code></h4>
    <dd>
      Additional notes or details about the lead. Can be used to store context or specific information about interactions.  
      Example: <code>"Jane attended our webinar and expressed interest in our enterprise solutions."</code>.
    </dd>

    <h4>Additional Fields <code>string</code></h4>
    <dd>
      Any custom fields required for specific business needs. Salesforce allows custom fields based on organizational requirements.  
      Example: <code>"Preferred contact method: Email"</code>.
    </dd>
 
  </Fragment>
      ),
'Create Record - Opportunity': (
  <Fragment>
    <h3>Create Record - Opportunity</h3>
    <p>
      The <strong>Create Record - Opportunity</strong> command allows you to create a new <strong>Opportunity</strong> record in Salesforce.  
      An <strong>Opportunity</strong> represents a potential sale or business deal, helping sales teams track revenue and pipeline progress.
    </p>

    <p>
      Once the <strong>Create Record - Opportunity</strong> command is successfully executed, Salesforce returns a response with a unique <strong>Opportunity ID</strong>.  
      You can use this ID to retrieve opportunity details via API or search for the opportunity in <strong>Salesforce → Opportunities</strong>.
    </p>

    <h4>Name <code>string</code></h4>
    <dd>
      A descriptive name for the opportunity, typically including the product, service, or client name.  
      Example: <code>"Acme Inc. - Enterprise Software Deal"</code>.
    </dd>

    <h4>Stage Name <code>string</code></h4>
    <dd>
      The current stage in the sales process. This determines the progress of the deal in the sales pipeline.  
      Example stages:
      <ul>
        <li><strong>Prospecting</strong> - Identifying a potential customer.</li>
        <li><strong>Qualification</strong> - Determining customer needs and fit.</li>
        <li><strong>Proposal</strong> - Presenting an offer or contract.</li>
        <li><strong>Negotiation</strong> - Adjusting terms and addressing concerns.</li>
        <li><strong>Closed Won</strong> - The deal is successfully closed.</li>
        <li><strong>Closed Lost</strong> - The deal did not proceed.</li>
      </ul>
      Example: <code>"Proposal"</code>.
    </dd>

    <h4>Close Date <code>date</code></h4>
    <dd>
      The expected or actual closing date of the opportunity.  
      Format: <code>YYYY-MM-DD</code>.  
      Example: <code>"2024-12-31"</code>.
    </dd>

    <h4>Account ID <code>string</code></h4>
    <dd>
    The unique identifier of the Salesforce <strong>Account</strong> associated with this Contact.  
  This is <strong>not</strong> the Account ID of the user creating the Contact but the ID of the <strong>business or organization</strong> the Contact belongs to.  
  <br />
  <br />
  <ul>
    <li>If the Contact is linked to an Account, this field should contain the <strong>Account's Salesforce ID</strong>.</li>
    <li>If the Contact is an individual without an associated Account, this field can be left blank (depending on your Salesforce setup).</li>
  </ul>
  You can find the Account ID by navigating to the <strong>Account record</strong> in Salesforce and copying the 15- or 18-character ID from the URL. Example: 0013Z00002ABC12345.   
  <br />
  <br />
  For more information,&nbsp;
<a href="https://help.salesforce.com/s/articleView?id=000381643&type=1" target="_blank">
   Account ID Reference.
</a>
    </dd>

    <h4>Amount <code>number</code></h4>
    <dd>
      The estimated total value of the opportunity in the company's currency.  
      Example: <code>15000</code> (for $15,000).
    </dd>

    <h4>Description <code>string</code></h4>
    <dd>
      Additional notes or details about the opportunity.  
      Can be used to document key discussions, agreements, or next steps.  
      Example: <code>"Customer is interested in a bulk purchase and requires a custom proposal."</code>.
    </dd>

    <h4>Owner ID <code>string</code></h4>
<dd>
  The Salesforce user responsible for managing this opportunity.  
  This should be a valid Salesforce User ID.  
  Example: <code>"0052x00000XYZ789"</code>.  
  <br />
  <br />
  You can find the Owner ID by navigating to the User Record in Salesforce and copying the 15- or 18-character User ID from the URL.  
  <br />
</dd>


    <h4>Additional Fields <code>string</code></h4>
    <dd>
      Any custom fields required for specific business needs. Salesforce allows custom fields based on organizational requirements.  
      Example: <code>"Lead Source: Referral"</code>.
    </dd>

    
  </Fragment>
),


/* ===================== Create Record - Task ===================== */
      'Create Record - Task': (
        <Fragment>
          <h3>Create Record - Task</h3>
          <p>Create a new task record in Salesforce to track activities and follow-ups.</p>
          
          <h4>Subject <code>string</code></h4>
          <dd>
            A brief description of the task. This will appear as the main title in the task list.
          </dd>

          <h4>What ID <code>string</code></h4>
          <dd>
            The unique identifier of the related object, such as a Lead, Contact, Opportunity, or Account.
            <br /><br />
            To find this ID, navigate to the respective record in Salesforce and copy the Record ID from the URL.
            <br /><br />
            Example: <code>0012x00000ABC123</code> for an Account.
          </dd>

          <h4>Activity Date <code>date</code></h4>
          <dd>
            The due date for the task. Use the format YYYY-MM-DD.
          </dd>

          <h4>Status <code>string</code></h4>
          <dd>
            The current status of the task (e.g., Not Started, In Progress, Completed, Waiting on someone else, Deferred).
          </dd>
        </Fragment>
      ),

      /* ===================== Create Record - Account ===================== */
'Create Record - Account': (
  <Fragment>
    <h3>Create Record - Account</h3>
    <p>
      The <strong>Create Record - Account</strong> command allows you to create a new Account record in Salesforce. 
      An Account in Salesforce represents a company or organization that your business interacts with, such as a customer, 
      partner, or competitor.
    </p>
    <p>
      Once the Create Record - Account command is successfully executed, Salesforce returns a response with a unique 
      Account ID. You can use this ID to retrieve account details via API or search for the Account in Salesforce → Accounts.
    </p>

    <h4>Name <code>string</code></h4>
    <dd>
      The official name of the company or organization. This field is required to create an account.
    </dd>

    <h4>Website <code>string</code></h4>
    <dd>
      The company's official website URL. This helps in identifying and verifying the account.
    </dd>

    <h4>Phone <code>string</code></h4>
    <dd>
      The primary contact number for the account. This is useful for communication and maintaining customer relationships.
    </dd>

    <h4>Owner ID <code>string</code></h4>
    <dd>
      The <strong>Owner ID</strong> is the unique identifier of the Salesforce user who owns or manages the account. 
      It is assigned to a specific user and determines who has primary responsibility for this record.
      <br /><br />
      You can find the Owner ID in the user profile URL in Salesforce.
      <br /><br />
      Example: <code>0052x00000XYZ789</code>
      <br /><br />
      For more details, refer to the 
      <a href="https://help.salesforce.com/s/articleView?id=000324593&type=1" target="_blank">
        Salesforce User ID Reference.
      </a>
    </dd>

    <h4>Description <code>string</code></h4>
    <dd>
      A detailed description of the account. This field allows you to provide additional context about the business, 
      its operations, or any relevant notes for internal reference.
    </dd>
  </Fragment>
),


   /* ===================== Update Record - Contact ===================== */
'Update Record - Contact': (
  <Fragment>
    <h3>Update Record - Contact</h3>
    <p>
      The <strong>Update Record - Contact</strong> command allows you to modify an existing Contact record in Salesforce. 
      A Contact in Salesforce represents an individual associated with an Account, such as a customer, partner, or employee.
    </p>
    <p>
      To update a Contact record, you must provide the unique Record ID of the contact you want to modify. 
      Once the update is successful, the changes will reflect in Salesforce, and you can retrieve the updated contact details via API or through Salesforce → Contacts.
    </p>

    <h4>Record ID <code>string</code></h4>
    <dd>
      The unique identifier of the Contact record that needs to be updated. This ID ensures that the correct record is modified.
      <br /><br />
      You can find this ID by opening the Contact record in Salesforce and copying the Record ID from the URL.
      <br /><br />
      Example: <code>0032x00000DEF456</code>
    </dd>

    <h4>First Name <code>string</code></h4>
    <dd>
      The given name of the contact. Use this field to update or correct the contact's first name.
    </dd>

    <h4>Last Name <code>string</code></h4>
    <dd>
      The surname or family name of the contact. This field is typically required for identifying the contact.
    </dd>

    <h4>Account ID <code>string</code></h4>
    <dd>
      The unique identifier of the Account to which the contact belongs. If the contact has switched companies or organizations, 
      update this field to reflect the new association.
      <br /><br />
      This is <strong>not</strong> the User ID of the person making the update, but the ID of the business or organization the contact is linked to.
      <br /><br />
      Example: <code>0012x00000ABC123</code>
    </dd>

    <h4>Email <code>string</code></h4>
    <dd>
      The primary email address of the contact. Updating this field ensures that communications reach the correct email.
    </dd>

    <h4>Title <code>string</code></h4>
    <dd>
      The job title or position of the contact within their organization. Keeping this updated helps in identifying their role in business interactions.
    </dd>

    <h4>Description <code>string</code></h4>
    <dd>
      Additional details about the contact, such as background information, notes from interactions, or special preferences.
    </dd>

    <h4>Additional Fields <code>string</code></h4>
    <dd>
      Any other fields required to update the contact record. This can include custom fields specific to your Salesforce setup.
    </dd>
  </Fragment>
),



      /* ===================== Update Record - Lead ===================== */
'Update Record - Lead': (
  <Fragment>
    <h3>Update Record - Lead</h3>
    <p>
      The <strong>Update Record - Lead</strong> command allows you to modify an existing Lead record in Salesforce. 
      A Lead in Salesforce represents a potential customer or prospect who has shown interest in your products or services 
      but has not yet been qualified as an opportunity.
    </p>
    <p>
      To update a Lead record, you must provide its unique Record ID. Once the update is successfully processed, 
      Salesforce will reflect the changes, allowing you to track lead progress and engagement.
    </p>

    <h4>Record ID <code>string</code></h4>
    <dd>
      The unique identifier of the Lead record that needs to be updated. This ensures the correct lead is modified.
      <br /><br />
      You can find this ID in the Leads Table or obtain it from an API response. 
      <br /><br />
      Format: <code>00QXXXXXXXXXXXXXXX</code>
    </dd>

    <h4>First Name <code>string</code></h4>
    <dd>
      The given name of the lead. Use this field to update or correct the first name of the individual.
    </dd>

    <h4>Last Name <code>string</code></h4>
    <dd>
      The surname or family name of the lead. This field is typically required for identifying the lead.
    </dd>

    <h4>Company <code>string</code></h4>
    <dd>
      The business entity associated with the lead. Updating this field ensures that the lead remains linked to the correct organization.
    </dd>

    <h4>Email <code>string</code></h4>
    <dd>
      The primary business email address of the lead. Keeping this updated ensures that communications reach the correct recipient.
    </dd>

    <h4>Phone <code>string</code></h4>
    <dd>
      The primary contact number of the lead. Updating this field ensures that outreach efforts are directed to the correct number.
    </dd>

    <h4>Website <code>string</code></h4>
    <dd>
      The official website URL of the lead’s company. This field helps associate the lead with their business online presence.
    </dd>

    <h4>Status <code>string</code></h4>
    <dd>
      The current stage of the lead in the sales pipeline. Updating this field helps track the lead’s progress, 
      such as "New," "Working," "Qualified," or "Converted."
    </dd>
  </Fragment>
),

    /* ===================== Update Record - Opportunity ===================== */
'Update Record - Opportunity': (
  <Fragment>
    <h3>Update Record - Opportunity</h3>
    <p>
      The <strong>Update Record - Opportunity</strong> command allows you to modify an existing Opportunity record in Salesforce. 
      An Opportunity represents a potential sales deal with a specific account and is used to track revenue, forecast sales, 
      and manage the sales pipeline.
    </p>
    <p>
      To update an Opportunity record, you must provide its unique Record ID. Once the update is successfully processed, 
      Salesforce will reflect the changes, helping sales teams track progress, revenue, and deal status.
    </p>

    <h4>Record ID <code>string</code></h4>
    <dd>
      The unique identifier of the Opportunity record that needs to be updated. This ensures the correct opportunity is modified.
      <br /><br />
      You can find this ID in the Opportunities Table or obtain it from an API response.
      <br /><br />
      Format: <code>006XXXXXXXXXXXXXXX</code>
    </dd>

    <h4>Name <code>string</code></h4>
    <dd>
      The name of the opportunity. Updating this field ensures the opportunity is correctly labeled and identifiable in reports.
    </dd>

    <h4>Stage Name <code>string</code></h4>
    <dd>
      The current sales stage of the opportunity. Keeping this field updated helps track progress through the sales pipeline.
      Common stages include "Prospecting," "Negotiation," and "Closed Won."
    </dd>

    <h4>Close Date <code>date</code></h4>
    <dd>
      The expected or actual closing date of the opportunity. 
      <br /><br />
      Use the format <code>YYYY-MM-DD</code> to ensure consistency.
    </dd>

    <h4>Account ID <code>string</code></h4>
    <dd>
      The unique identifier of the Account associated with the Opportunity. 
      <br /><br />
      This ensures the opportunity remains linked to the correct business or organization.
    </dd>

    <h4>Amount <code>number</code></h4>
    <dd>
      The estimated total revenue value of the opportunity. Updating this helps maintain accurate revenue forecasts.
    </dd>

    <h4>Description <code>string</code></h4>
    <dd>
      Additional details about the opportunity, such as background information, special conditions, or notes from the sales team.
    </dd>

    <h4>Additional Details <code>string</code></h4>
    <dd>
      Any extra fields required for updating the opportunity. Use this to capture custom fields relevant to your sales process.
    </dd>

    <h4>Owner ID <code>string</code></h4>
    <dd>
      The unique identifier of the Salesforce user who owns the opportunity. Updating this field reassigns ownership.
    </dd>

    <h4>Next Steps <code>string</code></h4>
    <dd>
      The next planned actions for the opportunity. This field helps track follow-ups, pending tasks, or important deal milestones.
    </dd>
  </Fragment>
),

/* ===================== Update Record - Task ===================== */
'Update Record - Task': (
  <Fragment>
    <h3>Update Record - Task</h3>
    <p>
      The <strong>Update Record - Task</strong> command allows you to modify an existing Task record in Salesforce. 
      Tasks help users track activities such as follow-ups, meetings, or any other actionable items related to Leads, 
      Contacts, Accounts, or Opportunities.
    </p>
    <p>
      To update a Task, you must provide its unique Record ID. Keeping task records up to date ensures proper task 
      management, timely follow-ups, and efficient workflow tracking for your sales and service teams.
    </p>

    <h4>Record ID <code>string</code></h4>
    <dd>
      The unique identifier of the Task that needs to be updated. 
      <br /><br />
      This ensures the correct task is modified and linked to the appropriate record.
      <br /><br />
      Retrieve this ID from the Tasks Table or obtain it from an API response.
      <br /><br />
      Format: <code>00TXXXXXXXXXXXXXXX</code>
    </dd>

    <h4>What ID <code>string</code></h4>
    <dd>
      The unique identifier of the related object, such as a Lead, Contact, Opportunity, or Account.
      <br /><br />
      This ensures the task remains associated with the correct Salesforce record.
    </dd>

    <h4>Who ID <code>string</code></h4>
    <dd>
      The unique identifier of the person associated with the task.
      <br /><br />
      This is typically a Contact or Lead and helps track task ownership for better communication and follow-ups.
    </dd>

    <h4>Subject <code>string</code></h4>
    <dd>
      The subject of the task. Updating this field ensures clarity in task lists and reports.
      <br /><br />
      Example: "Follow-up Call" or "Send Proposal."
    </dd>

    <h4>Activity Date <code>date</code></h4>
    <dd>
      The due date of the task. 
      <br /><br />
      Keeping this updated helps teams manage deadlines and ensure timely completion of activities.
      <br /><br />
      Format: <code>YYYY-MM-DD</code>
    </dd>

    <h4>Status <code>string</code></h4>
    <dd>
      The current status of the task. Updating this ensures progress tracking and completion monitoring.
      <br /><br />
      Common statuses include "Not Started," "In Progress," "Completed," and "Deferred."
    </dd>
  </Fragment>
),


      /* ===================== Update Record - Account ===================== */
'Update Record - Account': (
  <Fragment>
    <h3>Update Record - Account</h3>
    <p>
      The <strong>Update Record - Account</strong> command allows you to modify an existing Account record in Salesforce. 
      Accounts represent businesses, organizations, or individuals that have a relationship with your company. 
      Keeping account details up to date ensures accurate tracking of business relationships, customer interactions, 
      and ownership assignments.
    </p>
    <p>
      To update an Account, you must provide its unique Record ID. Regular updates help maintain clean data, 
      improve reporting accuracy, and streamline communication with stakeholders.
    </p>

    <h4>Record ID <code>string</code></h4>
    <dd>
      The unique identifier of the Account that needs to be updated.
      <br /><br />
      This ensures that the correct Account record is modified.
      <br /><br />
      Retrieve this ID from the Accounts Table or obtain it from an API response.
      <br /><br />
      Format: <code>001XXXXXXXXXXXXXXX</code>
    </dd>

    <h4>Name <code>string</code></h4>
    <dd>
      The name of the Account. Keeping this field updated ensures consistency and better identification in records and reports.
      <br /><br />
      Example: "Acme Corporation" or "Tech Solutions Ltd."
    </dd>

    <h4>Owner ID <code>string</code></h4>
    <dd>
      The unique identifier of the Salesforce user who owns the Account.
      <br /><br />
      Assigning the correct owner helps ensure accountability and smooth customer interactions.
    </dd>

    <h4>Website <code>string</code></h4>
    <dd>
      The official website URL of the Account. Updating this field helps maintain accurate company contact details.
      <br /><br />
      Example: <code>https://www.company.com</code>
    </dd>

    <h4>Phone <code>string</code></h4>
    <dd>
      The primary contact number associated with the Account. Keeping phone numbers updated facilitates direct communication.
      <br /><br />
      Example: <code>+1 555-123-4567</code>
    </dd>

    <h4>Description <code>string</code></h4>
    <dd>
      Additional details about the Account. This field can be used to store background information, key business insights, or other relevant notes.
    </dd>

    <h4>Additional Fields <code>string</code></h4>
    <dd>
      Any extra fields necessary for updating the Account record. This ensures flexibility to store custom information as needed.
    </dd>
  </Fragment>
),

    /* ===================== Get Record by ID - Contact ===================== */
'Get Record by ID - Contact': (
  <Fragment>
    <h3>Get Record by ID - Contact</h3>
    <p>
      The <strong>Get Record by ID - Contact</strong> command allows you to retrieve a specific Contact record from Salesforce 
      using its unique Record ID. Contacts represent individuals associated with an Account, such as customers, partners, or leads. 
      Fetching contact details enables better customer management, personalized communication, and efficient record-keeping.
    </p>
    <p>
      By providing the correct Record ID, you can access the full details of a Contact, including their name, email, 
      phone number, and related records. This ensures accurate data retrieval and helps streamline workflow automation.
    </p>

    <h4>Record ID <code>string</code></h4>
    <dd>
      The unique identifier for a Contact record in Salesforce. 
      <br /><br />
      This ID is automatically generated when a Contact is created and is required to fetch the correct record.
      <br /><br />
      Retrieve this ID from the Contacts Table, an API response, or directly from the Salesforce URL when viewing a Contact.
      <br /><br />
      Format: <code>003XXXXXXXXXXXXXXX</code>
      <br /><br />
      <strong>Example:</strong> <code>0035g00000Abc123AAA</code>
    </dd>
  </Fragment>
),


     /* ===================== Get Record by ID - Lead ===================== */
'Get Record by ID - Lead': (
  <Fragment>
    <h3>Get Record by ID - Lead</h3>
    <p>
      The <strong>Get Record by ID - Lead</strong> command allows you to retrieve a specific Lead record from Salesforce 
      using its unique Record ID. Leads represent potential customers or prospects who have expressed interest in your 
      products or services. Accessing lead details helps streamline follow-ups, nurture relationships, and convert them into 
      opportunities.
    </p>
    <p>
      By providing the correct Record ID, you can retrieve comprehensive lead information, including name, company, 
      contact details, and status. This ensures efficient lead tracking and enables data-driven sales strategies.
    </p>

    <h4>Record ID <code>string</code></h4>
    <dd>
      The unique identifier for a Lead record in Salesforce. 
      <br /><br />
      This ID is automatically generated when a Lead is created and is required to fetch the correct record.
      <br /><br />
      Retrieve this ID from the Leads Table, an API response, or directly from the Salesforce URL when viewing a Lead.
      <br /><br />
      Format: <code>00QXXXXXXXXXXXXXXX</code>
      <br /><br />
      <strong>Example:</strong> <code>00Q4x00000Abc567XXX</code>
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
      The unique identifier for an opportunity record in Salesforce. 
      <br /><br />
      This ID is automatically generated when an opportunity is created and is required to fetch the correct record.
      <br /><br />
      Retrieve this ID from the Opportunities Table, an API response, or directly from the Salesforce URL when viewing an opportunity.
      <br /><br />
      Format: <code>006XXXXXXXXXXXXXXX</code>
      <br /><br />
      <strong>Example:</strong> <code>0067x00000Xyz890YYY</code>
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
      The unique identifier for a task record in Salesforce. 
      <br /><br />
      This ID is generated when a task is created and is required to fetch the correct record.
      <br /><br />
      Retrieve this ID from the Tasks Table, an API response, or directly from the Salesforce URL when viewing a task.
      <br /><br />
      Format: <code>00TXXXXXXXXXXXXXXX</code>
      <br /><br />
      <strong>Example:</strong> <code>00T9x00000Bcd234ZZZ</code>
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
      The unique identifier for an account record in Salesforce. 
      <br /><br />
      This ID is generated when an account is created and is required to fetch the correct record.
      <br /><br />
      Retrieve this ID from the Accounts Table, an API response, or directly from the Salesforce URL when viewing an account.
      <br /><br />
      Format: <code>001XXXXXXXXXXXXXXX</code>
      <br /><br />
      <strong>Example:</strong> <code>0012x00000Abc456AAA</code>
    </dd>
  </Fragment>
),

/* ===================== Get Record by ID - Any ===================== */
'Get Record by ID - Any': (
  <Fragment>
    <h3>Get Record by ID - Any</h3>
    <p>Retrieve a specific record in Salesforce using its unique identifier and record type.</p>

    <h4>Record ID <code>string</code></h4>
    <dd>
      The unique identifier for a Salesforce record. Generated automatically, it can be retrieved from relevant tables, API responses, or the Salesforce URL. 
      Format varies based on the object type.
      <br/><strong>Example:</strong> "0035g00000Xyz789AAA" (Contact), "00Q4x00000Abc123BBB" (Lead)
    </dd>

    <h4>Record Type <code>string</code></h4>
    <dd>Specify the object type of the record to retrieve, such as Contact, Lead, or Account.</dd>
  </Fragment>
),


    /* ===================== Search Record - Contact ===================== */
'Search Record - Contact': (
  <Fragment>
    <h3>Search Record - Contact</h3>
    <p>Retrieve contact records in Salesforce by applying filters and pagination.</p>

    <h4>Filter Formula <code>string</code></h4>
    <dd>
      Define conditions to filter search results and fetch only relevant contacts.
      <br/><strong>Example:</strong>
      <pre>
"FirstName = 'John' AND LastName = 'Doe'"
      </pre>
      Retrieves contacts with the exact first and last name.
      <br/><strong>Example:</strong>
      <pre>
"Email LIKE '%@example.com'"
      </pre>
      Finds contacts with an email ending in "@example.com".
    </dd>

    <h4>Pagination Parameters <code>object</code></h4>
    <dd>
      Manage search results by retrieving records in chunks instead of all at once.
      <br/><strong>Example:</strong>
      <pre>
{ "{ limit: 10, offset: 0 }" }
      </pre>
      Fetches the first 10 records.
      <br/><strong>Example:</strong>
      <pre>
{ "{ limit: 10, offset: 10 }" }
      </pre>
      Fetches the next 10 records (records 11-20).
    </dd>
  </Fragment>
),


/* ===================== Search Record - Lead ===================== */
'Search Record - Lead': (
  <Fragment>
    <h3>Search Record - Lead</h3>
    <p>Retrieve lead records in Salesforce by applying filters and pagination.</p>

    <h4>Filter Formula <code>string</code></h4>
    <dd>
      Define conditions to filter search results and fetch only relevant leads.
      <br/><strong>Example:</strong>
      <pre>
"Company = 'Acme Corp'"
      </pre>
      Retrieves leads from Acme Corp.
      <br/><strong>Example:</strong>
      <pre>
"Company = 'Acme Corp' OR Company = 'Globex'"
      </pre>
      Finds leads from either company.
    </dd>

    <h4>Pagination Parameters <code>object</code></h4>
    <dd>
      Manage search results by retrieving records in chunks instead of all at once.
      <br/><strong>Example:</strong>
      <pre>
{ "{ limit: 10, offset: 20 }" }
      </pre>
      Fetches leads 21-30.
      <br/><strong>Example:</strong>
      <pre>
{ "{ limit: 5, offset: 15 }" }
      </pre>
      Fetches leads 16-20.
    </dd>
  </Fragment>
),


     /* ===================== Search Record - Opportunity ===================== */
'Search Record - Opportunity': (
  <Fragment>
    <h3>Search Record - Opportunity</h3>
    <p>Retrieve opportunity records in Salesforce by applying filters and pagination.</p>

    <h4>Filter Formula <code>string</code></h4>
    <dd>
      Define conditions to filter search results and fetch only relevant opportunities.
      <br/><strong>Example:</strong>
      <pre>
"StageName = 'Closed Won'"
      </pre>
      Retrieves successfully closed deals.
      <br/><strong>Example:</strong>
      <pre>
"Amount > 50000"
      </pre>
      Finds opportunities with a value greater than $50,000.
    </dd>

    <h4>Pagination Parameters <code>object</code></h4>
    <dd>
      Manage search results by retrieving records in chunks instead of all at once.
      <br/><strong>Example:</strong>
      <pre>
{ "{ limit: 5, offset: 0 }" }
      </pre>
      Fetches the first five records.
      <br/><strong>Example:</strong>
      <pre>
{ "{ limit: 10, offset: 10 }" }
      </pre>
      Retrieves records 11-20.
    </dd>
  </Fragment>
),


      /* ===================== Search Record - Any ===================== */
'Search Record - Any': (
  <Fragment>
    <h3>Search Record - Any</h3>
    <p>Retrieve any Salesforce records by specifying type, filters, and pagination.</p>

    <h4>Record Type <code>string</code></h4>
    <dd>
      Define the object type to search (e.g., Contact, Lead, Account).
    </dd>

    <h4>Filter Formula <code>string</code></h4>
    <dd>
      Define conditions to filter search results and fetch only relevant records.
      <br/><strong>Example:</strong>
      <pre>
"Name LIKE '%Acme%'"
      </pre>
      Searches for records containing "Acme" in the name.
      <br/><strong>Example:</strong>
      <pre>
"Industry = 'Finance' AND BillingState = 'NY'"
      </pre>
      Fetches finance-related records in New York.
    </dd>

    <h4>Pagination Parameters <code>object</code></h4>
    <dd>
      Manage search results by retrieving records in chunks instead of all at once.
      <br/><strong>Example:</strong>
      <pre>
{ "{ limit: 20, offset: 50 }" }
      </pre>
      Fetches records 51-70.
      <br/><strong>Example:</strong>
      <pre>
{ "{ limit: 30, offset: 90 }" }
      </pre>
      Retrieves records 91-120.
    </dd>
  </Fragment>
),


      /* ===================== Get Record by View ID - Contact ===================== */
'Get Record by View ID - Contact': (
  <Fragment>
    <h3>Get Record by View ID - Contact</h3>
    <p>
      The Get Record by View ID - Contact command allows you to retrieve a list of Contact records from Salesforce using a specific List View ID.
      A Contact in Salesforce represents an individual associated with an Account (business or organization). 
    </p>
    <p>
      This command enables users to fetch contacts that meet predefined criteria within a saved list view in Salesforce. Once executed, the response contains a paginated list of Contact records, which can be displayed in applications or used for further processing.
    </p>

    <h4>List View ID <code>string</code></h4>
    <dd>
      A unique identifier assigned to a saved list view in Salesforce. It allows fetching records based on predefined filters.
      <br/>Retrieve it from the Salesforce UI by opening the list view and copying the ID from the URL.
      <br/><strong>Example:</strong>
      <pre>
"00B5g00000Xyz123AAA"
      </pre>
    </dd>

    <h4>Pagination Parameters <code>object</code></h4>
    <dd>
      Manage search results by retrieving records in chunks instead of all at once.
      <br/><strong>Example:</strong>
      <pre>
{ "{ limit: 10, offset: 0 }" }
      </pre>
      Fetches the first 10 records.
      <br/><strong>Example:</strong>
      <pre>
{ "{ limit: 20, offset: 20 }" }
      </pre>
      Fetches records 21-40.
    </dd>
  </Fragment>
),

  
       /* ===================== Get Record by View ID - Lead ===================== */
'Get Record by View ID - Lead': (
  <Fragment>
    <h3>Get Record by View ID - Lead</h3>
    <p>
      The Get Record by View ID - Lead command allows you to retrieve a list of Lead records from Salesforce using a specific List View ID.
      A Lead in Salesforce represents a potential customer or business prospect. Leads are often captured from marketing campaigns, website forms, or manual data entry.
    </p>
    <p>
      This command helps users fetch leads that match predefined filters within a saved list view. Once executed, the response provides a paginated list of Lead records, which can be used for further processing, reporting, or sales outreach.
    </p>

    <h4>List View ID <code>string</code></h4>
    <dd>
      A unique identifier assigned to a saved list view in Salesforce. It allows fetching Lead records based on predefined filters.
      <br/>Retrieve it from the Salesforce UI by opening the Lead list view and copying the ID from the URL.
      <br/><strong>Example:</strong>
      <pre>
"00B6x00000Abc789BBB"
      </pre>
    </dd>

    <h4>Pagination Parameters <code>object</code></h4>
    <dd>
      Manage result sets by fetching records in batches to optimize performance.
      <br/><strong>Example:</strong>
      <pre>
{ "{ limit: 15, offset: 0 }" }
      </pre>
      Retrieves the first 15 Lead records.
      <br/><strong>Example:</strong>
      <pre>
{ "{ limit: 10, offset: 30 }" }
      </pre>
      Retrieves Lead records 31-40.
    </dd>
  </Fragment>
),

        /* ===================== Get Record by View ID - Opportunity ===================== */
'Get Record by View ID - Opportunity': (
  <Fragment>
    <h3>Get Record by View ID - Opportunity</h3>
    <p>
      The Get Record by View ID - Opportunity command allows you to retrieve a list of Opportunity records from Salesforce using a specific List View ID.
      An Opportunity in Salesforce represents a potential revenue-generating deal in the sales pipeline, linked to an Account and Contact.
    </p>
    <p>
      This command is useful for sales teams to fetch opportunities that match predefined filters within a saved list view. Once executed, the response returns a paginated list of Opportunity records, which can be used for sales forecasting, reporting, and pipeline tracking.
    </p>

    <h4>List View ID <code>string</code></h4>
    <dd>
      A unique identifier assigned to a saved list view in Salesforce. It allows fetching Opportunity records based on predefined filters.
      <br/>Retrieve it from the Salesforce UI by opening an Opportunity list view and copying the ID from the URL.
      <br/><strong>Example:</strong>
      <pre>
"00B7x00000Def567CCC"
      </pre>
    </dd>

    <h4>Pagination Parameters <code>object</code></h4>
    <dd>
      Manage result sets by fetching records in batches to optimize performance.
      <br/><strong>Example:</strong>
      <pre>
{ "{ limit: 5, offset: 0 }" }
      </pre>
      Retrieves the first five Opportunity records.
      <br/><strong>Example:</strong>
      <pre>
{ "{ limit: 10, offset: 10 }" }
      </pre>
      Retrieves Opportunity records 11-20.
    </dd>
  </Fragment>
),

  /* ===================== Get Record by View ID - Any ===================== */
'Get Record by View ID - Any': (
  <Fragment>
    <h3>Get Record by View ID - Any</h3>
    <p>
      The Get Record by View ID - Any command allows you to retrieve records of any Salesforce object type using a specific List View ID.
      This command is useful when working with multiple record types, such as Contacts, Leads, Accounts, or Opportunities, and need to fetch records that match predefined filters in a saved list view.
    </p>
    <p>
      Once executed, Salesforce returns a paginated response with records matching the list view filters. This command is ideal for generating reports,
      managing bulk data retrieval, or integrating with third-party applications that require structured Salesforce data.
    </p>

    <h4>Record Type <code>string</code></h4>
    <dd>
      Specifies the type of record to be fetched using the list view.
      <br/><strong>Example:</strong> "Contact", "Lead", "Account", or "Opportunity".
    </dd>

    <h4>List View ID <code>string</code></h4>
    <dd>
      A unique identifier assigned to a saved list view in Salesforce. It allows fetching records based on predefined filters.
      <br/>Retrieve it from the Salesforce UI by opening a list view and copying the ID from the URL.
      <br/><strong>Example:</strong>
      <pre>
"00B8x00000Ghi890DDD"
      </pre>
    </dd>

    <h4>Pagination Parameters <code>object</code></h4>
    <dd>
      Manages the retrieval of records in chunks to optimize performance.
      <br/><strong>Example:</strong>
      <pre>
{ "{ limit: 20, offset: 50 }" }
      </pre>
      Retrieves records 51-70.
      <br/><strong>Example:</strong>
      <pre>
{ "{ limit: 30, offset: 90 }" }
      </pre>
      Retrieves records 91-120.
    </dd>
  </Fragment>
),


      /* ===================== Create Custom Field - Lead ===================== */
'Create Custom Field - Lead': (
  <Fragment>
    <h3>Create Custom Field - Lead</h3>
    <p>
      The Create Custom Field - Lead command allows you to add a new custom field to the Lead object in Salesforce. Custom fields help capture additional data specific to your business needs, ensuring that the Lead records store relevant and structured information beyond the standard fields.
    </p>
    <p>
      Once the command is executed, Salesforce adds the new field to the Lead object. The field can then be used in reports, forms, and workflows to enhance lead management. This feature is useful for tracking custom attributes such as lead source details, scoring criteria, or industry-specific information.
    </p>

    <h4>Label <code>string</code></h4>
    <dd>
      The display name for the custom field, shown in the UI. Choose a descriptive name that aligns with business terminology.
      <br/><strong>Example:</strong> "Lead Source Category".
    </dd>

    <h4>Type <code>string</code></h4>
    <dd>
      The data type of the field, such as Text, Number, Boolean, or Picklist. Determines how data is stored and validated.
      <br/><strong>Example:</strong> "Text" for a custom Lead Identifier.
    </dd>

    <h4>Default Checkbox Value <code>boolean</code></h4>
    <dd>
      For checkbox fields, define whether it should be checked (true) or unchecked (false) by default.
      <br/><strong>Example:</strong> "Is Active" set to true.
    </dd>

    <h4>Length <code>integer</code></h4>
    <dd>
      Defines the maximum number of characters allowed for a text field. Helps prevent excessive data entry.
      <br/><strong>Example:</strong> "Company Code" with a max length of 10.
    </dd>

    <h4>Decimal Places <code>integer</code></h4>
    <dd>
      Specifies how many decimal places a numeric field should allow. Useful for financial or measurement-related fields.
      <br/><strong>Example:</strong> "Discount Percentage" with 2 decimal places (e.g., 15.75%).
    </dd>

    <h4>Picklist Values <code>array</code></h4>
    <dd>
      A set of predefined selectable values for picklist fields. Ensures data consistency.
      <br/><strong>Example:</strong> "Lead Status" with options: "New, Contacted, Qualified".
    </dd>

    <h4>Visible Lines <code>integer</code></h4>
    <dd>
      Specifies the number of visible lines in a long text field. Helps with structured data entry.
      <br/><strong>Example:</strong> "Notes" field with 5 visible lines.
    </dd>

    <h4>Helper Text <code>string</code></h4>
    <dd>
      Provides guidance on what to enter in the field. Displayed as a tooltip or inline text.
      <br/><strong>Example:</strong> "Enter the primary reason for lead disqualification".
    </dd>

    <h4>Default Field Value <code>string</code></h4>
    <dd>
      The pre-populated value shown when creating a new record. Ensures faster data entry.
      <br/><strong>Example:</strong> "Country" defaulting to "United States".
    </dd>
  </Fragment>
),

/* ===================== Create Custom Field - Contact ===================== */
'Create Custom Field - Contact': (
  <Fragment>
    <h3>Create Custom Field - Contact</h3>
    <p>
      The Create Custom Field - Contact command allows you to add a new custom field to the Contact object in Salesforce. Custom fields enhance data collection by enabling you to store additional information about contacts beyond standard Salesforce fields.
    </p>
    <p>
      Once the command is executed, Salesforce adds the new field to the Contact object. The field can then be used in reports, forms, and workflows to improve contact management. This is particularly useful for capturing details such as communication preferences, relationship status, or any other custom business-specific attributes.
    </p>

    <h4>Label <code>string</code></h4>
    <dd>
      The name of the field as displayed in the UI. Choose a descriptive label that aligns with business terminology.
      <br/><strong>Example:</strong> "Preferred Contact Method".
    </dd>

    <h4>Type <code>string</code></h4>
    <dd>
      Defines the data type, such as Text, Boolean, or Picklist. Determines how the field stores and validates data.
      <br/><strong>Example:</strong> "Picklist" for selecting communication preferences.
    </dd>

    <h4>Default Checkbox Value <code>boolean</code></h4>
    <dd>
      Defines whether a checkbox should be checked (true) or unchecked (false) by default.
      <br/><strong>Example:</strong> "Subscribed to Newsletter" set to true.
    </dd>

    <h4>Length <code>integer</code></h4>
    <dd>
      Specifies the maximum number of characters for text fields. Helps prevent excessively long data entries.
      <br/><strong>Example:</strong> "Nickname" with a max length of 30.
    </dd>

    <h4>Decimal Places <code>integer</code></h4>
    <dd>
      Determines how many decimal places a numeric field should support. Useful for fields involving numerical precision.
      <br/><strong>Example:</strong> "Credit Score" with 2 decimal places.
    </dd>

    <h4>Picklist Values <code>array</code></h4>
    <dd>
      A predefined list of values for selection. Ensures consistency in data entry.
      <br/><strong>Example:</strong> "Communication Preference" with options: "Email, Phone, SMS".
    </dd>

    <h4>Visible Lines <code>integer</code></h4>
    <dd>
      Defines how many lines are visible for long text fields. Helps structure multiline text input.
      <br/><strong>Example:</strong> "Additional Notes" with 4 visible lines.
    </dd>

    <h4>Helper Text <code>string</code></h4>
    <dd>
      Instructions or hints displayed to users to guide data entry.
      <br/><strong>Example:</strong> "Enter the best way to contact this person".
    </dd>

    <h4>Default Field Value <code>string</code></h4>
    <dd>
      A default value pre-filled in new records. Ensures faster data entry and standardization.
      <br/><strong>Example:</strong> "Preferred Language" defaulting to "English".
    </dd>
  </Fragment>
),


      /* ===================== Create Custom Field - Opportunity ===================== */
'Create Custom Field - Opportunity': (
  <Fragment>
    <h3>Create Custom Field - Opportunity</h3>
    <p>
      The Create Custom Field - Opportunity command allows you to add a new custom field to the Opportunity object in Salesforce. Custom fields enhance opportunity tracking by enabling the storage of additional details beyond standard Salesforce fields.
    </p>
    <p>
      Once the command is executed, Salesforce adds the custom field to the Opportunity object, allowing users to capture and manage relevant business data such as deal progress, projected revenue, and custom sales metrics. These fields can be used in reports, automation workflows, and dashboards to improve sales insights and forecasting accuracy.
    </p>

    <h4>Label <code>string</code></h4>
    <dd>
      The display name for the field as shown in the UI. Choose a meaningful name that aligns with sales processes.
      <br/><strong>Example:</strong> "Expected Revenue Category".
    </dd>

    <h4>Type <code>string</code></h4>
    <dd>
      Defines the kind of data the field holds, such as Text, Number, Boolean, or Picklist. Determines data format and validation rules.
      <br/><strong>Example:</strong> "Stage Progress Indicator" as a picklist field.
    </dd>

    <h4>Default Checkbox Value <code>boolean</code></h4>
    <dd>
      Determines whether a checkbox field is selected (true) or unselected (false) by default.
      <br/><strong>Example:</strong> "Include in Forecast" set to true.
    </dd>

    <h4>Length <code>integer</code></h4>
    <dd>
      Defines character limits for text fields to maintain data quality and consistency.
      <br/><strong>Example:</strong> "Sales Representative Name" with a 50-character limit.
    </dd>

    <h4>Decimal Places <code>integer</code></h4>
    <dd>
      Controls decimal precision for numeric values. Useful for currency calculations, probability fields, or percentage values.
      <br/><strong>Example:</strong> "Projected Growth Rate" with 3 decimal places (e.g., 3.145%).
    </dd>

    <h4>Picklist Values <code>array</code></h4>
    <dd>
      A predefined list of selectable values for structured data entry. Helps standardize opportunity categorization.
      <br/><strong>Example:</strong> "Sales Cycle Stage" with values: "Negotiation, Proposal, Closed".
    </dd>

    <h4>Visible Lines <code>integer</code></h4>
    <dd>
      Defines the number of lines visible in a long text field. Useful for capturing detailed notes or descriptions.
      <br/><strong>Example:</strong> "Deal Summary" with 6 visible lines.
    </dd>

    <h4>Helper Text <code>string</code></h4>
    <dd>
      Provides additional instructions for users entering data to ensure accuracy and consistency.
      <br/><strong>Example:</strong> "Specify the primary competitor involved in this deal".
    </dd>

    <h4>Default Field Value <code>string</code></h4>
    <dd>
      The automatically populated value when creating new records. Helps streamline data entry and standardize default assumptions.
      <br/><strong>Example:</strong> "Probability" defaulting to "50%".
    </dd>
  </Fragment>
),


  /* ===================== Create Custom Field - Task ===================== */
'Create Custom Field - Task': (
  <Fragment>
    <h3>Create Custom Field - Task</h3>
    <p>
      The Create Custom Field - Task command allows you to add a new custom field to the Task object in Salesforce. Custom fields help enhance task tracking by allowing additional data storage beyond standard Salesforce fields.
    </p>
    <p>
      Once the command is executed, the new field becomes available in the Task object, enabling users to capture relevant details such as task priority, estimated effort, or custom classifications. These fields can be used in automation rules, reporting, and workflow triggers to improve task management and productivity.
    </p>

    <h4>Label <code>string</code></h4>
    <dd>
      The name displayed in the UI for this field. Choose a clear and meaningful label that aligns with task tracking needs.
      <br/><strong>Example:</strong> "Task Category".
    </dd>

    <h4>Type <code>string</code></h4>
    <dd>
      Defines the type of data stored, such as Text, Boolean, or Picklist. Determines input validation and format.
      <br/><strong>Example:</strong> "Picklist" for task priority (High, Medium, Low).
    </dd>

    <h4>Default Checkbox Value <code>boolean</code></h4>
    <dd>
      Determines whether a checkbox field is selected (true) or unselected (false) by default.
      <br/><strong>Example:</strong> "Send Reminder" set to true.
    </dd>

    <h4>Length <code>integer</code></h4>
    <dd>
      Defines character limits for text fields to maintain consistency and data quality.
      <br/><strong>Example:</strong> "Task Description" with a max length of 200 characters.
    </dd>

    <h4>Decimal Places <code>integer</code></h4>
    <dd>
      Determines decimal precision for numeric values, useful for tracking time estimates or measurements.
      <br/><strong>Example:</strong> "Estimated Duration (Hours)" with 1 decimal place (e.g., 2.5 hours).
    </dd>

    <h4>Picklist Values <code>array</code></h4>
    <dd>
      A predefined list of selectable values for structured task categorization.
      <br/><strong>Example:</strong> "Task Type" with values: "Call, Meeting, Email".
    </dd>

    <h4>Visible Lines <code>integer</code></h4>
    <dd>
      Defines how many lines are visible for long text fields, improving readability for detailed notes.
      <br/><strong>Example:</strong> "Notes" with 3 visible lines.
    </dd>

    <h4>Helper Text <code>string</code></h4>
    <dd>
      Instructions or hints displayed to users to guide data entry and ensure consistency.
      <br/><strong>Example:</strong> "Enter specific instructions for completing this task".
    </dd>

    <h4>Default Field Value <code>string</code></h4>
    <dd>
      A default value pre-filled in new records to streamline task creation.
      <br/><strong>Example:</strong> "Task Status" defaulting to "Open".
    </dd>
  </Fragment>
),


  /* ===================== Create Custom Field - Account ===================== */
'Create Custom Field - Account': (
  <Fragment>
    <h3>Create Custom Field - Account</h3>
    <p>
      The Create Custom Field - Account command allows you to add a new custom field to the Account object in Salesforce. Custom fields extend standard account attributes, enabling organizations to track and store additional business-specific details.
    </p>
    <p>
      Once the command is executed, the custom field becomes available within the Account object, allowing users to capture important information such as customer segmentation, account classification, or specific financial data. These fields can be used in reporting, automation, and business intelligence to enhance customer management.
    </p>

    <h4>Label <code>string</code></h4>
    <dd>
      The name displayed in the UI for this field. Choose a descriptive and meaningful label for clarity.
      <br/><strong>Example:</strong> "Account Tier".
    </dd>

    <h4>Type <code>string</code></h4>
    <dd>
      Defines the type of data stored in this field, such as Text, Boolean, or Picklist. Determines input validation and field behavior.
      <br/><strong>Example:</strong> "Picklist" for Tier selection (Gold, Silver, Bronze).
    </dd>

    <h4>Default Checkbox Value <code>boolean</code></h4>
    <dd>
      Defines whether a checkbox field should be checked (true) or unchecked (false) by default.
      <br/><strong>Example:</strong> "Preferred Customer" set to true.
    </dd>

    <h4>Length <code>integer</code></h4>
    <dd>
      Specifies the maximum number of characters allowed for text fields to ensure data consistency.
      <br/><strong>Example:</strong> "Industry Type" with a max length of 50.
    </dd>

    <h4>Decimal Places <code>integer</code></h4>
    <dd>
      Determines decimal precision for numeric values, useful for financial or statistical data.
      <br/><strong>Example:</strong> "Annual Revenue" with 2 decimal places.
    </dd>

    <h4>Picklist Values <code>array</code></h4>
    <dd>
      A predefined list of selectable values to maintain structured data entry.
      <br/><strong>Example:</strong> "Business Type" with values: "Enterprise, Small Business, Nonprofit".
    </dd>

    <h4>Visible Lines <code>integer</code></h4>
    <dd>
      Defines the number of lines visible for long text fields, improving readability for multi-line input.
      <br/><strong>Example:</strong> "Account History" with 4 visible lines.
    </dd>

    <h4>Helper Text <code>string</code></h4>
    <dd>
      Instructions or hints displayed to users to ensure accurate data entry.
      <br/><strong>Example:</strong> "Specify key details about the business relationship".
    </dd>

    <h4>Default Field Value <code>string</code></h4>
    <dd>
      A default value pre-filled in new records to streamline account creation.
      <br/><strong>Example:</strong> "Account Status" defaulting to "Active".
    </dd>
  </Fragment>
),

/* ===================== Write SOQL Query ===================== */
'Write SOQL Query': (
  <Fragment>
    <h3>Write SOQL Query</h3>
    <p>
      The Write SOQL Query command allows you to retrieve records from Salesforce objects using the Salesforce Object Query Language (SOQL). 
      SOQL is a query language similar to SQL but designed specifically for Salesforce, enabling you to filter, sort, and aggregate data stored in standard and custom objects.
    </p>
    <p>
      SOQL queries are commonly used to extract relevant data for reports, dashboards, and application logic, ensuring users can efficiently work with Salesforce records. 
      Queries must specify the object, fields, and optional conditions to filter results.
    </p>

    <h4>Query <code>string</code></h4>
    <dd>
      The SOQL query used to retrieve records from Salesforce. Queries must specify the object and fields to retrieve.
      <br/><strong>Example 1:</strong> Retrieve all contacts with a specific last name:
      <pre>
      <code>
SELECT Id, FirstName, LastName 
FROM Contact 
WHERE LastName = 'Smith'
      </code>
      </pre>
      
      <br/><strong>Example 2:</strong> Fetch opportunities that are in the proposal stage:
      <pre>
      <code>
SELECT Id, Name, StageName 
FROM Opportunity 
WHERE StageName = 'Proposal'
      </code>
      </pre>

      <br/><strong>Example 3:</strong> Get accounts created in the last 30 days:
      <pre>
      <code>
SELECT Id, Name 
FROM Account 
WHERE CreatedDate = LAST_N_DAYS:30
      </code>
      </pre>
    </dd>
  </Fragment>
),


/* ===================== Create Custom Object ===================== */
'Create Custom Object': (
  <Fragment>
    <h3>Create Custom Object</h3>
    <p>
      The Create Custom Object command allows you to define a new custom object in Salesforce. 
      Custom objects are user-defined structures used to store specific types of data that do not fit into standard Salesforce objects. 
      These objects enable businesses to tailor Salesforce to their unique needs, allowing for efficient data management and integration with existing workflows.
    </p>
    <p>
      When creating a custom object, you define its display labels, description, and key properties such as record names. 
      Custom objects can be used in reports, automation, and API integrations to enhance business processes.
    </p>

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
    <p>
      The Describe Action Schema command provides metadata details about a Salesforce object or action. 
      It allows users to retrieve structural information, such as field properties, data types, and available operations 
      for a given object or action. This is useful for dynamically generating forms, validating inputs, and integrating 
      Salesforce data with external systems.
    </p>
    <p>
      By using this command, you can programmatically inspect an object's schema and determine how to interact with it, 
      ensuring accurate data entry and processing.
    </p>

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
