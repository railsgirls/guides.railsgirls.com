---
layout: default
title: Rails Girls Sinatra tutorial
permalink: sinatra-app
---

# Create your first voting app with Sinatra

*Created by Piotr Szotkowski, [@chastell](https://twitter.com/chastell)*

We will create a little voting app from scratch using a web development framework for Ruby called Sinatra, which is much like Ruby on Rails. Just another tool to get the job done really, and a fun one too!

Imagine your group of friends is figuring out what to order for your weekly movie watching marathon. With the many fast food options out there, this can become quite a discussion. This is where our app comes into play!

__COACH__: Explain shortly what [Sinatra](http://www.sinatrarb.com) is.

## Install Sinatra

Remember how we needed to install Ruby on Rails? Similarly we need to install Sinatra:

`gem install sinatra`

### Create your first Sinatra app

Create a `suffragist.rb` file with the following contents:

{% highlight ruby %}
require 'sinatra'

get '/' do
  'Hello, voter!'
end
{% endhighlight %}


You can actually call your Ruby file whatever you'd like. `vote.rb` for instance would totally work as well, when used consistently. But [suffragist](http://www.vocabulary.com/dictionary/suffragist) actually references to a super important event in the women's rights movement, so let's just go with that for now!  


### Run your app

Go to the directory where you put your app and run `ruby suffragist.rb`.
Now you can visit <a href="localhost:4567" target="_blank">localhost:4567</a>. You should
see a ‘Hello, voter!’ page, which means that the generation of your new
app worked correctly. Hit <kbd>Ctrl</kbd>+<kbd>C</kbd> in the terminal to shut down the server. If <kbd>Ctrl</kbd>+<kbd>C</kbd> does not work for you it means you are probably Windows user and <kbd>Ctrl</kbd>+<kbd>Z</kbd>/ <kbd>Ctrl</kbd>+<kbd>Pause</kbd> / <kbd>Ctrl</kbd>+<kbd>Break</kbd> will fix the issue)

__COACH__: Explain POST and GET methods, and how to communicate with the browser.



### Add the index view

To keep everything in order let’s make
a directory for our views (and name it `views`).

Put this code into an `index.erb` file in the `views` directory:

{% highlight erb %}
<!DOCTYPE html>
<html>
  <head>
    <meta charset='UTF-8' />
    <title>Suffragist</title>
    <link href='//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/css/bootstrap-combined.min.css' rel='stylesheet' />
  </head>
  <body class='container'>
    <p>What's for dinner?</p>
    <form action='cast' method='post'>
      <ul class='unstyled'>
        <% Choices.each do |id, text| %>
          <li>
            <label class='radio'>
              <input type='radio' name='vote' value='<%= id %>' id='vote_<%= id %>' />
              <%= text %>
            </label>
          </li>
        <% end %>
      </ul>
      <button type='submit' class='btn btn-primary'>Cast this vote!</button>
    </form>
  </body>
</html>
{% endhighlight %}

And into `suffragist.rb`:

{% highlight ruby %}
Choices = {
  'HAM' => 'Hamburger',
  'PIZ' => 'Pizza',
  'CUR' => 'Curry',
  'NOO' => 'Noodles',
}
{% endhighlight %}

Change the `get` action:

{% highlight ruby %}
get '/' do
  erb :index
end
{% endhighlight %}

Run `ruby suffragist.rb`, check your
results and shut down the server with <kbd>Ctrl</kbd>+<kbd>C</kbd>.

__COACH__: Talk a little about HTML and erb. Explain
templates. Explain what global constants are.



### Templates

Adjust the `index.erb` file in the `views`
directory and add the `<h1>…</h1>` line:

{% highlight erb %}
  <body class='container'>
    <h1><%= @title %></h1>
    <p>What's for dinner?</p>
{% endhighlight %}

Change the `get` action:

{% highlight ruby %}
get '/' do
  @title = 'Welcome to the Suffragist!'
  erb :index
end
{% endhighlight %}

__COACH__: Explain what instance variables are and
how Sinatra makes them visible in the views.



### Add the ability to POST results

Put this into `suffragist.rb`:

{% highlight ruby %}
post '/cast' do
  @title = 'Thanks for casting your vote!'
  @vote  = params['vote']
  erb :cast
end
{% endhighlight %}

Create a new file in the `views` directory, `cast.erb`,
and put there some HTML with embedded Ruby code:

{% highlight erb %}
<!DOCTYPE html>
<html>
  <head>
    <meta charset='UTF-8' />
    <title>Suffragist</title>
    <link href='//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/css/bootstrap-combined.min.css' rel='stylesheet' />
  </head>
  <body class='container'>
    <h1><%= @title %></h1>
    <p>You cast: <%= Choices[@vote] %></p>
    <p><a href='/results'>See the results!</a></p>
  </body>
</html>
{% endhighlight %}

__COACH__: Explain how POST works. How to catch what
was sent in the form? Where do `params` come from?



### Factor out a common layout

Create a `layout.erb` file in the `views`
directory. Put the following in there:

{% highlight erb %}
<!DOCTYPE html>
<html>
  <head>
    <meta charset='UTF-8' />
    <title>Suffragist</title>
    <link href='//netdna.bootstrapcdn.com/twitter-bootstrap/2.3.1/css/bootstrap-combined.min.css' rel='stylesheet' />
  </head>
  <body class='container'>
    <h1><%= @title %></h1>
    <%= yield %>
  </body>
</html>
{% endhighlight %}

Remove the above part from the other two templates
(`index.erb` and `cast.erb` in the `views` directory).

__COACH__: Talk about the structure of HTML documents and how factoring
out common code work in general. Explain what `yield` does.



### Add the results route and the results view

Paste the following code into `suffragist.rb`:

{% highlight ruby %}
get '/results' do
  @votes = { 'HAM' => 7, 'PIZ' => 5, 'CUR' => 3 }
  erb :results
end
{% endhighlight %}

Create a new file in the `views` directory, called `results.erb`.

{% highlight erb %}
<table class='table table-hover table-striped'>
  <% Choices.each do |id, text| %>
    <tr>
      <th><%= text %></th>
      <td><%= @votes[id] || 0 %>
      <td><%= '#' * (@votes[id] || 0) %></td>
    </tr>
  <% end %>
</table>
<p><a href='/'>Cast more votes!</a></p>
{% endhighlight %}

Run `ruby suffragist.rb`, check
your results and shut down the server with <kbd>Ctrl</kbd>+<kbd>C</kbd>.

__COACH__: Explain HTML tables and how the
missing values from the hash default to zero.



### Persist the results using YAML::Store

Time for something new! Let’s store our choices.

Add the following to the top of `suffragist.rb`:

{% highlight ruby %}
require 'yaml/store'
{% endhighlight %}

Add some more code into `suffragist.rb` – replace
`post '/cast'` and `get '/results'` with the following:

{% highlight ruby %}
post '/cast' do
  @title = 'Thanks for casting your vote!'
  @vote  = params['vote']
  @store = YAML::Store.new 'votes.yml'
  @store.transaction do
    @store['votes'] ||= {}
    @store['votes'][@vote] ||= 0
    @store['votes'][@vote] += 1
  end
  erb :cast
end

get '/results' do
  @title = 'Results so far:'
  @store = YAML::Store.new 'votes.yml'
  @votes = @store.transaction { @store['votes'] }
  erb :results
end
{% endhighlight %}

__COACH__: Explain what YAML is.


### See how the YAML file changes when votes are cast

Let’s open `votes.yml`. And vote. And check again.

__COACH__: There will be situations when one or more students will
forget to shut down the server before running it again. It’s a good
opportunity to search the Internet for a solution. They don’t
have to know everything about killing processes to find a solution.

__COACH__: In the end explain shortly the differences between Sinatra and Rails.



## Play with the app

Try to change things in the app in any way you see fit:

* Add some additional logic to the views.
* Redirect to the results outright.
* Add other votings; how would the YAML file need to change?
* Try to style the file in different ways.
