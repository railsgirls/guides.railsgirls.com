---
layout: default
title: Commenting functionality for the Rails Girls app
permalink: commenting
---
# Commenting for Rails Girls App
*Created by Janika Liiv, [@janikaliiv](https://twitter.com/janikaliiv)*

We are going to add the possibility to comment on ideas in your *railsgirls* application.

The instructions for installing rails and building the ideas app can be found [here](/app).

## *1.*Create comment scaffold

Create a comment scaffold, with the commentator name, the comment body (contents of the comment) and with the reference to the ideas table (`idea_id`).
{% highlight sh %}
rails g scaffold comment user_name:string body:text idea_id:integer
{% endhighlight %}
This will create a migration file that lets your database know about the new comments table. Run the migrations using
{% highlight sh %}
rails db:migrate
{% endhighlight %}

## *2.*Add relations to models

You need to make sure that Rails knows the relation between objects (ideas and comments).
As one idea can have many comments we need to make sure the idea model knows that.
Open app/models/idea.rb and below the row
{% highlight ruby %}
class Idea < ApplicationRecord
{% endhighlight %}
add
{% highlight ruby %}
has_many :comments
{% endhighlight %}

The comment also has to know that it belongs to an idea. So open `app/models/comment.rb` and below
{% highlight ruby %}
class Comment < ApplicationRecord
{% endhighlight %}

add the row
{% highlight ruby %}
belongs_to :idea
{% endhighlight %}

## *3.*Render the comment form and existing comments

Open app/views/ideas/show.html.erb and after the image_tag
{% highlight erb %}
<%= image_tag(@idea.picture_url, :width => 600) if @idea.picture.present? %>
{% endhighlight %}

add
{% highlight erb %}
<h3>Comments</h3>
<% @comments.each do |comment| %>
  <div>
    <strong><%= comment.user_name %></strong>
    <br>
    <p><%= comment.body %></p>
    <p><%= link_to 'Delete', comment_path(comment), method: :delete, data: { confirm: 'Are you sure?' } %></p>
  </div>
<% end %>
<%= render partial: 'comments/form', locals: { comment: @comment } %>
{% endhighlight %}

In `app/controllers/ideas_controller.rb` add to the show action
{% highlight ruby %}
@comments = @idea.comments.all
@comment = @idea.comments.build
{% endhighlight %}

Open `app/views/comments/_form.html.erb` and after
{% highlight erb %}
  <div class="field">
    <%= f.label :body %><br>
    <%= f.text_area :body %>
  </div>
{% endhighlight %}

add the row
{% highlight erb %}
<%= f.hidden_field :idea_id %>
{% endhighlight %}

next, remove
{% highlight erb %}
<div class="field">
  <%= f.label :idea_id %><br>
  <%= f.number_field :idea_id %>
</div>
{% endhighlight %}

That's it. Now view an idea you have inserted to your application and there you should see the form for inserting a comment as well as deleting older comments.
