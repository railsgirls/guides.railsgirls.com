---
layout: default
title: Show thumbnails when listing ideas
permalink: thumbnails
---

# Create thumbnails with Carrierwave

*Created by Miha Filej, [@mfilej](https://twitter.com/mfilej)*

__Coach__: Explain what specifying the image width in HTML at the end of Step
4 does and how it differs from resizing images on the server.

## *1.*Installing ImageMagick

* OS X: run `brew install imagemagick`. If you don't have the brew command, you can [install Homebrew here][in-homebrew].
* Windows: download and run the [ImageMagick installer][im-win] (use the first
  *download* link). In the installation wizard, make sure you check the checkbox
  to install legacy binaries.
* Linux: On Ubuntu and Debian, run `sudo apt-get install imagemagick`. Use the
  appropriate package manager instead of `apt-get` for other distributions.

  [im-win]: http://www.imagemagick.org/script/binary-releases.php?ImageMagick=vkv0r0at8sjl5qo91788rtuvs3#windows
  [in-homebrew]: http://mxcl.github.io/homebrew/

__Coach__: What is ImageMagick and how is it different from libraries/gems we
used before?

Open `Gemfile` in the project and add

{% highlight ruby %}
gem 'mini_magick', '3.8.0'
{% endhighlight %}

under the line

{% highlight ruby %}
gem 'carrierwave'
{% endhighlight %}

In the Terminal run:

{% highlight sh %}
bundle
{% endhighlight %}

## *2.*Telling our app to create thumbnails when an image is uploaded

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
have weren't affected. So edit one of the existing ideas and re-add a picture.

## *3.*Displaying the thumbnails

To see if the uploaded picture was resized open
`app/views/ideas/index.html.erb`. Change the line

{% highlight erb %}
<%= image_tag idea.picture_url, width: '100%' if idea.picture.present? %>
{% endhighlight %}

to

{% highlight erb %}
<%= image_tag idea.picture_url(:thumb) if idea.picture.present? %>
{% endhighlight %}

Take a look at the list of ideas in the browser to see if the thumbnail is
there.
