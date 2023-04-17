// console.log("hello")
// var side = document.getElementsByClassName("list-group-item");
// for (var i = 0; i < side.length; i++) {
//     side[0].style.color = "#FF0000";
//   }
 
// creat Element
var newDIV=document.createElement("div")
 
// Add a class
newDIV.className="hello"
newDIV.id="Hello world!"
// Add attribitue
newDIV.setAttribute("title","helloDiv")


// creat textNode
var newDivText=document.createTextNode("HELLO2")
// console.log(newDivText)
newDIV.appendChild(newDivText)
// console.log(newDIV)
var container=document.querySelector(".container")
//console.log(container)
var h1=document.querySelector(".header,h1")
container.insertBefore(newDIV,h1)
newDIV.style.fontSize="30px"
var parentElement = document.getElementById("items");
var newElement = document.createElement("li");
var newTextNode = document.createTextNode("insertedItem1");

newElement.appendChild(newTextNode);
parentElement.insertBefore(newElement, parentElement.firstChild);


