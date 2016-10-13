---
layout: default
title: Bundler para Desenvolvimento
permalink: bundlerfordevelopment
---

*Traduzido por Roberta Schmitz Mayer, [@robsmayer](https://github.com/robsmayer)*


# Como configurar o <em lang="en">Bundler</em> para Desenvolvimento

1. Fork do <em lang="en">Bundler</em>

    Vá para o Github do <em lang="en">Bundler</em> [https://github.com/bundler/bundler](https://github.com/bundler/bundler)

    Clique no botão Fork.

    Fork <em lang="en">Bundler</em> para que possa criar <em lang="en">pull requests</em> com suas mudanças

<p>

<!--
  N.T.: Adicionado alt em imagem. Não estava presente no original. (@robsmayer, 2016-10-12 22:06)
-->

<img src="../images/fork1.jpg" alt="exibe botão Fork na interface do Github" />
<br />
</p>

2. Faça Download de uma cópia do seu fork do <em lang="en">Bundler</em>

    `$ git clone https://github.com/user_name/bundler.git`


3. Mude para o diretório do <em lang="en">Bundler</em> 

    `$ cd bundler`

4. Configure o remote

    `$ git remote add upstream https://github.com/bundler/bundler.git`

    Isto conecta seu repositório local com o repósitorio __upstream__ no  Github.


5. Instale as dependências de desenvolvimento do  <em lang="en">Bundler</em> 

    `$ rake spec:deps`

    O que é rake? [http://rake.rubyforge.org/](http://rake.rubyforge.org/)

6. Rode o teste de validação do <em lang="en">Bundler</em> 

    `$ rake spec`

    Isto deve demorar uns 15 minutos.

