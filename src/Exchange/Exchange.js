import './Exchange.css';
import io from "socket.io-client";
import React, { useState, useEffect } from "react";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import HighCharts from './High';

const socket = io.connect("http://192.168.0.117:3001");

function Exchange() {

  const [data, setData] = useState([])
  const [chart, setChart] = useState([])
  const [title, setTitle] = useState('불러오는중...')
  const [price, setPrice] = useState('불러오는중...')


  useEffect(() => {
    socket.emit('msgToServer')
    socket.on('msgToClient', (response) => {
      setChart(response.data)
      console.log(response.data)
    })
  }, [])

  const clickHandler = (num, e) => {
    socket.on('msgToClient', (response) => {
    setData([0])
    setData(response.data[num].chartdata)
    console.log(response.data)
    setTitle(response.data[num].name)
    setPrice(response.data[num].price)
    e.preventDefault();
    })
  }


  return (
    <div className="App">
      <Header />
      <main>
        <div className='contentbox'>
          <div className='chart'>
            <div className='chart_header'>
              <div className='chart_name'><h1>{title}</h1></div>
              <div className='chart_price'>
                <h2 className='now_price'>{price} G-coin</h2>
                <p className='change_price'>전일대비: +0.00% +0 G-coin</p>
              </div>
            </div>
            <div className='chart_graph'>
              <HighCharts data={data} />
            </div>
          </div>
          <div className='coinlist_container'>
            <div className='listing_method'>
              <button id="yourcoin" className='method'>코인목록</button>
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
              <div className='coins'>
                {chart.map((data, index) => (
                  <div key={index} className="coin">
                    <div className="coin_name" value={data.id} onClick={(e)=>{clickHandler(data.id-1, e)}}>
                      <p>{data.name}</p>
                    </div>
                    <div className="coin_price">
                      <p>{data.price}</p>
                    </div>
                    <div className='coin_change_price'>
                      <p>준비중..</p>
                    </div>
                    <div className='coin_volum'>
                      <p>준비중..</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main >
      <Footer />
    </div >
    //여기까지 JSX
  );
}

export default Exchange;