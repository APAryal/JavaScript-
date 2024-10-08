// function myFunction(msg,n){//parameter->input
// console.log(msg ,n);

// }
// myFunction("i love javascript", 100);   //argument
// // function-> 2 numbers, sum
// function sum(a,b){
// //local variables-> scope
// s=a+b;
// return s;
// }
// let val=sum(3,4);
// console .log(val);
// // sum function
// function sum(a, b){
// return a+b;
// }
// //multiplication function
// function mul(a,b){
// return a*b;
// }
// let a=sum(10 ,4);
// console.log(a);
// let b = mul(10, 4);
// console.log(b);
// // sum function arrrow sum
// function sum (a,b){
// return a+b;

// }
// const arrowSum=(a, b)=>{
// console.log(a+b);
// };
// //multiplication function arroe mul
//  function mul(a, b){
//  return a*b;
//  }
//  const arrowMul=(a,b)=>{
//  return a*b;
//  };
//  const printHello=()=>
//  {console.log("hellow");
//  }
// // Create a function using the "function " Keyword that takes a String as an argument and returens the number of vowels in the string.
// function countVowels(str){
// let count=0;
// const vowels="aeiouAEIOU";
// for(let i=0; i<=str.length; i++){
// if(vowels.includes(str[i])){
// count++;
// }
// }
// return count;
// }
// let val=countVowels( prompt ("enter your any string"));
// console.log("count the values", val);
// // using in arrow function slove here
// const countVowels=(str)=>{
// let count=0;
// let vowels="aeiouAEIOU"
//  for (let i = 0; i < str.length; i++){
//    if (vowels.includes(str[i])) { // Check if the character is a vowel
//       count++; // Increment the count if vowel is found
//     }
// }
// return count;
// }
//  let val=countVowels( prompt ("enter your any string"));
//  console.log("count the values", val);
// //forEach loop in Arrays
// let arr=[1, 2, 3 ,4,5];
// arr.forEach(function printVal(val){
// console.log(val);

// })



// let Fruits=["grapes", "currant", "water_maleon","fig", "walnut", "coconut", "pine-apple", "orange", "pomegranate","peech", "papaya", "mango","pear", "gromia","plum","date", "almond"];
// Fruits.forEach((val, idx, Fruits)=>{
// console.log(val.toUpperCase(), idx ,Fruits);
// })
//// for a given array of numbers, print the square of each value using the forEach loop
// let nums=[2,3,6,8,9,10];
// nums.forEach((val)=>{
// console.log(val*val);//val**2
// })
// //next method using call back function
// let nums=[67, 52, 39];
// let calcSquare=(num)=>{
// console.log(num*num);
// };
// nums.forEach(calcSquare);
// // some more array method //map
// // create a new array with the results of some operation. 
// // The value its callback returns are used to form new array
// let nums=[56,25,67,89];
// nums.map((val)=>{
// console.log(val);
// })
// // using the filter method
// // creates a new array of elements that give true 
// // for a condition/filter
// // Eg: all even elements
// // let newArr=arr.filter((val)=>{
// // return val%2===0;
// // })
// // let start example program using the filter method
// let arr=[1,2,3,4,5,6,7,8];
// let evenArr=arr.filter((val)=>{
// return val%2===0;
// });
// console.log(evenArr);
// //Performs some operations and reduces the array to a 
// // single value. it returns that singles value.

// let arr=[2,49,6,7];
//  const output=arr.reduce((prev,curr)=>{
// // return prev*curr;
// return prev>curr?prev:curr;
// });
// console.log(output);
//// we are given array of amrks of studenst .
//// Filter our of the marks of students that scored 90+
// let marks= [97, 64, 32, 49,99,96,86];
// let topperArry=marks.filter((val)=>{
// return val>90;
// });
//// console.log("greatest array:",topperArry);
// //take a number n as input from user.
// //create an array of numbers from 1 to n.
////  Use the reduce method to calculate sum of all
// //numbers in the array. use the reduce method to calculate
//// product of all numbers in the array.
let n=prompt("enter a number:")
let arr=[];
for(let i=1; i<=n; i++){
arr[i-1]=i;
}
console.log(arr);
 const output=arr.reduce((prev,curr)=>{
// return prev+curr;
return prev*curr;

});
console.log(output);
