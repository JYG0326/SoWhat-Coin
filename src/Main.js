import './App.css';
import Header from './Header';
import Footer from './Footer';

function Main() {

  return (
    <div className="App">
      <Header />
      <main>
        <img alt='배경화면' src='./background.png' />
        <div className='textbox'>
          <h1>GSM의 소식을 누구보다 빨리 접할 수 있는 디지털 자산 거래소</h1>
          <p>안전하고 투명한 시스템으로 빠르고 정확한 정보들을 제공합니다</p>
        </div>
        <div className='nowcoins'>
          <p className='bold'>현제 코인 수량</p>
          <h1>0</h1>
          <p>Coins</p>
        </div>
        <button className='M_btn1'>거래소 둘러보기</button>
        <button className='M_btn2'>로그인</button>
      </main>
      <Footer />
    </div>
    //여기까지 JSX
  );
}

export default Main;
