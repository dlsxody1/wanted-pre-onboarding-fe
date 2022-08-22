import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import API from "../config";

const TodoCreate = () => {
  const [open, setOpen] = useState(false);
  const onToggle = () => {
    setOpen(!open);
  };

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      axios
        .post(
          API.CreateTodo,
          {
            todo: "",
          },
          {
            headers: {
              Authorization: "Bearer access_token",
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => console.log(res));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Container onSubmit={onSubmit}>
        {open ? <CreateInput /> : ""}
        <CreateButton onClick={onToggle}>+</CreateButton>
      </Container>
    </>
  );
};

// open ? 580px : 425px
//
export default TodoCreate;

const Container = styled.form`
  display: flex;
  position: absolute;
  bottom: 40px;
  justify-content: center;
  height: 80px;
`;
const CreateInput = styled.input`
  width: 650px;
  height: 50px;
  padding: 20px;
  position: absolute;
  top: -60px;
  right: -650px;
`;
const CreateButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 80px;
  height: 80px;
  right: calc(50% - 50px);
  border-radius: 50%;
  background-color: #38d9a9;
  color: white;
  font-size: 80px;
  padding-bottom: 20px;
  border: none;
  cursor: pointer;
  :hover {
    color: #e9ecef;
  }
`;
