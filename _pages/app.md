---
layout: main_guide
title: Build your first app
permalink: app
---

# Build your first app

*Originally created by Vesa Vänskä, [@vesan](https://twitter.com/vesan)*

{% include main-guide-intro.html %}

Welcome to the workshop! This is the guide you'll be starting with on the day of the workshop. Did you have trouble getting the installation to work? Ask your coach for help first.

## Help from the coach

When you see the box below, ask your coach to read it and help out where necessary.

{% coach %}
Hi coach 👋 Thank you so much for helping out today!
{% endcoach %}

## Learn about Ruby

In these next couple guides you're going to create a new app. For this you'll be using the Ruby on Rails framework. The Rails framework is written in the Ruby programming language. To get a better idea of how Ruby works, read the [Rails Girls guide to Ruby](/ruby-intro) if you haven't ever written any Ruby, or go to the slightly more advanced [try.ruby-lang.org](https://try.ruby-lang.org/) course before you continue.

## Creating the application

In this guide you're going to create a new app. For this you'll be using the Ruby on Rails framework. The app itself will be called *railsgirls*.

First, open the Terminal app and type in these commands:

<div class="os-specific">
  <div class="mac nix">
{% highlight sh %}
mkdir projects
{% endhighlight %}

    <div>
<p>You can verify that a directory named <code>projects</code> was created by running the list command: <code>ls</code>. You should see the <code>projects</code> directory in the output. Now you want to change the directory you are currently in to the <code>projects</code> folder by running:</p>
    </div>

{% highlight sh %}
cd projects
{% endhighlight %}

    <div>
<p>You can verify you are now in an empty directory or folder by again running the <code>ls</code> command. Now you want to create a new app called <code>railsgirls</code> by running:</p>
    </div>

{% highlight sh %}
rails new railsgirls
{% endhighlight %}

    <div>
<p>This will create a new app in the folder <code>railsgirls</code>, so we again want to change the directory to be inside of our Rails app by running:</p>
    </div>

{% highlight sh %}
cd railsgirls
{% endhighlight %}

    <div>
<p>If you run <code>ls</code> inside of the directory you should see folders such as <code>app</code> and <code>config</code>. You can then start the Rails server by running:</p>
    </div>

{% highlight sh %}
rails server
{% endhighlight %}
  </div>

  <div class="win">
{% highlight sh %}
mkdir projects
{% endhighlight %}

    <div>
<p>You can verify that a directory named <code>projects</code> was created by running the list command: <code>dir</code>. You should see the <code>projects</code> directory in the output. Now you want to change the directory you are currently in to the <code>projects</code> folder by running:</p>
    </div>

{% highlight sh %}
cd projects
{% endhighlight %}

    <div>
<p>You can verify you are now in an empty directory or folder by again running the <code>dir</code> command. Now you want to create a new app called <code>railsgirls</code> by running:</p>
    </div>

{% highlight sh %}
rails new railsgirls
{% endhighlight %}

    <div>
<p>This will create a new app in the folder <code>railsgirls</code>, so we again want to change the directory to be inside of our Rails app by running:</p>
    </div>

{% highlight sh %}
cd railsgirls
{% endhighlight %}

    <div>
<p>If you run <code>dir</code> inside of the directory you should see folders such as <code>app</code> and <code>config</code>. You can then start the Rails server by running:</p>
    </div>

{% highlight sh %}
rails server
{% endhighlight %}
  </div>
</div>

Open <http://localhost:3000> in your Browser. Clicking the link should open it in a new tab and show the `localhost:3000` in the address bar. If you are using a cloud service (e.g. Replit), use its preview functionality instead (see [installation guide](/install/replit) for details).

You should see a page with the Rails logo, which means that your Rails app is up and running. The `rails new` generator created a lot of app code for you to get started and we'll be modifying it in the rest of this workshop.

Notice in the Terminal window the command prompt is not visible because it is now running the Rails server. The command prompt will look something like this, but it may be different on your laptop:

<div class="os-specific">
  <div class="mac nix">
{% highlight sh %}
$
{% endhighlight %}
  </div>
  <div class="win">
{% highlight sh %}
>
{% endhighlight %}
  </div>
</div>

When the command prompt is not visible you cannot execute new commands. If you try running `cd` or another command it will not work. To stop the Rails server and return to the normal command prompt in the same Terminal window, press <kbd>Ctrl</kbd>+<kbd>C</kbd> in the Terminal to quit the Rails server.

{% coach %}
- Make sure it's clear what each command does: `cd`, `dir`/`ls`, `mkdir`, `rails server`.
- Briefly explain what was generated by `rails new`.
- Briefly explain what the Rails server does and why we need it.
- Briefly explain how can you stop the server.
{% endcoach %}

## Create Idea scaffold

You now have you own app, but it doesn't do anything yet. It only shows the Rails logo.

Next you're going to use Rails' scaffold functionality to generate a starting point that allows you to list, add, remove, edit, and view things; in your case _ideas_.

Run the following command in the Terminal app:

{% highlight sh %}
rails generate scaffold idea name:string description:text picture:string
{% endhighlight %}

{% coach %}
- Explain what Rails scaffolding is. How does it help us create parts of an app quickly?
- Briefly explain the `rails generate scaffold` command and how it works. What do they arguments mean?
    - What is the model name argument?
    - How do you specify database fields with `name:string` and what do they parts mean?
{% endcoach %}

The scaffold creates new files in your project directory, but to get it to work properly we need to run a couple of other commands to update our database and restart the server.

{% highlight sh %}
rails db:migrate
rails server
{% endhighlight %}

{% coach %}
What are database migrations and why do you need them?
{% endcoach %}

Open <http://localhost:3000/ideas> in your Browser. Cloud service (e.g. Replit) users need to append `/ideas` to their preview URL instead (see [installation guide](/install/replit)).

Click around and test what you got by running these few command-line commands. You should be able to make new ideas, view, edit and delete (destroy) them.

## Finetune the routes

Open <http://localhost:3000> (or your preview URL). It will show a page with only the Rails logo. Let's make it redirect to the ideas page instead.

Open the `config/routes.rb` file in your Text Editor. After the first line, add this line and save it:

{% highlight ruby %}
root to: redirect("/ideas")
{% endhighlight %}

Test the change by opening the root path (that is, <http://localhost:3000/> or your preview URL) in your Browser. It should now open the ideas index page when you visit the root path. The label in the Browser's address bar should have automatically changed to <http://localhost:3000/ideas>.

## Next steps

You have now created your first app! Congratulations!

From here we will continuing working on the app to improve the design with HTML and CSS, add more pages, add picture uploads, put your app online so that others can see it as well, share the code with others, allow people to leave comments, etc.

Talk with your coach about the steps you took in this guide. Do you have questions about any of the steps? Ask them before moving on to the next guide.
