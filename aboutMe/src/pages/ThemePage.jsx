import React,{ useState } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { signUp } from './Auth/AuthAPI';

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
}
`;

const TitleContainer = styled.div`
  padding-top: 100px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center; 

  @media (max-width: 380px) {
    padding: 40px 0 0 0;
  }

  @media (min-width: 800px) {
    padding-top: 180px;
    transform: scale(1.5);
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center; 
  font-size: 24px;
  width: 164px;
  height: 44px;
  border-radius: 28px;
  border: 1px solid #000;
  background: linear-gradient(180deg, #FF8CAF 0%, #FFF 100%);
`;

const Sub_Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  font-size: 14px;
  margin-top: 20px;
`;

const ThemeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 48px);
  margin: 90px 33px;
  gap: 20px;
  
@media (min-width: 800px) {
  margin: 135px 75px;
  transform: scaleY(1.4);
}
`

const ThemeItem = styled.div`
  border: 2px solid #000;
  text-align: center;
  line-height: 48px;
  font-size: 18px;
  cursor: pointer;
  background-image: ${({ active }) => (active ? 'linear-gradient(180deg, #C0EE41 0%, #FFF 100%)' : '#FFF')};
  
  @media (min-width: 800px) {
    font-size: 20px;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  align-items: center; 
  flex-direction: column;
  margin-top: 80px;
`;

const Button = styled.button`
  width: 81%;
  height: 60px;
  
  background-color: ${({ active }) => (active ? '#000' : '#D9D9D9')};
  color: #ffffff;
  border-radius: 0px;
  border: none;
  font-size: 20px;
  cursor: pointer; 
  font-family: "DungGeunMo";

  @media (min-width: 800px) {
    transform: scale(1.5);
  }
`;


const ThemePage = () => {

  
  const navigate = useNavigate();
  const location = useLocation();

  const initialValues = location.state || {
    email: "",
    password: "",
    username: ""
  };

  const [values, setValues] = useState({
    ...initialValues,
    flower: "false",
    animal: "false",
    season: "false",
    color: "false",
    charac: "false",
    place: "false",
    food: "false",
    hobby: "false",
    job: "false"
});

  const [activeThemes, setActiveThemes] = useState([]);

  const handleThemeClick = (theme) => {
    if (activeThemes.includes(theme)) {
      // 이미 선택된 테마일 경우 선택 해제
      setActiveThemes((prev) => prev.filter((item) => item !== theme));
    } else {
      // 선택되지 않은 테마일 경우 추가
      if (activeThemes.length < 5) {
        setActiveThemes((prev) => [...prev, theme]);
        // 선택 값 변경
        setValues((prevValues) => ({ ...prevValues, [theme]: "true" }))
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // 폼 제출 방지
    if (activeThemes.length === 5) {
      signUp(values)
        .then((response) => {
          alert('회원가입 성공');
          console.log('회원가입 완료:', values);
          navigate(`/sign-in`);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert("5개의 주제를 선택하세요.");
    }
  };
  
  return (
    <MainBody>
      <Version>
      <TitleContainer>
        <Title> 주제 고르기 </Title>
        <Sub_Title> 
          다른 사람들에게 나는 어떤 이미지일까?
          <br/>
          알고 싶은 주제 5개를 정해보자!     
        </Sub_Title>
      </TitleContainer>

      <ThemeContainer>
        <ThemeItem
          active={activeThemes.includes('flower')}
          onClick={() => handleThemeClick('flower')}
        >
          꽃
        </ThemeItem>
        <ThemeItem
          active={activeThemes.includes('animal')}
          onClick={() => handleThemeClick('animal')}
        >
          동물
        </ThemeItem>
        <ThemeItem
          active={activeThemes.includes('season')}
          onClick={() => handleThemeClick('season')}
        >
          계절
        </ThemeItem>
        <ThemeItem
          active={activeThemes.includes('color')}
          onClick={() => handleThemeClick('color')}
        >
          색깔
        </ThemeItem>
        <ThemeItem
          active={activeThemes.includes('charac')}
          onClick={() => handleThemeClick('charac')}
        >
          캐릭터
        </ThemeItem>
        <ThemeItem
          active={activeThemes.includes('place')}
          onClick={() => handleThemeClick('place')}
        >
          장소
        </ThemeItem>
        <ThemeItem
          active={activeThemes.includes('food')}
          onClick={() => handleThemeClick('food')}
        >
          음식
        </ThemeItem>
        <ThemeItem
          active={activeThemes.includes('hobby')}
          onClick={() => handleThemeClick('hobby')}
        >
          취미
        </ThemeItem>
        <ThemeItem
          active={activeThemes.includes('job')}
          onClick={() => handleThemeClick('job')}
        >
          직업
        </ThemeItem>
      </ThemeContainer>

      <ButtonContainer>
        {/* <Button onClick={handleHomeClick} active={activeThemes.length === 5}> 홈으로 이동 </Button> */}
        <Button onClick={handleSubmit} active={activeThemes.length === 5}> 홈으로 이동 </Button>
      </ButtonContainer>

      </Version>
    </MainBody>

  )
}

export default ThemePage