# License and Activation Errors

This page shows how to resolve common license and activation errors on self-hosted Appsmith Commercial/Enterprise editions.

### License key is invalid

<Message
 messageContainerClassName='error'
messageContent='The license key is invalid. Try again with a valid license key'></Message>

#### Cause

The license key entered does not match a valid key for your subscription. This commonly happens when a key is mistyped, when a trial/sign-up screen is used instead of the actual key, or when the key was copied from the wrong account. Each self-hosted instance must use the license key issued to your subscription on the customer portal.

#### Solution

- Sign in (do not sign up) at [customer.appsmith.com](https://customer.appsmith.com) and copy your exact license key from the **License** section.
- In your instance, go to **Admin Settings** → **License & Plans**, enter the key in the **Add Key** field, and click **Activate**. See [Add or update license key](/getting-started/setup/manage-plans/upgrade-plan#add-or-update-license-key).
- The same license key can be applied to multiple instances (including production); there is no upper limit on the number of instances on the enterprise plan.
- If you maintain separate accounts, note that the account used to purchase the license and the account used as instance admin are independent — use the key from the account that holds the paid subscription.

### License screen shown instead of the application

#### Cause

When the `appsmith-ee` (Commercial/Enterprise) image starts for the first time, it presents a screen to either continue on the free version or enter a license key. A freshly installed instance, or a new production/test server, has no license applied yet and shows this registration prompt until a key is entered.

#### Solution

- Confirm you are running the enterprise image (`appsmith/appsmith-ee`), not the community image. The license entry option only appears on the enterprise image.
- Copy your existing license key from [customer.appsmith.com](https://customer.appsmith.com) and apply it under **Admin Settings** → **License & Plans**. See [Upgrade to Paid Plan](/getting-started/setup/manage-plans/upgrade-plan).
- You can reuse your existing key on new development, test, and production systems — you do not need a separate key per instance.

### Cannot find the License page or Admin Settings

#### Cause

The license and other admin settings are only visible to users with instance administrator access. If the signed-in user is not an instance admin, the **License & Plans** option does not appear, so the key cannot be entered or updated.

#### Solution

- Add your email to the [`APPSMITH_ADMIN_EMAILS`](/getting-started/setup/environment-variables#appsmith_admin_emails) environment variable and restart Appsmith for the change to take effect.
- Sign in with that admin user, then go to **Admin Settings** → **License & Plans** to enter or update the license key.
- Alternatively, an existing instance admin can grant you admin rights by adding your email to the Admin users list in **Admin Settings**.

### License expired after a valid renewal or payment

<Message
 messageContainerClassName='error'
messageContent='no active subscription'></Message>

#### Cause

After a renewal, payment, or backend fix, the updated license status can take time to propagate, or the instance is still holding the previously cached (expired) status. Appsmith validates the license against the license server on a schedule, so a renewed license may not reflect immediately on the instance.

#### Solution

- After a confirmed renewal/payment, restart your instance and confirm whether the issue clears.
- The notification can take up to a couple of hours to disappear on its own. To apply it immediately, go to **Admin Settings** → **License & Plans** and click the **Refresh** button next to the license key.
- If the instance has no admin user with form login, add one via [`APPSMITH_ADMIN_EMAILS`](/getting-started/setup/environment-variables#appsmith_admin_emails) and restart, then sign up with that user and refresh the license from the **License & Plans** tab.
- If the status still does not update after these steps, contact support — the renewal may need a backend correction on the customer portal before it can be refreshed on your instance.

### Payment overdue notification while the license is still valid

<Message
 messageContainerClassName='error'
messageContent='Payment Overdue'></Message>

#### Cause

This message appears when an invoice is past due, even if the license has not yet expired. Appsmith provides a grace period after the due date before access is affected, so the instance keeps working during this window.

#### Solution

- Process the outstanding invoice as soon as possible to avoid disruption.
- A Business/Enterprise instance can be automatically downgraded if dues remain unpaid, or if the card on file is invalid or revoked. If your instance was downgraded, settle the outstanding balance to restore the previous plan.
- For invoice or billing changes, contact support — these are handled on the customer portal/billing side, not from the instance.

### License key invalid after moving to a new instance

#### Cause

A license key that was activated on one instance (for example, a local/debug instance) can report invalid when applied to a different deployment if it is still associated with the previous instance.

#### Solution

- Obtain (copy) your license key for the self-hosted instance from [customer.appsmith.com](https://customer.appsmith.com) and apply it on the new server under **Admin Settings** → **License & Plans**.
- If you must rotate or deactivate an existing key (for example, for a security policy), contact support — they coordinate generating and applying the new key. As a temporary measure to stay unblocked, you can switch back to the old license key until the new one is ready.
- For transferring a license between cloud and self-hosted, or between accounts/emails, contact support to update the license owner; this cannot be self-served from the instance.

### License not validating on an instance with restricted internet

#### Cause

Appsmith fetches license status from the license server (`cs.appsmith.com`) on a schedule and stores the last known status locally. If the instance cannot reach `cs.appsmith.com`, it continues running on the last saved status; when a license is revoked, access is removed at the next validation cycle. Instances with restricted outbound access can therefore show license or edit-mode errors.

#### Solution

- Whitelist the domain `cs.appsmith.com` for outbound HTTPS. Use the domain, not an IP, because IP-based whitelisting is not supported for this domain. See [Air-gapped Edition](/getting-started/setup/installation-guides/air-gapped).
- For environments that must remain fully internet-isolated, request the dedicated air-gapped edition by contacting the Appsmith sales team (`sales@appsmith.com`); the standard image still requires reaching `cs.appsmith.com` for license validation.
