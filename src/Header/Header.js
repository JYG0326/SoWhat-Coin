import { useState } from "react";
import { Link } from 'react-router-dom';
import './Header.css';
import Login from "../Modal/Login/Login";
import Register from "../Modal/Register/Register";

function Header() {
    const moveMain = () => {
    window.location.href = "/";
  };
  const [loginShowing, setLoginShowing] = useState(false);
  const openLogin = () => {
    setLoginShowing(true);
  };
  const closeLogin=() => {
    setLoginShowing(false);
  };
  const [registerShowing, setRegisterShowing] = useState(false);
  const openRegister = () => {
    setRegisterShowing(true);
  };
  const closeRegister=() => {
    setRegisterShowing(false);
  };
  return (
    <header>
      <nav className='H_nav'>
        <div className='logo_interface'><img alt='어쩔코인_로고' src="./logo.png" onClick={moveMain} /></div>
        <ul className='function_interface'>
          <li><Link to="/Exchange">거래소</Link></li>
          <li>투자내역</li>
          <li><Link to="/News">코인동향</Link></li>
        </ul>
        <ul className='login_interface'>
          <button><li onClick={openLogin}>로그인</li></button>
          <button><li onClick={openRegister}>회원가입</li></button>
        </ul>
      </nav>
      {loginShowing && <Login />}
      {loginShowing && <Login closeLogin={closeLogin} />}
      {registerShowing && <Register />}
      {registerShowing && <Register closeRegister={closeRegister} />}
    </header>
    
  );
}

export default Header;