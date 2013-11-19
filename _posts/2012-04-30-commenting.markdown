---
layout: default
title: Commenting functionality for the Rails Girls app
permalink: commenting
---
# Commenting for Rails Girls App
*Created by Janika Liiv, [@janikaliiv](https://twitter.com/janikaliiv)*

We are going to add the possibility to comment ideas in your *railsgirls* application.

The instructions for installing rails and building the ideas app can be found [here](/app)

## Step 1: Add foreigner gem

Add to Gemfile
{% highlight ruby %}
gem 'foreigner'
{% endhighlight %}

In your terminal stop the server if it's running and type
{% highlight sh %}
bundle install
{% endhighlight %}

## Step 2: Create comment scaffold

Create comment scaffold, with the commentator name, the comment body (contents of the comment) and with the reference to the ideas table (idea_id). 
{% highlight sh %}
rails g scaffold comment user_name:string body:text idea_id:integer
{% endhighlight %}

## Step 3: Add foreign key connections
Add to migration the foreign key connection. Open db/migrate/ and the file, which name ends with 'create_comments.rb'. After
{% highlight ruby %}
t.timestamps
end
{% endhighlight %}

add
{% highlight ruby %}
add_foreign_key :comments, :ideas
{% endhighlight %}

Now migrate the database changes by typing in your terminal
{% highlight sh %}
rake db:migrate
{% endhighlight %}

start your server with:
{% highlight sh %}
rails s
{% endhighlight %}

## Step 4: Add relations to models

You need to make sure that Rails knows the connection between objects (ideas and comments). 
As one idea can have many comments we need to make sure the idea model knows that. 
Open app/models/idea.rb and after the row
{% highlight ruby %}
class Idea < ActiveRecord::Base
{% endhighlight %}
add
{% highlight ruby %}
has_many :comments
{% endhighlight %}

The comment also has to know that it belongs to an idea.So open app/models/comment.rb and after
{% highlight ruby %}
class Comment < ActiveRecord::Base
{% endhighlight %}

add the row
{% highlight ruby %}
belongs_to :idea
{% endhighlight %}

## Step 5: Render the comment form and existing comments

Open app/views/ideas/show.html and after the image_tag
{% highlight erb %}
<%= image_tag(@idea.picture_url, :width => 600) if @idea.picture.present? %>
{% endhighlight %}

add
{% highlight erb %}
<h3>Comments</h3>
<% @idea.comments.each do |comment| %>
  <div>
    <strong><%= comment.user_name %></strong>
    <br />
    <p><%= comment.body %></p>
  </div>
<% end %>
<%= render 'comments/form' %>
{% endhighlight %}

In app/controllers/ideas_controller.rb add to show action after the row
{% highlight ruby %}
@idea = Idea.find(params[:id])
{% endhighlight %}

this
{% highlight ruby %}
@comment = @idea.comments.build
{% endhighlight %}

Open app/views/comments/_form.html and after
{% highlight erb %}
  <div class="field">
    <%= f.label :body %><br />
    <%= f.text_area :body %>
  </div>
{% endhighlight %}


add the row
{% highlight erb %}
<%= f.hidden_field :idea_id %>
{% endhighlight %}
That's it. Now view an idea you have inserted to your application and there you should see the form for inserting a comment
