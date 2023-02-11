---
layout: default
title: Add a new homepage
permalink: new-homepage
---

# Add a new homepage

In this guide we'll add another page. This will be our new homepage: the first page that will be shown when you open your app when you visit <http://localhost:3000>. Feel free to skip this guide if you know how Rails controllers, views and routes work.

In the previous guide a "pages" controller was already generated, we do not need to do this again. Rails will stop us if we do try to. Instead, we'll need to add the page manually ourselves.

## Add a new view

Instead we'll add another page on our own. Run the following command in the Terminal app to add another "view" file used to display page content.

<div class="os-specific">
  <div class="mac nix">
{% highlight sh %}
touch app/views/pages/homepage.html.erb
{% endhighlight %}
  </div>
  <div class="win">
{% highlight sh %}
type nul > "app/views/pages/homepage.html.erb"
{% endhighlight %}
  </div>
</div>

Then open the newly created file in your Text editor: `app/views/pages/homepage.html.erb`

Add some content to it, like the following, and save the file:

{% highlight erb %}
<h1>The ideas app</h1>
<p>Welcome to my ideas app!</p>
{% endhighlight %}

## Configuring the route

To tell Rails when to show this page, open the `config/routes.rb` file in your Text Editor. Change the following line:

{% highlight ruby %}
root to: redirect("/ideas")
{% endhighlight %}

to this instead and save the file:

{% highlight ruby %}
root "pages#homepage"
{% endhighlight %}

When you now visit the root path of the app, <http://localhost:3000>, you should see your new homepage!

## Updating the navigation bar

Lastly, to make the new root page accessible through the navigation bar, open the `app/views/layouts/application.html.erb` file in your Text Editor. Above the following lines:

{% highlight erb %}
<li class="nav-item">
  <a class="nav-link <%= 'active' if current_page?(controller: 'ideas') %>" href="/ideas">Ideas</a>
</li>
{% endhighlight %}

add a new link with the lines below, and save the file:

{% highlight erb %}
<li class="nav-item">
  <a class="nav-link <%= 'active' if current_page?(controller: 'pages', action: 'homepage') %>" href="/">Home</a>
</li>
{% endhighlight %}

When you refresh the page in the browser, and click the "The ideas app" link, it will open the new homepage. Try out all the links in the navigation bar. Do they take you to the page you expected?

{% include other-guides.md %}
