---
layout: default
title: Instalação do Ambiente de Desenvolvimento do Rails Girls
permalink: instalacao
---

# Instalação do Rails

Traduzido e adaptado de [Guide to Install Rails](http://guides.railsgirls.com/install){:target="_blank"}:

Para construir aplicações e outras coisas com Ruby on Rails é necessário
instalar alguns programas e configurar um ambiente de desenvolvimento no seu
computador.

Siga as instruções para o seu sistema operacional. Se tiver algum problema não
entre em pânico. Nos informe no evento e nós poderemos solucioná-lo juntos.

* [Instalação para OS X](#os-x)
* [Instalação para Windows](#windows)
* [Instalação para Linux](#linux)
* [Máquina virtual](#mquina-virtual)

## OS X

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


Para verificar se o Rails foi instalado com sucesso, execute os seguintes comandos:
{% highlight sh %}
rails new railsgirls #gera uma aplicação Rails cujo nome é railsgirls
cd railsgirls #entra na pasta da aplicação gerada
rails s #executa o servidor de aplicação, para acessá-la digite localhost:3000 no seu navegador
{% endhighlight %}

### *4.* Editor de Texto

Para o workshop recomendamos o editor de texto [Atom](https://atom.io/).
Você também pode usar outro editor [Sublime Text](http://www.sublimetext.com).

### *5.* Atualize seu navegador

Entre em [whatbrowser.org](http://www.whatbrowser.org/intl/pt-BR/) e atualize seu navegador caso não possua a última versão instalada.
Recomendamos o [Firefox](http://br.mozdev.org/) ou [Chrome](https://www.google.com.br/chrome/browser/desktop/).

## Windows

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
cd railsgirls #entra na pasta da aplicação gerada
rails s #executa o servidor de aplicação, para acessá-la digite localhost:3000 no seu navegador
{% endhighlight %}

#### Possíveis erros

##### Gem::RemoteFetcher error

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

##### 'x64_mingw' is not a valid platform` Error

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

### *1.1* Instale o NodeJS (Opcional)

Não é estritamente necessário, mas evita o error ExecJS::RuntimeError que pode ocorrer posteriormente.  ([veja stackoverflow](https://stackoverflow.com/questions/12520456/execjsruntimeerror-on-windows-trying-to-follow-rubytutorial)).

* Acesse [https://nodejs.org/](https://nodejs.org/) e instale o NodeJS

Verifique a versão instalada com o seguinte comando:

{% highlight sh %}
node --version
{% endhighlight %}

Certifique-se que a versão instalada é maior igual a `0.12`.

## Linux

### *1.* Instale o RVM

Para instalar o ambiente de desenvolvimento Ruby on Rails, você apenas precisa copiar a linha abaixo no terminal de acordo com a distribuição Linux que esteja usando(Ubuntu e Fedora) e apertar <kdb>Enter</kdb>. A instalação demorará um certo tempo para ser terminada.

#### Para Ubuntu:

{% highlight sh %}
bash < <(curl -sL https://raw.github.com/railsgirls/installation-scripts/master/rails-install-ubuntu.sh)
{% endhighlight %}

Se você for utilizar o RVM com o `gnome-terminal` (padrão para a interface Unity), você precisará antes mudar algumas opções padrão.
Para que o RVM funcione corretamente, abra o `gnome-terminal`, em `Editar ▸ Preferências de perfil` e marque na aba `Comando` a opção `Executar o comando como shell de sessão` e clique em `Fechar`.
Para mais informações, acesse [RVM - Integração com o gnome-terminal](http://rvm.io/integration/gnome-terminal).

#### Para Fedora:

{% highlight sh %}
bash < <(curl -sL https://raw.github.com/railsgirls/installation-scripts/master/rails-install-fedora.sh)
{% endhighlight %}

Para verificar se o Rails foi instalado com sucesso, execute os seguintes comandos:
{% highlight sh %}
rails new railsgirls #gera uma aplicação Rails cujo nome é railsgirls
cd railsgirls #entra na pasta da aplicação gerada
rails s #executa o servidor de aplicação, para acessá-la digite localhost:3000 no seu navegador
{% endhighlight %}

### *2.* Editor de Texto

Para o workshop recomendamos o editor de texto [Atom](https://atom.io/).
Você também pode usar outro editor [Sublime Text](http://www.sublimetext.com).

### *3.* Atualize seu navegador

Entre em [whatbrowser.org](http://www.whatbrowser.org/intl/pt-BR/) e atualize seu navegador caso não possua a última versão instalada.
Recomendamos o [Firefox](http://br.mozdev.org/) ou [Chrome](https://www.google.com.br/chrome/browser/desktop/).

<hr />

##Máquina Virtual

Ao invés de instalar todas as ferramentas na sua própria máquina, você pode configurar o mesmo ambiente de desenvolvimento usando uma máquina virtual.
Leia mais [aqui]: ({% post_url 2014-03-24-alternative-dev-environment %}).
<!-- TODO: Traduzir o post do link acima -->
