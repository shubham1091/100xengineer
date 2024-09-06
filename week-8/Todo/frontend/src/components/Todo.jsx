import "./Todo.css";

export const Todo = ({ todos, onTodoMarked }) => {
  async function mark(todo) {
    const res = await fetch(import.meta.env.VITE_BACKEND_URL + "completed", {
      method: "PUT",
      body: JSON.stringify({ id: todo._id }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      const updatedTodo = await res.json();
      // console.log("Updated todo:", updatedTodo); // Debug
      onTodoMarked(updatedTodo.data); // Update state in parent component
    } else {
      console.error("Failed to mark todo as completed");
    }
  }

  return (
    <div className="todos">
      {todos.map((todo) => (
        <div
          key={todo._id}
          className={`todo ${todo.completed ? "done" : "undone"}`}
        >
          <div>
            <p>
              <strong>Title:</strong> {todo.title}
            </p>
            <p>
              <strong>Description:</strong> {todo.description}
            </p>
          </div>
          <br />
          <button onClick={() => mark(todo)}>
            {todo.completed ? "Completed" : "Complete"}
          </button>
        </div>
      ))}
    </div>
  );
};
