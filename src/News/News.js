import './News.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function News() {
  
  return (
    <div className="App">
      <Header />
      <main>
        <div className='N_contents1'>
          <h2>글 목록</h2>
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
          <p>※코인동향에 올라온 일부 글들은 실제 코인시세에 영향을 미칠 수 있습니다※</p>
        </div>
        <div className='N_contents2'>
          <h2>내가 보았거나 알고있는 재미있는 소식을 코인으로 만들고 싶다면?</h2>
          <div>
            <input type='text' className='input_title' placeholder='소식의 제목을 입력해주세요!' />
            <br />
            <textarea rows="25" className='input_text' cols="75" placeholder='제보할 내용을 입력해주세요!' />
            <br />
            <button className="btn">제보하기</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
    //여기까지 JSX
  );
}

export default News;