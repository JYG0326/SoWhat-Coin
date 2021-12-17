import './Register.css';
import { createPortal } from "react-dom";

function Register({closeRegister}) {
  return createPortal(
    <div className='Modal_register'>
        <img alt='어쩔코인_로고' src='../logo.png' />
        <h4>회원가입</h4>
        <div className='inputframe'>
        <p>이메일</p>
        <input className="popupinput" type="text" placeholder="이메일을 입력하세요" />
        </div>
        <div className='inputframe'>
        <p>이름</p>
        <input className="popupinput" type="text" placeholder="이름을 입력하세요" />
        </div>
        <div className='inputframe'>
        <p>비밀번호</p>
        <input className="popupinput" type="password" placeholder="비밀번호를 입력하세요" />
        </div>
        <div className='inputframe'>
        <p>비밀번호 확인</p>
        <input className="popupinput" type="password" placeholder="비밀번호를 다시 입력하세요" />
        </div>
        <button className='btn submitbtn'>회원가입</button>
        <button className="closebtn" onClick={closeRegister}>X</button>
    </div>,
    document.getElementById("register")
  );
}

export default Register;