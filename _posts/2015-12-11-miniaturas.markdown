---
layout: default
title: Crie miniaturas com Carrierwave
permalink: miniaturas
---

# Crie miniaturas com Carrierwave

*Traduzido e adaptado de [Create thumbnails with Carrierwave](http://guides.railsgirls.com/thumbnails/){:target="_blank"}*

No tutorial [anterior]({{  site.baseurl | append: "/rails-girls-app-tutorial-1" }}){:target="_blank"}, utilizamos a gem [Carrierwave](https://github.com/carrierwaveuploader/carrierwave){:target="_blank"} para fazer upload de imagens para nossa aplicação. Agora a utilizaremos para gerar miniaturas das imagens enviadas.

__Coach__: Explique a diferença entre especificar a largura da imagem no HTML ao final do passo 4 e como isso difere de redimensionar as imagens no servidor.


## *1.*Instalando ImageMagick

* OS X: Execute:

<%= highlight sh %>
 brew install imagemagick
<% endhighlight %>

Caso não possua o comando ´brew´ você pode instalar o Homebrew [aqui][in-homebrew].
* Windows: download and run the [ImageMagick installer][im-win] (use the first
  *download* link).
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
<td><%= idea.picture %></td>
{% endhighlight %}

to

{% highlight erb %}
<td><%= image_tag idea.picture_url(:thumb) if idea.picture? %></td>
{% endhighlight %}

Take a look at the list of ideas in the browser to see if the thumbnail is
there.
