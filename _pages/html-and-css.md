---
layout: default
title: Style your app using HTML and CSS
permalink: html-and-css
---

# Style your app using HTML and CSS

The app doesn't look very nice right now, plain black text on a white background. Let's improve that! We'll use the [Bootstrap project](https://getbootstrap.com) to give us a better looking website quickly.

**Coach:** Talk about the relationship between HTML, CSS and Rails. What part of views is HTML and what is Embedded Ruby (ERB)? What is Model View Controller and how does this relate to it? (Models and controllers are responsible for generating the HTML views.)

## Add Bootstrap to help style your app

Bootstrap consists of a couple different parts, the first we'll use is the <abbr title="Cascading Style Sheets">CSS</abbr>. The CSS is used to specify font color, background color, spacing, font sizes, etc. to your app. The bundled CSS makes it easier to style your app without having to write all of the CSS yourself. This allows us to get started quickly.

Open the `app/views/layouts/application.html.erb` file in your Text Editor and above the following line:

{% highlight erb %}
<%= stylesheet_link_tag "application", "data-turbo-track": "reload" %>
{% endhighlight %}

add this line to the file:

{% highlight erb %}
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
{% endhighlight %}

In the same file, replace this line:

{% highlight erb %}
<%= yield %>
{% endhighlight %}

with these lines of code in the same file:

{% highlight erb %}
<div class="container">
  <%= yield %>
</div>
{% endhighlight %}

and save the file.

Already the app looks a bit better and has the app content front and center. Your app is now using the Bootstrap system for styling using its CSS. You may need to reload the page in your browser to see the changes.

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

Make sure you saved your files and refresh the browser to see what was changed.

Optional: To further style the app with HTML & CSS, you can edit the `app/assets/stylesheets/application.css` file in your Text Editor. Reference the [Bootstrap documentation](https://getbootstrap.com/docs/5.2/getting-started/introduction/) for more information on how to use Bootstrap for styling the app.

{% include other-guides.md %}
