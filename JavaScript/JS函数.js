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