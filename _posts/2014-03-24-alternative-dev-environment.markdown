---
layout: default
title: Alternative development environment with VirtualBox
permalink: virtual-machine
---

# Introduction

A development environment is the sum of all applications and tools with which a developer can do her daily work. Beyond an internet browser and a code editor all programs are included which are necessary for running and serving our application. For Ruby on Rails development, we certainly need Ruby, and the Rails framework and we also need a database, a web application server, etc.
By default an experienced developer would install all of these tools to her environment, but it's an advanced task. Moreover you are working on different operating systems, most of you are working on Windows, where installing a proper Ruby development environment is a huge problem.

Considering the things above, we created a virtual development environment for the first Rails Girls Budapest event, hoping that we can ease every participant's job.

<!-- more -->

## Virtual Machine

A [virtual machine (VM)](http://en.wikipedia.org/wiki/Virtual_machine) is a software-based emulation of a computer.

### Limitations

Virtualizing another operating system needs some power from your computer. We do not recommend virtualization if you do not own a computer with more than one CPU cores, and at least 2GB of memory.

# Installing the development environment

## Virtual environment

We created a virtual machine for you, with all the needed programs/tools preinstalled. For those who are interested in the parameters: it's a 32 bit Ubuntu 12.04, without any window-manager (you won't need it at all). With this solution, everyone could write the code in her usual environment, can use her favourite browser, the virtual machine is only needed when you want to run Rails commands in the console. You'll be able to do that in the browser as well, as discussed later.

### VirtualBox

VirtualBox is Oracle's virtualization platform, which can be downloaded on all the supported operating system (Win, OS X, Linux). Let's download the installer from [https://www.virtualbox.org/wiki/Downloads](https://www.virtualbox.org/wiki/Downloads), and install it after.

### Rails Girls virtual machine

Please download the virtal machine created for this event from [here](http://www.digitalnatives.hu/demos/railsgirls/railsgirls_virtualbox_vm.zip). After downloading, please unzip the file, and put it's contents to a folder.
Let's open the already install VirtualBox application. Please find Machine/Add in the menu. Browse the previously created folder containing our VM, and select the file with *vbox* extension.
If you did everything right, a new VM appeared on the left sidebar with the name *RailsGirls*. So we can start it for the first time!

![Virtualbox / Starting VM](/images/virtualbox.png)

#### Starting

Select the virtual machine, and press the *start* button! If everything is running smooth, a black window should appear, in which after 10-60 seconds the label `precise32 login:` can be read. This means, that our VM is up and running! We won't need this window later on, but don't close/shutdown it, as it has to run while we are coding!

#### Shutting down

If you don't need the VM any more, you can shut it down. To achieve this, close the window described above, and select *Shut down* from the available options. After shutting it down, the VM won't use any resources on the computer, but only some disk space.

#### Disappearing mouse

If we click into this VirtualBox window, it catches our mouse, and it disappears without notice. You can get your mouse back: in the window's bottom right corner you can see the key combination what you have to press (on OS X it's left-cmd, on any other platforms is right-ctrl).

### Usage

Now as our VM is up and running, let login to it. We could log in from the VirtualBox window described above, but using it would not be comfortable (it's not recognizing our keyboard's layout, copy-paste wouldn't work., etc.). We could also log in remotely (with a so-called SSH connection), but Windows doesn't have an SSH-client preinstalled, and installing one is a cumbersome.
Because of this, you can log in to the VM with a browser. Open your favourite browser (Chrome :) ), and type in [http://localhost:57575](http://localhost:57575) as a URL.
If we did everything right, we should see a butterfly:

![Butterfly / Console in your browser](/images/butterfly_login.png)

We are going to refer to this tab in your browser as a console, you'll have to type on all commands destined to Rails here.

#### Pasting text

On Linux and Windows you won't be able to paste any copied code with the ordinary ctrl-v combination. Please use shift-insert instead, it should work.

### Login

Let's log in to the VM with the following credentials (BE AWARE, you won't see any changes while you're typing in the password, it's totally normal:

{% highlight sh %}
login: vagrant
password: vagrant
{% endhighlight %}

After a successful login, you shold see the following label:

{% highlight sh %}
vagrant@precise32:~$
{% endhighlight %}

IMPORTANT: whenever we logged in to the VM, don't forget to type in the following command afterwards: `/bin/bash --login`!!!

### Shared directory

The hard part is over, your development environment is nearly ready. Only one thing left: we have to share a folder, which can be reached from our normal operating system and our VM, since we are going to code in the former, but we are going to run the code in the latter.

Let's create a new folder called *railsgirls* on our machine (under our user's home folder). Let's shut down the VM as we described above. After the shutdown, select the VM in VirtualBox, and press *Settings*. Click on Shared Folders tab, and click on the little + icon on the right.
In the appearing little window browse the created *railsgirls* forlder as a Folder Path. Give *railsgirls* as foldername and also select the option *Auto Mount* (all other options should be deselected).
Start the VM again, and log into it with the known process:

* open [http://localhost:57575](http://localhost:57575)
* log in with vagrant / vagrant
* don't forget to run `/bin/bash --login`

#### System check

The shared folder can be found at the path */media/sf_railsgirls*. Let's check if everything works as expected. Please enter to this directory:

{% highlight sh %}
$ cd /media/sf_railsgirls
{% endhighlight %}

Let's create an empty file:

{% highlight sh %}
$ touch test.txt
{% endhighlight %}

Now let's check in our own operation system, if the shared folder contains a file called *test.txt. If so, we are ready with our virtual environment.

## Editor

The code editor is a really clever text editor, in which we are going to write our application's codebase. We really love Sublime Text Editor, you can download if from [http://www.sublimetext.com/3](http://www.sublimetext.com/3).
