---
layout: main_guide
title: Setup on a Virtual Machine
description: "Prepare development of your app using a Virtual Machine."
permalink: install/virtual-machine
---

# Setup on a Virtual Machine

<span class="muted">Cooking time: 15min active / 1 hour passive</span>

{% include main-guide-intro.html %}

<p class="warning-notice">This guide has been recently updated on the 19th of February, 2023. It has not been fully tested. Please continue with caution.</p>

A development environment is a collection of applications and tools with which a developer can do their daily work. For Ruby on Rails development, we need a collection of tools like: Ruby, the Rails framework, a database, etc.

There may be some problems unique to your laptop that prevent you from installing these tools. You and your coach run into an issue that has prevented you from preparing for the workshop.

To help with this, it's possible to get the development environment ready on a Virtual Machine. A new machine in which you can start fresh with the installation. This requires the complete installation of a new computer, something which may be an advanced step for some. Ask a coach or someone else for help with this step.

## Limitations

Virtualizing another Operating System requires more power from your laptop. We do not recommend virtualization if you do not own a computer with more than one CPU cores, at least 2 Gigabytes of available memory and 20 Gigabytes of free disk space. Ask your coach to help with this assesment.

{% coach %}
Please help check if the laptop can handle running a Virtual Machine before continuing.
{% endcoach %}

## Install VirtualBox

VirtualBox is Oracle's virtualization platform, which can be downloaded on all the supported Operating System (Win, Mac and Linux). Start by downloading the installer from [https://www.virtualbox.org/wiki/Downloads](https://www.virtualbox.org/wiki/Downloads). Once downloaded, double click it an follow the instructions.

VirtualBox will look something like this once installed:

![VirtualBox / Starting VM](/images/virtualbox.png)

## Download Ubuntu

Ubuntu is a Linux distribution that can be freely downloaded from the [Ubuntu download page](https://ubuntu.com/download/desktop). Pick the version with the LTS label (Long Term Support) and download it. At the time of writing this is "Ubuntu 22.04.1 LTS".

## Install Ubuntu

In the VirtualBox app, click the "New" button in the menu ribbon. In the new window enter the following:

- Give your Virtual Machine a name, like "RailsGirls".
- In the ISO image dropdown, select "Other...". In the new window that opens, find the Ubuntu file that was just downloaded. It will be named something like `ubuntu-22.04.1-desktop-amd64.iso` in your downloads directory.
- Upon selection the "Type" field should update to "Linux", but if not, select this value from the dropdown.
- Click Next.

Follow the rest of the instructions of the installation wizard. The defaults are most likely fine. Upon start of the Virtual Machine, it will start Ubuntu. Login with the password you configured during installation.

## Pasting text

Note on pasting text into the Virtual Machine: On Linux and Windows you won't be able to paste any copied code with the ordinary <kbd>Ctrl</kbd>+<kbd>V</kbd> combination. Please use <kbd>shift</kbd>+<kbd>insert</kbd> instead, it should work.

## Set up development environment

From here on, follow the [installation guide for Linux](/install/linux) to install Ruby, Rails and other required tools on the Virtual Machine. Once completed, return to this guide.

### Shared directory

Your development environment is nearly ready. Only one thing left: we want to share a folder, which can be reached from our normal operating system and our VM, since we are going to code on the former, but we are going to run the code in the latter.

Let's create a new folder called *railsgirls* on our machine (under our user's home folder). Next, shut down the VM: Close the window in which the Ubuntu VM is running and select Shut down from the available options.

After the shutdown, select the VM in VirtualBox, and press *Settings*. Click on Shared Folders tab, and click on the little + icon on the right.
In the appearing little window browse the created *railsgirls* forlder as a Folder Path. Give *railsgirls* as foldername and also select the option *Auto Mount* (all other options should be deselected).

### System check

The shared folder can be found at the path `/media/sf_railsgirls`. Let's check if everything works as expected. Please enter to this directory:

{% highlight sh %}
cd /media/sf_railsgirls
{% endhighlight %}

Let's create an empty file:

{% highlight sh %}
touch test.txt
{% endhighlight %}

Check on your own Operation System, if the shared folder contains a file called `test.txt`. If so, we are ready with our virtual environment.

Now you can continue with the guides. Edit the app code on your laptop, and run the app in the Virtual Machine.
