---
layout: default
title: Rails Girls App Tutorial
permalink: app_tutorial_1
---

# Rails Girls App Tutorial 1

*Criado por Vesa Vänskä, [@vesan](https://twitter.com/vesan)*

*Traduzido e adaptado de [Rails Girls App Tutorial](http://guides.railsgirls.com/app)*


## Verifique se você possui o Rails instalado

Antes de começar a desenvolver, siga o [Guia De Instalação](/instalacao)

## Conheça as suas ferramentas

<div class="indent" markdown="1">

<h3><i class="icon-text-editor">&nbsp;</i></h3>

### Editor de Texto

* [Atom](https://atom.io/) ou [Sublime Text](http://www.sublimetext.com)

<h3><i class="icon-prompt">&nbsp;</i></h3>

### Terminal (conhecido também como Prompt de Comando no Windows)

* Local onde você iniciará o rails server e executará outros comandos

<h3><i class="icon-browser">&nbsp;</i></h3>

### Navegador

* ([Firefox](http://br.mozdev.org/), [Chrome](https://www.google.com.br/chrome/browser/desktop/)) para visualizar a sua aplicação

</div>

### Importante

Siga as instruções específicas para o seu sistema operacional. Os comandos que devem ser executados em um computador Linux são ligeiramente diferentes dos do Mac ou Linux.
Se você tem dificuldades, marque a opção do Sistema Operacional no topo do bloco de comandos.

## *1.*Criando uma aplicação

Nós vamos criar uma nova aplicação Rails chamada *railsgirls*.

Vamos abrir o terminal:

* Mac OS X: Abra Spotlight, digite *Terminal* e clique na aplicação *Terminal*.
* Windows: Clique em Iniciar e procure por *Prompt de Comando* e clique em *Command Prompt with Ruby on Rails*.
* Linux (Ubuntu/Fedora): Procure por *Terminal* na barra de busca e clique em *Terminal*.

Em seguida, digite os seguintes comandos no terminal:

<div class="os-specific">
  <div class="nix">
    {% highlight sh %}
      mkdir projects
    {% endhighlight %}

    <div>
      <p>
        Você pode verificar a existência de um diretório chamado <code>projects</code> executando o seguinte comando: <code>ls</code>.
        Como resultado você deverá encontrar o diretório <code>projects</code> na listagem retornada como resultado.
        Caso queira mudar o diretório corrente para <code>projects</code> digite:
        </p>
    </div>

    {% highlight sh %}
      cd projects
    {% endhighlight %}

    <div>
      <p>
       Você pode verificar se está em um diretório vazio executando o comando <code>ls</code> novamente.
       Agora queremos criar uma nova aplicação chamada <code>railsgirls</code>. Para isso, execute:
      </p>
    </div>

    {% highlight sh %}
      rails new railsgirls
    {% endhighlight %}

    <!-- TODO: Explicar a estrutura de diretórios do Rails -->
    <div>
      <p> Esse comando vai criar uma nova aplicação na pasta <code>railsgirls</code>. Para executá-la, entre no seu diretório executando:</p>
    </div>

    {% highlight sh %}
      cd railsgirls
    {% endhighlight %}

      <div>
        <p>
        Se você executar <code>ls</code> dentro desse diretório você deve ver pastas como <code>app</code> e <code>config</code>.
        Para iniciar o servidor da aplicação, execute:
        </p>
      </div>

      {% highlight sh %}
        rails server
      {% endhighlight %}
  </div>

    <div class="win">
      {% highlight sh %}
        mkdir projects
      {% endhighlight %}

      <div>
        <p>
          Você pode verificar a existência de um diretório chamado <code>projects</code> executando o seguinte comando: <code>dir</code>.
          Como resultado você deverá encontrar o diretório <code>projects</code> na listagem retornada como resultado.
          Caso queira mudar o diretório corrente para <code>projects</code> digite:
          </p>
      </div>

    {% highlight sh %}
      cd projects
    {% endhighlight %}

    <div>
      <p>
       Você pode verificar se está em um diretório vazio executando o comando <code>ls</code> novamente.
       Agora queremos criar uma nova aplicação chamada <code>railsgirls</code>. Para isso, execute:
      </p>
    </div>

    {% highlight sh %}
      rails new railsgirls
    {% endhighlight %}

    <div>
      <p>
       Você pode verificar se está em um diretório vazio executando o comando <code>dir</code> novamente.
       Agora queremos criar uma nova aplicação chamada <code>railsgirls</code>. Para isso, execute:
      </p>
    </div>

    {% highlight sh %}
      cd railsgirls
    {% endhighlight %}

    <div>
      <p>
      Se você executar <code>dir</code> dentro desse diretório você deve ver pastas como <code>app</code> e <code>config</code>.
      Para iniciar o servidor da aplicação, execute:
      </p>
    </div>

    {% highlight sh %}
      rails server
    {% endhighlight %}
  </div>

</div>

Abra <http://localhost:3000> no seu navegador.

Você deve ver a página com "Welcome aboard", o que significa que a sua aplicação foi gerada corretamente.

Execute <kbd>Ctrl</kbd>+<kbd>C</kbd> no terminal para interromper o servidor.

**Coach:** Explique o que cada comando faz. O que foi gerado? O que o servidor faz?

## *2.*Crie Idea scaffold

Nós utilizaremos a funcionalidade scaffold para gerar um ponto inicial para listar, adicionar, remover, editar e visualizar coisas; no nosso caso ideas.

**Coach:** No que consiste o scaffolding do Rails? (Explique o comando, o nome do modelo name e a sua tabela de banco de dados relacionada, convenções de nomeação, atributos e tipos, etc). O que são migrações e para o quê servem?

{% highlight sh %}
rails generate scaffold idea name:string description:text picture:string
{% endhighlight %}

The scaffold creates new files in your project directory, but to get it to work properly we need to run a couple of other commands to update our database and restart the server.

<div class="os-specific">
  <div class="nix">
{% highlight sh %}
bin/rake db:migrate
rails server
{% endhighlight %}
  </div>

  <div class="win">
{% highlight sh %}
ruby bin/rake db:migrate
rails server
{% endhighlight %}
  </div>
</div>

Open <http://localhost:3000/ideas> in your browser. Cloud service (e.g. nitrous) users need to append '/ideas' to their preview url instead (see [installation guide](/install#using-a-cloud-service)).

Click around and test what you got by running these few command-line commands.

Hit <kbd>Ctrl</kbd>+<kbd>C</kbd> to quit the server again when you've clicked around a little.


## *3.*Design

**Coach:** Talk about the relationship between HTML and Rails. What part of views is HTML and what is Embedded Ruby (ERB)? What is MVC and how does this relate to it? (Models and controllers are responsible for generating the HTML views.)

The app doesn't look very nice yet. Let's do something about that. We'll use the Twitter Bootstrap project to give us nicer styling really easily.

Open `app/views/layouts/application.html.erb` in your text editor and above the line

{% highlight erb %}
<%= stylesheet_link_tag "application", media: "all", "data-turbolinks-track" => true %>
{% endhighlight %}

add

{% highlight erb %}
<link rel="stylesheet" href="//railsgirls.com/assets/bootstrap.css">
<link rel="stylesheet" href="//railsgirls.com/assets/bootstrap-theme.css">
{% endhighlight %}

and replace

{% highlight erb %}
<%= yield %>
{% endhighlight %}

with

{% highlight erb %}
<div class="container">
  <%= yield %>
</div>
{% endhighlight %}

Let's also add a navigation bar and footer to the layout. In the same file, under `<body>` add

{% highlight html %}
<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="/">The Idea app</a>
    </div>
    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <li class="active"><a href="/ideas">Ideas</a></li>
      </ul>
    </div>
  </div>
</nav>
{% endhighlight %}

and before `</body>` add

{% highlight html %}
<footer>
  <div class="container">
    Rails Girls 2015
  </div>
</footer>
<script src="//railsgirls.com/assets/bootstrap.js"></script>
{% endhighlight %}

Now let's also change the styling of the ideas table. Open `app/assets/stylesheets/application.css` and at the bottom add

{% highlight css %}
body { padding-top: 100px; }
footer { margin-top: 100px; }
table, td, th { vertical-align: middle; border: none; }
th { border-bottom: 1px solid #DDD; }
{% endhighlight %}

Now make sure you saved your files and refresh the browser to see what was changed. You can also change the HTML & CSS further.

In case your Terminal shows you an error message that *sort of* implies there is something wrong with your JavaScript or CoffeeScript, install [nodejs](http://nodejs.org/download/). This issue should not appear when you've used the RailsInstaller (but when you've installed Rails via ```gem install rails```).

**Coach:** Talk a little about CSS and layouts.


## *4.*Adding picture uploads

We need to install a piece of software to let us upload files in Rails.

Open `Gemfile` in the project directory using your text editor and under the line

{% highlight ruby %}
gem 'sqlite3'
{% endhighlight %}

add

{% highlight ruby %}
gem 'carrierwave'
{% endhighlight %}

**Coach:** Explain what libraries are and why they are useful. Describe what open source software is.

Hit <kbd>Ctrl</kbd>+<kbd>C</kbd> in the terminal to quit the server.

In the terminal run:

{% highlight sh %}
bundle
{% endhighlight %}

Now we can generate the code for handling uploads. In the terminal run:

{% highlight sh %}
rails generate uploader Picture
{% endhighlight %}

Please start the rails server now.

Note: Some people might be using a second terminal to run the rails server continuously.
If so you need to **restart the Rails server process** now.
This is needed for the app to load the added library.

Open `app/models/idea.rb` and under the line

{% highlight ruby %}
class Idea < ActiveRecord::Base
{% endhighlight %}

add

{% highlight ruby %}
mount_uploader :picture, PictureUploader
{% endhighlight %}

Open `app/views/ideas/_form.html.erb` and change

{% highlight erb %}
<%= f.text_field :picture %>
{% endhighlight %}

to

{% highlight erb %}
<%= f.file_field :picture %>
{% endhighlight %}

Sometimes, you might get an *TypeError: can't cast ActionDispatch::Http::UploadedFile to string*.

If this happens, in file `app/views/ideas/_form.html.erb` change the line

{% highlight erb %}
<%= form_for(@idea) do |f| %>
{% endhighlight %}

to

{% highlight erb %}
<%= form_for @idea, :html => {:multipart => true} do |f| %>
{% endhighlight %}

In your browser, add new idea with a picture. When you upload a picture it doesn't look nice because it only shows a path to the file, so let's fix that.

Open `app/views/ideas/show.html.erb` and change

{% highlight erb %}
<%= @idea.picture %>
{% endhighlight %}

to

{% highlight erb %}
<%= image_tag(@idea.picture_url, :width => 600) if @idea.picture.present? %>
{% endhighlight %}

Now refresh your browser to see what changed.

**Coach:** Talk a little about HTML.


## *5.*Finetune the routes

Open <http://localhost:3000> (or your preview url, if you are using a cloud service). It still shows the "Welcome aboard" page. Let's make it redirect to the ideas page.

Open `config/routes.rb` and after the first line add

{% highlight ruby %}
root :to => redirect('/ideas')
{% endhighlight %}

Test the change by opening the root path (that is, <http://localhost:3000/> or your preview url) in your browser.

**Coach:** Talk about routes, and include details on the order of routes and their relation to static files.

**Rails 3 users:** You will need to delete the index.html from the `/public/` folder for this to work.

## Create static page in your app

Lets add a static page to our app that will hold information about the author of this application — you!

{% highlight sh %}
rails generate controller pages info
{% endhighlight %}

This command will create you a new folder under `app/views` called `/pages` and under that a file called `info.html.erb` which will be your info page.

It also adds a new simple route to your routes.rb.

{% highlight ruby %}
get "pages/info"
{% endhighlight %}

Now you can open the file `app/views/pages/info.html.erb` and add information about you in HTML. To see your new info page, take your browser to <http://localhost:3000/pages/info> or, if you are a cloud service user, append '/pages/info' to your preview url.

## *6+.*What next?

* Add design using HTML &amp; CSS
* Add ratings
* Use CoffeeScript (or JavaScript) to add interaction
* Add picture resizing to make loading the pictures faster


## Additional Guides

* Guide 0: [Handy cheatsheet for Ruby, Rails, console etc.](https://github.com/PragTob/rails-beginner-cheatsheet)
* Guide 1: [Add commenting by Janika Liiv](/commenting)
* Guide 2: [Put your app online with Heroku by Terence Lee](/heroku) / [Put your app online with OpenShift by Katie Miller](/openshift) / [Put your app online with Shelly Cloud](/shellycloud) / [Put your app online with anynines](/anynines) / [Put your app online with Trucker.io](/trucker)
* Guide 3: [Create thumbnail images for the uploads by Miha Filej](/thumbnails)
* Guide 4: [Add design using HTML &amp; CSS by Alex Liao](/design)
* Guide 5: [Add Authentication (user accounts) with Devise by Piotr Steininger](/devise/)
* Guide 6: [Adding profile pictures with Gravatar](/gravatar)
* Guide 7: [Test your app with RSpec](/testing-rspec)
* Guide 8: [Continuous Deployment with Travis-CI](/continuous-travis) / [Continuous Deployment with Codeship](/continuous) / [Continuous Deployment with Snap CI](/continuous-snap-ci)
* Guide 9: [Go through additional explanations for the App by Lucy Bain](https://github.com/lbain/railsgirls)
