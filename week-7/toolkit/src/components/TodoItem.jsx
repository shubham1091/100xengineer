import { useState, useEffect, useRef } from "react";
import { removeTodo, toggleTodo, updateTodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";

const TodoItem = ({ todo }) => {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.text);
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isTodoEditable) {
      inputRef.current.focus();
      inputRef.current.style.height = "auto";
      inputRef.current.style.height = inputRef.current.scrollHeight + "px";
    }
  }, [isTodoEditable, todoMsg]);

  const editTodo = () => {
    // updateTodo(todo.id, { ...todo, text: todoMsg });
    dispatch(updateTodo(todo.id, { ...todo, text: todoMsg }));
    setIsTodoEditable(false);
  };

  const toggle = () => {
    // toggleTodo(todo.id);
    dispatch(toggleTodo(todo.id));
  };

  return (
    <div
      className={`flex items-center border rounded-lg px-4 py-2 gap-x-3 shadow-md transition-all duration-300 ${
        todo.done ? "bg-green-200" : "bg-gray-100"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer w-6 h-6 appearance-none border-2 border-gray-300 rounded-md checked:bg-blue-600 checked:border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150"
        checked={todo.done}
        onChange={toggle}
      />
      <textarea
        ref={inputRef}
        className={`flex-grow bg-transparent border-b-2 outline-none resize-none overflow-hidden ${
          isTodoEditable ? "border-gray-400" : "border-transparent"
        } ${todo.done ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
        rows="1"
        onKeyDown={(e) => {
          if (e.key === "Enter" && isTodoEditable) {
            e.preventDefault();
            editTodo();
          }
        }}
      />
      <button
        className="ml-2 px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition duration-150 disabled:opacity-50"
        onClick={() => {
          if (todo.done) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.done}
      >
        {isTodoEditable ? "Save" : "Edit"}
      </button>
      <button
        className="ml-2 px-3 py-1 bg-red-400 text-white rounded hover:bg-red-500 transition duration-150"
        onClick={() => dispatch(removeTodo(todo.id))}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
