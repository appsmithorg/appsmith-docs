# Adding regex validations

Your form now has all the required widgets in place with some basic properties configured. Let’s add some regex validations to reject bad input from users.

Start with **ProductNameInput**:

1. Open its properties modal 
2. Set **Regex** to **^\s\*\[a-zA-Z\]{3,50}\s\*$**
3. Set **Error Message** to **Must be alphanumeric having length between 3 and 50**

Let’s see what you did there:

* By setting the **Regex**: 
  * You restricted the text to the characters of the English alphabet
  * You ensured that the length of the product name will at least be 3 and at most be 50
* By setting the **Error Message**, you specified the error users will see when regex validation on their input fails

Try filling in both valid and invalid values in **ProductNameInput** to verify that it works. Let’s configure MrpInput to accept only decimal values greater than or equal to $1.00

1. Set **Regex** to **^\s\*\(?=.\*\[1-9\]\)\d\*\(?:\.\d{1,2}\)?\s\*$**
2. Set **Error Message** to **Value must be greater than 0 and upto 2 decimal places**

