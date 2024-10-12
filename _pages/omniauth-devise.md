---
layout: guide
title: Omni-Auth for Third Party Authentication.
description: "Third-party authentication with OmniAuth and Devise ."
permalink: omniauth and devise
---

# Authentication using OmniAuth

*Originally created by Grace Ekunola, [@temmarie](https://github.com/temmarie)*

This is a guide on how to implement third-party authentication in a Rails application using OmniAuth while still benefiting from Devise's authentication system.
 OmniAuth is a 3rd party authentication tool that offers easy integration with third-party services. Like Devise it offers authentication solutions, however, it  allows for passwordless login through external providers like Google, Facebook or Github, etc.


### Create a new Rails project
- Create a new rails app by running the code below:
<code> rails new oauth-devise-app </code>
- Navigate to the app's directory in your preferred code editor.
- Run rails server in your termninal: <code> rails s </code>
- Open localhost in your browser to view the Rails welcome page

### Add Home controller
- Generate a new controller that will handle the request to the root path using: 
<code>  rails generate controller home index </code>
This generate a new controller called 'Home' with an action 'index'.
- Add the root path to the config folder: <code> root 'home#index' </code>
- In the `app/views/home` directory, you will find a new file called `index.html.erb`. This view will contain the HTML code for your home page.
- Restart the server and check the local host in your web browser to view your newly created landing page.

### Add OmniAuth and Devise Gem
- Add the OmniAuth gem and the specific provider gem you'll like to use to your Gemfile by running the following command:
<code>
gem "devise"
gem "omniauth"
gem "omniauth-google-oauth2"
gem "omniauth-rails_csrf_protection", "~> 1.0"
</code>

- Run <code> bundle install </code> to install the gems


### Configure Devise
- Generate Devise configurations by running; 
<code> rails generate devise:install </code>
- Follow the configuration steps given by Devise after installation.
- Generate Devise views:  <code> rails generate devise:views</code> 
- Generate the user model with devise:
<code> rails generate devise user </code>
- Navigate to the user.rb file and add the following: 
    <code>
    class User < ApplicationRecord
        # Include default devise modules. Others available are:
        # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
        devise :database_authenticatable, :registerable,
                :recoverable, :rememberable, :validatable,
                :omniauthable, omniauth_providers: [:google_oauth2]
      ## if you're using confirmable and the provider you use validate emails,
      # uncomment the line below to skip the confirmation emails.
      # user.skio_confirmation! 
    end
    </code>
- Navigate to ```db/migrate/devise_create_users.rb``` file to add few extra features. We'll be adding the avatar url and user id from google, fullname and provider as well. It should look like this: 

<code>
    # frozen_string_literal: true

class DeviseCreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      ## Database authenticatable
      t.string :email,              null: false, default: ""
      t.string :encrypted_password, null: false, default: ""
      t.string :full_name 
      t.string :uid
      t.string :avatar_url
      t.string :provider

      ## Recoverable
      t.string   :reset_password_token
      t.datetime :reset_password_sent_at

      ## Rememberable
      t.datetime :remember_created_at

      ## Trackable
      # t.integer  :sign_in_count, default: 0, null: false
      # t.datetime :current_sign_in_at
      # t.datetime :last_sign_in_at
      # t.string   :current_sign_in_ip
      # t.string   :last_sign_in_ip

      ## Confirmable
      # t.string   :confirmation_token
      # t.datetime :confirmed_at
      # t.datetime :confirmation_sent_at
      # t.string   :unconfirmed_email # Only if using reconfirmable

      ## Lockable
      # t.integer  :failed_attempts, default: 0, null: false # Only if lock strategy is :failed_attempts
      # t.string   :unlock_token # Only if unlock strategy is :email or :both
      # t.datetime :locked_at


      t.timestamps null: false
    end

    add_index :users, :email,                unique: true
    add_index :users, :reset_password_token, unique: true
    # add_index :users, :confirmation_token,   unique: true
    # add_index :users, :unlock_token,         unique: true
  end
end

</code>

- Migrate the newly generated User model: 
<code> rails db:migrate </code>


### Configure Devise for OmniAuth
- In the User model, add the following code to include OmniAuth Support:

  <code> 
  class User < ApplicationRecord
    # Include default devise modules. Others available are:
    # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
    devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :validatable,
          :omniauthable, omniauth_providers: [:google_oauth2]

    def self.from_omniauth(auth)
      where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
        user.email = auth.info.email
        user.password = Devise.friendly_token[0, 20]
        user.full_name = auth.info.full_name # assuming user model has name
        user.avatar_url = auth.info.image # assuming user model has an image

        ## if you're using confirmable and the provider you use validate emails,
        # uncomment the line below to skip the confirmation emails.
        # user.skip_confirmation! 
      end
    end
  end

</code>

### Set up User controllers using devise
- To set up user controllers, run : 
<code> rails generate devise:controllers users </code>
This will generate a couple of controllers, including omniauth_callbacks_controller.

### Update the OmniAuth Callbacks Controller
- Update the omniauth_callbacks_controller to handle the omniauth callback. 
- In the ```app/controllers/users/omniauth_callbacks_controller.rb```
- Add the following code: 
<code> 
        # frozen_string_literal: true

    class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController
    def google_oauth2
        user = User.from_omniauth(auth)

        if user.present?
        sign_out_all_scopes 
        flash[:success] = t 'devise.omniauth_callbacks.success', kind: 'Google'
        sign_in_and_redirect user, event: :authentication
        else
        flash[:alert] = 
            t 'devise.omniauth_callbacks.failure', kind: 'Google', reason: "#{auth.email} is not authorized"
        redirect_to new_user_session_path
        end
    end


    private

    def auth
        @auth ||= request.env['omniauth.auth'] 
    end
    end
</code>

### Update the Sessions Controller
- In the ```sessions_controller.rb```n add the following code:
    <code> 
        def after_sign_out_path_for(_resource_or_scope)
        new_user_session_path
        end
        def after_sign_in_path_for(resource_or_scope)
            stored_location_for(resource_or_scope) || root_path  
        end
    </code> 

### Update the Regstrations controller 
- In the ```registrations_controller.rb``` add the following code: 

<code>  def update_resource(resource, params)
    if resource.provider == 'google_oauth2'
      params.delete('current_password')
      resource.password = params['password']

      resource.update_without_password(params)
    else
      resource.update_with_password(params)
    end
  end
</code>

### Configure User model for Omniauth support
- In user.rb file, add the following code: 
<code> 
  def self.from_omniauth(auth)
    where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
      user.email = auth.info.email
      user.password = Devise.friendly_token[0, 20]
      user.full_name = auth.info.full_name # assuming user model has name
      user.avatar_url = auth.info.image # assuming user model has an image
    end
  end
</code>


### Set Up Routes
- Add OmniAuth routes for callbacks. In ```config/routes``` add the following code: 
    <code>  
    Rails.application.routes.draw do
      root 'home#index'
      
      devise_for :users, controllers: {
        omniauth_callbacks: 'users/omniauth_callbacks'
        registrations: 'users/registrations',
        sessions: 'users/sessions',
      }
    end
  </code>


### Set up OAuth credentials
To do this you need to register your app on the Google Developers Console and get the OAUth credentials: 
- Go to [Google Developers Console](https://console.developers.google.com).
- Create a new project.
- In the “APIs & Services” section, enable the Google+ API or Google People API.
- Click on 'OAuth consent screen' to configure your application.
- Select External as the user type, since the project will likely start in development mode which is the testing phase You can change it later on for production.
- Fill in the app registration form, including the name, logo and developer's contact information. You can skip out on the domain info, unless you have an authorised one. 
- Skip the questions about scopes too
- Add a test user and then save and continue.
- Head back to the dashboard and then go to Credentials, and create OAuthClient IDs.
- Select the application type, in this case a web application and fill in the app name.
- Add an authorised redirect uri, ```http://localhost:3000/users/auth/google_oauth2/callback```.  
- Click create and then copy your client ID and secret.


### Store your credentials in ENV or Rails Credentials
- You can store your credentials in an environment variable or in Rails Credentials.
- To use Rails credentials, run: ```EDITOR="code --wait" bin/rails credentials:edit```
- It will open up a credentials.yml file with your base secret key. Add your credentials in this format:
<code>google_oauth_client_id: your_client_id
google_oauth_client_secret: your_client_secret</code>
-  Make sure to replace the client ID and secret key with the actual credentials from your OAuth providers.
- Close the file to save it. You should see a ```File encrypted and saved``` message in the terminal. 


### Initialise OmniAuth
- Configure Devise to use OmniAuth strategy in ```config/initializers/devise.rb``` 
 <code>
 config.omniauth :google_oauth2, 
                  Rails.application.credentials.dig(:google_oauth_client_id),
                  Rails.application.credentials.dig(:google_oauth_client_secret)
  </code>

### Update Views
Now, let's update views to include links to be authenticated by google, and for easy page navigation. 
- In devise/sessions/new.html.erb:  <cdoe> <%= link_to "Sign in with Google", user_google_oauth2_omniauth_authorize_path %>
</code>