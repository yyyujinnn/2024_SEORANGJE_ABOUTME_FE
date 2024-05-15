import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import IntWin from '../assets/IntWin.png';
import pre from '../assets/HomePre.svg';
import next from '../assets/HomeNext.svg';
import Share from '../assets/Share.svg';

const MainBody = styled.div`
  background: linear-gradient(180deg, #FF8CAF 0%, #FFF 100%);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center; 
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;  
  flex-direction: column;
  font-size: 24px;
  margin-top: 70px;
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
  background: linear-gradient(180deg, #7EF6FF 0%, #FFF 100%);
`

const Sub_Title = styled.div`
  font-size: 40px;
  color: #FFF;
  text-shadow:
    -1px -1px 0 #000,  
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
`;

const Img = styled.img`
  margin-top: 20px;
`;

const BtnPre = styled.button`
position: absolute;
  top: 50%;
  left: 7%;
  transform: translateY(-50%);
  border: none;
  background: none;
  cursor: pointer;
`;

const BtnNext= styled.button`
  position: absolute;
  top: 50%;
  right: 7%;
  transform: translateY(-50%);
  border: none;
  background: none;
  cursor: pointer;
`;


const ButtonContainer = styled.div`
  display: flex; 
  justify-content: center;
  align-items: center; 
  margin: 10px 30px;
  gap: 6px;
`;
// 호스트.ver
const BtnLogout = styled.button`
  width: 98px;
  height: 46px;
  background: #FFF;
  border-radius: 0px;
  font-size: 13px;
  cursor: pointer; 
  font-family: "DungGeunMo";
`;
const BtnIcon = styled.button`
  width: 152px; 
  height: 46px;
  background: linear-gradient(180deg, #FF8CAF 0%, #FFF 85.29%);
  border-radius: 0px;
  font-size: 13px;
  cursor: pointer; 
  font-family: "DungGeunMo";
`;

const BtnShare = styled.button`
  width: 66px;
  height: 46px;
  background: #FFF;
  border-radius: 0px;
  font-size: 13px;
  cursor: pointer; 
  font-family: "DungGeunMo";
`;
// 게스트.ver
const BtnDiary = styled.button`
  width: 172px;
  height: 46px;
  background: #FFF;
  border-radius: 0px;
  font-size: 13px;
  cursor: pointer; 
  font-family: "DungGeunMo";
`;
const BtnFolder = styled.button`
  width: 152px; 
  height: 46px;
  background: linear-gradient(180deg, #FF8CAF 0%, #FFF 85.29%);
  border-radius: 0px;
  font-size: 13px;
  cursor: pointer; 
  font-family: "DungGeunMo";
`;

const HomePage = () => {
  
  const navigate = useNavigate();
  
  return (
    <MainBody>

      <TitleContainer>
      <Title> 주희의 </Title>
      <Sub_Title> 미니홈피 </Sub_Title>
      </TitleContainer>

      <Img src={IntWin} alt='InternetWindow'/>
        <BtnPre> <img src={pre}/> </BtnPre>
        <BtnNext> <img src={next}/> </BtnNext>
      

    {/* 호스트.ver */}
    <ButtonContainer>
      <BtnLogout> 로그아웃 </BtnLogout>
      <BtnIcon> 아이콘 남기기 </BtnIcon>
      <BtnShare> <img src={Share}/> </BtnShare>
    </ButtonContainer>

    {/* 게스트.ver */}
    {/* <ButtonContainer>
      <BtnDiary> 내 미니홈피 만들러 가기</BtnDiary>
      <BtnFolder> 폴더 만들기 </BtnFolder>
    </ButtonContainer> */}
    
    </MainBody>
  )
}

export default HomePage