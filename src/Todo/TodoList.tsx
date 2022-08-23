import TodoItem from "./TodoItem";

import styled from "styled-components";

export interface TodoProps {
  id: number;
  todo: string;
  isCompleted?: boolean;
  userId?: number;
  setTodo: React.Dispatch<React.SetStateAction<never[]>>;
}

interface ITodoProps {
  todo: TodoProps[];
  setTodo: React.Dispatch<React.SetStateAction<never[]>>;
}

const TodoList = ({ todo, setTodo }: ITodoProps) => {
  //TodoProps todo={todo} interface 해결
  return (
    <ListBox>
      {todo.map((todo) => {
        return (
          <TodoItem
            setTodo={setTodo}
            key={todo.id}
            id={todo.id}
            todo={todo.todo}
            isCompleted={todo.isCompleted}
          />
        );
      })}
    </ListBox>
  );
};

const ListBox = styled.div`
  margin-left: 10px;
  text-align: left;
  overflow-y: scroll;
  height: 500px;
`;
export default TodoList;
