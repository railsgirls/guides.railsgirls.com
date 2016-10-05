---
layout: default
title: Guia de Instalação para Rails Girls
permalink: install
---

Criado por Katie Ots, [site da Katie](http://www.katieots.com/)
Traduzido por Marcela Oliveira, [@magaeu](https://twitter.com/magaeu)

# Guia de Instalação para Rails Gils
<span class="muted">Tempo previsto: 5min ativo / 15-30min passivo</span>

Para construir apps ou outras coisas com Ruby on Rails, nós precisamos configurar alguns softwares e o ambiente de desenvolvimento em seu computador.

Siga as instruições para seu sistema operacional (SO). Se você tiver algum problema, não entre em pânico. Nos avise e podemos resolver juntos.

* [Instalação para OS X](#setup-for-os-x)
* [Instalação para Windows](#setup-for-windows)
* [Instalação para Linux](#setup-for-linux)
* [Instação alternativa para todos os tipos de SO](#virtual-machine)
* [Utilizando Serviço em Nuvem - Não é necessária qualquer instalação](#using-a-cloud-service)

<hr />

## Instalação para OS X

### *1.* Vamos checar a versão do seu sistema operacional.

Clique no menu Apple e escolha *About this Mac*.

![Apple menu](/images/1.png "Apple menu")

### *2.* Na janela você irá encontrar a versão do seu sistema operacional.
Se a versão do seu sistema começa com 10.6, 10.7, 10.8, 10.9, 10.10 ou 10.11 esse é o guia exato para você. Caso seja outra versão, podemos configurar sua máquina durante o evento.

![About this Mac dialog](/images/2.png "About this Mac dialog")

### *3a.* Se seu versão do OS X é igual ou maior que 10.9: 

Se o número da sua versão começa com 10.9, 10.10 ou 10.11, siga os passos abaixo. Vamos instalar o homebrew e rbenv.

#### *3a1.* Intalação via terminal por linha de comando:

{% highlight sh %}
xcode-select --install
{% endhighlight %}

#### *3a2.* Instalar [Homebrew](http://brew.sh/):

{% highlight sh %}
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
{% endhighlight %}

#### *3a3.* Instalar [rbenv](https://github.com/sstephenson/rbenv):

{% highlight sh %}
brew update
brew install rbenv ruby-build
echo 'eval "$(rbenv init -)"' >> ~/.bash_profile
echo 'export PATH="$HOME/.rbenv/shims:$PATH"' >> ~/.bash_profile
source ~/.bash_profile
{% endhighlight %}

#### *3a4.* Build Ruby with rbenv:

You can find the newest version of Ruby with the command "rbenv install -l".

{% highlight sh %}
rbenv install 2.3.1
{% endhighlight %}

If you got "OpenSSL::SSL::SSLError: ... : certificate verify failed" error, try it this way.

{% highlight sh %}
brew install curl-ca-bundle
cp /usr/local/opt/curl-ca-bundle/share/ca-bundle.crt `ruby -ropenssl -e 'puts OpenSSL::X509::DEFAULT_CERT_FILE'`
{% endhighlight %}

#### *3a5.* Set default Ruby:

{% highlight sh %}
rbenv global 2.3.1
{% endhighlight %}

#### *3a6.* Install rails:

{% highlight sh %}
gem install rails --no-document
{% endhighlight %}

### *3b.* If your OS X version is 10.6, 10.7, or 10.8:
Download the RailsInstaller for your version of OS X:

* [RailsInstaller for 10.7 and 10.8](http://railsinstaller.s3.amazonaws.com/RailsInstaller-1.0.4-osx-10.7.app.tgz) <span class="muted">(325MB)</span>
* [RailsInstaller for 10.6](http://railsinstaller.s3.amazonaws.com/RailsInstaller-1.0.4-osx-10.6.app.tgz) <span class="muted">(224MB)</span>

Double click the downloaded file and it will unpack it into the current directory. Double click the the newly unpacked 'RailsInstaller-1.0.4-osx-10.7.app' or 'RailsInstaller-1.0.4-osx-10.6.app' and follow the instructions. It will open a README file with 'Rails Installer OS X' at the top. Please **ignore** the instructions in this file.

If the Rails version wasn't the latest, you could update it using a following command on terminal.

{% highlight sh %}
gem update rails --no-document
{% endhighlight %}

Make sure that all works well by running the application generator command.

{% highlight sh %}
rails new myapp
{% endhighlight %}

### *4.* Install a text editor to edit code files

For the workshop we recommend the text editor Atom.

* [Download Atom and install it](https://atom.io/)

If you are using Mac OS X 10.7 or older versions, you can use another editor [Sublime Text 2](http://www.sublimetext.com/2).

### *5.* Update your browser

Open [whatbrowser.org](http://whatbrowser.org) and update your browser if you don't have the latest version.


Now you should have a working Ruby on Rails programming setup. Congrats!

<hr />