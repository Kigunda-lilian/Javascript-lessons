<!-- Regular Expressions
A regular expression or RegExp is a small programming language that helps to find pattern in data. A RegExp can be used to check if some pattern exists in a different data types. To use RegExp in JavaScript either we use RegExp constructor or we can declare a RegExp pattern using two forward slashes followed by a flag. We can create a pattern in two ways.

 -->

 <!-- To declare a string we use a single quote, double quote a backtick to declare a regular expression we use two forward slashes and an optional flag. The flag could be g, i, m, s, u or y. -->

 <!--  RegExp parameters
A regular expression takes two parameters. One required search pattern and an optional flag.-->

<!-- Pattern
A pattern could be a text or any form of pattern which some sort of similarity. For instance the word spam in an email could be a pattern we are interested to look for in an email or a phone number format number might be our interest to look for. -->

<!--Flags
Flags are optional parameters in a regular expression which determine the type of searching. Let see some of the flags:

g:is a global flag which means looking for a pattern in whole text
i: case insensitive flag(it searches for both lowercase and uppercase)
m: multiline  -->

<!--[]: A set of characters
[a-c] means, a or b or c
[a-z] means, any letter a to z
[A-Z] means, any character A to Z
[0-3] means, 0 or 1 or 2 or 3
[0-9] means any number 0 to 9
[A-Za-z0-9] any character which is a to z, A to Z, 0 to 9
\: uses to escape special characters
\d mean:match where the string contains digits (numbers from 0-9)
\D mean: match where the string does not contain digits
. : any character except new line character(\n)
^: starts with
r'^substring' eg r'^love', a sentence which starts with a word love
r'[^abc] mean not a, not b, not c.
$: ends with
r'substring$' eg r'love$', sentence ends with a word love
*: zero or more times
r'[a]*' means a optional or it can be occur many times.
+: one or more times
r'[a]+' mean at least once or more times
?: zero or one times
r'[a]?' mean zero times or once
{3}: Exactly 3 characters
{3,}: At least 3 character
{3,8}: 3 to 8 characters
|: Either or
r'apple|banana' mean either of an apple or a banana
(): Capture and group  -->
