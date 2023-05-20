---
layout: main_guide
title: Push your app to GitHub
description: "Share your code with others by pushing your app's code to GitHub."
permalink: github
---

# Push your app to GitHub

*Originally created by Alyson La, [@realalysonla](https://www.twitter.com/realalysonla)*

{% include main-guide-intro.html %}

Git is a tool with which it's possible to save your app's source code, view changes over time, share code online and collaborate with others.

{% coach %}
Talk a little about Git, version control, collaborating with others using Git, GitHub, deployment techniques using Git and Open Source.
{% endcoach %}

## Installing Git

Before working with Git, we first need to check if Git is already installed. In the terminal type the following command:

{% highlight sh %}
git --version
{% endhighlight %}

The output should mention Git version 1.8 or higher. If it is not installed (indicated by a "command not found" or similar error), or the version is lower than 1.8, please install or upgrade Git.

<div class="os-specific">
  <div class="mac">
<p>Run this command in the Terminal to install or upgrade Git on macOS.</p>
{% highlight sh %}
brew install git
{% endhighlight %}
  </div>
  <div class="nix">
<p>Follow the <a href="https://git-scm.com/download/linux">instructions for your Operating System</a> in the Git documentation.</p>
  </div>
  <div class="win">
<p>Please install Git by going to the <a href="https://git-scm.com/download/win">Git website</a>, download the Git installer for Windows and running the downloaded installer.</p>
  </div>
</div>

After installing or upgrading, run the `git --version` command again to make sure you are using a more recent version.

## Configuring Git

Once we're sure Git is installed, we can set up our local profile in Git. This profile will be used to describe who made the changes to files we'll store in Git. You can see who made which change and when.

Change "your name" and "your email" with your name and your email address. You can also use a nickname or an alias if you don't want to use your real name and email address. Be aware: the name and email address you configure here will be visible to others!

{% highlight sh %}
git config --global user.name "your-name"
git config --global user.email "your-email"
{% endhighlight %}

To check if a profile is already set up in Git, you can run this command, and look for the `user.name` and `user.email` values in the output:

{% highlight sh %}
git config --list
{% endhighlight %}

## Saving work in Git

Open the Terminal app, navigate to your _railsgirls_ app directory and run the following command. This will list out all the changed files in your app directory, which should be all the files for your app.

{% highlight sh %}
git status
{% endhighlight %}

We want to save all these files in Git so they can be pushed to the GitHub repository you just created. By running the following command you will add all those files staging area in Git, ready to be saved (committed).

{% highlight sh %}
git add .
{% endhighlight %}

The `git commit` command shown below will save the staged files in Git, along with the message "First commit".

{% highlight sh %}
git commit -m "First commit"
{% endhighlight %}

(The `-m` in the above command stands for "message".)

## Create a GitHub account

GitHub is a free, online, code-sharing platform. It is a _hub_ for source code saved in _Git_. We will use this to save and share our app's source code.

Visit the [GitHub website](https://github.com) and create an account or login if you already have an account at Github.

## Securely sharing your code with GitHub

The easiest method for managing authentication is creating a [Personal Access Token (PAT)](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) that will have matching parts stored on your computer and also on the GitHub site.

Because you are trying to get the code on your computer into your account on the GitHub website, you'll need to connect via the internet. GitHub offers connections over HTTPS and SSH. Using a Personal Access Token (PAT) requires that you use an HTTPS connection. This will be important in the next section, when you'll create your PAT. 

## Push your app to GitHub using the command line (part 1)

Now that you have a GitHub account, you can push (Git terminology for _upload_) your saved work to GitHub and share it with others.

Once signed in to GitHub, click on the plus icon (`+`) in the top right corner of the navigation bar. In the dropdown, choose "New repository".
Having trouble finding the right link? Visit this [new repository page](https://github.com/new) directly.

On the "Create a new repository" page, enter a repository name (like "railsgirls"), choose "public" for the repository's visibility and click the "Create repository" button. Leave the rest of the form untouched.

The next page will list the repository URL we will need to tell Git where to push your app's source code to. 

Be certain you are viewing the instructions for HTTPS, so that it will work with the PAT. In the top "Quick setup" section, click on the "HTTPS" button if it is not already selected, and see that all the instructions change the links to start with `https`.

You should use the "push an existing repository from the command line" instructions. Within that section, find the line that starts with `git remote add origin`. Copy the entire line and paste it into the Terminal app. Then press enter.

This step creates a Git _remote_, a _connection_, named "origin" pointing to the GitHub repository you just created in the local repository.

## Create the Personal Access Token

Next you need to [create the PAT](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token#creating-a-personal-access-token-classic). 

You can access your GitHub personal access tokens here: <https://github.com/settings/tokens>. Or, when you are logged in to GitHub, you can start on any page and click on your avatar in the top right. Then click "Settings", then "Developer settings", then "Personal access tokens", then "Tokens (classic)".

Once you are on the "Personal access tokens (classic)" page, click on the "Generate new token" dropdown menu and select "Generate new token (classic)". If you have set up two-factor authentication in your GitHub account, you will need to 2FA authenticate now. 

When you can see the "New personal access token (classic)" form, use the "Note" to describe this repo (e.g. "RailsGirls") and then select an expiration date. (If you plan to use this project beyond the expiration date, you'll need to repeat these steps when the PAT expires.)

Then, for scopes, select the top "repo" checkbox, that gives the PAT "Full control of private repositories".

Click "Generate token" at the bottom of the page.

On the next page you'll see your PAT. This is the only time you'll have access to it, so don't click away from this page until you have completed the _push_ step in the next section. 

Copy and save the PAT token, ideally in a secure password manager. Be careful not to copy any spaces before or after the token -- you can use the two-squares copy button at the end of the token to be certain. You can keep the browser window open until you've completed the next step.

## Push your app to GitHub using the command line (part 2)

Now we want to _push_ the local changes in the Git repository to the repository on GitHub with the following command in your terminal.

{% highlight sh %}
git push -u origin master
{% endhighlight %}

_Your app's branch name may be different, like `main`. Change the "master" argument to the branch name listed in `git branch`. Your current branch is indicated with the `*` symbol at the start of the line._

When the authentication prompt appears in your terminal, use your PAT as the password, example below. Note that when you paste your PAT in the password, it will not show. Don't paste again, or you will be entering the token twice.

{% highlight sh %}
Username: <your GitHub username>
Password: <paste in your personal access token>
{% endhighlight %}

You may need your PAT every time you want to push your code, or you can save the PAT on your computer. This process varies per operating system, so your coach can help you with this process if you plan to keep pushing your code to GitHub.

{% coach %}
Please help with caching the PAT, if the participants wants to. Find the latest guide for their operating system, or check out this guide for [storing the PAT on different Operating Systems](https://mgimond.github.io/Colby-summer-git-workshop-2021/authenticating-with-github.html#saving-tokens-in-windows).
{% endcoach %}

Congratulations your app is on GitHub! Refresh the page in the Browser and you should see a bunch of files there now.

## Saving more changes in Git

If you want to continue making changes and pushing them to GitHub you'll need to use the following three commands.

Add changes you want to save in Git to the _staging area_:

{% highlight sh %}
git add .
{% endhighlight %}

Save the changes with a commit message:

{% highlight sh %}
git commit -m "Type your commit message here"
{% endhighlight %}

Use a descriptive message so you can find back what you changed in which commit and why.

{% coach %}
Talk about what makes a good commit message (active, descriptive and short).
{% endcoach %}

And push the changes to GitHub:

{% highlight sh %}
git push origin master
{% endhighlight %}

_Your app's branch name may be different, like `main`. Change the "master" argument to the branch name listed in `git branch`. Your current branch is indicated with the `*` symbol at the start of the line._

## What's next?

### Learn more about Git

* Use a [Git Cheatsheet](https://training.github.com/downloads/github-git-cheat-sheet/) for frequently used commands ([also available as a PDF](https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf)).
* Look up more Git commands in [the Git documentation](https://git-scm.com/docs).
* Try out a Graphical User Interface (GUI) if you prefer a more visual experience for using Git. Try out an app like [GitHub Desktop](https://desktop.github.com/).
* In the future, as you'll work with more people on a project, you'll start working with branches and pull requests more often.

### Be a part of the Open Source community

* Follow your fellow Rails Girls & coaches on GitHub and see what they're working on.
* Star or watch their projects.
* [Fork a repository](https://docs.github.com/en/get-started/quickstart/fork-a-repo) (a "repo"), then clone and push changes to your fork. Share the changes with the originator by sending them a [pull request](https://help.github.com/articles/using-pull-requests)!
* Create an issue on a project when you find a bug.
* Explore other Open Source projects - search by programming language or keyword.
