import Diary from '../components/Diary';
import styled from 'styled-components';
import folderIcon  from '../assets/DiaryPage/folderIcon.svg';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import UserInfo from '../api/UserInfo';
import back from '../assets/DiaryPage/back.png';
import { useNavigate } from 'react-router-dom';


const Title = styled.div`
  margin: 23px 0;
  color: #000;
  text-align: center;
  font-family: NeoDunggeunmo;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 40px 20px 170px 20px 40px;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  background: linear-gradient(180deg, rgba(126, 246, 255, 0.40) 0.01%, rgba(255, 255, 255, 0.40) 21.42%, rgba(255, 255, 255, 0.40) 89.33%, rgba(126, 246, 255, 0.40) 99.99%);
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
`

const FolderIcon= styled.img`
  justify-self: end;
`;

const Img = styled.img`
  width: 7.5px;
  padding-right: 50px;
`

const DiaryPage = () => {

  const { index } = useParams();
  const iconIndex = parseInt(index) + 1;

  const { id } = useParams();

  const [name, setName] = useState('');

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/home');
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userInfo = await UserInfo();
        const name = userInfo.principalDetails.name;
        setName(name);
      } catch (error) {
        console.error('사용자 정보를 가져오는 데 실패했습니다:', error);
      }
    };

    fetchUserInfo();
  }, []);

  return (
      <Container>
      <GridContainer>
        <Img src={back} onClick={handleBackClick} alt="Back"/>
        <FolderIcon src={folderIcon} alt='folderIcon'/>
        <Title>{name}의 {iconIndex}번째 아이콘</Title>
        <img src={folderIcon} alt='folderIcon'/>
      </GridContainer>
      <Diary myimage_id={id}/>
      </Container>
    
  )
}

export default DiaryPage