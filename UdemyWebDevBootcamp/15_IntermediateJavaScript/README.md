## 15 - Intermediate JavaScript

### Coding Exercises

#### BMIAdvanced.js

Previously, we've created a function that is able to calculate the BMI. But once we get a result, we will want to tell the user what the number means.

Write a function that outputs (returns) a different message depending on the BMI.

- BMI <18.5, the output should be: "Your BMI is <bmi>, so you are underweight."
- BMI 18.5-24.9, the output should be "Your BMI is <bmi>, so you have a normal weight."
- BMI >24.9, the output should be "Your BMI is <bmi>, so you are overweight."

The message MUST be returned as an output from your function. You should NOT NEED to use alert, prompt or console.log in this challenge.

IMPORTANT the message wording has to match precisely for the code to pass the validation. Including punctuation and capitalisation.

#### LeapYear.js

💪This is a Difficult Challenge 💪

Write a program that works out whether if a given year is a leap year. A normal year has 365 days, leap years have 366, with an extra day in February. The reason why we have leap years is really fascinating, this video goes into more detail.

This is how to work out whether if a particular year is a leap year:

- A year is a leap year if it is evenly divisible by 4
- except if that year is also evenly divisible by 100;
- unless that year is also evenly divisible by 400.

e.g. Is the year 2000 a leap year?:
2000 ÷ 4 = 500 (Leap)
2000 ÷ 100 = 20 (Not Leap)
2000 ÷ 400 = 5 (Leap!)
So the year 2000 is a leap year.

But the year 2100 is not a leap year because:
2100 ÷ 4 = 525 (Leap)
2100 ÷ 100 = 21 (Not Leap)
2100 ÷ 400 = 5.25 (Not Leap)

Warning your output should match the Example Output format exactly, even the positions of the commas and full stops.

Example Input 1

```javascript
2400;
```

Example Output 1

```javascript
Leap year.
```

Example Input 2

```javascript
1989;
```

Example Output 2

```javascript
Not leap year.
```

Hints

- Remember that the modulo (%) operator gives you the remainder of a division. We covered this in this lesson.
- Try to visualise the rules by creating a flow chart on www.draw.io.
- If you really get stuck, you can see the flow chart I created.
- Try to run your code in this Repl.it playground and check it against the known leap years.

#### WhoBuyingLunch.js

You are going to write a function which will select a random name from a list of names. The person selected will have to pay for everybody's food bill.

Important: The output should e returned from the function and you do not need alert, prompt or console.log. The output should match the example output exactly, including capitalisation and punctuation.

Example Input

```javascript
['Angela', 'Ben', 'Jenny', 'Michael', 'Chloe'];
```

Example Output

```javascript
Michael is going to buy lunch today!
```

Hints

- You might need to think about Array.length.
- Remember that Arrays start at position 0!

#### Fibonacci.js

Fibonacci was an Italian mathematician who came up with the Fibonacci sequence:
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
Where every number is the sum of the two previous ones.

e.g. 0, 1, 1, 2, 3, 5 comes from

0 + 1 = 1

1 + 1 = 2

1 + 2 = 3

2 + 3 = 5

etc.

Create a function where you can call it by writing the code:

```javascript
fibonacciGenerator(n);
```

Where n is the number of items in the sequence.

So I should be able to call:

```javascript
fibonacciGenerator(3);
```

and get

```javascript
[0, 1, 1];
```

as the output.

IMPORTANT: The solution checker is expecting an array as the correct output.

Do NOT change any of the existing code.

You do NOT need any alerts or prompts, the result should be returned from the function as an output.

The first two numbers in the sequence must be 0 and 1.

Also, if you decide to create a for loop, make sure you explicitly specify var i = 0 rather than simply writing i = 0 . This is a quirk of the testing suite.

e.g. for (var i = 0; i < 10; i ++)

HINT: Use this Repl.it Playground to test out your solution.

HINT: Use this flow chart to understand the logic if you get stuck.

#### FizzBuzz.js

Three different versions of the traditional FizzBuzz coding challenge: if the integer is a factor of 3, print "Fizz", if a factor of 5 then "Buzz", but if it's a factor of both then print both words. Otherwise, print the integer in the list.
