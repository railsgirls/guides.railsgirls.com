---
layout: main_guide
title: Setup on Mac
description: "Install Ruby and Rails on your Mac computer and get prepared for the Rails Girls workshop."
permalink: install/macos
---

# Setup for Mac

{% include main-guide-intro.html %}

To build apps and other things with Ruby on Rails, we need to setup some software and the developer environment for your computer.

<div class="help-notice">Make sure you're familiar with <a href="/tools">the tools you'll need for this guides</a> before continuing.</div>

## Install the Command Line Tools

Most Mac users never get into programming, so Apple figured it'd be a good idea not to ship the tools needed to run programming languages with every laptop to save some space. They did make it easy to install them, running just a single command.

Enter the following command in the Terminal app and press the <kbd>Enter</kbd> key. You may be asked to enter a password, this is the password of your user account on your Mac. Enter your password and press <kbd>Enter</kbd>.

{% highlight sh %}
xcode-select --install
{% endhighlight %}

A window will pop up asking you to confirm that you want to install these tools, and agree to the Terms and Conditions. Once you do, an installer will start downloading and installing the tools. This will take quite some time, so feel free to grab a tea or coffee. The steps following this one will only work after the Command Line Tools installer has completed, so no point in skipping ahead.

## Install Homebrew

[Homebrew](https://brew.sh/), like the Command Line Tools, is a stepping stone towards being able to install Ruby. Homebrew allows us to install other tools using simple, standardised commands. Otherwise we'd have to figure out how each of these other tools needs to be installed. By having Homebrew figure that out for us, we can focus on the good stuff: building apps.

Enter the following command in the Terminal app and press the <kbd>Enter</kbd> key. You will be asked to enter a password–this is the password you use to unlock your laptop. Enter your password and press <kbd>Enter</kbd>.

{% highlight sh %}
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
{% endhighlight %}

{% highlight sh %}
brew update
{% endhighlight %}

## Install Git

Using Homebrew, we can now install Git, the version management system we'll be using for this workshop. A version management system gives you a particularly handy superpower: it allows us to travel back and forth in time. Well, at least while working with files on our computer. We'll show you how to use this during the workshop!

{% highlight sh %}
brew install git
{% endhighlight %}

## Install rbenv

Ruby, the programming language we use, releases new versions all the time. Some clever folks wrote a tool that allows us to easily install specific versions. We'll use this to make sure you're running the same version as the rest of us.

Run the following commands to install [rbenv](https://github.com/rbenv/rbenv) via Homebrew:

{% highlight sh %}
brew install rbenv
{% endhighlight %}

{% highlight sh %}
echo 'eval "$(rbenv init -)"' >> ~/.zshrc
{% endhighlight %}

{% highlight sh %}
source ~/.zshrc
{% endhighlight %}

## Install Ruby with rbenv

Now that rbenv is installed, let's install Ruby! We'll be installing version 3.4.1, but it could be that during the event you'll be asked to install a different version. In that case, just replace the version number in the command.

{% highlight sh %}
rbenv install 3.4.1
{% endhighlight %}

## Set default Ruby

rbenv allows us to manage a bunch of Ruby versions, but it doesn't always quite know which version you want to use. To help it with that, we'll tell it that the version we just installed is in fact the one we want to use.

{% highlight sh %}
rbenv global 3.4.1
{% endhighlight %}

Check that your Ruby version matches what you installed.

{% highlight sh %}
ruby --version
{% endhighlight %}

The result should be something that includes the number `3.4.1`.

If the version you get starts with `2.6`, first try restarting your terminal. If it still shows the wrong version something went wrong when setting up rbenv, and your Terminal is still using an older version of Ruby that ships with your Mac. Ask your coach, if present, for help, otherwise stop here and ask for help on the day of the workshop from one of the coaches.

## Install Rails

Finally, we've arrived at the part where you'll install Rails, the tool we'll focus on during the workshop:

{% highlight sh %}
gem install rails --no-document
{% endhighlight %}

Just like we did with Ruby, let's check whether Rails also installed successfully:

{% highlight sh %}
rails --version
{% endhighlight %}

This should output `Rails 8.0.1`, but a higher version is also good.

## Test if Rails works

Almost there! We've installed a chain of tools: Command Line Tools, Homebrew, Git, rbenv, Ruby and now finally: Rails. Let's see if everything works as intended.

To test this, we'll create a new app. Don't expect too much, it will just show a single webpage showing the "Rails" logo. During the workshop you'll turn that page into an actual app. For now, we just need to make sure that you can see that logo. Let's get started with our final set of Terminal commands!

Check that everything is working by first running the application generator command. This will create a new Rails app which we can test with.

{% highlight sh %}
rails new railsgirlsapp
{% endhighlight %}

The `rails new` command creates a new folder on your computer called "railsgirlsapp", containing all the code for your application. Let's open that directory in the Terminal using the `cd` command:

{% highlight sh %}
cd railsgirlsapp
{% endhighlight %}

Next, you'll start the Rails server briefly to make sure it starts properly. This is where the magic happens.

{% highlight sh %}
rails server
{% endhighlight %}

Unlike previous commands, this one will not stop until you press the <kbd>ctrl</kbd> + <kbd>c</kbd> keys together to stop it. You have just started a web server on your laptop, and it is ready to start taking visitors and show them your sample application. Let's not keep it waiting.

Go to <http://localhost:3000> in your Browser. You should see the Rails logo appear.

If at any point during this guide you ran into a problem and can't continue. Not a problem! Contact the workshop organizers and let them know about your problem. Some workshops have dedicated set up evenings and otherwise they can help you on the day of the workshop itself.

If you do see a Rails logo in your Browser, you now have a working Ruby on Rails programming setup. Congratulations!

You're ready for the workshop. If you are preparing before the workshop, you don't have to continue with guides until the day of the workshop. See you then!

{% coach %}
If there's a coach present, they can help verify the installation by using the scaffold command and inputting data with the generated page with coaches to ensure everything is working. Remove the test app `myapp` to make super sure no-one is working in the wrong folder, while following the steps of the workshop.
{% endcoach %}
