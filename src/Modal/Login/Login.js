import './Login.css';
import { createPortal } from "react-dom";

function Login({closeLogin}) {
  return createPortal(
    <div className='Modal_login'>
        <img alt='어쩔코인_로고' src='../logo.png' />
        <h4>로그인</h4>
        <div className='inputframe'>
        <p>이메일</p>
        <input className="popupinput" type="text" placeholder="이메일을 입력하세요" />
        </div>
        <div className='inputframe'>
        <p>비밀번호</p>
        <input className="popupinput" type="password" placeholder="비밀번호를 입력하세요" />
        </div>
        <button className='btn submitbtn'>로그인</button>
        <button className="closebtn" onClick={closeLogin}>X</button>
    </div>,
    document.getElementById("login")
  );
}

export default Login;