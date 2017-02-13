---
layout: default
title: Touristic Autism-friendly Spots App 
permalink: touristic-autism_static-pages-tdd
---

# Test-Driven Development

*Created by Myriam Leggieri, [@iammyr](https://twitter.com/iammyr)*
*for [Rails Girls Galway](https://github.com/RailsGirlsGalway)*
The basic guides that have been merged and adapted are the [Ruby on Rails Tutorial](http://www.railstutorial.org/book), the [basic RailsGirls app](http://guides.railsgirls.com/app/) and the tutorials for [creating thumbnails](http://guides.railsgirls.com/thumbnails), [authenticating users](http://guides.railsgirls.com/devise/), [adding design](http://guides.railsgirls.com/design), [deploying to OpenShift](http://guides.railsgirls.com/openshift/), [adding comments](http://guides.railsgirls.com/commenting) and [Mark McDonnell's tutorial] (http://code.tutsplus.com/tutorials/testing-your-ruby-code-with-guard-rspec-pry--cms-19974).

Rails includes a default Test::Unit framework used to test your code. We will use a more advanced testing framework called RSpec to write a thorough test suite. We need to be able to write tests that are fast and give us instant feedback on problems with our code. 

We will use Guard and RSpec to monitor some of our files and run tests over them as soon as they get modified, so to be sure that the latest changes are not breaking the app anywhere. 

If any error is found, then we are going to dig into it so to understand the cause and fix it, by using Pry.

Finally, since we are assuming to be developing in collaboration with other via GitHub, we will also make sure that each contribution does not conflict when integrating with the others' ones. For this very reason, we will also commit, push and test the integration often, in a process called "Continuous Integration". We will use Travis-CI to support us.

##Continuous testing with Guard

In your Gemfile, add

{% highlight sh %}
group :test do
  gem 'rspec'
end

group :development do
  gem 'guard'
  gem 'guard-rspec'
end
{% endhighlight %}

Then run "bundle install". Then create a file called Rakefile in your main project directory and add

{% highlight sh %}
require 'rspec/core/rake_task'
 
RSpec::Core::RakeTask.new do |task|
  task.rspec_opts = ['--color', '--format', 'doc']
end
{% endhighlight %}

When you install RSpec, it gives you access to a built in Rake task and that's what we're using here. We create a new instance of RakeTask which by default creates a task called spec that will look for a folder called spec and will run all the test files within that folder, using the configuration options we've defined (here color and format of the test output on the command line).

Note: to run the tests just enter "rake spec" in your command line. You'll get zero failures because we haven't written either any test or any code, yet.

Now add the following to a new file (in your main project directory) called "Guardfile":

{% highlight sh %}
guard 'rspec' do
  # watch /app/views files
  watch(%r{^app/views/(.+).html.rb$}) do |m|
    "spec/features/#{m[1]}_spec.rb"
  end
 
# watch /spec/ files
  watch(%r{^spec/features/(.+).rb$}) do |m|
    "spec/features/#{m[1]}.rb"
  end
end
{% endhighlight %}

The contents of this file tells Guard what to do when we run the guard command. 

If we ran guard rspec then Guard would watch the specified files and execute the specified commands once any changes to those files had occurred. Note: because we only have one guard task, rspec, then that is run by default if we ran the command guard.

In this instance, we're telling Guard to watch all the files within our app/views and spec/features folders and if any changes occur to any of those files then to execute the test files within our spec/features folder to make sure no changes we made broke our tests (and subsequently didn't break our code).

Now, as in proper Test-Driven Development(TDD), let's create a test for our static "Home" page, before we even create the Home page. 

We're going to create a file titled home_spec.rb and place it in the spec/feature folder (as this is what we told Guard to expect). The purpose of this file is to become our specification file (in other words, this is going to be our test code and will represent the expected functionality).

Note: in Ruby the words "test" and "specification" are often considered interchangeable.

###TDD: Writing Test Code Before Application Code

Typically, if you write your application code first (so you're not doing TDD), then you will find yourself writing code that at some point in the future is over engineered and potentially obsolete. Through the process of refactoring or changing requirements, you may find that some functions will fail to ever be called.

This is why TDD is considered the better practice and the preferred development method to use, because every line of code you will produce has been produced for a reason: to get a failing specification (your actual business requirement) to pass. 

Let's write the test "home.html.erb_spec.rb as:
	
{% highlight sh %}
require 'spec_helper'

describe "test for the static page Home" do
  it "displays the text attribute of the message" do
    render
    rendered.should contain("Hello world!")
  end
end 
{% endhighlight %}


To help us reduce the boilerplate code, we'll place it inside of a special helper file that we'll load from our specification files. This file will be titled spec_helper.rb.

This file will do a couple of things:

*    tell Ruby where our main application code is located
*    load our application code (for the tests to run against)
*    load the pry gem (helps us debug our code; if we need to).

Here is the code:

{% highlight sh %}
$ << File.join(File.dirname(FILE), '..', 'app/views')
 
require 'pry'
require 'home'
{% endhighlight %}


Let's open a new command line, enter "guard" and leave it running: it will monitor our views in app/views and run tests from spec/features against them. If we now create an empty file "app/views/home.html.erb" guard will run the test and the test will unsurprisingly fail.

The point of TDD is to have a tight feedback loop, also known as 'red, green, refactor'). What this means in practice is:

* write a failing test
* write the least amount of code to get it to pass
* refactor the code

The error is telling us that...



Then let's create our static page Home. We create a PagesController whose purpose is to deal with static pages (e.g., Home, About, Help). Each page is represented by one action in the controller "pages_controller.rb".

{% highlight sh %}
class PagesController < ApplicationController
  def home
  end

  def about
  end

  def help
  end
end
{% endhighlight %}

Now we have to tell the server to match the browser requests for each different page to our actions:

{% highlight sh %}
match '/home' => 'pages#home'
match '/about' => 'pages#about'
match '/help' => 'pages#help'
{% endhighlight %}

We then create home.html.erb, about.html.erb, and hrlp.html.erb views under app/views/pages. These views contain whatever content you want on your static pages. They'll by default use your app's application.html.erb layout.

For now, we'll leave them empty and only add the following to home.html.erb, in order to satisfy our test.

{% highlight sh %}
Hello world!
{% endhighlight %}

Now, if we check the command line window where "guard" was running, we'll see it automatically did run our test as soon as we saved the changes to our home.html.erb file, and that the test is now succeeding.

*Note:* if we wanted to run the test manually rather than via Guard, we would have had to run "rspec spec/features/home.html.erb_spec.rb"


## Debugging with Pry

For the purpose of demonstrating Pry we are going to add more code to our controller (this extra code doesn't effect our test in any way).

{% highlight sh %}
class PagesController < ApplicationController
attr_accessor :test
 
  @@class_property = "I'm a class property"
 
  def home
    binding.pry
    @instance_property = "I'm an instance property"
    pubs
    privs
    "Hello RSpec!"
  end
 
  def about
    test_var = "I'm a test variable"
    test_var
  end

  def help
  end
 
  private
 
  def privs
    puts "I'm private"
  end
end
{% endhighlight %}

A break-point is a place within your code where execution will stop.
You can have multiple break-points set within your code and you create them using "binding.pry" (note it's been included above).

When you run your code you'll notice that the terminal will stop and place you inside your application's code at the exact spot your binding.pry was placed.

From this point Pry has access to the local scope. You can type "exit" to exit Pry and for your code to continue executing.

**Note:** Try finding where you are: (by typying) whereami; Stack Trace: wtf; Inspecting (available methods and properties): ls; Changing Scope: cd.

##Continuous Integration (CI) with Travis-CI

The principle of CI is to commit/push early and often to avoid conflicts between your code and the master branch. When you do (in this case we're committing to GitHub) then that should kick off a 'build' on your CI server which runs the relevant tests to ensure all is working as it should be.

Travis CI is a hosted continuous integration service for the open source community. It offers free CI services for open-source projects and also has a paid model for businesses. We'll be using the free open-source model on our GitHub repository.

The process is this:

*   Sign into Travis-CI using your GitHub account
*    Go to your "Accounts" page
*    Turn "on" any repositories you want to run CI on
*    Create a .travis.yml file within the root directory of your project and commit it to your GitHub repository

The .travis.yml file determines the configuration settings for Travis-CI so it knows how to handle running the tests for your project. Let's create it as follows:

{% highlight sh %}
language: ruby
cache: bundler
 
rvm:
  - 1.25.26
 
script: 'bundle exec rake spec'
 
bundler_args: --without development
 
branches:
  only:
    - master
 
notifications:
  email:
    - you@example.com
{% endhighlight %}

We need to add "gem 'rake'" to our Gemfile within the ":test" group, as this is a requirement of Travis-CI.

Travis-CI uses RVM (Ruby Version Manager) for installing Rubies on their servers. So we need to specify what Ruby versions we want to run our tests against.

Also, let's add to spec/spec_helper.rb the following:
{% highlight sh %}
 require 'pry' if ENV['APP_ENV'] == 'debug'"
{% endhighlight %}

and make clear in our Gemfile which gems are required for testing and which for development:

{% highlight sh %} 
group :test do
  gem 'rake'
  gem 'rspec'
end
 
group :development do
  gem 'guard'
  gem 'guard-rspec'
  gem 'pry'
 
  # Adds debugging steps to Pry
  # continue, step, next
  gem 'pry-remote'
  gem 'pry-nav'
end
{% endhighlight %}

**Note:** if you have any issues regarding Travis-CI then you can join the "#travis" channel on IRC freenode to get help answering any questions you may have.

