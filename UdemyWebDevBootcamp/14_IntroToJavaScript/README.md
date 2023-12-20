## 14 - Introduction to JavaScript ES6

### Coding Exercises

#### JavascriptVariablesExercise.js

Given the existing code below, can you write some code so that their values are switched around?

```javascript
var a = '3';
var b = '8';
```

So that the variable a holds the value "8".
And the variable b holds the value "3".
When the code is run, it should output:

```javascript
a is 8
b is 3
```

Do NOT change any of the existing code.
You are NOT allowed to type any numbers.
You should NOT redeclare the variables a and b.

Hint: Use this code playground to run your code and see if it matches your expectations.
Hint: The solution is just 3 lines of code.

---

#### LifeInWeeks.js

Life in Weeks Coding Exercise
I was reading this article by Tim Urban - Your Life in Weeks and realised just how little time we actually have.

In this challenge, you are going to create a function that tells us how many days, weeks and months we have left if we live until 90 years old. It will take your current age as the input and console.logs a message with our time left in this format:

```javascript
You have x days, y weeks, and z months left.
```

Where x, y and z are replaced with the actual calculated numbers.

For this challenge, assume there are 365 days in a year, 52 weeks in a year and 12 months in a year.

IMPORTANT your console.log output should match the Example Output format exactly, even the positions of the commas and full stops.

Example Input:
e.g. If you are 56 years old:

```javascript
lifeInWeeks(56);
```

Example Output:

```javascript
You have 12410 days, 1768 weeks, and 408 months left.
```

Hint

- Try using this Repl.it playground to test your code and see if the output is what you expect it to be.
- Make sure your console.log output matches the example output precisely. The same capitalisation, the same spaces, commas and full stops.

---

#### BMI.js

Create a BMI calculator using JavaScript functions.

The Body Mass Index (BMI) is a way of estimating the amount of body fat. It's used in medicine to calculate risk of heart disease.

You can calculate it using the formula below, where weight divided by height squared.

BMI = height / (weight \* weight)

Your challenge is to create a function that takes weight and height as inputs and gives the calculated BMI value as an output. The output should be rounded to the nearest whole number.

The first parameter should be the weight and the second should be the height.

NOTE: You do not need to write any alerts or prompts or console logs. Your code should only contain the function, the result has to be returned by the function. You do not need to call the function.
