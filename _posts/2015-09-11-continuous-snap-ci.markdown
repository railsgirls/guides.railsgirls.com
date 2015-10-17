---
layout: default
title: Continuous Deployment - cuz less hassle
permalink: continuous-snap-ci
---

# Continuous Deployment with the Snap CI

*Created by Akshay Karle, [@akshay_karle](https://twitter.com/akshay_karle)*

### What is this Continuous Deployment thing?

Continuous deployment is part of the continuous delivery 'movement'. The idea behind continuous delivery is to automate the software delivery process as far as possible.

With a working continuous deployment chain in place you'll enforce Git deployments (everything must be committed to be tested and everything must be tested to be deployed), making collaboration easier and deployment faster. So you can focus on making your app even more awesome!

There are a few great companies sailing the continuous wave, in this guide we'll set up continuous deployment for our Ruby on Rails app from GitHub to Heroku, using the [Snap CI](https://snap-ci.com).

__COACH__: Talk about the benefits of continuous deployment.

### Sign up for Snap CI

First, you need [a Snap CI account](https://snap-ci.com/). Sign in to the Snap CI with GitHub. Snap CI needs access to your GitHub repositories to be able to set them up, so make sure you allow access.

Back at the Snap CI, let’s create your first pipeline. The first step is to select GitHub as your repository provider. In the list of your GitHub repositories, search for the repository you want to set up and select it. In our case, that's the one called something like “railsgirls”.

Once you select the repository you wish to build, Snap CI will perform detections on your repository and makes a best attempt to automatically setup your [deployment pipeline](http://martinfowler.com/bliki/DeploymentPipeline.html) for you which will allow you to run your tests and deployments.

After a few seconds, Snap CI will automatically start building your repository, at this point you can click through the stages setup by Snap to see what they commands they run.

Sometimes, however, Snap CI may not be able to detect the right commands to build and test your repository. In such cases you can edit your pipeline configuration by visiting the Configuration page from the Builds page of your newly created pipeline and clicking 'Edit' to edit the pipeline. Now you can add or edit an existing stage which will build and run all the tests for your application.

If you feel unsure what stages you should be adding, you can have a look at the different Build recipes provided under the Ruby sub-category when adding a stage to figure out what commands should be run to correctly build and test your application. You can also take a look at the [getting started guide](https://docs.snap-ci.com/getting-started/) in the Snap CI documentation.

Once you've finished editing your pipeline configuration click 'Save'. This will save your configuration and automatically trigger a new build. You should now have a green build if all your tests pass of course :)

In case you have any test failures however, you can fix those and push the changes to GitHub:

{% highlight sh %}
git add .
git commit -m "fix tests"
git push origin master
{% endhighlight %}

Snap CI will automatically detect the changes from GitHub and run a new instance of the pipeline. At this point you've already started testing your code.

### Setup Continuous Deployment

The next step is to deploy your application. There are various platforms to deploy to, for now, let's look at how you can deploy to [Heroku](https://www.heroku.com/) as it is the easiest.

Go to your pipeline configuration edit page again and add a new Stage. This time Select the 'Deploy' category from the recipes on the left. The select 'Basic' recipe in the Heroku sub-category.

Enter a stage name of your choice (eg: deploy, go-live, etc.), keep the trigger automatic and then click 'Run as' dropdown to Sign into Heroku. Perform the sign in and authorise Snap CI. You should automatically comeback to Snap CI after the authorization. You can now select the Heroku application where you wish to deploy or create a new application from Snap CI itself. Check the 'Perform DB migrate' checkbox and save your configuration.

This should trigger another new build in Snap CI, but this time it runs the stage you just created which deploys to Heroku. Once the pipeline goes green, visit the Heroku application page where you deployed from Snap CI and your rails application should be online in a few minutes.

From here on, any new changes you make and push to your GitHub will be tested and deployed automatically by Snap CI.
