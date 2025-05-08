const notesContainer = document.querySelector(".todo-list");
const addBtn = document.getElementById("add-btn");

function showNotes(){
  let savedNotes = localStorage.getItem("notes");
  if (savedNotes) {
    notesContainer.innerHTML = savedNotes;
  }
}

function updateStorage(){
  localStorage.setItem("notes", notesContainer.innerHTML);
}

addBtn.addEventListener("click", ()=>{
  let inputValue = document.getElementById("todo-input").value;

  if(inputValue.trim() === ""){
    alert("Unfilled");
    return;
  }

  let li = document.createElement("li");
  li.className = "todo-item";

  let span = document.createElement("span");
  span.textContent = inputValue;

  let actions = document.createElement("div");
  actions.className = "actions";

  let editBtn = document.createElement("button");
  editBtn.className = "edit-btn";
  editBtn.textContent = "✏";

  let deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "🗑";


  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);
  li.appendChild(span)
  li.appendChild(actions);
  notesContainer.appendChild(li);

  document.getElementById("todo-input").value = ""; 
  updateStorage();
});

 notesContainer.addEventListener("click", (e) => {
     if(e.target.classList.contains("delete-btn")){
      e.target.closest(".todo-item").remove();
      updateStorage();
     }
  if(e.target.classList.contains("edit-btn")){
    let task = e.target.closest(".todo-item").querySelector("span");
    let newValue = prompt("edit you text here: ", task.textContent);
    if(newValue !== null && newValue.trim() !== ""){
      task.textContent =newValue;
      updateStorage();
    }
  }
})




showNotes();





































