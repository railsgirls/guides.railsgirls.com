---
layout: default
title: Test Driven Development Exercise
permalink: test-driven-development
---
*Created by Greg McIntyre, [@gregmcintyre](https://twitter.com/gregmcintyre)*

This exercise teaches you what we're talking about when we say "Test Driven Development" (TDD). Ideally it also involves pair, group, or remote pair programming, but if you don't have anyone to pair with you can still go through this exercise.

This is quite a hard problem. We recommend you spend some time practicing Ruby before starting on it. If you're at a Rails Girls event, you might want to grab a mentor so you can ask questions.

## *0.*Background Info

- You need to know [how Roman numerals work](http://www.onlineconversion.com/roman_numerals_advanced.htm)

If you are pairing, you also need to do the following:

- Each pair (or group) will have a **hot seat** with laptop and Sublime Text.
- Within each group, everybody **rotates chairs** so the next person is at the keyboard, each time:
  - A new test is written, or
  - A test goes from failing to passing.

## *1.*Initial Code

Copy this code into a file called `roman.rb`:

{% highlight ruby %}
def roman(n)
  return "?"
end

require "minitest/spec"
require "minitest/autorun"
require "minitest/pride"

describe "roman" do
  it "converts the number 1 to the string I" do
    roman(1).must_equal "I"
  end
end
{% endhighlight %}

## *2.*Run your tests
If you use Sublime Text, you can run the tests by pressing
{% highlight erb %}
Ctrl-B
{% endhighlight %}

or you can type the follow into your terminal:
{% highlight sh %}
ruby roman.rb
{% endhighlight %}

### Output
You should see the following output from the tests:

{% highlight sh %}
roman#test_0001_converts the number 1 to the string I [tdd1.rb:11]:
Expected: "I"
  Actual: "?"

1 tests, 1 assertions, 1 failures, 0 errors, 0 skips
{% endhighlight %}

Your code is now **red** - one or more of the tests fail. You can tell you have a failing test by checking the line `1 tests, 1 assertions, 1 failures, 0 errors, 0 skips`.

## *3.*Fix your tests
Pick someone in your group to write the code (everyone will do it, so don't be shy!). This person is the **driver** - they will write the code. Everyone else is an **observer** they may offer suggestions and hints, but they may not steal the keyboard!

The driver will make the test pass. They may do this however they see fit, with feedback and hints from the observers. It's fine if the change is just an extra `if` statement,or something small. In fact, that's a great idea - it encourages the person writing the test to try harder to write good tests.

Your code is now **green** - all of your tests pass.

## *4.*Write a test

The next person in the group is now the driver. Again, the others observe and offer suggestions.

The new driver should write another failing test. You can write any test you like, so long as it moves you towards the goal of converting Roman Numerals. In general your tests will have a logical progression, but you'll find you might need to go back and add tests - that's completely fine! The observers should continue to give suggestions and hints.

Your code is now **red** again.

## *5.*Refactor your code
Everyone should look over the code and decide if it's a good idea to **refactor** it (clean up the code and make it easier to read). If you decide to not to refactor, skip this step. Otherwise:

The next person in the group is now the driver. With the help of the observer, the driver refactors the code. Keep running the tests as you refactor, by the end of the refactor you must have all **green** tests.

## *6+.*Rinse and Repeat!

Now you have the idea, you can keep repeating steps 2 through 5, making sure to continue switching the driver each time.

Don't worry about finishing the entire Roman Numeral problem. Spend some time going through these steps. Get used to writing tests as well as getting them to pass. Practice. Good luck!