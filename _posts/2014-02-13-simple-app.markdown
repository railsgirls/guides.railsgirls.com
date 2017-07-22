---
layout: default
title: Simpler Rails Girls App Tutorial
permalink: simpleapp
---

# Rails Girls App Tutorial

*Created by Vesa Vänskä, [@vesan](https://twitter.com/vesan)*

*Edited to include [simple_scaffold](https://github.com/Ben-M/simple_scaffold) by Ben Maraney.*

**Make sure you have Rails installed.** [**Follow the installation guide**](/install) to get set up.


## Get to know the tools

<div class="indent" markdown="1">

<h3><i class="icon-text-editor">&nbsp;</i></h3>

<h3>Text Editor</h3>

<p><a href="http://www.sublimetext.com">Sublime Text</a>, <a href="http://www.activestate.com/komodo-edit">Komodo Edit</a>, Vim, Emacs, and Gedit are examples of text editors your can use for writing code and editing files.</p>

<h3><i class="icon-prompt">&nbsp;</i></h3>

<h3>Terminal (known as Command Prompt on Windows)</h3>
Where you start the rails server and run commands.

<h3><i class="icon-browser">&nbsp;</i></h3>

<h3>Web browser</h3>
(Firefox, Safari, Chrome) for viewing your application.

</div>

### Important

It is important that you select the instructions specific to your operating system - the commands you need to run on a Windows computer are slightly different to Mac or Linux. If you're having trouble check the Operating System switcher at the bottom of the commands.

## *1.*Creating the application

We're going to create a new Rails app called *railsgirls*.

First, let's open a terminal:

* Mac OS X: Open Spotlight, type *Terminal* and click the *Terminal* application.
* Windows: Click Start and look for *Command Prompt*, then click *Command Prompt with Ruby and Rails*.
* Linux (Ubuntu/Fedora): Search for *Terminal* on the dash and click *Terminal*.

Next, type these commands in the terminal:

<div class="os-specific">
  <div class="nix">
{% highlight sh %}
mkdir projects
{% endhighlight %}

    <div>
You can verify that a directory named <code>projects</code> was created by running the list command: <code>ls</code>. You should see the <code>projects</code> directory in the output. Now you want to change the directory you are currently in to the <code>projects</code> folder by running:
    </div>

{% highlight sh %}
cd projects
{% endhighlight %}

    <div>
You can verify you are now in an empty directory or folder by again running the <code>ls</code> command. Now you want to create a new app called <code>railsgirls</code> by running:
    </div>

{% highlight sh %}
rails new railsgirls -m http://railsgirls.com/simple_scaffold.rb
{% endhighlight %}

    <div>
        <code>rails new railsgirls</code> tells Rails to generate a project called railsgirls with all the files that our application needs.
    </div>
    <div>
        <code>-m http://railsgirls.com/simple_scaffold.rb</code> tells Rails to download a special template from railsgirls.com which makes the files a bit simpler and easier for beginners to understand.
    </div>
    <div>
This will create a new app in the folder <code>railsgirls</code>, so we again want to change the directory to be inside of our rails app by running:
    </div>

{% highlight sh %}
cd railsgirls
{% endhighlight %}

    <div>
If you run <code>ls</code> inside of the directory you should see folders such as <code>app</code> and <code>config</code>. You can then start the rails server by running:
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
You can verify that a directory named <code>projects</code> was created by running the list command: <code>dir</code>. You should see the <code>projects</code> directory in the output. Now you want to change the directory you are currently in to the <code>projects</code> folder by running:
    </div>

{% highlight sh %}
cd projects
{% endhighlight %}

    <div>
You can verify you are now in an empty directory or folder by again running the <code>dir</code> command. Now you want to create a new app called <code>railsgirls</code> by running:
    </div>

{% highlight sh %}
rails new railsgirls -m http://railsgirls.com/simple_scaffold.rb
{% endhighlight %}

    <div>
        <code>rails new railsgirls</code> tells Rails to generate a project called railsgirls with all the files that our application needs.
    </div>
    <div>
        <code>-m http://railsgirls.com/simple_scaffold.rb</code> tells Rails to download a special template from railsgirls.com which makes the files a bit simpler and easier for beginners to understand.
    </div>
    <div>
This will create a new app in the folder <code>railsgirls</code>, so we again want to change the directory to be inside of our rails app by running:
    </div>

{% highlight sh %}
cd railsgirls
{% endhighlight %}

    <div>
If you run <code>dir</code> inside of the directory you should see folders such as <code>app</code> and <code>config</code>. You can then start the rails server by running:
    </div>

{% highlight sh %}
ruby bin\rails server
{% endhighlight %}
  </div>
</div>

**Windows users:** You may need to replace `bin\rails` with `script\rails`, depending on the version of Rails you have installed.

Open [http://localhost:3000](http://localhost:3000) in your browser. You should see "Welcome aboard" page, which means that the generation of your new app worked correctly.

Notice in this window the command prompt is not visible because you are now in the Rails server, the command prompt looks like this:

<div class="os-specific">
  <div class="nix">
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

When the command prompt is not visible you cannot execute new commands. If you try running `cd` or another command it will not work. To return to the normal command prompt:

Hit <kbd>Ctrl</kbd>+<kbd>C</kbd> in the terminal to quit the server.

**Coach:** Explain what each command does. What was generated? What does the server do? You can find more details about the special template on [GitHub](https://github.com/Ben-M/simple_scaffold).

## *2.*Create Idea scaffold

We're going to use Rails' scaffold functionality to generate a starting point that allows us to list, add, remove, edit, and view things; in our case ideas.

**Coach:** What is Rails scaffolding? (Explain the command, the model name and related database table, naming conventions, attributes and types, etc.) What are migrations and why do you need them?

<div class="os-specific">
  <div class="nix">
{% highlight sh %}
rails generate scaffold idea name:string description:text picture:string
{% endhighlight %}
  </div>

  <div class="win">
{% highlight sh %}
rails generate scaffold idea name:string description:text picture:string
{% endhighlight %}
  </div>
</div>

The scaffold creates new files in your project directory, but to get it to work properly we need to run a couple of other commands to update our database and restart the server.

<div class="os-specific">
  <div class="nix">
{% highlight sh %}
rails db:migrate
rails server
{% endhighlight %}
  </div>

  <div class="win">
{% highlight sh %}
rails db:migrate
ruby bin\rails server
{% endhighlight %}
  </div>
</div>

Open [http://localhost:3000/ideas](http://localhost:3000/ideas) in your browser. Click around and test what you got by running these few command-line commands.

Hit <kbd>Ctrl</kbd>+<kbd>C</kbd> to quit the server again when you've clicked around a little.


## *3.*Design

**Coach:** Talk about the relationship between HTML and Rails. What part of views is HTML and what is Embedded Ruby (ERB)? What is MVC and how does this relate to it? (Models and controllers are responsible for generating the HTML views.)

The app doesn't look very nice yet. Let's do something about that. We'll use the Twitter Bootstrap project to give us nicer styling really easily.

Open `app/views/layouts/application.html.erb` in your text editor and above the line

{% highlight erb %}
<%= stylesheet_link_tag "application", media: "all", "data-turbolinks-track" => true %>
{% endhighlight %}

add

{% highlight erb %}
<link rel="stylesheet" href="//railsgirls.com/assets/bootstrap.css" />
<link rel="stylesheet" href="//railsgirls.com/assets/bootstrap-theme.css" />
{% endhighlight %}

and replace

{% highlight erb %}
<%= yield %>
{% endhighlight %}

with

{% highlight erb %}
<div class="container">
  <%= yield %>
</div>
{% endhighlight %}

Let's also add a navigation bar and footer to the layout. In the same file, under `<body>` add

{% highlight html %}
<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="/">The Idea app</a>
    </div>
    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <li class="active"><a href="/ideas">Ideas</a></li>
      </ul>
    </div>
  </div>
</nav>
{% endhighlight %}

and before `</body>` add

{% highlight html %}
<footer>
  <div class="container">
    Rails Girls 2013
  </div>
</footer>
<script src="//railsgirls.com/assets/bootstrap.js"></script>
{% endhighlight %}

Now let's also change the styling of the ideas table. Open `app/assets/stylesheets/application.css` and at the bottom add

{% highlight css %}
body { padding-top: 100px; }
footer { margin-top: 100px; }
table, td, th { vertical-align: middle !important; border: none !important; }
th { border-bottom: 1px solid #DDD !important; }
{% endhighlight %}

Now make sure you saved your files and refresh the browser to see what was changed. You can also change the HTML & CSS further.

**Coach:** Talk a little about CSS and layouts.


## *4.*Adding picture uploads

We need to install a piece of software to let us upload files in Rails.

Open `Gemfile` in the project directory using your text editor and under the line

{% highlight ruby %}
gem 'sqlite3'
{% endhighlight %}

add

{% highlight ruby %}
gem 'carrierwave'
{% endhighlight %}

**Coach:** Explain what libraries are and why they are useful. Describe what open source software is.

In the terminal run:

{% highlight sh %}
bundle
{% endhighlight %}

Now we can generate the code for handling uploads. In the terminal run:

{% highlight sh %}
rails generate uploader Picture
{% endhighlight %}

At this point you need to **restart the Rails server process** in the terminal.

Hit <kbd>Ctrl</kbd>+<kbd>C</kbd> in the terminal to quit the server. Once it has stopped, you can press the up arrow to get to the last command entered, then hit enter to start the server again.

This is needed for the app to load the added library.

Open `app/models/idea.rb` and under the line

{% highlight ruby %}
class Idea < ApplicationRecord
{% endhighlight %}

add

{% highlight ruby %}
mount_uploader :picture, PictureUploader
{% endhighlight %}

Open `app/views/ideas/_form.html.erb` and change

{% highlight erb %}
<%= f.text_field :picture %>
{% endhighlight %}

to

{% highlight erb %}
<%= f.file_field :picture %>
{% endhighlight %}

Sometimes, you might get an *TypeError: can't cast ActionDispatch::Http::UploadedFile to string*.

If this happens, in file `app/views/ideas/_form.html.erb` change the line

{% highlight erb %}
<%= form_for(@idea) do |f| %>
{% endhighlight %}

to

{% highlight erb %}
<%= form_for @idea, :html => {:multipart => true} do |f| %>
{% endhighlight %}

In your browser, add new idea with a picture. When you upload a picture it doesn't look nice because it only shows a path to the file, so let's fix that.

Open `app/views/ideas/show.html.erb` and change

{% highlight erb %}
<%= @idea.picture %>
{% endhighlight %}

to

{% highlight erb %}
<%= image_tag(@idea.picture_url, :width => 600) if @idea.picture.present? %>
{% endhighlight %}

Now refresh your browser to see what changed.

**Coach:** Talk a little about HTML.


## *5.*Finetune the routes

If you try to open [http://localhost:3000](http://localhost:3000) it still shows the "Welcome aboard" page. Let's make it redirect to the ideas page.

Open `config/routes.rb` and after the first line add

{% highlight ruby %}
root :to => redirect('/ideas')
{% endhighlight %}

Test the change by opening the root path (that is, http://localhost:3000/) in your browser.

**Coach:** Talk about routes, and include details on the order of routes and their relation to static files.

**Rails 3 users:** You will need to delete the index.html from the `/public/` folder for this to work.

## Create static page in your app

Lets add a static page to our app that will hold information about the author of this application — you!

{% highlight sh %}
rails generate controller pages info
{% endhighlight %}

This command will create you a new folder under `app/views` called `/pages` and under that a file called `info.html.erb` which will be your info page.

It also adds a new simple route to your routes.rb.

{% highlight ruby %}
get "pages/info"
{% endhighlight %}

Now you can open the file `app/views/pages/info.html.erb` and add information about you in HTML and then take your browser to [http://localhost:3000/pages/info](http://localhost:3000/pages/info) to see your new info page.

## What next?

* Add design using HTML &amp; CSS
* Add ratings
* Use CoffeeScript (or JavaScript) to add interaction
* Add picture resizing to make loading the pictures faster


## Additional Guides

* Guide 0: [Handy cheatsheet for Ruby, Rails, console etc.](http://www.pragtob.info/rails-beginner-cheatsheet/)
* Guide 1: [Add commenting by Janika Liiv](/commenting)
* Guide 2: [Put your app online with Heroku by Terence Lee](/heroku) / [Put your app online with OpenShift by Katie Miller](/openshift)
* Guide 3: [Build a map of workshop participants by Rails Girls Berlin](http://railsgirlsberlin.de/apptutorial/)
* Guide 4: [Create thumbnail images for the uploads by Miha Filej](/thumbnails)
* Guide 5: [Add design using HTML &amp; CSS by Alex Liao](/design)
* Guide 6: [Add Authentication (user accounts) with Devise by Piotr Steininger](/devise/)
* Guide 7: [Go through additional explanations for the App by Lucy Bain](https://github.com/lbain/railsgirls)

