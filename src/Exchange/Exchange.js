import './Exchange.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Exchange() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className='contentbox'>
          {/*밑 코드는 후에 Api데이터로 대체*/}
          <div className='chart'>
            <div className='chart_header'>
              <div className='chart_name'><h1>어쩔코인</h1></div>
              <div className='chart_price'>
                <h2 className='now_price'>100000 G-coin</h2>
                <p className='change_price'>전일대비: +0.00% +0 G-coin</p>
              </div>
            </div>
            <div className='chart_graph'>
              <h1>대충 그래프</h1>
              <p>아 암튼 그래프임</p>
            </div>
          </div>
          <div className='coinlist_container'>
            <div className='listing_method'>
              <button id="yourcoin" className='method'>코인목록</button>
              <button id="mycoin" className='method'>보유코인</button>
            </div>
            <div className='coin_list'>
              <div className='list_header'>
                <div className='list_name'>
                  <p>한글명</p>
                </div>
                <div className='list_price'>
                  <p>현재가</p>
                </div>
                <div className='list_change_price'>
                  <p>전일대비</p>
                </div>
                <div className='list_volum'>
                  <p>거래대금</p>
                </div>
              </div>
              {/*밑 코드는 후에 Api데이터로 대체*/}
              <div className='coins'>
                <div className='coin'>
                  <div className='coin_name'>
                    <p>비트코인</p>
                  </div>
                  <div className='coin_price'>
                    <p>100,000,000</p>
                  </div>
                  <div className='coin_change_price'>
                    <p>+0.00%</p>
                  </div>
                  <div className='coin_volum'>
                    <p>100,000백만</p>
                  </div>
                </div>
                <div className='coin'>
                  <div className='coin_name'>
                    <p>이더리움</p>
                  </div>
                  <div className='coin_price'>
                    <p>200,000,000</p>
                  </div>
                  <div className='coin_change_price'>
                    <p>+0.00%</p>
                  </div>
                  <div className='coin_volum'>
                    <p>200,000백만</p>
                  </div>
                </div>
                <div className='coin'>
                  <div className='coin_name'>
                    <p>샌드박스</p>
                  </div>
                  <div className='coin_price'>
                    <p>300,000,000</p>
                  </div>
                  <div className='coin_change_price'>
                    <p>+0.00%</p>
                  </div>
                  <div className='coin_volum'>
                    <p>300,000백만</p>
                  </div>
                </div>
                <div className='coin'>
                  <div className='coin_name'>
                    <p>디센트럴랜드</p>
                  </div>
                  <div className='coin_price'>
                    <p>400,000,000</p>
                  </div>
                  <div className='coin_change_price'>
                    <p>+0.00%</p>
                  </div>
                  <div className='coin_volum'>
                    <p>400,000백만</p>
                  </div>
                </div>
                <div className='coin'>
                  <div className='coin_name'>
                    <p>코인5</p>
                  </div>
                  <div className='coin_price'>
                    <p>500,000,000</p>
                  </div>
                  <div className='coin_change_price'>
                    <p>+0.00%</p>
                  </div>
                  <div className='coin_volum'>
                    <p>500,000백만</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
    //여기까지 JSX
  );
}

export default Exchange;