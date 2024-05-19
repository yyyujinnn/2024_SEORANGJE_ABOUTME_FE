import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import AboutMeLogo from '../assets/AboutMeLogo.png';
import { login } from './Auth/AuthAPI';

const MainBody = styled.div`
  background: linear-gradient(180deg, #FF8CAF 0%, #FFF 85.29%);
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  height: 58vh;
`;

const InputContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Input = styled.input`
  width: 334px;
  height: 60px;
  margin-top: 15px;
  padding-left: 30px;
  font-size: 20px;
  font-family: "DungGeunMo";

  &::placeholder {
    font-family: "DungGeunMo"; 
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center; 
  flex-direction: column;
  
  // 밑에서부터 20vh만큼은 버튼
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20vh;
`;

const Button = styled.button`
  width: 370px;
  height: 65px;
  background-color: #000000;
  color: #ffffff;
  border-radius: 0px;
  font-size: 20px;
  cursor: pointer; 
  font-family: "DungGeunMo";
`;

const SignupText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  font-size: 15px;
  color: #A5A5A5;
  text-decoration: underline;
  margin-top: 15px;
  cursor: pointer;
  `

const SigninPage = () => {

  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSignup = () => {
    navigate(`/sign-up`);
  };

  const handleChange = //async : api 배포 시 함수 실행
  (e) => {
    setValues({...values,
        [e.target.id]: e.target.value,
    });
}

const handleSignin = //async : api 배포 시 함수 실행
(e) => {
  e.preventDefault(); // 기본 제출 행동 방지
      if (values.email && values.password) {
        console.log('Submitted:', values);
        navigate(`/`); 
      } else {
        console.log("아이디 또는 비밀번호가 틀립니다.");
      }

    // login(values)
    // .then((response) => {
    //     localStorage.clear();
    //     localStorage.setItem('tokenType', response.tokenType);
    //     localStorage.setItem('accessToken', response.accessToken);
    //     navigate(`/`);
    // }).catch((error) => {
    //     console.log(error);
    // });
}

  return (
    <MainBody>

      <LogoContainer className='logo'>
        <img src={AboutMeLogo} alt='logo'/>
      </LogoContainer>

      <InputContainer className='loginBox'>
        <Input value={values.email} onChange={handleChange} id='email' placeholder='이메일' />
        <Input value={values.password} onChange={handleChange} id="password" placeholder='비밀번호' type='password' />
      </InputContainer>

      <ButtonContainer>
        <Button onClick={handleSignin}> 입장하기 </Button>
        <SignupText onClick={handleSignup}>회원가입 하기</SignupText>
      </ButtonContainer>
      
    </MainBody>
  )
}


export default SigninPage