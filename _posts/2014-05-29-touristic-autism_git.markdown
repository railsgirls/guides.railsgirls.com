---
layout: default
title: Touristic Autism-friendly Spots App 
permalink: touristic-autism_git
---

# Version Control with Git

*Created by Myriam Leggieri, [@iammyr](https://twitter.com/iammyr)*
*for [Rails Girls Galway](https://github.com/RailsGirlsGalway)*
The basic guides that have been merged and adapted are the [Ruby on Rails Tutorial](http://www.railstutorial.org/book), the [basic RailsGirls app](http://guides.railsgirls.com/app/) and the tutorials for [creating thumbnails](http://guides.railsgirls.com/thumbnails), [authenticating users](http://guides.railsgirls.com/devise/), [adding design](http://guides.railsgirls.com/design), [deploying to OpenShift](http://guides.railsgirls.com/openshift/) and [adding comments](http://guides.railsgirls.com/commenting).


Navigate to the root directory of the first app and initialize a new repository:

<div class="os-specific">
  <div class="nix">
    {% highlight sh %}
      $ git init
    {% endhighlight %}
  </div>
</div>

Before adding the project to the repository, let's tell Git which files to ignore - because too frequently subject to changes - by listing them in the .gitignore file. The "rails new" command already create a .gitignore file but let's extend it with the following.

<div class="os-specific">
  <div class="nix">
    {% highlight sh %}
# Ignore other unneeded files.
database.yml
# Ignore Rails documentation files
doc/
# Ignore Vim and Emacs swap files
*.swp
*~
.project
# Ignore (for OS X users) the .DS_Store directories created by the Mac Finder application
.DS_Store
.idea
.secret
  {% endhighlight %}
  </div>
</div>

Add the changes (recursively adding every sub-directory, too).
<div class="os-specific">
  <div class="nix">
    {% highlight sh %}
git add . 
  {% endhighlight %}
  </div>
</div>

The "git add" command adds the project files to a staging area, which contains pending changes to your projectbu; you can see which files are in the staging area using the status command:

<div class="os-specific">
  <div class="nix">
    {% highlight sh %}
$ git status
  {% endhighlight %}
  </div>
</div>

Now commit the changes while justifying them with a message:
<div class="os-specific">
  <div class="nix">
    {% highlight sh %}
$ git commit -m "Initialize repository"
  {% endhighlight %}
  </div>
Git commits are local, recorded only on the machine on which the commits occur. You can view a list of all the commit messages with "git log" typing "q" to quit.
</div>

Now we want our changes to be pushed from our local machine to a remote repository.
[Create a repository](http://github.com/new) called "railsgirls-galway-2014" and fill in the information. Do not to initialize the repository with a README file since "rails new" already created that automatically. 
Push up your local changes to the remote repository as follows:

<div class="os-specific">
  <div class="nix">
    {% highlight sh %}
$ git remote add origin https://github.com/<username>/railsgirls-galway-2014.git
$ git push -u origin master
  {% endhighlight %}
  </div>
The result is a page at GitHub (for instance, [here's mine](https://github.com/iammyr/railsgirls-galway-2014)) for our application repository, which provides nice rendering, sharing functionalities and statistics: take a look by yourself at https://github.com/<your username>/railsgirls-galway-2014
</div>

**Coach:** Explain the branch-edit-commit-merge workflow on GitHub: modify the README file to be more descriptive.
([Slides by Myriam Leggieri @iammyr]())

