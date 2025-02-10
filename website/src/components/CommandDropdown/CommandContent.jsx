import React, { useState, Fragment } from 'react';
import CommandDropdown from './index';

export default function CommandContent() {
  const [selectedCommand, setSelectedCommand] = useState('');

  const renderCommandContent = () => {
    if (!selectedCommand) return null;

    const content = {
      'Create Record - Lead': (
        <Fragment>
          <h3>Create Record - Lead</h3>
          <p>
            Create a new lead record in Salesforce by providing key details such as name, company, email, phone, and status. This ensures that the lead is properly recorded and categorized in the system.
          </p>

          <h4>First Name <code>string</code></h4>
          <dd>
            The first name of the lead. This helps personalize interactions and distinguish leads with similar last names.
          </dd>

          <h4>Last Name <code>string</code></h4>
          <dd>
            The last name of the lead. Required for proper identification and formal communication.
          </dd>

          <h4>Company <code>string</code></h4>
          <dd>
            The company or organization the lead is associated with. This helps categorize leads by their business entity.
          </dd>

          <h4>Email <code>string</code></h4>
          <dd>
            The email address of the lead. This is used for communication, follow-ups, and marketing campaigns.
            
            <p><strong>Example:</strong> To add the lead email dynamically, use:</p>
            
            <pre>
              <code className="language-js">
                {`{{appsmith.user.email}}`}
                {`\n// "jane.doe@example.com"`}
              </code>
            </pre>
          </dd>

          <h4>Phone <code>string</code></h4>
          <dd>
            The contact number of the lead, used for direct communication and outreach.
          </dd>

          <h4>Website <code>string</code></h4>
          <dd>
            The lead's company website or a personal website for reference. This can provide additional context about the lead's business.
          </dd>

          <h4>Title <code>string</code></h4>
          <dd>
            The lead’s job title within the company, such as "Marketing Manager" or "CEO."
          </dd>

          <h4>Status <code>string</code></h4>
          <dd>
            The current status of the lead within the sales pipeline. This helps track progress and prioritize follow-ups. Status values typically include:
            <ul>
              <li><code>"Open"</code>: The lead has been captured but not yet contacted.</li>
              <li><code>"Contacted"</code>: An initial conversation has taken place.</li>
              <li><code>"Qualified"</code>: The lead has been assessed as a potential customer.</li>
              <li><code>"Converted"</code>: The lead has been converted into an opportunity or customer.</li>
              <li><code>"Closed"</code>: No further action is required.</li>
            </ul>

            <p><strong>Example:</strong> To dynamically set the lead status using a Select widget, use:</p>
            
            <pre>
              <code className="language-js">
                {`{{LeadStatus.selectedOptionValue}}`}
              </code>
            </pre>
          </dd>

          <h4>Description <code>string</code></h4>
          <dd>
            Additional notes about the lead. This can include background information, key interests, or other relevant details.
          </dd>

          <h4>Additional Field <code>string</code></h4>
          <dd>
            Any custom field required for specific business needs.
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
