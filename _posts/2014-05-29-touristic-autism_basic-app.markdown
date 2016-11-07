---
layout: default
title: Touristic Autism-friendly Spots App
permalink: touristic-autism_basic-app
---

# Basic Web Application

*Created by Myriam Leggieri, [@iammyr](https://twitter.com/iammyr)*
*for [Rails Girls Galway](https://github.com/RailsGirlsGalway)*
The basic guides that have been merged and adapted are the [Ruby on Rails Tutorial](http://www.railstutorial.org/book), the [basic RailsGirls app](http://guides.railsgirls.com/app/) and the tutorials for [creating thumbnails](http://guides.railsgirls.com/thumbnails), [authenticating users](http://guides.railsgirls.com/devise/), [adding design](http://guides.railsgirls.com/design), [deploying to OpenShift](http://guides.railsgirls.com/openshift/) and [adding comments](http://guides.railsgirls.com/commenting).



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

<h3>GitHub</h3>
[Slides - by Kevin Lyda @]()

</div>

### Important

It is important that you select the instructions specific to your operating system - the commands you need to run on a Windows computer are slightly different to Mac or Linux. If you're having trouble check the Operating System switcher at the bottom of the commands.


## *1.*Creating the application

We're going to create a new Rails app called *railsgirls-galway-2014*.

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
<p>You can verify that a directory named <code>projects</code> was created by running the list command: <code>ls</code>. You should see the <code>projects</code> directory in the output. Now you want to change the directory you are currently in to the <code>projects</code> folder by running:</p>
    </div>

{% highlight sh %}
cd projects
{% endhighlight %}

    <div>
<p>You can verify you are now in an empty directory or folder by again running the <code>ls</code> command. Now you want to create a new app called <code>railsgirls</code> by running:</p>
    </div>

{% highlight sh %}
rails new railsgirls-galway-2014
{% endhighlight %}

    <div>
<p>This will create a new app in the folder <code>railsgirls</code>, so we again want to change the directory to be inside of our rails app by running:</p>
    </div>

{% highlight sh %}
rvm rubygems latest
cd railsgirls-galway-2014
{% endhighlight %}

    <div>
<p>If you run <code>ls</code> inside of the directory you should see folders such as <code>app</code> and <code>config</code>. You can then start the rails server by running:</p>
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
rails new railsgirls-galway-2014
{% endhighlight %}

    <div>
<p>This will create a new app in the folder <code>railsgirls</code>, so we again want to change the directory to be inside of our rails app by running:</p>
    </div>

{% highlight sh %}

cd railsgirls
{% endhighlight %}

    <div>
<p>If you run <code>dir</code> inside of the directory you should see folders such as <code>app</code> and <code>config</code>. You can then start the rails server by running:</p>
    </div>

{% highlight sh %}
rails server
{% endhighlight %}
  </div>
</div>

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

**Coach:** Explain what each command does.
[What is a web application and a server - Slides by @]()
The skeleteon generated by "rails new" reflects the [Model-View-Controller - Slides by @]() architectural pattern.

