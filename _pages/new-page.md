---
layout: default
title: Add a new page to your app
permalink: new-page
---

# Add a new page to your app

{% include main-guide-intro.html %}

Let's add an about page to our app that will display information about the author of this application — you!

In the Terminal app, run the following command:

{% highlight sh %}
rails generate controller pages about
{% endhighlight %}

This command will create a new directory under `app/views/` called `pages`. In that directory a file called `about.html.erb` will be created. This file contains the content that will be displayed on your "about" page.

Open the `app/views/pages/about.html.erb` file. Add some information about yourself in the HTML. Something like the example below:

{% highlight erb %}
<h1>About me</h1>
<p>Hello there! I am ... and this is my app!</p>
{% endhighlight %}

The same `rails generate` command has also added a new route to your `config/routes.rb`. This route configuration tells Rails which page should be shown when visiting that URL.

{% highlight ruby %}
get "pages/about"
{% endhighlight %}

To see your new about page, take your browser to <http://localhost:3000/pages/about> or, or append `/pages/about` to your preview URL. You should now see the new page you just created!

## Add a link to your navigation bar

Now that we know the new page works, let's make sure people can visit it by creating a link for it in the navigation bar.

Open `app/views/layouts/application.html.erb` in your Text Editor and under these lines:

{% highlight erb %}
<li class="nav-item">
  <a class="nav-link <%= 'active' if current_page?(controller: 'ideas') %>" href="/ideas">Ideas</a>
</li>
{% endhighlight %}

add the following lines to link to the new page:

{% highlight erb %}
<li class="nav-item">
  <a class="nav-link <%= 'active' if current_page?(controller: 'pages', action: 'about') %>" href="/pages/about">About</a>
</li>
{% endhighlight %}

Refresh the page in your Browser and click the newly created link to see if it works! You can now navigate between the ideas and the about pages in your app through one unified navigation bar.

## The changes in more detail

By adding the new "nav item" to the navigation a new link has appeared in the navigation bar, styled by Bootstrap. This link points to the new about page.

This link is made by using a `a`-element, which is the HTML for a link. Using the `href` property we tell the browser where to point to, in this case `/pages/about`. The "About" text between the `<a ... href="/pages/about">About</a>` link is what is shown as the label for the people looking at the page through the Browser.

The middle part with the `class` property is what we use to indicate how the link should be displayed. If the link is "active", it is the page we're currently and it shows more brightly colored than the other link of the page we are currently not on.

To check if the page is currently active, Rails provides a helper called `current_page?`. This condition will be "true" if it matches our page selection: `controller: 'pages', action: 'about'`. The `controller` is the entrypoint for anything in the `/pages` path of this part of the app, and the `action` is the specific page, which is "about".

Knowing this, you can also add a [new homepage](/new-homepage) to your app.

---

When you're ready, move on to the next guide.

{% include other-guides.md %}
