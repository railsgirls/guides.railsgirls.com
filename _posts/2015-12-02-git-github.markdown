---
layout: default
title: Envie seu código para o GitHub
permalink: git-github
---

# Envie seu código para o GitHub

*Traduzido e adaptado de [Push Your App to GitHub](http://guides.railsgirls.com/github){:target="_blank"}*

##*1.* Instale o Git

Verifique se você tem o Git instalado na sua máquina. No terminal, digite:

	{% highlight sh %}
		git --version #1.8 ou maior é preferível
	{% endhighlight %}

Caso contrário, faça download do Git [aqui](http://git-scm.com/downloads){:target="_blank"}.

Depois da instalação, configure suas preferências no Git. No terminal digite:

	{% highlight sh %}
		git config --global user.name "Seu Nome" #configura o nome no Git
		git config --global user.email "Seu email" #configura email no Git
	{% endhighlight %}

Para verificar as configurações do Git:

	{% highlight sh %}
		git config --list
	{% endhighlight %}

## *2.* Crie uma conta no Github

Crie uma conta grátis no [GitHub](https://github.com){:target="_blank"} ou faça o login caso você já possua uma clicando na opção `Sign In`.

![Criar um conta grátis no Github](../images/join_github.png)

**COACH:**: Fale um pouco sobre git, controle de versão e software open source

## *3.* Envie seu código para o GitHub usando a linha de comando

No seu perfil de usuário no Github, clique em `+/New repository`:

![Criar um repositório no Github 1](../images/github_account_1.png)

Em seguida dê um nome a ele, como por exemplo *rails-girls*, uma breve descrição, marque a opção `public` para deixá-lo visível a todos e clique em `Create Repository`.

![Criar um repositório no Github 2](../images/github_account_2.png)

No terminal, certifique-se que você está no diretório da aplicação *railsgirls*:

{% highlight sh %}
	cd /projects/railsgirls #entra no diretório do projeto
{% endhighlight %}

E depois digite:

{% highlight sh %}
	git init #inicializa um repositório git com seu projeto
{% endhighlight %}

Agora verifique se existe um arquivo chamado `README.md` no diretório do seu projeto *railsgirls*:

<div class="os-specific">
  <div class="nix">
		{% highlight sh %}
			ls README.md
		{% endhighlight %}
  </div>
  <div class="win">
	{% highlight sh %}
		dir README.md
	{% endhighlight %}
  </div>
</div>

Se o arquivo não existir, crie-o com o seguinte comando:

<div class="os-specific">
  <div class="nix">
		{% highlight sh %}
			touch README.md
		{% endhighlight %}
  </div>
  <div class="win">
		{% highlight sh %}
			type nul > README.md
		{% endhighlight %}
  </div>
</div>

**COACH:**
Fale um pouco sobre a importância do arquivo `README.md`

No seu terminal, digite:

{% highlight sh %}
	git status # lista todos os arquivos no diretório do seu projeto
{% endhighlight %}

**COACH:** Fale um pouco sobre os comandos git mais importantes

Para adicionar arquivos ao controle de versão do git execute:

{% highlight sh %}
	git add . #adiciona todos os arquivos e mudanças até agora
{% endhighlight %}

Para gravar mudanças no seu repositório, digite no seu terminal:

{% highlight sh %}
	git commit -m "first commit" #grava mudanças na área de trabalho passando uma mensagem
{% endhighlight %}

Para adicionar um repositório remoto para onde enviar e receber alterações da sua área de trabalho, digite:

{% highlight sh %}
	git remote add origin https://github.com/username/rails-girls.git # Cria um remote, chamado "origin" apontando para o repositório do GitHub que você acabou de criar
{% endhighlight %}

A página do seu repositório Github listará a URL do seu repositório Git. Para copiar a URL para sua área de transferência direto basta clicar no link ao lado direito da caixa que contém essa URL.

Agora digite no seu terminal:

{% highlight sh %}
	git push -u origin master # envia seus commits locais ao branch "master" no seu repositório no Github
{% endhighlight %}

Parabéns!!! Agora o código da sua aplicação está no Github!! Você pode visualizá-lo acessando a mesma URL que você usou antes: https://github.com/nomeusuario/railsgirls (sem a parte .git)

Recapitulando, se você quer continuar fazendo mudanças e as enviando ao Github você só precisa usar os seguntes comandos:

{% highlight sh %}
	git add . #adiciona todos os arquivos e mudanças até agora
{% endhighlight %}

{% highlight sh %}
	git commit -m "first commit" #grava mudanças na área de trabalho passando uma mensagem
{% endhighlight %}

{% highlight sh %}
	git push origin master # envia seus commits locais ao branch "master" no seu repositório no Github
{% endhighlight %}

## Próximos passos

### Faça parte da comunidade open source

 * Siga as suas companheiras Rails Girls e treinadores no GitHub
 * Acompanhe e favorite seus projetos
 * Faça [Fork](https://help.github.com/articles/fork-a-repo){:target="_blank"} de um repositório, clone e envie mudanças ao seu *fork*. Compartilhe mudanças com o criador do projeto clonado enviando um [pull request](https://help.github.com/articles/using-pull-requests){:target="_blank"} a ele!
 * Crie um *issue* em um projeto quando você encontrar um bug
 * Explore outros projetos open source - procure por linguagem de programação ou palavra-chave

### Aprenda mais sobre o Git e Github

 * [Git Book](https://git-scm.com/book/pt-br/v1){:target="_blank"}
 * [trygit.org](http://try.github.io/){:target="_blank"}
* [Github - Generating SSH Keys](https://help.github.com/articles/generating-ssh-keys/){:target="_blank"}
