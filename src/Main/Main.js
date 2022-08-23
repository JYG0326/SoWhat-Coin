import { useState } from "react";
import './Main.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Main() {
  const moveExchange = () => {
    window.location.href = "/Exchange";
  };
  return (
    <div className="App">
      <Header />
      <main>
        <img alt='배경화면' src='./background.png' />
        <div className='textbox'>
          <h1>GSM의 소식을 누구보다 빨리 접할 수 있는 사이트</h1>
          <p>안전하고 투명한 시스템으로 빠르고 정확한 정보들을 제공합니다</p>
        </div>
        <div className='nowcoins'>
          <p className='bold'>현재 코인 수량</p>
          <h1>10</h1>
          <p>Coins</p>
        </div>
        <button className='M_btn' onClick={moveExchange}>거래소 둘러보기</button>
      </main>
      <Footer />
    </div>
    //여기까지 JSX
  );
}

export default Main;
