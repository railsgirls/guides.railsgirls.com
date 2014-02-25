---
layout: default
title: Put your app online with Shelly Cloud
permalink: shellycloud
---

# Put your app online with Shelly Cloud
*Created by Kasia Jarmołkowicz, [@_idengager](https://twitter.com/_idengager)*

[Shelly Cloud](https://shellycloud.com/) is a PaaS (Platform as a Service) hosting provider, dedicated for Ruby on Rails apps. New users get €20 worth of credit to run their applications, which is more than enough to show off your first Rails app for a couple of weeks.

This guide assumes you followed through with [your first Rails app guide](http://guides.railsgirls.com/app/). If you get stuck at any point in this tutorial, take a look at the [docs](https://shellycloud.com/documentation/quick_start) or use one of our [support channels](https://shellycloud.com/support).

__Coach:__ For an overview of deploying to Shelly Cloud, look at the [Quick Start guide](https://shellycloud.com/documentation/quick_start).

## Prepare your app for deployment

You need to change the database your app uses from SQLite to PostgreSQL and add a gem that ensures seamless deployment to Shelly Cloud. Replace the following line in your `Gemfile`:

{% highlight ruby %}
gem 'sqlite3'
{% endhighlight %}

with:

{% highlight ruby %}
group :development do
  gem 'sqlite3'
end

group :production do
  gem 'pg'
  gem 'shelly-dependencies'
end
{% endhighlight %}

and then run `bundle install`.

{% highlight sh %}
$ bundle install
{% endhighlight %}

__Coach:__ Talk about relational databases and the differences between SQLite and PostgreSQL.

## Initialize your git repository

You should now commit the changes to your git repository. If you haven't initialized one yet, take a look at this [Github Rails Girls guide](http://guides.railsgirls.com/github/) or use the [Github's docs](https://help.github.com/articles/set-up-git) directly.

When your repo is all set, use `git commit` to save your changes.

{% highlight sh %}
$ git add .
$ git commit -m 'Replace sqlite with postgres, add shelly-dependencies gem'
{% endhighlight %}

__Coach:__ Explain the importance of helpful commit messages.

## Sign up for Shelly Cloud

You can sign up for Shelly Cloud using the [sign-up form](https://shellycloud.com/sign_up). Clicking on the link in the confirmation email will complete your sign-up process. You can now install the `shelly` gem:

{% highlight sh %}
$ gem install shelly
{% endhighlight %}

and type `shelly login` to log in:

{% highlight sh %}
$ shelly login
Email (you@example.com - default): [enter your email]
Password: [enter your password]
Login successful
Uploading your public SSH key
{% endhighlight %}

*Tip*: The `shelly` gem will look for a public SSH key in your `~/.ssh` directory, choosing either a DSA key `id_dsa.pub` or a RSA key `id_rsa.pub`. If you're not sure if you have a SSH key already, take a look at this helpful [Github article](https://help.github.com/articles/generating-ssh-keys).

## Create your cloud

All the information needed for your app to work with Shelly Cloud will be stored in the `Cloudfile`, a little file that should be placed in your app main directory. We can generate a default `Cloudfile`, which will fit our needs perfectly, using the `shelly` gem.

*Tip*: If you need a specific Ruby version or want to use a different database, check the [Cloudfile documentation](https://shellycloud.com/documentation/cloudfile) to help you set it up.

You are now ready to create your cloud! Make sure you're in your app directory, type `shelly add` and follow the instructions.

{% highlight sh %}
$ cd ~/your-app
$ shelly add -c [enter the name of your cloud]
{% endhighlight %}

You should commit your `Cloudfile`, too, with an appropriate commit message.

{% highlight sh %}
$ git add Cloudfile
$ git commit -m 'Add Cloudfile'
{% endhighlight %}

## Push to production

You put your app in the cloud using `git push`.

{% highlight sh %}
$ git push shelly master
  ---> Received push to cloud 'your-cloud-name'
  ---> Checking Gemfile
  ---> Creating code package... done.
  ---> Push accepted
  ---> Start your cloud using: `shelly start --cloud your-cloud-name`
{% endhighlight %}

You can now start your app.

{% highlight sh %}
$ shelly start --cloud your-cloud-name
Starting cloud your-cloud-name.
  ---> Launching server app1 started
  ---> Launching server app1 finished
  ---> Configuration on server app1 started
  ---> Configuration on server app1 finished
  ---> Deployment on server app1 started
  ---> Deployment on server app1 finished
Starting cloud successful
{% endhighlight %}

*Tip*: If you make changes to your app, you can just commit them and use `git push shelly master` to redeploy.

## Celebrate!

Your app is now live at [http://your-cloud-name.shellyapp.com](http://your-cloud-name.shellyapp.com). Share it with the world and keep coding!
