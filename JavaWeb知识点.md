# Java Web知识点

### HTML：

#### 掌握网页的基本构成：

```
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>My test page</title>
    <link rel="stylesheet" type="text/css" href="CSS/css.css" />
    <script type="text/javascript"></script>
  </head>
  <body>
    <img src="images/firefox-icon.png" alt="My test image" />
  </body>
</html>

```

- `<!DOCTYPE html>`——文档类型。这是必不可少的开头。

- `<html></html>`——`<html>`元素。该元素包含整个页面的所有内容，有时候也称作根元素。里面也包含了 `lang` 属性，写明了页面的主要语种。

- `<head></head>`——`<head>`元素。所有那些你加到页面中，且不向用户展示的页面内容，都以这个元素为容器。其中包含诸如提供给搜索引擎的关键字和页面描述、用于设置页面样式的 CSS、字符集声明等等。

- `<meta charset="utf-8">`——该元素指明你的文档使用 UTF-8 字符编码，UTF-8 包括世界绝大多数书写语言的字符。它基本上可以处理任何文本内容。以它为编码还可以避免以后出现某些问题，没有理由再选用其他编码。

- `<meta name="viewport" content="width=device-width">`——视口元素可以确保页面以视口宽度进行渲染，避免移动端浏览器上因页面过宽导致缩放。

- `<title></title>`——`<title>`元素。该元素设置页面的标题，显示在浏览器标签页上，也作为收藏网页的描述文字。

- `<body></body>`——`<body>`元素。该元素包含期望让用户在访问页面时看到的*全部*内容，包括文本、图像、视频、游戏、可播放的音轨或其他内容。

  

------

#### 掌握HTML的基本语法：

- **HTML标题**

  HTML 标题（Heading）是通过<h1> - <h6> 标签来定义的。

  ```
  <h1>这是一个标题</h1>
  <h2>这是一个标题</h2>
  <h3>这是一个标题</h3>
  ```

- **HTML段落**

  HTML 段落是通过标签 <p> 来定义的。

  ```
  <p>这是一个段落。</p>
  <p>这是另外一个段落。</p>
  ```

- **HTML链接**

  HTML 链接是通过标签 <a> 来定义的。

  ```
  <a href="https://www.baidu.com">这是一个链接</a>
  ```

- **HTML图像**

  HTML 图像是通过标签 <img> 来定义的。

  ```
  <img src="/images/logo.png" width="258" height="39" />
  ```

  除此之外，可见于：[hello.html](./hello.html)

  

------

#### 表格的作用以及合并行、合并列：

作用：更加整洁地展示数据。

合并行和合并列利用`rowspan`和`colspan`来实现。

<table width="500" height="500" cellspacing="0" border="1">
    <tr>
        <td colspan="2">1.1</td>
        <td>1.3</td>
        <td>1.4</td>
        <td>1.5</td>
    </tr>
    <tr>
        <td rowspan="2">2.1</td>
        <td>2.2</td>
        <td>2.3</td>
        <td>2.4</td>
        <td>2.5</td>
    </tr>
    <tr>
        <td>3.2</td>
        <td>3.3</td>
        <td>3.4</td>
        <td>3.5</td>
    </tr>
    <tr>
        <td>4.1</td>
        <td>4.2</td>
        <td>4.3</td>
        <td colspan="2" rowspan="2">4.4</td>
    </tr>
    <tr>
        <td>5.1</td>
        <td>5.2</td>
        <td>5.3</td>
    </tr>
</table>



------

#### 表单标签的使用：

**表单**
    radio单选 name属性进行分组 checked表示默认选中
    checkbox复选 checked表默认选中
    select下拉列表框
    option下拉列表框中的选项 selected="selected"表示默认选中
    textarea表示多行文本输入框
        rows和cols表示显示几行几列
    reset重置按钮 value改变文本
    submit提交
    file文件上传域
    hidden隐藏域 要发送某些信息但不需要用户参与

<form action="http://localhost:8080" method="post">
    <input type="hidden" name="action" value="login"/>
    <h1 align="center">用户注册</h1>
    <table align="center"><!-- 利用表格使得表单显示工整有序 -->
        <tr>
            <td>用户昵称：</td>
            <td><input type="text" name="userName" value="默认值" /></td>
        </tr>
        <tr>
            <td>用户密码：</td>
            <td><input type="password" name="password" value="abc"/></td>
        </tr>
        <tr>
            <td>确认密码：</td>
            <td><input type="password" value="abc" /></td>
        </tr>
        <tr>
            <td>性别：</td>
            <td>
                <input type="radio" name="sex" checked="checked" value="man"/>男
                <input type="radio" name="sex" value="woman"/>女
            </td>
        </tr>
        <tr>
            <td>兴趣爱好：</td>
            <td><input type="checkbox" name="hobby" checked="checked" value="java"/>Java
                <input type="checkbox" name="hobby" value="js"/>JS
                <input type="checkbox" name="hobby" value="c#"/>C#
            </td>
        </tr>
        <tr>
            <td>国籍：</td>
            <td>
                <select name="country">
                    <option selected="selected" value="cn">中国</option>
                    <option value="us">美国</option>
                    <option value="other">外国</option>
                </select>
            </td>
        </tr>
        <tr>
            <td>自我评价：</td>
            <td><textarea name="desc" rows="10" cols="25">默认输入</textarea></td>
        </tr>
        <tr>
            <td><input type="reset" value="改变文本"/></td>
            <td><input type="submit" value="提交按钮"/>&nbsp&nbsp&nbsp<input type="file" /></td>
        </tr>
    </table>
</form>

------

#### 提交方式get/post的区别：

```
GET请求的特点：
    1.浏览器地址栏中的地址是：action属性[+?+请求参数]
    2.不安全（地址栏中显示数据，如：密码）
    3.有数据长度的限制

POST请求的特点：
    1.浏览器地址栏中只有action属性值
    2.相较于get请求要安全
    3.理论上没有数据长度的限制
```

------

#### 框架布局的使用：



### CSS：

#### 掌握CSS的语法及作用，在html中的声明方式：

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>CSS Test</title>
    <link rel="stylesheet" type="text/css" href="CSS/css01.css" />
    <style type="text/css">
        #div01 {
            text-align: center;
            color: red;
            border: 1px solid blue;
            width: 100px;
            height: 100px;
        }/* ID不可重复 */
        .div02{
            text-align: center;
            color: blue;
            border: 1px solid red;
            width: 100px;
            height: 100px;
        }/* class类别可以重复 */
        .div02, #div01{
            font-size: 18px;
            margin-left: auto;
            margin-right: auto;
        }
        #div03{
            width: 500px;
            height: 500px;
            margin: 5px auto;
            border: 1px solid black;
            text-align: center;
            table {
                margin: auto;
            }
        }
    </style>
</head>
<body>
    <p>123</p>
    <p id="abc">123</p>
    <div id="div01">ID div1</div>
    <div id="div02">ID div2</div>
    <div class="div02">class div1</div>
    <div class="div02">class div2</div>
</body>
</html>
```



------

#### 掌握CSS布局的函数使用：



------

#### 掌握CSS外部样式的引入：

```
<link rel="stylesheet" type="text/css" href="CSS/css01.css" />
```



### JavaScript：

#### 掌握JS的语法及作用，在HTML中的声明方式：

```
声明方式：
<script type="text/javascript"></script>
```



------

#### 掌握JS的运行方式：



------

#### 掌握JS中的变量声明、函数声明、参数传递等：

**JS变量：**

```
/*
    变量类型：
        数值类型        number
        字符串类型       string
        对象类型        object
        布尔类型        boolean
        函数类型        function

    JavaScript的特殊值：
        undefined       未定义，所有js未被赋予初始值的默认值
        null            空值
        NAN             全称：Not a Number；非数值
*/
    var i;
    alert(i);   //undefined
    i = 12;
    alert(typeof(i));   //number
    var a = 123;
    var b = "abc";
    alert( a * b );     //NAN
```

**JS函数及参数传递：**

```
//  无参函数
function func(){
    alert("无参函数func()被调用了");
}
func();

//  有参函数
function func2(a, b){
    alert("有参函数func2()被调用了");
}
func2(1, 2);

//  带返回值
function func3(num1, num2){
    var res = num1 + num2;
    return res;
}
func3(12, 123)

//  第二种定义函数
var func4 = function (a1, a2) {
    alert( a1 == a2 );
}
func4(12, "12");

//  隐形参数
function sum(){
    var result = 0;
    for (var i = 0; i < arguments.length; i++){
        if (typeof (arguments[i]) == "number"){
            result = result + arguments[i];
        }
    }
    return result;
}
sum(1, 2, 3, 123, 456);
```



------

#### 掌握HTML中的标签事件使用：

```
/*
    常用的事件
        1.onload加载完成事件              常用于做js代码初始化操作
        2.onclick单击事件                常用于按钮的的点击事件
        3.onblur失去焦点事件              常用于输入框失去焦点后验证其输入内容是否合法
        4.onchange内容发生改变事件         常用于下拉列表和输入框内容发生改变后操作
        5.onsubmit表单提交事件            常用于表单提交前，验证所有表单项是否合法
*/

// 事件的注册又分为静态注册和动态注册两种
//  静态注册：通过HTML标签的事件属性直接赋予事件响应后的代码。
//  动态注册：指先通过js代码得到标签的dom对象，然后再通过dom对象.事件名 = function(){}这种形式赋予事件响应后的代码。
//      动态注册的基本步骤：
//          1.获取标签对象
//          2.标签对象.事件名 = function(){}
```

详细可见：[JS事件样例](./JavaScript/event)



------

#### 掌握JS中的DOM原型：

分为：`getElementById`、`getElementsByName`、 `getElementsByTagName`、 `RegExp正则表达式`、 `createElement`

详细可见：[DOM样例](./JavaScript/Document)



### jQuery：

#### 了解如何使用jQuery，下载最新版或者老版本的jQuery.js

------

#### 掌握选择器、文档处理、属性、事件等语法及使用；

------

#### 能够灵活使用选择器查找到想要查找的元素并操作他们的属性；

------

#### 动态声明事件；

------

#### 动态创建元素。