---
layout: default
title: Web-Application Security
permalink: web-application-security
---

# Web-Application Security

*Created by Ivan Malykh, [@ivdma](https://twitter.com/ivdma)*

## Preface

When creating a web-application (or actually any kind of software or hardware) developer should
think about the security of the system they build and the data they collect. Frameworks like
Ruby on Rails, libraries like Devise, database systems like SQLite or MySQL all have security teams
dedicated to building secure and reliable systems. Unfortunately software developers make mistakes and hackers are smart enough to discover those mistakes, even if they're hidden very well.

In this chapter we'll learn some of the vulnerabilities, how hackers can exploit them and how you
can prevent hackers from breaching your valuable data. This chapter is split into three parts:
1) Insecure Direct Object Reference (beginner); 2) Cross-Site Scripting (advanced level); and 3)
SQL Injection (expert level).

## *1.* Insecure Direct Object Reference (IDOR)

One of the most common and simple to exploit vulnerabilities on the World Wide Web is IDOR.
Insecure Direct Object Reference refers to when an object within a system (like a database record)
is being accessed by it's internal ID without having any type of access control.

## *2.* Cross-Site Scripting (XSS)

_TODO: add this part_

## *3.* SQL Injection (SQLI)

_TODO: add this part_

## Final words

_TODO: add this part_

## References

_TODO: add this part_
