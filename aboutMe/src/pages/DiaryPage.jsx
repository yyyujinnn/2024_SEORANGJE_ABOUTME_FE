import Diary from '../../components/Diary';
import styled from 'styled-components';
import folderIcon  from '../assets/DiaryPage/folderIcon.svg';

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
  grid-template-columns: 0.1fr 1fr 0.1fr;
  gap: 10px;
  align-items: center;
`;

const DiaryPage = () => {

  return (
    <main style={{ display: 'flex', flexDirection: 'column',alignItems:'center'}}>
      
      <GridContainer>
        <img src={folderIcon} alt='folderIcon'/>
        <Title>주희의 첫 번째 아이콘</Title>
        <img src={folderIcon} alt='folderIcon'/>
      </GridContainer>
      <Diary />
    </main>
    
  )
}

export default DiaryPage