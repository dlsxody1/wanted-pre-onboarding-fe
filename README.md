# wanted-pre-onboarding-fe

원티드 프리온보딩 사전과제

## 프로젝트 실행 방법

    1. git clone https://github.com/dlsxody1/wanted-pre-onboarding-fe.git
    2. cd wanted-pre-onboarding-fe
    3. npm install
    4. npm start

---

## 사용 기술 스택
![react](https://img.shields.io/badge/react-18.2.0-61DAFB?logo=react)
![typescript](https://img.shields.io/badge/typescript-4.7.4-3178C6?logo=typescript)
![styledComponents](https://img.shields.io/badge/styled--components-5.1.26-DB7093?logo=styledcomponents)
![axios](https://img.shields.io/badge/axios-0.27.2-5E22D6)
![react-router-dom](https://img.shields.io/badge/react--router--dom-6.3.0-blue?logo=react-router)

## 영상

## 1. 로그인 및 회원가입 페이지
![회원가입](https://user-images.githubusercontent.com/62875596/186340341-3a8dec3f-043c-4b56-8f95-5c639570e7c1.gif)

![원티드로그인](https://user-images.githubusercontent.com/62875596/186340339-ad70076d-a7ab-4c5f-8e80-e4ca0c77c1db.gif)

## 2. create 기능 구현
![create](https://user-images.githubusercontent.com/62875596/186340337-2e36b382-7fe9-4817-ad8e-9c3b2dc1ca15.gif)

## 3. update 기능 구현
![update](https://user-images.githubusercontent.com/62875596/186340336-3bd494dc-bb2d-4982-8536-ae25ed2484cc.gif)

## 4. delete 기능 구현
![delete](https://user-images.githubusercontent.com/62875596/186340331-2283ff26-dba1-4160-b267-1a836bdbf145.gif)

## 기능 구현 목록

### 로그인, 회원가입

1. 회원가입
- 조건을 변수로 선언하고. (email에는 @이 포함 , password가 8이상) 그 조건을 만족 했을 때 인라인 스타일링으로 버튼 색이 바뀌게 만들었습니다.
-  
```
const checkLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginValid({ ...loginValid, [name]: value });
  };
//string으로 type을 선언한 state를 input에 onchange 이벤트가 발생 할 때마다 저장해주었습니다.

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
//요청을 보내고나서 localstorage에 access_token을 저장해주고 메인 페이지로 보냈습니다.

```          

2.로그인
- 회원가입과 마찬가지로 조건을 만족 했을 때 인라인 스타일링으로 버튼 색이 바뀌게 만들었습니다.
- 버튼을 눌렀을 때 AXIOS 를 사용해서 /todo로 보냈습니다.
```
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
```

3. Todo

Main  
- useEffect로 전에 썼던 글들을 불러오기 위해서 get요청을 해서 렌더링 했습니다.
- 기존 값이 배열인 state를 만들어주고, 그 value와 setValue를 필요한 component에 전달했습니다.

(1) create 
- form에 submit 이벤트를 주었습니다.
- form안에 들어가는 input에 login이나 signIn에 들어가는 onchange 로직을 사용하였습니다.
- 정보가 담긴 상태로 enter를 누르면 아래에 있는 함수가 실행됩니다.
- post요청을 하고 난뒤에는 Value를 비워주고, 다시 게시판을 불러오기 위해 get요청을 하였습니다.


```
 const onSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.post(
      API.CreateTodo,
      {
        todo: todoValue,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    setTodoValue("");
    axios
      .get(API.CreateTodo, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setTodo(res.data));
  };
  ```
  
  
(2) update
- create와 같은 맥락으로 작성했습니다 . put요청이 끝났을 때 get요청과 toggleInput()이 실행되는 로직입니다
- toggleInput은 Input창을 toggle하게 해주는 함수인데 수정이 완료되고나서 input창을 닫게 해줍니다.
```
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
  ```
(4) delete
- 버튼을 클릭했을 때 해당 아이템의 id를 담아 delete요청을 하였습니다
- 마찬가지로 delete요청을 하고난 후에 get요청을 하였습니다.


      
      


