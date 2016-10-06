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

### *4.* Instalar editor de texto para editar os arquivos

Para esse workshop recomendamos o editor de texto Atom.
* [Baixar e instalar Atom](https://atom.io/)

Se você estiver usando Mac OS X 10.7 ou versões anteriores, você pode utilizar outro editor [Sublime Text 2](http://www.sublimetext.com/2).

### *5.* Atualizar seu navegador(browser)

Clique em [whatbrowser.org](http://whatbrowser.org) e atualize seu navegador, se você não possuir a versão mais recente.

Agora você tem um ambiente de desenvolvimento para Ruby on Rails. Parabéns!

<hr />

## Instalação para Windows

### *1.* Instalar Rails

Baixar o [RailsInstaller](https://s3.amazonaws.com/railsinstaller/Windows/railsinstaller-3.2.0.exe) e executá-lo. Utilize as configurações padrões durante a instalação.

Abra o 'Command Prompt with Ruby on Rails' e execute os seguintes comandos para resolver problemas com o RailsInstaller3.2.0.

**Coach:** Há um bug "No such file or directory" que ocorre quando o comando 'rails' é utilizado no RailsInstaller3.2.0. Esse problema ocorre devido a um erro no caminho do arquivo 'rails.bat' e 'bundle.bat'. Nós podemos resolvê-lo copiando o arquivo 'rake.bat' para 'rails.bat' e 'bundle.bat'. ([github issue page](https://github.com/railsinstaller/railsinstaller-windows/issues/76))

{% highlight sh %}
cd C:\RailsInstaller\Ruby2.2.0\bin
copy rake.bat rails.bat
copy rake.bat bundle.bat
{% endhighlight %}

Abra o 'Command Prompt with Ruby on Rails' e execute o seguinte comando:

{% highlight sh %}
rails -v
{% endhighlight %}

Se a versão do Rails for menor que 5, atualize ele utilizando o seguinte comando:

{% highlight sh %}
gem update rails --no-document
{% endhighlight %}

## Possíveis erros

### Erro 'Gem::RemoteFetcher'

Se você se deparar com o erro abaixo quando executar 'rails new railsgirls' ou 'gem update rails':

{% highlight sh %}
Gem::RemoteFetcher::FetchError: SSL_connect returned=1 errno=0 state=SSLv3 read
server certificate B: certificate verify failed (https://rubygems.org/gems/i18n-
0.6.11.gem)
{% endhighlight %}

Significa que você possui uma versão antiga do Rubygems e será necessário atualizá-la manualmente. Primeiro, verifique a sua versão do Rubygems:

{% highlight sh %}
gem -v
{% endhighlight %}

Se for menor que '2.2.3' você precisa atualizá-la manualmente através dos seguintes passos:

Primeiro baixe o [ruby-gems-update gem](https://github.com/rubygems/rubygems/releases/download/v2.2.3/rubygems-update-2.2.3.gem). Mova o arquivo para 'c:\\rubygems-update-2.2.3.gem' e execute:

{% highlight sh %}
gem install --local c:\\rubygems-update-2.2.3.gem
update_rubygems --no-document
gem uninstall rubygems-update -x
{% endhighlight %}

Verifique sua versão do Rubygems

{% highlight sh %}
gem -v
{% endhighlight %}

Tenha certeza que seja igual ou maior que '2.2.3'. Caso não, execute o procedimento acima novamente.

### Erro 'x64_mingw' is not a valid platform'

Algumas vezes você pode se deparar com o seguinte erro quando executar 'rails server':

''x64_mingw' is not a valid platform'

Se você encontrar esse erro após utilizar o RailsInstaller, você terá que editar o arquivo 'Gemfile'. Para isso, siga os passo:

No final do arquivo verifique se as últimas linhas possuem as seguintes informações:

'gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw]'.

Se a linha possui ':x64_mingw', então apague a parte ':x64_mingw'.

O final deverá ser da seguinte maneira:
'gem 'tzinfo-data', platforms: [:mingw, :mswin]'.

Após fazer o procedimento, favor usar seu prompt de comando novamente e executar 'bundle update'.

### *2.* Instalar editor de texto para editar os arquivos

Para esse workshop recomendamos o editor de texto Atom.
* [Baixar e instalar Atom](https://github.com/atom/atom/releases/latest)
  * Baixar um arquivo .zip do Atom para Windows e descompactá-lo.
  * Copiar o diretório para seus Arquivos de Programas (Program Files).
  * Abrir o Atom no diretório.

Se você estiver usando Windows Vista ou versões antigas, você pode utilizar outro editor [Sublime Text 2](http://www.sublimetext.com/2).

### *3.* Atualizar seu navegador (browser)

Se você utilza Internet Explorer, recomendamos instalar o [Firefox](mozilla.org/firefox) ou [Google Chrome](google.com/chrome).

Abra o [whatbrowser.org](http://whatbrowser.org) e atualize seu navegador, se você não tem a versão mais recente.

### *4.* Instalar Node

O procedimento não é estritamente necessário, mas pode evitar problemas e 'ExecJS::RuntimeError' que pode ocorrer posteriormente ([see stackoverflow](https://stackoverflow.com/questions/12520456/execjsruntimeerror-on-windows-trying-to-follow-rubytutorial)).

* Acesse [https://nodejs.org/](https://nodejs.org/) e instale o pacote node LTS
* Reabra seu 'Rails Command Shell'

Verifique sua versão do Node:

{% highlight sh %}
node --version
{% endhighlight %}

Tenha certeza que está mostrando uma versão qualquer do Node.

### *5.* Verificar o ambiente

Verifique que tudo está funcionando executando o seguinte comando para gerar uma aplicação:

{% highlight sh %}
rails new myapp
cd myapp
rails server
{% endhighlight %}

Acesse '[http://localhost:3000](http://localhost:3000)' em seu navegador. Você deverá ver 'Yay! You're on Rails!' page.

Agora você tem um ambiente de desenvolvimento para Ruby on Rails. Parabéns!

**Coach:** Recomendamos verificar o procedimento executando o comando scaffold e adicionando dados com a página gerada pelos coaches para assegurar que tudo está funcionando bem.

<hr />