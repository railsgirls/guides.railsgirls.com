---
layout: default
title: Add design to your App with HTML and CSS
permalink: design-html-css
---

1.Design your header

+ put the following code to the bottom of `app/assets/stylesheets/application.css`:

    ```
    .navbar {
        min-height: 38px;
      background-color: #f55e55;
    }
    ```

  Now refresh the page and check the changes. You can try change the
    color or font of the header. You can check the color reference
    from [http://color.uisdc.com/](http://color.uisdc.com/).

    **Coach: ** talk about the property `display`, inline and block element.

+ Then put these lines at the bottom：

    ```
    .navbar a.brand { font-size: 18px; }
    .navbar a.brand:hover {
     color: #fff;
     background-color: transparent;
     text-decoration: none;
    }
    ```

    **Coach: ** explain the 4 states of a link


2.Design your table

 + We simply use the twitter [Bootstrap](http://www.bootcss.com/) to
   polish our table。find this line from
   app/views/ideas/index.html.erb and replace:

   ```
   <table>
   ```

   with

   ```
   <table class="table">
   ```

 + Modify size of the picture using the following lines

     ```
     <%= image_tag(idea.picture_url, :width => 600) if idea.picture.present? %>
     ```

     try to change the width and see what's gonna happen


 + add the following lines to the bottom of file app/assets/stylesheets/ideas.css.scss:

  ```
  .container a:hover {
    color: #f55e55;
    text-decoration: none;
    background-color: rgba(255, 255, 255, 0);
  }
  ```


 + try add some background style with property `background-image`,
   reference to
   [http://subtlepatterns.com/](http://subtlepatterns.com/) for some patterns.


3.add style to footer

+ add the lines to bottom of  app/assets/stylesheets/application.css:

    ```
    footer {
      background-color: #ebebeb;
      padding: 30px 0;
    }
    ```

    try put more things into `footer`, then adjust it's position.

4.add style to button

  + open
    [http://localhost:3000/ideas/new](http://localhost:3000/ideas/new)
    and find the `Create Idea` button.

   add these lines to app/assets/stylesheets/ideas.css.scss

   ```
   .container input[type="submit"] {
      height: 30px;
      font-size: 13px;
      background-color: #f55e55;
      border: none;
      color: #fff;
    }
   ```

   **Coach** explain how to use `border` in css, try modify the style
     of button like round the corner, add shadow or color etc.
