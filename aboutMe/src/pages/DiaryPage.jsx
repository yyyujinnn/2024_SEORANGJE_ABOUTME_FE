import Diary from '../../components/Diary'

const DiaryPage = () => {

  return (
    <main style={{ display: 'flex', flexDirection: 'column',alignItems:'center'}}>
      <div style={{margin: '23px 0', fontSize: '20px'}}>주희의 교환일기</div>
      <Diary />
    </main>
    
  )
}

export default DiaryPage