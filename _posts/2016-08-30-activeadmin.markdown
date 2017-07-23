---
layout: default
title: Adding a back-end with Active Admin
permalink: backend-with-active-admin
---

# Adding a back-end with Active Admin

*Created by [Rasmus Kjellberg](https://www.rasmuskjellberg.se)*

**This guide assumes that you have already built a Rails Girls app by** [**following the app development guide**](/app).

Active Admin is a Ruby on Rails plugin for generating administration style interfaces. It abstracts common business application patterns to make it simple for developers to implement beautiful and elegant interfaces with very little effort. You can read more about Active Admin [here](http://activeadmin.info/).

## Adding the "Active Admin" gem
Open up your `Gemfile` and add these lines

{% highlight ruby %}
gem 'devise'
gem 'activeadmin', github: 'activeadmin'
gem 'inherited_resources', github: 'activeadmin/inherited_resources'
{% endhighlight %}
and run
{% highlight sh %}
bundle install
{% endhighlight %}
to install the gems.

After updating your bundle, run the installer
{% highlight sh %}
rails generate active_admin:install
{% endhighlight %}

The installer creates an initializer used for configuring defaults used by Active Admin as well as a new folder at app/admin to put all your admin configurations.

Migrate your db and start the server:
{% highlight sh %}
rails db:migrate
rails server
{% endhighlight %}

## Creating your first admin account
Open up the Rails console and create your new user via the `AdminUser` model:
{% highlight sh %}
rails console
{% endhighlight %}

Once booted (the terminal shows `irb(main):001:0>`), you can run this command:
{% highlight sh %}
AdminUser.create(:email => 'admin@railsgirls.com', :password => 'password123', :password_confirmation => 'password123')
{% endhighlight %}

You should see something like:
{% highlight sh %}
# (0.3ms)  begin transaction
# SQL (0.4ms)  INSERT INTO "admin_users" ...
# (0.9ms)  commit transaction
{% endhighlight %}

You can exit the console session with a simple `exit` command:
{% highlight sh %}
irb(main):002:0> exit
{% endhighlight %}

## Accessing your admin panel
Visit [http://localhost:3000/admin](http://localhost:3000/admin) and log in using your created credentials.

Voila! You're on your brand new Active Admin dashboard.

## Add "Ideas" to back-end
To register your `Idea` model with Active Admin, run:
{% highlight sh %}
rails generate active_admin:resource Idea
{% endhighlight %}
Refresh your admin page and you will find [Ideas](http://localhost:3000/admin/ideas) in the navigation.

*You can replace "Idea" with whatever model you like to register another model with Active Admin.*

### Setting up Strong Parameters
To prevent **ActiveModel::ForbiddenAttributesError in Admin::IdeasController#update** exception when updating a model you have to use the [permit_params](http://activeadmin.info/docs/2-resource-customization.html) method to define which attributes may be changed:

Open up your `app/admin/idea.rb` file and add `:name`, `:description` and `:picture` to `permit_params`:
{% highlight ruby %}
ActiveAdmin.register Idea do
  permit_params :name, :description, :picture
end
{% endhighlight %}

## Remove "new", "edit" and "destroy" for users.
If you don't want your non-admin users to update your ideas you can easy fix this by updating your route file to only allow "index" and "show". Add `only: [:show, :index]` to `config/route.rb`:
{% highlight ruby %}
resources :ideas, only: [:show, :index]
{% endhighlight %}

**Don't forget to remove now broken links from your front-end code such as:** `<%= link_to 'New Idea', new_idea_path %>`, `<%= link_to 'Edit', edit_idea_path(idea) %>`, `<%= link_to 'Destroy', idea, method: :delete, data: { confirm: 'Are you sure?' } %>`

Voila! You can now manage your Ideas from your new admin panel!

## What next?

* Add another resource to admin such as Blog and Comments
