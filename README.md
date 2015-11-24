# Rails Girls Guides
Esse repositório é um fork do repositório oficial do [Rails Girls Guides](https://github.com/railsgirls/railsgirls.github.com) feito para o evento [Rails Girls Rio 2015](http://railsgirls.com/riodejaneiro)

### Instalando as dependências do projeto

A única dependência do projeto é a gem [github-pages](https://github.com/github/pages-gem) que facilita a manutenção de um ambiente local usando [Jekyll] (https://github.com/mojombo/jekyll) e sincronizando-o com GitHub Pages.

```
$ cd rails-girls-guides
```

```
$ bundle install
```

### Pygments e Code Highlighting

Esse guia utilizada a biblioteca [pygments](http://pygments.org/) para fazer syntax highlighting. Se você não a tem instalada, não será capaz de ver as seções destacadas como a seguinte:

```
{% highlight %}
{% endhighlight %}
```

Se você quiser usar pygments, siga o [tutorial de instalação](https://github.com/mojombo/jekyll/wiki/Install) na seção "Pygments".

### Execute o jekyll

```
$ jekyll server --watch # a flag --watch observa mudanças no filesystem e reconstrói o site a cada mudança
```

### Styling

Para incluir atalhos de teclado use a tag HTML [kbd](https://www.w3.org/wiki/HTML/Elements/kbd).

Para manter a consistência de estilo dos posts escolha `Ctrl+C` ao invés de `CTRL-c`/`ctrl+c`

```
Para matar o servidor, use <kbd>Ctrl</kbd>+<kbd>C</kbd>
```

## Website & Blog


Website oficial do Rails Girls Rio pode ser encontrado em: http://railsgirls.com/riodejaneiro
