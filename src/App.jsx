import React, { useState } from "react";
import styled from "styled-components";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([
    { id: uuidv4(), title: "제목1", content: "내용1입니다", isDone: false },
    { id: uuidv4(), title: "제목2", content: "내용2입니다", isDone: true },
    { id: uuidv4(), title: "제목3", content: "내용3입니다", isDone: false },
  ]);

  const doItItem = todos.filter((t) => !t.isDone);
  const doneItem = todos.filter((t) => t.isDone);

  return (
    <div>
      <h1>My Todo-List</h1>
      <TodoInput />

      <TodoList todos={doItItem} isActive={true} />
      <TodoList todos={doneItem} isActive={false} />
    </div>
  );
}

export default App;

const Page = styled.div`
  display: flex;
`;
