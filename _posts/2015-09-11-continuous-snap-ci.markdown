---
layout: default
title: Implantação Contínua - para ter menos problemas
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

### Configuração de Implantação Contínua

O próximo passo é distribuir a sua aplicação. Existem várias plataformas para implantar, porém por agora, vamos olhar como você pode implantar a [Heroku](https://www.heroku.com/), já que é a mais fácil.

Vá novamente para a sua página de edição de configuração de <em lang="en">pipeline</em> e adicione uma nova etapa. Desta vez, selecione a categoria "Deploy" das receitas na esquerda. Selecione a receita <em lang="en">"Basic"</em> na subcategoria do Heroku.

Envie o nome de etapa de sua preferência (i.e. <em lang="en">deploy</em>, <em lang="en">go-live</em>, etc.), mantenha o gatilho automatico e então clique em <em lang="en">"Run as"</em> no menu para entrar no Heroku. Execute uma etapa de cadastro ao autorizar o <em land="en">Snap CI</em>. Você deverá retornar automaticamente para o <em land="en">Snap CI</em> após a autorização. Você poderá agora selecionar a aplicação Heroku onde você deseja fazer a entrega ou criar uma nova aplicação dentro do próprio <em land="en">Snap CI</em>. Selecione a caixa de seleção <em land="en">'Perform DB migrate'</em> e salve sua configuração.

Isto deverá disparar uma nova contrução no <em land="en">Snap CI</em>, mas desta vez ele executará uma nova etapa que você acabou de criar criar que rá enviar ao Heroku. Assim que esse <em land="en">pipeline</em> ficar verde, visite a página da aplicação Heroku onde você enviou do <em land="en">Snap CI</em> e sua aplicação em <em land="en">rails</em> deverá estar online em alguns minutos.

A partir daqui, qualquer nova alteração que você fizer e enviar para seu Github será testada e entregue automaticamente pelo <em land="en">Snap CI</em>.
