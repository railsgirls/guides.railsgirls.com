---
layout: default
title: Adicionando Gravatar para a aplicação
permalink: gravatar
---

# Adicionando Gravatar para a aplicação

*Criado por Catherine Jones*  
*Traduzido por Anderson Fernandes, [@andersonfernandes](https://github.com/andersonfernandes)*

Este tutorial assume que você já construiu uma aplicação do Rails Girls seguindo este [tutorial](http://guides.railsgirls.com/app) e adicionou autenticação usando o [Devise](http://guides.railsgirls.com/devise/).

### Importante

Você precisa ter um endereço de e-mail cadastrado com o Gravatar para isso funcionar. Se ainda não tem, você pode ir em [gravatar.com](http://br.gravatar.com/).

## *1.* Adicione a gem Gravtastic

Abra seu gemfile e abaixo da gem `devise` adicione

{% highlight ruby %}
gem 'gravtastic'
{% endhighlight %}

No terminal rode

{% highlight sh %}
bundle install
{% endhighlight %}

Isto irá instalar a gem gravtastic. Então lembre de reiniciar seu servidor do rails.

## *2.* Configurando o Gravatar na sua aplicação

Abra `app/models/user.rb`, e adicione essas linhas

{% highlight ruby %}
include Gravtastic
gravtastic
{% endhighlight %}

logo após a primeira linha.

## *3.* Configure o Gravatar

Abra `app/views/layouts/application.html.erb` e na seção

{% highlight erb %}
<% if user_signed_in? %>
{% endhighlight %}

antes do

{% highlight erb %}
<% else %>
{% endhighlight %}

adicione

{% highlight erb %}
<%= image_tag current_user.gravatar_url %>
{% endhighlight %}

Agora abra sua aplicação no navegador e faça login com um endereço de e-mail associado com um Gravatar. Você será capaz de ver seu Gravatar.
