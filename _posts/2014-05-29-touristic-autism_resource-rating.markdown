---
layout: default
title: Touristic Autism-friendly Spots App 
permalink: touristic-autism_resource-rating
---

# Resource Rating

*Created by Myriam Leggieri, [@iammyr](https://twitter.com/iammyr)*
*for [Rails Girls Galway](https://github.com/RailsGirlsGalway)*
The basic guides that have been merged and adapted are the [Ruby on Rails Tutorial](http://www.railstutorial.org/book), the [basic RailsGirls app](http://guides.railsgirls.com/app/) and the tutorials for [creating thumbnails](http://guides.railsgirls.com/thumbnails), [authenticating users](http://guides.railsgirls.com/devise/), [adding design](http://guides.railsgirls.com/design), [deploying to OpenShift](http://guides.railsgirls.com/openshift/) and [adding comments](http://guides.railsgirls.com/commenting).

What do we want our app to do? As a first thing, we would like to 
* authenticate **users**
* allow authenticated users to create a new touristic **place** description
* allow authenticated users to **comment** those places
* allow authenticated users to **rate** up to which extent those places are autism-friendly or not.

We modeled and deployed comment, user and place resources, so far. Let's now enable the rating for places.

## Rating Places

## Step 0: Add letsrate gem

Open up your `Gemfile` and add this line

{% highlight ruby %}
gem "letsrate", :git => "git://github.com/iammyr/letsrate.git"
{% endhighlight %}
and run
{% highlight sh %}
bundle install
{% endhighlight %}
to install the gem. **Also remember to restart the Rails server**.

## Step 1: Set up letsrate in your app

Run the following command in the terminal. (we are assuming that we had already enabled authenticated users using the devise gem)

{% highlight sh %}
rails g letsrate user
{% endhighlight %}

## Step 2: Apply letsrate to your resource

You should add the letsrate_rateable function with its dimensions option, to the model of the resource you wish to rate, i.e., place. You can have multiple dimensions.

In app/models/place.rb add

{% highlight sh %}
  letsrate_rateable "autism_friendly", "overall"
{% endhighlight %}

Then you need to add a call letsrate_rater in the user model:

{% highlight sh %}
  letsrate_rater
{% endhighlight %}

## Step 3: Render the Views

There is a helper method which name is rating_for to add the star links. By default rating_for will display the average rating and accept the new rating value from authenticated user.

Open app/views/places/show.html.erb and add

{% highlight sh %}
<p>
<strong>Votes:</strong><br>
Autism_friendly : <%= rating_for @place, "autism_friendly" %> <br>
Overall : <%= rating_for @place, "overall" %>
</p>
<hr />
<p>
<strong>Your votes:</strong><br>
Autism_friendly : <%= rating_for_user @place, current_user, "autism_friendly", :star => 7 %>
Overall : <%= rating_for_user @place, current_user, "autism_friendly", :star => 7 %>
</p>
<hr />
{% endhighlight %}

You can use the rating_for_user helper method to show the star rating for the user.


That's it! ^__^
Try it out by restarting the server, add, commit and push on GitHub. If all it's working then you can also deploy ;)
