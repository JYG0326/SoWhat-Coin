import './News.css';
import axios from 'axios';
import React, { useState, useEffect } from "react";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function News() {

  const [data, setData] = useState([{ id: 1, title: '불러오는중', description: "불러오는중", tag: '불러오는중', create_at: "불러오는중" }])

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('/issue/getAll')
      console.log(response.data)
      setData(response.data)
      console.log({ data })
    }
    fetchUsers()
  }, [])

  function postWrite() {
    fetch('/issue/write', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: {title},
        description: {description},
        tag: "김동동코인",
      }),
    })
      .then(response => response.json())
      .then(response => {
        console.log(response)
        if (response === true) {
          return alert('글 등록에 성공하였습니다!')
        }

        if (response !== true) {
          return alert('글 등록에 실패하였습니다.')
        }
      })
  }


    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [tag, setTag] = useState("")

    const handleTitle = e => {
      const { value, name } = e.target
      setTitle({[name]:value})
    }

    const handleDescription = e => {
      const { value, name } = e.target
      setDescription({[name]:value})
    }

    const handleTag = e => {
      const { value, name } = e.target
      setTag({[name]:value})
    }

    return (
      <div className="App">
        <Header />
        <main>
          <div className='N_contents1'>
            <h2>글 목록</h2>
            <div className='writing_list'>
              {data.map(data => (
                <div key={data.id} className="write_list">
                  <h3 className='list_coin'>{data.tag}</h3>
                  <div className="list_title">{data.title}</div>
                  <span className='uptime'>{data.create_at}</span>
                  <div>{data.description}</div>
                </div>
              ))}
            </div>
            <p>※코인동향에 올라온 일부 글들은 실제 코인시세에 영향을 미칠 수 있습니다※</p>
          </div>
          <div>
          </div>
          <div className='N_contents2'>
            <h2>내가 보았거나 알고있는 재미있는 소식을 <br /> 코인으로 만들고 싶다면?</h2>
            <div>
              <input type='text' className='input_title' name="title" onChange={handleTitle} placeholder='소식의 제목을 입력해주세요!' />
              <br />
              <input type='text' className='input_title' name="title" onChange={handleTag} placeholder='관련된 코인을 입력해주세요!' />
              <br />
              <textarea rows="23" className='input_text' name="description" cols="75" onChange={handleDescription} placeholder='제보할 내용을 입력해주세요!' />
              <br />
              <button className="btn" onClick={postWrite}>제보하기</button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
      //여기까지 JSX
    );
  }

  export default News;