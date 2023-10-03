---
layout: main_guide
title: Get to know the tools
description: "Install the required tools to make your first Ruby on Rails app. A Text Editor, find the Terminal app and launch a web Browser."
permalink: tools
---

# Get to know the tools

{% include main-guide-intro.html %}

Start by getting familiar with the tools you'll be using in this workshop. Please install the tools you do not have yet installed and move on to the next guide.

## Instructions per Operating System

Before we get started, it is important that you select the instructions specific to your Operating System. This website should detect it automatically, but if you're unsure, ask your coach.

We have detected you're using: <strong class="js-detected-os-label">Error: JavaScript not loaded</strong>. It should already be selected as the Operating System in the "Choose your Operating System:" element below here. No need to change it if it's correct.

<div class="os-specific big"></div>

This step is important, because the commands you need to run on a Windows computer are different from Mac or Linux. The instructions for Windows will not work on Mac and vice versa. If you're using a cloud service to build your app (like Replit), you'll need to run the Linux commands even if you are on a Windows computer.

## <i class="icon-text-editor"></i> Text Editor {#text-editor}

To create your app you'll need to write code. This can be done with a Text Editor made for writing code. Listed below are examples of text editors you can use for writing code and editing files. We recommend <strong>Visual Studio Code</strong> as it's a very complete package that works out of the box.

Choose an editor, go to the website linked below and install it following the instructions on the website.

* [Visual Studio Code](https://code.visualstudio.com) (Recommended)
* [Sublime Text](https://www.sublimetext.com)

## <i class="icon-prompt"></i> Terminal {#terminal}

The Terminal is a tool to run commands on your system for applications that do not have a Graphical User Interface (GUI), like many of the tools we'll be using today.
The Terminal is also known as PowerShell or Command Prompt on Microsoft Windows, we'll be referring to this as the Terminal throughout these guides.

In the Terminal app you'll do things like:

* Install the required tools (Ruby, databases, and others);
* Start your Rails app;
* Run database migrations;
* etc.

Open the Terminal like so for your Operating System:

<div class="os-specific">
  <div class="mac">
    <ul>
      <li>
        Open Spotlight:
        <ul>
          <li>Click the Magnifying glass icon in the menu bar at the uppermost top right of your screen, or;</li>
          <li>Press <kbd>command + space bar</kbd> (The command key can be recognized by the <kbd>⌘</kbd> symbol).</li>
        </ul>
      </li>
      <li>Type in "Terminal" or "iTerm".</li>
      <li>Press <kbd>Enter</kbd> to open the Terminal app.</li>
    </ul>
  </div>

  <div class="win">
    <ul>
      <li>
        Open the "Start" menu by:
        <ul>
          <li>Clicking on the Windows icon in the bottom left, or;</li>
          <li>press the <kbd>Window flag</kbd> key on the keyboard.</li>
        </ul>
      </li>
      <li>Type in "PowerShell" or "Command Prompt", whichever is available.</li>
      <li>Press <kbd>Enter</kbd> to open the Terminal app.</li>
    </ul>
  </div>

  <div class="nix">
    <p>Please consult your Linux distribution's documentation about how to open apps, and open the <em>Terminal</em> app.</p>
  </div>
</div>

If the options above are not available, press the <kbd>Window flag key + R</kbd>, type in `cmd` and press <kbd>Enter</kbd> to open the Command Prompt Terminal app.

## Code examples

Throughout this guide you will see bits of text formatted like the block below. The icon next to the text will let you know which tool to use.

The text in the block below is a terminal command. This can be recognized by the Terminal icon on its left side. It needs to be run in the Terminal. Copy it from the page, paste it in the Terminal app and press the <kbd>Enter</kbd> key.

{% highlight sh %}
Some terminal command example
{% endhighlight %}

The text in the block below is source code. This can be recognized by the Text Editor icon on its left side. It needs to be inserted into one of your project files.

{% highlight erb %}
Some source code example
{% endhighlight %}


## <i class="icon-browser"></i> Web browser {#web-browser}

You should already have a webbrowser installed. It's what you use to view this page on your laptop. You should not have to install any of these, one should already be installed, but just so you know what they're named.

- Edge (this is preinstalled on Microsoft Windows laptops)
- Safari (this is preinstalled on macOS laptops)
- Alternatives you may be using instead:
    - [Google Chrome](https://www.google.com/chrome/index.html)
    - [Firefox](https://www.mozilla.org/firefox/)

---

You should now have a Text Editor installed, you know where to find the Terminal and you have your browser open. On to the next guide to [install Rails](/install)!
