// // we are start in array description
// let marks=[97, 82, 75, 64,36];
// console.log(marks);
// console.log(marks.length);//property
// let animal=['cat', 'dog', 'elephants', 'cow'];
// console.log(animal);
// console.log("second marks",marks[2]);
// marks[2]=80;
// console.log(marks);
// // for looping over an Array
// // print all elements of an array
// let arr=["monkey ","cow", "dog", "cat", "donkey"];
// for (let i=0; i<=arr.length; i++)
// {
// console.log(arr[i]);
// }
// // for of loop using print array
// let usernames=["ram", "sita", "gita", "mina", "sunita", "raju", "kalpana", "kabita"];
// for(let username of usernames){
// console.log(username);

// }
// console.log("\n");
// let cities=["butwal", "kathmanudu","pokhara", "tamghs"];
// for(let city of cities){
// console.log(city.toUpperCase());
// }

// // for a given array with marks of students->[85, 97, 44, 37, 76,60]
// // Find the average marks of the entire class.
// let marks=[85, 97, 44, 37, 76, 60];
// let sum=0;
// for (let val of marks) {
//   sum += val;
// }
// let avg= sum/marks.length;
// console.log(`avg marks of the class=${avg}`);
// For a given aray with prices of 5 items ->[250, 645,3 00,900,50] 
// // all items have an offer of 10% OFF on them . Change the array to store final 
// // price after applying offer.
// let items=[250, 645,300,900,50]
// for(let val of items){
// let offer=(val*10)/100;
// val=val-offer;
// console.log(val);
// }
// // push(): add to end for example
// let items=["apple", "mango", "banana"];
// items.push("popaya");
// console.log(items);
// // pop():delete from end & return
// let fooditems=["potato", "apple", "litchi", "tomato"];
// console.log(fooditems);
// let deleteditem=fooditems.pop();
// console.log(fooditems);
// console.log("deleted", deleteditem);
// // toString(): converts array  to string
// let foodItems=['potao', 'apple', 'litchi','tomato'];
// console.log(foodItems);
// console.log(foodItems.toString());
// // Concat(): joins multiple arrays and returns result
// let marvel_heroes=["thor", "spiderman", "ironman"];
// let dc_heroes=["superman","batman"];
// let arr=marvel_heroes.concat(dc_heroes);
// console.log(arr);
// // ubshift(): add to start
// let  animal=["ass", "bear", "cow", "cat"];
// animal.unshift("deer");
// console.log(animal);
// // shift():delete from start and return
// let partOfBody=["limb", "bone", "plam", "finger", "toe","hand"];
// let returnvalue=partOfBody.shift();
// console.log(partOfBody);
// console.log("deleted value are",returnvalue);
// // slice(): returens a pice of the array slice (startindex, endindex)
// let animal=[" foal", "cub", "calf", "kitten", "fawn","puppy", "duckling","kid", "chicken", "cub"];
// console.log(animal);
// console.log(animal.slice(1,5));
// // splice(): change original array (add, remove replace)

// let arr=[1,2,3,4,5,6,7,8];
// // arr.splice(2,2,101,102);
// // Add Elemnet
// arr.splice(2, 0, 101);
// console.log(arr);
// // delete Element
// arr.splice(3,1);
// console.log(arr);
// // Replace Elemnt
// arr.splice(3, 1,104);
// console.log(arr);
// let aliments = [
//   "hydrocle",
//   "epitexis",
//   "blindness",
//   "sinus",
//   "indigestion",
//   "nocrolepsy",
// ];
// aliments.splice(0,1);
// console.log(aliments);
// aliments.splice(1,1,"mumps");
// console.log(aliments);
// aliments.splice(6, 0, "dysentery");
// console.log(aliments);
// // remove the first aliments from the array
// aliments.shift();
// console.log(aliments);
// // add dysentery at the end
aliments.push("dysentery ");
console.log(aliments);




