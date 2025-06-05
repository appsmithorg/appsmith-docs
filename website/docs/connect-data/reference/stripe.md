# Stripe

This page provides information on how to connect to Stripe. It enables users to perform actions such as creating customers, managing subscriptions, handling products, and accessing balance transactions.

## Connect Stripe

To connect to Stripe, you need to authenticate using your Stripe API key. This authentication provides secure access to your Stripe account and resources.

### API Key Authentication

To authenticate with Stripe, you need to provide your Stripe secret API key:

1. Log in to your Stripe Dashboard at [dashboard.stripe.com](https://dashboard.stripe.com)
2. Navigate to Developers → API keys
3. Under "Secret key," click "Reveal test key" or "Reveal live key" depending on your environment
   - **Test mode**: Use test keys for development and testing (prefixed with `sk_test_`)
   - **Live mode**: Use live keys for production (prefixed with `sk_live_`)
4. Copy the key and paste it in the Appsmith Stripe datasource configuration

:::note
Consider using restricted API keys with limited permissions for specific use cases
:::

## Query Stripe

The following section provides a reference guide describing available commands and their parameters for interacting with Stripe.

### Create Customer

Creates a new customer in your Stripe account. This command allows you to define customer details such as email, name, and description, and returns the created customer's information including their unique ID for future reference.

#### Email Create Customer `string`
<dd>
The customer's email address. This is used for communication and helps identify the customer in the Stripe Dashboard.

Email addresses should be valid and properly formatted. Stripe will not validate the email format, but providing a valid email ensures you can contact the customer later.

*Example*:
```
customer@example.com
```
</dd>

#### Name `string`
<dd>
The customer's full name or business name. This helps identify the customer in the Stripe Dashboard and on invoices.

*Example*:
```
John Smith
```
</dd>

#### Description `string`
<dd>
Additional information about the customer. This field is for your internal use and is not visible to the customer.

Use this field to store notes or additional context about the customer relationship.

*Example*:
```
Enterprise client - Signed up during Q2 promotion
```
</dd>

#### Metadata Create Customer `object`
<dd>
A set of key-value pairs that you can attach to the customer. This can be useful for storing additional information about the customer in a structured format.

Metadata is useful for:
* Storing application-specific information
* Filtering customers in the Stripe Dashboard
* Integrating with other systems

*Example*:
```
{ "plan_interest": "premium", "referral_source": "google", "account_manager": "jane" }
```
</dd>

### Get Customer By Id

Retrieves detailed information about a specific customer using their unique Stripe customer ID. This command returns comprehensive data about the customer, including their contact information, payment methods, and subscription status.

#### Id Get Customer `string`
<dd>
The unique identifier of the customer to retrieve.

To find a customer's ID:
* In the Stripe Dashboard, go to Customers and click on the specific customer
* The ID appears in the URL as `https://dashboard.stripe.com/customers/[CUSTOMER_ID]`
* The ID is also available in API responses from previous customer-related operations

Customer IDs always start with `cus_` followed by alphanumeric characters (e.g., `cus_1a2b3c4d5e6f`).

*Example*:
```
cus_1a2b3c4d5e6f
```
</dd>

### Get Customers

Retrieves a list of customers from your Stripe account based on specified filters. This command returns customer details including their IDs, email addresses, names, and creation dates.

#### Email Get Customers `string`
<dd>
Filters customers based on their email address. This helps you find specific customers when you know their email.

The filter performs an exact match on the email address.

*Example*:
```
customer@example.com
```
</dd>

#### Created After `integer`
<dd>
Filters customers created after the provided date (Unix timestamp). This helps you find customers who signed up after a specific date.

To convert a date to Unix timestamp:
* Use a conversion tool or website
* In JavaScript: `Math.floor(new Date('2025-01-01').getTime() / 1000)`
* The timestamp represents seconds since January 1, 1970

*Example for January 1, 2025*:
```
1735689600
```
</dd>

#### Created Before `integer`
<dd>
Filters customers created before the provided date (Unix timestamp). This helps you find customers who signed up before a specific date.

*Example for December 31, 2025*:
```
1767225600
```
</dd>

#### Limit Get Customers `integer`
<dd>
Limits the maximum number of customers to return. Defaults to 10 if left blank.

Use this parameter to control the size of the response, especially when you expect a large number of results.

*Example*:
```
25
```
</dd>

### Create Subscription

Creates a new subscription for a customer. This command allows you to subscribe a customer to a specific plan and returns the created subscription's details including its ID, status, and billing information.

#### Customer Id Create Subscription `string`
<dd>
The unique identifier of the customer that the subscription will be created for.

To find a customer's ID:
* In the Stripe Dashboard, go to Customers and click on the specific customer
* The ID appears in the URL as `https://dashboard.stripe.com/customers/[CUSTOMER_ID]`
* Customer IDs always start with `cus_` followed by alphanumeric characters

*Example*:
```
cus_1a2b3c4d5e6f
```
</dd>

#### Plan `string`
<dd>
The plan that the subscription will be created with. This determines what product and pricing the customer will be subscribed to.

To find a plan's ID:
* In the Stripe Dashboard, go to Products → Select a product → Pricing
* The plan ID appears when you click on a specific price
* Plan IDs typically start with `price_` followed by alphanumeric characters

You can use Connect Portal Workflow Settings to allow users to select a plan (example: `{{settings.plan}}`).

*Example*:
```
price_1a2b3c4d5e6f
```
</dd>

#### Metadata Create Subscription `object`
<dd>
A set of key-value pairs that you can attach to the subscription. This can be useful for storing additional information about the subscription in a structured format.

*Example*:
```
{ "promotion_code": "SUMMER2025", "sales_rep": "alex", "contract_term": "annual" }
```
</dd>

### Get Subscriptions

Retrieves a list of subscriptions based on specified filters. This command returns subscription details including their IDs, associated customers, plans, statuses, and billing information.

#### Customer Id Get Subscriptions `string`
<dd>
The unique identifier of the customer whose subscriptions you want to list.

To find a customer's ID:
* In the Stripe Dashboard, go to Customers and click on the specific customer
* The ID appears in the URL as `https://dashboard.stripe.com/customers/[CUSTOMER_ID]`
* Customer IDs always start with `cus_` followed by alphanumeric characters

*Example*:
```
cus_1a2b3c4d5e6f
```
</dd>

#### Subscription Status `string`
<dd>
Filters subscriptions based on their status. This helps you find subscriptions in a specific state.

Valid status values:
* `active` - Currently in period and paid
* `past_due` - Payment failed but still trying
* `unpaid` - Payment failed and no longer trying
* `canceled` - Subscription canceled
* `incomplete` - Initial payment failed
* `incomplete_expired` - Initial payment failed and expired
* `trialing` - In trial period
* `all` - All statuses

*Example*:
```
active
```
</dd>

#### Limit Get Subscriptions `integer`
<dd>
Limits the maximum number of subscriptions to return. Defaults to 10 if left blank.

*Example*:
```
25
```
</dd>

### Update Customer

Updates an existing customer's information. This command allows you to modify customer details such as email, name, and description, and returns the updated customer information.

#### Customer Id `string`
<dd>
The unique identifier of the customer to update.

To find a customer's ID:
* In the Stripe Dashboard, go to Customers and click on the specific customer
* The ID appears in the URL as `https://dashboard.stripe.com/customers/[CUSTOMER_ID]`
* Customer IDs always start with `cus_` followed by alphanumeric characters

*Example*:
```
cus_1a2b3c4d5e6f
```
</dd>

#### Email Update Customer `string`
<dd>
The updated email address for the customer.

*Example*:
```
updated.email@example.com
```
</dd>

#### Name `string`
<dd>
The updated name for the customer.

*Example*:
```
John A. Smith
```
</dd>

#### Description `string`
<dd>
The updated description for the customer.

*Example*:
```
Enterprise client - Upgraded to premium plan
```
</dd>

#### Metadata Update Customer `object`
<dd>
Updated metadata for the customer. This will replace any existing metadata.

*Example*:
```
{ "plan_interest": "enterprise", "referral_source": "partner", "account_manager": "sarah" }
```
</dd>

### Create Product

Creates a new product in your Stripe catalog. This command allows you to define product details such as name and description, and returns the created product's information including its unique ID for future reference.

#### Product Name `string`
<dd>
The name of the product. This appears in the Stripe Dashboard and on customer-facing documents like invoices.

*Example*:
```
Premium Subscription
```
</dd>

#### Description `string`
<dd>
A description of the product. This helps you and your team identify the product's purpose and features.

*Example*:
```
Full access to all premium features with priority support
```
</dd>

#### Metadata Product `object`
<dd>
A set of key-value pairs that you can attach to the product. This can be useful for storing additional information about the product in a structured format.

*Example*:
```
{ "category": "subscription", "internal_id": "PRO-2025", "feature_set": "complete" }
```
</dd>

### Get Product By Id

Retrieves detailed information about a specific product using its unique Stripe product ID. This command returns comprehensive data about the product, including its name, description, and associated prices.

#### Product Id `string`
<dd>
The unique identifier of the product to retrieve.

To find a product's ID:
* In the Stripe Dashboard, go to Products and click on the specific product
* The ID appears in the URL as `https://dashboard.stripe.com/products/[PRODUCT_ID]`
* The ID is also available in API responses from previous product-related operations

Product IDs always start with `prod_` followed by alphanumeric characters.

*Example*:
```
prod_1a2b3c4d5e6f
```
</dd>

### Get Balance Transactions

Retrieves a list of balance transactions from your Stripe account. This command returns transaction details including their IDs, amounts, types, and creation dates.

#### Balance Transaction Type `string`
<dd>
Filters transactions based on their type. This helps you find specific types of transactions.

Common transaction types:
* `charge` - Payment from a customer
* `refund` - Refund to a customer
* `payout` - Transfer to your bank account
* `adjustment` - Manual adjustment
* `stripe_fee` - Stripe's fee
* `transfer` - Transfer between Stripe accounts

*Example*:
```
charge
```
</dd>

#### Pagination Parameters `object`
<dd>
Parameters to control pagination of the transaction list. This allows fetching transactions in batches.

The pagination parameters typically include:
* `limit`: Number of transactions to return per page (integer)
* `starting_after`: The ID of the last transaction from the previous page (string)
* `ending_before`: The ID of the first transaction from the next page (string)

*Example for retrieving the next page after a specific transaction*:
```
{
  "limit": 25,
  "starting_after": "txn_1a2b3c4d5e6f"
}
```

For initial request:
```
{
  "limit": 25
}
```
</dd>

### Get Plans

Retrieves a list of plans (prices) from your Stripe account. This command returns plan details including their IDs, associated products, pricing, and billing intervals.

#### Is Plan Active `boolean`
<dd>
Filters plans based on their active status. Set to `true` to list all active plans or `false` to list all inactive plans.

*Example to list active plans*:
```
true
```

*Example to list inactive plans*:
```
false
```
</dd>

#### Pagination Parameters `object`
<dd>
Parameters to control pagination of the plans list. This allows fetching plans in batches.

The pagination parameters typically include:
* `limit`: Number of plans to return per page (integer)
* `starting_after`: The ID of the last plan from the previous page (string)
* `ending_before`: The ID of the first plan from the next page (string)

*Example*:
```
{
  "limit": 25,
  "starting_after": "price_1a2b3c4d5e6f"
}
```
</dd>

### Get Products

Retrieves a list of products from your Stripe catalog based on specified filters. This command returns product details including their IDs, names, descriptions, and creation dates.

#### Created After `integer`
<dd>
Filters products created after the provided date (Unix timestamp). This helps you find products that were added after a specific date.

*Example for January 1, 2025*:
```
1735689600
```
</dd>

#### Created Before `integer`
<dd>
Filters products created before the provided date (Unix timestamp). This helps you find products that were added before a specific date.

*Example for December 31, 2025*:
```
1767225600
```
</dd>

#### Limit Get Products `integer`
<dd>
Limits the maximum number of products to return. Defaults to 10 if left blank.

*Example*:
```
25
```
</dd>

### Custom Action

Executes a custom action against the Stripe API. This command allows for advanced operations not covered by the standard commands.

<dd>
This command enables you to make custom API calls to Stripe endpoints not covered by the standard commands. You can specify the endpoint, method, and parameters to access additional Stripe functionality.

When using Custom Action, you'll need to refer to the [Stripe API documentation](https://stripe.com/docs/api) for specific endpoint details and required parameters.

*Example for a custom query to list events*:
```
GET /v1/events
```

*Example for a custom query to create a coupon*:
```
POST /v1/coupons
{
  "percent_off": 25,
  "duration": "once"
}
```

Custom actions require appropriate authentication and permissions for the endpoints being accessed.
</dd>
