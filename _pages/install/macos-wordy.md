---
layout: main_guide
title: Setup on macOS
description: "Install Ruby and Rails on your Mac computer and get prepared for the Rails Girls workshop."
permalink: install/macos
---

# Setup for macOS - Wordy Edition

{% include main-guide-intro.html %}

Welcome to the MacOS setup guide for the Rails Girls workshop, "Wordy Edition"! To build apps and other things with Ruby on Rails, we need to install the Ruby programming language and the developer environment. We'll guide you through the steps needed to prepare for the workshop, and while doing so give you a bit of background info on what we're doing. If you prefer a less verbose version, please see [the regular setup guide](macos.md).

This setup guide assumes no prior knowledge. That's easier said than done, though - things that may seem obvious to us might be abracadabra to you. If this is the case, please: let us know. We really need your feedback to figure this out.

Please note that these first steps have nothing to do with programming. Compare it to setting up an easel and canvas before you can start painting a masterpiece. Also don't worry if you don't "get it". There is surprisingly little to "get" here, even seasoned programmers usually look up the exact commands needed to do a setup like this. Just like you, we copy and paste commands and hope all goes well. It usually does!

## Prerequisites
Before we get started, please make sure MacOS has the latest updates installed.

For this guide to work you'll need at least MacOS 12 or higher. Fortunately every Macbook sold since 2016 supports this version, so unless your Macbook is really old everything should "just work". For older versions: we can definitely make it work, but please see us during the event to help you through the setup.

## 1. Launch the `Terminal` application
It might seem like a cheesy hacker-trope, but we'll be using a "Terminal" to set things up. That's a window where you type in commands and the computer displays the result as text. Not very user-friendly, but it is a sure-fire way to make sure you run the right commands.

You can launch applications a few ways on MacOS, but the easiest is through Spotlight. Hit the "Command" + "Space" buttons. In the window that appears, type `Terminal`. A new window should open, saying something like `jane.doe@jane's macbook ~ %`. Unless your name is not Jane, in which case it'll probably say your name instead.

Throughout this guide we'll be providing commands. You can copy these commands from this webpage and paste them into the Terminal window. After pasting them, hit the `Return` key to execute the command. Let's try it with a little example:

{% highlight sh %}
say "Making computers do stuff is fun"
{% endhighlight %}

If this command ran successfully, you should have heard your computer say the text we provided. Turn up the sound if needed.

## 2. Install the "Command Line Tools"
Because most MacOS users never get into programming, Apple figured it'd be a good idea not to ship the tools needed to run programming languages with every laptop. Instead they made it really easy to install them, running just a single command.

Please run the following command in the Terminal:

{% highlight sh %}
xcode-select --install
{% endhighlight %}

A window will pop up asking you to confirm that you want to install these tools, and agree to the terms and conditions. Once you do, an installer will start downloading and installing the tools. This will take quite some time, so feel free to grab a tea or coffee. The steps following this one will only work after the Command Line Tools installer has completed, so no point in skipping ahead.

## 3. Install [Homebrew](https://brew.sh/):
Homebrew, like the Command Line Tools, is a stepping stone towards being able to install Ruby. Homebrew allows us to install other tools using simple, standardised commands. Otherwise we'd have to figure out how each of these other tools needs to be installed. By having Homebrew figure that out for us, we can focus on the good stuff: building apps.

Same as in the previous step: copy this command and run it in the Terminal. At some point, it might ask for your password - this is the password you use to unlock your laptop.

{% highlight sh %}
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
{% endhighlight %}

## 4. Install git
Using Homebrew, we can now install `git`, which is the version management system we'll be using for this workshop. A version management system gives you a particularly handy superpower: it allows us to travel back and forth in time. Well, at least while working with files on our computer. We'll show you how to use this during the workshop!

{% highlight sh %}
brew install git
{% endhighlight %}

Note that the command is called "brew". That's because developers are inherently lazy creatures. I mean, we make our living by letting the computers do complicated things that gives us headaches. Saving 4 keystrokes every time we install something seemed like a good idea to the good people who created Homebrew, and who are we to question them?

## 5. Install [rbenv](https://github.com/rbenv/rbenv):
Ruby, the programming language we use, releases new versions all the time. Some clever folks wrote a tool that allows us to easily install specific versions. We'll use this to make sure you're running the same version as the rest of us.

Again, don't worry too much if you don't fully get these commands. Just follow along, node sagely and tell your friends that you have dozens of versions of Ruby at your fingertips. It's technically true! But seriously: ask your event staff if you want to go nerdy, but explaining the intricacies of the ~/.zshrc file is way beyond this guide.

{% highlight sh %}
brew install rbenv
{% endhighlight %}

{% highlight sh %}
echo 'eval "$(rbenv init -)"' >> ~/.zshrc
{% endhighlight %}

{% highlight sh %}
source ~/.zshrc
{% endhighlight %}

## 6. Build Ruby with rbenv
Now that we have `rbenv`, let's put it to good use and install Ruby! We'll be installing version `3.1.3`, but it could be that during the event you'll be asked to install a different version. In that case, just replace the version number in the command.

{% highlight sh %}
rbenv install 3.1.3
{% endhighlight %}

### 7. Set default Ruby:
Since `rbenv` allows us to install a bunch of Ruby versions, it doesn't always quite know which version you want to use. To help it with that, we'll tell it that the version we just installed is in fact the one we want to use.

{% highlight sh %}
rbenv global 3.1.3
{% endhighlight %}

To apply an old Russian proverb: "Trust, but verify", let's try to run Ruby and ask it to state its own version.

{% highlight sh %}
ruby --version
{% endhighlight %}

The result should be something that includes the number `3.1.3`. If the version you get starts with `2.6` something went wrong when setting up `rbenv`, and your Terminal is still using an ancient version of Ruby that ships with MacOS. 

### 8. Install rails
Almost there! We'll install `Rails`, which is how you build web-applications using Ruby. We won't include the Rails documentation because there's plenty of documentation on the internet.

{% highlight sh %}
gem install rails --no-document
{% endhighlight %}

Just like we did with Ruby, let's check whether Rails also installed successfully:

{% highlight sh %}
rails --version
{% endhighlight %}

This should output `Rails 7.0.4.2`, but a higher version is also good.

## 9. Testing, 1-2-3. 
So... we've come quite a long way from a pristine MacOS environment: we've installed a chain of tools: Command Line Tools, Homebrew, Git, rbenv, Ruby and now finally: Rails. So let's see if everything works as intended. 

To do so, we'll create a new app. Don't expect too much, it will just show a single webpage showing a beautiful "Rails" logo. During the workshop is when you'll turn that page into an actual app. For now, we just need to make sure that you can see that logo. So let's get started with our final set of Terminal commands!

Check that everything is working by running the application generator command.

{% highlight sh %}
rails new railsgirlsapp
{% endhighlight %}

This creates a new folder on your computer called "railsgirlsapp", containing all the code for your application.

{% highlight sh %}
cd railsgirlsapp
{% endhighlight %}

The `cd` command moves us into that folder, so that the next command we execute knows we're talking about this application.

{% highlight sh %}
rails server
{% endhighlight %}

This is where the magic happens. Unlike previous commands, this one will not stop until you press "ctrl + c" to abort it. You, my friend, have just started a web server on your laptop, and it is ready to start taking visitors and show them your sample application. Let's not keep it waiting.

Go to <http://localhost:3000> in your browser, and you should see the Rails logo appear. If it does, you have a working Ruby on Rails programming setup. Congratulations!

You're ready for the workshop. If you are preparing before the workshop, you don't have to continue with guides until the day of the workshop. See you then!

{% coach %}
If there's a coach present, they can help verify the installation by using the scaffold command and inputting data with the generated page with coaches to ensure everything is working. Remove the test app `railsgirlsapp` to make super sure no-one is working in the wrong folder, while following the steps of the workshop.
{% endcoach %}
