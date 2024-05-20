import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MainBody = styled.div`
  background: linear-gradient(180deg, rgba(126, 246, 255, 0.40) 0%, rgba(255, 255, 255, 0.40) 85.29%); 
`;

const Version = styled.div`

@media (max-width: 380px) {
  height: 700px;
  transform: scale(0.8);
}

@media (min-width: 800px) {
  height: 1150px;
  transform: scale(1.5);
}
`;

const TitleContainer = styled.div`
  display : flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  padding: 100px 0 0 0;
  gap: 10px;

  @media (max-width: 380px) {
    padding: 40px 0 0 0;
  }

  @media (min-width: 800px) {
    padding-top: 350px;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  font-size: 20px;
  width: 81px;
  height: 34px;
  border-radius: 28px;
  border: 1px solid #000;
  background: linear-gradient(180deg, #FF8CAF 0%, #FFF 100%);
`

const Sub_Title = styled.div`
  display : flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  margin: 20px 0 0 0;
`;

const InputContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
`;

const Input = styled.input`
  width: 71.5%;
  height: 52px;
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
  margin-top: 84px;
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
`;

const SignupPage = () => {
  
  const navigate = useNavigate();

  const [values, setValues] = useState({
        email: "",
        password: "",
        username: ""
    });

    const handleChange = async (e) => {
        setValues({...values,
            [e.target.id]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
      e.preventDefault(); // 폼 제출 방지
      if (values.email && values.password && values.username) {
        console.log('Submitted:', values);
        // alert('주제 선택 페이지로 이동합니다.')
        navigate(`/theme`, { state: { ...values } });
      } else {
        console.log("모두 입력해주세요.");
      }
    };

  return (
    <MainBody>
      <Version>

      <TitleContainer>
      <Title> 나만의</Title>
      <div> 미니홈피 만들기</div>
      </TitleContainer>
      <Sub_Title> 
        나의 이미지를 모으는 다이어리를 만들어보자
        <br/>
        아래 빈칸을 너의 정보로 채워줘~        
      </Sub_Title>

      <InputContainer onSubmit={handleSubmit}>
        <Input value={values.email} onChange={handleChange} id="email" placeholder='이메일' />
        <Input value={values.password} onChange={handleChange} id="password" placeholder='비밀번호' type='password' />        
        <Input value={values.username} onChange={handleChange} id="username" placeholder='미니홈피 주인 이름' />
      </InputContainer>

      <ButtonContainer>
        <Button onClick={handleSubmit}> 다음 </Button>
      </ButtonContainer>
      </Version>
    </MainBody>
  )
}

export default SignupPage