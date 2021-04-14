//array.js
<script >
    let names = []; //new Array();
names[0] = 'Hong';
names.push('임성원');
names.push('정준영');
names.unshift('도왕락');

delete names[0];
names.pop(); //제일 뒤쪽 요소부터 제거.
names.shift(); //제일 앞쪽 요소부터 제거.

for (let i = 0; i < names.length; i++) {
    console.log(i, names[i]);
}
let ns = names.join('-');
console.log(ns);

ns = names.reverse();
console.log(ns);

names.reverse();
names.push('김민주');

ns = names.splice(1, 3); //Hong,임성원,김민주
console.log(ns);
console.log(names); </script>