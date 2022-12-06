# Style Guide
The team follows the Google developer's and the Microsoft's documentation style guide. The style rules are configured with the help of [Vale](https://vale.sh/) linter.

## Prerequisites
Please ensure that the below prerequisites are met before you configure vale linter. You should have:

* [Brew](https://brew.sh) installed on your Mac, or [Chocolatey](https://chocolatey.org/) installed on your Windows machine.
  > For windows, you could also use the command prompt and curl command to install brew - `curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh`
* Vale installed on your mac/windows. 

  > If not already installed, you could install vale using `brew install vale` for mac, or `choco install vale` on Windows. Once installed, verify the version ` vale -v`. You can also check the [Vale installation page](https://vale.sh/docs/vale-cli/installation/) for other options.


* Install the [vale extension](https://marketplace.visualstudio.com/items?itemName=errata-ai.vale-server) for VS Code Editor.

  > You could also use [vale cli](https://vale.sh/docs/vale-cli/overview/).

## Setup
Follow the below steps to setup the linter:
1. Clone the documentation [appsmith-docs](https://github.com/appsmithorg/appsmith-docs) repository and open it in VS Code Editor. 
2. Create a branch that you need to work on. 
3. Configure the vale extension to read the `.vale.ini` file. Go to Extension Settings --> Select `Workspace` tab --> Set up the path of `.vale.ini` file for `Vale › Vale CLI: Config` parameter. 

> You could use `${workspaceFolder}/.vale.ini` to specify the path. Please note that `${workspaceFolder}` points to the folder that's opened in the VS Code Editor.

Restart the VS code editor and open up any `.md` file to verify the errors if any. The vale linter issues are shown in the problems tab.

## Tips & tricks
* Add words to be recognized as valid: There could be instances where the linter would raise issues for words as misspelled, even though they are technically correct. For example, `datasource`, `Appsmith`, and more. To add these exceptions, navigate to ` .github\styles\Vocab\technical`. Open `accept.txt` file and add the words to it. Vale linter will now treat these words as valid and will not raise errors for them.
* Add words to be recognized as invalid: There are some words that we want to raise errors, even if they are technically correct. To do that, navigate to ` .github\styles\Vocab\technical`. Open `reject.txt` and add the words to it on new lines. Vale linter ensures that these words are treated as invalid and errors are raised.

