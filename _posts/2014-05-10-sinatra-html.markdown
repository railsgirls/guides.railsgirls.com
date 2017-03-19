---
layout: default
title: Coffee List Display
permalink: sinatra-html
---

*Created by Tim McEwan, [@tjmcewan](https://twitter.com/tjmcewan)*

Using `.inspect` works for debugging, but we don’t want to use it in production. For one thing, it’s really hard to style the output. Let’s wrap our coffee list in proper HTML.

## *1.*Setup

First let’s make a method that will return our coffees wrapped in HTML tags. We’ll name the method `coffees_html`, so that what it does is reasonably obvious. Define it like so:

{% highlight ruby %}
def coffees_html
# build HTML here
end
{% endhighlight %}

And in your template method change your `#{ $coffees.inspect }` line to call our new method:

{% highlight ruby %}
#{ coffees_html }
{% endhighlight %}

## *2.*Add some HTML

Write something to turn the `$coffees` global variable into HTML that looks like this:

{% highlight HTML %}
<div>Flat White $3.50</div>
<br>
<div>Cappuccino $2.50</div>
{% endhighlight %}

**Hint:** Remember, the `$coffees` variable is an array of hashes.

We’ll want to loop over the `$coffees` array and turn each hash into an HTML string, surrounded by `<div>`s, which should then be all joined together with `<br>`s. We’ll also need to ensure we’re returning a string.

For some solution ideas, [check this out](http://tjmcewan.github.io/coffeecalc/snippets/coffees_html.rb.txt).

