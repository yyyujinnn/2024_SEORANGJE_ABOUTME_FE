import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MainBody = styled.div`
  width: 390px;
  height: 844px;
`;

const Title = styled.div`
  font-size: 24px;
  margin-top: 100px;
`;

const Sub_Title = styled.div`
  font-size: 14px;
  margin-top: 20px;
`;

const InputWrapper = styled.div`
  margin-top: 50px;
`;

const Input = styled.input`
  width: 334px;
  height: 68px;
  margin-top: 20px;
  padding-left: 30px;
  font-size: 15px;
`;

const Button = styled.button`
  width: 370px;
  height: 65px;
  margin-top: 200px;
  background-color: #000000;
  color: #ffffff;
  border-radius: 0px;
  font-size: 20px;
  cursor: pointer; 
`;

const SignupPage = () => {
  return (
    <MainBody>
      <Title> 나만의 다이어리 만들기</Title>
      <Sub_Title> 
        나의 이미지를 모으는 다이어리를 만들어보자
        <br/>
        아래 빈칸을 너의 정보로 채워줘~        
      </Sub_Title>

      <InputWrapper>
        <Input placeholder='아이디' />
        <Input placeholder='비밀번호' type='password' />        
        <Input placeholder='다이어리 주인 이름' />
      </InputWrapper>
      <Button> 다음 ... </Button>
    </MainBody>
  )
}

export default SignupPage