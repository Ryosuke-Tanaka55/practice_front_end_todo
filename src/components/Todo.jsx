import { useState } from "react";
import TodoList from "./TodoList";

const Todo = () => {
  const todosList = [
    {
      id: 1,
      title: "テスト1",
      content: "これはサンプル1です。"
    },
    {
      id: 2,
      title: "テスト2",
      content: "これはサンプル2です。"
    }
  ]

  const [ todos, setTodos ] = useState(todosList);

  return (
    <div className="text-xl">
      <TodoList todos={todos} />
    </div>
  );
};

export default Todo;
