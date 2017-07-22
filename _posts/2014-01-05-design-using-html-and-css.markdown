---
layout: default
title: Add design to your App with HTML and CSS
permalink: design-html-css
---

## *1.*Design your header

put the following code to the bottom of `app/assets/stylesheets/application.css`:

{% highlight css %}
.navbar {
  min-height: 38px;
  background-color: #f55e55;
}
{% endhighlight %}

Now refresh the page and check the changes. You can try change the color or font of the header. You can check the color reference from [http://color.uisdc.com/](http://color.uisdc.com/).

Then put these lines at the bottom：

{% highlight css %}
.navbar a.brand { font-size: 18px; }
.navbar a.brand:hover {
 color: #fff;
 background-color: transparent;
 text-decoration: none;
}
{% endhighlight %}

**Coach:** explain the 4 states of a link


## *2.*Design your table

We simply use the twitter [Bootstrap](http://getbootstrap.com/) to polish our table. Find this line from app/views/ideas/index.html.erb and replace:

{% highlight html %}
<table>
{% endhighlight %}

with

{% highlight html %}
<table class="table">
{% endhighlight %}

Modify size of the picture using the following lines

{% highlight erb %}
<%= image_tag(idea.picture_url, :width => 600) if idea.picture.present? %>
{% endhighlight %}

try to change the width and see what's gonna happen

add the following lines to the bottom of file app/assets/stylesheets/ideas.css.scss:

{% highlight css %}
.container a:hover {
  color: #f55e55;
  text-decoration: none;
  background-color: rgba(255, 255, 255, 0);
}
{% endhighlight %}

try add some background style with property `background-image`, reference to [http://subtlepatterns.com/](http://subtlepatterns.com/) for some patterns.

## *3.*add style to footer

add the lines to bottom of  app/assets/stylesheets/application.css:

{% highlight css %}
footer {
  background-color: #ebebeb;
  padding: 30px 0;
}
{% endhighlight %}

try put more things into `footer`, then adjust it's position.

## *4.*add style to button

open [http://localhost:3000/ideas/new](http://localhost:3000/ideas/new) and find the `Create Idea` button.

add these lines to app/assets/stylesheets/ideas.css.scss

{% highlight css %}
.container input[type="submit"] {
  height: 30px;
  font-size: 13px;
  background-color: #f55e55;
  border: none;
  color: #fff;
}
{% endhighlight %}

**Coach:** explain how to use `border` in css, try modify the style of button like round the corner, add shadow or color etc.
