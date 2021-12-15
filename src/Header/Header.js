import './Header.css';

function Header() {
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
          <li>로그인</li>
          <li>회원가입</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;