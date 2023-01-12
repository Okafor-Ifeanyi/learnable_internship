Credit Card Validator

Am Putting this here to keep my code dry

My code is broken down to 3 layers Patters, Declaratons and Flow Control

1. Pattern: eg "/^3\d{14}$/"
breaking this code down to bits /, ^3, \d, {14}, $, /
- / : Marks the start of the regex expression
- ^3 : Value recieded must start with 3 to match
- \d : Finds a digit
- {14} : Specifies that the num of digits must be 14
- $ : The spoted text must end with anything stated prior to it like {14} in this case
- / : Indicates the end of the regex expression

2. Declaration: eg  MS_pattern.exec(num)
Here i concatenated the pattern with the .exec(num) to get my result

3. Flow Control: eg else if (american_express != null)
Flow control to pick which Statement matches the regex expression

PS: All values seen are editable to choice

I hope by the end of this explanation you would see how simple regex is and also consider implementing it on your code too, Leave your comments down below