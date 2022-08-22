import TodoItem from "./TodoItem";
import { useState } from "react";

const TodoList = () => {
  interface TodoProps {
    id: number;
    todo: string;
    isCompleted: boolean;
    userId: number;
  }
  const [todo, setTodo] = useState([
    {
      id: 1,
      todo: "과제",
      isCompleted: false,
      userId: 1,
    },
    {
      id: 2,
      todo: "과제",
      isCompleted: false,
      userId: 2,
    },
    {
      id: 3,
      todo: "과제",
      isCompleted: false,
      userId: 3,
    },
  ]);
  //TodoProps todo={todo} interface 해결
  return (
    <>
      <TodoItem></TodoItem>
    </>
  );
};

export default TodoList;
