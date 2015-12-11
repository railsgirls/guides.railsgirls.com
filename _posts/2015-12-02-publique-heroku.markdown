---
layout: default
title: Coloque a aplicação Rails Girls online no Heroku
permalink: publique-heroku
---

# Coloque a aplicação Rails Girls online no Heroku

*Traduzido e adaptado de [Put Your App Online With Heroku](http://railsgirls.com/guides/heroku/){:target="_blank"}*

Siga os seguintes passos do [Quickstart Guide](https://devcenter.heroku.com/articles/getting-started-with-ruby){:target="_blank"}:

1. [Introduction](https://devcenter.heroku.com/articles/getting-started-with-ruby#introduction){:target="_blank"}
2. [Set up](https://devcenter.heroku.com/articles/getting-started-with-ruby#set-up){:target="_blank"}
3. [Prepare the app](https://devcenter.heroku.com/articles/getting-started-with-ruby#prepare-the-app){:target="_blank"}
4. [Deploy the app](https://devcenter.heroku.com/articles/getting-started-with-ruby#deploy-the-app){:target="_blank"}

## *1.* Preparando sua aplicação

### *1.1.* Sistemas de controle de versão

A sua aplicação deve estar sob um sistema de controle de versão como o Git, por exemplo. Fizemos isso [aqui]({{  site.baseurl | append: "/git-github" }}){:target="_blank"}.

### *1.2.* Atualizando o banco de dados

Primeiramente, nós precisamos colocar o nosso banco de dados para funcionar no Heroku, que usa o [PostgresSQL](http://www.postgresql.org/){:target="_blank"} e não o [SQLite](https://www.sqlite.org/){:target="_blank"} como utilizamos na nossa aplicação.
Para isso será necessário a remoção da seguinte linha do nosso `Gemfile`:

{% highlight ruby %}
gem 'sqlite3'
{% endhighlight %}

Que deve ser substituída por:

{% highlight ruby %}
group :development do
  gem 'sqlite3' # Utilizada apenas em ambiente de desenvolvimento
end
group :production do
  gem 'pg' # Utilizada em ambiente de produção
end
{% endhighlight %}

Agora execute:

{% highlight ruby %}
  bundle install --without production
{% endhighlight %}

### *1.3.* Adicionando a gem rails_12factor

Agora precisamos adicionar a gem `rails_12factor` no nosso `Gemfile` para conserguirmos publicar a nossa aplicação no Heroku. Essa gem faz algumas modificações no comportamento padrão no nosso projeto, como por exemplo atualização de logs e configuração de assets estáticos (suas imagens, css e javascript) é adequada ao sistema do Heroku.

Agora modifique a seguinte linha do seu Gemfile:

{% highlight ruby %}
  group :production do
    gem 'pg'
  end
{% endhighlight %}

Para:

{% highlight ruby %}
  group :production do
    gem 'pg'
    gem 'rails_12factor'
    end
{% endhighlight %}

Após isso, execute:

{% highlight ruby %}
  bundle # Instale as novas dependências
{% endhighlight %}

{% highlight sh %}
  git commit -a -m "Added rails_12factor gem and updated Gemfile.lock" # Faz o commit das últimas mudanças
{% endhighlight %}


## *2.* Publicando sua aplicação

### *2.1.* Criação do app no Heroku

Primeiro precisamos fazer o login no Heroku:

{% highlight sh %}
  heroku auth:login # Faz login usando as credenciais do Heroku
{% endhighlight %}

Agora nós vamos criar o nosso app no Heroku executando no terminal:

{% highlight sh %}
  heroku apps:create # Cria um app novo no Heroku
{% endhighlight %}

Que retorna algo parecido com:

{% highlight sh %}
  Creating sheltered-refuge-6377... done, stack is cedar
  http://sheltered-refuge-6377.herokuapp.com/ | git@heroku.com:sheltered-refuge-6377.git
  Git remote heroku added
{% endhighlight %}

Nesse caso o nome gerado automaticamente para o nosso app no Heroku foi "sheltered-refuge-6377".

### *2.2.* Enviando nosso código

Para enviar nosso código para o Heroku, basta executar:

{% highlight sh %}
  git push heroku master #faz push no repositório remoto do Heroku  
{% endhighlight %}

Que retorna algo parecido com:

{% highlight sh %}
Initializing repository, done.
Counting objects: 101, done.
Delta compression using up to 2 threads.
Compressing objects: 100% (91/91), done.
Writing objects: 100% (101/101), 22.68 KiB | 0 bytes/s, done.
Total 101 (delta 6), reused 0 (delta 0)

-----> Ruby app detected
-----> Compiling Ruby/Rails
-----> Using Ruby version: ruby-2.0.0
-----> Installing dependencies using 1.6.3
       Running: bundle install --without development:test --path vendor/bundle --binstubs vendor/bundle/bin -j4 --deployment
       Fetching gem metadata from https://rubygems.org/..........
...
-----> Launching... done, v6
       http://sheltered-refuge-6377.herokuapp.com/ deployed to Heroku
{% endhighlight %}

Você saberá que seu código já foi enviado quando vir a seguinte mensagem no terminal:

{% highlight sh %}
  Launching...  
{% endhighlight %}

### *2.3.* Execute as migrações do banco de dados

Em seguida precisamos migrar nosso banco de dados da mesma maneira que fizemos localmente durante os workshops anteriores:

{% highlight sh %}
  heroku run rake db:migrate
{% endhighlight %}

Quando o comando terminar de executar você já pode acessar seu app. Para esse exemplo, a url gerada foi <http://sheltered-refuge-6377.herokuapp.com/>.

Agora digite:

{% highlight sh %}
  heroku apps:open --app railsgirls #abre o app railsgirls no navegador
{% endhighlight %}

## *3.* Notas finais

A plataforma do Heroku tem as suas particularidades. Aplicações que rodam lá estão em um ambiente efêmero, isto é, com exceção da informação armazenada no banco de dados, qualquer arquivo criado pela sua aplicação poderá desaparecer se o servidor for reiniciado(por exemplo se for publicada uma nova versão da sua aplicação).

### [Ephemeral Filesystem](https://devcenter.heroku.com/articles/dynos#ephemeral-filesystem){:target="_blank"}

> Cada unidade de execução do Heroku, chamada *dyno* possui seu sistema de arquivos efêmero, com a cópia mais recente do código publicado. Durante o tempo de vida de um *dyno*, seu processos podem usar o sistema de arquivos como uma área de memória temporária, no entanto, qualquer arquivo armazenado em um *dyno* invisível em outro *dyno* e será descartado
no momento em que ele é parado ou reiniciado.

Em um tutorial [anterior]({{  site.baseurl | append: "/rails-girls-app-tutorial-1" }}){:target="_blank"} implementamos a funcionalidade de anexar um arquivo ao registro *Idea*, resultando no upload de  novos arquivos na pasta `public/uploads` da sua aplicação. O armazenamento efêmero no Heroku pode ser observado nos seguintes passos:

1. Executar a aplicação com o comando `heroku open`
2. Adicionar uma nova *Idea* com uma imagem
3. Reiniciar a aplicação executando `heroku restart`
4. Retorna a sua *Idea*, e recarregue a página, a imagem não estará mais disponível

### Como lidar com armazenamento efêmero

Como solução que costuma ser usada em sites bastante populares, podemos usar um servidor de assets externo como o Amazon S3 (Simple Storage Service) ou Rackspace CloudFiles.
Esses serviços fornecem, a um custo relativamente baixo, armazenamento de dados na nuvem, isto é, seu arquivo pode estar hospedado em qualquer lugar no mundo, permitindo armazenamento persistente da dados na sua aplicação.

### Leia mais em

* [Amazon S3](https://aws.amazon.com/pt/s3/){:target="_blank"}
* [Carrierwave - Using Amazon S3](https://github.com/carrierwaveuploader/carrierwave#using-amazon-s3){:target="_blank"}
