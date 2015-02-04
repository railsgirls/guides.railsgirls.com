---
layout: default
title: Test Driven Development
permalink: test-driven-development
---

# Test Driven Development

*Written by Gregory McIntyre, [@gregmcintyre](https://twitter.com/gregmcintyre)*

This exercise is intended to teach you what we're talking about when we say
*Test Driven Development* (TDD).

## Background information

**Roman Numerals**

If you are not already familiar with Roman numerals, please read up
on [how Roman numerals work][Roman numerals] before continuing.

In summary, here are some examples of how Roman people wrote numbers:

-------:     | -----------:
Hindu-Arabic | Roman
-------:     | -----------:
    1        | I
    4        | IV
    5        | V
    6        | VI
    7        | VII
    9        | IX
    10       | X
    50       | L
    100      | C
    500      | D
    1000     | M

We are going to write a program that takes an integer value in the left column
and calculates the equivalent string value in the right column.

**Guide for working in a group**

We encourage doing this exercise in a group of 2-4 people. The rules that
govern how this works are very similar to how programmers do *pair programming*
and this exercise is also intended to give you some exposure to that practice
also.

- Each group has one **hot seat** with laptop and *Sublime Text* ready.
- Everybody else should **close their laptops** and sit around the hot seat chair.
- You will all regularly stand up and **rotates chairs** so the next person is
  in the hot seat. The steps below explain when to do that.
- Pick somebody to start in the hot seat. That person should follow all the
  steps until swapping seats is mentioned.

## *1.* Initial code

Copy this code into a file called `roman.rb`:

{% highlight ruby %}
def roman(n)
  return "?"
end

require "minitest/spec"
require "minitest/autorun"

describe "roman" do
  it "converts the number 1 to the string I" do
    roman(1).must_equal "I"
  end
end
{% endhighlight %}

**Run your tests**

If you use *Sublime Text* on Linux, OSX Mavericks (or better) or Windows, you
can run the tests by pressing `Ctrl-B`. Otherwise you can type the follow into
your terminal:

{% highlight sh %}
ruby roman.rb
{% endhighlight %}

**Output**

You should see the following output from the tests:

{% highlight sh %}
roman#test_0001_converts the number 1 to the string I [tdd1.rb:11]:
Expected: "I"
  Actual: "?"

1 tests, 1 assertions, 1 failures, 0 errors, 0 skips
{% endhighlight %}

Take a moment to read this output carefully. It is quite a mouthful.

Your tests are now **red**. i.e. One or more of the tests are failing. You can
tell you have a failing test by checking the summary at the end: `1 tests, 1
assertions, 1 failures, 0 errors, 0 skips`.

**Stand up** and give the hot seat to the next person.

## *2.* Make the tests pass

It is time to make the test pass. Do this however you see fit. It's fine if the
change is just an extra `if` statement or one extra character. In fact, that is
encouraged: you generally shouldn't write unnecessary code. If you're stuck,
you can ask the people around you for their opinions.

Here is a way that you could make the first test pass, just to get you into the
swing of things:

{% highlight ruby %}
def roman(n)
  return "I"
end
{% endhighlight %}

If this seems facetious, you're right but it is a valid solution because it
makes all the tests pass. When your tests all pass, we call them **green**.

## *3.* Refactor your code

Look over the code and decide if it's a good idea to **refactor** it (clean up
the code and make it easier to read). If you decide to not to refactor, skip
this step.

**Hint**: It's a good time to refactor are when you notice *repetition*. If you
like, you can also refactor the tests.

Run your tests after refactoring. If they fail, you accidentally broke
something.

## *4.* Write a new failing test

If you all agree that the code should work in general, and you can't think of
any more cases to test and everything passes, you can stop here. You win!

Otherwise, your last job in the hot seat is to write a new test: one that fails.
If you're stuck, there are some suggestions at the bottom of this page.

You can copy and paste the previous test and alter it. You can change it to be
anything you like. Your tests should probably test the next trickiest
situation, but if you feel like going back and adding a simpler case, that's
fine too as long as it fails.

The other members of the group can chime in and ask questions or spot problems
for you. It's their job to help you. If they're not being helpful, politely let
them know.

Here is an example of an expanded test suite:

{% highlight ruby %}
describe "roman" do
  it "converts the number 1 to the string I" do
    roman(1).must_equal "I"
  end

  it "converts the number 4 to the string IIII" do
    roman(4).must_equal "IIII"
  end
end
{% endhighlight %}

Your tests are now **red** again; at least one is failing.

**Stand up** and offer the hot seat to the next person in your group.

## Repeat!

Keep repeating steps 2 through 4, making sure to continue switching at the end
of step 4. You are done when your team feels like they are done.

Don't worry about finishing all cases. The goal is to practice the steps and
learn to work together in this way. Get used to writing tests as well as
getting them to pass. Practice. Good luck!

## Hints

If you are stuck for ideas, here is a list of Roman numerals to write tests
for, in this order. Note the way that the build up incrementally in complexity.

:--------- | :-----------
Input      | Output
:--------- | :-----------
 `1`       | `"I"`
 `5`       | `"V"`
 `4`       | `"IIII"`
 `6`       | `"VI"`
 `7`       | `"VII"`
 `10`      | `"X"`

If you get this far, you earn partial credit. Romans used to use `IIII` for 4.
That's why 4 on an analog watch is written as `IIII`. Later on, they added
*subtractive* digits. These are harder to program. Once you feel confident that
your program works with all the numbers above, try dealing with subtractive
digits.

:--------- | :-----------
Input      | Output
:--------- | :-----------
`4`        | `"IV"`
`14`       | `"XIV"`
`2896`     | `"MMDCCCXCVI"`

[Roman numerals]: http://www.onlineconversion.com/roman_numerals_advanced.htm
