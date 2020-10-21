import React from 'react';
import './App.css';


function App() {
  return (
    <div className="container">
      <div className="top">
        <h6 className={'top-of-topStyle'}>고객센터</h6> 
        <pre className={'top-of-topStyle'}>  </pre>
        <h6 className={'top-of-topStyle'}>주문배송</h6> 
        <pre className={'top-of-topStyle'}>  </pre>
        <h6 className={'top-of-topStyle'}>회원가입</h6>
        <pre className={'top-of-topStyle'}>  </pre>
        <h6 className={'top-of-topStyle'}>로그인</h6> 
      </div>

      
      <br/><br/>

      <img className={'logo'} src="logo.PNG" alt="lotte-on logo"></img>

      <form className={'form'}>
        <input className={'search-bar'} type="text" placeholder="물"></input>  

        <input className={'link-bar'} type="image" src="cart.PNG" alt="장바구니"></input>
        <input className={'link-bar'} type="image" src="lotte.PNG" alt="마이롯데"></input>
        <input className={'link-bar'} type="image" src="heart.PNG" alt="나의 찜"></input>
        <input className={'link-bar'} type="image" src="chat.PNG" alt="챗봇"></input>
      </form> 

      <br/><br/>
      
      <hr className={'top-line'}></hr>

      <nav className={'nav'}>
        <input type="image" src="drop.PNG" alt=""></input>
        <a className={'nav-link'} href="#">오늘ON</a>
        <a className={'nav-link'} href="#">타임딜</a>
        <a className={'nav-link'} href="#">장보기</a>
        <a className={'nav-link'} href="#">백화점</a>
        <a className={'nav-link'} href="#">명품ON</a>
        <a className={'nav-link'} href="#">뷰티넘버원</a>
        <a className={'nav-link'} href="#">오늘발송</a>
        <a className={'nav-link'} href="#">내관심</a>
        <a className={'nav-link'} href="#">이벤트존</a>

        <li className="nav-item-dropdown">
         <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           1 &nbsp;&nbsp;&nbsp; 아이시스 8.0 에코
         </a>
        </li>
      </nav>

      <hr className={'bottom-line'}></hr>

    </div>



  );
}

export default App;
  