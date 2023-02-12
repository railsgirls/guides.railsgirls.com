---
layout: main_guide
title: Setup on macOS
permalink: install/macos
---

# Setup for macOS

{% include main-guide-intro.html %}

To build apps and other things with Ruby on Rails, we need to setup some software and the developer environment for your computer.

## _1._ Let's check the version of the operating system.

Click the Apple menu and choose _About this Mac_.

![Apple menu](/images/1.png "Apple menu")

## _2._ In the window you will find the version of your operating system.

If your version number starts with 10.6, 10.7, 10.8, 10.9, 10.10, 10.11 or higher this guide is for you. If it's something else, we can setup your machine at the event.

![About this Mac dialog](/images/2.png "About this Mac dialog")

## _3a._ If your OS X / macOS version is 10.9 or higher:

If your version number starts with 10.9, 10.10, 10.11 or higher, follow these steps. We are installing homebrew and rbenv.

### _3a1._ Install Command line tools on terminal:

{% highlight sh %}
xcode-select --install
{% endhighlight %}

### _3a2._ Install [Homebrew](https://brew.sh/):

{% highlight sh %}
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
{% endhighlight %}

### _3a3._ Install [rbenv](https://github.com/rbenv/rbenv):

{% highlight sh %}
brew update
{% endhighlight %}

{% highlight sh %}
brew install rbenv
{% endhighlight %}

Find out what your `shell` is:

{% highlight sh %}
basename -a "$SHELL"
{% endhighlight %}

If the output is `bash`:

{% highlight sh %}
echo 'eval "$(rbenv init -)"' >> ~/.bash_profile
{% endhighlight %}

{% highlight sh %}
source ~/.bash_profile
{% endhighlight %}

If the output is `zsh`:

{% highlight sh %}
echo 'eval "$(rbenv init -)"' >> ~/.zshrc
{% endhighlight %}

{% highlight sh %}
source ~/.zshrc
{% endhighlight %}

### _3a4._ Build Ruby with rbenv:

You can find the newest version of Ruby with the command "rbenv install -l".

{% highlight sh %}
rbenv install 3.1.3
{% endhighlight %}

If you got "OpenSSL::SSL::SSLError: ... : certificate verify failed" error, try it this way.

{% highlight sh %}
brew install curl-ca-bundle
{% endhighlight %}

{% highlight sh %}
cp /usr/local/opt/curl-ca-bundle/share/ca-bundle.crt `ruby -ropenssl -e 'puts OpenSSL::X509::DEFAULT_CERT_FILE'`
{% endhighlight %}

### _3a5._ Set default Ruby:

{% highlight sh %}
rbenv global 3.1.3
{% endhighlight %}

{% highlight sh %}
rbenv local 3.1.3
{% endhighlight %}

{% highlight sh %}
rbenv shell 3.1.3
{% endhighlight %}

Check that your `ruby` version matches what you installed. It will look something like the output below, make sure the `ruby 3.1.3` part matches.

{% highlight sh %}
ruby --version
ruby 3.1.3p185 (2022-11-24 revision 1a6b16756e) [arm64-darwin22]
{% endhighlight %}

### _3a6._ Install rails:

{% highlight sh %}
gem install rails --no-document
{% endhighlight %}

{% highlight sh %}
rbenv rehash
{% endhighlight %}

## _3b._ If your OS X version is 10.6, 10.7, or 10.8:

Download the RailsInstaller for your version of OS X:

- [RailsInstaller for 10.7 and 10.8](http://railsinstaller.s3.amazonaws.com/RailsInstaller-1.0.4-osx-10.7.app.tgz) <span class="muted">(325MB)</span>
- [RailsInstaller for 10.6](http://railsinstaller.s3.amazonaws.com/RailsInstaller-1.0.4-osx-10.6.app.tgz) <span class="muted">(224MB)</span>

Double click the downloaded file and it will unpack it into the current directory. Double click the the newly unpacked 'RailsInstaller-1.0.4-osx-10.7.app' or 'RailsInstaller-1.0.4-osx-10.6.app' and follow the instructions. It will open a README file with 'Rails Installer OS X' at the top. Please **ignore** the instructions in this file.

If the Rails version wasn't the latest, you could update it using a following command on terminal.

{% highlight sh %}
gem update rails --no-document
{% endhighlight %}

## _4._ Install yarn:

{% highlight sh %}
brew install yarn
{% endhighlight %}

If you need more information than the following to install yarn, please check [yarn's installation docs](https://yarnpkg.com/lang/en/docs/install/).

## _5._ Check the environment

Check that everything is working by running the application generator command.

{% highlight sh %}
rails -v
{% endhighlight %}

Should output `Rails 6.0.0` (or a higher version).

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
