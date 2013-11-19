---
layout: default
title: Bundler for development
permalink: bundlerfordevelopment
---

# How to Set Up Bundler for Development

1. Fork Bundler
   
    Go to the Bundler Github [https://github.com/bundler/bundler](https://github.com/bundler/bundler)
   
    Press the fork button.

    Fork Bundler so you can create pull requests with your changes

<p>
<img src="../images/fork1.jpg" />
<br />
</p>

2. Download a copy of your fork of Bundler
    
    `$ git clone https://github.com/user_name/bundler.git`


3. Change into the Bundler directory

    `$ cd bundler`

4. Configure the remote
 
    `$ git remote add upstream https://github.com/bundler/bundler.git`

    This connects your local repo to the upstream repo at Github. 


5. Install Bundler development dependencies
	  
    `$ rake spec:deps`

    What is rake? [http://rake.rubyforge.org/](http://rake.rubyforge.org/)

6. Run the Bundler test suite
  	
    `$ rake spec`

    This could take about 15 minutes.
