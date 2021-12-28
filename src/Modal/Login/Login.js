import './Login.css';
import { createPortal } from "react-dom";
import { Component } from 'react/cjs/react.production.min';

class Login extends Component {

  handleJoin = () => {
    fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then(response => response.json())
      .then(response => {
        console.log(response)
        if (response.islogin === true) {
          alert('로그인에 성공하였습니다')
          window.location.replace('/')
        }

        if (response.islogin !== true) {
          alert('로그인에 실패하였습니다.')
        }
      })
  }

  handleInput = e => {
    const { value, name } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const {closeLogin} = this.props;
    return createPortal(
      <div className='Modal_login'>
        <img alt='어쩔코인_로고' src='../logo.png' />
        <h4>로그인</h4>
        <div className='inputframe'>
          <p>이메일</p>
          <input className="popupinput" name="email" type="text" placeholder="이메일을 입력하세요" onChange={this.handleInput} />
        </div>
        <div className='inputframe'>
          <p>비밀번호</p>
          <input className="popupinput" name="password" type="password" placeholder="비밀번호를 입력하세요" onChange={this.handleInput} />
        </div>
        <button className='btn submitbtn' onClick={this.handleJoin}>로그인</button>
        <button className="closebtn" onClick={closeLogin} >X</button>
      </div>,
      document.getElementById("login")
    );
  }
}

export default Login;