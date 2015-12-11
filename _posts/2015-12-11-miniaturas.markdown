---
layout: default
title: Crie miniaturas com Carrierwave
permalink: miniaturas
---

# Crie miniaturas com Carrierwave

*Traduzido e adaptado de [Create thumbnails with Carrierwave](http://guides.railsgirls.com/thumbnails/){:target="_blank"}*

Em um tutorial [anterior]({{  site.baseurl | append: "/rails-girls-app-tutorial-1" }}){:target="_blank"}, utilizamos a gem [Carrierwave](https://github.com/carrierwaveuploader/carrierwave){:target="_blank"} para fazer upload de imagens para nossa aplicação. Agora a utilizaremos para gerar miniaturas das imagens enviadas.

**Coach**: Explique a diferença entre especificar a largura da imagem no HTML ao final do [passo 4]({{  site.baseurl | append: "/rails-girls-app-tutorial-1#adicionar-upload-de-imagens" }}){:target="_blank"} e como isso difere de redimensionar as imagens no servidor.

## *1.*Instalando ImageMagick

Para conseguirmos realizar transformações na imagens enviadas, é necessário instalar o [ImageMagick](http://www.imagemagick.org/script/index.php){:target="_blank"}

### *1.1.* OS X

 Execute:
{% highlight sh %}
 brew install imagemagick
{% endhighlight %}

Caso não possua o comando `brew` instale o [Homebrew]({{  site.baseurl | append: "/instalacao#instalao-homebrewhttpbrewsh"}}){:target="_blank"}

Para verificar se a instalação foi executada com sucesso, basta executar:

{% highlight sh %}
 convert -version
{% endhighlight %}

Que deve exibir algo parecido com:

{% highlight sh %}
Version: ImageMagick 6.8.9-9 Q16 x86_64 2015-01-06 http://www.imagemagick.org
Copyright: Copyright (C) 1999-2014 ImageMagick Studio LLC
Features: DPC Modules OpenMP
Delegates: bzlib djvu fftw fontconfig freetype jbig jng jpeg lcms lqr ltdl lzma openexr pangocairo png tiff wmf x xml zlib
{% endhighlight %}

### *1.2.* Windows

Baixe o [Instalador ImageMagick](http://www.imagemagick.org/script/binary-releases.php#windows){:target="_blank"} e o execute.

### *1.3.* Linux

#### *1.3.1.* No Ubuntu e Debian

{% highlight sh %}
sudo apt-get install imagemagick
{% endhighlight %}

Para verificar se a instalação foi executada com sucesso, basta executar:

{% highlight sh %}
 convert -version
{% endhighlight %}

Que deve exibir algo parecido com:

{% highlight sh %}
Version: ImageMagick 6.8.9-9 Q16 x86_64 2015-01-06 http://www.imagemagick.org
Copyright: Copyright (C) 1999-2014 ImageMagick Studio LLC
Features: DPC Modules OpenMP
Delegates: bzlib djvu fftw fontconfig freetype jbig jng jpeg lcms lqr ltdl lzma openexr pangocairo png tiff wmf x xml zlib
{% endhighlight %}

#### *1.3.2.* No Fedora

{% highlight sh %}
yum install ImageMagick
{% endhighlight %}

Para verificar se a instalação foi executada com sucesso, basta executar:

{% highlight sh %}
 convert -version
{% endhighlight %}

Que deve exibir algo parecido com:

{% highlight sh %}
Version: ImageMagick 6.8.9-9 Q16 x86_64 2015-01-06 http://www.imagemagick.org
Copyright: Copyright (C) 1999-2014 ImageMagick Studio LLC
Features: DPC Modules OpenMP
Delegates: bzlib djvu fftw fontconfig freetype jbig jng jpeg lcms lqr ltdl lzma openexr pangocairo png tiff wmf x xml zlib
{% endhighlight %}

**Coach**: Explique que é o ImageMagick e como ele difere das bibliotecas/gems que utilizamos anteriormente

Abra o `Gemfile` do projeto e adicione a gem [MiniMagick](https://github.com/minimagick/minimagick){:target="_blank"}:

{% highlight ruby %}
gem 'mini_magick'
{% endhighlight %}

Abaixo da linha:

{% highlight ruby %}
gem 'carrierwave'
{% endhighlight %}

No terminal execute:

{% highlight sh %}
bundle
{% endhighlight %}

## *2.* Dizendo a nossa aplicação como criar miniaturas quando é feito upload de uma imagem

Abra o arquivo `app/uploaders/picture_uploader.rb` e encontre a seguinte linha:

{% highlight ruby %}
  # include CarrierWave::MiniMagick
{% endhighlight %}

Remova o `#`. O símbolo `#` indica comentários em Ruby, nesse caso estamos descomentando uma linha.  

**Coach**: Explique o conceito de comentários em código.

Abaixo da linha que você acabou de editar, adicione:

{% highlight ruby %}
version :thumb do
  process :resize_to_fill => [50, 50]
end
{% endhighlight %}

No *Carrierwave* é possível [definir múltiplas versões para uma mesma imagem](https://github.com/carrierwaveuploader/carrierwave#adding-versions){:target="_blank"}, com resoluções diferentes, por exemplo.

Para os próximos uploads de imagens, elas serão redimensionadas, no entanto as já adicionadas não serão afetadas. Para corrigi-las basta readicionar imagens às idéias previamente criadas.

## *3.* Exibindo as minitaturas

Para verificar se a imagem enviada foi redimensionada, abra o arquivo `app/views/ideas/index.html.erb` e modifique a linha:

{% highlight erb %}
<td><%= image_tag idea.picture if idea.picture? %></td>
{% endhighlight %}

Para:

{% highlight erb %}
<td><%= image_tag idea.picture_url(:thumb) if idea.picture? %></td>
{% endhighlight %}


Agora abra no navegador na página [http://localhost:3000/ideas](http://localhost:3000/ideas){:target="_blank"} e verifique se as miniaturas estão sendo exibidas.

> Nota: Caso várias ideias já tenham sido criadas, você precisará gerar suas miniaturas executando os seguintes comandos:

{% highlight ruby %}
rails console
Idea.all.each { |idea| idea.picture.recreate_versions! }
{% endhighlight %}
