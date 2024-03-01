/*
    JavaScript中，所有的变量都可以作为一个boolean类型的变量去使用
    0, null, undefined, ""(空串)都认为是false
*/

    var a = 0;
    if (a) {
        alert("零为真");
    } else {
        alert("零为假");
    }

    var b = null;
    if (b) {
        alert("null为真");
    } else {
        alert("null为假");
    }

    var c = undefined;
    if (c) {
        alert("undefined为真");
    } else {
        alert("undefined为假");
    }

    var d = "";
    if (d) {
        alert("空串为真");
    } else {
        alert("空串为假");
    }

/*
    && 且运算。
    有两种情况：
    第一种：当表达式全为真的时候。返回最后一个表达式的值。
    第二种：当表达式中，有一个为假的时候。返回第一个为假的表达式的值
*/

    var a = "abc";
    var b = true;
    var d = false;
    var c = null;

    // alert( a && b );//true
    // alert( b && a );//true
    // alert( a && d ); // false
    // alert( a && c ); // null

/*
    || 或运算
    第一种情况：当表达式全为假时，返回最后一个表达式的值
    第二种情况：只要有一个表达式为真。就会把回第一个为真的表达式的值
*/

    // alert( d || c ); // null
    // alert( c|| d ); //false

    // alert( a || c ); //abc
    // alert( b || c ); //true
