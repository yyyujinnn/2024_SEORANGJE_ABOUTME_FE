import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MainBody = styled.div`
  // width: 390px;
  // height: 844px;
`;

const Title = styled.div`
  font-size: 24px;
  margin: 100px 0 0 30px;
`;

const Sub_Title = styled.div`
  font-size: 14px;
  margin: 20px 0 0 30px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
`;

const Input = styled.input`
  width: 334px;
  height: 68px;
  margin-top: 20px;
  padding-left: 30px;
  font-size: 16px;
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

const SignupPage = () => {
  
  const navigate = useNavigate();
  
  const handleThemeClick = () => {
    navigate(`/theme`);
  };
  return (
    <MainBody>

      <Title> 나만의 다이어리 만들기</Title>
      <Sub_Title> 
        나의 이미지를 모으는 다이어리를 만들어보자
        <br/>
        아래 빈칸을 너의 정보로 채워줘~        
      </Sub_Title>

      <InputContainer>
        <Input placeholder='아이디' />
        <Input placeholder='비밀번호' type='password' />        
        <Input placeholder='다이어리 주인 이름' />
      </InputContainer>

      <ButtonContainer>
        <Button onClick={handleThemeClick}> 다음 ... </Button>
      </ButtonContainer>

    </MainBody>
  )
}

export default SignupPage