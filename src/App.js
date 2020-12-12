import './App.css';
// import video from './paintbg.mp4';
import video from './paintvidsmall.mp4';

function App() {
  return (
    <div className="App">
        <video autoPlay loop muted>
          <source src={video} type="video/mp4"/>
        </video>
        <nav className="nav-container">
        <h1>Yukari Levine</h1>
        <ul>
          <li>Services</li>
          <li>Clients</li>
          <li>Contact</li>
        </ul>
        </nav>
    </div>
  );
}

export default App;
