document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  addTodo();
});

/**
 * Adds a new todo item to the todo list.
 * Retrieves the title and description from the input fields.
 * Displays an alert if either title or description is missing.
 * Creates a new todo item element with the title, description, and a "Mark Done" button.
 * Appends the new todo item to the todo list.
 * Clears the input fields after adding the todo item.
 */
function addTodo() {
  const title = document.getElementById("title").value.trim();
  const description = document.getElementById("description").value.trim();

  if (!title || !description) {
    alert("Please enter title and description.");
    return;
  }

  const todoItem = document.createElement("div");
  todoItem.className = "todo";
  todoItem.innerHTML = `
    <div class="details">
      <p><strong>Title:</strong> ${title}</p>
      <p><strong>Description:</strong> ${description}</p>
    </div>
    <div class="actions">
      <button class="mark-done">Mark Done</button>
      <button class="delete">Delete</button>
    </div>
  `;

  document.getElementById("todoList").appendChild(todoItem);

  document.getElementById("title").value = "";
  document.getElementById("description").value = "";

  // Attach event listeners to the new buttons
  todoItem
    .querySelector(".mark-done")
    .addEventListener("click", () => markDone(todoItem));
  todoItem
    .querySelector(".delete")
    .addEventListener("click", () => deleteTodo(todoItem));
}

/**
 * Marks a todo item as done and moves it to the completed list.
 * Also updates the button text and functionality to allow undoing the action.
 *
 * @param {HTMLElement} todoItem - The todo item element to mark as done.
 */
function markDone(todoItem) {
  const completedList = document.getElementById("completedList");
  completedList.appendChild(todoItem);

  const button = todoItem.querySelector(".mark-done");
  button.textContent = "Undo";
  button.removeEventListener("click", () => markDone(todoItem));
  button.addEventListener("click", () => undoMarkDone(todoItem));
}

/**
 * Reverts a to-do item from the "done" state back to the "to-do" state.
 *
 * This function moves the to-do item back to the to-do list and updates
 * the button text and functionality to allow marking the item as done again.
 *
 * @param {HTMLElement} todoItem - The todo item element to revert.
 */
function undoMarkDone(todoItem) {
  const todoList = document.getElementById("todoList");
  todoList.appendChild(todoItem);

  const button = todoItem.querySelector(".mark-done");
  button.textContent = "Mark Done";
  button.removeEventListener("click", () => undoMarkDone(todoItem));
  button.addEventListener("click", () => markDone(todoItem));
}

/**
 * Deletes a todo item from the list.
 *
 * @param {HTMLElement} todoItem - The todo item element to delete.
 */
function deleteTodo(todoItem) {
  todoItem.remove();
}
