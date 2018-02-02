---
layout: default
title: Rails Girls on Passenger
permalink: passenger
---

# Put Your App Online With Passenger

*Created by Floor Drees, [@floordrees](https://twitter.com/floordrees)*

### Get Phusion

Make sure you followed the [Push Your App to GitHub][github-guide] guide before you continue.

What follows skims over Phusion Passenger's [Deploying a Ruby app on a Heroku production server][passenger-guide] tutorial to deploy your app to Heroku with Passenger.

[Sign up for a free Heroku account][heroku-account] and activate your account by following the link sent to your email inbox.

__COACH__: Passenger is an open source web application server. For big shot developers there's an Enterprise Edition as well.


[github-guide]: http://guides.railsgirls.com/github
[heroku-account]: https://signup.heroku.com/dc
[passenger-guide]: https://www.phusionpassenger.com/library/walkthroughs/deploy/ruby/heroku/standalone/oss/deploy_app_main.html

### Preparing your app

#### Updating your gem bundle

Open your app's Gemfile and add "passenger":

{gem "passenger"}

You get virtual bonus points for deleting the following lines (if present at all in your Gemfile):

{gem "unicorn"
gem "thin"
gem "puma"
}

Run `bundle install` to update your gem bundle.

The text in your terminal should say something like this:

{bundle install
...
Installing passenger x.x.x
...
Your bundle is complete!}

Run the Passenger server with the following command:

{bundle exec rails server}

There are two ways to stop the server. The first is by pressing Ctrl-C in the terminal. The second way is by starting a seperate terminal, changing the working directory to your application, and running bundle exec passenger stop:

{cd /path-to-your-app
bundle exec passenger stop}

__COACH__: Sometimes the carrierwave gem causes trouble. Changing `gem 'carrierwave'` to `gem 'carrierwave', :require => 'carrierwave/orm/activerecord'` will often do the trick.

### Deploying your app

#### App creation

Open your app's Procfile, or create one if you don't already have one. The correct naming is `Procfile` and nothing else (so no Procfile.txt) Remove lines that look like one of these:

{web: bundle exec ruby web.rb -p $PORT
web: bundle exec unicorn -p $PORT
web: bundle exec puma -p $PORT
web: bundle exec thin start -p $PORT
}

Instead insert:

{web: bundle exec passenger start -p $PORT --max-pool-size 3}

Commit and deploy to Heroku:

{git commit -a -m "Switch to Passenger"
git push heroku master}

You'll see push output like the following:

{% highlight sh %}
Counting objects: 115, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (97/97), done.
Writing objects: 100% (115/115), 25.62 KiB | 0 bytes/s, done.
Total 115 (delta 10), reused 0 (delta 0)
remote: Compressing source files... done.
remote: Building source:
remote:
remote: -----> Ruby app detected
remote: -----> Compiling Ruby/Rails
remote: -----> Using Ruby version: ruby-2.2.4
remote: -----> Installing dependencies using bundler 1.11.2
remote:        Running: bundle install --without development:test --path vendor/bundle --binstubs vendor/bundle/bin -j4 --deployment
remote:        Fetching gem metadata from https://rubygems.org/..........
remote:        Fetching version metadata from https://rubygems.org/...
remote:        Fetching dependency metadata from https://rubygems.org/..
remote:        Installing concurrent-ruby 1.0.2
...
remote: -----> Launching...
remote:        Released v5
remote:        https://young-reaches-87845.herokuapp.com/ deployed to Heroku
remote:
remote: Verifying deploy... done.
To https://git.heroku.com/young-reaches-87845.git
 * [new branch]      master -> master
{% endhighlight %}

You'll know the app is done being pushed, when you see the "Launching..." text like above.

#### Next steps

Congratulations, you have now deployed your app with Passenger to Heroku!

We need to create our Heroku app by typing `heroku create` in the terminal and
see something like this:

{% highlight sh %}
Creating app... done, ⬢ young-reaches-87845
https://young-reaches-87845.herokuapp.com/ | https://git.heroku.com/young-reaches-87845.git
{% endhighlight %}

In this case "young-reaches-87845" is your app name.

#### Migrate database

Next we need to migrate our database like we did locally during the workshop:

{% highlight sh %}
heroku run rails db:migrate
{% endhighlight %}

When that command is finished being run, you can hit the app based on the url.
For this example app, you can go to <https://young-reaches-87845.herokuapp.com/>.
You can also type `heroku open` in the terminal to visit the page.
