/**
 *iterator 闭包特性 迭代器
 * **/
function createIterator(x) {
    var i = 0;
     return function(){
       return x[i++];
    };
}

var iterator=createIterator(['a','b','c','d','e','f','g']);
var current;
while(current=iterator())
{
    console.log(current);
}




/**
 * 将一个array 添加到另一个array上面
 * **/
var a=[1,2],b=[3,4,5];

a.push.apply(a,b);


/**
 *统计一个字符在一段字符串里面出现的次数
 * **/

var temp = "This is a string.";

var count = temp.match(/is/g).length;


/**
 * 计算一个数组的内的最大数
 * **/

var a =[1,5,8,9];
console.log(Math.max.apply(this,a));
