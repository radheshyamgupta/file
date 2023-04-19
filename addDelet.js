var form = document.getElementById("addForm");
var itemList = document.getElementById("items");

form.addEventListener('submit', addItem);
itemList.addEventListener("click", removeItem);

function addItem(e) {
    e.preventDefault();
   
    var newItem = document.getElementById("item").value;
    
    // create new li element
    var li = document.createElement("li");
    li.className = "list-group-item";
    
    // add text node
    var text = document.createTextNode(newItem);
    li.appendChild(text);
    
    // add delete button
    var deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-dark delet";
    deleteBtn.appendChild(document.createTextNode('x'));
    
    // add span with float-right class
    var span = document.createElement("span");
    span.className = "float-right";
    span.appendChild(deleteBtn);
    li.appendChild(span);
    
    // add new item to list
    itemList.appendChild(li);
   
   
}
function removeItem(e) {
    if (e.target.classList.contains("delet")) {
        if (confirm('Are you sure?')) {
            var li = e.target.parentElement.parentElement;
            itemList.removeChild(li);
        }
    }
}



