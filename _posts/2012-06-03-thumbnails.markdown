---
layout: default
title: Show thumbnails when listing ideas
permalink: thumbnails
---

# Create thumbnails with Carrierwave

*Created by Miha Filej, [@mfilej](https://twitter.com/mfilej)*

__Coach__: Explain what specifying the image width in HTML at the end of Step
4 does and how it differs from resizing images on the server.

## Installing ImageMagick

* OS X: download and run one of the [ImageMagick installers][im-osx] depending
  on the version of your operating system (take a look at [Step 2][step2] to
  see which one is right for you -- choose *Lion* if you have 10.7 or
  *Leopards* if you have 10.5 or 10.6).
* Windows: download and run the [ImageMagick installer][im-win] (use the first
  *download* link).
* Linux: On Ubuntu and Debian, run `sudo apt-get install imagemagick`. Use the
  appropriate package manager instead of `apt-get` for other distributions.

  [im-osx]: http://cactuslab.com/imagemagick/
  [step2]:  http://guides.railsgirls.com/install/#setup_for_os_x_old
  [im-win]: http://www.imagemagick.org/script/binary-releases.php?ImageMagick=vkv0r0at8sjl5qo91788rtuvs3#windows

__Coach__: What is ImageMagick and how is it different from libraries/gems we
used before?

Open `Gemfile` in the project and add

{% highlight ruby %}
gem 'mini_magick'
{% endhighlight %}

under the line

{% highlight ruby %}
gem 'carrierwave'
{% endhighlight %}

In the Terminal/Command Prompt run:

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
have weren't affected. So edit one of the existing ideas and re-add a picture.

## Displaying the thumbnails

To see if the uploaded picture was resized open
`app/views/ideas/index.html.erb`. Change the line 

{% highlight erb %}
<td><%= idea.picture %></td>
{% endhighlight %}

to

{% highlight erb %}
<td><%= image_tag idea.picture_url(:thumb) if idea.picture? %></td>
{% endhighlight %}

Take a look at the list of ideas in the browser to see if the thumbnail is
there.
