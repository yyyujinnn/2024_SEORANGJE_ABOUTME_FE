import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import AboutMeLogo from '../assets/AboutMeLogo.svg';
import { login } from './Auth/AuthAPI';

const MainBody = styled.div`
  background: linear-gradient(180deg, #FF8CAF 0%, #FFF 85.29%);
`;

const Version = styled.div`

@media (max-width: 380px) {
  transform: scale(0.8);
}

@media (min-width: 800px) {
  transform: scale(1.5);
}
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  padding-top: 100px;
`;

const InputContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
`;

const Input = styled.input`
  width: 71.5%;
  height: 52px;
  margin-top: 15px;
  padding-left: 30px;
  font-size: 20px;
  font-family: "DungGeunMo";

  &::placeholder {
    font-family: "DungGeunMo"; 
  }

  @media (min-width: 800px) {
    width: 46.5%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center; 
  flex-direction: column;
  margin: 42px;
`;

const Button = styled.button`
  width: 81%;
  height: 60px;
  background-color: #000000;
  color: #ffffff;
  border-radius: 0px;
  font-size: 20px;
  cursor: pointer; 
  font-family: "DungGeunMo";

  @media (min-width: 800px) {
    width: 50%;
  }
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

  const handleChange = async (e) => {
    setValues({...values,
        [e.target.id]: e.target.value,
    });
}

const handleSignin = async () => {
  if (!values.email || !values.password) {
    alert('이메일 또는 비밀번호를 틀립니다.');
    return;
  }

  login(values)
    .then((response) => {
      console.log('Submitted:', values);
      alert('로그인 성공');
      navigate(`/`);
      localStorage.clear();
      localStorage.setItem('token', response.token);
    })
    .catch((error) => {
      console.log(error);
    });
};


  return (
    <MainBody>
      <Version>
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
      
      </Version>
    </MainBody>
  )
}


export default SigninPage