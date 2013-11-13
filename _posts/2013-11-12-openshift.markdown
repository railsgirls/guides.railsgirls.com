---
layout: default
title: Rails Girls on OpenShift
permalink: openshift 
---

# Put Your App Online With OpenShift 

*Created by Katie Miller, [@codemiller](https://twitter.com/codemiller)*

### Get OpenShift 

OpenShift is a cloud computing Platform as a Service (PaaS) that makes it super easy to deploy apps online. It is open source and written in Ruby.

To get started [create an OpenShift Online account](https://openshift.redhat.com/app/account/new?web_user[promo_code]=railsgirls), which allows you to put three apps online for free. Once you are signed up, install the OpenShift RHC Client Tools by running these commands in a terminal and following the prompts:

{% highlight sh %}
gem install rhc
rhc setup
{% endhighlight %}

The above instructions assume you installed Ruby using RVM. If you used another approach, there is more info about installing RHC for different set-ups in [this guide](https://www.openshift.com/developers/rhc-client-tools-install).

__COACH__: Talk about the benefits of deploying to a PaaS such as OpenShift, as opposed to traditional servers. Discuss SSH and why we need to upload a public key to communicate securely.

### Preparing your app

#### Create OpenShift application

Create an OpenShift Rails application with a PostgreSQL database and navigate to its source code by running the following commands in a terminal:

{% highlight sh %}
rhc app create openshiftapp ruby-1.9 postgresql-9.2 --from-code=https://github.com/openshift/rails-example.git
cd openshiftapp
{% endhighlight %}

Open a browser window and go to the application URL given in the terminal output to view the example Rails application (the URL will have the form http://openshiftapp-*yourdomain*.rhcloud.com).

__COACH__: Explain version control systems and what 'git clone' means.

#### Replace example app code

Remove the example OpenShift application code and commit your changes by running the below commands from within your new OpenShift app directory (*openshiftapp*):

{% highlight sh %}
git rm -rf ./*
git commit -am "Removed OpenShift example app code"
{% endhighlight %}

Copy everything from the Rails application you have created elsewhere (probably in *railsgirls*) into this directory by running a command similar to the following from your new OpenShift app directory (*openshiftapp*). You may need to change the path below to point to the location of your *railsgirls* directory.

{% highlight sh %}
cp -rf ../railsgirls/* .
{% endhighlight %}

To prevent any pictures that we uploaded during app development being pushed to the cloud, run the command `echo "public/uploads" >> .gitignore`.

Add and commit the new and changed files in Git with the below commands.

{% highlight sh %}
git add -A
git commit -m "Added Rails Girls app code"
{% endhighlight %}

__COACH__: Explain the Git commands used and how .gitignore works.

#### Change database

The next step is to change the Rails Girls app database from SQLite to PostgreSQL. Open your application's *Gemfile* and replace:

{% highlight ruby %}
gem 'sqlite3'
{% endhighlight %}

with

{% highlight ruby %}
group :development do
  gem 'sqlite3'
end
group :production do
  gem 'pg'
end
{% endhighlight %}

Run `bundle install --without production` to set up your dependencies.

We also have to add some environment variables so the application can find the database when it is running on OpenShift. We can do that by restoring an older version of the *config/database.yml* file that we deleted with the rest of the example code earlier, as this version had the content we need. To achieve this, run the command `git checkout 68fcda0 config/database.yml`, where *68fcda0* is an identifier for a particular Git commit. You can see all the commits where this file has been changed with the command `git log config/database.yml` (type *q* to exit this view).

Open the *config/database.yml* file to check it has been updated. It should now contain environment variables, such as ENV['OPENSHIFT_POSTGRESQL_DB_USERNAME'].

Commit your changes with the command `git commit -am "Changed app database"`.

__COACH__: Talk about relational databases and how Git keeps track of changes.

### Deploy app to OpenShift

To deploy all your changes to the cloud, enter the command `git push` in your terminal. Refresh the app in your browser to see the result.

### Add environment variables

The app should be looking pretty good now, but there are some potential issues lurking because of the ephemeral nature of the deployment. When we push a new version of the application, anything stored within OpenShift's copy of the repo will be wiped to make way for the new files. This includes some log files and the images uploaded by users. To fix this, we can store these files in persistent directories on OpenShift instead; the filepaths of the locations we need are stored in environment variables.

__COACH__: Explain the motivation for using environment variables.

#### Redirect production logging

To change the location of the production log, open *config/environments/production.rb*.

Beneath the comment line:

{% highlight ruby %}
  # config.logger = ActiveSupport::TaggedLogging.new(SyslogLogger.new)
{% endhighlight %}

Add the line:

{% highlight ruby %}
  config.logger = ActiveSupport::Logger.new(File.join(ENV['OPENSHIFT_RUBY_LOG_DIR'], "production-#{Time.now.strftime('%Y%m%d')}.log"))
{% endhighlight %}

You can tail your application's logs with the command `rhc tail openshiftapp` (the output from the change you just made won't show up until the new file has been committed and pushed to OpenShift).

__COACH__: Discuss the value of application logging.

#### Persist uploaded images

The directory where uploaded pictures are currently stored is within the app repository, so it will be deleted when we rebuild. To switch the uploads directory to one that will persist, open *app/uploaders/picture_uploader.rb* and replace

{% highlight ruby %}
  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end
{% endhighlight %}

with

{% highlight ruby %}
  def store_dir
    ENV['OPENSHIFT_DATA_DIR'] + "/uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  def url
    "/files/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}/" + File.basename(file.path) 
  end
{% endhighlight %}

Now uploaded images will be stored in a persistent directory, but they will still be available through a similar URL to what we were using previously (we've just changed *uploads* to *files*). To make this work, we also need to add a symbolic link on the filesystem from the repository location to the real storage location. To do this, open *.openshift/action_hooks/build* and add the following code:

{% highlight sh %}
if [ ! -d $OPENSHIFT_DATA_DIR/uploads ]; then mkdir $OPENSHIFT_DATA_DIR/uploads; fi
ln -sf $OPENSHIFT_DATA_DIR/uploads $OPENSHIFT_REPO_DIR/public/files

{% endhighlight %}

This action hook code will run every time the OpenShift app is built, so the link between the directories will always be there when it's needed.

Commit your changes and push them to the cloud:

{% highlight sh %}
git commit -m "Added OpenShift environment variables"
git push
{% endhighlight %}

The images you uploaded before making this change will no longer display, but anything uploaded now will stick around between app rebuilds.

__COACH__: Explain symbolic links.

### Push code to GitHub

Now that your application is under source control with Git, you may also wish to share a copy with others on a Git repository website such as GitHub. To push your code to a GitHub repository, [create a repository](https://github.com/new) on GitHub and copy the SSH string (something like git@github.com:*username*/*reponame*.git). 

In your OpenShift app repository, open *.git/config*. Under the line that looks like:

{% highlight sh %}
[remote "origin"]
        url = ssh://*0123456789abcdef01234567*@openshiftapp-*yourdomain*.rhcloud.com/~/git/*openshiftapp*.git/
{% endhighlight %}

add another 'url =' line and paste in the string you copied

{% highlight sh %}
        url = git@github.com:*username*/*reponame*.git
{% endhighlight %}

Run the command `git push -u origin master` and your code will now be pushed both to OpenShift and GitHub (you can go back to the regular `git push` command for future updates).

__COACH__: Talk about the benefits of open source code.


### Conclusion

Your Rails app is now running in the cloud on [OpenShift](https://www.openshift.com/developers). You can push whatever other changes you like and share the URL to show off your app to your friends.


