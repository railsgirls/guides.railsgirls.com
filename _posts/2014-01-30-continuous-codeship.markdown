---
layout: default
title: Continuous Deployment - cuz less hassle
permalink: continuous
---

# Continuous Deployment with the Codeship

*Created by Floor Drees, [@floordrees](https://twitter.com/floordrees)* 

### What is this Continuous Deployment thing?

Continuous deployment is part of the continuous delivery 'movement'. The idea behind continuous delivery is to automate the software delivery process as far as possible. 

With a working continuous deployment chain in place you'll enforce Git deployments (everything must be committed to be tested and everything must be tested to be deployed), making collaboration easier and deployment faster. So you can focus on making your app even more awesome!

There are a few great companies sailing the continuous wave, in this guide we'll set up continuous deployment for our Ruby on Rails app from GitHub to Heroku, using the [Codeship](http://www.codeship.io). 

__COACH__: Talk about the benefits of continuous deployment.

### Sign up for Codeship

First, you need [a Codeship account](https://www.codeship.io/). Sign in to the Codeship with GitHub. The Codeship needs access to your GitHub repositories to be able to set them up, so make sure you allow access.  

Back at the Codeship, let’s create your first project. The first step is to select GitHub as your repository provider. In the list of your GitHub repositories, search for the repository you want to set up and select it. In our case, that's the one called something like “railsgirls”.

Now your repository is connected and you can set up your test commands. We've created a Ruby on Rails application. So choose “Ruby on Rails” as the framework used. This configures the setup commands and the test commands for you. By deleting the hash key (`#`) you can uncomment test commands you want to use for your application. For now you probably don't have tests set up yet, so you can skip this step and get back to it later.

Now let's finish your setup and go to the dashboard. You can trigger a so-called 'new build' for your application by changing something and then pushing to your repository: 
{% highlight sh %}
git add .  
git commit -m "test Codeship integration"  
git push origin master
{% endhighlight %}

You can access the build details by clicking the arrow on the right. Here you can follow the build while it's still running. Better than reality tv - promised. 

... and a few seconds later your build succeeded! You see all the commands that were run. After a few initial preparation commands the Codeship ran the commands that you specified a few moments ago. You can inspect the output of a single command by clicking on it. 

You've already pushed to your repository, watched your build log and got a green build. So you can finish the assistant at the top by clicking on the "click to finish" button.

### Setup Continuous Deployment

Now let's deploy your application to Heroku. Go to your project settings by clicking on the settings icon in the projects dropdown on the Codeship. Then navigate to the "Deployment" section. As you want to deploy to Heroku, click on the "Heroku" button.

You are asked to enter the name of your Heroku application and your API key. I sure hope you wrote that down somewhere! Enter your application's name and API key (to retrieve your Heroku API key, go to your Heroku account and click "Show API key") and save your deployment configuration.

From now on the Codeship will deploy your application to Heroku, everytime you push to your GitHub repository. Neat! 

### Give it a try
Now let's push a change and see if it gets deployed. Change something in your application first, then commit and push the change.

{% highlight sh %}
git add .  
git commit -m "this changes everything"  
git push
{% endhighlight %}

And immediately another build will start running on the Codeship. Go back to your project overview and you'll see the commands we already know from your first build. Plus: your application gets deployed to Heroku now and should be online after a minute or two.