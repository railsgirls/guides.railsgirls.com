---
layout: default
title: Guia de Instalação para Rails Girls
permalink: install
---

Criado por Katie Ots, [site da Katie](http://www.katieots.com/)

Traduzido por Marcela Oliveira, [@magaeu](https://twitter.com/magaeu)

# Guia de Instalação para Rails Girls
<span class="muted">Tempo previsto: 5min ativo / 15-30min passivo</span>

Para construir apps ou outras coisas com Ruby on Rails, precisamos configurar alguns softwares e o ambiente de desenvolvimento em seu computador.

Siga as instruições para seu sistema operacional (SO). Se você tiver algum problema, não entre em pânico. Avise-nos e vamos resolver juntos.

* [Instalação para OS X](#instalação-para-os-x)
* [Instalação para Windows](#instalação-para-windows)
* [Instalação para Linux](#instalação-para-linux)
* [Instalação alternativa para todos os tipos de SO](#instalação-alternativa-para-todos-os-tipos-de-so)
* [Utilização de Serviço em Nuvem - Não é necessária qualquer instalação](#utilização-de-serviço-em-nuvem)

<hr />

## Instalação para OS X

### *1.* Vamos checar a versão do seu sistema operacional.

Clique no menu Apple e escolha *About this Mac*.

![Apple menu](/images/1.png "Apple menu")

### *2.* Na janela você irá encontrar a versão do seu sistema operacional.
Se a versão do seu sistema começa com 10.6, 10.7, 10.8, 10.9, 10.10 ou 10.11, esse é o guia exato para você. Caso seja outra versão, podemos configurar sua máquina durante o evento.

![About this Mac dialog](/images/2.png "About this Mac dialog")

### *3a.* Se a versão do seu OS X é igual ou maior que 10.9:

Se o número da sua versão começa com 10.9, 10.10 ou 10.11, siga os passos abaixo. Vamos instalar o *homebrew* e *rbenv*.

#### *3a1.* Instalação via terminal por linha de comando:

```
xcode-select --install
```

[comment]: # {% highlight sh %}
[comment]: # xcode-select --install
[comment]: # {% endhighlight %}

#### *3a2.* Instalar [Homebrew](http://brew.sh/):

```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

[comment]: # {% highlight sh %}
[comment]: # ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
[comment]: # {% endhighlight %}

#### *3a3.* Instalar [rbenv](https://github.com/sstephenson/rbenv):

```
brew update
brew install rbenv ruby-build
echo 'eval "$(rbenv init -)"' >> ~/.bash_profile
echo 'export PATH="$HOME/.rbenv/shims:$PATH"' >> ~/.bash_profile
source ~/.bash_profile
```

[comment]: # {% highlight sh %}
[comment]: # brew update
[comment]: # brew install rbenv ruby-build
[comment]: # echo 'eval "$(rbenv init -)"' >> ~/.bash_profile
[comment]: # echo 'export PATH="$HOME/.rbenv/shims:$PATH"' >> ~/.bash_profile
[comment]: # source ~/.bash_profile
[comment]: # {% endhighlight %}

#### *3a4.* Instalar Ruby com rbenv:

Você pode encontrar a versão mais recente do Ruby pelo comando "rbenv install -l".

```
rbenv install 2.3.1
```

[comment]: # {% highlight sh %}
[comment]: # rbenv install 2.3.1
[comment]: # {% endhighlight %}

Se aparecer o erro **OpenSSL::SSL::SSLError: ... : certificate verify failed**, tente dessa maneira:

```
brew install curl-ca-bundle
cp /usr/local/opt/curl-ca-bundle/share/ca-bundle.crt `ruby -ropenssl -e 'puts OpenSSL::X509::DEFAULT_CERT_FILE'`
```

[comment]: # {% highlight sh %}
[comment]: # brew install curl-ca-bundle
[comment]: # cp /usr/local/opt/curl-ca-bundle/share/ca-bundle.crt `ruby -ropenssl -e 'puts OpenSSL::X509::DEFAULT_CERT_FILE'`
[comment]: # {% endhighlight %}

#### *3a5.* Configurar versão padrão do Ruby:

```
rbenv global 2.3.1
```

[comment]: # {% highlight sh %}
[comment]: # rbenv global 2.3.1
[comment]: # {% endhighlight %}

#### *3a6.* Instalar Rails:

```
gem install rails --no-document
```

[comment]: # {% highlight sh %}
[comment]: # gem install rails --no-document
[comment]: # {% endhighlight %}

### *3b.* Se a versão do seu OS X é 10.6, 10.7, ou 10.8:

Faça download do **RailsInstaller** para a versão do seu OS X:

* [RailsInstaller para 10.7 e 10.8](http://railsinstaller.s3.amazonaws.com/RailsInstaller-1.0.4-osx-10.7.app.tgz) <span class="muted">(325MB)</span>
* [RailsInstaller para 10.6](http://railsinstaller.s3.amazonaws.com/RailsInstaller-1.0.4-osx-10.6.app.tgz) <span class="muted">(224MB)</span>

Dê um duplo clique no arquivo baixado e ele será descompactado no diretório atual. Dê um duplo clique no arquivo descompactado **RailsInstaller-1.0.4-osx-10.7.app** ou **RailsInstaller-1.0.4-osx-10.6.app** e siga as instruções. O arquivo README será aberto com **Rails Installer OS X** no topo. Favor **IGNORAR** as instruções desse arquivo.

Se a versão do Rails não for a mais recente, você pode atualizá-la via terminal:

```
gem update rails --no-document
```

[comment]: # {% highlight sh %}
[comment]: # gem update rails --no-document
[comment]: # {% endhighlight %}

Para ter certeza que tudo funciona bem crie uma aplicação via terminal:

```
rails new myapp
```

[comment]: # {% highlight sh %}
[comment]: # rails new myapp
[comment]: # {% endhighlight %}

### *4.* Instalar editor de texto

Para esse workshop recomendamos o editor de texto Atom.
* [Baixar e instalar Atom](https://atom.io/)

Se você estiver usando Mac OS X 10.7 ou versões anteriores, você pode utilizar outro editor [Sublime Text 2](http://www.sublimetext.com/2).

### *5.* Atualizar seu navegador (browser)

Acesse [whatbrowser.org](http://whatbrowser.org) e atualize seu navegador, caso não tenha a versão mais recente.

Parabéns, seu ambiente de desenvolvimento Ruby on Rail está pronto!

<hr />

## Instalação para Windows

### *1.* Instalar Rails

Baixar o [RailsInstaller](https://s3.amazonaws.com/railsinstaller/Windows/railsinstaller-3.2.0.exe) e executá-lo. Utilize as configurações padrões durante a instalação.

Abra o `Command Prompt with Ruby on Rails` e execute os comandos abaixo para resolver problemas com o RailsInstaller3.2.0.

**Coach:** O erro **No such file or directory** ocorre quando o comando `rails` é utilizado no RailsInstaller3.2.0. Esse problema acontece devido a um erro no caminho do arquivo `rails.bat` e `bundle.bat`. Podemos resolvê-lo copiando o arquivo `rake.bat` para `rails.bat` e `bundle.bat`. ([github issue page](https://github.com/railsinstaller/railsinstaller-windows/issues/76))

```
cd C:\RailsInstaller\Ruby2.2.0\bin
copy rake.bat rails.bat
copy rake.bat bundle.bat
```

[comment]: # {% highlight sh %}
[comment]: # cd C:\RailsInstaller\Ruby2.2.0\bin
[comment]: # copy rake.bat rails.bat
[comment]: # copy rake.bat bundle.bat
[comment]: # {% endhighlight %}

Abra o `Command Prompt with Ruby on Rails` e execute o seguinte comando:

```
rails -v
```

[comment]: # {% highlight sh %}
[comment]: # rails -v
[comment]: # {% endhighlight %}

Se a versão do Rails for menor que 5, atualize-o utilizando o seguinte comando:

```
gem update rails --no-document
```

[comment]: # {% highlight sh %}
[comment]: # gem update rails --no-document
[comment]: # {% endhighlight %}

## Possíveis erros

### Gem::RemoteFetcher error

Se você se deparar com o erro abaixo quando executar `rails new railsgirls` ou `gem update rails`:

```
Gem::RemoteFetcher::FetchError: SSL_connect returned=1 errno=0 state=SSLv3 read server certificate B: certificate verify failed (https://rubygems.org/gems/i18n-
0.6.11.gem)
```

[comment]: # {% highlight sh %}
[comment]: # Gem::RemoteFetcher::FetchError: SSL_connect returned=1 errno=0 state=SSLv3 read server certificate B: certificate verify failed (https://rubygems.org/gems/i18n-
0.6.11.gem)
[comment]: # {% endhighlight %}

Significa que você possui uma versão antiga do **Rubygems** e será necessário atualizá-lo manualmente. Primeiro, verifique a sua versão do Rubygems (via terminal):

```
gem -v
```

[comment]: # {% highlight sh %}
[comment]: # gem -v
[comment]: # {% endhighlight %}

Se a versão for menor que `2.2.3` você precisa atualizá-la manualmente através dos seguintes passos:

Primeiro baixe o [ruby-gems-update gem](https://github.com/rubygems/rubygems/releases/download/v2.2.3/rubygems-update-2.2.3.gem). Mova o arquivo para `c:\\rubygems-update-2.2.3.gem` e execute (via terminal):

```
gem install --local c:\\rubygems-update-2.2.3.gem
update_rubygems --no-document
gem uninstall rubygems-update -x
```

[comment]: # {% highlight sh %}
[comment]: # gem install --local c:\\rubygems-update-2.2.3.gem
[comment]: # update_rubygems --no-document
[comment]: # gem uninstall rubygems-update -x
[comment]: # {% endhighlight %}

Verifique novamente sua versão do Rubygems:

```
gem -v
```

[comment]: # {% highlight sh %}
[comment]: # gem -v
[comment]: # {% endhighlight %}

Tenha certeza que seja igual ou maior que `2.2.3`. Caso não, execute o procedimento acima novamente.

### `'x64_mingw' is not a valid platform` error

Algumas vezes você pode se deparar com o seguinte erro quando executar `rails server`:

`'x64_mingw' is not a valid platform`

Se você encontrar esse erro após utilizar o **RailsInstaller**, você terá que editar o arquivo `Gemfile`. Para isso, siga os passos abaixo:

No final do arquivo verifique se as últimas linhas possuem as seguintes informações:

`gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw]`.

Se a linha possui `:x64_mingw`, então apague a parte `:x64_mingw`.

O final deverá ser da seguinte maneira:
`gem 'tzinfo-data', platforms: [:mingw, :mswin]`.

Após fazer o procedimento, favor usar seu prompt de comando novamente e executar `bundle update`.

### *2.* Instalar editor de texto

Para esse workshop recomendamos o editor de texto Atom.
* [Baixar e instalar Atom](https://github.com/atom/atom/releases/latest)
  * Baixar um arquivo .zip do Atom para Windows e descompactá-lo.
  * Copiar o diretório para seus Arquivos de Programas (Program Files).
  * Abrir o Atom no diretório.

Se você estiver usando Windows Vista ou versões anteriores, você pode utilizar outro editor [Sublime Text 2](http://www.sublimetext.com/2).

### *3.* Atualizar seu navegador (browser)

Se você utiliza **Internet Explorer**, recomendamos instalar o [Firefox](mozilla.org/firefox) ou [Google Chrome](google.com/chrome).

Acesse [whatbrowser.org](http://whatbrowser.org) e atualize seu navegador, caso não tenha a versão mais recente.

### *4.* Instalar Node

O procedimento não é estritamente necessário, mas pode evitar problemas com e `ExecJS::RuntimeError` que podem ocorrer posteriormente ([ver stackoverflow](https://stackoverflow.com/questions/12520456/execjsruntimeerror-on-windows-trying-to-follow-rubytutorial)).

* Acesse [https://nodejs.org/](https://nodejs.org/) e instale o pacote node LTS
* Reabra seu `Rails Command Shell`

Verifique sua versão do Node:

```
node --version
```

[comment]: # {% highlight sh %}
[comment]: # node --version
[comment]: # {% endhighlight %}

Tenha certeza que está mostrando uma versão qualquer do Node.

### *5.* Verificar o ambiente

Para ter certeza que tudo funciona bem crie uma aplicação via terminal:

```
rails new myapp
cd myapp
rails server
```

[comment]: # {% highlight sh %}
[comment]: # rails new myapp
[comment]: # cd myapp
[comment]: # rails server
[comment]: # {% endhighlight %}

Acesse [http://localhost:3000](http://localhost:3000) em seu navegador. Você deverá ver a página 'Yay! You're on Rails!'.

Parabéns, seu ambiente de desenvolvimento Ruby on Rail está pronto!

**Coach:** Recomendamos verificar o procedimento executando o comando scaffold e adicionando dados com a página gerada pelos coaches para assegurar que tudo está funcionando bem.

<hr />

## Instalação para Linux

### *1.* Instalar Rails

Para instalar o ambiente de Ruby on Rails você deve apenas copiar a linha abaixo para sua distribuição Linux (Ubuntu ou Fedora), e colar no **Terminal** e pressionar Enter. Aproveite o texto que aparece na tela; irá levar algum tempo para o processo acabar. Nesse meio tempo, encorajamos você a pegar uma bebida refrescante antes de comecar.

#### Para Ubuntu:

```
sudo apt-get install curl
bash < <(curl -sL https://raw.github.com/railsgirls/installation-scripts/master/rails-install-ubuntu.sh)
```

[comment]: # {% highlight sh %}
[comment]: # sudo apt-get install curl
[comment]: # bash < <(curl -sL https://raw.github.com/railsgirls/installation-scripts/master/rails-install-ubuntu.sh)
[comment]: # {% endhighlight %}

Se você for usar a instalação do **RVM** com gnome-terminal, você provavelmente vai precisar mudar suas configurações padrões antes de começar a usar a versão correta do Ruby on Rails. Descubra como: [Documentação do RVM](http://rvm.io/integration/gnome-terminal).

#### Para Fedora:

```
bash < <(curl -sL https://raw.github.com/railsgirls/installation-scripts/master/rails-install-fedora.sh)
```

[comment]: # {% highlight sh %}
[comment]: # bash < <(curl -sL https://raw.github.com/railsgirls/installation-scripts/master/rails-install-fedora.sh)
[comment]: # {% endhighlight %}

Para ter certeza que tudo funciona bem crie uma aplicação via terminal:

```
rails new myapp
```

[comment]: # {% highlight sh %}
[comment]: # rails new myapp
[comment]: # {% endhighlight %}

### *2.* Instalar editor de texto

Para esse workshop recomendamos o editor de texto Sublime Text

* [Baixar e instalar Sublime Text](http://www.sublimetext.com/2)

### *3.* Atualizar seu navegador (browser)

Acesse [whatbrowser.org](http://whatbrowser.org) e atualize seu navegador, caso não tenha a versão mais recente.

Parabéns, seu ambiente de desenvolvimento Ruby on Rail está pronto!

<hr />

## Utilização de Serviço em Nuvem

Ao invés de instalar **Ruby on Rails** e o editor em seu computador, você pode utilizar um webservice para desenvolvimento. Tudo que precisa é um navegador e conexão com a internet. Esse guia explica como utilizar o [nitrous.io](https://nitrous.io). Se você utilizar outro serviço, talvez eles utilizem outra nomeclatura, como por exemplo 'workspace' ao invés de 'box', mas o processo é geralmente bem parecido.

### *1.* Atualizar seu navegador (browser)

Se você utilza **Internet Explorer**, recomendamos instalar o [Firefox](mozilla.org/firefox) ou [Google Chrome](google.com/chrome).

Acesse [whatbrowser.org](http://whatbrowser.org) e atualize seu navegador, caso não tenha a versão mais recente.

### *2.* Criar uma conta

Acesse [https://nitrous.io](https://nitrous.io/) e realize o cadastro.

### *3.* Configurar o box/workspace de desenvolvimento para Ruby on Rails

* Logue na sua conta
* Acesse o dashboard utilizando o botão verde 'Open dashboard'
* Crie uma nitrous box: escolha Ruby/Rails a partir dos modelos - deixe as outras informações como estão, mas você pode mudar o nome do seu box para o que você desejar
* Aguarde enquanto sua box é montada

### *4.* Encontrar e reiniciar sua box de desenvolvimento
* Se você acabou de criar sua box, você provavelmente pode pular esses passos - porém, eles são importantes quando você logar na nitrous novamente
* Você sempre pode encontrar suas nitrous boxes indo na dashboard ou escolhendo 'Boxes' no menu principal
* Escolha sua box a partir da lista de boxes
* Se faz tempo que você não utilza sua box, ela pode ter sido desligada devido a inatividade. Se sua box não estiver executando, reinicie sua box com o botão restart
* Quando sua box estiver executando, escolha 'IDE' para começar a codificar

### *5.* Codificar com sua box de desenvolvimento

* Ao lado esquerdo você encontra o navegador de arquivos onde você pode navegar entre seus diretórios e arquivos
* No meio você encontra o editor para modificar seus arquivos
* Na parte de baixo você encontra o terminal onde executa os comandos
* Tudo que você precisa está aí na sua janela do navegador - você não precisa iniciar o editor ou o terminal
* Se você seguir estiver seguindo o guia, use os comandos para **Linux**, mesmo que esteja utilizando o Windows - seu sistema operacional não faz diferença, desde que todos os comandos são executados na sua box de desenvolvimento que é uma máquina Linux
* Se o guia pedir para acessar algo como http://localhost:3000, acesse o menu 'Preview' e escolha 'Port 3000'
* Se, por exemplo, for solicitado acessar http://localhost:3000/posts, favor adicionar '/posts' manualmente a URL que está aberta
