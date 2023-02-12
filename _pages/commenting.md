---
layout: main_guide
title: Add commenting functionality to your app
permalink: commenting
---

# Add comments to your app

{% include main-guide-intro.html %}

We are going to add the possibility to comment on ideas in your *railsgirls* application. Comments are short messages that people can leave on websites. In this guide we'll be relying less on the Rails generators to create scaffolding. We'll be writing more Ruby code to implement this feature.

## Add comment routes

We'll start by creating a new route for the comments. This will be nested under the ideas routes, so we can derive which idea the comment belongs to from the route.

Open the `config/routes.rb` file. Change the following line:

{% highlight ruby %}
resources :ideas
{% endhighlight %}

to these lines:

{% highlight ruby %}
resources :ideas do
  resources :comments
end
{% endhighlight %}

## Create comment model

Next up, creating a comment model, like we did with the ideas before, but without the controller and a bunch of other things. In this guide we'll be making more changes ourselves, rather than relying on generated code.

The command below will create a Comment model with a name, message body and with a reference to the ideas table. The latter will make it possible to leave comments on a specific idea, so they won't show on other idea pages.

{% highlight sh %}
rails generate model comment user_name:string body:text idea:references
{% endhighlight %}

A migration file has also been created. It lets your database know about the new comments table. Run the migrations using this command:

{% highlight sh %}
rails db:migrate
{% endhighlight %}

## Add relations to models

Your app needs to knows about the relation between the two objects, ideas and comments, so you can fetch only the comments that belong to a specific idea. One idea can have many comments, but a comment can only belong to one idea.

Open `app/models/idea.rb` and below the line:

{% highlight ruby %}
class Idea < ApplicationRecord
{% endhighlight %}

add this line to tell it there can be many comments attached to the Idea model:

{% highlight ruby %}
has_many :comments
{% endhighlight %}

The comment also has to know that it belongs to an idea. Open the `app/models/comment.rb` file. You'll find the following contents:

{% highlight ruby %}
class Comment < ApplicationRecord
  belongs_to :idea
end
{% endhighlight %}

The comment already knows it "belongs to" an idea because of the line `belongs_to :idea`, which references back to the `Idea` model. This was automatically added by the migration we made earlier.

## Loading comments from the database

In `app/controllers/ideas_controller.rb` find the line that says `def show`. This is what we call a Ruby method, and it is responsible for loading things from the database to be used in the views (files with HTML we've edited before).

Change the `show` method so that it looks like this:

{% highlight ruby %}
def show
  @comments = @idea.comments
end
{% endhighlight %}

This will load the comments that belong a specific idea object from the database. We can then access the comments using the `@comments` instance variable in the view later.

## Making a comments controller

To store comments in the database, and remove them again later, we'll need a Rails controller. Like the IdeasController, this controller will perform databases queries, but for comments instead.

Create a file in the `app/controllers/` directory named `comments_controller.rb`.

<div class="os-specific">
  <div class="mac nix">
{% highlight sh %}
touch app/controllers/comments_controller.rb
{% endhighlight %}
  </div>
  <div class="win">
{% highlight sh %}
ni app/controllers/comments_controller.rb
{% endhighlight %}
  </div>
</div>

Open the file you just created in your Text Editor, it should be empty, and copy-paste in this code:

{% highlight ruby %}
class CommentsController < ApplicationController
  before_action :set_idea, only: %i[create]
  before_action :set_comment, only: %i[destroy]

  def create
    @comment = @idea.comments.new(comment_params)

    if @comment.save
      redirect_to idea_path(@idea), notice: "Comment was successfully created."
    else
      render :new, status: :unprocessable_entity
    end
  end

  def destroy
    @comment.destroy

    redirect_to comments_url, notice: "Comment was successfully destroyed."
  end

  private

  def set_idea
    @idea = Idea.find(params[:idea_id])
  end

  def set_comment
    @comment = @idea.comments.find(params[:id])
  end

  def comment_params
    params.require(:comment).permit(:user_name, :body)
  end
end
{% endhighlight %}

This controller will listen to requests to create and delete (destroy) comments. When it receives such a request, it will tell the database what to store or remove, and redirect you back to the page you came from. But first, let's make the pages that will talk to this controller.

__COACH:__ Explain how controllers work and interact with HTTP requests, models and views.

## Display the comments

We can the relationship between ideas and comments to fetch them from the database and show them in your app.

Open `app/views/ideas/show.html.erb` and at the very bottom add these lines:

{% highlight erb %}
<h2>Comments</h2>
<% if @comments.any? %>
  <% @comments.each do |comment| %>
    <div>
      <p><strong><%= comment.user_name %></strong></p>
      <p><%= comment.body %></p>
      <%= button_to "Destroy this comment", comment_path(comment), method: :delete, class: "btn btn-danger", form: { data: { turbo_confirm: "Are you sure?" } } %>
    </div>
  <% end %>
<% else %>
  <p>No comments found.</p>
<% end %>

<h2>Add a new comment</h2>
<%= render partial: "comments/form", locals: { comment: @comment } %>
{% endhighlight %}

This code will show the comments, but first we'll need a way to create comments. For that the last two lines render a comment submission form, which we'll create next.

## Create the comment form

To submit the form, we need to create a file with the form, so that it can be displayed.

Create a new directory in the `app/views/` directory named `comments/`.
Then, in that new directory, create a new file called `_form.html.erb`.

<div class="os-specific">
  <div class="mac nix">
{% highlight sh %}
mkdir -p app/views/comments/
touch app/views/comments/_form.html.erb
{% endhighlight %}
  </div>
  <div class="win">
{% highlight sh %}
md app/views/comments/
ni app/views/comments/_form.html.erb
{% endhighlight %}
  </div>
</div>

In this new file copy-paste these lines:

{% highlight erb %}
<%= form_with(model: [idea, idea.comments.build]) do |form| %>
  <div class="mb-3">
    <%= form.label :user_name, "Your name", class: "form-label" %>
    <%= form.text_field :user_name, class: "form-control" %>
  </div>

  <div class="mb-3">
    <%= form.label :body, "Comment message", class: "form-label" %>
    <%= form.text_area :body, class: "form-control" %>
  </div>

  <%= form.submit class: "btn btn-primary" %>
<% end %>
{% endhighlight %}

When you refresh your browser, the idea detail page should now have a form for adding a comment. Fill in your name and add a message. Then click the "Create comment" button. It should now say "Comment was successfully created." at the top of the page in green.

Congratulations! Your app now supports comments. We've added a new models for comments, named `Comment`, which talks to the database to store these comments. A new `CommentsController` controller that tells the model what to do, creating or deleting comments. The views are updated to show the comments per idea, create new comments with the form and delete them again with the delete buttons.

If you're interested, check out the detail page of a different idea. If all goes well, you should not be seeing the same comments on that idea detail page as the other one.
