import React, { useState } from "react";
import styled from "styled-components";
// import { Todo } from "./components/Todo";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div>
      <div>
        <TodoInput />
      </div>
      <div>
        <TodoList />
      </div>
    </div>
  );
}

export default App;

const Page = styled.div`
  display: flex;
`;
