---
layout: guide
title: Rails Girls Sinatra tutorial
permalink: sinatra-app
redirect_from:
  - sinatra-app-bg
---

# Create your first voting app with Sinatra

*Created by Piotr Szotkowski, [@chastell](https://twitter.com/chastell)*

We will create a little voting app from scratch using a web development framework for Ruby called Sinatra, which is much like Ruby on Rails. Just another tool to get the job done really, and a fun one too!

Imagine your group of friends is figuring out what to order for your weekly movie watching marathon. With the many fast food options out there, this can become quite a discussion. This is where our app comes into play!

{% coach %}
Explain shortly what [Sinatra](https://sinatrarb.com) is.
{% endcoach %}

## Install Sinatra

Remember how we needed to install Ruby on Rails? Similarly we need to install Sinatra:

`gem install sinatra webrick`

### Create your first Sinatra app

Create a `suffragist.rb` file with the following contents:

{% highlight ruby %}
require 'sinatra'

get '/' do
  'Hello, voter!'
end
{% endhighlight %}

You can actually call your Ruby file whatever you'd like. `vote.rb` for instance would totally work as well, when used consistently. But [suffragist](https://www.vocabulary.com/dictionary/suffragist) actually references to a super important event in the women's rights movement, so let's just go with that for now!

### Run your app

Go to the directory where you put your app and run `ruby suffragist.rb`. Now you can visit <a href="localhost:4567" target="_blank">localhost:4567</a>. You should see a 'Hello, voter!' page, which means that the generation of your new app worked correctly. Hit <kbd>Ctrl</kbd>+<kbd>C</kbd> in the terminal to shut down the server. If <kbd>Ctrl</kbd>+<kbd>C</kbd> does not work for you it means you are probably Windows user and <kbd>Ctrl</kbd>+<kbd>Z</kbd> / <kbd>Ctrl</kbd>+<kbd>Pause</kbd> / <kbd>Ctrl</kbd>+<kbd>Break</kbd> will fix the issue.

{% coach %}
Explain POST and GET methods, and how to communicate with the browser.
{% endcoach %}

### Add the index view

To keep everything in order let's make a directory for our views (and name it `views`).

Put this code into an `index.erb` file in the `views` directory:

{% highlight erb %}
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Suffragist</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  </head>
  <body>
    <div class="container">
      <p>What's for dinner?</p>

      <form action="cast" method="post">
        <div class="mb-3">
          <% Choices.each do |id, text| %>
            <div class="form-check">
              <input type="radio" name="vote" value="<%= id %>" class="form-check-input" id="vote_<%= id %>" />
              <label class="form-check-label" for="vote_<%= id %>">
                <%= text %>
              </label>
            </div>
          <% end %>
        </div>

        <button type="submit" class="btn btn-primary">Cast this vote!</button>
      </form>
    </div>
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

Run `ruby suffragist.rb`, check your results and shut down the server with <kbd>Ctrl</kbd>+<kbd>C</kbd>.

{% coach %}
Talk a little about HTML and erb. Explain templates. Explain what global constants are.
{% endcoach %}

### Templates

Adjust the `index.erb` file in the `views` directory and add the `<h1>…</h1>` line:

{% highlight erb %}
  <body>
    <div class="container">
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

{% coach %}
Explain what instance variables are and how Sinatra makes them visible in the views.
{% endcoach %}

### Add the ability to POST results

Put this into `suffragist.rb`:

{% highlight ruby %}
post '/cast' do
  @title = 'Thanks for casting your vote!'
  @vote  = params['vote']
  erb :cast
end
{% endhighlight %}

Create a new file in the `views` directory, `cast.erb`, and put there some HTML with embedded Ruby code:

{% highlight erb %}
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Suffragist</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  </head>
  <body>
    <div class="container">
      <h1><%= @title %></h1>
      <p>You cast: <%= Choices[@vote] %></p>
      <p><a href="/results">See the results!</a></p>
    </div>
  </body>
</html>
{% endhighlight %}

{% coach %}
Explain how POST works. How to catch what was sent in the form? Where do `params` come from?
{% endcoach %}

### Factor out a common layout

Create a `layout.erb` file in the `views` directory. Put the following in there:

{% highlight erb %}
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Suffragist</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  </head>
  <body>
    <div class="container">
      <h1><%= @title %></h1>
      <%= yield %>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>
{% endhighlight %}

Remove the above part from the other two templates (`index.erb` and `cast.erb` in the `views` directory).

{% coach %}
Talk about the structure of HTML documents and how factoring out common code work in general. Explain what `yield` does.
{% endcoach %}

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
<table class="table table-hover table-striped">
  <% Choices.each do |id, text| %>
    <tr>
      <th><%= text %></th>
      <td><%= @votes[id] || 0 %>
      <td><%= '#' * (@votes[id] || 0) %></td>
    </tr>
  <% end %>
</table>
<p><a href="/">Cast more votes!</a></p>
{% endhighlight %}

Run `ruby suffragist.rb`, check your results and shut down the server with <kbd>Ctrl</kbd>+<kbd>C</kbd>.

{% coach %}
Explain HTML tables and how the missing values from the hash default to zero.
{% endcoach %}

### Persist the results using YAML::Store

Time for something new! Let's store our choices.

Add the following to the top of `suffragist.rb`:

{% highlight ruby %}
require 'yaml/store'
{% endhighlight %}

Add some more code into `suffragist.rb` – replace `post '/cast'` and `get '/results'` with the following:

<!--
Do not change the .yaml extension to .yml.

rerun, the most popular solution for restarting Sinatra if source files change, watches for .yml files by default.

As a result, if after an attendee starts using rerun, rerun will restart the server any time a vote is cast, leading to unexpected behavior from the app.
-->

{% highlight ruby %}
post '/cast' do
  @title = 'Thanks for casting your vote!'
  @vote  = params['vote']
  @store = YAML::Store.new 'votes.yaml'
  @store.transaction do
    @store['votes'] ||= {}
    @store['votes'][@vote] ||= 0
    @store['votes'][@vote] += 1
  end
  erb :cast
end

get '/results' do
  @title = 'Results so far:'
  @store = YAML::Store.new 'votes.yaml'
  @votes = @store.transaction { @store['votes'] }
  erb :results
end
{% endhighlight %}

{% coach %}
Explain what YAML is.
{% endcoach %}

### See how the YAML file changes when votes are cast

Let's open `votes.yaml`. And vote. And check again.

{% coach %}
There will be situations when one or more students will forget to shut down the server before running it again. It's a good opportunity to search the Internet for a solution. They don't have to know everything about killing processes to find a solution.
{% endcoach %}

{% coach %}
In the end explain shortly the differences between Sinatra and Rails.
{% endcoach %}

## Play with the app

Try to change things in the app in any way you see fit:

* Add some additional logic to the views.
* Redirect to the results outright.
* Add other votings; how would the YAML file need to change?
* Sort the results by the number of votes.
* Try to style the file in different ways.
