---
description: Convert xml string to json object
---

# xmlParser
This uses the [xmlParser](https://github.com/NaturalIntelligence/fast-xml-parser) library

## Signature

```text
xmlParser.parse(xml: string, options?: object) -> object
```

## Usage
```javascript
{{ xmlParser.parse("<message><heading>Reminder</heading><body>Don't forget me this weekend!</body></message>") }}
```

### Arguments

| **Argument Name** | **Description** |
| :--- | :--- |
| **xml** | XML string that needs to be converted |
| **options** | [Options](https://github.com/NaturalIntelligence/fast-xml-parser) object to configure the conversion (Optional) |
