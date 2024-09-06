// CreateTodo.jsx
import { useState } from "react";
import "./CreateTodo.css";

export const CreateTodo = ({ onTodoAdded }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function post(e) {
    e.preventDefault();

    const response = await fetch(import.meta.env.VITE_BACKEND_URL + "todo", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const { data } = await response.json();
      // console.log(newTodo);
      onTodoAdded(data); // Update state in parent component
      setTitle("");
      setDescription("");
    } else {
      console.error("Failed to add todo");
    }
  }

  return (
    <form className="todo-form">
      <input
        type="text"
        placeholder="Title"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Description"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button
        type="submit"
        onClick={post}
      >
        Add Todo
      </button>
    </form>
  );
};
