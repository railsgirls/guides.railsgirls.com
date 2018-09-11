---
layout: default
title: Web-Application Security
permalink: web-application-security
---

# Web-Application Security

*Created by Ivan Malykh, [@ivdma](https://twitter.com/ivdma)*

## Preface

When building a web-application (or actually any kind of software or hardware) developer should
think carefully about the security of the system they build and the data they collect. Frameworks like
Ruby on Rails, libraries like Devise, database systems like SQLite or MySQL all have security teams
dedicated to building secure and reliable systems. Unfortunately software developers make mistakes
and hackers are smart enough to discover those mistakes, even if they're hidden very well.

In this chapter we'll learn some of the vulnerabilities, how hackers can exploit them and how you
can prevent hackers from breaching your valuable data. This chapter is split into three parts:
1) Insecure Direct Object Reference (beginner); 2) Cross-Site Scripting (advanced level); and 3)
SQL Injection (expert level).

## *1.* Insecure Direct Object Reference (IDOR)

One of the most common and simple to exploit vulnerabilities on the World Wide Web is IDOR.
Insecure Direct Object Reference refers to when an object within a system (like a database record)
is being accessed by it's internal ID without having any type of access control.

Remember your Idea app you've build during your first Rails Girls course? Try to start your server
and visit http://locahost:3000/ideas and go to one of your ideas. You will end up on the page with
URL which will look similar to this one: http://locahost:3000/ideas/34. 34 in this case is the database
ID of your idea object. Ruby on Rails is using this number to fetch the data from the database which
belongs to idea with this ID. In your code, you might see a similar action:

```lang=ruby
def show
  @idea = Idea.find(params[:id])
end
```

As you can see Rails just takes the ID and tries to instantiate the Idea object.

Now imagine that you have a website which lets different users create their own private ideas.
For that, you need to add the authentication (a way to tell your website that you are really you)
to your site, which is described in the [Devise](/devise) chapter.

Adding authentication to your website will not automatically protect your personal ideas from
accessing by others. If you like me, have created a website and protected it with Devise, you are
probably end up with a similar structure in your `IdeasController`:

```lang=ruby
class IdeasController < ApplicationController
  before_action :authenticate_user!

  # omitted code

  def show
    @idea = Idea.find(params[:id])
  end

  # omitted code
end
```

This will make sure you **have** to authenticate yourself with your email and password before you can
load your idea. Well, I actually lied here a bit: you can not only see your own idea, but basically
any idea available in your database.

To make sure your ideas are protected, you might add a relationship between your User and Idea models.
We will not explain [Rails model relationships](https://guides.rubyonrails.org/association_basics.html)
here, but instead provide a quick end result on how to protect your precious ideas:

```lang=ruby
class IdeasController < ApplicationController
  before_action :authenticate_user!

  # omitted code

  def index
    @ideas = current_user.ideas
  end

  # omitted code

  def show
    @idea = current_user.ideas.find(params[:id])
  end

  # omitted code
end
```

As you can see, we use a familiar concept from Devise chapter: the `current_user`. Rails keeps track
of logged in User in this instance variable. Because we added a relationship between User and Idea,
we can tell Rails to load `current_user.ideas`. It is kind of the same as
`select all ideas which belong to current_user`. Similarly, you can search for ideas by their ID:
`current_user.ideas.find(23)` and Rails will interpret it as
`select the idea with ID which equals 23 and belong to current_user`.

Whenever you'll try to access someone else's idea, Rails will return a 404 Not Found message, which
means that idea is either does not exist or just don't belong to you.

Your idea is now protected from peeking eyes!

## *2.* Cross-Site Scripting (XSS)

_TODO: add this part_

## *3.* SQL Injection (SQLI)

_TODO: add this part_

## Final words

_TODO: add this part_

## References

_TODO: add this part_
