---
layout: main_guide
title: Rails Girls on DigitalOcean
description: "Deploy your app to DigitalOcean by following this guide."
permalink: digitalocean
---

# Put Your App Online With DigitalOcean App Platform

*Created by [Colin Alston](https://github.com/calston)*

## Change the production database

Locally your app uses SQLite as the database to store your ideas. It's easier to use another database on DigitalOcean deploys. To deploy with DigitalOcean we'll change the database in production to use PostgreSQL.

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

## Create an account

Head to [https://www.digitalocean.com/go/app-platform](https://www.digitalocean.com/go/app-platform) and sign up for the 60 day free trial.

![Trial page](/images/digitalocean/1.png)

Sign up using Github to link your account

![Github Authorization](/images/digitalocean/githuboauth.png)

You will need a credit card but will receive $200 to start with if this is your first time using DigitalOcean.

![Complete signup](/images/digitalocean/2.png)

## Create an application

Click on `Deploy a web application` to get started.

![Deploy a web application](/images/digitalocean/create-app-1.png)

Choose "Deploy your web app" to add an existing GitHub repository

![Deply source](/images/digitalocean/create-app-2.png)

Authorize DigitalOcean to read your repositories

![Authorize DigitalOcean](/images/digitalocean/create-app-3.png)

Select the repository for your application

![Choose repo](/images/digitalocean/create-app-4.png)
![Choose branch](/images/digitalocean/create-app-5.png)

Click `Next` to continue then `Edit Plan` to ensure we use the appropriate resources. We will start with a Basic plan and the smallest container size which should be sufficient.

![Container size](/images/digitalocean/create-app-7.png)

Continue through the next steps until the end. We should not need to change anything else.

![Environment](/images/digitalocean/create-app-8.png)
![Region](/images/digitalocean/create-app-9.png)

## Deploying our Rails application

Wait for the application to build, you can view realtime logs of the process while it happens.

![Build](/images/digitalocean/building.png)

If all went well you should see your application is available, however it still needs to be initialized and have a database added.

![Deployment](/images/digitalocean/deploy.png)

Click on `Create` and `Create/Attach Database` to connect a PostgreSQL database.

![Database](/images/digitalocean/database.png)

The application will automatically be configured with the database credentials

## Configuration
You can now head to the `Console` to access your application container and setup the database.

Type `rails db:migrate` into the terminal and press Enter. You should see the database being setup with the Rails schema.

![Migrate](/images/digitalocean/migrate.png)

If all went well you should now be able to click on the `Live App` button which links to the live server.

![Tada](/images/digitalocean/fin.png)

## Conclusion

Your Rails app is now running in the cloud on DigitalOcean. You can push your changes to GitHub and they'll show up automatically the live URL after some time. Share the URL to show off your app to your friends!

Keep an eye out when your free credits run out and delete the app if you no longer need it.
