---
layout: default
title: Rails Girls App Tutorial 1
permalink: rails-girls-app-tutorial-1
---

# Rails Girls App Tutorial 1

*Traduzido e adaptado de [Rails Girls App Tutorial](http://guides.railsgirls.com/app){:target="_blank"}*

### Verifique se você possui o Rails instalado

Antes de começar a desenvolver, siga o [Guia De Instalação]({{  site.baseurl | append: "/instalacao" }}){:target="_blank"}

### Conheça as suas ferramentas

<div class="indent" markdown="1">

<h3><i class="icon-text-editor">&nbsp;</i></h3>

### Editor de Texto

* [Atom](https://atom.io/){:target="_blank"} ou [Sublime Text](http://www.sublimetext.com){:target="_blank"}

<h3><i class="icon-prompt">&nbsp;</i></h3>

### Terminal (conhecido também como Prompt de Comando no Windows)

* Local onde você iniciará o rails server e executará outros comandos

<h3><i class="icon-browser">&nbsp;</i></h3>

### Navegador

* Aconselhamos o [Firefox](http://br.mozdev.org/){:target="_blank"} ou [Chrome](https://www.google.com.br/chrome/browser/desktop/){:target="_blank"} para visualizar a sua aplicação

</div>

### Importante

Siga as instruções específicas para o seu sistema operacional. Os comandos que devem ser executados em um computador Windows são ligeiramente diferentes dos do Mac ou Linux.
Se você tiver alguma dificuldade, confira a opção do Sistema Operacional abaixo do bloco de comandos.

## *1.* Criando uma aplicação

Nós vamos criar uma nova aplicação Rails chamada *railsgirls*.

Vamos abrir o terminal:

* Mac OS X: Abra Spotlight, digite *Terminal* e clique na aplicação *Terminal*.
* Windows: Na barra de busca procure por `Start Command Prompt with Ruby`, ou pelo menu iniciar `Programas ▸ RailsFTW ▸ Start Command Prompt with Ruby`.
* Linux (Ubuntu/Fedora): Procure por *Terminal* na barra de busca e clique em *Terminal* ou o atalho <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>T</kbd>.

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
       Você pode verificar se está em um diretório vazio executando o comando <code>dir</code> novamente.
       Agora queremos criar uma nova aplicação chamada <code>railsgirls</code>. Para isso, execute:
      </p>
    </div>

    {% highlight sh %}
      rails new railsgirls
    {% endhighlight %}

    <div>
      <p>
      Esse comando vai criar uma nova aplicação na pasta <code>railsgirls</code>. Para executá-la, entre no seu diretório executando:
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

Abra <http://localhost:3000>{:target="_blank"} no seu navegador.

Você deve ver a página com "Welcome aboard", o que significa que a sua aplicação foi gerada corretamente.

Execute <kbd>Ctrl</kbd>+<kbd>C</kbd> no terminal para interromper o servidor.

**Coach:** Explique o que cada comando faz. O que foi gerado? O que o servidor faz?

### *1.1.* Estrutura de diretório do Rails

Arquivo/Pasta           | Função
------------------------|-----------------------------------------------------------------------------------------------------------------
app/                    | Contém os *controllers*, *models*, *views*, *helpers*, *mailers* e *assets* da sua aplicação.
bin/ 	                  | Contém o script que inicia a sua aplicação e outros scripts para configurar, publicar e executar a sua aplicação
config/	                | Configuração das rotas da sua aplicação, banco de dados etc.
config.ru               | Configuração do Rack usada para iniciar a aplicação
db/	                    | Contém o schema de banco de dados assim como migração dos bancos de dados
Gemfile e Gemfile.lock	| Arquivos que permitem especificar as bibliotecas necessárias para a sua aplicação Rails        
lib/	                  | Contém módulos para estender a sua aplicação
log/	                  | Armazena arquivos de log da sua aplicação
public/	                | Contém arquivos estáticos e assets processados
Rakefile                |	Esse arquivo procura e carrega tarefas que podem ser executadas por linha de comando
README.rdoc             | Manual breve da sua aplicação, explica o que ela faz, como configurá-la etc.
test/	                  | Contém os testes unitários da sua aplicação
tmp/	                  | Contém arquivos temporários
vendor/                 | Contém códigos de terceiros

## *2.*Crie o scaffold

Nós utilizaremos a funcionalidade [scaffold](http://guides.rubyonrails.org/command_line.html#rails-generate){:target="_blank"} para gerar páginas para listar, adicionar, remover, editar e visualizar coisas; no nosso caso ideias.

**Coach:** No que consiste o scaffolding do Rails? (Explique o comando, o nome do *model* e a sua tabela de banco de dados relacionada, convenções de nomeação, atributos e tipos, etc). O que são *migrations* e para o quê servem?

{% highlight sh %}
rails generate scaffold idea name:string description:text picture:string
{% endhighlight %}

O scaffold cria novos arquivos no diretório do seu projeto, o que é chamado de código *boilerplate*, isto é, código mínimo necessário para que a sua aplicação funcione.
Para que a sua aplicação funcione corretamente com essas alterações é necessário atualizar o banco de dados e reiniciar o servidor:

<div class="os-specific">
<div class="nix">
{% highlight sh %}
bin/rake db:migrate # executa as migrações, atualizando o banco de dados
rails server # inicializa o servidor da aplicação
{% endhighlight %}
</div>

  <div class="win">
    {% highlight sh %}
      ruby bin/rake db:migrate # executa as migrações, atualizando o banco de dados
      rails server # inicializa o servidor da aplicação
    {% endhighlight %}
  </div>
</div>

Agora abra <http://localhost:3000/ideas>{:target="_blank"} no seu navegador.

Navegue pela aplicação para descobrir o que foi gerado pelo scaffold.

<kbd>Ctrl</kbd>+<kbd>C</kbd> para interromper o servidor quando você tiver terminado de explorar a aplicação

## *3.*Design

**Coach:**
Fale sobre o relacionamento entre o HTML e o Rails. Que parte das *views* são *HTML* e quais são *[Embedded Ruby (ERB)](https://articles.startuprocket.com/a-quick-introduction-to-embedded-ruby-a-k-a-erb-eruby-7b6d26bf939d#.sd1nrrgiv){:target="_blank"}*?
O que é MVC e como isso se relaciona com isso? (*Models* e *controllers* são responsáveis por gerar as *views HTML*)

A nossa aplicação ainda não está muito bonita. Vamos tentar resolver esse problema. Para isso, usaremos o [Twitter Bootstrap](http://getbootstrap.com/){:target="_blank"} para melhorar a aparência da nossa aplicação de maneira fácil.

Abra o arquivo `app/views/layouts/application.html.erb` no seu editor de texto e edite o código acima da linha:

{% highlight erb %}
<%= stylesheet_link_tag "application", media: "all", "data-turbolinks-track" => true %>
{% endhighlight %}

Adicionando o código abaixo:
<!--TODO: Instalar a gem Twitter Bootstrap Rails??? -->

{% highlight erb %}
<link rel="stylesheet" href="//railsgirls.com/assets/bootstrap.css">
<link rel="stylesheet" href="//railsgirls.com/assets/bootstrap-theme.css">
{% endhighlight %}

Substitua:

{% highlight erb %}
<%= yield %>
{% endhighlight %}

Por:

{% highlight erb %}
<div class="container">
  <%= yield %>
</div>
{% endhighlight %}

Vamos também adicionar uma barra de navegação e um rodapé no nosso layout. No mesmo arquivo, abaixo de `<body>`, adicione:

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

E antes de `</body>` adicione:

{% highlight html %}
<footer>
  <div class="container">
    Rails Girls 2015
  </div>
</footer>
<script src="//railsgirls.com/assets/bootstrap.js"></script>
{% endhighlight %}

Agora vamos também adicionar estilo à tabela de idéias. Abra `app/assets/stylesheets/application.css` e no final do arquivo adicione:

{% highlight css %}
body { padding-top: 100px; }
footer { margin-top: 100px; }
table, td, th { vertical-align: middle; border: none; }
th { border-bottom: 1px solid #DDD; }
{% endhighlight %}

Agora verifique se você salvou os arquivos editados e dê refresh no seu navegador para verificar o que foi mudado. Você pode alterar ainda mais o HTML e CSS.

No caso do seu Terminal exibir algum erro que implique que algo está errado com seu Javascript ou CoffeeScript, instale o [nodejs](http://nodejs.org/download/).
Esse erro não deveria aparecer se você instalou o Rails com RailsInstaller, mas pode aparecer se você instalou o Rails com ```gem install rails```.
<!-- TODO:  instale a gem *therubyracer* para resolver esses problemas??? -->

**Coach:** Fale um pouco sobre CSS e layouts.

## *4.*Adicionar upload de imagens

Nós precisamos instalar algumas bibliotecas, nesse caso *gems* para permitir que possamos fazer isso na nossa aplicação.

Abra o `Gemfile` no diretório do seu projeto usando o editor de texto e edite abaixo da linha:

{% highlight ruby %}
gem 'sqlite3'
{% endhighlight %}

Adicione:

{% highlight ruby %}
gem 'carrierwave'
{% endhighlight %}

**Coach:**
Explique o que são bibliotecas e porque elas são úteis. Descreva o que é software open source.

<kbd>Ctrl</kbd>+<kbd>C</kbd> no terminal para interromper o servidor

No terminal execute:

{% highlight sh %}
bundle # Instala as gems definidas no Gemfile
{% endhighlight %}

Agora nós podemos adicionar o código responsável pelo upload de imagens. No terminal execute:  

{% highlight sh %}
rails generate uploader Picture
{% endhighlight %}

Agora você pode iniciar o servidor novamente.

Observação:
Algumas pessoas gostam de usar uma segunda janela de terminal para executar o rails server ininterruptamente.
No entanto, você precisa **reiniciar o processo do Rails server** novamente para carregar as novas bibliotecas instaladas.

Abra o arquivo `app/models/idea.rb` e abaixo da linha:

{% highlight ruby %}
class Idea < ActiveRecord::Base
{% endhighlight %}

Adicione:

{% highlight ruby %}
mount_uploader :picture, PictureUploader
{% endhighlight %}

Abra o arquivo `app/views/ideas/_form.html.erb` e modifique:

{% highlight erb %}
<%= f.text_field :picture %>
{% endhighlight %}

Para:

{% highlight erb %}
<%= f.file_field :picture %>
{% endhighlight %}

Algumas vezes você pode receber um erro *TypeError: can't cast ActionDispatch::Http::UploadedFile to string*.

Caso isso aconteça, no arquivo `app/views/ideas/_form.html.erb`, modifique a linha:

{% highlight erb %}
<%= form_for(@idea) do |f| %>
{% endhighlight %}

Para:

{% highlight erb %}
<%= form_for @idea, :html => {:multipart => true} do |f| %>
{% endhighlight %}

No seu navegador, adicione uma nova idéia com foto. Quando você fizer upload de uma imagem, apenas vai aparecer o caminho da imagem na página, para consertar isso abra o arquivo `app/views/ideas/show.html.erb` e modifique:

{% highlight erb %}
<%= @idea.picture %>
{% endhighlight %}

Para:

{% highlight erb %}
<%= image_tag(@idea.picture_url, width: 600) if @idea.picture.present? %>
{% endhighlight %}

Agora dê refresh no seu navegador para ver o que foi modificado.

**Coach:** Fale um pouco sobre HTML.


## *5.* Atualize as rotas

Abra <http://localhost:3000>{:target="_blank"}. Ainda é exibido o "Welcome aboard" na página. Vamos fazer um redirecionamento para a página de listagem de idéias.

Abra o arquivo `config/routes.rb` e depois da primeira linha adicione:

{% highlight ruby %}
root :to => redirect('/ideas')
{% endhighlight %}

Verifique se houve mudanças abrindo a página raiz da aplicação, isto é, <http://localhost:3000/>{:target="_blank"} no seu navegador.

**Coach:**
Fale sobre rotas e dê detalhes sobre a ordem das rotas e a sua relação com arquivos estáticos

## *6.* Criação das página estáticas na sua aplicação

Vamos adicionar uma página estática à nossa aplicação que exibirá informação sobre autora da aplicação - você !!!

{% highlight sh %}
rails generate controller pages info
{% endhighlight %}

Esse comando criará uma nova pasta dentro de `app/views` chamada `/pages` e dentro dele um arquivo chamado `info.html.erb` que será a sua página de informações sobre autora da aplicação.

Ele também adiciona uma nova rota simples no seu arquivo `routes.rb`.

{% highlight ruby %}
get "pages/info"
{% endhighlight %}

Agora você pode abir o arquivo `app/views/pages/info.html.erb` e adicione informações sobre você no HTML. Para visualizar a sua nova página, no seu navegador acesse <http://localhost:3000/pages/info>{:target="_blank"}.

## *7.* Aprenda mais

* [Getting started with Ruby on Rails](http://guides.rubyonrails.org/getting_started.html)
* [The Rails Command Line](http://guides.rubyonrails.org/command_line.html)
* [ActiveRecord Basics](http://guides.rubyonrails.org/active_record_basics.html)
* [Layouts and Rendering](http://guides.rubyonrails.org/layouts_and_rendering.html)
* [Rails Routing from the Outside In](http://guides.rubyonrails.org/routing.html)
