
addForm.addEventListener('submit', addItem);

function addItem(e) {
 e.preventDefault();

  var itemName = document.getElementById('itemInput').value
 
  var itemDescription = document.getElementById('description').value
  

  if (itemName === '') {
    alert('Please enter an item name');
    return;
  }
  if(itemDescription === '') {
    alert('Please enter a description for the item');
    return;
  }

  const itemList = document.getElementById('items');

  const li = document.createElement('li');
  li.className = 'list-group-item';
  li.appendChild(document.createTextNode(itemName + ' - ' + itemDescription));


  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'btn btn-dark delet';
  deleteBtn.appendChild(document.createTextNode('x'));

  const editBtn = document.createElement('button');
  editBtn.className = 'btn btn-dark delet edit';
  editBtn.style.backgroundColor="#F0F8FF"
  editBtn.style.color="blue"
  editBtn.style.padding="10px"
  editBtn.style.margin="5px"
  editBtn.style.marginRight ="5px"
  editBtn.appendChild(document.createTextNode('edit'));

  const span = document.createElement('span');
   span.className = 'float-right'
  span.appendChild(editBtn);
  span.appendChild(deleteBtn);
  li.appendChild(span);

  itemList.appendChild(li);
}

const button = document.getElementById("searchBtn");
const input = document.getElementById("filterButton");

// Add an event listener to the button
button.addEventListener("click", function()
 {
  console.log(1)
   const inputValue = input.value.replace(/\s+/g, '').toLowerCase();


  const itemList = document.getElementById('items');
  for(var i=0;i<itemList.children.length;i++)
  {
     const itemText = itemList.children[i].textContent.replace(/\s+/g, '').toLowerCase();
 
    if (itemText.includes(inputValue))
{
  itemList.children[i].style.display='block'
}
else{
  itemList.children[i].style.display='none'
}
  }

});




const itemList = document.querySelector('#items');
itemList.addEventListener('click', function(e) {
  if (e.target.classList.contains('delet')) {
    if (confirm('Are you sure?')) {
      const li = e.target.parentElement.parentElement;
      itemList.removeChild(li);
    }
  } else if (e.target.classList.contains('edit')) {
    const li = e.target.parentElement.parentElement;
    const itemName = li.querySelector('.list-group-item').textContent.split(' - ')[0];
    const itemDescription = li.querySelector('.list-group-item-description').textContent;

    document.querySelector('#item').value = itemName;
    document.querySelector('#description').value = itemDescription;

    itemList.removeChild(li);
  }
});



