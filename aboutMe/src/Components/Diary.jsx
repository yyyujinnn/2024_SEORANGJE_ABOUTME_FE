import Masonry from 'react-masonry-css';
import DiaryFrame from '../assets/DiaryPage/diary.svg';
import { dummyData } from '../api/diary/diaryDummy';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
`;

const Frame = styled.img`
  position: absolute;
  z-index: -1;
`;

const ImageCardBaseStyle = {
  marginBottom: '16px',
  overflow: 'hidden',
  textAlign: 'center',
};

const StyledImage = styled.img`
  object-fit: cover;
  display: block;
`;

const Title = styled.p`
  margin-top: 18px;
  padding: 0 8px;
  color: #FFC700;
  text-align: center;
  -webkit-text-stroke-width: 0.3px;
  -webkit-text-stroke-color: #000;
  font-family: "S-CoreDreams";
  font-size: 11px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

const breakpointColumnsObj = {
  default: 2,
};

const getImageCardStyle = (index) => {
  switch (index) {
    case 0:
      return { ...ImageCardBaseStyle, width: '150px' }; 
    case 1:
      return { ...ImageCardBaseStyle, width: '150px' }; 
    case 2:
      return { ...ImageCardBaseStyle, width: '150px' }; 
      case 3:
      return { ...ImageCardBaseStyle, width: '157px' }; 
      case 4:
      return { ...ImageCardBaseStyle, width: '136px' }; 
    default:
      return { ...ImageCardBaseStyle, width: '150px' }; 
  }
};

const Diary = () => {
  return (
    <Container>
      <Frame src={DiaryFrame} alt="DiaryFrame" />
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {dummyData.map((item, index) => (
          <div key={index} className={`my-masonry-grid_item arry${index}`} style={getImageCardStyle(index)}>
            <StyledImage src={item.imageUrl} alt={item.title} />
            <Title>{item.title}</Title>
          </div>
        ))}
      </Masonry>
      </Container>
  );
};

export default Diary;
