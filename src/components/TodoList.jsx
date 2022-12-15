import React from "react";

const TodoList = ({ todos, isActive }) => {
  return (
    <div>
      <h2>{isActive ? "Do It!" : "Done"}</h2>
      {todos.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.content}</p>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
