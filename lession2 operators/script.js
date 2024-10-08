// this code prints hello world
console.log("hello world!");  
/*Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi molestias cum 
possimus laboriosam deserunt iusto quam nostrum maxime, amet 
hic quisquam numquam ipsum? Nam cupiditate earum et error adipisci */

// Arithemetic Operators
// let a=5;
// let b=2;
// console.log("a+b"+"=",a+b);
// console.log("a-b =", a-b);
// console.log("a=",a, "& b=", b);
// console.log("a*b =", a * b);
// console.log("a/b =", a / b);
// console.log("a%b =", a % b);// this is modulus
// console.log("a**b =", a ** b);//this is gives Exponentiation value
// unary operator
let a=5;
let b=2;
console.log("a=",a, "&b=",b);
a++;//6
console.log("a=",a);//6
b--;
console.log("b=",b);
// post increment method
console.log("a++",a++);
console.log("a=",a);
// pre increment
console.log("++a=",++a);
// post decrement
console.log("a--", a--);
console.log("a=",a);
// pre decrement
console.log("--a=",--a );
// assignment operators
let x=7;
let y=6;
x+=4; //x=x+4
console.log("x=",x);
y-=4;//y=y-4
console.log("y=",y);
x-=3;
console.log("x=",x);
x*=4;//x=x*4
console.log("x=",x);
x/=4;//x=x/4
console.log("x=",x);
x%=3;//x=x=x%3
console.log("x=",x);
x**=10;
console.log("x=",x);
//for using  comparison operators
let c=5;
let d=2;
let e=5;
let f=7;
console.log("5==2", c==d);//false
console.log("5!=2",c!=d);
console.log("c==e",c==e);
{
let a=5;//number
let b="5"//string->number
console.log("a==b", a==b);
console.log("a===b",a===b);
console.log("a!=b", a!=b);
console.log("a!==b",a!==b);


}
{
let a=5;
let b=3;
console.log("a>b", a>b);
console.log("!(a>b)", !(a > b));

console.log("a>b",a>b);
console.log("a<=b",a<=b);
}
// for using logical operator
{
let a=6;
let b=5;
let cond1=a>b;//true
let cond2=a===6;//true
let cond3=b===7;//false
let cond4=a===5;//false
// using logical and operator
console.log("cond1&& cond2", cond1&&cond2);
console.log("cond1&&cond3",cond1&&cond3);
// using logical or operator
console.log("cond1||cond3",cond1||cond3);
console.log("cond3||cond4",cond3||cond4);

}
