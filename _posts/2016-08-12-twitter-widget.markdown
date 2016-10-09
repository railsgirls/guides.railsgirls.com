---
layout: default
title: Twitter widget
permalink: twitter-widget
---

# Twitter widget

*Written by Asta Bevainyte, [@astux7](https://twitter.com/astux7)*


This exercise is intended to teach how to use twitter widget and how to add it to the [http://localhost:3000/pages/info](http://localhost:3000/pages/info)

Where is 2 ways to do it, if you want to do it quick just adding a prepared code, go to paragraph 2.

**Coach** explain what is widget.


1. Twitter widget configuration

+ Login to [Twitter](https://twitter.com/)

+ Go to [https://publish.twitter.com/#](https://publish.twitter.com/#) 

+ Select what you would like to embed, .i.e your *profile* then the link should look like (https://twitter.com/_your_twitter_username)

+ Select display options between 'Embedded Timeline' or 'Twitter Buttons' 

+ Copy code


2. Add Twitter generated code to your info page

 + You have Twitter coppied code which looks like this if you selected ```profile``` and ```embedded timeline``` options (*_your_twitter_username* - you need to change to your twitter name)

  ```
    <a class="twitter-timeline" href="https://twitter.com/_your_twitter_username">Tweets by _your_twitter_username</a> <script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>
  ```

 + Add this code to app/views/pages/info.html.erb at the end of the file

 + Save and run ```rails server```

 + Open your browser and go to [http://localhost:3000/pages/info](http://localhost:3000/pages/info) and check your Twitter profile
  
