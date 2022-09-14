import tw from "tailwind-styled-components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../elem/Button";
import Logo from "../common/Logo";
import { checkEmail, checkPassword } from "../../utils/validation";
import { useDispatch } from "react-redux";
import { checkEmailThunk } from "../../redux/modules/users";

/** 회원가입 폼 */
const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setUserEmail] = useState("");
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setNewPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [nickNameError, setNickNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirmError, setNewpasswordError] = useState("");

  const [isError, setError] = useState(false);

  const passwordDoubleCheck = (password, newPassword) => {
    if (password !== newPassword) {
      console.log("비밀번호가 다릅니다.");
      return;
    } else {
      console.log("비밀번호가 동일합니다");
    }
  };

  const onChangeEmailHandler = (e) => {
    setUserEmail(e.target.value);
    checkEmail(e.target.value)
      ? setEmailError("")
      : setEmailError("이메일 형식이 아닙니다");
  };

  const onChangeNickNameHandler = (e) => {
    setNickName(e.target.value);
  };

  const onChangePasswordHandler = (e) => {
    setPassword(e.target.value);
    checkPassword(e.target.value);
  };

  const onChangeNewPasswordHandler = (e) => {
    setNewPassword(e.target.value);
    passwordDoubleCheck(password, e.target.value);
  };

  const onEmailCheck = () => {
    console.log("이메일 중복확인");
    if (email === "") {
      setEmailError("이메일을 입력해주세요!");
      return;
    } else {
      if (checkEmail(email)) {
        const checkResponse = dispatch(checkEmailThunk(email));

        if (checkResponse) {
          setEmailError("이미 존재하는 이메일입니다.");
        } else {
          setEmailError("사용 가능한 이메일입니다.");
        }
      }
    }
    console.log(email);
    //db로 전송해서, db에 있는지 확인
    //=> return true: db에 존재하므로 사용 불가
    //=> return false: db에 존재하므로 사용 불가
  };

  const onNicknameCheck = () => {
    console.log("닉네임 중복확인");
    if (nickName === "") {
      setNickNameError("닉네임을 입력해주세요!");
    }

    //db로 전송해서, db에 있는지 확인
    //=> return true: db에 존재하므로 사용 불가
    //=> return false: db에 존재하므로 사용 불가
  };

  //TODO 회원가입 성공하면 메인 페이지로 이동 실패시 사용자에게 알려주기
  const onClickRegister = (e) => {
    console.log("click Register");
    e.preventDefault();
    //API 요청
    navigate("/main");
  };

  return (
    <Form>
      <FormContainer>
        <LogBox>
          <Logo />
        </LogBox>
        <div>
          <InputBox>
            <Input
              type="email"
              placeholder="이메일"
              value={email || ""}
              onChange={onChangeEmailHandler}
            />
            <CheckButton type="button" onClick={onEmailCheck}>
              중복확인
            </CheckButton>
          </InputBox>
          <p className="text-rose-500">{emailError}</p>
        </div>
        <div>
          <InputBox>
            <Input
              type="text"
              placeholder="닉네임"
              value={nickName || ""}
              onChange={onChangeNickNameHandler}
            />
            <CheckButton className="" type="button" onClick={onNicknameCheck}>
              중복확인
            </CheckButton>
          </InputBox>
          <p className="text-rose-500">{nickNameError}</p>
        </div>
        <div>
          <InputBox>
            <Input
              type="password"
              placeholder="비밀번호"
              value={password || ""}
              onChange={onChangePasswordHandler}
              autoComplete="off"
            />
          </InputBox>
          <p className="text-rose-500">{passwordError}</p>
        </div>
        <div>
          <InputBox>
            <Input
              type="new-password"
              placeholder="비밀번호 확인"
              value={passwordConfirm || ""}
              onChange={onChangeNewPasswordHandler}
              autoComplete="off"
            />
          </InputBox>
          <p className="text-rose-500">{passwordConfirmError}</p>
        </div>
        <Button type="button" onClick={onClickRegister}>
          책 읽으러가기
        </Button>
      </FormContainer>
    </Form>
  );
};

export default RegisterForm;

const Form = tw.form`
max-w-lg
border
rounded-lg
mx-auto
border-gray-200

`;

const FormContainer = tw.div`
flex
flex-col
gap-4
p-4
md:m-8
`;

const LogBox = tw.div`
  flex self-center
`;

const InputBox = tw.div`
  flex items-center border-b border-teal-700 py-2
`;

const Input = tw.input`
w-full
text-gray-800
border-b
focus:border-b-black
bg-transparent
outline-none
transition
duration-100
px-3
py-2
mt-4
`;

const CheckButton = tw.button`
  flex-shrink-0
  bg-teal-500
  hover:bg-teal-700 
  border-teal-500
  hover:border-teal-700
  text-sm 
  border-4 
  text-white
  py-1 
  px-2 
  rounded
`;
