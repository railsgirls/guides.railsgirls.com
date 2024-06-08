---
layout: main_guide
title: Put your app online with Fly.io
description: "Deploy your app to Fly.io by following this guide."
permalink: deployment/fly-io
---

# Put your app online with Fly.io

In this guide you'll deploy your app with [Fly.io](https://fly.io) to make it available to everyone online. After this guide you can share the link with your friends and family to show what you have created during this workshop.

Deploying a single small app with Fly.io is free, with some limitations.

{% coach %}
Talk about the benefits of deploying to Fly.io versus traditional servers.
{% endcoach %}

## Change the production database

Locally your app uses SQLite as the database to store your ideas. It's easier to use another database on Fly.io deploys. To deploy with Fly.io we'll change the database in production to use PostgreSQL.

### Install the pg gem

Open the `Gemfile` file in your Text Editor and change the following line:

{% highlight ruby %}
gem "sqlite3"
{% endhighlight %}

into these lines:

{% highlight ruby %}
group :development do
  gem "sqlite3"
end
group :production do
  gem "pg"
end
{% endhighlight %}

Next, run the command below to setup the new database gem:

{% highlight sh %}
bundle install --without production
{% endhighlight %}

### Update the database configuration

Up next, you'll need to change the database configuration for the production environment.

{% coach %}
Explain what the different Rails environments are. What is "production"?
{% endcoach %}

Open the `config/database.yml` file in your Text Editor. Change the following lines in the file:

{% highlight yaml %}
production:
  <<: *default
  database: storage/production.sqlite3
{% endhighlight %}

to these lines:

{% highlight yaml %}
production:
  adapter: postgresql
  encoding: unicode
  pool: <%= ENV.fetch("RAILS_MAX_THREADS") { 5 } %>
  database: railsgirls_production
  username: railsgirls
  password: <%= ENV["RAILSGIRLS_DATABASE_PASSWORD"] %>
{% endhighlight %}

Save the changes in Git by creating a new commit. We'll need to update our app in Git to deploy these changes.

{% highlight sh %}
git add .
git commit -m "Use PostgreSQL as the production database"
{% endhighlight %}

## Create a Fly.io account

Visit the [Fly.io sign up page](https://fly.io/app/sign-up) and fill in the form to make a new user account.

On the next screen, click the "Try Fly.io for free" link. You do not need to enter your Credit Card to use Fly.io for free.

## Install the Fly.io CLI

To deploy apps with Fly.io, you'll need to use the Fly.io CLI: a tool for the Terminal app.

Follow the [installation instructions on this Fly.io docs page](https://fly.io/docs/hands-on/install-flyctl/). Continue with this guide when the Fly.io CLI has been installed.

## Login to the Fly.io CLI

Run the following command to connect your Fly.io user account to your laptop and deploy your app with Fly.io in the Terminal app.

{% highlight sh %}
flyctl auth login
{% endhighlight %}

It will open your Browser with a new tab/window. Either login to your Fly.io user account you created earlier, or click the button starting with "Continue as ...". You are now logged into Fly.io with the CLI.

## Configure the app

Run the following command create the necessary configuration in your app to deploy it.

{% highlight sh %}
fly launch
{% endhighlight %}

When prompted for questions, enter or select the following:

- Choose an app name:
    - Enter: railsgirls-yourname
    - Change "yourname" to your (nick)name.
- Choose a region for deployment:
    - Choose the region closest to you with the arrow keys and then press <kbd>Enter</kbd>.
- Would you like to set up a Postgresql database now?
    - Press <kbd>y</kbd> and then press <kbd>Enter</kbd>.
- Select configuration:
    - Choose "Development" from the list.
- Would you like to set up an Upstash Redis database now?:
    - Press <kbd>n</kbd> and then press <kbd>Enter</kbd>.

Your app is now configured to deploy with Fly.io. You'll need to commit these changes before you can deploy. Commit your changes with this command:

{% highlight sh %}
git add .
git commit -m "Configure for Fly.io deployment"
{% endhighlight %}

## Deploy the app in the future

If you made any new changes to your app and want to deploy the changes in the future, run the following command:

{% highlight sh %}
fly deploy
{% endhighlight %}

You'll see a lot of text being printed about the results of the steps needed to deploy the app. Wait until it's done. It should say "v0 deployed successfully".

## View your deployed app

Your app should now be deployed. This means it's online for people to see. To know where you can view it, run the following command to open it in your Browser:

{% highlight sh %}
fly open
{% endhighlight %}

You now have your first app deploy! Congratulations! Share the link you see in your Browser's address bar!

---

You do not need to deploy your app on another services. Continue with the next numbered guide in the list below.
