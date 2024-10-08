// let btn1=document.querySelector("#btn1");
// btn1.onclick =(evt)=>{
// console.log(evt);
// console.log(evt.type);
// console.log(evt.target);
// console.log(evt.clientX, evt.clientY);

// };
// let box=document.querySelector("#box");
// box.onmouseover=(evt)=>{
// // console.log("you are inside div");
// console.log(evt);
// console.log(evt.type);
// console.log(evt.target);
// console.log(evt.clientX, evt.clientY);


// }

// //event Listeners
// //Node.addEventListener(event, callback)
// let btn1= document.querySelector("#btn1");
// btn1.addEventListener("click",(evt)=>{
// console.log("button1 was clicked");
// console.log(evt);
// console.log(evt.type);
// } );
// btn1.addEventListener("click", () => {
//   console.log("button1 was clicked-handler 2");
// });
// const handler3=()=>{
//   console.log("button1 was clicked-handler 3");
// }
// btn1.addEventListener("click",handler3 );

// btn1.addEventListener("click", () => {
//   console.log("button1 was clicked-handler 4");
// });
// btn1.removeEventListener("click", handler3);

// //let's Practice
// //Q1) Create a toggle button that changes the screen to
// //dark-mode when clicked and light-mode when clicked again.
let body =document.querySelector("body");
let modeBtn=document.querySelector("#mode");
let currMode="light";// dark
modeBtn.addEventListener("click", ()=>{
if ( currMode==="light"){
currMode="dark";
body.classList.add("dark");
body.classList.remove("light");
}else{
currMode="light";
body.classList.add("light")
body.classList.remove("dark");
}
console.log(currMode);
})
