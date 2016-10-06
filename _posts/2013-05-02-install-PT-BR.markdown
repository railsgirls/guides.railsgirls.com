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
* [Instalação alternativa para todos os tipos de SO](#virtual-machine)
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

#### *3a4.* Construir Ruby com rbenv:

Você pode encontrar a versão mais recente do Ruby pelo comando "rbenv install -l".

{% highlight sh %}
rbenv install 2.3.1
{% endhighlight %}

Se aparece o erro "OpenSSL::SSL::SSLError: ... : certificate verify failed", tente dessa maneira:

{% highlight sh %}
brew install curl-ca-bundle
cp /usr/local/opt/curl-ca-bundle/share/ca-bundle.crt `ruby -ropenssl -e 'puts OpenSSL::X509::DEFAULT_CERT_FILE'`
{% endhighlight %}

#### *3a5.* Configurar versão padrão do Ruby:

{% highlight sh %}
rbenv global 2.3.1
{% endhighlight %}

#### *3a6.* Instalar rails:

{% highlight sh %}
gem install rails --no-document
{% endhighlight %}

### *3b.* Se sua versão OS X é 10.6, 10.7, ou 10.8:

Faça download do RailsInstaller para a versão do seu OS X:

* [RailsInstaller para 10.7 e 10.8](http://railsinstaller.s3.amazonaws.com/RailsInstaller-1.0.4-osx-10.7.app.tgz) <span class="muted">(325MB)</span>
* [RailsInstaller para 10.6](http://railsinstaller.s3.amazonaws.com/RailsInstaller-1.0.4-osx-10.6.app.tgz) <span class="muted">(224MB)</span>

Duplo clique no arquivo baixado e ele será descompactado no diretório atual. Duplo clique no arquivo descompactado 'RailsInstaller-1.0.4-osx-10.7.app' ou 'RailsInstaller-1.0.4-osx-10.6.app' e siga as instruções. O arquivo README será aberto com 'Rails Installer OS X' no topo. Favor **ignorar** as instruções desse arquivo.

Se a versão do Rails não for a mais recente, você pode atualizá-la seguindo o seguinte comando no terminal:

{% highlight sh %}
gem update rails --no-document
{% endhighlight %}

Para ter certeza que tudo funciona bem crie uma aplicação através do comando:

{% highlight sh %}
rails new myapp
{% endhighlight %}

### *4.* Instalar um editor de texto para editar os arquivos

Para esse workshop nós recomendamos o editor de texto Atom.
* [Baixar e instalar Atom](https://atom.io/)

Se você estiver usando Mac OS X 10.7 ou versões anteriores, você pode utilizar outro editor [Sublime Text 2](http://www.sublimetext.com/2).

### *5.* Atualizar seu navegador(browser)

Clique em [whatbrowser.org](http://whatbrowser.org) e atualize seu navegador, se você não possuir a versão mais recente.

Agora você tem um ambiente de desenvolvimento para Ruby on Rails. Parabéns!

<hr />