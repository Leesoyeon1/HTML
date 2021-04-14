//variable.js
var num1 = 10;
var num2 = 20;
num1 = '10.05';
num2 = '20.45';
console.log(typeof num1);

var num3 = null;
num3 = {
    name:'Hong',
    age:20
};
console.log(typeof num3);
console.log(num3.name);
console.log(num3.age);

num3 = true;
console.log(typeof num3);
num3 = '';//null, '',0=>거짓,
if(num3){
    console.log('참입니다.');
}else{
    console.log('거짓입니다.');
}

numbers =[];
numbers[0]=10;
numbers[1]=20;
numbers[2]='hello';

for(var i = 0; i<numbers.length; i++){
    console.log(numbers[i]);
    result += numbers[i];
}
console.log('합계:' +result);

for(var i = 1; i<10; i++){
    console.log('2 * '+i+'='+(2*i));
}
var result = parseInt(num1) + parseInt(num2);

console.log(result);