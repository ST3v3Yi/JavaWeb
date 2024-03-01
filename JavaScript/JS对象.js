//  JS自定义对象
    var obj = new Object();
    obj.age = 123;
    obj.name = "zs";
    obj.func = function (){
        alert( this.name + "的年龄为" + this.age );
    }
    obj.func();

//  亦可用{}来定义Object对象
    var obj1 = {
        name: "zs",
        age: 18,
        fun: function (){
            alert( this.name + "的年龄为" + this.age );
        }
    };
    obj1.fun();