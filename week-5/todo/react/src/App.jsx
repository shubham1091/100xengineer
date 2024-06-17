import { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  /**
   * Adds a new todo item to the todos list.
   * Alerts the user if the title or description is empty.
   */
  function addTodo() {
    if (!title || !description) {
      alert("Please fill in all fields");
      return;
    }
    setTodos([
      ...todos,
      {
        title,
        description,
        id: Math.random().toString(36).substring(2, 9),
      },
    ]);
    setTitle("");
    setDescription("");
  }

  /**
   * Marks a todo item as completed.
   * Moves the item from the todos list to the completedTodos list.
   * @param {Object} item - The todo item to mark as completed.
   */
  function markDone(item) {
    setCompletedTodos([...completedTodos, item]);
    setTodos(todos.filter((todo) => todo.id !== item.id));
  }

  /**
   * Reverts a completed todo item back to the todos list.
   * Moves the item from the completedTodos list to the todos list.
   * @param {Object} item - The todo item to revert to incomplete.
   */
  function undoMarkDone(item) {
    setTodos([...todos, item]);
    setCompletedTodos(completedTodos.filter((todo) => todo.id !== item.id));
  }

  /**
   * Deletes a todo item from both the todos and completedTodos lists.
   * @param {Object} item - The todo item to delete.
   */
  function deleteTodo(item) {
    setTodos(todos.filter((todo) => todo.id !== item.id));
    setCompletedTodos(completedTodos.filter((todo) => todo.id !== item.id));
  }

  /**
   * Handles the form submission for adding a new todo item.
   * Prevents the default form submission behavior and calls addTodo.
   * @param {Object} e - The form submission event.
   */
  function handleSubmit(e) {
    e.preventDefault();
    addTodo();
  }

  return (
    <div className="container">
      <div
        className="todo-column"
        id="createColumn"
      >
        <h2>Create Todo</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value.trim())}
          />
          <br />
          <input
            type="text"
            placeholder="Description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value.trim())}
          />
          <br />
          <button type="submit">Add Todo</button>
        </form>
      </div>
      <div id="columns-container">
        <div
          className="todo-column"
          id="todoColumn"
        >
          <h2>All Todos</h2>
          <div id="todoList">
            {todos.map((todo) => (
              <div
                className="todo"
                key={todo.id}
              >
                <div className="details">
                  <p>
                    <strong>Title:</strong> {todo.title}
                  </p>
                  <p>
                    <strong>Description:</strong> {todo.description}
                  </p>
                </div>
                <div className="actions">
                  <button onClick={() => markDone(todo)}>Done</button>
                  <button onClick={() => deleteTodo(todo)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className="todo-column"
          id="completedColumn"
        >
          <h2>Completed</h2>
          <div id="completedList">
            {completedTodos.map((todo) => (
              <div
                className="todo"
                key={todo.id}
              >
                <div className="details">
                  <p>
                    <strong>Title:</strong> {todo.title}
                  </p>
                  <p>
                    <strong>Description:</strong> {todo.description}
                  </p>
                </div>
                <div className="actions">
                  <button onClick={() => undoMarkDone(todo)}>Undo</button>
                  <button onClick={() => deleteTodo(todo)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
