import React,{ useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MainBody = styled.div`
width: 100%;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  font-size: 24px;
  margin-top: 100px;
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
`

const ThemeItem = styled.div`
  border: 2px solid #000;
  text-align: center;
  line-height: 48px;
  font-size: 18px;
  cursor: pointer;
  background-image: ${({ active }) => (active ? 'linear-gradient(180deg, #C0EE41 0%, #FFF 100%)' : '#FFF')};
`

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
  
  background-color: ${({ active }) => (active ? '#000' : '#D9D9D9')};
  color: #ffffff;
  border-radius: 0px;
  border: none;
  font-size: 20px;
  cursor: pointer; 
  font-family: "DungGeunMo";
`;


const ThemePage = () => {

  const [activeThemes, setActiveThemes] = useState([]);

  const navigate = useNavigate();

  const handleThemeClick = (theme) => {
    if (activeThemes.includes(theme)) {
      // 이미 선택된 테마일 경우 선택 해제
      setActiveThemes((prev) => prev.filter((item) => item !== theme));
    } else {
      // 선택되지 않은 테마일 경우 추가
      if (activeThemes.length < 5) {
        setActiveThemes((prev) => [...prev, theme]);
      }
    }
  };
 

  const handleHomeClick = () => {
    navigate(`/`);
  };


  return (
    <MainBody>

      <Title> 주제 고르기 </Title>
      <Sub_Title> 
        다른 사람들에게 나는 어떤 이미지일까?
        <br/>
        알고 싶은 주제 5개를 정해보자!     
      </Sub_Title>

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
          active={activeThemes.includes('character')}
          onClick={() => handleThemeClick('character')}
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
        <Button onClick={handleHomeClick} active={activeThemes.length === 5}> 다이어리 이동 </Button>
      </ButtonContainer>

    </MainBody>

  )
}

export default ThemePage