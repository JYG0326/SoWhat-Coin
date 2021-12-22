import './Exchange.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Exchange() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className='contentbox'>
          <div className='chart'>

          </div>
          <div className='askprice'>
            <div className='listing_method'>
              <button id="commonprice" className='method'>일반호가</button>
              <button id="accumulateprice" className='method'>누적호가</button>
            </div>
          </div>
          <div className='order'>
            <div className='listing_method'>
              <button id="buy" className='method'>매수</button>
              <button id="sell" className='method'>매도</button>
            </div>
          </div>
          <div className='coinlist_container'>
            <div className='listing_method'>
              <button id="yourcoin" className='method'>원화거래</button>
              <button id="mycoin" className='method'>보유코인</button>
            </div>
            <div className='coinlist'>
              <div className='list_header'>
                <div className='coin_name'>
                  <p>한글명</p>
                </div>
                <div className='coin_price'>
                  <p>현재가</p>
                </div>
                <div className='coin_change_price'>
                  <p>전일대비</p>
                </div>
                <div className='coin_volum'>
                  <p>거래대금</p>
                </div>
              </div>
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