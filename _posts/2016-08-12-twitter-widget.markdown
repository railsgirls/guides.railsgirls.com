---
layout: default
title: Twitter widget
permalink: twitter-widget
---

# Twitter widget

*Criado por Asta Bevainyte, [@astux7](https://twitter.com/astux7)*

*Traduzido por Vilmar Neto, [@Dkmister](https://github.com/Dkmister)*

Esta prática se destina a ensinar como usar o widget do Twitter e como para [http://localhost:3000/pages/info](http://localhost:3000/pages/info)

Há duas maneiras de fazer isto, se você quiser fazer rápido para já ir adicionando um código preparado, vá para o 2º parágrafo.

**Coach** Explique o que é widget.


1. Configuração do widget do Twitter 

+ Logue-se no [Twitter](https://twitter.com/)

+ Vá para [https://publish.twitter.com/#](https://publish.twitter.com/#) 

+ Selecione o que você gostaria de embutir, .i.e seu *perfil* então o link deve parecer como o seguinte (https://twitter.com/_seu_username_no_twitter)

+ Selecione display options entre 'Embedded Timeline' ou 'Twitter Buttons' 

+ Copie o código


2. Adicione o código gerado pelo Twitter a sua página de informação

 + Você deve ter o código do Twitter copiado que deve parecer como este se você selecionou opções de```perfil``` e ```embedded timeline``` (*_seu_username_no_twitter* - você precisa mudar para seu nome no Twitter)

  ```
    <a class="twitter-timeline" href="https://twitter.com/_seu_username_no_twitter">Tweets de _seu_username_no_twitter</a> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
  ```

 + Adicione este código para app/views/pages/info.html.erb no fim do arquivo

 + Salve e execute ```rails server```

 + Abra seu browser e vá para [http://localhost:3000/pages/info](http://localhost:3000/pages/info) e cheque seu perfil no Twitter 
  
