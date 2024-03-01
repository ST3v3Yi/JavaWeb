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

