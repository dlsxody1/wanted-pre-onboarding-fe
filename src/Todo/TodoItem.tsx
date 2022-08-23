import styled from "styled-components";
import { TodoProps } from "./TodoList";
import { FaPencilAlt, FaRegTrashAlt } from "react-icons/fa";
import axios from "axios";
import API from "../config";
import React, { useState } from "react";

const TodoItem = ({ todo, id, isCompleted, setTodo }: TodoProps) => {
  const token = localStorage.getItem("access_token");
  const [inputOpen, setInputOpen] = useState(false);
  const [todoCheck, setTodoCheck] = useState(false);
  const [changeValue, setChangeValue] = useState("");

  const toggleInput = () => {
    setInputOpen(!inputOpen);
  };

  const updateTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
    await axios
      .put(
        `${API.UpdateTodo}/${id}`,
        {
          todo: changeValue,
          isCompleted: isCompleted,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => console.log(res));

    axios
      .get(API.CreateTodo, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setTodo(res.data);
      });

    toggleInput();
  };
  const changeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setChangeValue(value);
  };
  const checkTodo = () => {
    setTodoCheck(!todoCheck);
  };

  const deleteTodo = async () => {
    await axios
      .delete(`${API.UpdateTodo}/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res));

    axios
      .get(API.CreateTodo, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setTodo(res.data);
      });
  };
  return (
    <>
      <ItemContainer>
        {!inputOpen ? (
          <TodoBox>
            <FinishCheckBox
              readOnly
              onClick={checkTodo}
              type="checkbox"
              checked={todoCheck}
            />
            <Todos
              style={{
                textDecorationLine: todoCheck ? "line-through" : "none",
              }}
            >
              {todo}
            </Todos>
          </TodoBox>
        ) : (
          <UpdateForm
            onSubmit={(e) => {
              updateTodo(e);
            }}
          >
            <UpdateInput onChange={changeTodo} />
          </UpdateForm>
        )}
        <IconBox>
          {!todoCheck ? (
            <FaPencilAlt
              onClick={toggleInput}
              style={{ marginRight: "20px", cursor: "pointer" }}
            />
          ) : (
            ""
          )}
          <FaRegTrashAlt onClick={deleteTodo} style={{ cursor: "pointer" }} />
        </IconBox>
      </ItemContainer>
    </>
  );
};

export default TodoItem;

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  height: 40px;
`;
const TodoBox = styled.div`
  display: flex;
`;
const Todos = styled.div`
  padding: 10px;
  font-size: 20px;
`;

const IconBox = styled.div`
  padding: 10px;
`;
const FinishCheckBox = styled.input``;

const UpdateForm = styled.form``;

const UpdateInput = styled.input`
  width: 500px;
  height: 100%;
`;
