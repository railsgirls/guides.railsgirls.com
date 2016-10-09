---
layout: default
title: Ruby ATM
permalink: ruby-atm
---

# Ruby ATM

*Created by Joshua Paling, [@joshuapaling](https://twitter.com/joshuapaling)*

In this exercise you will write a function to handle withdrawing money from an ATM. It is intended to challenge you! Be prepared to ask lots of questions, Google things, and take a step back from the computer. But you'll learn a lot!

You should use pair, group, or remote programming so you have other programmers to bounce ideas off. You'll use Test Driven Development. However, all the tests have been pre-written for you, so you can focus on the code itself.

We'll start simple, but ramp the difficulty up pretty steeply toward the end!

## Workflow

For each step, you will need to take the following actions:

**1. Run the new tests:** Delete tests from the previous step, and paste in the pre-written tests for the current step. *(Tests for each step are show at the bottom of that step.)* Run the tests to see which ones fail. In sublime text, you can hit <kbd>Ctrl</kbd>+<kbd>B</kbd> to run the tests. Or, you can open a terminal, `cd` into your working directory, and run `ruby atm.rb`.

**2. Make the tests pass:** Edit your code to meet the functionality requirements of the current step. You'll know you've got it right when all your tests are green.

**3. Refactor:** See if there are any edits you can make to ensure your code is as clean and easy to understand as possible. Some steps have discussion points. Discuss them with your pair - they'll help you moving forward.

You may recognise these steps as the **red, green, refactor** workflow of TDD.

## *1.* $5 bills

Imagine an ATM that holds only $5 notes. Write a function that returns `true` if an amount can be returned, and `false` otherwise.

**Examples:**

* `withdraw(15)` should return `true`
* `withdraw(18)` should return `false`, because $18 cannot be made up of $5 notes

**Tips for getting tests green:**

The modulus operator, `%` gets the remainder of a division. Eg, `9 % 4` results in `1` (nine divided by four has a remainder of 1).

**Starting code:**

Create a file called `atm.rb`. paste the following code into it. This contains the shell of your `withdraw()` function, along with tests.

{% highlight ruby %}
def withdraw(amount)
  if amount <= 0 # this deals with some of the situations...
    return false
  end
  # ToDo: figure out this bit
end
{% endhighlight %}


### Tests for step 1:

{% highlight ruby %}
# import required testing libraries
require 'minitest/spec'
require 'minitest/autorun'

# BELOW ARE THE TESTS FOR AUTOMATICALLY CHECKING YOUR SOLUTION.
# THESE TESTS ARE FOR STEP 1.
# THESE NEED TO BE REPLACED AFTER EACH STEP.
describe 'atm' do
  [
    [-1, false],
    [0, false],
    [1, false],
    [43, false],
    [17, false],
    [5, true],
    [20, true],
    [35, true],
  ].each do |input, expected|
    it "should return #{expected} when $#{input} is withdrawn" do
      withdraw(input).must_equal expected
    end
  end
end
{% endhighlight %}

## *2.* How many bills?
Now, modify your function so that if the amount *can* be withdrawn, it will return the appropriate number of notes, rather than simply `true`

**Examples:**

* `withdraw(15)` should return `3`, since three $5 notes makes $15
* `withdraw(20)` should return `4`, since four $5 notes makes $20
* `withdraw(11)` should return `false`, because $11 cannot be made up of $5 notes

**Tips for getting tests green:**

The `/` operator performs a division. For example, if you wanted to get half your age, and store it in a variable, you'd do this:

{% highlight ruby %}
my_age = 28
half_my_age = my_age / 2
{% endhighlight %}

In ruby, when you do division with two whole numbers (integers), the result is rounded down to the nearest whole number.

{% highlight ruby %}
new_number = 25/10
# new_number contains 2, because 25/10 = 2.5, and ruby will round that down to 2.
{% endhighlight %}


### Tests for step 2:

{% highlight ruby %}
# Replace your existing tests with the ones below.
describe 'atm' do
  [
    [-1, false],
    [0, false],
    [1, false],
    [43, false],
    [7, false],
    [5, 1],
    [20, 4],
    [35, 7],
  ].each do |input, expected|
    it "should return #{expected} when $#{input} is withdrawn" do
      withdraw(input).must_equal expected
    end
  end
end
{% endhighlight %}

## *3.* Array of notes

In programming, an `array` is basically a collection of things. It's like a list.

Rather than returning the number of notes, modify the code so that it returns an array of notes (in this case, all $5's).

**Examples**

* `withdraw(15)` should return an array, `[5, 5, 5]`. (That's basically a collection of three $5 notes)
* `withdraw(11)` should return `false`, because $11 cannot be made up of $5 notes

**Tips for getting tests green:**

`[]` defines an empty array. `[1, 2]` defines an array with two elements (1 and 2).

The shovel operator (`<<`) adds an element to an array. Eg. `[10, 20] << 30` will add 30 to the array, resulting in `[10, 20, 30]`.

The `times` method executes a block of code several times - eg. `5.times { puts 'hello' }` will print 'hello' 5 times.

Bringing it all together:

{% highlight ruby %}
my_array = [] # create an empty array and store it in my_array
my_array << 20 # now my array contains [20]
my_array << 30 # now my_array contains [20, 30]
remainder = 13 % 5 # remainder is 3
remainder.times { my_array << 5 } # now my_array contains [20, 30, 5, 5, 5]
{% endhighlight %}

### Tests for step 3:
{% highlight ruby %}
# Replace your existing tests with the ones below.
describe 'atm' do
  [
    [-1, false],
    [0, false],
    [1, false],
    [43, false],
    [20, [5, 5, 5, 5]],
    [35, [5, 5, 5, 5, 5, 5, 5]],
  ].each do |input, expected|
    it "should return #{expected} when $#{input} is withdrawn" do
      withdraw(input).must_equal expected
    end
  end
end
{% endhighlight %}

## *4.* $10 notes

Now imagine the ATM returns only $10 notes. Modify your function to accommodate this.

**Examples**

* `withdraw(20)` should return an array, `[10, 10]`
* `withdraw(15)` should return `false`, because $15 cannot be made up of $10 notes

### Tests for step 4:

{% highlight ruby %}
# Replace your existing tests with the ones below.
describe 'atm' do
  [
    [-1, false],
    [0, false],
    [7, false],
    [45, false],
    [20, [10, 10]],
    [40, [10, 10, 10, 10]],
  ].each do |input, expected|
    it "should return #{expected} when $#{input} is withdrawn" do
      withdraw(input).must_equal expected
    end
  end
end
{% endhighlight %}

### Refactor
Once you have your tests passing, it's time to refactor.

In programming, ['Magic Numbers'](http://en.wikipedia.org/wiki/Magic_number_(programming)) are a bad thing (don't be fooled by the name!). They refer to a hard-coded value that just sort of *appears* out of thin air, with no clear explanation of what that particular number represents.

Consider how easy / hard it is to understand the following code snippets:

{% highlight ruby %}
# BAD - magic number!
balance = balance * 4.45
{% endhighlight %}

{% highlight ruby %}
# BAD - nondescript variable name is not much better!
value = 4.45
balance = balance * value
{% endhighlight %}

{% highlight ruby %}
# GOOD - isn't this much easier to understand?
interest_rate = 4.45
balance = balance * interest_rate
{% endhighlight %}

Magic numbers are particularly troublesome when the same hard-coded value appears in multiple places.

Did you use magic numbers? Can you refactor your code to eliminate them?


## *5.* $5 and $10 notes

Imagine your ATM now holds $5 and $10. People want as few notes as possible.

**Examples**

* `withdraw(25)` should return `[10, 10, 5]`
* `withdraw(11)` should return `false`, because $11 cannot be made up of $5 and $10 notes

### Tests for step 5:

{% highlight ruby %}
# Replace your existing tests with the ones below.
describe 'atm' do
  [
    [-1, false],
    [0, false],
    [7, false],
    [20, [10, 10]],
    [25, [10, 10, 5]],
    [35, [10, 10, 10, 5]],
  ].each do |input, expected|
    it "should return #{expected} when $#{input} is withdrawn" do
      withdraw(input).must_equal expected
    end
  end
end
{% endhighlight %}

## *6.* $5, $10, and $20 notes

Your ATM now holds $5, $10, and $20 notes. Modify your function to accommodate this.

**Note:** at this point, each higher denomination can be evenly divided by each lower denomination - eg. $20 / $10 = 2. Things get much trickier when that's not the case (eg, $50's and $20's). For this step, we'll intentionally not deal with this case to make it easier.

**Examples**

* `withdraw(15)` should return `[10, 5]`
* `withdraw(25)` should return `[20, 5]`
* `withdraw(35)` should return `[20, 10, 5]`
* `withdraw(11)` should return `false`, because $11 cannot be made up of $5 and $10 notes

**Tips for getting tests green:**

To tell if an array is empty: `my_array.empty?`

To tell if an array is not empty: `!my_array.empty?`

To remove the first element off an array: `my_array.shift`. Eg, `[1, 2, 3].shift` results in `[2, 3]`

### Tests for step 6:

{% highlight ruby %}
# Replace your existing tests with the ones below.
describe 'atm' do
  [
    [-1, false],
    [0, false],
    [7, false],
    [53, false],
    [35, [20, 10, 5]],
    [40, [20, 20]],
    [65, [20, 20, 20, 5]],
    [70, [20, 20, 20, 10]],
    [75, [20, 20, 20, 10, 5]],
  ].each do |input, expected|
    it "should return #{expected} when $#{input} is withdrawn" do
      withdraw(input).must_equal expected
    end
  end
end
{% endhighlight %}


### Refactor

* How many lines did you have to change, going from step 5 to step 6?
* What if we made $100 notes available, as well? Could you do this in a single line?
* Refactor your code so that you could change to $100, $20 and $10 notes, by changing a single line.
* What is the most future-proof solution?


## *7.* Final Discussion Points
* Given a particular solution *works*, what makes it 'good' or 'bad' code?
* Can you think of any take-home best practices or principles? Is code structure important? Why?
* Did you have any 'Aha!' moments? What were they?
* Let's say you started a little ATM company, which quickly expanded to become a global success. How suitable is your code for dealing with all denominations of currency, in all nations of the world? Did it get more suitable with each step?


## Challenge! $50 and $20 notes

Up til now, we've intentionally avoided the case where a smaller note cannot fit evenly into each larger one. For example, we've avoided the case of having only $50s and $20s (where 20 does not divide evenly into 50). Can you see why this case will be harder? If your current code were to include only $50s and $20s, what would happen when you try to withdraw $60, or $110? In your head, or on paper, can you think of what logic would be needed to be in place to handle these cases correctly? If you're up for a challenge, try to handle this case in your code! (You'll need to write the tests yourself for this step).


