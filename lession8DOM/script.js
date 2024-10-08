// // window  object
// // the window object represents an open window in a browser.
// // it is browser's object (not javascript's) and automatically created by browser.
// // It is a global object with losts of properties and methods.

// // what is DOM?
// // when a web page is loaded, the browser creates a Document Object Model(DOM) of the page 
// document.body.childNodes[1].innerText ="abcd";
// // dom manipulation
// // selecting with  id
// // document.getElementBy("myid")
// let button= document.getElementById("myId");//h1
// console.dir(button);
// // Selecing with class
// // document.getElementsByClassName("myClass")
// let headings=document.getElementsByClassName("heading");
// console.dir(headings);
// // Selecting with tag
// // document.getElementByTagName("p")
// let  parahs=document.getElementsByTagName("p");
// console.log(parahs);
// // query Selector 
// // document.QuerySelector("myId/ myClass/tag")
// // return first element
// let elements=document.querySelector("p");//1st element
// console.dir(elements);

// // document.querySelectorAll("myId myClass/tag")
// // returns a NodeList
// let allElements=document.querySelectorAll("p");
// console.dir(allElements);
// // properties->get ,set, change/update in the value ok
// // tagName:returns tag for element nodes
// let firstEl=document.querySelector("p")
// console.dir(firstEl);
// //this is homework problem
// //innerText: returns the text content of the element and all its children
// let div = document.querySelector("div");
// console.dir(div);
// //div.innerText;

//// innerHTML: returns the plain text or HTML contents in the elemnt
// //div.innerHTML
//// textContent: returns textual content even for hiddend elements
// let heading=document.querySelector("h1");
////div.innerContent

// // Let's Practice question
// // Q1) Create a H2 heading element with text -"Hello JavaScript". Append "from my college students" to this text using js.
// let h2= document.querySelector("h2")
// console.dir(h2.innerText);
// h2.innerText=h2.innerText +" from my college students";
//// Q2) Create 3 divs with commom class name- "box". Access them and add some unique text to each of them.

let divs=document.querySelectorAll(".box");
// divs[0].innerText="new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 3";
let idx=1;
for(div of divs){
div.innerText=`new unique value ${idx}`;
idx++;

}