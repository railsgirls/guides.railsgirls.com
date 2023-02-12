---
layout: guide
title: Adding Gravatar to you app
permalink: gravatar
---

# Adding Gravatar to your App

*Created by Catherine Jones*

Gravatar is a service for hosting user avatars. If you sign up with Gravatar you don't need to upload your picture for a lot of services, as it automatically detects it from Gravatar.

## Important

This guide assumes that you have already built a Rails Girls app by following this [app development guide](/app) and added authentication using [Devise](/devise).

You need to have an e-mail address registered with Gravatar for this to work. If you do not already have one you can go to [gravatar.com](https://gravatar.com/).

## *1.* Add the Gravtastic gem

{% coach %}
At time of writing the [Gravtastic Ruby gem](https://rubygems.org/gems/gravtastic) is archived and no longer maintained. If you know of a maintained alternatives, please update the guide.
{% endcoach %}

Open up your gemfile and under your `devise` gem add

{% highlight ruby %}
gem 'gravtastic'
{% endhighlight %}

In the terminal run

{% highlight sh %}
bundle install
{% endhighlight %}

This will install the gravtastic gem. Then remember to restart your rails server.

## *2.* Set up Gravatar in your app

Open `app/models/user.rb`, and add these lines

{% highlight ruby %}
include Gravtastic
gravtastic
{% endhighlight %}

right after the first line.

## *3.* Configure Gravatar

Open `app/views/layouts/application.html.erb` and in the

{% highlight erb %}
<% if user_signed_in? %>
{% endhighlight %}

section but before the

{% highlight erb %}
<% else %>
{% endhighlight %}

add

{% highlight erb %}
<%= image_tag current_user.gravatar_url, :class => "gravatar" %>
{% endhighlight %}

And, put the following code to the bottom of `app/assets/stylesheets/application.css`:

{% highlight css %}
.gravatar {
  height: 30px;
  width: auto;
}
{% endhighlight %}

Now open you app in your browser and login with an e-mail address that is associated with a Gravatar. You should be able to see your Gravatar.
