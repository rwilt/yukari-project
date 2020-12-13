import './App.css';
// import video from './paintbg.mp4';
import video from './cloudy.mp4';

function App() {
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
          <li><a href="/">Clients</a></li>
          <li><a href="/">Contact</a></li>
          <br/>

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
            <p>site design by <a className="rosie" href="http://www.rosie-wilt.com">rosie wilt</a></p>
          </div>
    </div>
  );
}

export default App;
