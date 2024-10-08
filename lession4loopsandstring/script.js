// console.log("apna college");
// console.log("apna college");
// console.log("apna college");
// console.log("apna college");
// console.log("apna college");
// this are apna college print in 5 times using for loop
// for(let count=1; count<=5; count++){
// console.log(count,"apna college");//5 execute
// }
// calulate sum of 1 to 5
// let sum=0;
// for(let i=1; i<=100; i++){
// sum=sum+i;
// }
// console.log("sum=",sum);
// console.log("loop has ended");
// we are using while loop
// let i = 1;
// while (i <= 5) {
//   console.log("i", i);
//   i++;
// }

// do while loop
//  let i = 1;
// do{
// console.log("i=",i);
// i++;
// }while(i<=5);

// let tried to are for-of loop
// let str="javaScript";
// let size=0
// for(let i of str){//iterator 
// console.log("i=",i);
// size++;
// }
// console.log("string size=", size);//10

// we are try for in loop

// let student={
// name:"apsara aryal",
// age:23,
// cgpa:3,
// isPass:true,

// };
// for(let key in student){
// console.log(key, "value=", student[key]);
// }

// print all even numbers from 0 to 100
// for(let num=0; num<=100; num++){
// if(num%2===0){
// console.log("number=",num);
// }}
// Create a game where you start with any random game number. 
// Ask the user to keep guessing the game number until the user enters correct Value.
// let gamenumber=25;
//  let usernumber=prompt("gess the game number:");
// while (usernumber != gamenumber) {
//   //game
//   usernumber = prompt(" you entered wrong number gess the game number again:");
// }
// console.log("congratulation , you entered the right number");

// string in js
// let str="apsara aryal";
// let str2='apsu';
// console.log( str,"  length =",str.length);
// console.log(str[8]);

// template Literals
// let specialString='this is a template literal';
// console.log(typeof specialString);
// console.log(typeof specialString);
// let obj={
// item:"pen",
// price:10,

// }
// console.log("the cost of ",  obj.item,"is",obj.price ,"rupees");
// let obj={
// item: "pen",
// price: 10,
// };
// let output=`the cost of  ${obj.item} is ${obj.price} rupes `;
// console.log(output);
// console.log("the cost of" , obj.item, "is", obj.price, "rupees");
// template Literals
let specialString = `this is a template literal ${1 + 2 + 3}`;
console.log( specialString);
// escape character

// console.log("my\ncollege");
// console.log("my \t home");
// let str='my\troom\tbest';
// console.log(str.length);
// the javascript string always are immutabile
// let str='my house'
// console.log(str.toUpperCase());
// str.trim()//removes whitespaces
// let str="   hi   i   am    js   developer  ";//starting and ending space only remove
// console.log(str.trim());
// let str1="abcdefgh";
// // str1.slice(start,end); we are printed value
// console.log(str1.slice(0, 3));
// // string concation method// str1.concat(str2)
// let str1='harry'
// let str2='sham'
// console.log(str1.concat(str2));//output harrysham
// console.log(str1+str2);//second method
// // str.replace(searchVal, newVal)//this methodused in searching
// let str="hello";
// console.log(str.replaceAll("lo","p"));
// str.charAt(idex)
// let str="hello world !";
// console.log(str.charAt(8))
// Prompt the user to enter their full name . Generate a username for them based on the input 
// Start username with@, followed by their full name and ending with the fullname length.
let username= prompt("enter the user name");
console.log("@"+username+username.length );