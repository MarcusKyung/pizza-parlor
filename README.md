# _JavaScript Pizza Parlor_

#### By _**Marcus Kyung**_

#### _This application replicates an online order menu for a pizza parlor by allowing a user to build a pizza and find a total price based on selections._

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_

## Description

_This basic website application is designed to take a user's pizza order and calculate the sale price based on various inputs including ingredients and pizza size. The application also offers the user a confirmation of all selections at the bottom of the webpage. The pricing feature updates in real time with each click of the "Get Price" submit button._

## Setup/Installation Requirements

* _Download codebase from GH to local machine, ensuring that all files and directories are included_
* _Navigate to root level of project directory_
* _Open index.html file in your browser_
* _Input a name longer than 3 characters and build a pizza using the dropdowns and check boxes_
* _Names shorter than 4 characters will be logged as "invalid name"_
* _Click each menu heading to see an expanded description of each menu section._
* _Click Get Price to see your total pizza price and a confirmation of all choices_

## Known Bugs

* _If no size is selected the #nameConfirm bullet shows blank_

## Tests
```Describe: Pizza()```

```Test: "It should return a Pizza object with six properties including size, gluten, cheese, meats, non-meats, and name."```
```Code: const myPizza = new Pizza(medium, gf, extraCheese, pepperoni, peppers, Marcus);```
```Expected Output: Pizza { sizeSelection: medium, glutenSelection: gf extraCheeseSelection: extraCheese, meatsSelection: pepperoni, nonMeatsSelection: peppers, name: Marcus}```


```Describe: Pizza.prototype.checkName = function()```

```Test: "It should update this.name to invalid name if the name contains more fewer than 4 letters."```
```const this.name = "abc"```
```Code: Pizza.checkName()```
```Expected Output: this.name = "invalid name";```


```Describe: Pizza.prototype.findPrice = function()```

```Test: "It should return a variable named price which reflects the price of a small pizza."```
```const this.sizeSelection = "small"```
```Code: Pizza.findPrice()```
```Expected Output: price = 10;```

```Test: "It should return a variable named price which reflects the price of a small pizza."```
```const this.sizeSelection = "medium"```
```Code: Pizza.findPrice()```
```Expected Output: price = 12;```

```Test: "It should return a variable named price which reflects the price of a small pizza."```
```const this.sizeSelection = "large"```
```Code: Pizza.findPrice()```
```Expected Output: price = 14;```

```Test: "It should return a variable named price which reflects a price of $100 when no size is selected."```
```const this.sizeSelection = ""```
```Code: Pizza.findPrice()```
```Expected Output: price = 100;```

```Test: "It should return a variable named price which reflects the gluten free dough option selection."```
```const this.glutenSelection = "Gluten Free Dough"```
```Code: Pizza.findPrice()```
```Expected Output: price = 2;```

```Test: "It should return a variable named price which reflects the extra cheese option selection."```
```const this.extraCheeseSelection = "Extra Cheese"```
```Code: Pizza.findPrice()```
```Expected Output: price = 2;```

```Test: "It should return a variable named price which reflects the price of the pepperoni meat selection."```
```const this.extraCheeseSelection = "Pepperoni"```
```Code: Pizza.findPrice()```
```Expected Output: price = 1;```

```Test: "It should return a variable named price which reflects the price of the Sausage meat selection."```
```const this.extraCheeseSelection = "Sausage"```
```Code: Pizza.findPrice()```
```Expected Output: price = 2;```

```Test: "It should return a variable named price which reflects the price of the Prosciutto meat selection."```
```const this.extraCheeseSelection = "Prosciutto"```
```Code: Pizza.findPrice()```
```Expected Output: price = 4;```

```Test: "It should return a variable named price which reflects the price of the No Meat meat selection."```
```const this.extraCheeseSelection = "No Meat"```
```Code: Pizza.findPrice()```
```Expected Output: price = 0;```

```Test: "It should return a variable named price which reflects the price of the pizza when the nonMeats selection array includes "Pineapple", "Peppers", "Onions"."```
```const this.nonMeatsSelection = ["Pineapple", "Peppers", "Onions"]```
```Code: Pizza.findPrice()```
```Expected Output: price = 6;```

```Test: "It should return a variable named price which reflects the price of the pizza when the nonMeats selection array includes "Pineapple", "Peppers"."```
```const this.nonMeatsSelection = ["Pineapple", "Peppers"]```
```Code: Pizza.findPrice()```
```Expected Output: price = 5;```

```Test: "It should return a variable named price which reflects the price of the pizza when the nonMeats selection array includes "Peppers", "Onions"."```
```const this.nonMeatsSelection = ["Peppers", "Onions"]```
```Code: Pizza.findPrice()```
```Expected Output: price = 3;```

```Test: "It should return a variable named price which reflects the price of the pizza when the nonMeats selection array includes "Pineapples", "Onions"."```
```const this.nonMeatsSelection = ["Pineapples", "Onions"]```
```Code: Pizza.findPrice()```
```Expected Output: price = 4;```

```Test: "It should return a variable named price which reflects the price of the pizza when the nonMeats selection array includes "Pineapples""```
```const this.nonMeatsSelection = ["Pineapples"]```
```Code: Pizza.findPrice()```
```Expected Output: price = 3;```

```Test: "It should return a variable named price which reflects the price of the pizza when the nonMeats selection array includes "Peppers"."```
```const this.nonMeatsSelection = ["Peppers"]```
```Code: Pizza.findPrice()```
```Expected Output: price = 2;```

```Test: "It should return a variable named price which reflects the price of the pizza when the nonMeats selection array includes "Onions"."```
```const this.nonMeatsSelection = ["Onions"]```
```Code: Pizza.findPrice()```
```Expected Output: price = 1;```

## License

_For questions, comments, or concerns please reach out at Kyungmj@gmail.com_

MIT License

Copyright (c) [2023] [Marcus Kyung]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: 

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR\ A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.