---
layout: default
title: The Guide to the Guide
permalink: guide-to-the-guide
---

# Your guide to the Rails Girls Guide!

*Created by H Salmon to accompany the [app guide](/app).*

This guide is an accompaniment to the [Rails Girls Guide](/app) you will be using to build your first Rails application. Its purpose is to provide background information about the structure of a Rails application, Rails terminology and commands, so you can understand what is happening when you are implementing the code in the Rails Girls Guide. We hope that this guide will provide you with a way to retain what you learn over the course of this workshop, and to maintain your interest in Rails development. Welcome!

### [**1.** Creating the application](#1_create_the_application)
Commands you need to know

### [**2.** Creating Idea scaffold](#2_create_idea_scaffold)
Scaffolding, models, migrations

### [**3.** Designing](#3_design)
The design layers ( HTML, CSS, ERB)
MVC Architecture

### [**4.** Adding picture uploads](#4_add_picture_uploads)
Libraries, gems and open-source

### [**5.** Finetuning the routes](#5_finetune_the_routes)
routes, HTTP Methods: GET, POST, PUT and DELETE



## <a id="1_create_the_application">*1.* Create the application</a>

`mkdir projects` - makes a *directory* (folder) called “projects” in the folder you are currently in, most likely your home folder.
`mkdir` = **m**a**k**e **dir**ectory.

`cd projects` - navigates to the “projects” folder you just created. `cd` = **c**hange **d**irectory.

`rails new railsgirls` - creates a new Ruby on Rails application called **railsgirls** containing various auto-generated folders, in your *working directory* (the folder you are working in at the moment).

`cd railsgirls` - navigates to the “railsgirls” folder.

`ruby script\rails server` - starts a local web server on your computer. This web server is accessed through the web address [http://localhost:3000](http://localhost:3000).

“Localhost” refers specifically to your computer (considered the “local host”), from which a server is being launched. Localhost provides a way for developers to see their application in a browser and test the functionality while it is still in development.

## <a id="2_create_idea_scaffold">*2.* Create Idea scaffold</a>

### What is Rails scaffolding?

Every web application consists of many different concepts or resources (such as “users”, “ideas”, “posts”, “comments”, etc.).
Rails scaffolding is a command (`rails generate scaffold`) for introducing a new resource into your application. It generates all of the code files necessary for representing and interacting with this resource.

### What is a model?

In Rails, a model represents a definition of a resource in your application, and how it should interact with other parts of the application. Depending on the nature of the website, these resources could be users, posts, groups etc. When a model is generated, a corresponding *database table* is created. This database table contains information that represents specified attributes of the model, e.g. for a User model, there might be a ‘name’ column and an ‘email’ column, and there will be rows for each subsequent user created. In the application you are creating, these resources are ideas and the model is ‘Idea’.

{% highlight rb %}
rails generate scaffold idea name:string description:text picture:string
{% endhighlight %}

In order to create our idea model, we use the `scaffold` command which includes an argument with the singular version of the model name (`idea`), and an argument with parameters (specifications) for the model’s attributes. This means that the `idea` model corresponds to a table in the database with columns for the attributes specified in the command: `name`, `description` and `picture`. The `scaffold` command also auto-generates an `id` attribute, referred to as the `primary key`, which is used to establish relationships between database tables.

`rails generate scaffold` - this calls the scaffold command.

`idea` - this tells the scaffold command what we want to call our model.

`name:string description:text picture:string` - provides a list of attributes we want our model (and the database table that goes with it) to have. The `string` and `text` parts of the argument determine the nature of each attribute, i.e. each description needs to be ‘text’, and not, for example, an ‘integer’ (or any other type of information).

### The ideas table

<table class="table table-hover table-bordered">
	<thead>
		<tr>
			<th>id</th>
			<th>name</th>
			<th>description</th>
			<th>picture</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>1</td>
			<td>“Money-spinner”</td>
			<td>“Open a moveable shop!”</td>
			<td>“GreatIdea.jpg”</td>
		</tr>
		<tr>
			<td>2</td>
			<td>“Champagne For Breakfast!”</td>
			<td>“We should do this every Friday!”</td>
			<td>“Champagne.jpg”</td>
		</tr>
		<tr>
			<td>3</td>
			<td>...</td>
			<td>...</td>
			<td>...</td>
		</tr>
	</tbody>
</table>

### Naming conventions

#### Active Record
In Rails, the default system for communicating with an application’s database is called *Active Record*, which provides various methods for creating, saving, and finding data. To retrieve information from the database, *Active Record* establishes relationships between different parts of the application using naming conventions:

- Table names have all lowercase letters and underscores between words, e.g. “ideas”, “invoice\_items”
- The model is named using the convention of unbroken MixedCase and is always the singular of the table name, e.g. if the table name is “invoice\_items”, the model name would be “InvoiceItem”. So, in this case our table name is "ideas" and our model is "Idea".

#### Model attributes and types

As we’ve already discussed, a model can have attributes (properties) represented by columns in the corresponding database table. To be supported by the Active Record system, these attributes must conform to a list of appropriate types:

- `:binary` - stores data such as images, audio files or movies

- `:boolean` - stores true or false values (such as whether a particular user is an administrator of an application or not)

- `:date` - stores only a date (year, month, day)

- `:datetime` - stores both a date and a time

- `:decimal` - stores decimal numbers with precision that varies according to your specifications

- `:float` - stores decimal points with fixed precision i.e. you can’t specify the precision (`:decimal` is better for mathematical operations in which precision is required, but `:float` is processed faster and is better in situations where speed is required and accuracy is secondary)

- `:integer` - stores whole numbers

- `:primary_key` - the primary key of a table is assumed to be the id

- `:string` - stores 255 characters of text information, i.e. is used for short text fields (names, emails etc)

- `:text` - stores text information with no character limit (used for comments, blog posts etc)

- `:time` - stores only a time

- `:timestamp` - stores both a time and date. `:timestamp` is different from `:datetime` and serves a different purpose, but there’s no need to go into that here

### What are migrations and why do you need them?

Migrations change the state of the database. When you run the `scaffold` command, a migration file containing instructions for the database table relevant to your command is added to the `db/migrate` folder of your application. For example, when you ran the `rails generate scaffold` command, a migration containing instructions for our ideas table was created. There are other commands that create migrations such as the `rails generate model` command and the `rails generate migration` command.

The `rails db:migrate` command updates the database according to the specifications in the migration file. This command, known as “migrating up”, ensures that your idea model is added to the database. Migrations can also be undone (“migrating down”) using the command `rails db:rollback`.

## <a id="3_design">*3.* Design</a>
In a Ruby on Rails application, the user interface (what someone visiting the website will see), is often written in HTML with Embedded Ruby (ERB) code. This code is contained in a specific directory called ‘views’, located in the `app` folder of your Rails application directory.

### HTML
HTML, which stands for HyperText Markup Language, is the primary language for creating web pages and other information that can be displayed in a web browser. HTML is written using tags, angle brackets which tend to come in pairs (a “start tag” and an “end tag”), enclosing text-based content. In paired tags, the end tag also has a slash after the opening angle bracket, to distinguish it from the start tag. A paragraph (represented in HTML by the letter ‘p’) would use a start tag like this: `<p>` and an end tag like this: `</p>`, to enclose the text intended for display. Unpaired tags that are opened but don’t need to be closed (e.g. `<br>`, which defines a single line break) are known as “empty elements”. The web browser uses HTML tags to interpret how the contents will be displayed.

### ERB: Embedded Ruby
ERB is a system supplied by Ruby that allows you to insert pure Ruby code into files written in other languages, such as Javascript or HTML. The Ruby code is contained within specific angle brackets (`<%` and `%>`) which instruct the system to execute the contents. If an `=` sign accompanies the angle brackets, (`<%=` and %`>`) then the contents are executed and rendered on the page.

For example, if you had 25 active ideas in your application, the code:
`There are currently <%= Idea.count %> active ideas`
would render as:
> There are currently 25 active ideas

### MVC Architecture
In a standard Rails application (like you one you have generated), the `app/` folder of your application starts out with three folders (or directories): ‘models’ (which we have already discussed), ‘controllers’ and ‘views’. The relationship between these directories is the foundation (known as MVC Architecture) of the application, and of Rails development.

When you ran the `rails generate scaffold` command, in addition to creating the idea model, you also created an accompanying ideas controller (`ideas_controller.rb`), located in the controllers folder, and an ideas views folder containing several files that you will use to create a dynamic application.

When attempting to display a Rails website, a web browser sends a request via the server which eventually hits the Rails *controller*. *Controllers* act as mediators between the *views* and the *models*. When the *controller* receives the information, it communicates with a *model* representing a resource of the application (in our case, an “idea”) which in turn communicates with the database. Upon retrieving the required information from the *model*, the *controller* renders the *view* which returns the complete web page to the browser as HTML.

### CSS and layouts
CSS (Cascading Style Sheets) is a language used to describe the formatting of pages written in a ‘markup language’, i.e. a language for processing, defining and presenting text with a prescribed formatting code e.g. tags, that distinguish it from plain text. The most common application of CSS is in conjunction with HTML.
{% highlight css %}
body { padding-top: 100px; }
footer { margin-top: 100px; }
table, td, th { vertical-align: middle; border: none; }
th { border-bottom: 1px solid #DDD; }
{% endhighlight %}

Within the CSS you have applied:

`body` - this part is known as the selector and refers to the HTML element you wish to style.
`{ padding-top: 100px; }` - this part is known as the declaration; each declaration has a property which is the style attribute you wish to change (`padding-top`), and an associated value (`100px`). Declarations always end with a semicolon and declaration groups are always enclosed by curly brackets.

For each Rails application there is a default layout file called `application.html.erb`, located in the layouts folder of your views directory. With this file you can create a default format for all of the pages in your application.

{% highlight html %}
<link rel="stylesheet" href="http://railsgirls.com/assets/bootstrap.css">
{% endhighlight %}

In the above code, the `link rel` (link relation) is defining the nature of the URL that the `href` (hypertext reference) attribute is requesting content from. This argument indicates that the external source requested is a stylesheet and the web browser will need to fetch this file to render the page properly.

{% highlight erb %}
<%= stylesheet_link_tag "application" %>
{% endhighlight %}

This code returns a stylesheet link tag for the source, in this case “application”, i.e. `application.css`. This means that the styling you implemented in application.css will be applied to the various pages of your application.


{% highlight erb %}
<div class="container">
  <%= yield %>
</div>
{% endhighlight %}

In this code:

- The HTML `div` tag divides the code into parts.
- The *container class* adds additional styling to everything inside the div tags
- The `<%= yield %>` argument is responsible for inserting the unique content from each page into the container `div`. This means that in your application the overall layout can be consistent even though the content will differ from page to page.

## <a id="4_add_picture_uploads">*4.* Add picture uploads</a>

### Libraries
Many programming languages, including Ruby, use a wide range of libraries. In Ruby’s case, most of these libraries are released in the form of self-contained packages called *gems*, which contain all the information required to install and implement them. These gems are contained in your application’s `Gemfile` and if you look in this file you’ll notice that when you created your first Rails application it came with several gems that ensure your application functions correctly.

Gems help simplify and prevent repetition in a developer’s code, in keeping with the DRY (Don’t Repeat Yourself) principle of software development. Gems may solve specific problems, add specific functionality, or address specific requirements, meaning that should another developer encounter a similar scenario, instead of writing new code, they can install a gem containing pre-written code. For example, “CarrierWave”, the gem you are adding to your gemfile is designed to make it easy to upload files to your application.

“Bundler” is the software Ruby uses to track and manage gems. The `bundle` command runs Bundler and installs the gems specified in your Gemfile. You’ll notice the code `source 'https://rubygems.org'` at the top of your Gemfile. Whenever you add a gem to your gemfile and run the `bundle` command, this code tells your application to fetch the gem from [https://rubygems.org](https://rubygems.org). “RubyGems” is a Ruby-specific packaging system, the purpose of which is to simplify the creation, sharing and installation of gems.

### Open-source software

Both the Rails framework and the Ruby language are examples of open-source software. Open-source software is released under a licence which ensures universal access; anyone has the right to change, study and distribute the software. Making the source code accessible enables the establishment of a diverse, reflexive, collaborative and consequently ever-evolving interactive community of programmers who all benefit from each others’ developments.

### More HTML

The file `app/views/ideas/_form.html.erb` contains HTML code that determines the look and feel of the form used for editing and creating ideas (the `edit.html.erb` and `new.html.erb` views). A partial is a snippet of HTML and Ruby code that can be reused in multiple locations. The form for editing existing ideas and the form for creating new ideas will look pretty much the same, so it makes sense to have one form for both files to use. If you look in these files you’ll notice that they have a customised heading (e.g. `<h1>Editing idea</h1>`) and then they simply say `<%= render 'form' %>` which tells Rails to render the partial `_form.html.erb`.

If you take a look in the `_form.html.erb` file, you will see the code `form_for` in the first line of code. This is a block used to create an HTML form. Using this block, we can access methods to put different input fields in the form.

The code we are implementing, `<%= f.file_field :picture %>`, tells Rails to create a file input on the form and map the submitted information to the ‘picture’ attribute of an ‘idea’ in our ideas database table. We changed the code from `<%= f.text_field :picture %>` to `<%= f.file_field :picture %>` because `file_field` makes it easier for the user to select the image they wish to upload.

In the code `<%= @idea.picture %>`, `@idea` is known as an *instance variable*. Instance variables are prefixed with an @ symbol and are defined in the controller action that corresponds with the view in which they are referenced. For the purposes of the code we are implementing, `@idea` is defined in the ‘show’ action of the `Ideas` controller, with the code `@idea = Idea.find(params[:id])`. This makes it available for us to use in the view `show.html.erb`. It could be defined differently in different controller actions (e.g. index or new). The code `@idea = Idea.find(params[:id])` uses the Rails `find` method to retrieve specific ideas from the database.

The code that follows the `@idea` variable (`.picture`) tells Rails to access the ‘picture’ attribute of our resource (idea). By replacing the code  `<%= @idea.picture %>` with `<%= image_tag(@idea.picture_url...)` we are using the Ruby `image_tag` *helper* which translates to an HTML `<img>` tag (used to define images in HTML) but by default retrieves images from the folder public/images, which is where our uploaded images are stored. The `image_tag` helper also allows us to insert a block of code which creates a path to an image associated with a particular idea (`@idea.picture_url`).

You will notice that within this block of code you are implementing we are also able to set a default width for each image (`:width => 600`). The final line of code `if @idea.picture.present?` tells Rails to check the corresponding database table to see whether a picture exists before rendering the code underneath.

## <a id="5_finetune_the_routes">*5.* Finetune the routes</a>

In a functional Rails application, there is an inbuilt system in place for translating incoming requests from the browser in order to return the intended response. This system is called *routing*. Requests from the browser are interpreted as specific HTTP methods. HTTP (Hypertext Transfer Protocol) is the protocol that defines how information (usually webpages or webpage components composed of text with hyperlinks - ‘hypertext’), is formatted and transmitted across the internet. There are four primary HTTP methods, each of which is a request to perform an operation on a specific resource (e.g. users, posts); GET, POST, PUT and DELETE. Rails’ inbuilt routing system automatically generates routes for each resource that map to specific actions (index, show, new, edit, create, update, delete) defined in the controller. So, for each of our models, there are seven related actions defined in the associated controller, `ideas_controller.rb`. These actions specify the appropriate response (a ‘method’) which is most likely to render the corresponding view, e.g. `ideas/index.html.erb`.


<table class="table table-bordered table-hover">
	<thead>
		<tr>
			<td>HTTP Method</td>
			<td>Path</td>
			<td>Action</td>
			<td>used for</td>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>GET</td>
			<td>/ideas</td>
			<td>index</td>
			<td>displaying a list of all ideas</td>
		</tr>
		<tr>
			<td>GET</td>
			<td>/ideas/new</td>
			<td>new</td>
			<td>returning an HTML form for creating a new idea</td>
		</tr>
		<tr>
			<td>POST</td>
			<td>/ideas</td>
			<td>create</td>
			<td>creating a new idea</td>
		</tr>
		<tr>
			<td>GET</td>
			<td>/photos/:id</td>
			<td>show</td>
			<td>displaying a specific photo</td>
		</tr>
		<tr>
			<td>GET</td>
			<td>/photos/:id/edit</td>
			<td>edit</td>
			<td>returning an HTML form for editing a specific photo</td>
		</tr>
		<tr>
			<td>PUT</td>
			<td>/photos/:id</td>
			<td>update</td>
			<td>updating a specific photo</td>
		</tr>
		<tr>
			<td>DELETE</td>
			<td>/photos/:id</td>
			<td>destroy</td>
			<td>deleting a specific photo</td>
		</tr>
	</tbody>
</table>


If you look in your `ideas_controller.rb` you can see these actions and the associated behaviour, and the HTTP method that corresponds with each action:

{% highlight rb %}
def show
    @idea = Idea.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @idea }
    end
  end

  # GET /ideas/new
  # GET /ideas/new.json
{% endhighlight %}

`show` - the controller action

{% highlight rb %}
respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @idea }
{% endhighlight %}

(This code is difficult to dissect with much clarity at this stage but if you persist with Rails you will get a better understanding as time progresses.)

In the above definition of the show action, Rails is using a `respond_to` helper method, which tells Rails to execute the subsequent *block* of code (the code enclosed by the `do...end` syntax). This code contains two different formatting options depending on the nature of the request. If the browser requests HTML then the HTML code contained in the view that corresponds with this controller action (`show.html.erb`) is rendered. If json is requested then the view is bypassed and limited information is provided.

`GET` - this is a comment to let us know which HTTP method is being executed.

So, URL requests, translated into HTTP methods, are mapped to controller actions which tell Rails to return a view.

When we insert the code `root :to => redirect('/ideas')` into our `config.rb`, it tells Rails to make the default root of our application [http://localhost:3000/ideas](http://localhost:3000/ideas) (note Localhost is being used as the domain because our application is still in development, when you launch your application this domain will be different). This URL contains a path (`/ideas`) which, by default, maps the URL to the ‘index’ action of our ideas controller and renders the associated view; `index.html.erb`. The code `rm public/index.html` removes (`rm`) the `public/index.html` file, containing the “Welcome Aboard” code, which was the previous default root for our application.
