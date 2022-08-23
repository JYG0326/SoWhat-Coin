import './Login.css';
import { createPortal } from "react-dom";
import { Component } from 'react/cjs/react.production.min';

class Code extends Component {

  render() {
    const { closeCode } = this.props;
    return createPortal(
      <div className='background'>
        <div className='Modal_login'>
          <img alt='어쩔코인_로고' src='../logo.png' />
          <h4>QR코드를 스캔해서<br />어쩔코인을 직접 즐겨보세요!</h4>
          <div className='inputframe'>
            <img src='sowhatcoin.png' className='unknown' />
          </div>
          <button className="closebtn" onClick={closeCode} >X</button>
        </div>
      </div>,
      document.getElementById("code")
    );
  }
}

export default Code;