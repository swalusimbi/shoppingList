var input = document.getElementById("userinput");
var button = document.getElementById("addItem");
var ul = document.querySelector("ul");


function createListItem() {
    var li = document.createElement("li");  
    li.appendChild(document.createTextNode(input.value));

    var del = document.createElement('button');
    del.textContent = 'Delete';
    del.classList.add("delete");
    
    li.appendChild(del);
    ul.appendChild(li);
    input.value = "";
    input.focus();
    
}

function deleteAfterClick(event) {
// Determine if it was a delete button that was clicked
if(event.target.classList.contains("delete")){
    // Remove the closest li ancestor to the clicked element
    event.target.closest("li").remove();
}

}

button.addEventListener("click", createListItem);
ul.addEventListener("click", deleteAfterClick);
