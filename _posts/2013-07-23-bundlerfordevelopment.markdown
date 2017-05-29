---
layout: default
title: Bundler for development
permalink: bundlerfordevelopment
---

# How to Set Up Bundler for Development

## *1.*Fork Bundler

Go to the Bundler Github [https://github.com/bundler/bundler](https://github.com/bundler/bundler)

Press the fork button.

Fork Bundler so you can create pull requests with your changes

<p>
<img src="../images/fork1.jpg" />
<br>
</p>

## *2.*Download a copy of your fork of Bundler

{% highlight sh %}
git clone https://github.com/user_name/bundler.git
{% endhighlight %}

## *3.*Change into the Bundler directory

{% highlight sh %}
cd bundler
{% endhighlight %}

## *4.*Configure the remote

{% highlight sh %}
git remote add upstream https://github.com/bundler/bundler.git
{% endhighlight %}

This connects your local repo to the upstream repo at Github.

## *5.*Install Bundler development dependencies

{% highlight sh %}
rake spec:deps
{% endhighlight %}

What is rake? [http://rake.rubyforge.org/](http://rake.rubyforge.org/)

## *6.*Run the Bundler test suite

{% highlight sh %}
rake spec
{% endhighlight %}

This could take about 15 minutes.
