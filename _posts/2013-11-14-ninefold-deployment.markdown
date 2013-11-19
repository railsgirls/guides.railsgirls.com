---
layout: default
title: Rails Girls on Ninefold
permalink: ninefold
---

# Put Your App Online With Ninefold

*Created by Risa Batta, [@mookiy](https://twitter.com/mookiy)*

OK. You’ve got the basics down and want to show off your awesome new Rails App to the world. Great!

<hr /> 

## Preparing your app

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

<hr />

## Deployment

#### Deploying with Ninefold

Ninefold will be pulling your code in from GitHub, so first thing’s first. 

**Step 1.** Sign up for a free account at [ninefold.com](http://www.ninefold.com).  

**Step 2.** Click on the giant Deploy Now button.

![Alright stop! Collaborate and listen](/images/ninefold/deploy_now.png)

**Step 3.** Choose GitHub as your repository you want to deploy from.  

![Ice is back with my brand new invention](/images/ninefold/select_repo1.png)

**Step 4.** Click on Sign in with GitHub.  Of course, read the blurb about how Ninefold accesses your GitHub.

We will ask you to grant us some permissions. (Ninefold will never make changes to your codebase or read your followers or your gists. These were just set by GitHub by default. We just require this so we can redeploy your app for you.)

![Something grabs ahold of me tightly](/images/ninefold/deploy_github.png)

**Step 5.** Time to select a repository and branch in the Connect Repository step.  Remember to choose the Rails app you want to deploy. You will want to click on the Repo you want (e.g. railsgirls) and then the branch (e.g. master).  Click Next. 

![Flow like a harpoon daily and nightly](/images/ninefold/select_repo2.png) ![Will it ever stop? Yo! I don't know!](/images/ninefold/select_repo3.png)

**Step 6.** In the next window, choose a combined server.  Pick your primary region based on your location.  Click Next.

![Turn off the lights, and we'll glow](/images/ninefold/select_infrastructure2.png)

**Step 7.** This is the last step! Name your app (it will also become part of your deployed app name).  Click Deploy App.

![To the extreme we rock the mic like a vandal](/images/ninefold/select_extras.png)

**Step 8.** Boom, done! Grab a drink, sit back, and relax. Ninefold will deploy your app!

![Light up the stage and deploy our apps like a champ-dle](/images/ninefold/boom_done.png)

**Step 9.** Once your app's been deployed, you'll want to click on View Details. You'll see your app information.  Click on the name that has yourappname1234.ninefold-apps.com (railsgirls4fcd.ninefold-apps.com in my case).

![Ice ice baby, dat datadat dat da da](/images/ninefold/view_app.png)

**Step 10.** Celebrate! Your app is now online for the world to see!

<hr />

## Closing remarks

Every time you push your changes to your github, Ninefold will automatically redeploy your app for you (just takes a few minutes)!
