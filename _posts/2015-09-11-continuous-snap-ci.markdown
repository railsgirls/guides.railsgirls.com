---
layout: default
title: Continuous Deployment - cuz less hassle
permalink: continuous-snap-ci
---

# Integração Contínua com o <em lang="en">Snap CI</em>

*Criado por Akshay Karle, [@akshay_karle](https://twitter.com/akshay_karle)*

*Traduzido por Emerson Rocha Luiz, [@fititnt](https://github.com/fititnt)*

<!--
  N.T.: Existe diferença entre, conforme "Continuous Integration",
        "Continuous Delivery" e "Continuous Deployment" http://stackoverflow.com/questions/28608015/continuous-integration-vs-continuous-delivery-vs-continuous-deployment
        Creio que tende a ser interessante essa tradução ser revisada
        por pessoa que trabalhe focada na área, para ter certeza de que
        é tecnicamente precisa. (@fititnt, 2016-10-08 23:01)
  N.T.: Vou assumir, com ajuda da tradução da documentação oficial da AWS
        de https://aws.amazon.com/devops/continuous-delivery/?nc1=h_ls e
        https://aws.amazon.com/pt/devops/continuous-delivery/ que:
            Continuous Integration = Integração Contínua
            Continuous Delivery = Entrega Contínua
            Continuous Deployment = Implantação Contínua
        Se estas afirmações estiverem erradas, o texto deverá ser revisto
        (@fititnt, 2016-10-08 23:13)
  N.T.: Vou usar o neologismo "commitado" por "committed", tal qual usaria
        "commit" em inglês" (@fititnt, 2016-10-08 23:23)
  N.T.: Todos os termos que deveriam ser lidos em inglês, recomendo adição
        do atributo lang="en", conforme especificação de como lidar com
        internacionalização de documentos HTML. Recomendo a leitura em
        http://i18n-html-tech-lang.pt.webiwg.org/ (@fititnt, 2016-10-08 23:36)
-->

### O que é essa coisa de Implantação Contínua?

Implantação contínua, do inglês <em lang="en">continuous deployment</em>, é parte do 'movimento' de entrega contínua, do inglês <em lang="en">continuous delivery</em>. A ideia por trás da entrega contínua é de automatizar o processo de entrega de software tanto quanto possível.

Com uma cadeia de implantação contínua funcionando direito você garantirá que que implementações usando Git (tudo que for <em>commitado</em> deve ser testado, e tudo precisa ser testado para poder ser implantado), tornando mais fácil a colaboração e implantação mais rápida. Assim, você pode se concentrar em fazer o seu aplicativo ainda mais impressionante!

Há algumas grandes empresas que estão navegando nessa onda contínua, e neste tutorial vamos configurar implantação contínua para para nossa aplicação em <em lang="en">Ruby on Rails</em>do GitHub para Heroku, usando o <a href="https://snap-ci.com" lang="en">Snap CI</a>.

__COACH__: Fale sobre os benefícios da implantação contínua.

### Assine o <em land="en">Snap CI</em>

Em primeiro lugar você precisa de uma conta do <a href="https://snap-ci.com" lang="en">Snap CI</a>. Assine a conta do <em land="en">Snap CI</em> com Github. <em land="en">Snap CI</em> precisa acessar seus repositórios no Github para ser capaz de configurá-los, por isso certifique-se de permitir o acesso.

De volta ao snap CI, vamos criar o seu primeiro <em lang="en">pipeline</em>. O primeiro passo é selecionar GitHub como seu provedor de repositório. Na lista de seus repositórios GitHub, procure o repositório que deseja configurar e selecione-o. No nosso caso, é o com nome semelhante a "railsgirls".

Assim que você selecionar o repositório que deseja contruir, <em land="en">Snap CI</em> irá realizar detecções de seu repositório e fará melhor tentativa de configurar automaticamente o seu <em lang="en">pipeline</em> de implantação para você que vai permitir que você executar os testes e implementações.

Depois de alguns segundos, o <em land="en">Snap CI</em> iniciará automaticamente a construção de seu repositório, e neste momento você pode clicar através da configuração estágios pelo <em land="en">Snap</em> para ver quais comandos são executados.

Às vezes, porém, o <em land="en">Snap</em> pode não ser capaz de detectar os comandos corretos para construir e testar seu repositório. Nesses casos, você pode editar sua configuração de <em lang="en">pipeline</em> ao visitar a página de configuração a partir da página de contrução do seu recém criadodo em <lang="en">pipeline</em> ao clicar em <em lang="en">"Edit"</em> para editar seu em <lang="en">pipeline</em>. Agora você pode adicionar ou editar uma etapa de contrução existente e executar todos os testes para a sua aplicação.


Se você se sentir inseguro de estágios que você deve adicionar, você pode olhar nas as diferentes receitas de construção previstas na sub-categoria de Ruby quando for adicionar de uma etapa para descobrir qual comandos devem ser executados para construir corretamente e testar a sua aplicação. Você também pode dar uma olhada no [manual de introdução na documentação](https://docs.snap-ci.com/getting-started/) do <em land="en">Snap CI</em>.

Assim que você tiver terminado de editar a configuração do <em lang="en">pipeline</em> clique em <em lang="en">'Save'</em>. Isto irá salvar sua configuração e automaticamente disparar uma nova contrução. Agora você deve ter uma contrução verde se todos os seus testes passarem :)

Caso você tenha qualquer falhas em testes, porém, você pode resolver isto e enviar as alterações para o Github:

{% highlight sh %}
git add .
git commit -m "fix tests"
git push origin master
{% endhighlight %}

<em land="en">Snap CI</em> irá automaticamente detectar alterações no Github e executar uma nova instância do seu <em lang="en">pipeline</em>. Neste ponto você já estará testando seu código

### Setup Continuous Deployment

The next step is to deploy your application. There are various platforms to deploy to, for now, let's look at how you can deploy to [Heroku](https://www.heroku.com/) as it is the easiest.

Go to your pipeline configuration edit page again and add a new Stage. This time Select the 'Deploy' category from the recipes on the left. The select 'Basic' recipe in the Heroku sub-category.

Enter a stage name of your choice (eg: deploy, go-live, etc.), keep the trigger automatic and then click 'Run as' dropdown to Sign into Heroku. Perform the sign in and authorise Snap CI. You should automatically comeback to Snap CI after the authorization. You can now select the Heroku application where you wish to deploy or create a new application from Snap CI itself. Check the 'Perform DB migrate' checkbox and save your configuration.

This should trigger another new build in Snap CI, but this time it runs the stage you just created which deploys to Heroku. Once the pipeline goes green, visit the Heroku application page where you deployed from Snap CI and your rails application should be online in a few minutes.

From here on, any new changes you make and push to your GitHub will be tested and deployed automatically by Snap CI.
