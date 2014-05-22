---
layout: default
title: Test Driven Development
permalink: test-driven-development
---

## Test Driven Development

*Written by Gregory McIntyre, [@gregmcintyre](https://twitter.com/gregmcintyre)*

This exercise teaches you what we're talking about when we say *Test Driven
Development* (TDD). Ideally it also involves pair, group, or remote pair
programming, but if you don't have anyone to pair with you can still go through
this exercise.

This is a hard problem for a beginner. We recommend you spend some time
practicing Ruby before starting on it. If you're at a *Rails Girls* event, you
might want to grab a mentor so you can ask questions.

## *0.* Background Information

**Roman Numerals**

You need to know [how Roman numerals work][Roman numerals].

Here are some examples:

-------: | -----------:
Roman    | Hindu-Arabic
-------: | -----------:
    1    | I
    4    | IV
    5    | V
    6    | VI
    7    | VII
    9    | IX
    10   | X
    50   | L
    100  | C
    500  | D
    1000 | M

We are going to write a program that takes an integer value in the left column
and calculates the equivalent string value in the right column.

**Pairing Rules**

If you are *pairing*, you also need to do the following:

- Each pair (or group) will have a **hot seat** with laptop and *Sublime Text*.
- Within each group, everybody **rotates chairs** so the next person is at the
  keyboard, each time:
  - A new test is written, or
  - A test goes from failing to passing.

## *1.* Initial Code

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

## *2.* Run your tests

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

Your tests are now **red**. i.e. One or more of the tests fail. You can tell
you have a failing test by checking the summary at the end: `1 tests, 1
assertions, 1 failures, 0 errors, 0 skips`.

## *3.* Fix your tests

Pick someone in your group to write the code. (Everyone is going to take turns
to do this.) This person is the **driver**. They will write the code. Everyone
else is an **observer**. They may offer suggestions and advice, but they may
not steal the keyboard!

The driver's first job is to make the test pass. They may do this however they
see fit, with feedback and hints from the observers. It's fine if the change is
just an extra `if` statement or one extra character. In fact, that is
encouraged: you generally shouldn't write unnecessary code.

Here is a way that you could make the first test pass, just to get you into the
swing of things:

{% highlight ruby %}
def roman(n)
  return "I"
end
{% endhighlight %}

Seem facetious? Don't worry. If it passes all the tests, it is a valid
solution. When your tests all pass, we call them **green**.

## *4.* Refactor your code

Everyone should look over the code and decide if it's a good idea to
**refactor** it (clean up the code and make it easier to read). If you decide
to not to refactor, skip this step.

**Hint**: It's a good time to refactor are when you notice your code looks
repetitive. If you like, you can also refactor the tests.

You should re-run your tests after refactoring. If they fail, you accidentally
broke something.

## *5.* Write a new failing test

If you can't think of any more cases to test and everything passes, you can
stop here. You win!

Otherwise, the last job of the driver is to write a new test: one that fails.
Again, the others observe and offer suggestions.

You can copy and paste the previous test and alter it. You can change it to be
anything you like. Your tests will probably test more complex situations, but
if you feel like going back and adding a simpler case, that's fine too. The
observers should continue to ask good questions and spot problems early.

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


Your tests are now **red** again.

## Change driver, repeat!

The next person in the group is now the driver. With the help of the observers,
the driver fixes a test, refactors if necessary and writes a new test if
necessary.

Keep repeating steps 2 through 5, making sure to continue switching the driver
each time. You are done when your team feels like they are done.

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
   `14`    | `"XIV"`
`2896`     | `"MMDCCCXCVI"`

[Roman numerals]: http://www.onlineconversion.com/roman_numerals_advanced.htm
