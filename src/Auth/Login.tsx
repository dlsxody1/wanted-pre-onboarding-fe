import styled from "styled-components";
import React, { useState, useEffect } from "react";
const Login = () => {
  const [loginValid, setLoginValid] = useState({
    email: "",
    password: "",
  });
  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const checkLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginValid({ ...loginValid, [name]: value });
  };
  useEffect(() => {});
  return (
    <>
      <Container>
        <LoginTitle>Login</LoginTitle>
        <LoginForm onSubmit={onSubmit}>
          <LoginInput
            onChange={checkLogin}
            name="email"
            placeholder="아이디@이메일.com 형식으로 입력해 주세요"
          ></LoginInput>
          <LoginInput
            onChange={checkLogin}
            name="password"
            placeholder="패스워드를 입력해주세요"
          ></LoginInput>
          <SubmitButton>로그인</SubmitButton>
        </LoginForm>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 650px;
  height: 650px;
  margin: 0 auto;
  border: 1px solid black;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const LoginTitle = styled.div`
  font-size: 50px;
  text-align: center;
`;

const LoginInput = styled.input`
  margin-top: 30px;
  width: 350px;
  height: 40px;
  padding: 10px;
`;

const SubmitButton = styled.button`
  margin-top: 30px;
  width: 350px;
  height: 40px;
`;
export default Login;
