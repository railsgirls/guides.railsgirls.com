---
layout: guide
title: Introduction to Ruby
description: "Learn how the Ruby language syntax works and how to make dynamic HTML in your Rails app views."
permalink: ruby-intro
---

# Introduction to Ruby

In the Rails Girls workshop you'll be working with the Ruby programming language, among others. The Rails framework that will run your app is written in Ruby, and to change it you need to write Ruby code.

Ruby is a language that's optimized for developer happiness, but like anything it will take some getting used to.

In programming, there are a lot of different ways to builds apps. This guide will be focussing on a small set of Ruby concepts you need to write your app. It assumes you haven't written any code before. If you want to learn more after this workshop, there are a lot of resources out there. Ask you coach or the organizers.

## Hello world

All good apps start with the "Hello world!" starter. You write your first code and your code greets you back.

Create a new file on your laptop–anywhere will do for now, just remember where–and name it `app.rb`. The `.rb` extension tells you, your (future) team and the computer what kind of file it is: a Ruby program.

In this `app.rb` file you can write Ruby code. Open the file in your Text Editor. Start by copying in this small example:

{% highlight ruby %}
puts "Hello world!"
{% endhighlight %}

This app `puts` something. That means it will print something to the Terminal. In this case the text "Hello world!"

In the Terminal app you can run this app with the following command:

{% highlight sh %}
ruby app.rb
{% endhighlight %}

Make sure you're in the same directory in the Terminal app as you created your `app.rb` file in. (You can also type in `ruby ` and drag the file to your Terminal. It should add the path to the file to the Terminal command.)

If it ran successfully you should see this output in the Terminal app:

{% highlight sh %}
Hello world!
{% endhighlight %}

Your app is greeting you!

## Do some math

To make your app more dynamic you can perform calculations on values:

{% highlight ruby %}
puts 100 + 23
# 123
{% endhighlight %}

**Quick explanation about comments**: If you see the hashtag symbol (`#`), also known as the number or pound symbol, everything after that is considered a comment. Comments won't be run as Ruby code in your program. In the example above, when you see a `# some text` this is there to help explain what's happening and can be left out of your app code. It shows the printed output or the result of a line of code.

A couple other ways to perform calculations are shown below:

{% highlight ruby %}
puts 100 - 30
# 70

puts 5 * 10
# 50

puts 10 / 5
# 2
{% endhighlight %}

In the Terminal app run the app with the following command. It should print the results of the different calculations below one another.

{% highlight sh %}
ruby app.rb
{% endhighlight %}

## Variables

Apps move around data as they process or change it. Data can get assigned to "variables". Variables hold data and point to a location in the computer's memory. When you reference a variable in our apps, you access the data in the computer's memory.

In the example below the code has changed to define a variable named `greeting`. You can recognize this by the `greeting =` statement, ending with an equals sign. This form of statement assigns the value "Hello your name here" to the `greetings` variable. This variable holds some data, in this case the text value "Hello your name here". When we run this changed app, it will output "Hello your name here".

{% highlight ruby %}
greeting = "Hello your name here"
puts greeting
{% endhighlight %}

Change the text between the quotes (`"`) to print your own text.

## If-statement

A way to control the flow of your application is by using if-statements. These are branches in your code that do one thing or another based on one or more values.

Using the `if` keyword, you can check if a condition is true. In the example below it checks if one value is larger than the other with the greater than symbol (`>`).

{% highlight ruby %}
if 20 > 10 # if 20 is larger than 10
  puts "20 is larger than 10"
end
{% endhighlight %}

There are several ways to check values, some examples:

{% highlight ruby %}
# Compare two texts
if "Matz" == "Matz"
  # Do something when the names match
  # The double equal sign checks if two values match exactly
end

if "Jim" != "Jane"
  # Do something when the names don't match
  # The exclamation mark with an equal sign checks if two values don't match
end
{% endhighlight %}

In the examples above we've used values directly and these won't change, so an if-statement is not really necessary. In the real world, you'll most likely be using variables in if-statements. And the values in those variables will be based on some user input.

{% highlight ruby %}
value1 = 20
value2 = 10
if value1 > value2
  puts "value1 is larger than value2"
end
{% endhighlight %}

You may also want to do some other behavior if the if-statements condition does not match.

{% highlight ruby %}
if value1 > value2
  puts "Yes"
else
  # This code is run when the if-statement's condition isn't true
  puts "No"
end
{% endhighlight %}

It's even possible to create more branches in the same if-statement.

{% highlight ruby %}
if value1 == value2
  puts "The values match exactly"
elsif value1 > value2
  puts "value1 is bigger than value2"
else
  puts "value1 is smaller than value2"
end
{% endhighlight %}

## Methods

One way to organize the code of the app is to use methods. Methods are reusable blocks of code that can be called by their name.

In the example below a method called `say_hello` has been defined with the `def` keyword for "define". The end of the method is indicated with the `end` keyword. When this method is called it performs everything between the line starting with `def` keyword and the line containing the `end` keyword.

{% highlight ruby %}
def say_hello
  puts "Hello world!"
end
{% endhighlight %}

On its own, the method definition does nothing. This method is not called yet and the greeting is not printed.

You can use its name to call the method like so:

{% highlight ruby %}
say_hello
# Hello world
{% endhighlight %}

Once defined methods can be called many times. That makes it easier to do the same thing many times in an app.

{% highlight ruby %}
say_hello
# Hello world
say_hello
# Hello world
say_hello
# Hello world
{% endhighlight %}

### Method return values

Methods return the value of the statement on the method's last line. If we don't want the method to always print the result to the Terminal, we can return it instead.

{% highlight ruby %}
def say_hello
  "Hello world!"
end
{% endhighlight %}

To print the return value you need to pass the value returned by the method to the `puts` method like so:

{% highlight ruby %}
puts say_hello
{% endhighlight %}

This way of writing Ruby code is most commonly used, because it allows you to do more things than only print the return value, but perform other operations on it as well. In most apps you won't need to `puts`, or print, the values all the time. That's only for illustrative purposes in this guide.

### Method parameters

To make the method more dynamic you can use define it with a parameter. Then when you call it, pass in the name you want it to print.

{% highlight ruby %}
def say_hello(your_name)
  "Hello #{your_name}!"
end

puts say_hello("Your name")
# "Hello Your name"
{% endhighlight %}

When the `say_hello` method is called, the "Your name" value becomes the variable `your_name` in the method code. You can recognize this in the method definition line `def say_hello(your_name)`. The text `your_name` between the parentheses is the variable name. Then on the line with the `puts`, it's combined with the greeting: `"Hello #{your_name}!"`.

You'll notice that the way we call the method has changed, it now includes parentheses around the method parameters. The parentheses can be left out when no parameters are given.

{% highlight ruby %}
def say_hello_without_parameter
  "Hello world!"
end

# Both ways of calling the method will work
puts say_hello_without_parameter
puts say_hello_without_parameter()
{% endhighlight %}

Multiple method parameters can be defined. Use a comma between every parameter name. Parameters are added in order and can be referenced as such: the first value you give in will become the method's first parameter.

{% highlight ruby %}
def say_hello_and_hobby(your_name, your_hobby)
  "Hello #{your_name}! Your hobby is: #{your_hobby}"
end

puts say_hello_and_hobby("Your name", "tennis")
# "Hello Your name! Your hobby is: tennis"

puts say_hello_and_hobby("Yukihiro Matsumoto", "writing Ruby code")
# "Hello Yukihiro Matsumoto! Your hobby is: writing Ruby code"
{% endhighlight %}

Calling the method with different method parameters changes the text that is printed.

## Classes

The next step of organizing Ruby code is by using classes. By defining a class you can group several methods that relate to the same topic. We'll start with a class without methods to explain how classes work.

In the example below we have a class called `Greeter`. To use this class, we can initialize it with the `new` method on the class. We tell Ruby we want to call a method on the class by using the dot notation: `object.method`. In the example below that is the method `new`.

{% highlight ruby %}
class Greeter
end

Greeter.new
{% endhighlight %}

Since our class doesn't do anything yet, let's add a method to it. In the example below, the `say_hello` method has been added to the class. We can tell because it's within the `class Greeter` and last `end` statement. Then, the Greeter class instance is assigned to a variable with `greeter =`. On the next line you can call the `say_hello` method on the `greeter` variable, which points to the class instance.

{% highlight ruby %}
class Greeter
  def say_hello
    "Hello world"
  end
end

greeter = Greeter.new
puts greeter.say_hello
# "Hello world"
{% endhighlight %}

## Calling methods on values and variables

Everything in Ruby is an object, a class or an instance of a class. That means you can call methods on those objects. The "Hello world" text is an object, the value `true` is, and even the number `10` is.

Ruby has many types of objects that already have methods defined on them. In the example below you'll have Ruby calculate the number of individual characters in the text "Hello world". The result is 11.

{% highlight ruby %}
puts "Hello world".length
# 11
{% endhighlight %}

Using the dot notation you tell Ruby you want to call a method on the value, in this case `length`.

It's also possible to first assign the value to a variable and then call the method on it. In this case you'll call the method `length` on the variable `text`.

{% highlight ruby %}
text = "Hello world"
puts text.length
# 11
{% endhighlight %}

Some of these methods also accept parameters. In the example below you'll change the value stored on the `text` variable to output something different. For example, if you run the code below, it will replace "Hello" with "Hi there" in the `greeting` variable.

{% highlight ruby %}
text = "Hello your name here"
puts text.sub("Hello", "Hi there")
# "Hi there your name here"
{% endhighlight %}

Ruby has many built-in methods, making it possible to do all kinds of operations. A couple examples are shown below.

{% highlight ruby %}
puts "Hello world".upcase # Make all letters uppercase
# HELLO WORLD

puts "Hello world".reverse # Reverse the text
# dlrow olleH

puts "Hello world".count("l") # Count the number of occurrences of the letter "l"
# 3
{% endhighlight %}

## Class instance variables

Let's go back to your own Greeter class you created earlier. You previously added parameters to methods, let's add a parameter to the class now.

{% highlight ruby %}
greeter = Greeter.new("students")
puts greeter.say_hello
# Hello students!
{% endhighlight %}

Like the `say_hello` method, the `new` word also references a method. An object with the value `"students"` is given. This `new` method is a little different, it will eventually call the `initialize` method on the Greeter class.

{% highlight ruby %}
class Greeter
  def initialize(name)
    @name = name
  end

  def say_hello
    puts "Hello #{@name}!"
  end
end
{% endhighlight %}

You'll notice something new in the example above. There are two types of variables, the `name` method parameter that becomes a variable, and the `@name` variable. The last one is called an instance variable. You can recognize it by the `@` symbol in front of it. Instance variables can be referenced all through a class where a normal variable cannot. Normal variables can only be referenced within the context of the method in which they are declared. Once declared in the `initialize` method of the Greeter class, you can reference it in the `say_hello` method later.

## Loops

For the last topic we'll be briefly looking at loops. Loops are a way to run the same code for different values. Like greeting multiple people, as shown in the example below.

{% highlight ruby %}
names = ["students", "Rails Girls", "coaches"]
names.each do |name|
  greeter = Greeter.new(name)
  puts greeter.say_hello
end
{% endhighlight %}

The `names` list is called an Array, you can recognize them by the square brackets surrounding the several text values. Each value in the Array is separated by a comma. By calling the `each` method on the Array of names, you can perform a block of code for each value in the Array.

Blocks are a common occurrence in Ruby. They can be recognized by the `do` keyword, like in `names.each do`. Block parameters look a little different, instead of parentheses, it uses what's called the pipe symbol `|`, like in `|name|`. As the block gets called multiple times, the value in the `name` variable will change with each time the loop is called. First it will be "students", then "Rails Girls" and finally "coaches".

The output of this app will be:

{% highlight text %}
Hello students!
Hello Rails Girls!
Hello coaches!
{% endhighlight %}

## Embedded Ruby (ERB)

When writing Rails apps you'll encounter ERB (Embedded Ruby). This is a slightly different way of writing Ruby. This way of writing Ruby is embedded in HTML files. This helps make the Rails app show the content on webpages dynamically.

You'll recognize it by the file extension ending with `.erb`. A full filename looks something like `index.html.erb`.

In an ERB file you'll find HTML tags. You can recognize them by the lines that start with a smaller than symbol `<`, and end with a greater than symbol `>`. The letter or letters between those symbol indicate what type of element the page should render: a "p" for paragraph, an "a" for a link, an "img" for an image, an "ul" or "ol" for a list and many other types of elements. Each element has an opening tag like this: `<p>` and a closing tag with a slash symbol in it: `</p>`. You can nest these elements in on another to create webpages much like this one.

{% highlight html %}
<p>I am a paragraph</p>

<p>
  <a href="https://guides.railsgirls.com/">I am a link!</a>
</p>

<div>
  <h1>I am a heading</h1>
  <p>
    I am a piece of text with
    <a href="https://guides.railsgirls.com/">a link</a>.
  </p>
</div>
{% endhighlight %}

Where ERB comes in is to make the page show things dynamically. For example: when you enter a search phrase on Google.com, it shows different results for different phrases. That's done with some language like ERB, where ERB is one of the ways used by Ruby apps.

In the example below the code will use a loop to render a list of ideas. The ERB elements can be recognized by the same HTML symbols, but they also include a percentage symbol: `<%` and `%>`. If you want to print something on the page, use the `<%=` tag opener with the percentage symbol and the equals symbol.

{% highlight erb %}
<% @ideas.each do |ideas| %>
  <p><%= item.title %></p>
<% end %>
{% endhighlight %}

The output of which can be something like this:

{% highlight html %}
<p>Flying car</p>
<p>Hoverboard</p>
<p>Time travel</p>
{% endhighlight %}

A short reference of how ERB works:

{% highlight erb %}
# Use the <% and %> symbols for logic
<% Ruby code here %>

# For example an if-statement
<% if a > b %>
  Show something if a is larger than b
<% end %>

# For example a loop
<% @ideas.each do |ideas| %>
  <p><%= item.title %></p>
<% end %>

# Use the <%= and %> symbols for printing text on the webpage
<%= variable_name %>
<%= object.method_name %>
<%= item.title %>
{% endhighlight %}

## Next steps

You've now read a short introduction to Ruby. This guide doesn't cover everything, but you should have an idea of the Ruby language syntax.

Interested in learning more about Ruby and the different types of data Ruby supports? Try out Ruby on [Try Ruby](https://try.ruby-lang.org/).

If you want to continue working on your app instead, follow the [main guides](/#guides).
