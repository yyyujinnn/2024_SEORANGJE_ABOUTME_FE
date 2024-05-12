import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import AboutMeLogo from '../assets/AboutMeLogo.png';

const MainBody = styled.div`  
  // width: 390px;
  // height: 844px;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  height: 58vh;
`;

const InputContainer = styled.div`
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
  font-size: 15px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

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
  display: flex;
  justify-content: center;
  align-items: center; 
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

      <LogoContainer className='logo'>
        <img src={AboutMeLogo} alt='logo'/>
      </LogoContainer>

      <InputContainer className='loginBox'>
        <Input placeholder='아이디' />
        <Input placeholder='비밀번호' type='password' />
      </InputContainer>

      <ButtonContainer>
        <Button className='btnlogin'> 입장하기 </Button>
      </ButtonContainer>
      <SignupText onClick={handleSignupClick}>회원가입 하기</SignupText>
      
    </MainBody>
  )
}


export default SigninPage