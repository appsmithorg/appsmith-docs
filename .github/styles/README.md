# Style Guide
The team follows the Google developer's and the Microsoft's documentation style guide. The style rules are configured with the help of Vale linter.

## Prerequisites
Please ensure that the below prerequisites are met before you configure vale linter. You should have:

* [Brew](https://brew.sh) installed on your mac/window.
* Vale installed on your mac/window. 

> If not already installed, you could install vale using `brew install vale`. Once installed, verify the version ` vale -v`.

* Install the [vale extension](https://marketplace.visualstudio.com/items?itemName=errata-ai.vale-server) for VS Code Editor.

## Setup
Clone the documentation [appsmith-docs](https://github.com/appsmithorg/appsmith-docs) repository and open it in VS Code Editor. Create a branch that you need to work on. Configure the vale extension to read the `.vale.ini` file. Go to Extension Settings --> Select `Workspace` tab --> Set up the path of `.vale.ini` file for `Vale › Vale CLI: Config` parameter. 

> You could use `${workspaceFolder}/.vale.ini` to specify the path. Please note that `${workspaceFolder}` points to the folder that's opened in the VS Code Editor.

Restart the VS code editor and open up any `.md` file to verify the errors if any. The vale linter issues are shown in the problems tab.

## Tips & tricks
* Add words to be recognized as valid: There could be instances where the linter would raise issues for words as misspelled which are technically correct. For example, `datasource`, `Appsmith` and more. To add these as exceptions, you could navigate to ` .github\styles\Vocab\technical`. Open `accept.txt` file and add the words to it. Vale linter would ensure that these words are treated valid.
* Add words to be recognized as invalid: There are some words that we want to raise errors, even if they are technically correct. To do that, navigate to ` .github\styles\Vocab\technical`. Open `reject.txt` and add the words to it on new lines. Vale linter ensures that these words are treated as invalid and errors are raised.

