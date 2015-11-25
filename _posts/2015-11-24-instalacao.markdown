---
layout: default
title: Setup recipe for Rails Girls
permalink: instalacao
---

# Instalação do Ambiente de desenvolvimento
Adaptado de [Guide to Install Rails](http://guides.railsgirls.com/install):

Para construir aplicações e outras coisas com Ruby on Rails é necessário
instalar alguns programas e configurar um ambiente de desenvolvimento no seu
computador.

Siga as instruções para o seu sistema operacional. Se tiver algum problema não
entre em pânico. Nos informe no evento e nós poderemos solucioná-lo juntos.

* [Instalação para OS X](#instalacao-para-os-x)
* [Instalação para Windows](#instalacao-para-windows)
* [Instalação para Linux](#instalacao-para-linux)
* [Utilizando máquina virtual](#utilizando-máquina-virtual)
* [Utilizando um serviço na nuvem - Nenhuma instalação é necessária](#using-a-cloud-service)

<hr />

## Instalação para OS X

### *1* Verifica a versão do seu sistema operacional

Clique no Apple menu e escolha *About this Mac*.

![Apple menu](../images/1.png "Apple menu")

### *2* Nessa janela você encontrará a versão do seu sistema operacional
Se a sua versão começar com 10.6, 10.7, 10.8, 10.9 or 10.10 esse guia servirá para você.
Caso contrário, nós poderemos ajudá-la a configurar a sua máquina no evento.

![About this Mac dialog](../images/2.png "About this Mac dialog")

### *3* Se a versão do seu OS X é maior ou igual a 10.9:

Se a sua versão começar com 10.9 ou 10.10, siga esses passos. Nesse tutorial
instalaremos homebrew e rbenv.

#### *3.1* Instalar ferramentas de linha de comando no terminal:

{% highlight sh %}
xcode-select --install
{% endhighlight %}

#### *3.2* Instalação [Homebrew](http://brew.sh/):

{% highlight sh %}
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
{% endhighlight %}

#### *3.3* Instalação [rbenv](https://github.com/sstephenson/rbenv):

{% highlight sh %}
brew update
brew install rbenv rbenv-gem-rehash ruby-build
echo 'eval "$(rbenv init -)"' >> ~/.bash_profile
echo 'export PATH="$HOME/.rbenv/shims:$PATH"' >> ~/.bash_profile
source ~/.bash_profile
{% endhighlight %}

#### *3.4* Instalação de Ruby com rbenv:


{% highlight sh %}
 rbenv install -l #instala a última versão disponível de Ruby
 {% endhighlight %}

{% highlight sh %}
rbenv install 2.2.3 #instala a versão 2.2.3
{% endhighlight %}

Se você teve o erro "OpenSSL::SSL::SSLError: ... : certificate verify failed" tente o seguinte comando:

{% highlight sh %}
brew install curl-ca-bundle
cp /usr/local/opt/curl-ca-bundle/share/ca-bundle.crt `ruby -ropenssl -e 'puts OpenSSL::X509::DEFAULT_CERT_FILE'`
{% endhighlight %}

#### *3.5* Configure a versão padrão de Ruby:

{% highlight sh %}
rbenv global 2.2.3
{% endhighlight %}

#### *3.6* Instale o Rails:

{% highlight sh %}
gem install rails --no-ri --no-rdoc
{% endhighlight %}


Para verificar se o Rails foi instalado com sucesso, execute o seguinte comando:
{% highlight sh %}
rails new railsgirls #gera uma aplicação Rails cujo nome é railsgirls
{% endhighlight %}

### *4* Instale um editor  a text editor to edit code files

Para o workshop recomendamos o editor de texto Atom.

* [Atom](https://atom.io/)

Você pode usar outro editor [Sublime Text](http://www.sublimetext.com).

### *5* Atualize seu navegador

Entre em [whatbrowser.org](http://www.whatbrowser.org/intl/pt-BR/) e atualize
seu navegador caso não possua a última versão instalada.


Parabéns!! Agora você provavelmente configurou com sucesso seu ambiente de
desenvolvimento Ruby on Rails no OS X.
<hr />

## Instalação Windows

### *1* Instalação Rails

Baixe o [RailsInstaller](https://s3.amazonaws.com/railsinstaller/Windows/railsinstaller-3.1.0.exe)
e o execute. Siga os passos do instalador usando as opções padrão.

Abra `Command Prompt with Ruby on Rails` e execute o seguinte comando:

{% highlight sh %}
rails -v #exibe a versão de rails instalada
{% endhighlight %}

Se a sua versão de Rails for menor que 4, atualize-a usando o seguinte comando:

{% highlight sh %}
gem update rails --no-ri --no-rdoc
{% endhighlight %}

Para verificar se o Rails foi instalado com sucesso, execute os seguintes comandos:

{% highlight sh %}
rails new railsgirls #gera uma aplicação Rails cujo nome é railsgirls
cd railsgirls #entra no diretório da aplicação recém gerada
rails server #inicializa o servidor da aplicação na porta 3000,
que pode ser acessado no seu navegador através do endereço localhost:3000
{% endhighlight %}

## Possíveis erros

### Gem::RemoteFetcher error

Se você obteve esse erro executando o comando `rails new railsgirls` ou `gem update rails`:

{% highlight sh %}
Gem::RemoteFetcher::FetchError: SSL_connect returned=1 errno=0 state=SSLv3 read
server certificate B: certificate verify failed (https://rubygems.org/gems/i18n-
0.6.11.gem)
{% endhighlight %}

Isso significa que você possui uma versão antiga do RubyGems e precisará atualizá-la manualmente.

{% highlight sh %}
gem -v #exibe a versão instalada do RubyGems
{% endhighlight %}

Se essa versão for menor que `2.2.3` você precisará atualizá-la manualmente:

Primeiro baixe o arquivo [ruby-gems-update gem](https://github.com/rubygems/rubygems/releases/download/v2.2.3/rubygems-update-2.2.3.gem e mova-o para o diretório `c:\\rubygems-update-2.2.3.gem` e só então execute-o:

{% highlight sh %}
gem install --local c:\\rubygems-update-2.2.3.gem
update_rubygems --no-ri --no-rdoc
gem uninstall rubygems-update -x
{% endhighlight %}

{% highlight sh %}
gem -v #exibe a versão instalada do RubyGems, se for maior que 2.2.3 então a nova versão foi instalada com sucesso.
{% endhighlight %}

Execute o comando novamente caso tenha ocorrido falhas.

### 'x64_mingw' is not a valid platform` Error

Erro encontrado às vezes ao executar o comando `rails server`:
`'x64_mingw' is not a valid platform` Se esse erro aconteceu com você, após executar o RailsInstaller você deve editar o seu `Gemfile`:

Procure no arquivo por entradas no seguinte formato:

{%highlight ruby %}
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw]`
{% endhighlight %}

Delete o parâmetro `:x64_mingw`. Após a deleção, a linha deve estar da seguinte
forma:
{%highlight ruby %}
'tzinfo-data', platforms: [:mingw, :mswin]
{% endhighlight %}

Após salvar as alterações, use o Prompt de Comando novamente e execute:

{%highlight sh %}
 bundle update
{% endhighlight %}

### *2* Instale um editor de texto para editar o código fonte

For the workshop we recommend the text editor Atom.

* [Download Atom and install it](https://github.com/atom/atom/releases/latest)
  * Download an atom zip file for windows and decompress it.
  * Copy the folder into your Program Files.
  * Launch atom in the folder.

If you are using Windows Vista or older versions, you can use another editor [Sublime Text 2](http://www.sublimetext.com/2).

Now you should have a working Ruby on Rails programming setup. Congrats!

### *3* Update your browser

If you use Internet Explorer, we recommend installing [Firefox](mozilla.org/firefox) or [Google Chrome](google.com/chrome).

Open [whatbrowser.org](http://whatbrowser.org) and update your browser if you don't have the latest version.

### *4* Install node

This is not strictly necessary, but it avoids a problem with and ExecJS::RuntimeError that might occur later  ([see stackoverflow](https://stackoverflow.com/questions/12520456/execjsruntimeerror-on-windows-trying-to-follow-rubytutorial)).

* Go to [https://nodejs.org/](https://nodejs.org/) and install node

Check your version of node

{% highlight sh %}
node --version
{% endhighlight %}

Make sure it is higher than `0.12`.

<hr />

## Setup for Linux

### *1* Install Rails


To install the Ruby on Rails development environment you just need to copy the line below for your Linux distribution (Ubuntu or Fedora), paste it in the Terminal and press Enter. Enjoy the text flying on the screen; it will take quite some time. Grabbing a refreshing drink before starting is encouraged.

#### For Ubuntu:

{% highlight sh %}
bash < <(curl -sL https://raw.github.com/railsgirls/installation-scripts/master/rails-install-ubuntu.sh)
{% endhighlight %}

If you are going to use RVM installations with gnome-terminal, you'll probably need to change it's default options before you can see and use the right Ruby and Rails versions. Find out how: [RVM documentation](http://rvm.io/integration/gnome-terminal).

#### For Fedora:

{% highlight sh %}
bash < <(curl -sL https://raw.github.com/railsgirls/installation-scripts/master/rails-install-fedora.sh)
{% endhighlight %}

Make sure that all works well by running the application generator command.

Make sure that all works well by running the application generator command.

{% highlight sh %}
rails new railsgirls
cd railsgirls
rails server
{% endhighlight %}


### *2* Install a text editor to edit code files

For the workshop we recommend the text editor Sublime Text.

* [Download Sublime Text and install it](http://www.sublimetext.com/2)


### *3* Update your browser

Open [whatbrowser.org](http://whatbrowser.org) and update your browser if you don't have the latest version.


Now you should have a working Ruby on Rails programming setup. Congrats!

<hr />

## Virtual Machine

Instead of installing all tools on your machine, you can also set up a development environment in a Virtual Machine. Please find all the details [here]({% post_url 2014-03-24-alternative-dev-environment %}).

<hr />

## Using a Cloud Service

Instead of installing Ruby on Rails and an editor on your computer, you can use a webservice for development. All you need is a browser and an internet connection. This guide explains how to get started with [nitrous.io](https://nitrous.io). If you're using a different service, they may use a different wording - e.g. 'workspace' instead of 'box', but the process is usually pretty similar.

**Organizer:** Nitrous is a paid service, but free for community usage purpose. Please contact Nitrous <pro [at] nitrous.io> to request a community account with the following list/information.

- Email address of the people you need workspaces for (= email list of members)
- How long they would need to use Nitrous
- Starting from date/time
- How long (days, weeks etc.) you need access

### *1* Update your browser

If you use Internet Explorer, we recommend installing [Firefox](mozilla.org/firefox) or [Google Chrome](google.com/chrome).

Open [whatbrowser.org](http://whatbrowser.org) and update your browser if you don't have the latest version.

### *2* Create an account

Go to [https://nitrous.io](https://nitrous.io/) and signup.

### *3* Setup a development box / workspace for ruby on rails
* Login to your nitrous account
* Go to the dashboard by using the green 'Open dashboard' button
* Create a nitrous box: pick Ruby/Rails from the templates - everything else can stay as is, but you can change the name of your box if you want to
* It takes a moment until your box is ready

### *4* Find and restart your development box
* If you've just created your box, you can probably skip these steps - they're good to know if you login to nitrous again later
* You can always find your nitrous boxes by going to the dashboard or choosing 'Boxes' from the top menu
* Pick your box from the list of boxes
* If you haven't used a box in a while, it might have been shutdown due to inactivity. If you are informed that your box is not running, restart it using the respective button
* When your box is up and running, choose 'IDE' in order to start coding

### *5* Coding with your development box
* On the left hand side, you find a file browser where you can navigate your directories and file
* In the middle, you find the editor where you can modify your files
* At the bottom, you find the terminal where you can run commands
* Everything you need is here in you browser window - you do not need to start an editor or terminal anywhere else
* If your following a guide or tutorial, use the commands for Linux even if you are on a Windows computer - your operating system does not matter, since all commands are run on your development box, which is a Linux machine
* If a guide or tutorial asks you to point your browser to something like http://localhost:3000, go to the 'Preview' menu and pick 'Port 3000'
* If, for example, you're asked to open http://localhost:3000/posts, please append '/posts' manually to the URL that has been opened
