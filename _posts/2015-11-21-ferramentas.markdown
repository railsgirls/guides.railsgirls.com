---
layout: default
title: Rails Girls App Tutorial
permalink: ferramentas
---
##RVM (Ruby Version Manager)
Ferramenta que facilita a instalação e gerenciamento de múltiplas versões de Ruby e conjuntos de dependências de um projeto, chamadas **gems**. **Gemset** é o **conjunto de gems**.

### Instalação

{% highlight sh %}
gpg --keyserver hkp://keys.gnupg.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3
sudo apt-get install curl
curl -sSL https://get.rvm.io | bash -s stable --ruby #Instala o rvm, com a versão mais recente de ruby
{% endhighlight %}

Para que o RVM seja inicializado, é preciso fechar a janela do terminal, e abrir uma nova, ou executar o seguinte comando na janela de terminal corrente:

{% highlight sh %}
source ~/.rvm/scripts/rvm
{% endhighlight %}

#### Comandos úteis

{% highlight sh %}
rvm list #Lista as versões de ruby instaladas
{% endhighlight %}

{% highlight sh %}
 rvm list known #Mostra as últimas versões de ruby lançadas
{% endhighlight %}

{% highlight sh %}
rvm install versao_de_ruby # Instala um versão de ruby
{% endhighlight %}

{% highlight sh %}
rvm use ao_de_ruby # Seleciona um versão de ruby
{% endhighlight %}

{% highlight sh %}
rvm use versao_de_ruby@nome_do_gemset --create # Seleciona versão de Ruby em determinado gemset(Cria se não existir)
{% endhighlight %}

{% highlight sh %}
rvm gemset create nome_do_gemset # Cria um gemset
{% endhighlight %}

{% highlight sh %}
rvm gemset delete nome_do_gemset # Remove um gemset
{% endhighlight %}

{% highlight sh %}
rvm gemset empty nome_do_gemset # Esvazia um gemset
{% endhighlight %}

Leia mais em: [https://rvm.io](https://rvm.io)

#### .ruby-version e .ruby-gemset
Com o fim de facilitar a seleção de ruby e criação de gemset próprio, no diretório do seu projeto podem ser criados os arquivos **.ruby-version** (responsável por escolher versão de ruby) e **.ruby-gemset** (responsável por escolher o gemset, caso não exista é criado automaticamente). Esses arquivos serão lidos automaticamente pelo RVM no momento em que se entre no diretório do projeto.

##### .ruby-version
{% highlight text %}
2.2.1
{% endhighlight %}

##### .ruby-gemset
{% highlight text %}
nome_do_gemset
{% endhighlight %}

## RubyGems

Gerenciador de pacotes de Ruby que possibilita a distribuição de programas e bibliotecas empacotadas em um formato chamado **gem**. Faz parte da biblioteca padrão de Ruby desde a versão 1.9.

####Comandos úteis

{% highlight sh %}
gem install nome_da_gem #Instala uma gem
{% endhighlight %}

{% highlight sh %}
gem install nome_da_gem -v versao_da_gem #Instala uma gem em uma versão específica
{% endhighlight %}

{% highlight sh %}
gem uninstall nome_da_gem #Desinstala uma gem
{% endhighlight %}

{% highlight sh %}
gem update nome_da_gem #Atualiza uma gem
{% endhighlight %}

Leia mais em: [http://guides.rubygems.org](http://guides.rubygems.org)

## Bundler

Ferramenta que facilita o gerenciamento de gems de um projeto. Todas as dependências de um projeto são definidas em um arquivo chamado **Gemfile**. Uma vez criado esse arquivo, as gems podem ser baixadas e instaladas automaticamente.

Antes de instalar as gems, essa ferramenta verifica se as versões das gems definidas são compatíveis entre si e se estas podem ser todas carregadas ao mesmo tempo. Após a instalação, o arquivo **Gemfile.lock** é gerado, responsável por armazenar as versões exatas de gem que foram instaladas, permitindo consistência entre ambientes em que vários desenvolvedores trabalham juntos, por exemplo. Por esse motivo, é importante sempre fazer commit desse arquivo.

#### Instalação
{% highlight sh %}
gem install bundler
{% endhighlight %}

#### Gemfile

É necessário que seja declarado ao menos uma origem de onde as gems serão baixadas. O Gemfile padrão usa como origem o [https://rubygems.org](https://rubygems.org).

##### Exemplo
{% highlight ruby %}
source 'https://rubygems.org'
gem 'nokogiri'
gem 'rack',  '>=1.0'
gem 'thin',  '~>1.1'
{% endhighlight %}

Gems também podem ser baixada de um repositório git:
{% highlight ruby %}
gem 'nokogiri', :git => 'https://github.com/tenderlove/nokogiri.git', :branch => '1.4'
{% endhighlight %}

Gems podem ser referenciadas de um diretório local:
{% highlight ruby %}
gem 'extracted_library', :path => './vendor/extracted_library'
{% endhighlight %}

Também é possivel definir grupos:
{% highlight ruby %}
gem 'wirble', :group => :development
gem 'debugger', :group => [:development, :test]

group :test do
  gem 'rspec'
end
{% endhighlight %}

#### Comandos úteis

{% highlight sh %}
  bundle init # Gera um Gemfile no diretório corrente
{% endhighlight %}

{% highlight sh %}
  bundle install #Instala as gems definidas no Gemfile
{% endhighlight %}

{% highlight sh %}
  bundle clean --force # Remove gems não utilizadas no projeto
{% endhighlight %}

{% highlight sh %}
bundle update nome_da_gem # Atualiza a versão da gem no Gemfile.lock
{% endhighlight %}

{% highlight sh %}
bundle update # Atualiza todas as gems
{% endhighlight %}

Leia mais em: [http://bundler.io](http://bundler.io)

## Versionamento Semântico

Tanto as versões de Ruby, como as de suas gems seguem o versionamento semântico.

Leia mais em: [http://semver.org/lang/pt-BR](http://semver.org/lang/pt-BR)
