import './News.css';
import axios from 'axios';
import React, { useState, useEffect } from "react";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function News() {

  const [data, setData] = useState([{ id: 1, title: '불러오는중...', description: "불러오는중...", tag: '불러오는중...', create_at: "불러오는중..." }])

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('http://210.111.218.36:3001/issue/getAll')
      setData(response.data)
      console.log(response.data)
    }
    fetchUsers()
  }, [])

  return (
    <div className="App">
      <Header />
      <main>
        <div className='N_contents'>
          <div className='N_title'>
            <h2>코인동향 글 목록</h2>
            <p>※코인동향에 올라온 일부 글들은 실제 코인시세에 영향을 미칠 수 있습니다※</p>  
          </div>
          <div className='writing_list'>
            {data.reverse().map(data => (
              <div key={data.id} id={"card"+data.id} className="writebox">
                <h3 className='boxname'>{data.tag}</h3>
                <div className="boxtitle">{data.title}</div>
                <span className='boxtime'>2022-04-27</span>
                <div className='boxcontent'>{data.description}</div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
    //여기까지 JSX
  );
}

export default News;