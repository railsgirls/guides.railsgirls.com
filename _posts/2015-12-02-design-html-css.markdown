---
layout: default
title: Adicione estilo usando HTML e CSS
permalink: design-html-css
---

# Adicione estilo usando HTML e CSS

*Traduzido e adaptado de [Add design using HTML & CSS](http://guides.railsgirls.com/design){:target="_blank"}*

Agora vamos tentar melhorar a aparência da nossa aplicação. Vamos adicionar um pouco de estilo para que a nossa aplicação pareça mais profissional. Quando você terminar esse tutorial, sua aplicação ficará dessa maneira [aqui](http://railsgirlsapp.herokuapp.com/ideas).

## *1.* Ajustar o layout da aplicação

Abra o arquivo `app/assets/stylesheets/application.css` e substitua a seguinte linha:

{% highlight html %}
body { padding-top: 100px; }
{% endhighlight %}

Por:

{% highlight html %}
body { padding-top: 60px; }
{% endhighlight %}

Finalmente delete o arquivo `app/assets/stylesheets/scaffolds.scss` pois ele foi gerado automaticamente pelo Rails e nós não precisaremos mais dele.

Agora atualize a página em [http://localhost:3000/ideas](http://localhost:3000/ideas){:target="_blank"}. Você não perceberá muitas mudanças mais é uma boa preparação para os pŕoximos passos.

## *2.* Melhore a navegação

Considerando que uma *idéia* é o objeto mais importante na nossa aplicação, nós colocaremos o botão "Nova Idéia" na barra de navegação para torná-lo sempre disponível.

Abra o arquivo `app/views/layouts/application.html.erb` e abaixo da seguinte linha:

{% highlight erb %}
<li class="active">
  <a href="/ideas">Ideas</a>
</li>
{% endhighlight %}

Adicione:

{% highlight erb %}
<li><%= link_to 'Nova Idéia', new_idea_path %></li>
{% endhighlight %}

## *3.* Melhore a aparência da lista de idéias

Agora melhoraremos a aparência da nossa lista de idéias para que ela se torne um pouco mais profissional. Para isso trocaremos o layout de *table* por um outro usando *div*

**Coach:** Explique a diferença de *table* e *div*.

Abra o arquivo `app/views/ideas/index.html.erb` no seu editor de texto e substitua todas as linhas por:

{% highlight erb %}
<h1>lista de idéias</h1>
<% @ideas.in_groups_of(3) do |group| %>
  <div class="row">
    <% group.compact.each do |idea| %>
      <div class="col-md-4">
        <%= image_tag idea.picture_url, width: '100%' if idea.picture.present?%>
        <h4><%= link_to idea.name, idea %></h4>
        <%= idea.description %>
      </div>
    <% end %>
  </div>
<% end %>
{% endhighlight %}

**Coach:**  Explique o novo código linha a linha e fale um pouco sobre o grid system do Twitter Bootstrap.

Agora atualize a página no seu navegador! Temos um layout melhorado da nossa lista de idéias. Clique no botão `Nova Idéia`, e crie mais idéias com descrição e fotos bonitas, a nossa página ficará ainda mais bonita com conteúdo.

## *4.* Melhore a aparência da página de detalhes de idéias

Clique no título de uma idéia e você será redirecionado a página de detalhes de uma idéia. Agora vamos melhorar o código gerado pelo scaffold do Rails.

Abra o arquivo `app/views/ideas/show.html.erb` no seu editor de texto e substitua todas as linhas por:

{% highlight erb %}
<p id="notice"><%= notice %></p>

<div class="row">
  <div class="col-md-9">
    <%= image_tag(@idea.picture_url, width: '100%') if @idea.picture.present? %>
  </div>

  <div class="col-md-3">
    <p><b>Name: </b><%= @idea.name %></p>
    <p><b>Description: </b><%= @idea.description %></p>
    <p>
      <%= link_to 'Editar', edit_idea_path(@idea) %> |
      <%= link_to 'Apagar', @idea, data: { confirm: 'Você tem certeza?' }, method: :delete %> |
      <%= link_to 'Voltar', ideas_path %>
    </p>
  </div>
</div>
{% endhighlight %}


**Coach:** Explique o que o código acima faz linha a linha
