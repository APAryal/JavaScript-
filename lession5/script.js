"use strict";
function hello(){
console.log("hey harry");
}
let obja={
r:34,
m:64,
func: function myfunc(number){
console.log("the number is"+number);
}
}
document.addEventListener("click",function click(){
console.log("clicked");
// alert("hello")
let conf=confirm("are you sure?");
console.log(conf);
})
let arr=[34, 21, 23];