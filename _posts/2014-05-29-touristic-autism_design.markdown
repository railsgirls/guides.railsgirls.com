---
layout: default
title: Touristic Autism-friendly Spots App
permalink: touristic-autism_design
---

# Design

*Created by Myriam Leggieri, [@iammyr](https://twitter.com/iammyr)*
*for [Rails Girls Galway](https://github.com/RailsGirlsGalway)*
The basic guides that have been merged and adapted are the [Ruby on Rails Tutorial](http://www.railstutorial.org/book), the [basic RailsGirls app](http://guides.railsgirls.com/app/) and the tutorials for [creating thumbnails](http://guides.railsgirls.com/thumbnails), [authenticating users](http://guides.railsgirls.com/devise/), [adding design](http://guides.railsgirls.com/design), [deploying to OpenShift](http://guides.railsgirls.com/openshift/) and [adding comments](http://guides.railsgirls.com/commenting).

**Coach:** Talk about the relationship between HTML and Rails. What part of views is HTML and what is Embedded Ruby (ERB)? What is MVC and how does this relate to it? (Models and controllers are responsible for generating the HTML views.)

The app doesn't look very nice yet. Let's do something about that. We'll use the Twitter Bootstrap project to give us nicer styling really easily.

Open `app/views/layouts/application.html.erb` in your text editor and above the line

{% highlight erb %}
<%= stylesheet_link_tag "application", media: "all", "data-turbolinks-track" => true %>
{% endhighlight %}

add

{% highlight erb %}
<link rel="stylesheet" href="//railsgirls.com/assets/bootstrap.css" />
<link rel="stylesheet" href="//railsgirls.com/assets/bootstrap-theme.css" />
{% endhighlight %}

and replace

{% highlight erb %}
<%= yield %>
{% endhighlight %}

with

{% highlight erb %}
<div class="container">
  <%= yield %>
</div>
{% endhighlight %}

Let's also add a navigation bar and footer to the layout. In the same file, above `<div class="container">` add

{% highlight html %}
<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="/">The Places app</a>
    </div>
    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <li class="active"><a href="/places">Places</a></li>
      </ul>
    </div>
  </div>
</nav>
{% endhighlight %}

and before `</body>` add

{% highlight html %}
<footer>
  <div class="container">
    Rails Girls Galway 2014
  </div>
</footer>
<script src="//railsgirls.com/assets/bootstrap.js"></script>
{% endhighlight %}

Now let's also change the styling of the places table. Open `app/assets/stylesheets/application.css` and at the bottom add

{% highlight css %}
body { padding-top: 100px; }
footer { margin-top: 100px; }
table, td, th { vertical-align: middle; border: none; }
th { border-bottom: 1px solid #DDD; }
{% endhighlight %}

Now make sure you saved your files and refresh the browser to see what was changed. You can also change the HTML & CSS further.

In case your Terminal shows you an error message that *sort of* implies there is something wrong with your JavaScript or CoffeeScript, install [nodejs](http://nodejs.org/download/). This issue should not appear when you've used the RailsInstaller (but when you've installed Rails via ```gem install rails```).

**Coach:** Talk a little about CSS and layouts.


1.Design your header

+ put the following code to the bottom of `app/assets/stylesheets/application.css`:

    ```
    .navbar {
        min-height: 38px;
      background-color: #f55e55;
    }
    ```

  Now refresh the page and check the changes. You can try change the
    color or font of the header. You can check the color reference
    from [http://color.uisdc.com/](http://color.uisdc.com/).

    **Coach: ** talk about the property `display`, inline and block element.

+ Then put these lines at the bottom：

    ```
    .navbar a.brand { font-size: 18px; }
    .navbar a.brand:hover {
     color: #fff;
     background-color: transparent;
     text-decoration: none;
    }
    ```

    **Coach: ** explain the 4 states of a link


2.Design your table

 + We simply use the twitter [Bootstrap](http://getbootstrap.com/) to
   polish our table。find this line from
   app/views/places/index.html.erb and replace:

   ```
   <table>
   ```

   with

   ```
   <table class="table">
   ```

 + Modify size of the picture using the following lines

     ```
     <%= image_tag(idea.picture_url, :width => 600) if idea.picture.present? %>
     ```

     try to change the width and see what's gonna happen


 + add the following lines to the bottom of file app/assets/stylesheets/places.css.scss:

  ```
  .container a:hover {
    color: #f55e55;
    text-decoration: none;
    background-color: rgba(255, 255, 255, 0);
  }
  ```


 + try add some background style with property `background-image`,
   reference to
   [http://subtlepatterns.com/](http://subtlepatterns.com/) for some patterns.


3.add style to footer

+ add the lines to bottom of  app/assets/stylesheets/application.css:

    ```
    footer {
      background-color: #ebebeb;
      padding: 30px 0;
    }
    ```

    try put more things into `footer`, then adjust it's position.

4.add style to button

  + open
    [http://localhost:3000/places/new](http://localhost:3000/places/new)
    and find the `Create Place` button.

   add these lines to app/assets/stylesheets/places.css.scss

   ```
   .container input[type="submit"] {
      height: 30px;
      font-size: 13px;
      background-color: #f55e55;
      border: none;
      color: #fff;
    }
   ```

   **Coach** explain how to use `border` in css, try modify the style
     of button like round the corner, add shadow or color etc.



Open `app/views/layouts/application.html.erb` in your text editor and replace the line

{% highlight html %}
<link rel="stylesheet" href="http://railsgirls.com/assets/bootstrap.css">
{% endhighlight %}

with

{% highlight html %}
<link rel="stylesheet" href="http://netdna.bootstrapcdn.com/twitter-bootstrap/2.3.2/css/bootstrap.min.css">
{% endhighlight %}

Open `app/assets/stylesheets/application.css`, replace the line

{% highlight html %}
body { padding-top: 100px; }
{% endhighlight %}

with

{% highlight html %}
body { padding-top: 60px; }
{% endhighlight %}

Finally, delete the file `app/assets/stylesheets/scaffolds.css.scss` because we don't really need the default style generated by Rails.

Now refresh the page at [http://localhost:3000/places](http://localhost:3000/places). You will not find much change but it's good preparation for the following steps.


Considering "place" is the most important object in your app, we are going to put the "New Place" button on the navigation bar to make it always available.

Open `app/views/layouts/application.html.erb`, under the line

{% highlight erb %}
<li class="active"><a href="/places">Places</a></li>
{% endhighlight %}

add
{% highlight erb %}
<li ><%= link_to 'New Place', new_place_path %></li>
{% endhighlight %}



Now it's time to make the place list page look professional. For that, we are going to replace the table layout with a div layout.

**Coach:** Talk a little about table vs div.

Open `app/views/places/index.html.erb` in your text editor and replace the table with

{% highlight erb %}
<% @places.in_groups_of(3) do |group| %>
  <div class="row">
    <% group.compact.each do |place| %>
      <div class="span4">


       <%= image_tag(place.picture_url, :width => '20%') if place.picture.present? %>
        <h4><%= link_to place.name, place %></h4>
        <%= place.description %>


  <%= place.address %>
  <%= place.latitude %>
<%= place.longitude %>

<%= place.user_id %>
<%= link_to 'Show', place %> |

 <% if user_signed_in? %>
	  <% if current_user.id == place.user_id %></strong>.

<%= link_to 'Edit', edit_place_path(place) %> |
<%= link_to 'Destroy', place, method: :delete, data: { confirm: 'Are you sure?' } %>


	    <% end %>
	<% end %>

      </div>
    <% end %>
  </div>
<% end %>
{% endhighlight %}

**Coach:** Explain what the new code means line by line, and talk a little about Bootstrap 12 grids layout.

Refresh it! We get a nice looking idea list. Click the "New Idea" button, and create more ideas with real text and pretty pictures - the page will look much better with content. There is a principle of contemporary web design: content is the best decoration.

Click the title of a place, and you will be brought to the details page of the place. Now it is still scaffold generated by Rails, so let's make it better.

Open `app/views/places/show.html.erb` in your text editor and replace all lines with

{% highlight erb %}
<h3>Places created</h3>

<div class="row">
  <div class="span9">
    <%= image_tag(@place.picture_url, :width => "100%") if @place.picture.present? %>
  </div>

  <div class="span3">
    <p><b>Name: </b><%= @place.name %></p>

    <p><b>User Rating as Autism-friendly: </b><%= rating_for @place, "autism_friendly" %></p>
    <p><b>User Overall Rating: </b><%= rating_for @place, "overall" %></p>
    <p>Your <b>Vote as Autism-friendly: </b><%= rating_for_user @place, current_user, "autism_friendly", :star => 7 %></p>
    <p>Your <b>Overall Vote: </b><%= rating_for_user @place, current_user, "autism_friendly", :star => 7 %></p>

    <p><b>Description: </b><%= @place.description %></p>
    <p><b>Address: </b><%= @place.address %></p>
    <p><b>Latitude: </b><%= @place.latitude %></p>
    <p><b>Longitude: </b><%= @place.longitude %></p>
    <p><b>Creator ID: </b><%= @place.user_id %></p>

  <p>
      <%= link_to 'Edit', edit_place_path(@place) %> |
<%= link_to 'Back', places_path %>
    </p>
  </div>
</div>

<h3>Comments</h3>
<% @comments.each do |comment| %>
  <div>
    <strong><%= comment.user_id %></strong>
    <br>
    <p><%= comment.body %></p>

 <% if user_signed_in? %>
	  <% if current_user.id == comment.user_id %>

    <p><%= link_to 'Delete', comment_path(comment), method: :delete, data: { confirm: 'Are you sure?' } %></p>

  <% end %>
	<% end %>

  </div>
<% end %>
<%= render 'comments/form' %>

{% endhighlight %}

Continue experimenting with Design changes! ;)
