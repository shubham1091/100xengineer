import { useState, useEffect } from "react";
import { TodoProvider } from "./context";
import { TodoForm, TodoItem } from "./components";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [{ id: Date.now(), ...todo }, ...prevTodos]);
  };

  const updateTodo = (id, todo) => {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) =>
        prevTodo.id === id ? { id, ...todo } : prevTodo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((prevTodo) => prevTodo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) =>
        prevTodo.id === id
          ? { ...prevTodo, completed: !prevTodo.completed }
          : prevTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, removeTodo, toggleTodo }}
    >
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 min-h-screen py-8 flex justify-center items-center">
        <div className="w-full max-w-2xl mx-auto shadow-lg rounded-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 border border-white border-opacity-30">
          <h1 className="text-4xl font-extrabold text-center text-gray-100 mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-6">
            <TodoForm />
          </div>
          <div className="space-y-4">
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
              />
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
