import DiaryFrame from '../../src/assets/diary.svg';
import { dummyData } from '../api/diary/diaryDummy';

const DiaryPage = () => {
  const firstDummyData = dummyData[0];
  const secondDummyData = dummyData[1];
  const thirdDummyData = dummyData[2];
  const fourthDummyData = dummyData[3];
  const fifthDummyData = dummyData[4];
  return (
    <main>
      <div style={{margin: '23px 0', fontSize: '20px'}}>주희의 교환일기</div>
      <img src={DiaryFrame} alt='DiaryFrame'/>
      <div style={{ backgroundColor: 'gray', width: '149px', height:'149px', position:'absolute', top: '77px', left: '30px' }}>{firstDummyData.imageUrl}</div>
      <p style={{position:'absolute', top: '230px', left: '59px'}}>{firstDummyData.title}</p>
      <div style={{ backgroundColor: 'gray', width: '150px', height:'153px', position:'absolute', top: '111px', left: '214px' }}>{secondDummyData.imageUrl}</div>
      <p style={{position:'absolute', top: '270px', left: '241px'}}>{secondDummyData.title}</p>
      <div style={{ backgroundColor: 'gray', width: '162px', height:'164px', position:'absolute', top: '309px', left: '51px' }}>{thirdDummyData.imageUrl}</div>
      <p style={{position:'absolute', top: '487px', left: '86px'}}>{thirdDummyData.title}</p>
      <div style={{ backgroundColor: 'gray', width: '136px', height:'136px', position:'absolute', top: '556px', left: '28px' }}>{fourthDummyData.imageUrl}</div>
      <p style={{position:'absolute', top: '694px', left: '61px'}}>{fourthDummyData.title}</p>
      <div style={{ backgroundColor: 'gray', width: '157px', height:'157px', position:'absolute', top: '555.77px', left: '208.69px' }}>{fifthDummyData.imageUrl}</div>
      <p style={{position:'absolute', top: '716px', left: '224px'}}>{fifthDummyData.title}</p>
    </main>
  )
}

export default DiaryPage