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