// // Attributes
// // .getAttribute(attr) // to get the attribute value

// let div =document.querySelector("div");
// console.log(div);
// let id=div.getAttribute("id");
// console.dir(id);
// let name= div.getAttribute("name");
// console.dir(name);

// let para= document.querySelector("p");
// console.log(para.getAttribute("class"));


// // setAttribute(attr, value)//to set the attribute val th
// let para =document.querySelector("p");
// console.log(para.setAttribute("class", "newclass"));


// // sytle
// // .node.style
// let div=document.querySelector("div");
// div.style.backgroundColor="green";
// div.style.backgroundColor="purple";
// // div.style.visibility="hidden";
// div.style.fontSize="26px";
// div.innerText="Hello!";

// Insert Element
//// node.append(el)// adds at the end of node (inside)
// let newBtn = document.createElement("button");
// newBtn.innerText = "click me!";
// console.log(newBtn);
// let div = document.querySelector("div");
// div.append(newBtn);
// //node.prepand(el)//adds at the start of node (inside)
// let div = document.querySelector("div");
// div.prepend(newBtn);
// //node before(el)// adds before the node (outside)
// let div = document.querySelector("div");
// div.before(newBtn);
//// node.after(el)// adds after the node(outside)
// let p = document.querySelector("p");
// p.after(newBtn);


// let newHeading=document.createElement("h1");
// newHeading.innerHTML="<i> Hi, am new!</i>";
// document.querySelector("body").prepend(newHeading);
// //delete Element
// let para= document.querySelector("p");
// para.remove();
// newHeading.remove();
// //let's Practice
//// Q1) Create a new button element. Give it a text "click me".
//// background color of red and text color of white.
//// insert the button as the first element inside the body tag

let newBtn=document.createElement("button");
newBtn.innerText="click me";
newBtn.style.color="white";
newBtn.style.backgroundColor="red";
document.querySelector("body").prepend(newBtn);

// //Q2)Create  a <p> tag in html , give it a class and some styling.
//// Now create a new class in CSS and try to append this class to the <p> element.
//// did you notice, how you overwrite the class name when you add a new one?
// //Solve this problem using classList.
let para=document.querySelector("p");


