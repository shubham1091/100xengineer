import { useState } from "react";
import { useTodo } from "../context";

const TodoForm = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form
      className="flex shadow-lg rounded-lg overflow-hidden"
      onSubmit={add}
    >
      <input
        type="text"
        placeholder="Write Todo..."
        className="flex-grow border-none px-4 py-3 outline-none bg-gray-100 focus:bg-white"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="px-6 py-3 bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-150"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
