---
layout: default
title: Continuous Deployment - cuz less hassle
permalink: continuous-travis
---

# Continuous Deployment with Travis

*Created by Floor Drees, [@floordrees](https://twitter.com/floordrees)* 

### What is this Continuous Deployment thing?

Continuous deployment is part of the continuous delivery 'movement'. The idea behind continuous delivery is to automate the software delivery process as far as possible. 

With a working continuous deployment chain in place you'll enforce Git deployments (everything must be committed to be tested and everything must be tested to be deployed), making collaboration easier and deployment faster. So you can focus on making your app even more awesome!

There are a few great companies sailing the continuous wave, in this guide we'll set up continuous deployment for our Ruby on Rails app from GitHub to anynines, using [Travis-ci](http://about.travis-ci.org/). 

__COACH__: Talk about the benefits of continuous deployment.

### Github, Travis CI and anynines

The first thing we need is an app in a Github repository. And we have just that! Next you'll need to make sure you followed the guide on how to deploy your app via anynines until the very last step.

Then, we need to create a file called `manifest.yml` in the main directory of your app, so we can save some information about the deployment there. In your terminal run:

{% highlight sh %}
cf push
{% endhighlight %}

This will trigger a first deployment to anynines. The cf gem will notice that there is no `manifest.yml` and will ask you a standard set of configuration questions such as the desired number and memory size of your app instances, whether and which services to bind to them and most importantly, whether you want to store this information.
Please answer this question with a 'hell yes' as it will create the desired `manifest.yml` file!

Once your push was successful, you should be able to access your application using a browser of your choice, which means your are ready to setup Travis!

For now we don't have 'real tests', so we will go ahead and create a Travis configuration file that will fake a succeeding test suite. Please go to your local app directory and create a ``.travis.yml`` file. At the moment, paste the following content. We’ll add some more information later on, using the Travis gem.

{% highlight sh %}
language: ruby
script: 'true'
{% endhighlight %}

Your app now contains the Travis configuration but how should Travis know when to pull your code from Github and trigger test execution? This is where Github hooks come into play!

#### Travis CI Github hook activation

Commit and push a code change to your repository and check travis-ci.org to see if your test suite is being executed. You should also receive an email that your build succeeded.

{% highlight sh %}
git add .  
git commit -m "test Travis integration"  
git push origin master
{% endhighlight %}

Now we can configure the actual deployment.
Let's use the travis gem:
{% highlight sh %}
gem install travis
{% endhighlight %}

Now use the `travis` command to setup the anynines deployment.
{% highlight sh %}
travis setup cloudfoundry
{% endhighlight %}

In case you don’t know the anynines target URL use
{% highlight sh %}
cf target
{% endhighlight %}

to gather all information required for Travis setup. This includes target url, username, the organization and space you are currently using. You can also take a look-see at the welcome mail you have received after signing up at anynines.com.

After the `travis` command has finished, your ``.travis.yml`` should look somewhat like this:
{% highlight sh %}
language: ruby
script: 'true'
deploy:
  provider: cloudfoundry
  target: https://api.de.a9s.eu
  username: jane.doe@example.com
  password:
    secure: your encryped password determined by the travis gem=
  organization: railsgirls
  space: heaven
  on:
    repo: jane/railsgirls
{% endhighlight %}

Don’t forget to commit and push your changes to ``.travis.yml`` as it will be required in your Github repository to take effect.

From now on whenever you commit changes to your Github repository, tests will be run and your app is being deployed. Travis will then show a log output similar to this:

{% highlight sh %}
Installing deploy dependencies
Fetching: addressable-2.3.5.gem (100%)
Successfully installed addressable-2.3.5
Fetching: multi_json-1.7.9.gem (100%)
Successfully installed multi_json-1.7.9
Fetching: caldecott-client-0.0.2.gem (100%)
Successfully installed caldecott-client-0.0.2
Fetching: i18n-0.6.5.gem (100%)
Successfully installed i18n-0.6.5
Fetching: tzinfo-0.3.37.gem (100%)
Successfully installed tzinfo-0.3.37
Fetching: minitest-4.7.5.gem (100%)
Successfully installed minitest-4.7.5
Fetching: atomic-1.1.13.gem (100%)
Building native extensions.  This could take a while...
Successfully installed atomic-1.1.13
Fetching: thread_safe-0.1.2.gem (100%)
Successfully installed thread_safe-0.1.2
Fetching: activesupport-4.0.0.gem (100%)
Successfully installed activesupport-4.0.0
Fetching: builder-3.1.4.gem (100%)
Successfully installed builder-3.1.4
Fetching: activemodel-4.0.0.gem (100%)
Successfully installed activemodel-4.0.0
Fetching: cf-uaa-lib-2.0.0.gem (100%)
Successfully installed cf-uaa-lib-2.0.0
Fetching: multipart-post-1.2.0.gem (100%)
Successfully installed multipart-post-1.2.0
Fetching: rubyzip-0.9.9.gem (100%)
Successfully installed rubyzip-0.9.9
Fetching: cfoundry-4.3.6.gem (100%)
Successfully installed cfoundry-4.3.6
Fetching: interact-0.5.2.gem (100%)
Successfully installed interact-0.5.2
Fetching: json_pure-1.8.0.gem (100%)
Successfully installed json_pure-1.8.0
Fetching: mothership-0.5.1.gem (100%)
Successfully installed mothership-0.5.1
Fetching: mime-types-1.25.gem (100%)
Successfully installed mime-types-1.25
Fetching: rest-client-1.6.7.gem (100%)
Successfully installed rest-client-1.6.7
Fetching: uuidtools-2.1.4.gem (100%)
Successfully installed uuidtools-2.1.4
Fetching: cf-5.2.2.gem (100%)
Successfully installed cf-5.2.2
22 gems installed
dpl.2
Preparing deploy
Setting target to https://api.de.a9s.eu...... OK
target: https://api.de.a9s.eu
Authenticating.. .  ... OK
Switching to organization railsgirls... OK
Switching to space heaven... OK
dpl.3
Deploying application
Using manifest file manifest.yml
Uploading railsgirls... OK
Stopping railsgirls... OK
Preparing to start railsgirls... OK
Checking status of app 'railsgirls'...
  0 of 1 instances running (1 starting)
  0 of 1 instances running (1 starting)
  1 of 1 instances running (1 running)
Push successful! App 'railsgirls' available at http://railsgirls.de.a9sapp.eu
Logging out... OK
{% endhighlight %}

This means your are done and good to go! 
