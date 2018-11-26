# Rails Girls Guides

Our aim is to give tools for women to understand technology. The Rails Girls events do this by providing a great first experience on building the Internet.

Rails Girls was founded in end of 2010 in Helsinki. Originally intended as a onetime event, we never thought to see so many local chapters all around the world! This guide has been put together to help you get started.

You can use our materials and instructions to roll out your own workshop in your city, workplace or kitchen! Read more about Rails Girls at http://railsgirls.com

## Quick start

View the guides at http://guides.railsgirls.com or clone this repo and install & run [jekyll](https://github.com/mojombo/jekyll)

### Installing jekyll

```
$ cd railsgirls.github.io
```

```
$ bundle install
```

## Quick start with Docker

Alternatively, you can run the app using [Docker](https://docs.docker.com/install/):

```
$ docker build . -t railsgirls_dev
$ docker run -p 80:4000 -v $(pwd):/site railsgirls_dev
```

Or, if you also have [Docker Compose](https://docs.docker.com/compose/install/), simply launch this command:

```
$ docker-compose up
```

The app will then be accessible on [127.0.0.1](http://127.0.0.1/)!

Note: Thanks to the volume we created via the `-v` option or the `volumes` key in the `docker-compose.yml` file, the changes you make in the source code will directly be reflected in the container and you won't need to rebuild/restart every time to apply them.

### Pygments and Code Highlighting

The guides use the [pygments](http://pygments.org/) library to do syntax highlighting. If you don't have it installed you won't be able to see the highlight sections like the following:

```
{% highlight %}
{% endhighlight %}
```

If you aren't editing the code blocks, you can safely ignore this. If you want pygments, you can follow the [install instructions](http://jekyllrb.com/docs/installation/) in the "Pygments" section.

### Run jekyll

```
$ bundle exec jekyll server --watch
```

### Styling

Wrap keyboard shortcuts with [kbd](https://www.w3.org/wiki/HTML/Elements/kbd) HTML tag.

To make posts consistent in style use `Ctrl+C` over `CTRL-c`/`ctrl+c`

```
To shut down the server you can hit <kbd>Ctrl</kbd>+<kbd>C</kbd>
```

### Having trouble?

You might find some useful hints in this jekyll issue if it's not working as expected: [Issue 503](https://github.com/mojombo/jekyll/issues/503)

## Contributing a Guide

To contribute a guide, view the instructions at http://guides.railsgirls.com/contributing

## Twitter

For updates and more follow [@railsgirls](https://twitter.com/railsgirls)

## Website & Blog

Official website and blog for Rails Girls movement can be found at http://railsgirls.com

## E-mail list

Global mailing list for Rails Girls events at http://groups.google.com/group/rails-girls-team

## Credits

* Karri Saarinen / [@karrisaarinen](https://twitter.com/karrisaarinen) / [github](http://github.com/ksaa)
* Linda Liukas / [@lindaliukas](https://twitter.com/lindaliukas) / [github](http://github.com/lindaliukas)
* Vesa Vänskä / [@vesan](https://twitter.com/vesan) / [github](http://github.com/vesan)
* Terence Lee / [@hone02](https://twitter.com/hone02) / [github](http://github.com/hone)

..and all the other coaches and people making Rails Girls awesome. Please add yourself!
