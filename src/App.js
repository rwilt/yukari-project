import './App.css';
import React, {useState, useEffect} from 'react';
// import video from './paintbg.mp4';
import video from './cloudy.mp4';
import {NavLink, Link} from 'react-router-dom';
import Clients from './Clients'
import { Switch, BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
let [clientList, setClientList] = useState(["Porter Japan", "Yan Yan Knits", "WR", "Paper Project", "Kuro", "DAR"])

  return (
    <div className="App">
        <video autoPlay loop muted>
          <source src={video} type="video/mp4"/>
        </video>
        <nav className="nav-container">
        <h1>Yukari Levine</h1>
 
        <ul>
          {/* change the below to nav links- make sure all have target-blank.
          try page transitions?  */}

          <li><a href="/">Services</a></li>
          <li><NavLink to="/clients">Clients</NavLink></li>
          <li><a href="/">Contact</a></li>
          <br/>
          <Route path="/clients">
          <Clients
          clientList={clientList}/>
          </Route>

        </ul>
        </nav>
        {/* 
          list of brands. need logos from Yukari. i dont know if this should be on the main page...
          or maybe it should be cute images
          <div className="brands-front-page">
          <img className="brand-logo" src="https://cdn.shopify.com/s/files/1/0076/6505/7828/files/header_icon_black_170x@2x.png?v=1558382505" alt="brand-logo"/>
          <img className="brand-logo" src="https://www.yoshidakaban.com/special/img/kyo/imgLOGO.png?20171117" alt="porter-logo"/>
          <img className="brand-logo" src="https://cdn.shopify.com/s/files/1/0061/4455/7146/t/11/assets/pf-a58c84f2--PPlogo.png?v=1602092577" alt="paper-project-logo"/>
          <img className="brand-logo" src="https://kurodenim.com/shop-logo.png" alt="kuro logo"/>
          </div> */}
          <div className="credit">
            {/* remove hover effect on my name? change the font style entirely? idk.  */}
            <p className="site-info">site design & development by <a className="rosie" href="http://www.rosie-wilt.com">rosie wilt</a></p>
            {/* <p>video by lisa fotios</p> */}
          </div>
    </div>
  );
}

export default App;
