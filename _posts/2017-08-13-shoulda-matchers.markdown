---
layout: default
title: Simplify your tests with shoulda matchers
permalink: testing-shoulda-matchers
---

# Simplifying your tests with Shoulda Matchers

*Created by Ana Schwendler, [@anaschwendler](https://twitter.com/anaschwendler)*

**This guide assumes that you have already built a Rails Girls app by** [**following the app development guide**](/app)
**the RSpec tutorial by** [**this guide**](/testing-rspec)
**and the Commenting tutorial by** [**this guide**](/commenting)

[Shoulda Matchers](https://github.com/thoughtbot/shoulda-matchers) is a Ruby testing gem, that provides RSpec- and Minitest-compatible one-liners that test common Rails functionality. These tests would otherwise be much longer, more complex, and error-prone.

__COACH__: Talk about testing and Behavior-Driven Development.

## *1.*Add Shoulda Matchers gem

Open up your `Gemfile` and add this line to the `:test` group, above the end tag:

For Rails 4.x:

{% highlight ruby %}
group :test do
  ...
  gem 'shoulda-matchers', '~> 3.1'
end
{% endhighlight %}

For Rails 5.0:

{% highlight ruby %}
group :test do
  ...
  gem 'shoulda-matchers', git: 'https://github.com/thoughtbot/shoulda-matchers.git', branch: 'rails-5'
end
{% endhighlight %}

and run
{% highlight sh %}
bundle install
{% endhighlight %}
to install the gem.

__COACH__: Talk about googling terminal output.

## *2.*Adjust your `rails_helper.rb`

In our case, we will be using RSpec to test our project, so we need to say to our `rails_helper.rb` that we are using Shoulda Matchers:
Place above the end tag (check the indentation):
{% highlight ruby %}
  Shoulda::Matchers.configure do |config|
    config.integrate do |with|
      # Choose a test framework:
      with.test_framework :rspec
      with.library :rails
    end
  end
{% endhighlight %}

__COACH__: Talk about why we are adjusting the gem inside `rails_helper.rb`.

In your terminal run
{% highlight sh %}
rspec spec/models/idea_spec.rb
{% endhighlight %}

It should show that our test is running ok.

## *3.*Testing!

It is pretty simple to test using Shoulda Matchers.
For our first test we already stated that an Idea has many comments, in the [**Comments for Rails Girls App tutorial**](/commenting)

To test if that is working properly, we can add the lines below to our `spec/lib/idea_spec.rb`, above the first test that we've created:

{% highlight ruby %}
  describe "associations" do
    it{ is_expected.to have_many(:comments) }
  end
{% endhighlight %}

This is an association test.
__COACH__: Talk about association tests.

## *4.* Test-Driven Development

__COACH__: Talk about TDD, and how we start adding features to our app by testing it first.

Another feature we can add to our app is to make ideas always named. How could we do that? Let's get started saying ideas should always have a name.

Let's begin by creating a test for it. We can do that by adding the following lines to our `spec/lib/idea_spec.rb`:

{% highlight ruby %}
  describe "validations" do
    it{ is_expected.to validate_presence_of :name }
  end
{% endhighlight %}

add it below our association test.

After that, in your terminal run
{% highlight sh %}
rspec spec/models/idea_spec.rb
{% endhighlight %}

It should gives us that we are not properly validating it (and we really are not). So to validate that, we need to add the following lines to our model, so we can validate the presence of name in our Idea.

{% highlight ruby %}
  validates :name, presence: true
{% endhighlight %}

add it below our has_many statement.

now, back in your terminal run
{% highlight sh %}
rspec spec/models/idea_spec.rb
{% endhighlight %}

It should give the positive result.

## *5.* Do it by yourself!
Can you continue this tutorial by doing a test to validate the presence of a description?

Can you imagine another tests to make?

Happy testing!


