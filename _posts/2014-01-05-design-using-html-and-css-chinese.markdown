---
layout: default
title: 使用HTML和CSS美化你的应用
permalink: design-html-css-chinese
---

1.美化header样式

+ 打开文件 `app/assets/stylesheets/application.css` 并在最底端添加：

    ```
    .navbar {
      min-height: 38px;
      background-color: #f55e55;
    }
    ```

    刷新页面，查看样式有什么变化。 此处解释什么是css选择器，学员可以尝试修改header的颜色，字体等。 简单的颜色选取参考网站： [http://color.uisdc.com/](http://color.uisdc.com/)

    **教练：**解释`display`的属性，什么是内联元素，什么是块级元素

+ 在文件底部加入下面的代码：

    ```
    .navbar a.brand { font-size: 18px; }
    .navbar a.brand:hover {
     color: #fff;
     background-color: transparent;
     text-decoration: none;
    }
    ```

    **教练：**解释css中链接的四种状态


2.美化表格样式

 + 对于表格，我们可以使用[Bootstrap](http://www.bootcss.com/)的表格样式。打开`app/views/ideas/index.html.erb`文件，找到：

   ```
   <table>
   ```

   将其改为

   ```
   <table class="table">
   ```

 + 修改图片大小，找到这段代码

     ```
     <%= image_tag(idea.picture_url, :width => 600) if idea.picture.present? %>
     ```

     尝试修改width


 + 打开文件`app/assets/stylesheets/ideas.css.scss`，加入以下代码：

  ```
  .container a:hover {
    color: #f55e55;
    text-decoration: none;
    background-color: rgba(255, 255, 255, 0);
  }
  ```


 + 尝试为页面添加背景图片，使用`background-image`属性，背景纹理资源参考此网站[http://subtlepatterns.com/](http://subtlepatterns.com/)


3.footer样式调整

  + 打开文件 `app/assets/stylesheets/application.css` 并在最底端添加：

    ```
    footer {
      background-color: #ebebeb;
      padding: 30px 0;
    }
    ```

    尝试在`footer`中加入更多内容，并调整位置

4.按钮样式

  + 打开[http://localhost:3000/ideas/new](http://localhost:3000/ideas/new)页面，可以看到页面上的`Create Idea`按钮。

   在文件`app/assets/stylesheets/ideas.css.scss`最后加入

   ```
   .container input[type="submit"] {
      height: 30px;
      font-size: 13px;
      background-color: #f55e55;
      border: none;
      color: #fff;
    }
   ```

   **教练：**解释css中`border`的使用，学员可以尝试修改按钮样式，加圆角，阴影，颜色等。
