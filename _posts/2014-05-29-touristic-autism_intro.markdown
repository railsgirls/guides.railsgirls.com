---
layout: default
title: Touristic Autism-friendly Spots App
permalink: touristic-autism_intro
---

# Rails Girls Touristic Autism-friendly Spots App Tutorial

*Created by Myriam Leggieri, [@iammyr](https://twitter.com/iammyr)*
*for [Rails Girls Galway](https://github.com/RailsGirlsGalway)*


This guide merges, adapts and extends some of the basic RailsGirls guides **for the scenario**: description, displaying and commenting touristic places and rate them with respect to their autism-friendliness. This application was requested by the [Galway Autism Partnership](http://www.galwayautismpartnership.com/) to support autistic adults during their travelings.

The extension comprises of the following **new features**:

* TDD using Guide
* Resource Rating
* Authenticated User (via devise) permission setting

The basic guides that have been merged and adapted are the [Ruby on Rails Tutorial](http://www.railstutorial.org/book), the [basic RailsGirls app](http://guides.railsgirls.com/app/) and the tutorials for [creating thumbnails](http://guides.railsgirls.com/thumbnails), [authenticating users](http://guides.railsgirls.com/devise/), [adding design](http://guides.railsgirls.com/design), [deploying to OpenShift](http://guides.railsgirls.com/openshift/) and [adding comments](http://guides.railsgirls.com/commenting).



### [*0.*Installation](/install)

**Make sure you have Rails and Git installed.** [**Follow the installation guide**](/install), the [**Installing Git section of Pro Git**](http://www.git-scm.com/book/en/Getting-Started-Installing-Git) to get set up. Then configure GitHub by typing the following in your terminal:

{% highlight sh %}
git config --global user.name "Your Name"
git config --global user.email your.email@example.com
{% endhighlight %}

<p>one-time setup steps for GitHub.</p>

Sign up for a [free GitHub account](https://github.com/signup/free) if you don’t have one already.


### [*1.*Basic Web Application](/touristic-autism_basic-app)

### [*2.*Version control with Git](/touristic-autism_git)

### [*3.*Resource Modeling](/touristic-autism_resource-modeling)

### [*4.*Resource Rating](/touristic-autism_resource-rating)

### [*5.*Design](/touristic-autism_design)

### [*6.*Image upload and Thumbnails](/touristic-autism_image-upload)

**Optional - for advanced Rails Girls:**

### [*7.*Continuous Deployment](/touristic-autism_continuous-deployment)

### [*8.*Continuous Testing and Integration](/touristic-autism_static-pages-tdd)




## Additional Guides

* Guide 0: [Handy cheatsheet for Ruby, Rails, console etc.](http://www.pragtob.info/rails-beginner-cheatsheet/)
* Guide 1: [Put your app online with Heroku by Terence Lee](/heroku) / [Put your app online with OpenShift by Katie Miller](/openshift) / [Put your app online with anynines](/anynines) / [Put your app online with Trucker.io](/trucker)
* Guide 2: [Adding profile pictures with Gravatar](/gravatar)
* Guide 3: [Go through additional explanations for the App by Lucy Bain](https://github.com/lbain/railsgirls)


# Appendices

## Undoing things

Rails has some facilities to help you recover from mistakes.

For instance, you may decide to change the name of a controller. Since, when generating a controller, Rails creates many more files than the controller file itself, undoing the generation means removing a whole set of files. In Rails, this can be accomplished with rails destroy. In particular, these two commands cancel each other out:

{% highlight sh %}
rails generate controller FooBars baz quux
rails destroy  controller FooBars baz quux
{% endhighlight %}

Similarly, after we generate a model as follows:

{% highlight sh %}
rails generate model Foo bar:string baz:integer
{% endhighlight %}

This can be undone using

{% highlight sh %}
rails destroy model Foo
{% endhighlight %}

Migrations change the state of the database using

{% highlight sh %}
rails db:migrate
{% endhighlight %}

We can undo a single migration step using

{% highlight sh %}
rake db:rollback
{% endhighlight %}

To go all the way back to the beginning, we can use

{% highlight sh %}
rails db:migrate VERSION=0
{% endhighlight %}

As you might guess, substituting any other number for 0 migrates to that version number, where the version numbers come from listing the migrations sequentially.

To drop a table from the db enter

{% highlight sh %}
rails console
{% endhighlight %}

Then just type:

{% highlight ruby %}
ActiveRecord::Migration.drop_table(:<table-name>)
{% endhighlight %}

You can browse directly the database (if sqlite3 type ".quit" to exit afterwards) by typing

{% highlight sh %}
rails db
{% endhighlight %}
