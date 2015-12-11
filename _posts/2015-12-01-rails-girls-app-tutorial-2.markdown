---
layout: default
title: Rails Girls App Tutorial 2
permalink: rails-girls-app-tutorial-2
---
# Rails Girls App Tutorial 2

*Traduzido e adaptado de [Commenting for Rails Girls App](http://guides.railsgirls.com/commenting/){:target="_blank"}*

Nós vamos adicionar uma área de comentários à nossa aplicação *railsgirls*.

Instruções sobre como instalar o Rails e construir a aplicação podem ser encontradas [aqui]({{  site.baseurl | append: "/rails-girls-app-tutorial-1" }}){:target="_blank"}.

## *1.* Criar o comment scaffold

Os seguintes comandos criarão um `comment` scaffold, com o nome da pessoa que comentou, o corpo do comentário (seu conteúdo) e uma referência à tabela ideas (`idea_id`):

{% highlight sh %}
rails g scaffold comment user_name:string body:text idea_id:integer # Também criará um arquivo de migração que cria a tabela comments no banco de dados
rake db:migrate # Executa as migrações no banco de dados
{% endhighlight %}

## *2.* Adicionar relacionamentos aos models

Você precisa ser certificar que o Rails conhece o relacionamento entre os objetos `ideas` e `comments`.
Como uma idéia pode ter vários comentários, nós precisamos de alguma forma dizer isso ao *model* **`Idea`**.
Para isso, abra o arquivo `app/models/idea.rb` e insira o código abaixo da seguinte linha:

{% highlight ruby %}
class Idea < ActiveRecord::Base
{% endhighlight %}

Adicione:

{% highlight ruby %}
has_many :comments
{% endhighlight %}

Um comentário também precisa saber a qual idéia ele se refere. Abra o arquivo `app/models/comment.rb` e após:

{% highlight ruby %}
class Comment < ActiveRecord::Base
{% endhighlight %}

Insira a linha:

{% highlight ruby %}
belongs_to :idea
{% endhighlight %}

## *3.* Exibir o formulário de comentário e os comentários existentes

Abra o arquivo `app/views/ideas/show.html.erb` e após a **image_tag**:

{% highlight erb %}
<%= image_tag(@idea.picture_url, width: 600) if @idea.picture.present? %>
{% endhighlight %}

Adicione:

{% highlight erb %}
<h3>Comments</h3>
<% @comments.each do |comment| %>
  <div>
    <strong><%= comment.user_name %></strong>
    <br />
    <p><%= comment.body %></p>
    <p><%= link_to 'Delete', comment_path(comment), method: :delete, data: { confirm: 'Você tem certeza?' } %></p>
  </div>
<% end %>
<%= render 'comments/form' %>
{% endhighlight %}

Em `app/controllers/ideas_controller.rb` adicione a *action* **show** abaixo da linha seguinte:

{% highlight ruby %}
@idea = Idea.find(params[:id])
{% endhighlight %}

Adicione:

{% highlight ruby %}
@comments = @idea.comments.all
@comment = @idea.comments.build
{% endhighlight %}

Abra `app/views/comments/_form.html.erb` e após:

{% highlight erb %}
  <div class="field">
    <%= f.label :body %><br />
    <%= f.text_area :body %>
  </div>
{% endhighlight %}

Adicione a linha:

{% highlight erb %}
<%= f.hidden_field :idea_id %>
{% endhighlight %}

Em seguida, remova:

{% highlight erb %}
<div class="field">
  <%= f.label :idea_id %><br>
  <%= f.number_field :idea_id %>
</div>
{% endhighlight %}

E é isso. Agora visualize uma idéia que você inseriu na sua aplicação e se você conseguiu visualizar o formulário para inserir um comentário. Verifique se você também consegue remover comentários antigos.

## *4.* Aprenda mais

* [Active Record Associations](http://guides.rubyonrails.org/association_basics.html)
