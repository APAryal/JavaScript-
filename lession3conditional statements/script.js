// conditional statements
// let age=18;
// if(age>=18){
// console.log("you can vote");

// }
// if(age<18){
// console.log("you cannot vote");
// }

// let mode="dark";
// let color;
// if(mode=="dark"){
// color="black";
// }
// if (mode==="light"){
// color="white";
// }
// console.log(color);
// this is if -else statement
// let mode="light";
// let color;
// if (mode=="dark"){
// color="black";
// }else{
// color="white";
// }
// console.log(color);

// this case is age vote or not vote
// let age=2;
// if(age>=18){
// console.log("vote");
// }else{
// console.log("not vote");
// }
// we are check odd or even number 
// let num=2
// if(num%2===0){
// console.log(num,"this number is even");
// }else{
// console.log(num,"this number is odd");
// }
// this is else-if statement age check junior senior and middle
// let age=20;
// if(age<18){
// console.log("junior");
// }else if(age>60){
// console.log("senior");
// }else{
// console.log("middle");
// }
// let mode="dark";
// let color;
// if(mode==="dark"){
// color="black"
// }else if( mode==="blue")
// {
// color="blue"
// }else if (mode==="pink"){
// color="pink";
// }else{
// color="white"
// }
// console.log(color);
// comment code
// if(mode==="dark"){
// console.log(mode);
// }
// if(mode==="dark") console.log(mode); //this is not better method  ok
// ternary operator
// let age=20;
// let result=age>18? "adult":"not adult";//simpler compact state
// console.log(result);

// let age=16;
// age>=18? console.log("adult"):console.log("not adult");

// MDN Docs
// alert("hello!")//one time pop of create
// let apkaname=prompt("hello!");
// console.log(apkaname);
// next example get user ti input a number using prompt("enter a number:").
// check if the number is a multiple of 5 or not.
// let num=prompt("enter a number");
// if (num%5===0){
// console.log(num," is multiple of 5");
// }else{
// console.log(num,"is not a multiple of 5" );
// }

// let score=prompt("enter the student score");
// if(score>=80&&score<=100 ){
// score="A";
// } else if( score>=70&&score<=89){
// score="B"
// } else if( score>=60&& score<=69)
// {
// score="C"
// }else if(score>=50&& score<=59){
// score="D"
// }else if(score>=0&& score<=49){
// score="F"
// }else{
// score="wrong"
// }
// console.log("result is:",score);
// write a code which can give grades to students according to their scores:
// 80-100, A
// 70-89, B 
// 60-69, C 
// 50-59, D 
// 0-49, F 

let score=95;
let grade;
if(score>=90&& score<=100){
grade="A";
}else if (score>=70 && score<=89){
grade="B";
}else if (score>=60&& score<=69){
grade="C";
}else if(score>=50 && score<=59){
grade="D";
}else if (score>=0 && score<=49){
grade="F"
}
console.log("according to your scores, your grade was: ", grade);

