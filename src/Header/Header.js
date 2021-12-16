import { useState } from "react";
import './Header.css';
import Login from "../Modal/Login/Login";
import Register from "../Modal/Register/Register";

function Header() {
  const [loginShowing, setLoginShowing] = useState(false);
  const openLogin = () => {
    setLoginShowing(true);
  };
  const [registerShowing, setRegisterShowing] = useState(false);
  const openRegister = () => {
    setRegisterShowing(true);
  };
  return (
    <header>
      <nav className='H_nav'>
        <div className='logo_interface'><img alt='어쩔코인_로고' src="./logo.png" /></div>
        <ul className='function_interface'>
          <li>거래소</li>
          <li>투자내역</li>
          <li>코인동향</li>
        </ul>
        <ul className='login_interface'>
          <button><li onClick={openLogin}>로그인</li></button>
          <button><li onClick={openRegister}>회원가입</li></button>
        </ul>
      </nav>
      <div>{loginShowing && <Login />}</div>
      <div>{registerShowing && <Register />}</div>
    </header>
    
  );
}

export default Header;