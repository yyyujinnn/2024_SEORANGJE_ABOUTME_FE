import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import IntWin from '../assets/HomePage/IntWin.png';
import DiaryName from '../assets/HomePage/DiaryName.png'
import pre from '../assets/HomePage/HomePre.svg';
import next from '../assets/HomePage/HomeNext.svg';
import Share from '../assets/HomePage/Share.svg';
import { Folder } from '../Components/HomePage/Folder';

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
  height: 82px;
  font-size: 24px;
  margin-top: 70px;
  gap: 5px;
`;

const NameImg = styled.img`
  display: flex;
  align-items: center;  
  margin-top: -22px;
  z-index: 1;
`;

const Title = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center; 
  font-size: 20px;
  width: 81px;
  height: 34px;
  border-radius: 28px;
  border: 1px solid #000;
  background: linear-gradient(180deg, #7EF6FF 0%, #FFF 100%);
  z-index: 2;
`

const Sub_Title = styled.div`
  position: fixed;
  margin-top: 40px;
  font-size: 40px;
  color: #FFF;
  text-shadow:
    -1px -1px 0 #000,  
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
`;

const FolderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%; /* Folder의 너비를 100%로 설정 */
  height: 600px;
`;

const Img = styled.img`
  margin-top: 35px;
  position: fixed;
  z-index: 1;
`;

const BtnPre = styled.button`
  position: absolute;
  top: 50%;
  left: 7%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
  z-index: 3;
`;

const BtnNext= styled.button`
  position: absolute;
  top: 50%;
  right: 7%;
  transform: translateY(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;  
  z-index: 3;
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

  const handleSignupClick = () => {
    navigate(`/sign-up`);
  };
  
  const handleMakingClick = () => {
    navigate(`/making`);
  };
  
  return (
    <MainBody>

      <TitleContainer>
        <NameImg src={DiaryName}/>
        <Title> 주희의 </Title>
        <Sub_Title> 미니홈피 </Sub_Title>
      </TitleContainer>

      <FolderContainer>
        <Img src={IntWin} alt='InternetWindow'/>
        <BtnPre> <img src={pre}/> </BtnPre>
        <BtnNext> <img src={next}/> </BtnNext>
        <Folder/>
      </FolderContainer>

    {/* 호스트.ver */}
    {/* <ButtonContainer>
      <BtnLogout> 로그아웃 </BtnLogout>
      <BtnIcon> 아이콘 남기기 </BtnIcon>
      <BtnShare> <img src={Share}/> </BtnShare>
    </ButtonContainer> */}

    {/* 게스트.ver */}
    <ButtonContainer>
      <BtnDiary onClick={handleSignupClick}> 내 미니홈피 만들러 가기</BtnDiary>
      <BtnFolder onClick={handleMakingClick}> 폴더 만들기 </BtnFolder>
    </ButtonContainer>
    
    </MainBody>
  )
}

export default HomePage