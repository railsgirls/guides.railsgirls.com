---
layout: default
title: Touristic Autism-friendly Spots App 
permalink: touristic-autism_google-map
---

# Show All Places in a Google Map

*Created by Myriam Leggieri, [@iammyr](https://twitter.com/iammyr)*
*for [Rails Girls Galway](https://github.com/RailsGirlsGalway)*
The basic guides that have been merged and adapted are the [Ruby on Rails Tutorial](http://www.railstutorial.org/book), the [basic RailsGirls app](http://guides.railsgirls.com/app/) and the tutorials for [creating thumbnails](http://guides.railsgirls.com/thumbnails), [authenticating users](http://guides.railsgirls.com/devise/), [adding design](http://guides.railsgirls.com/design), [deploying to OpenShift](http://guides.railsgirls.com/openshift/) and [adding comments](http://guides.railsgirls.com/commenting).


We need to install a piece of software to let us display and interact with Google Maps.

Open `Gemfile` in the project directory using your text editor and add

{% highlight ruby %}
gem 'gmaps4rails'
{% endhighlight %}


Bundle as usual. Then add to a new app/model/marker.rb file:

{% highlight sh %}
class Marker

  include ActiveModel::Validations
  include Gmaps4rails::ActsAsGmappable

  acts_as_gmappable :position => :location

  attr_accessor :location

    def gmaps4rails_infowindow
      'foo'
    end

end
{% endhighlight %}



Then add to config/application.rb within your project block:

{% highlight sh %}
config.active_support.escape_html_entities_in_json = true
config.encoding = "utf-8"
config.filter_parameters += [:password]
config.assets.enabled = true
config.assets.version = '1.0'
{% endhighlight %}

Create your app/controllers/google_controller.rb:

{% highlight sh %}
class GoogleController < ApplicationController
  def index; end

  def markers
    @marker ||= (1..10).map {
      m = Marker.new
      m.location = [ (Random.new.rand(-5000..5000) / 100.0),(Random.new.rand(-5000..5000) / 100.0) ]
      m
    }.to_gmaps4rails
  end
  helper_method :markers

end
{% endhighlight %}

Create your view/google/index.html.erb:

{% highlight sh %}
<h1>See some marker on your map by default</h1>
<div class="google_map"></div>
<%= gmaps("markers" => {"data" => markers},
          'last_map' => false,
          "map_options" =>  {
            "center_on_user" => true,
            "detect_location" => true,
            "provider" => "google", :id => 'google_map'}) %>

<h1>See on OpenLayer</h1>
<div class="openlayer_map"></div>

<%= gmaps("markers" => {"data" => markers},
          "map_options" =>  {
  "center_on_user" => true,
  "detect_location" => true,
  "provider" => "openlayers", :id => 'openlayer_map'}) %>
{% endhighlight %}

Add the following in app/views/application.html.erb after "<%= yield %>":

{% highlight sh %}
<%= yield :scripts %>
{% endhighlight %}

Finally add the following to your config/routes.rb:

{% highlight sh %}
  get '/google' => 'google#index'
  root :to => 'google#index'
{% endhighlight %}
