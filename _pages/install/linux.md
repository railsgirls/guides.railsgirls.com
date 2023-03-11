---
layout: main_guide
title: Setup on Linux
description: "Install Ruby and Rails on your Linux computer and get prepared for the Rails Girls workshop."
permalink: install/linux
---

# Setup for Linux

{% include main-guide-intro.html %}

To install the Ruby on Rails development environment you just need to copy the lines below for your Linux distribution (Ubuntu or Fedora), paste it in the Terminal and press Enter. Enjoy the text flying on the screen; it will take quite some time. Grabbing a refreshing drink before starting is encouraged.

<div class="help-notice">Make sure you're familiar with <a href="/tools">the tools you'll need for this guides</a> before continuing.</div>

## _1._ Install dependencies

### For Ubuntu

Install the curl program on your computer before continuing. This is required to run the install script in the next step.

{% highlight sh %}
sudo apt-get update
sudo apt-get install curl
{% endhighlight %}

## _2._ Install Rails

### For Ubuntu

Run the following command for an automated install of Ruby and Rails on your computer.

{% highlight sh %}
bash < <(curl -sL https://raw.github.com/railsgirls/installation-scripts/master/rails-install-ubuntu.sh)
{% endhighlight %}

## _3._ Check the environment

Check that everything is working by running the application generator command.

{% highlight sh %}
rails new myapp
{% endhighlight %}

Navigate into the app directory:

{% highlight sh %}
cd myapp
{% endhighlight %}

Start the Rails server:

{% highlight sh %}
rails server
{% endhighlight %}

Go to <http://localhost:3000> in your Browser, and you should see the Rails logo appear.

Now you should have a working Ruby on Rails programming setup. Congrats!

You're ready for the workshop. If you are preparing before the workshop, you don't have to continue with guides until the day of the workshop. See you then!

{% coach %}
If there's a coach present, they can help verify the installation by using the scaffold command and inputting data with the generated page with coaches to ensure everything is working. Remove the test app `myapp` to make super sure no-one is working in the wrong folder, while following the steps of the workshop.
{% endcoach %}
