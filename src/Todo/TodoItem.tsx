import styled from "styled-components";

const TodoItem = () => {
  return (
    <>
      <ItemContainer>
        <Todos>투두</Todos>
      </ItemContainer>
    </>
  );
};

export default TodoItem;

const ItemContainer = styled.div`
  border: 1px solid black;
  height: 40px;
`;

const Todos = styled.p`
  font-size: 20px;
`;
