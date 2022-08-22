import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Container,
  LoginForm,
  LoginTitle,
  LoginInput,
  SubmitButton,
} from "./Login";
import API from "../config";
const SignUp = () => {
  const [loginValid, setLoginValid] = useState({
    email: "",
    password: "",
  });

  const checkLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginValid({ ...loginValid, [name]: value });
  };

  const isValidSignIn =
    loginValid.email.includes("@") && loginValid.password.length >= 8;

  const navigation = useNavigate();

  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      axios
        .post(
          API.SignUp,
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
          localStorage.setItem("access_token", res.data.access_token);
          alert("회원가입 성공!");
          navigation("/");
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Container>
        <LoginTitle>Sign Up</LoginTitle>
        <LoginForm onSubmit={onSubmit}>
          <LoginInput
            onChange={checkLogin}
            name="email"
            placeholder="이메일 형식으로 적어주세요!"
          ></LoginInput>
          <LoginInput
            onChange={checkLogin}
            name="password"
            type="password"
            placeholder="문자,숫자 상관없이 8자 이상 적어주세요!"
          ></LoginInput>

          <SubmitButton
            style={{
              backgroundColor: isValidSignIn ? "coral" : "inherit",
              cursor: isValidSignIn ? "pointer" : "cursor",
            }}
            disabled={!isValidSignIn}
            type="submit"
          >
            회원가입
          </SubmitButton>
        </LoginForm>
      </Container>
    </>
  );
};

export default SignUp;
