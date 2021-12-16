import './Register.css';
import { createPortal } from "react-dom";

function Register() {
  return createPortal(
    <div className='Modal_register'>
        <img alt='어쩔코인_로고' src='../logo.png' />
        <h4>회원가입</h4>
        <div>
        <p>아이디</p>
        <input id="inputid" className="popupinput" type="text" placeholder=" 아이디를 입력하세요" />
        </div>
        <div>
        <p>비밀번호</p>
        <input id="inputpw" className="popupinput" type="text" placeholder=" 비밀번호를 입력하세요" />
        </div>
        <button className='btn'>로그인</button>
    </div>,
    document.getElementById("register")
  );
}

export default Register;