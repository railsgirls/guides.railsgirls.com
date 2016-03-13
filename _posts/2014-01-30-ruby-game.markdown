---
layout: default
title: Write a little game in Ruby!
permalink: ruby-game
---

# Write a little game in Ruby!

*Created by Patrick Huesler, [@phuesler](https://twitter.com/phuesler) & Floor Drees, [@floordrees](https://twitter.com/floordrees) for [Rails Girls The Hague](http://railsgirls.com/thehague)* 

[gosu](http://www.libgosu.org/) is a 2D game development library. Gosu features easy to use and game-friendly interfaces to 2D graphics and text (accelerated by 3D hardware), sound samples and music as well as keyboard, mouse and gamepad/joystick input. Also includes demos for integration with RMagick, Chipmunk and OpenGL.

The actual source code, wiki, issue tracker etc. are all [hosted on GitHub](http://github.com/jlnr/gosu/). The best entry point into Gosu's documentation is the [wiki home page](http://github.com/jlnr/gosu/wiki).
Install:
{% highlight sh %}
gem install gosu
{% endhighlight %}

or add `gem "gosu", "~> 0.7.48"` to your Gemfile and run `bundle`.
Play around with the example games:
{% highlight sh %}
cd $GEM_HOME/gems/gosu-0.7.48/examples
{% endhighlight %}

and then: `ruby CptnRuby.rb`

or: `ruby RMagickIntegration.rb`

or: `ruby Tutorial.rb`

### Enough with those examples already!

Copy the repository by opening (a new tab in your) terminal. If you were working on the Rails Girls app in the mean time, make sure you're in your home directory by running ```cd```.

Now run
{% highlight sh %}
git clone https://github.com/FloorD/gosu_tutorial_RG_TH.git
{% endhighlight %}

aaand change into the proper directory using
{% highlight sh %} 
cd gosu_tutorial_RG_TH/jumpingem
{% endhighlight %}

### Run!

To play our little game, open it using the terminal:
{% highlight sh %} 
ruby game.rb
{% endhighlight %}

### So how does this work?

Let's inspect some code, shall we? Open `game.rb` in your texteditor. See the

{% highlight ruby %} 
!/usr/bin/env ruby -w
require 'rubygems' 
require 'gosu'
include Gosu
{% endhighlight %}

... right at the top of your file? Here we make sure we 'call' the necessary gem, so we can move on to our `class` (or multiple classes).
So we have our

{% highlight ruby %} 
class Game < Window 
end
{% endhighlight %}

... thing going on. The `def`'s you see within this Game class, are  methods. Here we **def**ine which instructions the program should follow. Just take a look at the following snippet:
{% highlight ruby %} 
def draw
  draw_quad 0, 400, Color::WHITE, 640, 400, Color::WHITE, 640, 500, Color::WHITE, 0, 500, Color::WHITE
    if @dir == :left then
      offs_x = -25
      factor = 1.0
    else
      offs_x = 25
      factor = -1.0
  end
  @cur_image.draw(@x + offs_x, @y - 49, 0, factor, 1.0)
end
{% endhighlight %}

Want to play around a bit? Copy the contents of `game.rb` in a new `.rb` file. Save it and name it as you'd like. Now try and change some stuff in the game and run it in your terminal to see the changes.

Think you have more graphic skills than Patrick (you probably do)? Then you can try and create a new `sprites.png`! Don't forget to call it here:

{% highlight ruby %} 
def initialize
    super(640, 480, false)
    self.caption = "Jump 'n Run"
    @standing, @walk1, @walk2, @jump = *Image.load_tiles(self, "sprites.png", 100, 160, false)
    @x, @y = 400, 0
    @vy = 0
    @dir = :left
    @cur_image = @standing
  end
{% endhighlight %}

And see the `Game.new.show`? That creates a new instance. It has no memory, so when you get stuck in the game, you can just start a new game. Have fun!

#### Credits

The assets used in vim adventures, you can find them [here](http://www.lostgarden.com/2007/05/dancs-miraculously-flexible-game.html)

The sounds usedm you'll find over at [Matthew Klingensmith (www.matthewklingensmith.com)](http://opengameart.org/content/matts-creative-commons-music)