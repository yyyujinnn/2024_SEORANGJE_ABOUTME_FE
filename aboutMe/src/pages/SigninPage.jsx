import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import AboutMeLogo from '../assets/AboutMeLogo.png';

const MainBody = styled.div`
  width: 390px;
  height: 844px;
`;

const LogoImage = styled.img`
  margin-top: 150px;
`;

const InputWrapper = styled.div`
  margin-top: 200px;
`;

const Input = styled.input`
  width: 334px;
  height: 60px;
  margin-top: 15px;
  padding-left: 30px;
  font-size: 15px;
`;

const Button = styled.button`
  width: 370px;
  height: 65px;
  margin-top: 40px;
  background-color: #000000;
  color: #ffffff;
  border-radius: 0px;
  font-size: 20px;
  cursor: pointer; 
`;

const SignupText = styled.div`
  font-size: 15px;
  color: #A5A5A5;
  text-decoration: underline;
  margin-top: 15px;
  `

const SigninPage = () => {
  const navigate = useNavigate();
  
  const handleSignupClick = () => {
    navigate(`/sign-up`);
  };

  return (
    <MainBody>
      <LogoImage src={AboutMeLogo} alt='logo'/>
      <InputWrapper>
        <Input placeholder='아이디' />
        <Input placeholder='비밀번호' type='password' />
      </InputWrapper>
      <Button> 입장하기 </Button>
      <SignupText onClick={handleSignupClick}>회원가입 하기</SignupText>
    </MainBody>
  )
}


export default SigninPage