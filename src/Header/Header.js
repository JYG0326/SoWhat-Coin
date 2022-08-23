import { useState } from "react";
import { Link } from 'react-router-dom';
import './Header.css';
import Code from "../Modal/QR/Code";

function Header() {
  const moveMain = () => {
    window.location.href = "/";
  };
  const [codeShowing, setCodeShowing] = useState(false);
  const openCode = () => {
    setCodeShowing(true);
  };
  const closeCode=() => {
    setCodeShowing(false);
  };

  return (
    <header>
      <nav className='H_nav'>
        <div className='logo_interface'><img alt='어쩔코인_로고' src="./logo.png" className='logo' onClick={moveMain} /></div>
        <ul className='function_interface'>
          <Link to="/Exchange"><li class='link exchange'>거래소</li></Link>
          <Link to="/News"><li class='link news'>코인동향</li></Link>
        </ul>
        <div className='link_download' onClick={openCode}>QR코드 다운로드</div>
      </nav>
      {codeShowing && <Code />}
      {codeShowing && <Code closeCode={closeCode} />}
    </header>
  );
}

export default Header;