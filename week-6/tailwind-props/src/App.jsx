import React from "react";
import Card from "./components/Card";
import data from "./data/list.json";

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="bg-violet-500 px-4 py-2 rounded-xl mb-4 text-2xl font-bold">
        Tech Hall of Fame
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((item, index) => (
          <Card
            key={index}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
