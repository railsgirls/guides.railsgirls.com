---
layout: default
title: Rails Girls on OpenShift
permalink: openshift 
---

# Put Your App Online With OpenShift 

*Created by Katie Miller, [@codemiller](https://twitter.com/codemiller)*

### Get OpenShift 

OpenShift is a cloud computing Platform as a Service (PaaS) that makes it easy to deploy apps online. It is open source and written in Ruby.

To get started [create an OpenShift Online account](https://openshift.redhat.com/app/account/new?web_user[promo_code]=railsgirls), which allows you to put three apps online for free. Once you are signed up, install the OpenShift RHC Client Tools by running these commands in a terminal and following the prompts:

{% highlight sh %}
gem install rhc
rhc setup
{% endhighlight %}

The above instructions assume you installed Ruby using RVM or RailsInstaller. If you used another approach, there is more info about installing RHC for different set-ups in [this guide](https://www.openshift.com/developers/rhc-client-tools-install) (you may need to do `sudo gem install rhc`).

__COACH__: Talk about the benefits of deploying to a PaaS such as OpenShift, as opposed to traditional servers. Discuss SSH and why we need to upload a public key to communicate securely.

### Preparing your app

#### Create OpenShift application

We are going to create an OpenShift Ruby application with a PostgreSQL database, using a sample OpenShift Rails application as our starting point. Before we do that, in your terminal change to the parent directory of the one containing your *railsgirls* code, probably called *projects*. The *cd* command below will take you there if you are currently in your *railsgirls* directory; if not, substitute another *cd* command.

{% highlight sh %}
cd ..
pwd
{% endhighlight %}

The output from the *pwd* or 'present working directory' command should show you are now in the *projects* directory (or whatever your parent directory was called). To create the OpenShift app in the cloud and make a local copy of its contents, run the following command in your terminal:

{% highlight sh %}
rhc app create openshiftapp ruby-1.9 postgresql-9.2 --from-code=https://github.com/openshift/rails-example.git
{% endhighlight %}

The terminal output should include a URL; open a browser window and go to the application URL to view the sample Rails application (the URL will have the form http://openshiftapp-*yourdomain*.rhcloud.com).

__COACH__: Explain what Git is and why we use version control systems.


#### Add version control

We now have a sample app running in the cloud, but we actually need only a few pieces from its codebase. Before we copy across the bits we require, we should put our Rails Girls app under version control with Git.

Change back to your *railsgirls* app directory and initialize it as a Git repository with the following commands:

{% highlight sh %}
cd railsgirls
git init
{% endhighlight %}

We don't want the pictures uploaded during app development to be part of our repository, so run the following command to instruct Git to ignore them:

{% highlight sh %}
echo "public/uploads" >> .gitignore
{% endhighlight %}

Add and commit all your app files to the Git repository with the following commands:

{% highlight sh %}
git add --all
git commit -m "First commit of Ideas app"
{% endhighlight %}

__COACH__: Explain the Git commands used and .gitignore.

#### Copy sample app code

We need the *.openshift* directory and *config/database.yml* file from the sample application in order for our Rails app to run on OpenShift. Copy these from the *openshiftapp* directory to the *railsgirls* directory. You can use Windows Explorer or another graphical file system tool to do this if you like, or alternatively run the following commands from the *railsgirls* directory in your terminal:

<div class="os-specific">
   <div class="nix">
{% highlight sh %}
cp -r ../openshiftapp/.openshift .
cp ../openshiftapp/config/database.yml config
{% endhighlight %}
  </div>

  <div class="win">
{% highlight sh %}
xcopy /e /i ..\openshiftapp\.openshift .openshift
copy ..\openshiftapp\config\database.yml config
{% endhighlight %}
  </div>
</div>

Add and commit the new and changed files in Git with the below commands.

{% highlight sh %}
git add --all
git commit -m "Added OpenShift config"
{% endhighlight %}

#### Change database

The next step is to change our Rails Girls app database from SQLite to PostgreSQL. Open your application's *Gemfile* and replace:

{% highlight ruby %}
gem 'sqlite3'
{% endhighlight %}

with

{% highlight ruby %}
gem 'sqlite3', :group => [:development, :test]
gem 'pg', :group => [:production]
{% endhighlight %}

Do a bundle to set up your dependencies:

{% highlight sh %}
bundle install --without production
{% endhighlight %}

On some platforms, this may generate platform-specific versions of your Gems that cause issues when you push your app to the cloud. To prevent this, open your *Gemfile.lock* file and check the versions of the 'sqlite3' and 'pg' Gems. If they have a platform-specific suffix, such as *-x86-mingw32*, remove this (eg. change *pg (0.16.0-x86-mingw32)* to *pg (0.16.0)* and *sqlite3 (1.3.8-x86-mingw32)* to *sqlite3 (1.3.8)*). Save and close the file, and run the above bundle command again before continuing.

Add and commit your changes in Git:

{% highlight sh %}
git add --all
git commit -m "Changed database to PostgreSQL"
{% endhighlight %}

__COACH__: Talk about relational databases and the differences between SQLite and PostgreSQL.

### Deploy app to OpenShift

We are now ready to deploy the Rails Girls app to OpenShift. We need to tell our Git repository where to push the code. To get the location of your OpenShift code repository, run the following command, and copy the Git URL from the output. 

{% highlight sh %}
rhc app show openshiftapp
{% endhighlight %}

Now run the following commands, replacing the SSH string with your Git URL. We are using '-f' for force here because we are happy to wipe away the history of the current OpenShift repository, which contains the sample Rails app. When you are pushing future changes, you can just use 'git push'.

{% highlight sh %}
git remote add openshift ssh://0123456789abcdef01234567@openshiftapp-yourdomain.rhcloud.com/~/git/openshiftapp.git/
git push -f --set-upstream openshift master
{% endhighlight %}

Refresh the app in your browser to see the result.

__COACH__: Talk about Git remotes.

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
config.logger = ActiveSupport::Logger.new(File.join(ENV['OPENSHIFT_RUBY_LOG_DIR'], "production.log"))
{% endhighlight %}

***Rails 3 users: Change 'ActiveSupport::Logger' to 'ActiveSupport::BufferedLogger'.***

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
  prefix = ENV['OPENSHIFT_DATA_DIR'] ? "#{ENV['OPENSHIFT_DATA_DIR']}/" : ""
  "#{prefix}uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
end

def url
  return "/uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}/#{File.basename(file.path)}" if ENV['OPENSHIFT_DATA_DIR'] && file
  super
end
{% endhighlight %}

Now uploaded images will be stored in a persistent directory, but they will still be available through the same URL as what we were using previously. To make this work, we also need to add a symbolic link on the filesystem from the repository location to the real storage location. To do this, open *.openshift/action_hooks/build* and add the following code:

{% highlight sh %}
mkdir -p $OPENSHIFT_DATA_DIR/uploads
ln -sf $OPENSHIFT_DATA_DIR/uploads $OPENSHIFT_REPO_DIR/public/uploads

{% endhighlight %}

This action hook code will run every time the OpenShift app is built, so the link between the directories will always be there when it's needed.

Commit your changes and push them to the cloud:

{% highlight sh %}
git add --all
git commit -m "Added OpenShift environment variables"
git push
{% endhighlight %}

The images you uploaded before making this change will no longer display, but anything uploaded now will stick around between app rebuilds.

__COACH__: Explain symbolic links.

### Push code to GitHub

Now that your application is under source control with Git, you may also wish to share a copy with others on a Git repository website such as GitHub. To push your code to a GitHub repository, [create a repository](https://github.com/new) on GitHub and copy the HTTPS string (something like https://github.com/username/reponame.git). 

Navigate to your OpenShift app repository in the terminal and enter the following commands, replacing the HTTPS location with the string you copied:

{% highlight sh %}
git remote add github https://github.com/username/reponame.git
git push github master 
{% endhighlight %}

The 'master' branch of the local copy of your repository will be pushed to GitHub. Go to the GitHub website to check it out.

__COACH__: Talk about Git branches and the benefits of open source code.

### Conclusion

Your Rails app is now running in the cloud on [OpenShift](https://www.openshift.com/developers). You can push whatever other changes you like and share the URL to show off your app to your friends.


