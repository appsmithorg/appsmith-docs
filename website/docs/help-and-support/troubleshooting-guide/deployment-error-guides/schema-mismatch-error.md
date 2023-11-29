# Schema Mismatch Error

The instance keeps restarting due to a server shutdown displaying a schema mismatch error.

## Error message

<Message
messageContainerClassName="error"
messageContent="Looks like you skipped some required updates, please go back to the mandatory upgrade path v1.9.2"/>

## Cause

As the error message in the server logs suggests, your Appsmith instance has missed a required checkpoint upgrade. This occurs if you are manually upgrading and have skipped a version or are on an automatic upgrade but your instance hasn't checked for updates for a particular period.

## Solution

To resolve this error, you must [upgrade to the checkpoint version](/getting-started/setup/instance-management/upgrade-to-checkpoint-version), in this case, `v1.9.2`.
