---
layout: default
title: Adicione estilo usando Twitter Bootstrap
permalink: bootstrap
---

# Adicione estilo usando Twitter Bootstrap

*Traduzido de [Twitter Bootstrap for Rails 4, 3.x Asset Pipeline](https://github.com/seyhunak/twitter-bootstrap-rails){:target="_blank"}*

O Twitter Bootstrap é um framework css que vai facilitar e acelerar a estilização da nossa aplicação. Ele inclui CSS, HTML e JS para tipografia, formulários, botões, tabelas, navegação etc.
A maneira mais fácil para utilizá-lo na nossa aplicação é através da gem [twitter-bootstrap-rails](https://github.com/seyhunak/twitter-bootstrap-rails){:target="_blank"} que integra o *Twitter Bootstrap* no [Rails Asset Pipeline](http://guides.rubyonrails.org/asset_pipeline.html){:target="_blank"}.

Você pode usar a gem de 2 maneiras:

  1. Instalando as folhas de estilo CSS disponíveis no [site oficial](http://getbootstrap.com/){:target="_blank"}

  2. Instalando as folhas de estilo Less, que permitem customização como modificar cores do tema e algumas outras funcionalidades.
  É necessário instalar a gem less-rails e therubyracer (indisponível no Windows).

## *1.1* Instalando as folhas de estilo CSS

Adicione a seguinte linha ao seu `Gemfile`:

{% highlight ruby %}
  gem "twitter-bootstrap-rails"
{% endhighlight %}

E execute no terminal:

{% highlight sh %}
  bundle install #instala as gem definidas no Gemfile
{% endhighlight %}

Em seguida, execute o generator:

{% highlight sh %}
  rails generate bootstrap:install static
{% endhighlight %}

## *1.2* Instalando as folhas de estilo Less

Adicione a seguinte linha ao seu `Gemfile`:

{% highlight ruby %}
gem "therubyracer"
gem "less-rails"
gem "twitter-bootstrap-rails"
{% endhighlight %}

E execute no terminal:

{% highlight sh %}
  bundle install #instala as gem definidas no Gemfile
{% endhighlight %}

Em seguida, execute o generator:

{% highlight sh %}
  rails generate bootstrap:install less
{% endhighlight %}

Você precisa incluir o Bootstrap Less `bootstrap_and_overrides.css.less` no seu `application.css`:

 {% highlight css %}
    /*
    *= require bootstrap_and_overrides
    */
    /* Demais folhas de estilo a seguir... */
  {% endhighlight %}

## *2.1.* Incluindo Javascript

Inclua o Bootstrap JS (bootstrap.js) no seu `application.js`:

{% highlight javascript %}
//= require twitter/bootstrap
$(function(){
  /* Seu código javascript vai aqui... */
});
{% endhighlight %}

## *2.2* Incluindo Coffeescript

Usar Bootstrap com CoffeeScript e fácil. A gem *twitter-bootstrap-rails* gera um arquivo `bootstrap.js.coffee` na sua pasta `/app/assets/javascripts/`:

{% highlight javascript %}
jQuery ->
  $("a[rel~=popover], .has-popover").popover()
  $("a[rel~=tooltip], .has-tooltip").tooltip()
{% endhighlight %}

## *3* Gerando layouts e views(scaffold)

  Exemplo:

  {% highlight sh %}
    rails g scaffold Post title:string description:text #gera scaffold para o recurso Post
    rake db:migrate #executa a migração no banco de dados
    rails g bootstrap:themed Posts #cria a view com tema para Post (deve estar no plural o recurso)
  {% endhighlight %}
