import styled from "styled-components";
import TodoList from "./TodoList";
import TodoCreate from "./TodoCreate";

const Todo = () => {
  return (
    <>
      <Container>
        <TodoBox>
          <TodoTitle>무엇을 해볼까?</TodoTitle>
          <TodoList />
          <TodoCreate />
        </TodoBox>
      </Container>
    </>
  );
};
export default Todo;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
`;

const TodoBox = styled.div`
  text-align: center;
  padding-top: 20px;
  width: 650px;
  height: 750px;
  border: 1px solid black;
`;

const TodoTitle = styled.div`
  font-size: 60px;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e9ecef;
`;
