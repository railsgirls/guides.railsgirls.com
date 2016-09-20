---
layout: default
title: Thumbnails em listas de ideas
permalink: thumbnails
---

# Criando thumbnails com Carrierwave

*Criado por Miha Filej, [@mfilej](https://twitter.com/mfilej)*

__Coach__:Explicar qual o efeito de se definir a largura de uma imagem na marcação HTML como explicado no passo 4
 e qual a diferença para o redimensionamento de imagem no servidor.

## *1.*Instalando ImageMagick

* OS X: rode `brew install imagemagick`. Se o comando brew não estiver disponível no seu terminal, instale [install Homebrew here][in-homebrew].
* Windows: faça o download e rode o [ImageMagick installer][im-win] (use o primeiro link do  *download* ).
* Linux: em Ubuntu e Debian, rode `sudo apt-get install imagemagick`. Use o gerenciador de package apropriado em lugar de `apt-get` para as demais distribuições Linux.

  [im-win]: http://www.imagemagick.org/script/binary-releases.php?ImageMagick=vkv0r0at8sjl5qo91788rtuvs3#windows
  [in-homebrew]: http://mxcl.github.io/homebrew/

__Coach__: O que é ImageMagick e qual a diferença para outras bibliotecas/gems que já usamos anteriormente?

Abra `Gemfile` no seu projeto e acrescente o seguinte:

{% highlight ruby %}
gem 'mini_magick', '3.8.0'
{% endhighlight %}

logo após a linha

{% highlight ruby %}
gem 'carrierwave'
{% endhighlight %}

No Terminal rode:

{% highlight sh %}
bundle
{% endhighlight %}

## *2.*Dizendo para a app criar um thumbnail quando uma imagem for enviada ao servidor

Abra `app/uploaders/picture_uploader.rb` e encontre a linha conforme mostrada a seguir:

{% highlight ruby %}
  # include CarrierWave::MiniMagick
{% endhighlight %}

Remova o sinal `#`.

__Coach__: Explicar o uso e finalidades da inserção de comentários nos códigos.

Logo após a linha que você acabou de descomentar acrescente o seguinte:

{% highlight ruby %}
version :thumb do
  process :resize_to_fill => [50, 50]
end
{% endhighlight %}

A partir de agora as imagens enviadas ao servidor serão redimensionadas para criar thumbnails, contudo aquelas já existentes no servidor não serão afetadas. Edite uma das ideas já existentes e reenvie a imagem para o servidor.

## *3.*Mostrando thumbnails

Para verificar se uma imagem enviada ao servidor foi redimensionada abra 
`app/views/ideas/index.html.erb`. Altere a linha

{% highlight erb %}
<td><%= idea.picture %></td>
{% endhighlight %}

para

{% highlight erb %}
<td><%= image_tag idea.picture_url(:thumb) if idea.picture? %></td>
{% endhighlight %}

Dê uma olhada na lista das ideas, no navegador, para verificar se o thumbnail está ali.



