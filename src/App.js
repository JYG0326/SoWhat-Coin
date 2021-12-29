import io from "socket.io-client";
import React, { useState, useEffect } from "react";
// import Home from './bitcoin/client'

const socket = io.connect("http://10.120.74.70:3001");

function App() {
  const [chat, setChat] = useState([]);

//받기
  useEffect(() => {
    socket.on('msgToClient', (coinData) => {
      console.log('return', coinData)
    })
  }, [])

  //보내기
  const onMessageSubmit = () => {
    socket.emit('msgToServer');
  }

  //로드
  const renderChat = () => {
    return chat.map(({ name, message }, index) => (
      <div key={index}>
        <h3>
          {name}: <span>{message}</span>
        </h3>
      </div>
    ));
  };

  return (
    <div className="card">
      <form onSubmit={onMessageSubmit}>
        <button>Send Message</button>
      </form>
      <div className="render-chat">
        <h1>Log</h1>
        {renderChat()}
      </div> 
    </div>
  );
}

export default App;