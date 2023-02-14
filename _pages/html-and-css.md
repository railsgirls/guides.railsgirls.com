---
layout: main_guide
title: Style your app using HTML and CSS
permalink: html-and-css
---

# Style your app using HTML and CSS

{% include main-guide-intro.html %}

The app doesn't look very nice right now: it's the standard plain black text on a white background. Let's improve that using HTML and CSS!

## What is HTML?

HTML (HyperText Markup Language) is used to structure your app. It tells the browser what is a heading, a list, a table, a link, etc. on the website. The scaffolding that was generated in the [previous guide](/app) is also made up of HTML, with some Ruby added to it to make it more dynamic.

Open up the `app/views/ideas/index.html` file and you should see something like the example below. The parts of the file that start with a `<name>` tag opens an HTML tag, and the one with the forward slash symbol in it `</name>`, closes it. You can add all kinds of properties to it, like `style`, `id` and `class`.

{% highlight erb %}
<h1>Ideas</h1>

<div id="ideas">
  <% @ideas.each do |idea| %>
    <%= render idea %>
  <% end %>
</div>
{% endhighlight %}

There are also special kinds of parts in the file indicated with the `<%`, `<%=` and `%>` code. This looks a lot like HTML, but it's not. It is a flavor of Ruby that makes the HTML show things dynamically, like all the different ideas you added to your app's database.

{% coach %}
Talk about the relationship between HTML and Rails.

- Explain a little bit more what HTML is and give some examples (like this website's source code).
- What part of Rails views are HTML and what is Embedded Ruby (ERB)?
- What is Model View Controller and how does this relate to it?
    - Models and controllers are responsible for generating the HTML views.
{% endcoach %}

## What is CSS?

CSS (Cascading Style Sheets) allows you to specify how the HTML should look like, what text and background color elements should have, what fonts to use, what size they are, where they are on the page, etc.

In this guide you won't be writing CSS yourself to style your app, but rely on the [Bootstrap project][Bootstrap] to do the heavy lifting for you. It provides the framework for CSS to style and apply design to your app. There are many CSS classes available you can apply to your HTML. It helps you get started quickly.

If you're interested in learning more about CSS, we suggest taking a look at this [getting started with CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/Getting_started) tutorial after this workshop.

[Bootstrap]: https://getbootstrap.com

{% coach %}
Talk about the relationship between HTML, CSS and Rails.

- How does Bootstrap work and how does it style the app pages?
- Briefly show some [Bootstrap examples](https://getbootstrap.com/docs/5.2/examples/) and show what you can accomplish with using a framework like Bootstrap.
{% endcoach %}

## Add Bootstrap to help style your app

Bootstrap consists of a couple different parts, the first we'll use is the CSS. To use it, we need to add it to our app by adding some lines of code the HTML. Specifically the layout file. The layout file is the file that all your Rails views are wrapped in. It makes sure all pages have the same basic layout and CSS loaded.

Open the `app/views/layouts/application.html.erb` file in your Text Editor and above the following line:

{% highlight erb %}
<%= stylesheet_link_tag "application", "data-turbo-track": "reload" %>
{% endhighlight %}

add this line to the file:

{% highlight erb %}
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
{% endhighlight %}

This loads Bootstrap from a server on the Internet. That way you don't have to install it locally before you can use it.

In the same file, replace this line:

{% highlight erb %}
<%= yield %>
{% endhighlight %}

with these lines of code in the same file and save the file.

{% highlight erb %}
<div class="container">
  <%= yield %>
</div>
{% endhighlight %}


Refresh your app in the Browser. Already the app looks a bit better and has the app content front and center. Your app is now using the Bootstrap system for styling using its CSS.

## Add a navigation bar

It's easy to get lost on a website that has very little of a User Interface (UI). Let's add a navigation bar and footer to the layout to give it more the appearance of an app and allow us to find our way around.

In the same file, under the `<body>` tag add these lines of code. This will add a navigation bar to the app.

{% highlight erb %}
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">The idea app</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link <%= 'active' if current_page?(controller: 'ideas') %>" href="/ideas">Ideas</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
{% endhighlight %}

Before the `</body>` tag at the end of the file, add these lines of code. This will add a footer saying "Rails Girls" along with the current year, and include the Bootstrap JavaScript needed for the navigation bar functionality.

{% highlight erb %}
<footer class="mt-5 text-center">
  <div class="container">
    Rails Girls <%= Time.now.year %>
  </div>
</footer>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
{% endhighlight %}

Make sure you saved your files and refresh the Browser to see what was changed.

## Add more styling!

_This step is optional. We'll be updating more styling in future guides. If you want to move on, open the next guide in the list below._

To further style the app with HTML & CSS, you can edit the `app/assets/stylesheets/application.css` file in your Text Editor if you already know some CSS. It's also possible to reference the [Bootstrap documentation](https://getbootstrap.com/docs/5.2/getting-started/introduction/) for more information on how to use Bootstrap for styling the app.
