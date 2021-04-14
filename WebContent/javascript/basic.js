// javascript/basic.js

var num1;
num1 = 10;//number
num1 = 'Hello';//string
num1 = false;//boolean
num1 =  null;//object
num1 = {
    name='Hong',
    age:20
}
num1=[];//object
num1[0]=10;
num1[1]=20;
num1[2]='Hello';

num1 = function(){//function
    window.alert('Hello');
}
console.log(num1());
// console.log(typeof num1);
let num2;
num2 = 10;
{
    let num2;
    num2 = 20;
    console.log('{ num2: }' + num2)
}
num2 = 15;

