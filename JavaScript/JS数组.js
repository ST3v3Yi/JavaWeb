/* 数组 */
// JavaScript中的数组，只要通过数组下标赋值，那么最大的下标值就会自动给数组做扩容操作。
    var arr = [];
    arr[0] = 12;
    arr[2] = "abc";
    for (i = 0; i < arr.length; i++){
        alert( arr[i] );
    }   //arr[1]为undefined