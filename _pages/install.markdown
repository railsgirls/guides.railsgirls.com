---
layout: main_guide
title: Setup recipe for Rails Girls
permalink: install
---

# Setup recipe for Rails Girls

<span class="muted">Cooking time: 5min active / 15-30min passive</span>

{% include main-guide-intro.html %}

To build apps and other things with Ruby on Rails, we need to setup some software and the developer environment for your computer.

Follow the instructions for your operating system. If you run into any problems, don't panic. Check the [known errors section](#possible-errors-during-installation) or inform us at the event and we can solve it together.

- [Setup for macOS](/install/macos)
- [Setup for Windows](/install/windows)
- [Setup for Linux](/install/linux)
- Alternative installation methods. Use these if the above guides do not work.
    - [Setup on a Virtual Machine](/install/virtual-machine)
    - [Using the Replit Cloud Service - No Installation Required](/install/replit)

## Possible errors during installation

### Gem::RemoteFetcher error

If you get this error when running `rails new railsgirls` or `gem update rails`:

{% highlight sh %}
Gem::RemoteFetcher::FetchError: SSL_connect returned=1 errno=0 state=SSLv3 read
server certificate B: certificate verify failed (https://rubygems.org/gems/i18n-0.6.11.gem)
{% endhighlight %}

This means you have an older version of Rubygems and will need to update it manually first verify your Rubygems version

{% highlight sh %}
gem -v
{% endhighlight %}

If it is lower than `2.6.5` you will need to manually update it:

First download the [ruby-gems-update gem](https://rubygems.org/gems/rubygems-update-2.6.11.gem). Move the file to `c:\\rubygems-update-2.6.11.gem` then run:

{% highlight sh %}
gem install --local c:\\rubygems-update-2.6.11.gem
{% endhighlight %}

{% highlight sh %}
update_rubygems --no-document
{% endhighlight %}

{% highlight sh %}
gem uninstall rubygems-update -x
{% endhighlight %}

Check your version of rubygems

{% highlight sh %}
gem -v
{% endhighlight %}

Make sure it is equal or higher than `2.6.11`. Re-run the command that was failing previously.

If you are still running into problems you can always find the latest version of rubygems online at [rubygems.org](https://rubygems.org/pages/download). If you click on **GEM** you will get the latest version.

### During bundle install

The `Gem::RemoteFetcher::FetchError: SSL_connect` can also occur during the `bundle install` stage when creating a new rails app.

The error will make mention of [bit.ly/ruby-ssl](https://bit.ly/ruby-ssl). What is relevant for Windows users at this point is [this GitHub gist](https://gist.github.com/867550). The described manual way has proven to be successful to solve the `bundle install` error.

### 'x64_mingw' is not a valid platform Error

Sometimes you get the following error when running `rails server`:
`'x64_mingw' is not a valid platform` If you experience this error after using the RailsInstaller you have to do a small edit to the file `Gemfile`:

Look at the bottom of the file. You will probably see something like this as one of the last lines in the file:
`gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw]`. If you have this line with `:x64_mingw`, then please delete the `:x64_mingw` part. In the end it should just say:
`'tzinfo-data', platforms: [:mingw, :mswin]`

After you did that, please use your Command Prompt again and type `bundle update`.

### The sqlite3 gem failed to install

When running `rails new myapp` the `sqlite3` gem may fail to install. When this happens, first close the Windows Command Prompt app. Then re-open the Windows Command Prompt.

Next, install the `sqlite3` gem separately from the `rails` gem by running the following command:

{% highlight sh %}
gem install sqlite3
{% endhighlight %}

If this succeeds, remove the `myapp` directory the rails installer created and return to the installation instructions, to run `rails new myapp` again.
