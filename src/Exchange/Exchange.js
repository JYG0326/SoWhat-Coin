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

          </div>
          <div className='order'>

          </div>
          <div className='coinlist_container'>
            <div></div>
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
                    <p>코인1</p>
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
                    <p>코인2</p>
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
                    <p>코인3</p>
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
                    <p>코인4</p>
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