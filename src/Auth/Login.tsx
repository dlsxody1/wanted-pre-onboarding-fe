import styled from "styled-components";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../config";
import axios from "axios";

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
  const navigate = useNavigate();

  const goToSignUp = () => {
    navigate("/signup");
  };

  const isValidSignIn =
    loginValid.email.includes("@") && loginValid.password.length >= 8;

  const goTodo = () => {
    try {
      axios
        .post(
          API.SignIn,
          {
            email: loginValid.email,
            password: loginValid.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          navigate("/todo");
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Container>
        <LoginTitle>Login</LoginTitle>
        <LoginForm onSubmit={onSubmit}>
          <LoginInput
            onChange={checkLogin}
            type="text"
            name="email"
            placeholder="아이디@이메일.com 형식으로 입력해 주세요"
          ></LoginInput>
          <LoginInput
            onChange={checkLogin}
            type="password"
            name="password"
            placeholder="패스워드를 입력해주세요"
          ></LoginInput>
          <SubmitButton
            disabled={!isValidSignIn}
            style={{
              backgroundColor: isValidSignIn ? "coral" : "inherit",
              cursor: isValidSignIn ? "pointer" : "cursor",
            }}
            onClick={goTodo}
          >
            로그인
          </SubmitButton>
        </LoginForm>
        <SignUpLink onClick={goToSignUp}>회원가입이 필요하신가요?</SignUpLink>
      </Container>
    </>
  );
};

export const Container = styled.div`
  width: 650px;
  height: 650px;
  margin: 0 auto;
  border: 1px solid black;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const LoginTitle = styled.div`
  font-size: 50px;
  text-align: center;
`;

export const LoginInput = styled.input`
  margin-top: 30px;
  width: 350px;
  height: 40px;
  padding: 10px;
`;

export const SubmitButton = styled.button`
  margin-top: 30px;
  width: 350px;
  height: 40px;
`;

const SignUpLink = styled.div`
  margin-top: 30px;
  text-align: center;
  :hover {
    cursor: pointer;
    color: purple;
  }
`;
export default Login;
