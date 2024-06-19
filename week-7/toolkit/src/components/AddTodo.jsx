import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const add = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
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
        value={input}
        onChange={(e) => setInput(e.target.value)}
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

export default AddTodo;
