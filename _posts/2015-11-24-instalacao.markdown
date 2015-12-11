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

### *1* Verificar a versão do seu sistema operacional

Clique no Apple menu e escolha *About this Mac*.

![Apple menu](../images/1.png "Apple menu")

### *2* Nessa janela você encontrará a versão do seu sistema operacional
Se a sua versão começar com 10.6, 10.7, 10.8, 10.9 or 10.10 esse guia servirá para você.
Caso contrário, nós poderemos ajudá-la a configurar a sua máquina no evento.

![About this Mac dialog](../images/2.png "About this Mac dialog")

### *3* Se a versão do seu OS X é maior ou igual a 10.9:

Se a sua versão começar com 10.9 ou 10.10, siga esses passos. Nesse tutorial
instalaremos as ferramentas de linha de comando do XCode, homebrew e rvm.

#### *3.1* Instalar ferramentas de linha de comando do XCode no terminal:

{% highlight sh %}
xcode-select --install
{% endhighlight %}

#### *3.2* Instalação [Homebrew](http://brew.sh/):

{% highlight sh %}
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
{% endhighlight %}

#### *3.3* Instalação [rvm](http://rvm.io/):

{% highlight sh %}
brew update
brew install gpg
gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
curl -sSL https://get.rvm.io | bash -s stable
{% endhighlight %}

#### *3.4* Instalação de Ruby com rvm:


{% highlight sh %}
rvm install ruby --latest # Instala a última versão disponível de Ruby
 {% endhighlight %}

{% highlight sh %}
rvm install 2.1.4 # Instala a versão 2.1.4
{% endhighlight %}

Se você teve o erro "OpenSSL::SSL::SSLError: ... : certificate verify failed" tente o seguinte comando:

{% highlight sh %}
brew install curl-ca-bundle
cp /usr/local/opt/curl-ca-bundle/share/ca-bundle.crt `ruby -ropenssl -e 'puts OpenSSL::X509::DEFAULT_CERT_FILE'`
{% endhighlight %}

#### *3.5* Configure a versão padrão de Ruby (Opcional):

{% highlight sh %}
rvm use 2.2.1 --default
{% endhighlight %}

#### *3.6* Instale o Rails:

{% highlight sh %}
gem install rails --no-ri --no-rdoc
{% endhighlight %}


Para verificar se o Rails foi instalado com sucesso, execute os seguintes comandos:
{% highlight sh %}
rails new railsgirls # Gera uma aplicação Rails cujo nome é railsgirls
cd railsgirls # Entra na pasta da aplicação gerada
rails s # Executa o servidor de aplicação, para acessá-la digite localhost:3000 no seu navegador
{% endhighlight %}

### *4.* Editor de Texto

Para o workshop recomendamos o editor de texto [Atom](https://atom.io/).
Você também pode usar outro editor [Sublime Text](http://www.sublimetext.com).

### *5.* Atualize seu navegador

Entre em [whatbrowser.org](http://www.whatbrowser.org/intl/pt-BR/) e atualize seu navegador caso não possua a última versão instalada.
Recomendamos o [Firefox](http://br.mozdev.org/) ou [Chrome](https://www.google.com.br/chrome/browser/desktop/).

#### Possíveis erros

##### libxml2 is missing

Se você obteve esse erro executando o comando `rails new railsgirls` ou `gem install rails`:

{% highlight sh %}
libxml2 is missing.  Please locate mkmf.log to investigate how it is failing.
-----
*** extconf.rb failed ***
Could not create Makefile due to some reason, probably lack of necessary
libraries and/or headers.  Check the mkmf.log file for more details.  You may
need configuration options.
{% endhighlight %}

Os seguintes comandos podem resolver o seu problema:

{% highlight sh %}
brew install libxml2
gem install nokogiri -- --use-system-libraries --with-xml=/usr/local/Cellar/libxml2/
{% endhighlight %}

## Windows

### *1* Instalação Rails

Baixe o [RailsFTW](http://files.bryanbibat.net/rails-ftw-v0.21-2.1.6-4.2.3.exe)
e o execute. Siga os passos do instalador usando as opções padrão.

Na barra de busca procure por `Start Command Prompt with Ruby`, ou pelo menu iniciar `Programas > RailsFTW > Start Command Prompt with Ruby` e execute o seguinte comando:

{% highlight sh %}
rails -v # Exibe a versão de rails instalada
{% endhighlight %}

Se a sua versão de Rails for menor que 4, atualize-a usando o seguinte comando:

{% highlight sh %}
gem update rails --no-ri --no-rdoc
{% endhighlight %}

Para verificar se o Rails foi instalado com sucesso, execute os seguintes comandos:

{% highlight sh %}
rails new railsgirls # Gera uma aplicação Rails cujo nome é railsgirls
cd railsgirls # Entra na pasta da aplicação gerada
rails s # Executa o servidor de aplicação, para acessá-la digite localhost:3000 no seu navegador
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
gem -v # Exibe a versão instalada do RubyGems
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
  sudo apt-get install curl
  gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
  curl -sSL https://get.rvm.io | bash -s stable --ruby #Instala o rvm, com a versão mais recente de ruby
{% endhighlight %}

Para que o RVM seja inicializado, é preciso fechar a janela do terminal, e abrir uma nova, ou executar o seguinte comando na janela de terminal corrente:

{% highlight sh %}
  source ~/.rvm/scripts/rvm  #carrega o script do rvm
{% endhighlight %}

Se você for utilizar o RVM com o `gnome-terminal`, você precisará antes mudar algumas opções padrão.
Para que o RVM funcione corretamente, abra o `gnome-terminal`, em `Editar ▸ Preferências de perfil` e marque na aba `Comando` a opção `Executar o comando como shell de sessão` e clique em `Fechar`. Será preciso fechar e reabrir terminal para que as mudanças façam efeito.
Para mais informações, acesse [RVM - Integração com o gnome-terminal](http://rvm.io/integration/gnome-terminal).

#### Para Fedora:

{% highlight sh %}
  yum install curl gnupg which tar -y
  gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
  curl -sSL https://get.rvm.io | bash -s stable #Instala o rvm
{% endhighlight %}

Para que o RVM seja inicializado, é preciso fechar a janela do terminal, e abrir uma nova, ou executar o seguinte comando na janela de terminal corrente:

{% highlight sh %}
  source ~/.rvm/scripts/rvm  #carrega o script do rvm
{% endhighlight %}

Se você for utilizar o RVM com o `gnome-terminal`, você precisará antes mudar algumas opções padrão.
Para que o RVM funcione corretamente, abra o `gnome-terminal`, em `Editar ▸ Preferências de perfil` e marque na aba `Comando` a opção `Executar o comando como shell de sessão` e clique em `Fechar`. Será preciso fechar e reabrir terminal para que as mudanças façam efeito.
Para mais informações, acesse [RVM - Integração com o gnome-terminal](http://rvm.io/integration/gnome-terminal).

#### *1.2* Instalando o Ruby:

{% highlight sh %}
rvm install 2.2.3 #instala o ruby 2.2.3
{% endhighlight %}

#### *1.3* Instalando o Rails:

{% highlight sh %}
  rvm use 2.2.3@railsgirls --create #cria um gemset chamado railsgirls usando ruby 2.2.3
  gem install rails #instala a gem rails no gemset railsgirls
{% endhighlight %}

Para verificar se o Rails foi instalado com sucesso, execute os seguintes comandos:

{% highlight sh %}
rails new railsgirls # Gera uma aplicação Rails cujo nome é railsgirls
cd railsgirls # Entra na pasta da aplicação gerada
rails s # Executa o servidor de aplicação, para acessá-la digite localhost:3000 no seu navegador
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
Leia mais [aqui]({% post_url 2014-03-24-alternative-dev-environment %}).
<!-- TODO: Traduzir o post do link acima -->
