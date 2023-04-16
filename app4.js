 var li =document.getElementsByTagName("li");
 console.log(li);
console.log(li[0]);
console.log(li[1]);
console.log(li[2]);
console.log(li[3]);


for (var i = 0; i < li.length; i++) {
  li[i].style.backgroundColor = "#00ff00";
}
var items=document.getElementsByClassName("list-group-item")
console.log(items)
for(var i=0;i<items.length;i++)
{
    items[i].style.backgroundColor="#F08080"
}