import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MainBody = styled.div`
  background: linear-gradient(180deg, rgba(126, 246, 255, 0.40) 0%, rgba(255, 255, 255, 0.40) 85.29%); 
`;

const TitleContainer = styled.div`
  display : flex;
  align-items: center;
  font-size: 24px;
  padding: 100px 0 0 30px;
  gap: 10px;
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
  font-size: 14px;
  margin: 20px 0 0 30px;
`;

const InputContainer = styled.form`
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
        alert('주제 선택 페이지로 이동합니다.')
        navigate(`/theme`, { state: { ...values } });
      } else {
        console.log("모두 입력해주세요.");
      }
    };

  return (
    <MainBody>

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

    </MainBody>
  )
}

export default SignupPage