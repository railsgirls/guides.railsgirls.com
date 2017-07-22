---
layout: default
title: Touristic Autism-friendly Spots App 
permalink: touristic-autism_resource-modeling
---

# Resource Modeling

*Created by Myriam Leggieri, [@iammyr](https://twitter.com/iammyr)*
*for [Rails Girls Galway](https://github.com/RailsGirlsGalway)*
The basic guides that have been merged and adapted are the [Ruby on Rails Tutorial](http://www.railstutorial.org/book), the [basic RailsGirls app](http://guides.railsgirls.com/app/) and the tutorials for [creating thumbnails](http://guides.railsgirls.com/thumbnails), [authenticating users](http://guides.railsgirls.com/devise/), [adding design](http://guides.railsgirls.com/design), [deploying to OpenShift](http://guides.railsgirls.com/openshift/) and [adding comments](http://guides.railsgirls.com/commenting).

What do we want our app to do? As a first thing, we would like to 
* authenticate **users**
* allow authenticated users to create a new touristic **place** description
* allow authenticated users to **comment** those places
* allow authenticated users to **rate** up to which extent those places are autism-friendly or not.

Note that these requirements help us identify 4 different resources: user, place, comment, rating. We are now going to model them specifying their properties and their associations with each other.

We will enable the rating in the next tutorial.


## Authenticated Tourists/Users

Let's generate our first resource: user and require its authentication.

## Step 0: Add devise gem

Open up your `Gemfile` and add this line

{% highlight ruby %}
gem 'devise'
{% endhighlight %}
and run
{% highlight sh %}
bundle install
{% endhighlight %}
to install the gem. **Also remember to restart the Rails server**.

## Step 1: Set up devise in your app

Run the following command in the terminal.

{% highlight sh %}
rails g devise:install
{% endhighlight %}


## Step 2: Configure Devise

Ensure you have defined default url options in your environments files. Open up `config/environments/development.rb` and add this line:
{% highlight ruby %}
   config.action_mailer.default_url_options = { :host => 'localhost:3000' }
{% endhighlight %}

before the `end` keyword.

Open up `app/views/layouts/application.html.erb` and add:

{% highlight erb %}
<% if notice %>
  <p class="alert alert-success"><%= notice %></p>
<% end %>
<% if alert %>
  <p class="alert alert-danger"><%= alert %></p>
<% end %>
{% endhighlight %}
right above
{% highlight ruby %}
   <%= yield %>
{% endhighlight %}



## Step 3: Setup the User model

We'll use a bundled generator script to create the User model.
{% highlight sh %}
   rails g devise user
   rails db:migrate
{% endhighlight %}

**Coach:** Explain what user model has been generated. What are the fields? Note that a model inherits abilities to interact with the DB from its ApplicationRecord super-class (ref. MVC). 

## Step 4: Create your first user

Now that you have set everything up you can create your first user. Devise creates all the code and routes required to create accounts, log in, log out, etc.

Make sure your rails server is running, open [http://localhost:3000/users/sign_up](http://localhost:3000/users/sign_up) and create your user account.

## Step 5: Add sign-up and login links

All we need to do now is to add appropriate links or notice about the user being logged in in the top right corner of the navigation bar.

In order to do that, edit `app/views/layouts/application.html.erb` by adding at the beginning of the body:
{% highlight erb %}
<p class="navbar-text pull-right">
<% if user_signed_in? %>
  Logged in as <strong><%= current_user.email %></strong>.
  <%= link_to 'Edit profile', edit_user_registration_path, :class => 'navbar-link' %> |
  <%= link_to "Logout", destroy_user_session_path, method: :delete, :class => 'navbar-link'  %>
<% else %>
  <%= link_to "Sign up", new_user_registration_path, :class => 'navbar-link'  %> |
  <%= link_to "Login", new_user_session_path, :class => 'navbar-link'  %>
<% end %></p>
{% endhighlight %}


Finally, force the user to redirect to the login page if the user was not logged in. Open up `app/controllers/application_controller.rb` and add:

{% highlight ruby %}
  before_action :authenticate_user!
{% endhighlight %}

after `protect_from_forgery with: :exception`.

Open your browser and try logging in and out from.

**Coach:** Talk about the `user_signed_in?` and `current_user` helpers. Why are they useful?

Let's add-commit-push to your GitHub repo! See how nicely all the changes are now on your GitHub profile? :)

## Touristic Places

We now use Rails' scaffold functionality to generate and set up all that is necessary to list, add, remove, edit, and view our second resource: "touristic places".

<div class="os-specific">
  <div class="nix">
{% highlight sh %}
rails generate scaffold place name:string address:string latitude:decimal longitude:decimal description:text picture:string user_id:integer
{% endhighlight %}
</div>
Note the column user:references that is created to support the 1-to-many association with Users.
</div>

The scaffold creates new files in your project directory. However, we have defined (modeled) a "structure" for our "place" resource and we want all the future instances of this resource to stick to this structure and get stored somewhere, i.e., in a database. 
We are already using a database (see `gem 'sqlite'` in your Gemfile). Let's add the structure of "place" as a table to our database with the following.

<div class="os-specific">
  <div class="nix">
{% highlight sh %}
bin/rails db:migrate
{% endhighlight %}
  </div>

  <div class="win">
{% highlight sh %}
ruby bin/rails db:migrate
{% endhighlight %}
  </div>


Then start the server again. Open [http://localhost:3000/places](http://localhost:3000/places) in your browser and check out all the new functionalities that our web application is now providing to handle "place" resources. All thanks to what Ruby on Rails automatically generates with `generate scaffold`.
Each new instance of "place" that will be stored in the database, will be automatically assigned a unique identifier called "primary key", with no need for us to specify it as one of the fields (along with picture, name, etc.)
</div>


**Coach:** What is Rails scaffolding? What are migrations and why do you need them?
Note the pages that have been created to manipulate the "place" resources and their naming convention.
Look at the server logging and explain it as a report of the following interaction (in the context of the MVC pattern):
* The browser issues a request for the /places URL.
* Rails routes /places to the index action in the Places controller.
* The index action asks the Place model to retrieve all places (Place.all).
* The Place model pulls all the places from the database.
* The Place model returns the list of places to the controller.
* The controller captures the users in the @users variable, which is passed to the index view.
* The view uses embedded Ruby to render the page as HTML.
* The controller passes the HTML back to the browser

Note that the controller created is RESTful (explain)

Note that the controller inherits abilities (large amount of functionality, such as the ability to manipulate model objects, filter inbound HTTP requests, and render views as HTML) from its ApplicationController super-class (ref. MVC).

Open up `app/views/places/show.html.erb` and remove the line that says:

{% highlight erb %}
<p id="notice"><%= notice %></p>
{% endhighlight %}

This line is not necessary as we've already put the authenticated user notice in the `app/views/layouts/application.html.erb` file.


Let's add-commit-push to your GitHub repo! 

### Resource Associations

Note that places aren't yet properly associated with users. For instance, when creating a new place the field "User" is expected to be filled by ourselves and when viewing a user profile there isn't any list of places created by him/her and viceversa. Also, when deleting a user account all the places he/she created do not get deleted automatically. 

Let's properly create the 1-to-many association between User and Places.

#### Step 1. Add 1-to-many association 

You need to make sure that Rails knows the relation between the User and Place resources. 
As one user can create many places we need to make sure the user model knows that. 
Open app/models/user.rb and after the row
{% highlight ruby %}
class User < ApplicationRecord
{% endhighlight %}
add
{% highlight ruby %}
has_many :places
{% endhighlight %}

The place also has to know that it belongs to a user. So open app/models/place.rb and after
{% highlight ruby %}
class Place < ApplicationRecord
{% endhighlight %}

add the row
{% highlight ruby %}
belongs_to :user
{% endhighlight %}

#### Step 2: Render the views

Open app/views/places/_form.html and after
{% highlight erb %}
<div class="field">
  <%= f.label :user_id %><br>
  <%= f.number_field :user_id %>
</div>
{% endhighlight %}

add the row
{% highlight erb %}
<%= f.hidden_field :user_id, :value => current_user.id %>
{% endhighlight %}

next, remove
{% highlight erb %}
<div class="field">
  <%= f.label :user_id %><br>
  <%= f.number_field :user_id %>
</div>
{% endhighlight %}

## Step 3: Set edit/delete permissions

Allow only the place creator to edit/delete a place.

Open app/views/places/index.html.erb and substitute


{% highlight sh %}
<td><%= link_to 'Edit', edit_place_path(place) %></td>
		<td><%= link_to 'Destroy', place, method: :delete, data: { confirm: 'Are you sure?' } %></td>
{% endhighlight %}

with


{% highlight sh %}
 <% if user_signed_in? %>
	  <% if current_user.id == place.user_id %>

		<td><%= link_to 'Edit', edit_place_path(place) %></td>
		<td><%= link_to 'Destroy', place, method: :delete, data: { confirm: 'Are you sure?' } %></td>
	    <% end %>
	<% end %>
{% endhighlight %}

That's it. Now view a user you have inserted to your application and there you should see the form for creating a place as well as deleting older places.




## Place's Comments

Just as well as we created a "place" resource and associated it with users, we can create a "comment" resource and associate it with places 9and with its author).

<div class="os-specific">
  <div class="nix">
{% highlight sh %}
rails generate scaffold comment body:text user_id:integer place_id:integer
bin/rails db:migrate
{% endhighlight %}
  </div>
Start the server, check out the new service in your browser. Then, add-commit-push to github.
</div>


**Coach:** show that the scaffold generator has updated the Rails routes file with a rule for the Review resource


##Resource Association

#### Step 1. Add 1-to-many association 

Open app/models/place.rb and after the row
{% highlight ruby %}
belongs_to :user
{% endhighlight %}
add
{% highlight ruby %}
has_many :comments
{% endhighlight %}

Open app/models/comment.rb and after
{% highlight ruby %}
class Comment < ApplicationRecord
{% endhighlight %}

add the rows
{% highlight ruby %}
belongs_to :user
belongs_to :place
{% endhighlight %}

#### Step 2: Render the views

Open app/views/comments/_form.html and substitute
{% highlight erb %}
<div class="field">
  <%= f.label :user_id %><br>
  <%= f.number_field :user_id %>
</div>
{% endhighlight %}

with the row
{% highlight erb %}
<%= f.hidden_field :user_id, :value => current_user.id %>
{% endhighlight %}

next, substitute
{% highlight erb %}
  <div class="field">
    <%= f.label :place_id %><br>
    <%= f.number_field :place_id %>
  </div>
{% endhighlight %}

with the row
{% highlight erb %}
<%= f.hidden_field :place_id%>
{% endhighlight %}





Open app/views/places/show.html.erb and just before the bottom links add
{% highlight erb %}
<h3>Comments</h3>
<% @comments.each do |comment| %>
  <div>
    <strong><%= comment.user_id %></strong>
    <br>
    <p><%= comment.body %></p>
    <p><%= link_to 'Delete', comment_path(comment), method: :delete, data: { confirm: 'Are you sure?' } %></p>
  </div>
<% end %>
<%= render 'comments/form' %>
{% endhighlight %}

In app/controllers/places_controller.rb add to show action after the row
{% highlight ruby %}
@place = Place.find(params[:id])
{% endhighlight %}

this
{% highlight ruby %}
@comments = @place.comments.all
@comment = @place.comments.build
{% endhighlight %}





## Step 3: Set edit/delete permissions

Allow only the comment creator to edit/delete a comment.

Open app/views/places/show.html.erb and substitute


{% highlight sh %}
<p><%= link_to 'Delete', comment_path(comment), method: :delete, data: { confirm: 'Are you sure?' } %></p>
{% endhighlight %}

with


{% highlight sh %}
 <% if user_signed_in? %>
	  <% if current_user.id == comment.user_id %>

    <p><%= link_to 'Delete', comment_path(comment), method: :delete, data: { confirm: 'Are you sure?' } %></p>

  <% end %>
	<% end %>
{% endhighlight %}





## Resource Field Validation

At the moment comments, places and users are characterized by information that is never validated for its correctness. Still, for instance, there should be a limit on the length of comments in review or on the format of a user's email address.


Then let's add a constraint over the length of the comment's body field (we'll use the 'validates' keyword).
Open app/models/comment.rb and add between 'class' and 'end':

<div class="os-specific">
  <div class="nix">
{% highlight sh %}
  validates :body, length: { maximum: 140 }
{% endhighlight %}
  </div>
If we now try to enter more than 140 characters we'll get an error. (try it out! ;) )
</div>

## Finetune the routes

If you try to open [http://localhost:3000](http://localhost:3000) it still shows the "Welcome aboard" page. Let's make it redirect to the places page.

Open `config/routes.rb` and after the first line add

{% highlight ruby %}
root :to => redirect('/places')
{% endhighlight %}

Test the change by opening the root path (that is, http://localhost:3000/) in your browser.

**Coach:** Talk about routes, and include details on the order of routes and their relation to static files.

**Rails 3 users:** You will need to delete the index.html from the `/public/` folder for this to work.



