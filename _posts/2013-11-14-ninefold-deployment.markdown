---
layout: default
title: Rails Girls on Ninefold
permalink: ninefold
---

# Put Your App Online With Ninefold

*Created by Risa Batta, [@mookiy](https://twitter.com/mookiy)*

OK. You’ve got the basics down and want to show off your awesome new Rails App to the world. Great! 

### Preparing your app

#### Update your database to Postgres

In order to deploy to Ninefold, you’ll need to change your Gemfile to get your database to work properly.  In the Gemfile, change the following:

{% highlight ruby %}
gem 'sqlite3'
{% endhighlight %}

to 

{% highlight ruby %}
group :development do
  gem 'sqlite3'
end

group :production do
  gem 'pg'
end
{% endhighlight %}

Save then run `bundle install --without production` to setup your dependencies. By running bundle install, the Gemfile and Gemfile.lock files will match up. By running --without production, it skips the group :production.

#### Version control

You’ll have to add your app to your Git repository. Type the following into the terminal:

{% highlight sh %}
git init
git add .
git commit -m "initial commit"
{% endhighlight %}

Now you’ll have to push your work to GitHub. You can create an account for free here: [GitHub](http://www.github.com). Follow the directions found here to create a repo and push your app to it: [Create a repo](https://help.github.com/articles/create-a-repo).

#### Deployment

Ninefold will be pulling your code in from GitHub, so first thing’s first. Sign up for a free account at [Ninefold.com](http://www.ninefold.com).  
![Alright stop!](/images/ninefold/ninefold1.png)

Click on the giant Deploy Now button.

![Collaborate and listen](/images/ninefold/deploy_now.png)

Choose GitHub as your repository you want to deploy from.

![Ice is back with my brand new invention](/images/ninefold/select_repo1.png)

Click on Sign in with GitHub.  (Of course, read the blurb about how Ninefold accesses your GitHub)

![Something grabs ahold of me tightly](/images/ninefold/deploy_github.png)

We will ask you to grant us some permissions. (We require write access in order to add WebHooks. And Ninefold triggers a redeploy every time you commit to the branch you’ve deployed against.  Of course, Ninefold will never make changes to your codebase or read your followers or your gists. These were just set by GitHub by default.)

Time to select a repository and branch in the Connect Repository step.  Remember to choose the Rails app you want to deploy. 

* Click on the Repo you want (e.g. railsgirls). 
* Choose the branch (e.g. master).  
* Click Next.

![Flow like a harpoon daily and nightly](/images/ninefold/select_repo2.png) ![Will it ever stop? Yo! I don't know!](/images/ninefold/select_repo3.png)

In the next window, choose your app’s infrastructure.

* Choose the tiered (db and app servers are separate) or the combined one.  
* Choose your primary region.  
* Choose your database disk size.  
* Click Next.

![Turn off the lights, and we'll glow](/images/ninefold/select_infrastructure2.png)

This is the last step! Name your app (it will also become part of your deployed app name).
* Ensure the software stack is correct and any add-ons are added on.
* If you’ve got additional deployment commands, go ahead and click them and add them in.  If not, click Deploy App.

![To the extreme we rock the mic like a vandal](/images/ninefold/select_extras.png)

Boom, done! Grab a drink, sit back, and relax. Ninefold will deploy your app!

![Light up the stage and deploy our apps like a champ-dle](/images/ninefold/boom_done.png)

#### Closing remarks

Every time you push your changes to your github, Ninefold will automatically redeploy your app for you!
