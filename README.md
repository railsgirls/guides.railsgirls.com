# PARTE 1

#  Instruções para tradução da documentação do Rails Girls

## Como fazer para colaborar?

Primeiramente, você deve dar um [fork](http://help.github.com/fork-a-repo/) no projeto para a sua conta. Com isso, você estará livre para fazer as traduções para o português.

Quando finalizar algo, você deve dar um [pull request](http://help.github.com/pull-requests/) neste repositório para o seu conteúdo ser revisado e aprovado. Com isso, a sua tradução estará no repositório principal e com os seus devidos créditos.

No final do projeto, será lançado oficialmente o site Rails Girls Brasil e divulgado. Todos os colaboradores serão citados e terão seus créditos mantidos.

## Como saber se o que eu estou traduzindo não está sendo traduzido por alguém?

A planilha com as traduções em aberto e aquelas sendo traduzidas, bem como os responsáveis está disponível no link a seguir:

https://docs.google.com/spreadsheets/d/1Gn1BHxwdX3nHyiIDnY1L8ZdNuRJuNhPKli-uG9XWo9c/edit?usp=sharing

## Como posso me candidatar a realizar uma tradução?

Basta enviar um e-mail para marinaflessa@gmail.com com cópia para maujor@maujor.com constando o seu nome, qual a página que você pretende traduzir, entre aquelas listadas na planilha citada anteriormente, e a previsão de término.

Aguarde a resposta ao seu e-mail informando que a tradução está liberada (ou não em raríssimos casos).

**Contamos com a colaboração de todos pois o sucesso deste projeto depende de todos nós que gostamos de compartilhar conhecimentos**

## Como atualizar meu fork com as novas atualizações deste repositório?

    git remote add upstream https://github.com/railsgirlsmaceio/railsgirlsguides.git (url origem do fork)
    git pull upstream gh-pages (nome do branch)
    git push

_____

# PARTE 2

# Rails Girls &#8212; Tutoriais

Nosso objetivo é fornecer ferramentas para que mulheres estudem e entendam a tecnologia Rails. Os eventos Rails Girls foram criados com a finalidade de proporcionar uma primeira experiência com as técnicas Rails de criação para a Internet.

Rails Girls foi criado na cidade de Helsinki no final do ano 2010. A intenção inicial foi a de criar um único evento local e nós jamais imaginamos que a ideia atingisse a proporção atual com a proliferação de vários eventos pelo mundo inteiro.  Estes tutoriais foram criados para ajudá-lo a iniciar seus estudos de Rails.

Você pode usar nosso material para criar seu próprio workshop na sua cidade, no seu ambiente de trabalho ou mesmo na sua cozinha! Saiba mais sobre Rails Girls em http://railsgirls.com

## Mãos à obra

Leia os tutoriais em http://guides.railsgirls.com ou clone este repositório, instale e rode [jekyll](https://github.com/mojombo/jekyll)

### Instalando jekyll

```
$ cd railsgirls.github.com
```

```
$ bundle install
```

### Pygments e Code Highlighting

Os tutoriais foram criados com uso da biblioteca [pygments](http://pygments.org/) para destacar a sintaxe dos códigos. Se você não instalar a biblioteca não será possível visualizar o destaque nos blocos de código inseridos nos tutoriais, tais como o mostrado a seguir:

```
{% highlight %}
{% endhighlight %}
```

Se você não pretende editar blocos de código, pode ignorar a biblioteca, mas se pretende instalá-la consulte as [instruções de instalação](http://jekyllrb.com/docs/installation/) na seção "Pygments"

### Rodando jekyll

```
$ bundle exec jekyll server --watch
```

### Estilizando

Atalhos de teclado devem ser marcados com o elemento HTML [kbd](https://www.w3.org/wiki/HTML/Elements/kbd) .

Por questões de consistência de estilização use `Ctrl+C` e não `CTRL-c`/`ctrl+c`

```
Para  parar o servidor pressione as teclas <kbd>Ctrl</kbd>+<kbd>C</kbd>
```

### Encontrou um problema?

Caso jekyll não esteja funcionando como esperado consulte [Issue 503](https://github.com/mojombo/jekyll/issues/503)

## Contribuindo com um tutorial

Para contribuir com um tutorial consulte as instruções em http://guides.railsgirls.com/contributing

## Twitter

Para acompanhar atualizações e informações em geral siga [@railsgirls](https://twitter.com/railsgirls)

## Website e Blog

O website e o blog de Rails Girls encontra-se hospedado em  http://railsgirls.com

## Lista de e-mail

A lista de e-mails de caráter global para os eventos de Rails Girls encontra-se em http://groups.google.com/group/rails-girls-team

## Créditos

* Karri Saarinen / [@karrisaarinen](https://twitter.com/karrisaarinen) / [github](http://github.com/ksaa)
* Linda Liukas / [@lindaliukas](https://twitter.com/lindaliukas) / [github](http://github.com/lindaliukas)
* Vesa Vänskä / [@vesan](https://twitter.com/vesan) / [github](http://github.com/vesan)
* Terence Lee / [@hone02](https://twitter.com/hone02) / [github](http://github.com/hone)

..e todos os coaches e pessoas envolvidas com o maravilhoso universo de Rails Girls. Seja mais um de nós!
