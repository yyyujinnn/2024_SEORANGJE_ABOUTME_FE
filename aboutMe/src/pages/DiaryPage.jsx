import DiaryFrame from '../../src/assets/diary.svg'

const DiaryPage = () => {
  return (
    <main>
      <div style={{margin: '23px 0', fontSize: '20px'}}>주희의 교환일기</div>
      <img src={DiaryFrame} alt='DiaryFrame'/>
      <div style={{ backgroundColor: 'gray', width: '149px', height:'149px', position:'absolute', top: '77px', left: '30px' }}>사진1</div>
      <p style={{position:'absolute', top: '230px', left: '59px'}}>너랑 어울리는 과일</p>
      <div style={{ backgroundColor: 'gray', width: '150px', height:'153px', position:'absolute', top: '111px', left: '214px' }}>사진2</div>
      <p style={{position:'absolute', top: '270px', left: '241px'}}>너랑 어울리는 계절</p>
      <div style={{ backgroundColor: 'gray', width: '162px', height:'164px', position:'absolute', top: '309px', left: '51px' }}>사진3</div>
      <p style={{position:'absolute', top: '487px', left: '86px'}}>너랑 어울리는 과일</p>
      <div style={{ backgroundColor: 'gray', width: '136px', height:'136px', position:'absolute', top: '556px', left: '28px' }}>사진4</div>
      <p style={{position:'absolute', top: '694px', left: '61px'}}>너랑 어울리는 과일</p>
      <div style={{ backgroundColor: 'gray', width: '157px', height:'157px', position:'absolute', top: '555.77px', left: '208.69px' }}>사진5</div>
      <p style={{position:'absolute', top: '716px', left: '224px'}}>너랑 어울리는 과일</p>
    </main>
  )
}

export default DiaryPage