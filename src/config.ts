const URI =
  "https://5co7shqbsf.execute-api.ap-northeast-2.amazonaws.com/production/";

const API = {
  SignUp: `${URI}auth/signup`,
  SignIn: `${URI}auth/signin`,
  CreateTodo: `${URI}todos`,
  UpdateTodo: `${URI}todos`,
};

export default API;
