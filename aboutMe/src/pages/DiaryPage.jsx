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
  grid-template-columns: 20px 170px 20px;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  background: linear-gradient(180deg, rgba(126, 246, 255, 0.40) 0.01%, rgba(255, 255, 255, 0.40) 21.42%, rgba(255, 255, 255, 0.40) 89.33%, rgba(126, 246, 255, 0.40) 99.99%);
  position: absolute;
  z-index: -1;
  width: 100%
`

const FolderIcon= styled.img`
  justify-self: end;
`;

const DiaryPage = () => {

  return (
    <main style={{ display: 'flex', flexDirection: 'column',alignItems:'center'}}>
      <Container>
      <GridContainer>
        <FolderIcon src={folderIcon} alt='folderIcon'/>
        <Title>주희의 첫 번째 아이콘</Title>
        <img src={folderIcon} alt='folderIcon'/>
      </GridContainer>
      <Diary />
      </Container>
    </main>
    
  )
}

export default DiaryPage