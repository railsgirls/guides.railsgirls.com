---
layout: default
title: Touristic Autism-friendly Spots App 
permalink: touristic-autism_image-upload
---

# Image Upload and Thumbnails

*Created by Myriam Leggieri, [@iammyr](https://twitter.com/iammyr)*
*for [Rails Girls Galway](https://github.com/RailsGirlsGalway)*
The basic guides that have been merged and adapted are the [Ruby on Rails Tutorial](http://www.railstutorial.org/book), the [basic RailsGirls app](http://guides.railsgirls.com/app/) and the tutorials for [creating thumbnails](http://guides.railsgirls.com/thumbnails), [authenticating users](http://guides.railsgirls.com/devise/), [adding design](http://guides.railsgirls.com/design), [deploying to OpenShift](http://guides.railsgirls.com/openshift/) and [adding comments](http://guides.railsgirls.com/commenting).


We need to install a piece of software to let us upload files in Rails.

Open `Gemfile` in the project directory using your text editor and add

{% highlight ruby %}
gem 'carrierwave'
{% endhighlight %}


In the terminal run:

{% highlight sh %}
bundle
{% endhighlight %}

Now we can generate the code for handling uploads. In the terminal run:

{% highlight sh %}
rails generate uploader Picture
{% endhighlight %}

At this point you need to **restart the Rails server process** in the terminal.

Hit <kbd>Ctrl</kbd>+<kbd>C</kbd> in the terminal to quit the server. Once it has stopped, you can press the up arrow to get to the last command entered, then hit enter to start the server again.

This is needed for the app to load the added library.

Open `app/models/place.rb` and add

{% highlight ruby %}
mount_uploader :picture, PictureUploader
{% endhighlight %}

Open `app/views/places/_form.html.erb` and change

{% highlight erb %}
<%= f.text_field :picture %>
{% endhighlight %}

to

{% highlight erb %}
<%= f.file_field :picture %>
{% endhighlight %}

Sometimes, you might get an *TypeError: can't cast ActionDispatch::Http::UploadedFile to string*.

If this happens, in file `app/views/places/_form.html.erb` change the line

{% highlight erb %}
<%= form_for(@place) do |f| %>
{% endhighlight %}

to

{% highlight erb %}
<%= form_for @place, :html => {:multipart => true} do |f| %>
{% endhighlight %}

Now if you run your server, and try adding a new place with a picture, you'll notice that the picture doesn't look nice because it only shows a path to the file. Let's fix that.

Open `app/views/places/show.html.erb` and change

{% highlight erb %}
<%= @place.picture %>
{% endhighlight %}

to

{% highlight erb %}
<%= image_tag(@place.picture_url, :width => 600) if @place.picture.present? %>
{% endhighlight %}

Now refresh your browser to see what changed.

**Coach:** Talk a little about HTML.

__Coach__: Explain what specifying the image width in HTML at the end of Step
4 does and how it differs from resizing images on the server.

## Installing ImageMagick

* OS X: run `brew install imagemagick`. If you don't have the brew command, you can [install Homebrew here][in-homebrew].
* Windows: download and run the [ImageMagick installer][im-win] (use the first
  *download* link). Reopen your Rails Command Shell afterwards.
* Linux: On Ubuntu and Debian, run `sudo apt-get install imagemagick`. Use the
  appropriate package manager instead of `apt-get` for other distributions.

  [im-win]: http://www.imagemagick.org/script/binary-releases.php?ImageMagick=vkv0r0at8sjl5qo91788rtuvs3#windows
  [in-homebrew]: http://mxcl.github.io/homebrew/

__Coach__: What is ImageMagick and how is it different from libraries/gems we
used before?

Open `Gemfile` in the project and add

{% highlight ruby %}
gem 'mini_magick', '3.5.0'
{% endhighlight %}

In the Terminal run:

{% highlight sh %}
bundle
{% endhighlight %}

## Telling our app to create thumbnails when an image is uploaded

Open `app/uploaders/picture_uploader.rb` and find the line that looks like
this:

{% highlight ruby %}
  # include CarrierWave::MiniMagick
{% endhighlight %}

Remove the `#` sign.

__Coach__: Explain the concept of comments in code.

Below the line you just changed, add:

{% highlight ruby %}
version :thumb do
  process :resize_to_fill => [50, 50]
end
{% endhighlight %}

The images uploaded from now on should be resized, but the ones we already
have weren't affected. So edit one of the existing places and re-add a picture.

## Displaying the thumbnails

To see if the uploaded picture was resized open
`app/views/places/index.html.erb`. Change the line

{% highlight erb %}
<td><%= place.picture %></td>
{% endhighlight %}

to

{% highlight erb %}
<td><%= image_tag place.picture_url(:thumb) if place.picture? %></td>
{% endhighlight %}

Take a look at the list of ideas in the browser to see if the thumbnail is
there.

