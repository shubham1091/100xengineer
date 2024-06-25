import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  return (
    <>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
        />
      ))}
    </>
  );
};

export default Todos;
