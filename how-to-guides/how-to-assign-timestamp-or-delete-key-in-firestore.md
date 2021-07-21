---
description: >-
how to assign server timestamp and delete key in firestore
---

# Assign Timestamp as value

To assign Firestore server's timestamp value to any field the `Timestamp Value Path` field in the Firestore plugin's 
query editor form can be used.

The `Timestamp Value Path` needs to be filled with an array to paths to which the 
timestamp values need to be assigned. Each path in the array must follow the `dot` notation as described via the 
example below:

```text
{
	"name": "A. Lincoln",
	"lastUpdated": "0",
	"location": {
		"city": "Tokyo",
		"lastUpdated": "0"
	}
}
```

To update the `lastUpdated` keys above, the `Timestamp Value Path` field needs to be provided with the following 
array of paths:

```text
["lastUpdated", "location.lastUpdated"]
```

**Note**
- This property will not work with key path involving an array since Firestore does not support setting server 
  timestamp value inside array. 
- This property can be used with all operations except `Get Document` and `Delete Document`.

![Click to expand](../.gitbook/assets/firestore-server-timestamp.gif)

# Delete Key

To delete any key the `Delete Key Value Pair Path` field in the Firestore plugin's query editor form can be used.

The `Delete Key Value Pair Path` field needs be filled with an array of keys that need to be deleted. Each path in 
the array must follow the `dot` notation as described via the example below:

```text
{
	"name": "A. Lincoln",
	"deprecatedKey": "0",
	"location": {
		"city": "Tokyo",
		"deprecatedKey": "0"
	}
}
```
To delete the `deprecatedKey` keys above, the `Delete Key Value Pair Path` field needs to be provided with the 
following array of key paths:

```text
["deprecatedKey", "location.deprecatedKey"]
```

**Note**
- This property cannot be used to delete array elements
- This property can only be used with an `Update Document` operation.

![Click to expand](../.gitbook/assets/firestore-delete-key.gif)