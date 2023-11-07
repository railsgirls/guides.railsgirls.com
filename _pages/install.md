---
layout: main_guide
title: Setup recipe for Rails Girls
description: "Install Ruby and Rails on your computer and get prepared for the Rails Girls workshop."
permalink: install
---

# Setup recipe for Rails Girls

<span class="muted">Cooking time: 5min active / 15-30min passive</span>

{% include main-guide-intro.html %}

To build apps and other things with Ruby on Rails, we need to setup some software and the developer environment for your computer. Make sure you're familiar with [the tools you'll need for these guides](/tools) before continuing. From there we'll guide you through the steps needed to prepare for the workshop, and while doing so give you a bit of background info on what we're doing.

Don't worry too much about the installation steps and understand everything about them. These are the required steps to get through to get to the real programming part of the workshop.

These setup guides assume no prior knowledge. That's easier said than done. Things that may seem obvious to us might be _abracadabra_ to you. If this is the case, please: let your event organizers know. We can use your feedback to improve these guides!

Please follow the instructions for your Operating System from the list below. If you run into any problems, don't panic. Check the [known errors section](#possible-errors-during-installation) or inform the organizers/coaches at the event and we can solve it together.

- [Setup for Mac](/install/macos)
- [Setup for Windows](/install/windows)
- [Setup for Linux](/install/linux)
- Alternative installation methods. Use these if the above guides do not work.
    - [Setup on a Virtual Machine](/install/virtual-machine)
    - [Using the Replit Cloud Service - No Installation Required](/install/replit)

## Possible errors during installation

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
