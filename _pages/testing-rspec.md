---
layout: main_guide
title: Test your app with RSpec
permalink: testing-rspec
---

# Test your app with RSpec

*Originally created by Clemens Helm, [@clemenshelm](https://twitter.com/clemenshelm) and Floor Drees, [@floordrees](https://twitter.com/floordrees). Updated by Ana Schwendler, [@anaschwendler](https://twitter.com/anaschwendler)*

{% include main-guide-intro.html %}

[RSpec](https://rspec.info/) is a Ruby testing framework, that describes our application's behavior in a syntax that doesn't look much like Ruby. It outputs test results in your terminal, so you'll test your reading skills as well (pun intended).

{% coach %}
Talk about testing and Behavior-Driven Development.
{% endcoach %}

## *1.* Add the RSpec gem

Open up your `Gemfile` and add this line to the `:development` and `:test` groups, above the end tag:

{% highlight ruby %}
group :development, :test do
  ...
  gem "rspec-rails"
end
{% endhighlight %}

and run the following command to install the Ruby gem.

{% highlight sh %}
bundle install
{% endhighlight %}

Then run the following command, in order to setup RSpec in your app:

{% highlight sh %}
rails generate rspec:install
{% endhighlight %}

This adds the following files which are used for configuration:

- `.rspec`
- `spec/spec_helper.rb`
- `spec/rails_helper.rb`

## *2.* Create your first test!

Rubyists often use the words 'test' and 'specification' interchangeably, that's why you'll store your tests in the 'specs' directory.
To do that, do the following steps:

We will be creating a test for our `Idea` model. Create a `models` directory in your `spec` directory. Then create a new file called `idea_spec.rb` (`<model_name>_spec.rb`) in that directory.

Inside the new test file, we will want to make sure our idea has a name. In order to do that let's describe one of our specifications:

{% highlight ruby %}
require "rails_helper"

RSpec.describe Idea, type: :model do
  it "has a name" do
    skip
  end
end
{% endhighlight %}

In the Terminal app run:

{% highlight sh %}
rspec spec/models/idea_spec.rb
{% endhighlight %}

which will output that your test is "pending" as it's not yet implemented.

Let's add something to our test to make sure the idea has a name!

{% highlight ruby %}
require "rails_helper"

RSpec.describe Idea, type: :model do
  it "has a name" do # yep, you can totally use 'it'
    idea = Idea.create!(name: "My Awesome Idea Name") # creating a new idea 'instance'
    expect(idea.name).to eq("My Awesome Idea Name") # this is our expectation
  end
end
{% endhighlight %}

Run RSpec again, and you should see more satisfying green output this time, meaning all tests passed.

{% highlight sh %}
rspec spec/models/idea_spec.rb
{% endhighlight %}

## *3.* Make to-do's with tests

Yeah! Let's create to-do lists. Awesome!

A nifty RSpec feature is the functionality to mark certain tests as pending like we saw before. In other words, first you think about what your models should do, before writing the implementation and the test. You have an idea of what your model should do beforehand, and then you can write the code and tests for it.

Let's create our next test, by adding the lines below to our `idea_spec.rb` it will add another test and mark it as pending.

{% highlight ruby %}
it "has a description"
{% endhighlight %}

Can you finish this test? Can you think about other tests?

Consult the [RSpec documentation](https://rspec.info/documentation/), or search for an RSpec tutorial online, to find out what kind of tests you can make.

## *4.* Add more tests

We have our first test, we test if our idea has a name, but our idea can hold many more things. Let's test if it has comments or not.

{% highlight ruby %}
require "rails_helper"

RSpec.describe Idea, type: :model do
  # Your other tests here...

  it "has comments" do
    idea = Idea.create!(name: "My Awesome Idea Name")
    comment = Comment.create!(
      user_name: "My name",
      body: "My helpful comment",
      idea: idea # Link the comment to the idea
    )

    expect(comment.idea).to eq(idea)
  end
end
{% endhighlight %}

## *5.* Behavior-Driven Development

{% coach %}
Talk a bit about Behavior-Driven Development.
{% endcoach %}

By now you can create more tests alone. Feel free to talk to your coach to do that, or ways to create more tests.

Happy testing!
