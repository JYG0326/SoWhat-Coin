import './Register.css';
import { createPortal } from "react-dom";
import { Component } from 'react/cjs/react.production.min';

class Register extends Component  {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
    }
  }

  handleJoin = () => {
    fetch('/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then(response => response.json())
      .then(response => {
        console.log(response)
        if (response.signupSucc === true) {
          alert('회원가입에 성공하였습니다')
          window.location.replace('/')
        }

        if (response.signupSucc !== true) {
          alert('회원가입에 실패하였습니다.')
        }
      })
  }

  handleInput = e => {
    const { value, name } = e.target
    this.setState({ [name]: value })
  }

  render() {
    const {closeRegister} = this.props;
    return createPortal(
      <div className='Modal_register'>
        <img alt='어쩔코인_로고' src='../logo.png' />
        <h4>회원가입</h4>
        <div className='inputframe'>
          <p>이메일</p>
          <input className="popupinput" name="email" type="text" placeholder="이메일을 입력하세요" onChange={this.handleInput} />
        </div>
        <div className='inputframe'>
          <p>이름</p>
          <input className="popupinput" name="name" type="text" placeholder="이름을 입력하세요" onChange={this.handleInput} />
        </div>
        <div className='inputframe'>
          <p>비밀번호</p>
          <input className="popupinput" name="password" type="password" placeholder="비밀번호를 입력하세요" onChange={this.handleInput} />
        </div>
        <div className='inputframe'>
          <p>비밀번호 확인</p>
          <input className="popupinput" type="password" placeholder="비밀번호를 다시 입력하세요" />
        </div>
        <button className='btn submitbtn' onClick={this.handleJoin}>회원가입</button>
        <button className="closebtn" onClick={closeRegister}>X</button>
      </div>,
      document.getElementById("register")
    );
  }
}

export default Register;