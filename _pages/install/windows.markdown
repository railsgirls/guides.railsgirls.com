---
layout: default
title: Setup on Windows
permalink: install/windows
---

# Setup for Windows

{% include main-guide-intro.html %}

To install Rails for Windows we'll need to install Ruby and several supporting tools such as Git, Node.js and SQLite. Follow the steps below in order to install these tools on your computer. When you're done with these steps you will have a Rails app running on your computer.

_During these steps we'll ask you to open and close the Windows Command Prompt every now and then. This can be either the "Command Prompt" or "Powershell" app. We ask you to close and re-open it, because when the Command Prompt starts it loads in the environment. When we install a new app, the environment does not get automatically updated in the Command Prompt. To test if the installation was successful we need to restart the Command Prompt and load the new environment._

## _1._ Install Ruby

- Download the [RubyInstaller](https://rubyinstaller.org/downloads/) for Windows.
  - [Direct link to Ruby 3.1.3 installer with Devkit](https://github.com/oneclick/rubyinstaller2/releases/download/RubyInstaller-3.1.3-1/rubyinstaller-3.1.3-1-x86.exe) for 32-bit architecture.
- Run the installer. Click through the installer using all the default options.
  - When prompted with the "MSYS2" installer, enter `1` and press Enter.
  - When prompted with the same "MSYS2" installer again, only press Enter.

## _2._ Install Git

- Visit the [Git installer for Windows](https://git-scm.com/download/win) download page.
  - Click the link for the "32-bit Git for Windows Setup" installer to download it.
- Run the installer. Click through the installer using all the default options.

## _3._ Install Node.js

- Visit [nodejs.org/en/download](https://nodejs.org/en/download/).
  - Select the "LTS" version tab, selected by default.
  - From the "Windows Installer (.msi)" row, click the link for the 32-bit architecture to download it.
- Run the installer. Click through the installer using all the default options.
- Open the Windows Command Prompt and run the following command to check if the installation was successful. It should output a version number like `v12.16.0` (your version may differ).

{% highlight sh %}
node --version
{% endhighlight %}

- Close the Windows Command Prompt app.

## _3a._ Install yarn

- Visit the [yarn download page](https://yarnpkg.com/lang/en/docs/install/#windows-stable).
- Download the installer by clicking the "Download installer" button.
- Run the installer. Click through the installer using all the default options.
- Open the Windows Command Prompt and run the following command to check if the installation was successful. It should output a version number like `1.22.0` (your version may differ).

{% highlight sh %}
yarn --version
{% endhighlight %}

- Close the Windows Command Prompt app.

## _4._ Install SQLite

- Visit [sqlite.org/download.html](https://sqlite.org/download.html)
- Scroll down to the "Precompiled Binaries for Windows" section.
- Download the `sqlite-dll-win32-x86-xxxxxxx.zip` package (where `xxxxxxx` is the most recent version number).
- Download the `sqlite-tools-win32-x86-xxxxxxx.zip` package (where `xxxxxxx` is the most recent version number).
- Extract the packages.
- In Windows Explorer, open "This Computer" in the sidebar and open the `C:` local disk.
- Create a directory called `sqlite3`.
- Copy the files from the extracted packages into the `C:\sqlite3` directory. As a result you will have the following files in that directory: `sqldiff`, `sqlite3.def`, `sqlite3.dll`, `sqlite3` and `sqlite3_analyzer`.
- Open the Windows Command Prompt and run the following command to add the `c:\sqlite3` directory to the system PATH.
  - For Command Prompt users:
    - `setx path "%path%;c:\sqlite3"`
  - For Powershell users:
    - `setx path "c:\sqlite3"`
- Close the Windows Command Prompt app.
- Re-open the Windows Command Prompt and run the following command to check if the installation was successful. It should output a version number like `3.31.1` (your version may differ).
  {% highlight sh %}
  sqlite3 --version
  {% endhighlight %}

- Close the Windows Command Prompt app.

## _5._ Install Rails

- Open the Windows Command Prompt run the following command. This will install the Rails and bundler gems on your computer.

{% highlight sh %}
gem install rails bundler --no-document
{% endhighlight %}

- Open the Windows Command Prompt and run the following command to check if the installation was successful. It should output a version number like `Rails 6.0.2.1` (your version may differ).

{% highlight sh %}
rails --version
{% endhighlight %}

_If you run into any problems during this step, check the [Possible errors](#possible-errors-during-installation) section for possible solutions._

## _6._ Check the environment

Check that everything is working by running the application generator command.

{% highlight sh %}
rails new myapp
{% endhighlight %}

{% highlight sh %}
cd myapp
{% endhighlight %}

{% highlight sh %}
rails server
{% endhighlight %}

Go to [`http://localhost:3000`](http://localhost:3000) in your browser, and you should see the "Yay! You're on Rails!" page.

Now you should have a working Ruby on Rails programming setup. Congrats!

_If you run into any problems during this step, check the [Possible errors](#possible-errors-during-installation) section for solutions._

**Coach:** We recommend to verify by using the scaffold command and inputting data with the generated page with coaches to ensure everything is working. Also: remove the test app `myapp` to make super sure no-one is working in the wrong folder, following the steps of the workshop.

{% include other-guides.md %}
