---
layout: default
title: Setup on Linux
permalink: install/linux
---

## Setup for Linux

To install the Ruby on Rails development environment you just need to copy the lines below for your Linux distribution (Ubuntu or Fedora), paste it in the Terminal and press Enter. Enjoy the text flying on the screen; it will take quite some time. Grabbing a refreshing drink before starting is encouraged.

### _1._ Install yarn

If you need more information than the following to install yarn, please check [yarn's installation docs](https://yarnpkg.com/lang/en/docs/install/).

#### For Ubuntu:

{% highlight sh %}
sudo apt-get install curl
{% endhighlight %}

{% highlight sh %}
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
{% endhighlight %}

{% highlight sh %}
sudo apt update && sudo apt install yarn
{% endhighlight %}

#### For Fedora:

{% highlight sh %}
curl -sL https://rpm.nodesource.com/setup_12.x | bash -
curl --silent --location https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo
{% endhighlight %}

{% highlight sh %}
sudo yum install yarn
{% endhighlight %}

### _2._ Install Rails

#### For Ubuntu:

{% highlight sh %}
bash < <(curl -sL https://raw.github.com/railsgirls/installation-scripts/master/rails-install-ubuntu.sh)
{% endhighlight %}

If you are going to use RVM installations with gnome-terminal, you'll probably need to change it's default options before you can see and use the right Ruby and Rails versions. Find out how: [RVM documentation](http://rvm.io/integration/gnome-terminal).

#### For Fedora:

{% highlight sh %}
bash < <(curl -sL https://raw.github.com/railsgirls/installation-scripts/master/rails-install-fedora.sh)
{% endhighlight %}

Make sure that all works well by running the application generator command.

{% highlight sh %}
rails new myapp
{% endhighlight %}

### _4._ Check the environment

Check that everything is working by running the application generator command.

{% highlight sh %}
rails new myapp
{% endhighlight %}

{% highlight sh %}
cd myapp
{% endhighlight %}

{% highlight sh %}
rails server
{% endhighlight %}

Go to `http://localhost:3000` in your browser, and you should see the 'Yay! You're on Rails!' page.

Now you should have a working Ruby on Rails programming setup. Congrats!

**Coach:** We recommend to verify by using the scaffold command and inputting data with the generated page with coaches to ensure everything is working. Also: remove the test app `myapp` to make super sure no-one is working in the wrong folder, following the steps of the workshop.

{% include other-guides.md page="install/linux" %}
