import './News.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function News() {
  return (
    <div className="App">
      <Header />
      <main>
        <div>
          <p>글 목록</p>
        </div>
        <div className='writing_list'>
          <div><p className='list_title'>GSM 기숙사 폭팔! 머무를 곳 잃은 학생들... 학교가 발칵 뒤집혔다.</p><span className='uptime'>1분 전</span></div>
          <div><p className='list_title'>GSM 로켓 1호 발사, 김희철 교장 "우주까지 개척해 광소마의 위상을 널리 알릴것"</p><span className='uptime'>2시간 전</span></div>
          <div><p className='list_title'>GSM 기숙사 폭팔! 머무를 곳 잃은 학생들... 학교가 발칵 뒤집혔다.</p><span className='uptime'>7시간 전</span></div>
          <div><p className='list_title'>GSM 로켓 1호 발사, 김희철 교장 "우주까지 개척해 광소마의 위상을 널리 알릴것"</p><span className='uptime'>12시간 전</span></div>
          <div><p className='list_title'>GSM 기숙사 폭팔! 머무를 곳 잃은 학생들... 학교가 발칵 뒤집혔다.</p><span className='uptime'>14시간 전</span></div>
          <div><p className='list_title'>GSM 로켓 1호 발사, 김희철 교장 "우주까지 개척해 광소마의 위상을 널리 알릴것"</p><span className='uptime'>17시간 전</span></div>
          <div><p className='list_title'>GSM 기숙사 폭팔! 머무를 곳 잃은 학생들... 학교가 발칵 뒤집혔다.</p><span className='uptime'>23시간 전</span></div>
          <div><p className='list_title'>GSM 로켓 1호 발사, 김희철 교장 "우주까지 개척해 광소마의 위상을 널리 알릴것"</p><span className='uptime'>1일 전</span></div>
          <div><p className='list_title'>GSM 기숙사 폭팔! 머무를 곳 잃은 학생들... 학교가 발칵 뒤집혔다.</p><span className='uptime'>1일 전</span></div>
          <div><p className='list_title'>GSM 로켓 1호 발사, 김희철 교장 "우주까지 개척해 광소마의 위상을 널리 알릴것"</p><span className='uptime'>1일 전</span></div>
          <div><p className='list_title'>GSM 기숙사 폭팔! 머무를 곳 잃은 학생들... 학교가 발칵 뒤집혔다.</p><span className='uptime'>3일 전</span></div>
          <div><p className='list_title'>GSM 로켓 1호 발사, 김희철 교장 "우주까지 개척해 광소마의 위상을 널리 알릴것"</p><span className='uptime'>7일 전</span></div>
        </div>
        <div>
          글 작성하기
          
        </div>
      </main>
      <Footer />
    </div>
    //여기까지 JSX
  );
}

export default News;