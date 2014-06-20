---
layout: default
title: Touristic Autism-friendly Spots App 
permalink: touristic-autism_continuous-deployment
---

# Continuous Deployment

*Created by Myriam Leggieri, [@iammyr](https://twitter.com/iammyr)*
*for [Rails Girls Galway](https://github.com/RailsGirlsGalway)*
The basic guides that have been merged and adapted are the [Ruby on Rails Tutorial](http://www.railstutorial.org/book), the [basic RailsGirls app](http://guides.railsgirls.com/app/) and the tutorials for [creating thumbnails](http://guides.railsgirls.com/thumbnails), [authenticating users](http://guides.railsgirls.com/devise/), [adding design](http://guides.railsgirls.com/design), [deploying to OpenShift](http://guides.railsgirls.com/openshift/) and [adding comments](http://guides.railsgirls.com/commenting).



We’re going to deploy our (still-empty) Rails application to production. Deploying early and often allows us to catch any deployment problems early in our development cycle or else there could be troubles during the integration phases.
Several shared hosts, virtual private servers, full-service deployment companies and cloud deployment services all provide facilities that makes it very easy to deploy Rails applications.

OpenShift is one of the cloud deployment services offering such facilities. It is a cloud computing Platform as a Service (PaaS) that makes it easy to deploy apps online. It is open source and written in Ruby.



[Create an OpenShift Online account](https://openshift.redhat.com/app/account/new?web_user[promo_code]=railsgirls), which allows you to put three apps online for free. Once you are signed up, install the OpenShift RHC Client Tools by adding the rhc gem in the production environment. Add the following to the Gemfiile (which is written in Ruby ndr):

<div class="os-specific">
  <div class="nix">
    {% highlight sh %}
      group :production do
        gem install rhc
      end
{% endhighlight %}
  </div>
If you are not using RVM or RailsInstaller then follow [this guide](https://www.openshift.com/developers/rhc-client-tools-install) (you may need to do "sudo gem install rhc").
</div>

Then run in the terminal:

<div class="os-specific">
  <div class="nix">
    {% highlight sh %}
  bundle install --without production
  rhc setup
{% endhighlight %}
  </div>
The --without production option prevents the local installation of any production gems. 

If Bundler complains about a readline error, try adding gem ’rb-readline’ to your Gemfile.

Because the only gems we’ve added are restricted to a production environment, right now this command doesn’t actually install any additional local gems, but it’s needed to update Gemfile.lock. Now, let's commit these changes to GitHub!
</div>

**Coach:** Explain the benefits of deploying to a PaaS such as OpenShift, as opposed to traditional servers. What "production" means. Discuss SSH and why we need to upload a public key to communicate securely.
[Slides by Gerry Kavanagh @gerryk]()

Navigate to the "projects" folder. Run in the prompt:

<div class="os-specific">
  <div class="nix">
    {% highlight sh %}
rhc app create openshiftapp ruby-1.9 postgresql-9.2 --from-code=https://github.com/openshift/rails-example.git
{% endhighlight %}
  </div>
</div>

We need the .openshift directory and config/database.yml file from the sample application in order for our Rails app to run on OpenShift. Copy these from the openshiftapp directory to the railsgirls directory.

<div class="os-specific">
  <div class="nix">
    {% highlight sh %}
cd railsgirls-galway-2014 
cp -r ../openshiftapp/.openshift .
cp ../openshiftapp/config/database.yml config
{% endhighlight %}
  </div>
Now add and commit in Git the new changes!
</div>

OpenShift uses the PostgreSQL database, which means that we need to add the pg gem in the production environment to allow Rails to talk to Postgres. Note also the addition of the rails_12factor gem, which is used to serve static assets such as images and stylesheets. Substitute "gem sqlite" in Gemfile with the following:

<div class="os-specific">
  <div class="nix">
    {% highlight sh %}
gem 'sqlite3', :group => [:development, :test]
gem 'pg', :group => [:production]
gem 'rails_12factor', :group => [:production]
{% endhighlight %}
  </div>
Now do a bundle excluding the gems in production. 

On some platforms, this may generate platform-specific versions of your Gems that cause issues when you push your app to the cloud. To prevent this, open your Gemfile.lock file and check the versions of the ‘sqlite3’ and ‘pg’ Gems. If they have a platform-specific suffix, such as -x86-mingw32, remove this (eg. change pg (0.16.0-x86-mingw32) to pg (0.16.0) and sqlite3 (1.3.8-x86-mingw32) to sqlite3 (1.3.8)). Save and close the file, and run the above bundle command again before continuing.

Add and commit your changes in Git
</div>

**Coach:** Talk about relational databases and the differences between SQLite and PostgreSQL.


We are now ready to deploy the Rails Girls app to OpenShift. We need to tell our Git repository where to push the code. To get the location of your OpenShift code repository, run the following command, and copy the Git URL from the output.

<div class="os-specific">
  <div class="nix">
    {% highlight sh %}
       rhc app show openshiftapp
{% endhighlight %}
  </div>
</div>

Now run the following commands, replacing the SSH string with your Git URL. We are using ‘-f’ for force here because we are happy to wipe away the history of the current OpenShift repository, which contains the sample Rails app. When you are pushing future changes, you can just use ‘git push’.

<div class="os-specific">
  <div class="nix">
    {% highlight sh %}
git remote add openshift ssh://5387bff65973cadf3c000323@openshiftapp-railsgirlsgalway.rhcloud.com/~/git/openshiftapp.git/
git push -f --set-upstream openshift master
{% endhighlight %}
  </div>
Refresh the app in your browser to see the result.
If the app fails to visualize (500 Internal Server Error) often (error from the rhc tail openshiftapp : "Missing `secret_key_base` for 'production' environment, set this value in `config/secrets.yml`") the following solves. 
Get a secret with "rake secret" assign it to the environment variable 'SECRET_KEY_BASE' and export the variable to ~/.bash_profile.
OpenShift (but also Heroku) needs to serve static assets like images and CSS:

<div class="os-specific">
  <div class="nix">
    {% highlight sh %}
$ rake assets:precompile
$ git add .
$ git commit -am "Add precompiled assets for OpenShift"
git push -f --set-upstream openshift master
{% endhighlight %}
  </div>
To be used only if OpenShift fails without it. We'll cover "rake" and "assets" later on.
</div>
</div>

When we push a new version of the application, anything stored within OpenShift’s copy of the repo will be wiped to make way for the new files. This includes some log files and the images uploaded by users. To fix this, we can store these files in persistent directories on OpenShift instead; the filepaths of the locations we need are stored in environment variables.

To change the location of the production log, open config/environments/production.rb. Beneath the comment line:

<div class="os-specific">
  <div class="nix">
    {% highlight sh %}
config.logger = ActiveSupport::TaggedLogging.new(SyslogLogger.new)
{% endhighlight %}
  </div>
</div>

Add the line:

<div class="os-specific">
  <div class="nix">
    {% highlight sh %}
config.logger = ActiveSupport::Logger.new(File.join(ENV['OPENSHIFT_RUBY_LOG_DIR'], "production.log"))
{% endhighlight %}
  </div>
Rails 3 users: Change ‘ActiveSupport::Logger’ to ‘ActiveSupport::BufferedLogger’.
</div>

You can tail your application’s logs with the command rhc tail openshiftapp (the output from the change you just made won’t show up until the new file has been committed and pushed to OpenShift).

**Coach:** Discuss the value of application logging.
