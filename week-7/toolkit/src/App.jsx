import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 min-h-screen py-8 flex justify-center items-center">
      <div className="w-full max-w-2xl mx-auto shadow-lg rounded-lg bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 border border-white border-opacity-30">
        <h1 className="text-4xl font-extrabold text-center text-gray-100 mb-8 mt-2">
          Manage Your Todos
        </h1>
        <div className="mb-6">
          <AddTodo />
        </div>
        <div className="space-y-4">
          <Todos />
        </div>
      </div>
    </div>
  );
};

export default App;
