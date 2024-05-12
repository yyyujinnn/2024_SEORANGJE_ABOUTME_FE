import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MainBody = styled.div`
  // width: 390px;
  // height: 844px;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  font-size: 24px;
  margin-top: 100px;
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
  background-color: #000000;
  color: #ffffff;
  border-radius: 0px;
  font-size: 20px;
  cursor: pointer; 
`;

const ThemePage = () => {
  return (
    <MainBody>

      <Title> 주제 고르기 </Title>
      <Sub_Title> 
        다른 사람들에게 나는 어떤 이미지일까?
        <br/>
        알고 싶은 주제 5개를 정해보자!     
      </Sub_Title>

      <ThemeContainer>
        <ThemeItem id='flower'> 꽃 </ThemeItem>
        <ThemeItem id='animal'> 동물 </ThemeItem>
        <ThemeItem id='season'> 계절 </ThemeItem>
        <ThemeItem id='clor'> 색깔 </ThemeItem>
        <ThemeItem id='character'> 캐릭터 </ThemeItem>
        <ThemeItem id='place'> 장소 </ThemeItem>
        <ThemeItem id='food'> 음식 </ThemeItem>
        <ThemeItem id='hobby'> 취미 </ThemeItem>
        <ThemeItem id='job'> 직업 </ThemeItem>
      </ThemeContainer>

      <ButtonContainer>
        <Button> 다이어리 이동 </Button>
      </ButtonContainer>

    </MainBody>

  )
}

export default ThemePage