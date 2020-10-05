---
layout: default
title: Rails Girls on Passenger
permalink: passenger
---

# Ease up development with Phusion Passenger

*Created by Floor Drees, [@floordrees](https://twitter.com/floordrees)*

### There's an app server for that

Make sure you followed the [Push Your App to GitHub][github-guide] guide before you continue.

What follows is a guide to eases up developing your app (you know, the adding functionality and then checking if it actually works), with Passenger. The Ruby on Rails framework provides a builtin server tool, which you can access with the `rails server` command. The "rails server" is not an application server by itself, but just a small wrapper that launches your application in an application server. People do not use "rails server" in production (where other people can access and use your app). They use an application server such as Passenger.

__COACH__: Passenger is an open source web application server. It handles HTTP requests, manages processes and resources, and enables administration, monitoring and problem diagnosis. For big shot developers there's an Enterprise Edition as well.


[github-guide]: http://guides.railsgirls.com/github

### Preparing your app

#### Install the Passenger gem

Open your app's Gemfile and add "passenger":

{% highlight ruby %}
gem "passenger"
{% endhighlight %}

By adding Passenger to your Gemfile, `rails server` will launch Passenger instead of Puma.
You get virtual bonus points from the Phusion Passenger team for deleting the following lines (if present at all in your Gemfile):

{% highlight ruby %}
gem "unicorn"
gem "thin"
gem "puma"
{% endhighlight %}

Run `bundle install` to update your gem bundle.

The text in your terminal should say something like this:

{% highlight sh %}
bundle install
...
Installing passenger x.x.x
...
Your bundle is complete!
{% endhighlight %}

Nginx and Apache are web servers. They provide HTTP transaction handling and serve static files. Application servers make it possible for Ruby apps to speak HTTP. Ruby apps (and frameworks like Rails) can't do that by themselves. In a typical production stack, one would use Nginx or Apache as the web server, Passenger as application server, and Capistrano as release automation tool. Passenger integrates with Nginx or Apache and manages the application and its resources.

__COACH__: Sometimes you will need to specify the gem's version: `gem "passenger", ">= 5.0.25", require: "phusion_passenger/rack_handler"`

#### Let's check if that worked

Run the Passenger server with the following command:

{% highlight sh %}
bundle exec passenger start
{% endhighlight %}

Passenger is serving your app on http://0.0.0.0:3000/.
Try and use your app a bit and then run `bundle exec passenger-status` to check your activity. Big (friendly, promised!) brother is watching you.

There are two ways to stop the server. The first is by pressing Ctrl-C in the terminal. The second way is by running `passenger stop` in a new terminal window:

{% highlight sh %}
cd /path-to-your-app
bundle exec passenger stop
{% endhighlight %}

When you switch back to the first terminal, you should see that Passenger has indeed stopped.

Passenger restarts processes that crash, load balances traffic between processes and scales processes up and down in order to handle more traffic or to conserve resources. All this is handled automatically, without you having to specify anything in your code! It might not make too much sense right now, but your future developer you will thank us.

For future reference you can use the `passenger-config restart-app` command to restart your application. This is more convenient than stopping and starting Passenger, which requires two commands.

#### tmp/always_restart.txt

Passenger also supports the magic file `tmp/always_restart.txt`. With this file, Passenger will restart your application after every request. This way you do not have to invoke the restart command often.

Activate this mechanism by creating the file:

{% highlight sh %}
mkdir -p tmp
touch tmp/always_restart.txt
{% endhighlight %}

Deactivate this mechanism by removing the file:

{% highlight sh %}
rm tmp/always_restart.txt
{% endhighlight %}

__COACH__: Sometimes the carrierwave gem causes trouble. Adding `require 'carrierwave/orm/activerecord'` to the `environment.rb` file will often do the trick.


### Deploying your app

#### Hosting your app

Before you select your host(ing infrastructure) and [follow the guide to put your app online][passenger-guide], let's commit the changes we've made:

{% highlight sh %}
git add .
git commit -m "add passenger"
git push
{% endhighlight %}

You can also choose to follow the [Heroku guide][heroku-guide] from here on.

[passenger-guide]: https://www.phusionpassenger.com/library/walkthroughs/deploy/ruby/
[heroku-guide]: http://guides.railsgirls.com/heroku

#### Troubleshooting

Use the `passenger --help` command in your terminal to browse all available commands and their functionality. Most commands (like `passenger start`) have many 'sub-commands'. For instance: run `passenger start --help` to see all the add-ons for the 'start' command.

Lost? Phusion Passenger has extensive documentation, including beginner's guides: [Passenger Guide][passenger-documentation]

Knee-deep? Crawl through [Passenger's Troubleshooting guide][troubleshooting-guide] with your coach.

[passenger-documentation]: https://www.phusionpassenger.com/library/
[troubleshooting-guide]: https://www.phusionpassenger.com/library/admin/nginx/troubleshooting/ruby/

{% include other-guides.md page="passenger" %}
